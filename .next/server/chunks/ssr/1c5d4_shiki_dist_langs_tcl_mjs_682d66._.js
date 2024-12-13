module.exports = {

"[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/tcl.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lang = Object.freeze(JSON.parse("{\"displayName\":\"Tcl\",\"fileTypes\":[\"tcl\"],\"foldingStartMarker\":\"\\\\{\\\\s*$\",\"foldingStopMarker\":\"^\\\\s*\\\\}\",\"name\":\"tcl\",\"patterns\":[{\"begin\":\"(?<=^|;)\\\\s*((#))\",\"beginCaptures\":{\"1\":{\"name\":\"comment.line.number-sign.tcl\"},\"2\":{\"name\":\"punctuation.definition.comment.tcl\"}},\"contentName\":\"comment.line.number-sign.tcl\",\"end\":\"\\\\n\",\"patterns\":[{\"match\":\"(\\\\\\\\\\\\\\\\|\\\\\\\\\\\\n)\"}]},{\"captures\":{\"1\":{\"name\":\"keyword.control.tcl\"}},\"match\":\"(?<=^|[\\\\[{;])\\\\s*(if|while|for|catch|default|return|break|continue|switch|exit|foreach|try|throw)\\\\b\"},{\"captures\":{\"1\":{\"name\":\"keyword.control.tcl\"}},\"match\":\"(?<=^|})\\\\s*(then|elseif|else)\\\\b\"},{\"captures\":{\"1\":{\"name\":\"keyword.other.tcl\"},\"2\":{\"name\":\"entity.name.function.tcl\"}},\"match\":\"(?<=^|{)\\\\s*(proc)\\\\s+([^\\\\s]+)\"},{\"captures\":{\"1\":{\"name\":\"keyword.other.tcl\"}},\"match\":\"(?<=^|[\\\\[{;])\\\\s*(after|append|array|auto_execok|auto_import|auto_load|auto_mkindex|auto_mkindex_old|auto_qualify|auto_reset|bgerror|binary|cd|clock|close|concat|dde|encoding|eof|error|eval|exec|expr|fblocked|fconfigure|fcopy|file|fileevent|filename|flush|format|gets|glob|global|history|http|incr|info|interp|join|lappend|library|lindex|linsert|list|llength|load|lrange|lreplace|lsearch|lset|lsort|memory|msgcat|namespace|open|package|parray|pid|pkg::create|pkg_mkIndex|proc|puts|pwd|re_syntax|read|registry|rename|resource|scan|seek|set|socket|SafeBase|source|split|string|subst|Tcl|tcl_endOfWord|tcl_findLibrary|tcl_startOfNextWord|tcl_startOfPreviousWord|tcl_wordBreakAfter|tcl_wordBreakBefore|tcltest|tclvars|tell|time|trace|unknown|unset|update|uplevel|upvar|variable|vwait)\\\\b\"},{\"begin\":\"(?<=^|[\\\\[{;])\\\\s*(regexp|regsub)\\\\b\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.other.tcl\"}},\"comment\":\"special-case regexp/regsub keyword in order to handle the expression\",\"end\":\"[\\\\n;\\\\]]\",\"patterns\":[{\"match\":\"\\\\\\\\(?:.|\\\\n)\",\"name\":\"constant.character.escape.tcl\"},{\"comment\":\"switch for regexp\",\"match\":\"-\\\\w+\\\\s*\"},{\"applyEndPatternLast\":1,\"begin\":\"--\\\\s*\",\"comment\":\"end of switches\",\"end\":\"\",\"patterns\":[{\"include\":\"#regexp\"}]},{\"include\":\"#regexp\"}]},{\"include\":\"#escape\"},{\"include\":\"#variable\"},{\"include\":\"#operator\"},{\"include\":\"#numeric\"},{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.tcl\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.tcl\"}},\"name\":\"string.quoted.double.tcl\",\"patterns\":[{\"include\":\"#escape\"},{\"include\":\"#variable\"},{\"include\":\"#embedded\"}]}],\"repository\":{\"bare-string\":{\"begin\":\"(?:^|(?<=\\\\s))\\\"\",\"comment\":\"matches a single quote-enclosed word without scoping\",\"end\":\"\\\"([^\\\\s\\\\]]*)\",\"endCaptures\":{\"1\":{\"name\":\"invalid.illegal.tcl\"}},\"patterns\":[{\"include\":\"#escape\"},{\"include\":\"#variable\"}]},\"braces\":{\"begin\":\"(?:^|(?<=\\\\s))\\\\{\",\"comment\":\"matches a single brace-enclosed word\",\"end\":\"\\\\}([^\\\\s\\\\]]*)\",\"endCaptures\":{\"1\":{\"name\":\"invalid.illegal.tcl\"}},\"patterns\":[{\"match\":\"\\\\\\\\[{}\\\\n]\",\"name\":\"constant.character.escape.tcl\"},{\"include\":\"#inner-braces\"}]},\"embedded\":{\"begin\":\"\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.embedded.begin.tcl\"}},\"end\":\"\\\\]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.embedded.end.tcl\"}},\"name\":\"source.tcl.embedded\",\"patterns\":[{\"include\":\"source.tcl\"}]},\"escape\":{\"match\":\"\\\\\\\\(\\\\d{1,3}|x[a-fA-F0-9]+|u[a-fA-F0-9]{1,4}|.|\\\\n)\",\"name\":\"constant.character.escape.tcl\"},\"inner-braces\":{\"begin\":\"\\\\{\",\"comment\":\"matches a nested brace in a brace-enclosed word\",\"end\":\"\\\\}\",\"patterns\":[{\"match\":\"\\\\\\\\[{}\\\\n]\",\"name\":\"constant.character.escape.tcl\"},{\"include\":\"#inner-braces\"}]},\"numeric\":{\"match\":\"(?<![a-zA-Z])([+-]?(\\\\d*[.])?\\\\d+f?)(?![\\\\.a-zA-Z])\",\"name\":\"constant.numeric.tcl\"},\"operator\":{\"match\":\"(?<= |\\\\d)(-|\\\\+|~|&{1,2}|\\\\|{1,2}|<{1,2}|>{1,2}|\\\\*{1,2}|!|%|\\\\/|<=|>=|={1,2}|!=|\\\\^)(?= |\\\\d)\",\"name\":\"keyword.operator.tcl\"},\"regexp\":{\"begin\":\"(?=\\\\S)(?![\\\\n;\\\\]])\",\"comment\":\"matches a single word, named as a regexp, then swallows the rest of the command\",\"end\":\"(?=[\\\\n;\\\\]])\",\"patterns\":[{\"begin\":\"(?=[^ \\\\t\\\\n;])\",\"end\":\"(?=[ \\\\t\\\\n;])\",\"name\":\"string.regexp.tcl\",\"patterns\":[{\"include\":\"#braces\"},{\"include\":\"#bare-string\"},{\"include\":\"#escape\"},{\"include\":\"#variable\"}]},{\"begin\":\"[ \\\\t]\",\"comment\":\"swallow the rest of the command\",\"end\":\"(?=[\\\\n;\\\\]])\",\"patterns\":[{\"include\":\"#variable\"},{\"include\":\"#embedded\"},{\"include\":\"#escape\"},{\"include\":\"#braces\"},{\"include\":\"#string\"}]}]},\"string\":{\"applyEndPatternLast\":1,\"begin\":\"(?:^|(?<=\\\\s))(?=\\\")\",\"comment\":\"matches a single quote-enclosed word with scoping\",\"end\":\"\",\"name\":\"string.quoted.double.tcl\",\"patterns\":[{\"include\":\"#bare-string\"}]},\"variable\":{\"captures\":{\"1\":{\"name\":\"punctuation.definition.variable.tcl\"}},\"match\":\"(\\\\$)((?:\\\\w|::)+(\\\\([^)]+\\\\))?|\\\\{[^}]*\\\\})\",\"name\":\"support.function.tcl\"}},\"scopeName\":\"source.tcl\"}"));
const __TURBOPACK__default__export__ = [
    lang
];
}}),

};

//# sourceMappingURL=1c5d4_shiki_dist_langs_tcl_mjs_682d66._.js.map