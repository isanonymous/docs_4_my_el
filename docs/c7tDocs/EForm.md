## 主要功能

- 配置方式生成表单项及输入组件, 通过动态props和ifRender(`输入组件的v-bind 和<el-form-item>的v-if`) 实现动态表单
- 支持定制 Ⅰ`<el-form-item>`元素及内容 , Ⅱ`<el-form-item>`内的内容

```js
// Ⅰ
<template #[form_slot_prefix+confs.type.k]>
  <el-form-item :label="confs.type.label" :prop="confs.type.k">
    <ERadio v-bind="confs.type.props" v-model="formDep.data['type']" />
  </el-form-item>
</template>
// Ⅱ
<template #[form_item_slot_prefix+confs.type.k]>
  <ERadio v-bind="confs.type.props" v-model="formDep.data['type']" />
</template>
```





## 组件的props

| 属性    | 说明                         | 类型    | 可选值 =开<br/>头为默认值 |
| ------- | ---------------------------- | ------- | ------------------------- |
| model   | 同ElForm的model              | Object  |                           |
| confs   | 列配置, 具体见下表           | Array   |                           |
| rules   | 同ElForm的rules              | Object  |                           |
| loading | v-loading="loading"          | Boolean | =false                    |
| stat    | 表单的当前状态, 用于动态表单 | String  |                           |



## props.confs

| 属性          | 说明                                                      | 类型               | 可选值 =开<br/>头为默认值                                    |
| ------------- | --------------------------------------------------------- | ------------------ | ------------------------------------------------------------ |
| k             | 同ElFormItem的prop, 需唯一                                | String             |                                                              |
| label         | 同ElFormItem的label                                       | String             |                                                              |
| w             | 同ElFormItem的width                                       | String,<br/>Number |                                                              |
| formItemProps | ElFormItem的除了prop,label<br/>以外的属性都配置在此对象中 | Object             |                                                              |
| type          | 常用的表单输入形式及两种slot类型                          | String             | componentMap<br/>的keys及as<br/> , "form_slot",<br/>"form_item_slot" |



```js
const componentMap = {
 [ElInput.name]:     {c7t: ElInput,   as:['t','text']      },
 ta:                 {c7t: ElInput,   as:['textarea'],   vBind:{type:'textarea'}  },
 [ESelect.name]:{c7t: ESelect,  as:['s','select']
              , vBind:{filterable:true, class:'w100p'}, ...unrefHandler().with_k },
 [ECheckbox.name]:   {c7t: ECheckbox, as:['c','checkbox'] , ...unrefHandler().with_k },
 [ERadio.name]:      {c7t: ERadio,   as:['r','radio']    , ...unrefHandler().with_k },
 d: {c7t: ElDatePicker, as:['d','date'],vBind:{type:'date'} },
 dt: {c7t: ElDatePicker, as:['dt','datetime'],vBind:{type:'datetime'} },
 [ElTimePicker.name]:    {c7t: ElTimePicker,   as:['time']          },
 [ElTreeSelect.name]:{c7t: ElTreeSelect,  as:['ts']
                   , vBind:{props:id_name_props, defaultExpandAll:true}, ...unrefHandler('data').with_k  },

}
```

