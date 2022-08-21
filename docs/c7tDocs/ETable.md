## 主要功能

- 通过v-model的值类型, 或`rowSelection="multiple"`(优先级高)声明式的配置表格单/多选

   1. 单选: `<ETable  v-model="单个值">` , 多选: `<ETable  v-model="数组">`
   2. (优先级比v-model高)rowSelection=  单选: "single" , 多选: `"multiple"`
- 配置方式生成表格列, 支持定制 Ⅰ`<el-table-column>`元素及内容 , Ⅱ`<el-table-column>`内的内容

```js
// Ⅰ
<template #[col_slot_prefix+tblConfs.star.k]="{scope, col}">
  <el-rate v-model="scope.row[col.k]" />
</template>
// Ⅱ
<template #[table_slot_prefix+confs.tableConfs.star02.k]="{vBind, col}">
  <el-table-column v-bind="vBind">
    <template v-slot="scope">
      <el-rate :model-value="scope.row['star']" show-score :score-template="col.k" disabled/>
    </template>
  </el-table-column>
</template>
```



- 显示/隐藏表格列

​       通过修改ETable组件expose的`colControllerShow`(boolean) 的值来实现



## 组件的props

| 属性                      | 说明                                                         | 类型                       | 可选值 =开<br/>头为默认值      |
| ------------------------- | ------------------------------------------------------------ | -------------------------- | ------------------------------ |
| data                      | 同ElTable的data                                              | Array                      |                                |
| confs                     | 列配置, 具体见下表                                           | Array                      |                                |
| itemKey                   | 同ElTable的rowKey // 为了统一                                | String                     | ="id"                          |
| loading                   | v-loading="loading"                                          | Boolean                    | =false                         |
| v-model /<br/> modelValue | 表格的初始选择项<br/>, 需和itemKey配合使用                   | String, Num<br/>ber, Array |                                |
| rowSelection              | 强调/强制配置单/多选<br/>//一般通过v-model的<br/>初始值配置即可 | String                     | ="", "single"<br/>, "multiple" |
| clickSelectionRow         | 多选时通过点击行来选中行                                     | Boolean                    | =true                          |



## props.confs

| 属性     | 说明                                                         | 类型               | 可选值 =开<br/>头为默认值           |
| -------- | ------------------------------------------------------------ | ------------------ | ----------------------------------- |
| k        | 同ElTableColumn的prop, 需唯一                                | String             |                                     |
| label    | 同ElTableColumn的label                                       | String             |                                     |
| w        | 同ElTableColumn的width                                       | String,<br/>Number |                                     |
| colProps | ElTableColumn的除了prop,label,width<br/>以外的属性都配置在此对象中 | Object             |                                     |
| type     | 常用的表格展示类型及两种slot类型                             | String             | "img", "col_slot",<br/>"table_slot" |

