基本页面 (表格,搜索, 表单)

## HTML部分常用的组件及其常用属性

```jsx
<EFilter :model="filterDep.formData"  // 表单数据对象(reactive)
         :confs="confs.filterConfs"   // 表单项的配置
         :do-search="hooks.firstPageList"  // 搜索按钮对应的函数
      :to-add="hooks.toAdd"  // 添加按钮对应的函数
    :do-reset="filterDep.reset"  // 重置按钮对应的函数
  :mounted-then-search="false"  // 在EFilter组件mounted之后, 是否调用搜索按钮对应的函数(默认true)
></EFilter>

<ETable :data="tableDep.data"  // 同ElTable的同名属性
    :confs="Object.values(confs.tableConfs)"  // 表格列的配置
    v-bind="confs.tableProps"  // 值为cellClassName和cellStyle
    :ref="tableDep.setRef" >
    <OperationsColumn
        :toUpd="hooks.arg_toUpdOneRow"  // 表格的操作列的修改按钮对应的函数
        :delById="hooks.arg_delById"  // 表格的操作列的删除按钮对应的函数
    ></OperationsColumn>
</ETable>

<el-pagination :total="tableDep.total"  // 表格的数据总量
          v-bind="pagProps"  // currentPage,pageSize, 页大小选项select...等
/>
<el-dialog  :title="formDep.title" v-model="formDep.show" draggable  width="500px">
    <EForm :model="formDep.data"  // 表单数据对象(reactive) 同ElForm的同名属性
        :confs="confs.formConfs"  // 表单项的配置
        :rules="confs.formRules"  // 同ElForm的同名属性
    ></EForm>
    <template #footer>
        <el-button @click="formDep.hideForm()">取 消</el-button>
        <el-button type="primary" @click="hooks.doSubmit()">确 定</el-button>
    </template>
</el-dialog>
```

## 大致步骤:

1. 定义一些常量 : theme, (base_)api
2. 定义字段配置对象 (fields)
3. 调用getConfs方法来处理配置, 返回对象中的execTasks方法用来延迟处理配置 (使用之后才产生的变量)
4. 调用hooks函数, 获取crudDep, 然后传入formDep执行execTasks方法
5. 调用useOnion方法, 获取页面中用到的一些方法 (这些方法依赖crudDep中的属性、方法来完成功能)

`<script setup>`

```js
const theme='卡组'  // 1. 页面主题theme, 也是表单对话框title的组成部分
let crudFns = getBaseCrudFn('/card_g');  // 1. 主题theme对应的请求方法容器
// 因为表格数据的formatter用到了网络请求得到的数据, 所有用Promise.all
let cardsCrudFn = getBaseCrudFn('/cards');
let cards = []  // 用于缓存数据
onMounted(()=>{Promise.all([cardsCrudFn.list(), hooks.firstPageList()]).then(([cardResp])=>{
  cards = cardResp.data ||[]
})})
// 缓存空参的请求结果
let cardsList = memoizeOne(cardsCrudFn.list)
onBeforeUnmount(()=>{   cardsList.clear()   })
let cardRemoteDep = useRemoteData(cardsList, r=>r.data)  // 卡组
let extraCardRemoteDep = useRemoteData(cardsList, r=>r.data)  // 额外卡组
// 2. 字段配置对象
let fields = {         // 表单对话框显示后focus
  name: field('卡组名',form({...first_input, rules:ru('请输入${label}', ru.has_visibly_str)})
              , filter({type:'t', props:{style:{width:'130px'}, placeholder:'卡组名'}})),
  cardIds: field('卡组卡片列表',  // 返回值: 使用远程数据的<ESelect>必需的props, 详见源码
    form({type:'s', props:{...getRemoteSelectProps(cardRemoteDep)}   }),
         //根据形参提供的数据, 把值转成对应的文字; 如: ['cn','fr'] =>'中国, 法国'
    table({colProps:{ formatter: getIdsValFmt( ()=>cards)}   })
  ),
  extraCardIds: field('额外卡组卡片列表',
    form({type:'s', props:{...getRemoteSelectProps(extraCardRemoteDep)}   }),
    table({colProps:{ formatter: getIdsValFmt( ()=>cards)}   })
  ),
}       // 3. 解析/处理,然后生成表单/表格/Filter用到的配置, 特殊返回了execTasks,用于延迟处理配置
let confs = getConfs(fields)
let hooks  // 提前声明, crudHooks中会用到其中的函数
// api为Ⅰ字符串(作为getBaseCrudFn的参数) 或Ⅱ对象(结构同getBaseCrudFn返回值)
let crudDep = useCrudHooks({api:'/card_g'
// 4.1 获取crudHooks, 使用这种方式是为了提供crudHook函数的某些参数, 详见源码
, hookFnApplyConfs:getCrudHooksConfs( ()=>hooks, [
    // [usePagination, {args: [{doFetch:()=>hooks.pageList()}] }],
    [useTable, [null, r=>r.data]],
    [useForm, [confs.form_init_val, getFormOptsWaitReqFns({theme})]],
    [useBaseForm, [confs.filter_init_val]],
  ])
})  // 4.2 下面这种获取crudHooks的用法更清晰些
 crudDep = {
  pagDep: usePagination({doFetch: ()=>hooks.pageList()}),
  tableDep: useTable(crudFns.list, getPromiseData),
  formDep:useForm(confs.form_init_val, {reqFns:{add:crudFns.add, upd:crudFns.edit },theme:'卡片'} ),
  filterDep: useBaseForm(confs.filter_init_val, ()=>hooks.firstPageList())
}
// crudHook函数的静态属性prop配置了 下面解构的crudDep对象中的属性名
let { pagDep, tableDep, formDep, filterDep} =crudDep
let [pag,pagProps] = pagDep ||[]
confs.execTasks({formDep, })  // 3. 延迟处理配置
// 5. 
let ctx = createCtx(crudDep)
hooks = useOnion( ctx, {baseHook, customHook:{
    // 调用doSubmit之前查看表单数据
    doSubmit: pretapMidware(ctx=>{ console.log("---ctx.formDep---", ctx.formDep.data);}),
    // 处理<EFilter>搜索用到的参数成jsonServer的格式
    getFetchArgs: [ useOnion.curr_base_hook, async (ctx, next)=>{
      let args = {...ctx.pag, ...ctx.filterDep.formData}
      if(args.name) args['name' + '_like'] = args.name
      args.name = undefined
      return args
    },],
    // 点修改显示表单对话框时, 请求Select用到的数据(用于回显)
    arg_toUpdOneRow:[async (ctx, next)=>{
      cardRemoteDep.doFetch()
      extraCardRemoteDep.doFetch()
      await next()
    }, useOnion.curr_base_hook]
}
})
```



## 细节: 使用远程数据的`<ESelect>`

大致步骤:

1. 声明`<Option>`数据 (`ref`)
2. 数据props配置 和ElSelect配置
3. 发送请求获取`<Option>`数据

代码:

```js
let remoteDep = useRemoteData(cardsList, r=>r.data)
let props = {value:'id', label:'name'}
field('label'           //<Option>数据, 数据props配置, 多选等原生ElSelect配置
  ,form({type:'s', props:{opts:remoteDep.data, props, multiple:true, filterable:true, remote:true, remoteMethod(inputStr){ remoteDep.doFetch( {[props.label]: inputStr} ) } }   })
// 然后在需要回显数据之前, 或者用户点击组件时, 调用remoteDep.doFetch()
```



