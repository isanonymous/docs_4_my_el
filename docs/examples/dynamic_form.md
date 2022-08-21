## 动态表单例子

[需求描述](https://zhuanlan.zhihu.com/p/48241645)

<img src="https://pic4.zhimg.com/80/v2-769e5568097d19f1d5034a1e0fa25243_1440w.jpg" />

0. 生效方式 选「立即生效」时，选日期的就不要了，选「按时间」时才有「生效日期」

1. 活动类型为「拉新」与「冲单」时，活动还支持「按条件」的生效方式，条件支持「活动人数」「活动天数」「峰值」 (三者为且的关系)

2. 活动类型为「回馈」时，活动只支持「立即生效」和「按时间生效」两种方式

```jsx
<e-form :model="formDep.data" :confs="confs" class="DynamicForm">
  <!-- 需求1的三个条件的输入框 -->
  <template #[form_slot_prefix+confs.conditionInputs.k]>
    <template  v-if="formDep.data.conditionInputs">
      <div class="row" v-for="(item,idx) in formDep.data.conditions" :key="item.id ||idx">
        <div class="label">{{ condi_opts.find(arr=>arr[0]===item)[1] }}</div>
        <el-input-number v-model="formDep.data.conditionInputs[item][0]" :controls="false" />
        <div class="label">至</div>
        <el-input-number v-model="formDep.data.conditionInputs[item][1]" :controls="false" />
      </div>
    </template>
  </template>
</e-form>
```

## 大致步骤:

1. 定义formConfs, 配置字段的label、输入方式(选取/录入)、 初始值、静态props等……
2. 在getProps函数中, 改变表单字段的值 和改变(当前)选择类型组件的字段的opts
3. 通过ifRender来显隐(ifRender函数所属字段的)formItem

`<script setup>`

```js
let initData = {type:1, way:1, dates:undefined, conditions:[1,2,3], conditionInputs:undefined};
let way_opts = [[1,'立即'], [2,'按时间'], [3,'按条件']];
let condi_opts = [[1,'活跃人数'], [2,'活跃天数'], [3,'峰值']];
const array_opts_props = {label:1, value:0 }
function wayCh(val) {
  if(formDep.data.conditionInputs) return  // 只初始化值一次
  if(val===3){  // 需求1, 生效方式为'按条件'时
    formDep.data.conditionInputs = formDep.data.conditions.reduce( (ret,item)=>{
      ret[item] = [null,null]
      return ret
    },{})
  }
}
let confs = {  // val 和props.opts相匹配
  type: {label:'活动类型',type:'r',val:1,props:{opts:[[1,'拉新'], [2,'冲单'], [3,'回馈']], props:array_opts_props} },
  way:{
    label:'生效方式',type:'r',val:1,props:{opts:way_opts, props:array_opts_props, onChange:wayCh},
    getProps(form, stat){
      if( ! [1,2].includes(form.type)){  // 活动类型为'回馈'时; 下面两行实现需求2
        if( form.way===3) form.way = initData.way  // 生效方式为'按条件'时, 改变值为初始值
        return {opts: way_opts.slice(0, -1) }
      }
      return {opts: way_opts}
    },
  },
  conditions:{
    label:'生效条件',type:'c',val:[1,2,3],props:{opts:condi_opts, min:1, props:array_opts_props},
    ifRender(form, stat){ return form.way===3 },  // 需求1
  },
  dates: {
    label:'生效日期',type:'d',val:undefined,props:{type:'daterange',startPlaceholder:"Start date", endPlaceholder:"end date"},
    ifRender:(form,stat)=> form.way===2  // 生效方式选「按时间」时才有「生效日期」; 需求0
  },
  conditionInputs: {label:'', type:slotType(form_slot_prefix), val:undefined
                    ,ifRender:(form,stat)=> form.way===3  },  // 需求1
};
forEach(confs, (v,k)=>{  if( !v.k) v.k = k  })
let formDep = useForm( initData, {reqFns:{add(){}}, theme:'活动'});
```

