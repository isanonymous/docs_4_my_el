baseCrudHooks (默认导出对象)



| 属性(函数)         | 作用                                                         | 参数         |
| ------------------ | ------------------------------------------------------------ | ------------ |
| getFetchArgs       | 获取table的请求参数, 返回值为`next() \|\| {...分页数据对象, ...filter数据对象}` |              |
| pageList           | 调用tableDep的doFetch方法, 参数为getFetchArgs()<br/>, 请求完成后调用`arg_tableFetched(resp)` |              |
| firstPageList      | 设置分页数据对象.currentPage的值为1<br/>, 然后调用pageList   |              |
| arg_tableFetched   | 默认实现为设置tableDep.total值 (by响应数据)                  |              |
| toAdd              | 把表单状态设置为"add"<br/>重置表单数据<br/>显示表单 和第一个输入框.focus() |              |
| arg_toUpdOneRow    | 1.把表单状态设置为"upd"<br/>2.设置表单数据<br/>3.显示表单 和第一个输入框.focus() | 当前行数据   |
| validate           | `return formDep.validate()`<br/> (即ElForm的同名方法)        |              |
| arg_validateFailed | ElForm.validate方法通过回调函<br/>数获取到的校验错误信息 (第二个参数) | 校验错误信息 |
| getSubmitArgs      | 返回值为`next() \|\| null`                                   |              |
| doSubmit           | 调用validate, 如果校验未通过, 调用arg_validateFailed<br/>, 否则调用formDep.submit(),参数为getSubmitArgs()<br/>, 请求完成后用ElMessage()来提示用户, 然后根据响应数据调用`成功:arg_submited, 失败:arg_submitFailed` |              |
| arg_submited       | 1.隐藏表单<br/>2.表单为add状态时,调用firstPageList, 否则调用pageList | 响应数据     |
| arg_submitFailed   | 默认实现为在控制台error(错误信息)                            | 响应数据     |
| arg_delById        | 调用`baseCrudFn.del(id参数)`, 请求完成后用<br/>ElMessage来提示用户 , 如果成功pageList | id           |

