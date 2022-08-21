## 主函数

- 形参

| 参数名    | 说明                                                         | 类型     |
| --------- | ------------------------------------------------------------ | -------- |
| init_data | 会对其进行深拷贝后, 生成formData(reactive), 也会作为重置用的数据 | Object   |
| submitFn  | 提交表单使用的函数, 默认参数为init_data形参生成的数据对象    | Function |



- 返回值

| 属性值          | 说明                                    | 类型     |
| --------------- | --------------------------------------- | -------- |
| formData        | 表单数据(reactive)                      | Object   |
| reset           | 使用形参init_data的值来重置formData     | Function |
| submit          | 提交表单                                | Function |
| firstInputRef   | 用于表单的第一个录入型输入框的ref属性   | Ref      |
| firstInputFocus | 调用表单的第一个录入型输入框的focus方法 | Function |

