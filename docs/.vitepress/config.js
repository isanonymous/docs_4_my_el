let c7tItems = [
  {text:'表格', link:'/c7tDocs/ETable'},
  {text:'表格操作列', link:'/c7tDocs/OperationsColumn'},
  {text:'树形', link:'/c7tDocs/ETree'},
  {text:'表单', link:'/c7tDocs/EForm'},
  {text:'表单项', link:'/c7tDocs/EFormItem'},
  {text:'过滤器(搜索栏)', link:'/c7tDocs/EFilter'},
];
let hooksItems = [
  {text:'☆ useBaseForm', link:'/hooks/useBaseForm'},
  {text:'★ useForm', link:'/hooks/useForm'},
  {text:'★ useRemoteData', link:'/hooks/useRemoteData'},
  {text:'★ useTable', link:'/hooks/useTable'},
  {text:'☆ usePagination', link:'/hooks/usePagination'},
  {text:'useRefTable', link:'/hooks/useRefTable'},
  {text:'useTree', link:'/hooks/useTree'},
  {text:'useMemento', link:'/hooks/useMemento'},
  {text:'useSimpleCrud', link:'/hooks/useSimpleCrud'},
];
let examplesItems = [
  {text:'★ 基本页面', link:'/examples/base_crud_page'},
  {text:'★ 页面编写中的细节', link:'/examples/base_crud_detail'},
  {text:'树形_多选', link:'/examples/tree_multiple'},
  {text:'★ 动态表单', link:'/examples/dynamic_form'},
  {text:'☆ 自定义字段项的配置及解析', link:'/examples/custom_field_item_conf'},
  {text:'从表格中选取数据', link:'/examples/ref_table'},
];
let utilsItems = [
  {text:'★ baseCrudHooks', link:'/utils/baseCrudHooks'},
  {text:'getBaseCrudFn', link:'/utils/getBaseCrudFn'},
  {text:'★ eField', link:'/utils/eField'},
  {text:'☆ ruleUtil', link:'/utils/ruleUtil'},
  {text:'arrUtil', link:'/utils/arrUtil'},
  {text:'objUtil', link:'/utils/objUtil'},
];
module.exports = {
  // title: 'Hello VitePress',
  // description: 'Just playing around.',
  base:'/docs_4_my_el/',
  themeConfig:{
    siteTitle:'elPlusCrud文档',
    logo:'/v_logo.png',
    nav:[
      {link:'/', text:'首页'},
      { text:'hooks', items: hooksItems, activeMatch:'/hooks'},
      { text:'组件', items: c7tItems, activeMatch:'/c7tDocs'},
      { text:'示例', items: examplesItems, activeMatch:'/examples'},
      { text:'工具类', items: utilsItems, activeMatch:'/utils'},
    ],
    // sidebar:[{link:'/', text:'首页'}, {link:'/c7tDocs/card', text:'卡片'} ],
    sidebar:{
      '/c7tDocs/':[
        { collapsible:true, items: c7tItems}
      ],
      '/hooks/':[
        { collapsible:true, items: hooksItems}
      ],
      '/examples/':[
        { collapsible:true, items: examplesItems}
      ],
      '/utils/':[
        { collapsible:true, items: utilsItems}
      ],
    },
    socialLinks:[{icon:'github', link:'https://gitee.com/zzyygg/eleme-plus-crud'}]
  }
}