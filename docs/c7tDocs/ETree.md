## 主要功能

- 和[表格组件](/c7tDocs/ETable)一样, 支持声明式的配置单/多选

- 通过配置getCheckedType的值来实现4种v-model策略

  Ⅰ 'leafOnly':只获取被选中的叶子节点 // getCheckedKeys(true)

  Ⅱ 'noHalf':获取所有被选中的节点 // getCheckedKeys(false)

  Ⅲ 'hasHalf': Ⅱ和getHalfCheckedKeys()的并集

  Ⅳ Boolean(props.getCheckedType)===false, 在onCheckChange时,无双向绑定行为, v-model的值会作为default-checked-keys属性的值 //单选时(onCurrentChange事件)始终会有双向绑定行为

  > 需监听onCheckChange事件 , 通过`v-bind:onCheckChange="Function"`来实现;
  >
  >  // onCurrentChange事件: 俺也一样

- setRowSelectionOnce (暂未实现)



## 组件的props

| 属性                      | 说明                                                         | 类型                              | 可选值 =开<br/>头为默认值                   |
| ------------------------- | ------------------------------------------------------------ | --------------------------------- | ------------------------------------------- |
| data                      | 同ElTree的data                                               | Array                             |                                             |
| props                     | 同ElTree的props                                              | Object                            | ={children:'children'<br/>, label: 'label'} |
| itemKey                   | 同ElTree的nodeKey<br/> // 为了统一                           | String                            | ="id"                                       |
| loading                   | v-loading="loading"                                          | Boolean                           | =false                                      |
| v-model /<br/> modelValue | 表格的初始选择项<br/>, 需和itemKey配合使用                   | [String<br/>, Number<br/>, Array] |                                             |
| rowSelection              | 强调/强制配置单/多选<br/>//一般通过v-model的<br/>初始值配置即可 | String                            | ="", "single"<br/>, "multiple"              |
| getCheckedType            | v-model的策略                                                | String                            | "leafOnly", <br/>"noHalf", "hasHalf"        |
| onCurrentChange           | 同ElTree的同名事件                                           | Function                          |                                             |
| onCheckChange             | 同ElTree的同名事件                                           | Function                          |                                             |