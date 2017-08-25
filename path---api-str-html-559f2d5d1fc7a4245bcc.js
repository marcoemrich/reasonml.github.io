webpackJsonp([202],{"./node_modules/json-loader/index.js!./.cache/json/api-str-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/Str.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Unix.html" title="Unix">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Bigarray.html" title="Bigarray">Next</a>\n</div>\n<h1>Module <a href="type_Str.html">Str</a></h1>\n\n<pre><span class="keyword">module</span> Str: sig .. end</pre><div class="info module top">\nRegular expressions and high-level string processing<br>\n</div>\n<hr width="100%">\n<br>\n<h6 id="6_Regularexpressions">Regular expressions</h6><br>\n\n<pre><span class="keyword">type</span> regexp;\n</pre>\n<div class="info ">\nThe type of compiled regular expressions.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> regexp: string =&gt; regexp;\n</pre><div class="info ">\nCompile a regular expression. The following constructs are\n    recognized:<ul>\n<li><code class="code">.     </code> Matches any character except newline.</li>\n<li><code class="code">*     </code> (postfix) Matches the preceding expression zero, one or\n              several times</li>\n<li><code class="code">+     </code> (postfix) Matches the preceding expression one or\n              several times</li>\n<li><code class="code">?     </code> (postfix) Matches the preceding expression once or\n              not at all</li>\n<li><code class="code">[..]  </code> Character set. Ranges are denoted with <code class="code">-</code>, as in <code class="code">[a-z]</code>.\n              An initial <code class="code">^</code>, as in <code class="code">[^0-9]</code>, complements the set.\n              To include a <code class="code">]</code> character in a set, make it the first\n              character of the set. To include a <code class="code">-</code> character in a set,\n              make it the first or the last character of the set.</li>\n<li><code class="code">^     </code> Matches at beginning of line (either at the beginning of\n              the matched string, or just after a newline character).</li>\n<li><code class="code">$     </code> Matches at end of line (either at the end of the matched\n              string, or just before a newline character).</li>\n<li><code class="code">\\|    </code> (infix) Alternative between two expressions.</li>\n<li><code class="code">\\(..\\)</code> Grouping and naming of the enclosed expression.</li>\n<li><code class="code">\\1    </code> The text matched by the first <code class="code">\\(...\\)</code> expression\n     (<code class="code">\\2</code> for the second expression, and so on up to <code class="code">\\9</code>).</li>\n<li><code class="code">\\b    </code> Matches word boundaries.</li>\n<li><code class="code">\\     </code> Quotes special characters.  The special characters\n              are <code class="code">$^\\.*+?[]</code>.</li>\n</ul>\n\n   Note: the argument to <code class="code">regexp</code> is usually a string literal. In this\n   case, any backslash character in the regular expression must be\n   doubled to make it past the OCaml string parser. For example, the\n   following expression:\n   <pre class="codepre"> let r = Str.regexp &quot;hello \\\\([A-Za-z]+\\\\)&quot; in\n      Str.replace_first r &quot;\\\\1&quot; &quot;hello world&quot; </pre>\n   returns the string <code class="code">&quot;world&quot;</code>.\n<p>\n\n   In particular, if you want a regular expression that matches a single\n   backslash character, you need to quote it in the argument to <code class="code">regexp</code>\n   (according to the last item of the list above) by adding a second\n   backslash. Then you need to quote both backslashes (according to the\n   syntax of string constants in OCaml) by doubling them again, so you\n   need to write four backslash characters: <code class="code">Str.regexp &quot;\\\\\\\\&quot;</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> regexp_case_fold: string =&gt; regexp;\n</pre><div class="info ">\nSame as <code class="code">regexp</code>, but the compiled expression will match text\n    in a case-insensitive way: uppercase and lowercase letters will\n    be considered equivalent.<br>\n</div>\n\n<pre><span class="keyword">let</span> quote: string =&gt; string;\n</pre><div class="info ">\n<code class="code">Str.quote s</code> returns a regexp string that matches exactly\n   <code class="code">s</code> and nothing else.<br>\n</div>\n\n<pre><span class="keyword">let</span> regexp_string: string =&gt; regexp;\n</pre><div class="info ">\n<code class="code">Str.regexp_string s</code> returns a regular expression\n   that matches exactly <code class="code">s</code> and nothing else.<br>\n</div>\n\n<pre><span class="keyword">let</span> regexp_string_case_fold: string =&gt; regexp;\n</pre><div class="info ">\n<code class="code">Str.regexp_string_case_fold</code> is similar to <a href="Str.html#VALregexp_string"><code class="code">Str.regexp_string</code></a>,\n   but the regexp matches in a case-insensitive way.<br>\n</div>\n<br>\n<h6 id="6_Stringmatchingandsearching">String matching and searching</h6><br>\n\n<pre><span class="keyword">let</span> string_match: regexp =&gt; string =&gt; int =&gt; bool;\n</pre><div class="info ">\n<code class="code">string_match r s start</code> tests whether a substring of <code class="code">s</code> that\n   starts at position <code class="code">start</code> matches the regular expression <code class="code">r</code>.\n   The first character of a string has position <code class="code">0</code>, as usual.<br>\n</div>\n\n<pre><span class="keyword">let</span> search_forward: regexp =&gt; string =&gt; int =&gt; int;\n</pre><div class="info ">\n<code class="code">search_forward r s start</code> searches the string <code class="code">s</code> for a substring\n   matching the regular expression <code class="code">r</code>. The search starts at position\n   <code class="code">start</code> and proceeds towards the end of the string.\n   Return the position of the first character of the matched\n   substring.<br>\n<b>Raises</b> <code>Not_found</code> if no substring matches.<br>\n</div>\n\n<pre><span class="keyword">let</span> search_backward: regexp =&gt; string =&gt; int =&gt; int;\n</pre><div class="info ">\n<code class="code">search_backward r s last</code> searches the string <code class="code">s</code> for a\n  substring matching the regular expression <code class="code">r</code>. The search first\n  considers substrings that start at position <code class="code">last</code> and proceeds\n  towards the beginning of string. Return the position of the first\n  character of the matched substring.<br>\n<b>Raises</b> <code>Not_found</code> if no substring matches.<br>\n</div>\n\n<pre><span class="keyword">let</span> string_partial_match: regexp =&gt; string =&gt; int =&gt; bool;\n</pre><div class="info ">\nSimilar to <a href="Str.html#VALstring_match"><code class="code">Str.string_match</code></a>, but also returns true if\n   the argument string is a prefix of a string that matches.\n   This includes the case of a true complete match.<br>\n</div>\n\n<pre><span class="keyword">let</span> matched_string: string =&gt; string;\n</pre><div class="info ">\n<code class="code">matched_string s</code> returns the substring of <code class="code">s</code> that was matched\n   by the last call to one of the following matching or searching\n   functions:<ul>\n<li><a href="Str.html#VALstring_match"><code class="code">Str.string_match</code></a></li>\n<li><a href="Str.html#VALsearch_forward"><code class="code">Str.search_forward</code></a></li>\n<li><a href="Str.html#VALsearch_backward"><code class="code">Str.search_backward</code></a></li>\n<li><a href="Str.html#VALstring_partial_match"><code class="code">Str.string_partial_match</code></a></li>\n<li><a href="Str.html#VALglobal_substitute"><code class="code">Str.global_substitute</code></a></li>\n<li><a href="Str.html#VALsubstitute_first"><code class="code">Str.substitute_first</code></a></li>\n</ul>\n\n   provided that none of the following functions was called inbetween:<ul>\n<li><a href="Str.html#VALglobal_replace"><code class="code">Str.global_replace</code></a></li>\n<li><a href="Str.html#VALreplace_first"><code class="code">Str.replace_first</code></a></li>\n<li><a href="Str.html#VALsplit"><code class="code">Str.split</code></a></li>\n<li><a href="Str.html#VALbounded_split"><code class="code">Str.bounded_split</code></a></li>\n<li><a href="Str.html#VALsplit_delim"><code class="code">Str.split_delim</code></a></li>\n<li><a href="Str.html#VALbounded_split_delim"><code class="code">Str.bounded_split_delim</code></a></li>\n<li><a href="Str.html#VALfull_split"><code class="code">Str.full_split</code></a></li>\n<li><a href="Str.html#VALbounded_full_split"><code class="code">Str.bounded_full_split</code></a></li>\n</ul>\n\n   Note: in the case of <code class="code">global_substitute</code> and <code class="code">substitute_first</code>,\n   a call to <code class="code">matched_string</code> is only valid within the <code class="code">subst</code> argument,\n   not after <code class="code">global_substitute</code> or <code class="code">substitute_first</code> returns.\n<p>\n\n   The user must make sure that the parameter <code class="code">s</code> is the same string\n   that was passed to the matching or searching function.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> match_beginning: unit =&gt; int;\n</pre><div class="info ">\n<code class="code">match_beginning()</code> returns the position of the first character\n   of the substring that was matched by the last call to a matching\n   or searching function (see <a href="Str.html#VALmatched_string"><code class="code">Str.matched_string</code></a> for details).<br>\n</div>\n\n<pre><span class="keyword">let</span> match_end: unit =&gt; int;\n</pre><div class="info ">\n<code class="code">match_end()</code> returns the position of the character following the\n   last character of the substring that was matched by the last call\n   to a matching or searching function (see <a href="Str.html#VALmatched_string"><code class="code">Str.matched_string</code></a> for\n   details).<br>\n</div>\n\n<pre><span class="keyword">let</span> matched_group: int =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">matched_group n s</code> returns the substring of <code class="code">s</code> that was matched\n   by the <code class="code">n</code>th group <code class="code">\\(...\\)</code> of the regular expression that was\n   matched by the last call to a matching or searching function (see\n   <a href="Str.html#VALmatched_string"><code class="code">Str.matched_string</code></a> for details).\n   The user must make sure that the parameter <code class="code">s</code> is the same string\n   that was passed to the matching or searching function.<br>\n<b>Raises</b> <code>Not_found</code> if the <code class="code">n</code>th group\n   of the regular expression was not matched.  This can happen\n   with groups inside alternatives <code class="code">\\|</code>, options <code class="code">?</code>\n   or repetitions <code class="code">*</code>.  For instance, the empty string will match\n   <code class="code">\\(a\\)*</code>, but <code class="code">matched_group 1 &quot;&quot;</code> will raise <code class="code">Not_found</code>\n   because the first group itself was not matched.<br>\n</div>\n\n<pre><span class="keyword">let</span> group_beginning: int =&gt; int;\n</pre><div class="info ">\n<code class="code">group_beginning n</code> returns the position of the first character\n   of the substring that was matched by the <code class="code">n</code>th group of\n   the regular expression that was matched by the last call to a\n   matching or searching function (see <a href="Str.html#VALmatched_string"><code class="code">Str.matched_string</code></a> for details).<br>\n<b>Raises</b><ul><li><code>Not_found</code> if the <code class="code">n</code>th group of the regular expression\n   was not matched.</li>\n<li><code>Invalid_argument</code> if there are fewer than <code class="code">n</code> groups in\n   the regular expression.</li>\n</ul>\n</div>\n\n<pre><span class="keyword">let</span> group_end: int =&gt; int;\n</pre><div class="info ">\n<code class="code">group_end n</code> returns\n   the position of the character following the last character of\n   substring that was matched by the <code class="code">n</code>th group of the regular\n   expression that was matched by the last call to a matching or\n   searching function (see <a href="Str.html#VALmatched_string"><code class="code">Str.matched_string</code></a> for details).<br>\n<b>Raises</b><ul><li><code>Not_found</code> if the <code class="code">n</code>th group of the regular expression\n   was not matched.</li>\n<li><code>Invalid_argument</code> if there are fewer than <code class="code">n</code> groups in\n   the regular expression.</li>\n</ul>\n</div>\n<br>\n<h6 id="6_Replacement">Replacement</h6><br>\n\n<pre><span class="keyword">let</span> global_replace: regexp =&gt; string =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">global_replace regexp templ s</code> returns a string identical to <code class="code">s</code>,\n   except that all substrings of <code class="code">s</code> that match <code class="code">regexp</code> have been\n   replaced by <code class="code">templ</code>. The replacement template <code class="code">templ</code> can contain\n   <code class="code">\\1</code>, <code class="code">\\2</code>, etc; these sequences will be replaced by the text\n   matched by the corresponding group in the regular expression.\n   <code class="code">\\0</code> stands for the text matched by the whole regular expression.<br>\n</div>\n\n<pre><span class="keyword">let</span> replace_first: regexp =&gt; string =&gt; string =&gt; string;\n</pre><div class="info ">\nSame as <a href="Str.html#VALglobal_replace"><code class="code">Str.global_replace</code></a>, except that only the first substring\n   matching the regular expression is replaced.<br>\n</div>\n\n<pre><span class="keyword">let</span> global_substitute: regexp =&gt; (string =&gt; string) =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">global_substitute regexp subst s</code> returns a string identical\n   to <code class="code">s</code>, except that all substrings of <code class="code">s</code> that match <code class="code">regexp</code>\n   have been replaced by the result of function <code class="code">subst</code>. The\n   function <code class="code">subst</code> is called once for each matching substring,\n   and receives <code class="code">s</code> (the whole text) as argument.<br>\n</div>\n\n<pre><span class="keyword">let</span> substitute_first: regexp =&gt; (string =&gt; string) =&gt; string =&gt; string;\n</pre><div class="info ">\nSame as <a href="Str.html#VALglobal_substitute"><code class="code">Str.global_substitute</code></a>, except that only the first substring\n   matching the regular expression is replaced.<br>\n</div>\n\n<pre><span class="keyword">let</span> replace_matched: string =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">replace_matched repl s</code> returns the replacement text <code class="code">repl</code>\n   in which <code class="code">\\1</code>, <code class="code">\\2</code>, etc. have been replaced by the text\n   matched by the corresponding groups in the regular expression\n   that was matched by the last call to a matching or searching\n   function (see <a href="Str.html#VALmatched_string"><code class="code">Str.matched_string</code></a> for details).\n   <code class="code">s</code> must be the same string that was passed to the matching or\n   searching function.<br>\n</div>\n<br>\n<h6 id="6_Splitting">Splitting</h6><br>\n\n<pre><span class="keyword">let</span> split: regexp =&gt; string =&gt; list string;\n</pre><div class="info ">\n<code class="code">split r s</code> splits <code class="code">s</code> into substrings, taking as delimiters\n   the substrings that match <code class="code">r</code>, and returns the list of substrings.\n   For instance, <code class="code">split (regexp &quot;[ \\t]+&quot;) s</code> splits <code class="code">s</code> into\n   blank-separated words.  An occurrence of the delimiter at the\n   beginning or at the end of the string is ignored.<br>\n</div>\n\n<pre><span class="keyword">let</span> bounded_split: regexp =&gt; string =&gt; int =&gt; list string;\n</pre><div class="info ">\nSame as <a href="Str.html#VALsplit"><code class="code">Str.split</code></a>, but splits into at most <code class="code">n</code> substrings,\n   where <code class="code">n</code> is the extra integer parameter.<br>\n</div>\n\n<pre><span class="keyword">let</span> split_delim: regexp =&gt; string =&gt; list string;\n</pre><div class="info ">\nSame as <a href="Str.html#VALsplit"><code class="code">Str.split</code></a> but occurrences of the\n   delimiter at the beginning and at the end of the string are\n   recognized and returned as empty strings in the result.\n   For instance, <code class="code">split_delim (regexp &quot; &quot;) &quot; abc &quot;</code>\n   returns <code class="code">[&quot;&quot;; &quot;abc&quot;; &quot;&quot;]</code>, while <code class="code">split</code> with the same\n   arguments returns <code class="code">[&quot;abc&quot;]</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> bounded_split_delim: regexp =&gt; string =&gt; int =&gt; list string;\n</pre><div class="info ">\nSame as <a href="Str.html#VALbounded_split"><code class="code">Str.bounded_split</code></a>, but occurrences of the\n   delimiter at the beginning and at the end of the string are\n   recognized and returned as empty strings in the result.<br>\n</div>\n\n<pre><span class="keyword">type</span> split_result = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Text of string</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Delim of string</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">let</span> full_split: regexp =&gt; string =&gt; list split_result;\n</pre><div class="info ">\nSame as <a href="Str.html#VALsplit_delim"><code class="code">Str.split_delim</code></a>, but returns\n   the delimiters as well as the substrings contained between\n   delimiters.  The former are tagged <code class="code">Delim</code> in the result list;\n   the latter are tagged <code class="code">Text</code>.  For instance,\n   <code class="code">full_split (regexp &quot;[{}]&quot;) &quot;{ab}&quot;</code> returns\n   <code class="code">[Delim &quot;{&quot;; Text &quot;ab&quot;; Delim &quot;}&quot;]</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> bounded_full_split: regexp =&gt; string =&gt; int =&gt; list split_result;\n</pre><div class="info ">\nSame as <a href="Str.html#VALbounded_split_delim"><code class="code">Str.bounded_split_delim</code></a>, but returns\n   the delimiters as well as the substrings contained between\n   delimiters.  The former are tagged <code class="code">Delim</code> in the result list;\n   the latter are tagged <code class="code">Text</code>.<br>\n</div>\n<br>\n<h6 id="6_Extractingsubstrings">Extracting substrings</h6><br>\n\n<pre><span class="keyword">let</span> string_before: string =&gt; int =&gt; string;\n</pre><div class="info ">\n<code class="code">string_before s n</code> returns the substring of all characters of <code class="code">s</code>\n   that precede position <code class="code">n</code> (excluding the character at\n   position <code class="code">n</code>).<br>\n</div>\n\n<pre><span class="keyword">let</span> string_after: string =&gt; int =&gt; string;\n</pre><div class="info ">\n<code class="code">string_after s n</code> returns the substring of all characters of <code class="code">s</code>\n   that follow position <code class="code">n</code> (including the character at\n   position <code class="code">n</code>).<br>\n</div>\n\n<pre><span class="keyword">let</span> first_chars: string =&gt; int =&gt; string;\n</pre><div class="info ">\n<code class="code">first_chars s n</code> returns the first <code class="code">n</code> characters of <code class="code">s</code>.\n   This is the same function as <a href="Str.html#VALstring_before"><code class="code">Str.string_before</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> last_chars: string =&gt; int =&gt; string;\n</pre><div class="info ">\n<code class="code">last_chars s n</code> returns the last <code class="code">n</code> characters of <code class="code">s</code>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Str.html"}}}});
//# sourceMappingURL=path---api-str-html-559f2d5d1fc7a4245bcc.js.map