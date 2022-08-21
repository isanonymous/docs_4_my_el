## 对象常量 arr_to_tree_confs

| 属性名   | 说明                                                         | 类型     |
| -------- | ------------------------------------------------------------ | -------- |
| id       | 数据项的唯一标识, 默认为"id"                                 | String   |
| pId      | 父数据唯一标识的值, 默认为"pId"                              | String   |
| children | 数据项的子数据列表的属性名, 默认为"children"                 | String   |
| isTop    | 数据项是否为顶级的, 默认<br/>当`Boolean(数据项的"pId")===false`时认为是顶级的 | Function |



## 函数arrToTree

| 参数名 | 说明                                                       | 类型   |
| ------ | ---------------------------------------------------------- | ------ |
| arr    | 要被转成树形数据的数组                                     | Array  |
| confs  | 参考其默认实现arr_to_tree_confs, 其属性同arr_to_tree_confs | Object |

返回值: 树形数据数组

> 其返回中有隐藏属性gData (第一个参数按"pId"分组的数据), 类型为Record<string, Array>



## 函数getIdsValFmt

返回值用于ElTable的formatter

| 参数名     | 说明                                                         | 类型   |
| ---------- | ------------------------------------------------------------ | ------ |
| dataSource | 一个数组, 数组的每一项都满足第二个参数props配置的类型, 如 `{value:"id",label:"name"}`<br/> --> `[{id:1, name:'壹'}, {id:2, name:'贰'}]` | Array  |
| props      | 配置 值字段value 和 显示字段label 的对象, 默认为id, name     | Object |



