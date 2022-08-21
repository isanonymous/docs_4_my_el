## ruleUtil

参数:

| 参数名   | 说明                                                         | 类型               |
| -------- | ------------------------------------------------------------ | ------------------ |
| message  | 类型 Ⅰ.为string时, 被转成{message}和**剩余参数**Obj<br/>ect.assign合并 , Ⅱ.为object时, 直接合并 | string或object     |
| 剩余参数 |                                                              | object // rule对象 |

返回值: rule对象

> 例

```js
import ru from '@/utils/ruleUtil'
let rule = ru("请输入${label}", ru.is_required, ru.str_not_blank)
// rule: {message:"请输入${label}", required:true, whitespace:true}
```



## 函数的静态属性

> 类型均为Object

| 属性名          | 说明                                   | 类型 |
| --------------- | -------------------------------------- | ---- |
| str_not_blank   | 不能全部为空白字符 // whitespace: true |      |
| is_required     | 必需存在该属性 // required: true       |      |
| t_int           | 整数 // type: 'integer'                |      |
| t_arr           | 数组 // type: 'array'                  |      |
| on_ch / on_blur | trigger: 'change' / 'blur'             |      |
| on_ch_blur      | trigger: ['change', 'blur']            |      |
|                 |                                        |      |
| positive_num    | 正整数 (min: 1 )                       |      |
| has_visibly_str | 含有非空白字符                         |      |



