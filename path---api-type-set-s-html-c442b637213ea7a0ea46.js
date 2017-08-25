webpackJsonp([84],{"./node_modules/json-loader/index.js!./.cache/json/api-type-set-s-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Set.S.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;type&#xA0;elt\n&#xA0;&#xA0;type&#xA0;t\n&#xA0;&#xA0;val&#xA0;empty&#xA0;:&#xA0;Set.S.t\n&#xA0;&#xA0;val&#xA0;is_empty&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;mem&#xA0;:&#xA0;Set.S.elt&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;add&#xA0;:&#xA0;Set.S.elt&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t\n&#xA0;&#xA0;val&#xA0;singleton&#xA0;:&#xA0;Set.S.elt&#xA0;-&gt;&#xA0;Set.S.t\n&#xA0;&#xA0;val&#xA0;remove&#xA0;:&#xA0;Set.S.elt&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t\n&#xA0;&#xA0;val&#xA0;union&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t\n&#xA0;&#xA0;val&#xA0;inter&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t\n&#xA0;&#xA0;val&#xA0;diff&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t\n&#xA0;&#xA0;val&#xA0;compare&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;equal&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;subset&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;iter&#xA0;:&#xA0;(Set.S.elt&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;fold&#xA0;:&#xA0;(Set.S.elt&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;a)&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;a\n&#xA0;&#xA0;val&#xA0;for_all&#xA0;:&#xA0;(Set.S.elt&#xA0;-&gt;&#xA0;bool)&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;exists&#xA0;:&#xA0;(Set.S.elt&#xA0;-&gt;&#xA0;bool)&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;filter&#xA0;:&#xA0;(Set.S.elt&#xA0;-&gt;&#xA0;bool)&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t\n&#xA0;&#xA0;val&#xA0;partition&#xA0;:&#xA0;(Set.S.elt&#xA0;-&gt;&#xA0;bool)&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t&#xA0;*&#xA0;Set.S.t\n&#xA0;&#xA0;val&#xA0;cardinal&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;elements&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.elt&#xA0;list\n&#xA0;&#xA0;val&#xA0;min_elt&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.elt\n&#xA0;&#xA0;val&#xA0;max_elt&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.elt\n&#xA0;&#xA0;val&#xA0;choose&#xA0;:&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.elt\n&#xA0;&#xA0;val&#xA0;split&#xA0;:&#xA0;Set.S.elt&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.t&#xA0;*&#xA0;bool&#xA0;*&#xA0;Set.S.t\n&#xA0;&#xA0;val&#xA0;find&#xA0;:&#xA0;Set.S.elt&#xA0;-&gt;&#xA0;Set.S.t&#xA0;-&gt;&#xA0;Set.S.elt\n&#xA0;&#xA0;val&#xA0;of_list&#xA0;:&#xA0;Set.S.elt&#xA0;list&#xA0;-&gt;&#xA0;Set.S.t\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Set.S.html"}}}});
//# sourceMappingURL=path---api-type-set-s-html-c442b637213ea7a0ea46.js.map