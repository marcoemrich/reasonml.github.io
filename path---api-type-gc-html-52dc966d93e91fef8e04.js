webpackJsonp([147],{"./node_modules/json-loader/index.js!./.cache/json/api-type-gc-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Gc.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;type&#xA0;stat&#xA0;=&#xA0;{\n&#xA0;&#xA0;&#xA0;&#xA0;minor_words&#xA0;:&#xA0;float;\n&#xA0;&#xA0;&#xA0;&#xA0;promoted_words&#xA0;:&#xA0;float;\n&#xA0;&#xA0;&#xA0;&#xA0;major_words&#xA0;:&#xA0;float;\n&#xA0;&#xA0;&#xA0;&#xA0;minor_collections&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;major_collections&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;heap_words&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;heap_chunks&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;live_words&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;live_blocks&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;free_words&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;free_blocks&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;largest_free&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;fragments&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;compactions&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;top_heap_words&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;stack_size&#xA0;:&#xA0;int;\n&#xA0;&#xA0;}\n&#xA0;&#xA0;type&#xA0;control&#xA0;=&#xA0;{\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;minor_heap_size&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;major_heap_increment&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;space_overhead&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;verbose&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;max_overhead&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;stack_limit&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;allocation_policy&#xA0;:&#xA0;int;\n&#xA0;&#xA0;}\n&#xA0;&#xA0;external&#xA0;stat&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Gc.stat&#xA0;=&#xA0;&quot;caml_gc_stat&quot;\n&#xA0;&#xA0;external&#xA0;quick_stat&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Gc.stat&#xA0;=&#xA0;&quot;caml_gc_quick_stat&quot;\n&#xA0;&#xA0;external&#xA0;counters&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;float&#xA0;*&#xA0;float&#xA0;*&#xA0;float&#xA0;=&#xA0;&quot;caml_gc_counters&quot;\n&#xA0;&#xA0;external&#xA0;get&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Gc.control&#xA0;=&#xA0;&quot;caml_gc_get&quot;\n&#xA0;&#xA0;external&#xA0;set&#xA0;:&#xA0;Gc.control&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;caml_gc_set&quot;\n&#xA0;&#xA0;external&#xA0;minor&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;caml_gc_minor&quot;\n&#xA0;&#xA0;external&#xA0;major_slice&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;=&#xA0;&quot;caml_gc_major_slice&quot;\n&#xA0;&#xA0;external&#xA0;major&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;caml_gc_major&quot;\n&#xA0;&#xA0;external&#xA0;full_major&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;caml_gc_full_major&quot;\n&#xA0;&#xA0;external&#xA0;compact&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;caml_gc_compaction&quot;\n&#xA0;&#xA0;val&#xA0;print_stat&#xA0;:&#xA0;Pervasives.out_channel&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;allocated_bytes&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;float\n&#xA0;&#xA0;val&#xA0;finalise&#xA0;:&#xA0;(&apos;a&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;finalise_release&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;type&#xA0;alarm\n&#xA0;&#xA0;val&#xA0;create_alarm&#xA0;:&#xA0;(unit&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;Gc.alarm\n&#xA0;&#xA0;val&#xA0;delete_alarm&#xA0;:&#xA0;Gc.alarm&#xA0;-&gt;&#xA0;unit\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Gc.html"}}}});
//# sourceMappingURL=path---api-type-gc-html-52dc966d93e91fef8e04.js.map