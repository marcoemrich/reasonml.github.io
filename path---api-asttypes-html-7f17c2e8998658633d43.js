webpackJsonp([305],{"./node_modules/json-loader/index.js!./.cache/json/api-asttypes-html.json":function(t,n){t.exports={data:{file:{relativePath:"api/Asttypes.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Ast_mapper.html" title="Ast_mapper">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Docstrings.html" title="Docstrings">Next</a>\n</div>\n<h1>Module <a href="type_Asttypes.html">Asttypes</a></h1>\n\n<pre><span class="keyword">module</span> Asttypes: sig .. end</pre><hr width="100%">\n\n<pre><span class="keyword">type</span> constant = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Const_int of int</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Const_char of char</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Const_string of string * string option</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Const_float of string</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Const_int32 of int32</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Const_int64 of int64</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Const_nativeint of nativeint</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> rec_flag = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Nonrecursive</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Recursive</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> direction_flag = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Upto</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Downto</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> private_flag = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Private</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Public</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> mutable_flag = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Immutable</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Mutable</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> virtual_flag = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Virtual</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Concrete</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> override_flag = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Override</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Fresh</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> closed_flag = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Closed</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Open</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> label = string;\n</pre>\n\n\n<pre><span class="keyword">type</span> &apos;a loc = &apos;a Location.loc = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>txt&#xA0;: &apos;a;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>loc&#xA0;: Location.t;</code></td>\n\n</tr></tbody></table>\n}\n\n\n\n<pre><span class="keyword">type</span> variance = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Covariant</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Contravariant</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Invariant</code></td>\n\n</tr></tbody></table>\n\n\n</div>'}}},pathContext:{relativePath:"api/Asttypes.html"}}}});
//# sourceMappingURL=path---api-asttypes-html-7f17c2e8998658633d43.js.map