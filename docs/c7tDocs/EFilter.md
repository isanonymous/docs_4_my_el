## 主要功能 (类似于EForm)

- 配置方式生成表单项(需要label时)及输入组件, 通过动态props和ifRender(`输入组件的v-bind 和v-if`) 实现动态表单
- 支持定制 Ⅰ 输入组件 ; Ⅱ 声明式的配置输入组件的label

```jsx
// Ⅰ
<template #[filter_slot_prefix+confs.filterConfs.version.k]="{fieldK}">
  <el-input placeholder="版本" v-model="filterDep.formData[fieldK]" />
</template>
// Ⅱ
type: field('类型',
  filter({ hasLabel:true })
```





## 组件的props   // 属性名*开头为required

| 属性              | 说明                                                         | 类型                     | 可选值 =开<br/>头为默认值 |
| ----------------- | ------------------------------------------------------------ | ------------------------ | ------------------------- |
| * model           | 同ElForm的model                                              | Object                   |                           |
| * confs           | 列配置, 具体见下表                                           | Array                    |                           |
| doReset           | 重置表单数据, 不传时隐藏该按钮                               | Function                 |                           |
| * doSearch        | 搜索                                                         | Function                 |                           |
| mountedThenSearch | 组件mounted之后调用<br/>的方法(默认为doSearch)<br/>, 值为false时, 无操作 | [Boolean<br/>, Function] | =true                     |
| toAdd             | 添加, 不传时隐藏该按钮                                       | Function                 |                           |
| showColController | 显示表格列控制器, 不传时隐藏该按钮                           | Function                 |                           |



## props.confs

| 属性          | 说明                                                      | 类型               | 可选值 =开<br/>头为默认值                        |
| ------------- | --------------------------------------------------------- | ------------------ | ------------------------------------------------ |
| k             | 同ElFormItem的prop, 需唯一                                | String             |                                                  |
| label         | 同ElFormItem的label                                       | String             |                                                  |
| w             | 同ElFormItem的width                                       | String,<br/>Number |                                                  |
| hasLabel      | 输入组件的label                                           | Boolean            |                                                  |
| formItemProps | ElFormItem的除了prop,label<br/>以外的属性都配置在此对象中 | Object             |                                                  |
| type          | 常用的表单输入形式及两种slot类型                          | String             | componentMap<br/>的keys及as<br/> , "filter_slot" |



```js
const componentMap = {
  [ElInput.name]:        {c7t: ElInput,            as:['t','text']      },
  ta:                    {c7t: ElInput,            as:['textarea'],   vBind:{type:'textarea'}  },
  [ESelect.name]:        {c7t: ESelect,         as:['s','select'],   vBind:{filterable:true, class:'w100p'}, ...unrefHandler().with_k },
  [ECheckbox.name]:     {c7t: ECheckbox,      as:['c','checkbox'] , ...unrefHandler().with_k },
  [ERadio.name]:        {c7t: ERadio,         as:['r','radio']    , ...unrefHandler().with_k },
  d: {c7t: ElDatePicker, as:['d','date'],vBind:{type:'date'} },
  dt: {c7t: ElDatePicker, as:['dt','datetime'],vBind:{type:'datetime'} },
  [ElTimePicker.name]:    {c7t: ElTimePicker,     as:['time']          },
  [ElTreeSelect.name]:    {c7t: ElTreeSelect,     as:['ts'],  vBind:{props:id_name_props, defaultExpandAll:true}, ...unrefHandler('data').with_k  },

}
```

