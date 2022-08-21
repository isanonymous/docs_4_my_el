## 主函数

- 形参

| 参数名    | 说明                                                         | 类型     |
| --------- | ------------------------------------------------------------ | -------- |
| init_data | 会对其进行深拷贝后, 生成formData(reactive), 也会作为重置用的数据 | Object   |
| opts      | 见下表                                                       | Function |

useForm.arg1 : opts

| 属性名   | 说明                                                         | 类型                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| statOpts | 决定了表单在不同状态下的title<br/> 和这些状态对应的请求函数 (有[默认实现](#默认statopts)) | {statName01:{<br/>label:'状态中文描述', <br/>getTitle:返回标题的函数} } |
| reqFns   | 表单的请求函数组成的对象<br/>, keys需和statOpts的相同        | {statName01:请求函数,<br/>statName02:请求函数...}            |
| theme    | 表单的主题, 基础title                                        | String                                                       |



- 返回值(reactive)

| 属性名                     | 说明                                                         | 类型         |
| -------------------------- | ------------------------------------------------------------ | ------------ |
| data // 同base.formData    | 表单数据(reactive)                                           | Object       |
| reset //来自base           | 使用形参init_data的值来重置formData                          | Function     |
| firstInputRef //来自base   | 用于表单的第一个录入型输入框的ref属性                        | Ref          |
| firstInputFocus //来自base | 调用表单的第一个录入型输入框<br/>的focus方法                 | Function     |
| ref / setRef               |                                                              | Ref/Function |
| show                       | 用于对话框内表单                                             | Boolean      |
| loading                    |                                                              | Boolean      |
| stat                       | 表单的当前状态                                               | String       |
| title                      | 由当前状态和主题组成                                         | ComputedRef  |
| setFirstInputRef           | 用于值为函数的ref属性<br/>, `raw.firstInputRef`的setter      | Function     |
| showLoading / showForm     | 对应属性的值设为true                                         | Function     |
| hideLoading / hideForm     | 对应属性的值设为false                                        | Function     |
| formStat                   | 获取() 或者 设置 (val) 表单状态                              | Function     |
| isAddStat                  | 当前表单状态是否为默认statOpts的add                          | Function     |
| setAddStat                 | 把表单状态设置为默认statOpts的add                            | Function     |
| setUpdStat                 | 把表单状态设置为默认statOpts的upd                            | Function     |
| setDetailStat              | 把表单状态设置为默认statOpts的detail                         | Function     |
| statOpts                   | opts(主函数的第二个参数)的statOpts<br/> \|\| 默认的statOpts  | Object       |
| submit                     | 调用从opts(主函数的第二个参数)<br/>的reqFns中获取的和当前stat符<br/>合的提交函数 | Function     |
| setFormData                | 用Object.assign来修改表单数据                                | Function     |
| validate                   | 调用ElForm的该方法                                           | Function     |



## 默认statOpts

| 键     | 值                                                           |
| ------ | ------------------------------------------------------------ |
| add    | {`label:'添加',k:'add',getTitle(theme){return this.label +theme} }` |
| upd    | {`label:'修改',k:'upd',getTitle(theme){return this.label +theme} }` |
| detail | {`label:'详情',k:'detail', getTitle(theme){ return theme + this.label} }` |

