主要功能

- 表格的操作列, 封装了编辑和删除按钮, 默认固定在右侧



## 组件的props

| 属性              | 说明                                              | 类型         | 可选值 =开<br/>头为默认值 |
| ----------------- | ------------------------------------------------- | ------------ | ------------------------- |
| itemKey           | 作用同ElTable的rowKey<br/>, 数据的id              | String       | ="id"                     |
| delById           | 根据按钮所在行的数据唯<br/>一标识, 删除数据       | Function     |                           |
| toUpd             | 根据按钮所在行的数据, 编辑数据                    | Function     |                           |
| hideDelByIdOn     | 根据按钮所在行的数据, 决<br/>定是否要隐藏删除按钮 | row=>boolean |                           |
| clickSelectionRow | 根据按钮所在行的数据, 决<br/>定是否要隐藏编辑按钮 | row=>boolean |                           |

> 默认使用ETable的itemKey

