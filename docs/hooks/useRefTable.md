## useRefTable

- 形参confs : Object

| 属性名     | 说明                                                         | 类型                     |
| ---------- | ------------------------------------------------------------ | ------------------------ |
| modelValue | 表格的选中项 (值为数据的唯一标识) //[参考同名props](/c7tDocs/ETable.html#组件的props) | String,Number<br/>,Array |

- 返回值

| 属性名           | 说明                                                         | 类型              |
| ---------------- | ------------------------------------------------------------ | ----------------- |
| tableBoxRef      | 表格的容器的ref, 该容器需expose属性名为tableDep的对象<br/>, 该对象的①ref为ETable的实例, ②data为表格数据; <br/>(与useTable和ETable组件耦合) | Ref               |
| show             | 用于表格的容器的显/隐                                        | Ref<<br/>Boolean> |
| showTable        | 改变show为true                                               | Function          |
| showConfigs      | {`type:'暂只为了区分页面和选取数据组件', table:一个Reactive对象, 包含了基于ETable组件(的props)实现数据选取用到的数据和事件监听函数`} | Object            |
| tableProps       | 同`showConfig.table`                                         | Reactive          |
| selectionOpts    | `<ESelect>的opts`, 用于回显选择的数据 (多tag)                | Array             |
| setSelectionRows | `<ETable>的onSelectionChange`事件，往selectOpts中添加数据 (添加前会判断是否已有) | Function          |
| selectionIds     | `<ESelect>的v-model`                                         | Ref               |
| onOk             | 从表格中选取结束后确定, 此时才会修改形参的modelValue的值     | Function          |
| onCancel         | 取消选取                                                     | Function          |

