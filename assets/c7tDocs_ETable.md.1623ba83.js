import{_ as t,c as l,o as s,a as o}from"./app.f56d6317.js";const y=JSON.parse('{"title":"\u4E3B\u8981\u529F\u80FD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3B\u8981\u529F\u80FD","slug":"\u4E3B\u8981\u529F\u80FD"},{"level":2,"title":"\u7EC4\u4EF6\u7684props","slug":"\u7EC4\u4EF6\u7684props"},{"level":2,"title":"props.confs","slug":"props-confs"}],"relativePath":"c7tDocs/ETable.md"}'),a={name:"c7tDocs/ETable.md"},e=o(`<h2 id="\u4E3B\u8981\u529F\u80FD" tabindex="-1">\u4E3B\u8981\u529F\u80FD <a class="header-anchor" href="#\u4E3B\u8981\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li><p>\u901A\u8FC7v-model\u7684\u503C\u7C7B\u578B, \u6216<code>rowSelection=&quot;multiple&quot;</code>(\u4F18\u5148\u7EA7\u9AD8)\u58F0\u660E\u5F0F\u7684\u914D\u7F6E\u8868\u683C\u5355/\u591A\u9009</p><ol><li>\u5355\u9009: <code>&lt;ETable v-model=&quot;\u5355\u4E2A\u503C&quot;&gt;</code> , \u591A\u9009: <code>&lt;ETable v-model=&quot;\u6570\u7EC4&quot;&gt;</code></li><li>(\u4F18\u5148\u7EA7\u6BD4v-model\u9AD8)rowSelection= \u5355\u9009: &quot;single&quot; , \u591A\u9009: <code>&quot;multiple&quot;</code></li></ol></li><li><p>\u914D\u7F6E\u65B9\u5F0F\u751F\u6210\u8868\u683C\u5217, \u652F\u6301\u5B9A\u5236 \u2160<code>&lt;el-table-column&gt;</code>\u5143\u7D20\u53CA\u5185\u5BB9 , \u2161<code>&lt;el-table-column&gt;</code>\u5185\u7684\u5185\u5BB9</p></li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u2160</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #[col_slot_prefix+tblConfs.star.k]=&quot;{scope, col}&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;el-rate </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scope.row[col.k]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u2161</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #[table_slot_prefix+confs.tableConfs.star02.k]=&quot;{vBind, col}&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;el-table-column </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vBind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-slot</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scope</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-rate</span><span style="color:#89DDFF;"> :model-value=&quot;scope.row[&#39;star&#39;]&quot; </span><span style="color:#C792EA;">show-score</span><span style="color:#89DDFF;"> :score-template=&quot;col.k&quot; </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">el-table-column</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u663E\u793A/\u9690\u85CF\u8868\u683C\u5217</li></ul><p>\u200B \u901A\u8FC7\u4FEE\u6539ETable\u7EC4\u4EF6expose\u7684<code>colControllerShow</code>(boolean) \u7684\u503C\u6765\u5B9E\u73B0</p><h2 id="\u7EC4\u4EF6\u7684props" tabindex="-1">\u7EC4\u4EF6\u7684props <a class="header-anchor" href="#\u7EC4\u4EF6\u7684props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C =\u5F00<br>\u5934\u4E3A\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u540CElTable\u7684data</td><td>Array</td><td></td></tr><tr><td>confs</td><td>\u5217\u914D\u7F6E, \u5177\u4F53\u89C1\u4E0B\u8868</td><td>Array</td><td></td></tr><tr><td>itemKey</td><td>\u540CElTable\u7684rowKey // \u4E3A\u4E86\u7EDF\u4E00</td><td>String</td><td>=&quot;id&quot;</td></tr><tr><td>loading</td><td>v-loading=&quot;loading&quot;</td><td>Boolean</td><td>=false</td></tr><tr><td>v-model /<br> modelValue</td><td>\u8868\u683C\u7684\u521D\u59CB\u9009\u62E9\u9879<br>, \u9700\u548CitemKey\u914D\u5408\u4F7F\u7528</td><td>String, Num<br>ber, Array</td><td></td></tr><tr><td>rowSelection</td><td>\u5F3A\u8C03/\u5F3A\u5236\u914D\u7F6E\u5355/\u591A\u9009<br>//\u4E00\u822C\u901A\u8FC7v-model\u7684<br>\u521D\u59CB\u503C\u914D\u7F6E\u5373\u53EF</td><td>String</td><td>=&quot;&quot;, &quot;single&quot;<br>, &quot;multiple&quot;</td></tr><tr><td>clickSelectionRow</td><td>\u591A\u9009\u65F6\u901A\u8FC7\u70B9\u51FB\u884C\u6765\u9009\u4E2D\u884C</td><td>Boolean</td><td>=true</td></tr></tbody></table><h2 id="props-confs" tabindex="-1">props.confs <a class="header-anchor" href="#props-confs" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C =\u5F00<br>\u5934\u4E3A\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>k</td><td>\u540CElTableColumn\u7684prop, \u9700\u552F\u4E00</td><td>String</td><td></td></tr><tr><td>label</td><td>\u540CElTableColumn\u7684label</td><td>String</td><td></td></tr><tr><td>w</td><td>\u540CElTableColumn\u7684width</td><td>String,<br>Number</td><td></td></tr><tr><td>colProps</td><td>ElTableColumn\u7684\u9664\u4E86prop,label,width<br>\u4EE5\u5916\u7684\u5C5E\u6027\u90FD\u914D\u7F6E\u5728\u6B64\u5BF9\u8C61\u4E2D</td><td>Object</td><td></td></tr><tr><td>type</td><td>\u5E38\u7528\u7684\u8868\u683C\u5C55\u793A\u7C7B\u578B\u53CA\u4E24\u79CDslot\u7C7B\u578B</td><td>String</td><td>&quot;img&quot;, &quot;col_slot&quot;,<br>&quot;table_slot&quot;</td></tr></tbody></table>`,9),n=[e];function p(r,d,c,i,D,u){return s(),l("div",null,n)}var b=t(a,[["render",p]]);export{y as __pageData,b as default};
