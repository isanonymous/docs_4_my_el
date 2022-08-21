baseConfHandler

| 属性(函数)    | 作用                                                         | 参数                |
| ------------- | ------------------------------------------------------------ | ------------------- |
| formConfs     | 默认实现为: 如果字段被配置为first_input, 添加一个task来把`form.props.ref的值设为formDep.setFirstInputRef`<br/>, 解析一个字段后调用一次 // form(false)时不调用 | 当前处理的字段的"k" |
| formRules     | 默认实现为: 解析rule项中的message表达式<br/>, 调用时机同formConfs | 当前处理的字段的"k" |
| form_init_val | 默认实现为: 向`getConfs.form_init_val中添加属性, 属性名opts.itemKey(不传时为"id"), 属性值undefined`<br/>, 解析完所有字段后调用 |                     |



## getConfs (默认导出)

静态属性:

| 属性名         | 说明                 | 类型                           |
| -------------- | -------------------- | ------------------------------ |
| useConfHandler | 全局注册confHandlers | (handlerName, handlerFn)=>void |

参数:

| 参数名    | 说明                                                         | 类型   |
| --------- | ------------------------------------------------------------ | ------ |
| fieldsObj | 页面的字段配置对象                                           | Object |
| opts      | `{itemKey: 数据唯一标识 ="id", confHandler: 基于洋葱模型定制的baseConfHandler}` | Object |

返回值: // 除了execTask和 addTask, 均为Object类型

| 属性名          | 说明                                                         | 类型     |
| --------------- | ------------------------------------------------------------ | -------- |
| execTasks       | 延迟处理配置 (即getConfs返回值)                              | Function |
| addTask         | 向延迟处理配置数组中添加一个函数                             | Function |
| opts            | 第二个参数                                                   |          |
| formConfs       | 一个EForm组件的配置confs, 值中一定会有label和k               |          |
| form_init_val   | useForm的第一个参数                                          |          |
| formRules       | 用于E(l)Form组件的rules属性                                  |          |
| filterConfs     | 一个EFilter组件的配置confs, 值中一定会有label和k             |          |
| filter_init_val | useBaseForm的第一个参数                                      |          |
| tableConfs      | 一个ETable组件的配置confs, 值中一定会有label和k              |          |
| tableProps      | ElTable组件的属性`{cellClassName?:Function, cellStyle?:Function}` |          |



