## usePagination (默认导出)

静态属性:

| 属性名 | 说明                    | 类型   |
| ------ | ----------------------- | ------ |
| page   | `{k:'page',val:1 }`     | Object |
| limit  | `{k:'pageSize',val:10}` | Object |

- 形参confs : Object

| 属性名  | 说明                                                         | 类型     |
| ------- | ------------------------------------------------------------ | -------- |
| page    | 一个配置对象, 类型为`{k:'页号参数名'(默认为"page"), val:初始请求的页号(默认为1) }` | Object   |
| limit   | 一个配置对象, 类型为`{k:'页大小参数名'(默认为"pageSize"), val:初始请求的页大小(默认为10) }` | Object   |
| doFetch | 页号或页大小改变时, 会调用此函数                             | Function |

- 返回值 (固定为这两个对象的数组): [pag :Reactive, paginationProps :Reactive]

| 属性名            | 说明                                                 | 类型     |
| ----------------- | ---------------------------------------------------- | -------- |
| pag[形参.page.k]  | 属性名来自`形参.page.k`, 初始值来自`形参.page.val`   | Number   |
| pag[形参.limit.k] | 属性名来自`形参.limit.k`, 初始值来自`形参.limit.val` | Number   |
| paginationProps   | 包含完成分页功能所使用到的ElPagination常用的props    | Reactive |

