module.exports = {

"[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/awk.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lang = Object.freeze(JSON.parse("{\"displayName\":\"AWK\",\"fileTypes\":[\"awk\"],\"name\":\"awk\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#procedure\"},{\"include\":\"#pattern\"}],\"repository\":{\"builtin-pattern\":{\"match\":\"\\\\b(BEGINFILE|BEGIN|ENDFILE|END)\\\\b\",\"name\":\"constant.language.awk\"},\"command\":{\"patterns\":[{\"match\":\"\\\\b(?:next|print|printf)\\\\b\",\"name\":\"keyword.other.command.awk\"},{\"match\":\"\\\\b(?:close|getline|delete|system)\\\\b\",\"name\":\"keyword.other.command.nawk\"},{\"match\":\"\\\\b(?:fflush|nextfile)\\\\b\",\"name\":\"keyword.other.command.bell-awk\"}]},\"comment\":{\"match\":\"#.*\",\"name\":\"comment.line.number-sign.awk\"},\"constant\":{\"patterns\":[{\"include\":\"#numeric-constant\"},{\"include\":\"#string-constant\"}]},\"escaped-char\":{\"match\":\"\\\\\\\\(?:[\\\\\\\\abfnrtv/\\\"]|x[0-9A-Fa-f]{2}|[0-7]{3})\",\"name\":\"constant.character.escape.awk\"},\"expression\":{\"patterns\":[{\"include\":\"#command\"},{\"include\":\"#function\"},{\"include\":\"#constant\"},{\"include\":\"#variable\"},{\"include\":\"#regexp-in-expression\"},{\"include\":\"#operator\"},{\"include\":\"#groupings\"}]},\"function\":{\"patterns\":[{\"match\":\"\\\\b(?:exp|int|log|sqrt|index|length|split|sprintf|substr)\\\\b\",\"name\":\"support.function.awk\"},{\"match\":\"\\\\b(?:atan2|cos|rand|sin|srand|gsub|match|sub|tolower|toupper)\\\\b\",\"name\":\"support.function.nawk\"},{\"match\":\"\\\\b(?:gensub|strftime|systime)\\\\b\",\"name\":\"support.function.gawk\"}]},\"function-definition\":{\"begin\":\"\\\\b(function)\\\\s+(\\\\w+)(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.function.awk\"},\"2\":{\"name\":\"entity.name.function.awk\"},\"3\":{\"name\":\"punctuation.definition.parameters.begin.awk\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.parameters.end.awk\"}},\"patterns\":[{\"match\":\"\\\\b(\\\\w+)\\\\b\",\"name\":\"variable.parameter.function.awk\"},{\"match\":\"\\\\b(,)\\\\b\",\"name\":\"punctuation.separator.parameters.awk\"}]},\"groupings\":{\"patterns\":[{\"match\":\"\\\\(\",\"name\":\"meta.brace.round.awk\"},{\"match\":\"\\\\)\",\"name\":\"meta.brace.round.awk\"},{\"match\":\"\\\\,\",\"name\":\"punctuation.separator.parameters.awk\"}]},\"keyword\":{\"match\":\"\\\\b(?:break|continue|do|while|exit|for|if|else|return)\\\\b\",\"name\":\"keyword.control.awk\"},\"numeric-constant\":{\"match\":\"\\\\b\\\\d+(?:\\\\.\\\\d+)?(?:e[+-]\\\\d+)?\\\\b\",\"name\":\"constant.numeric.awk\"},\"operator\":{\"patterns\":[{\"match\":\"(!?~|[=<>!]=|[<>])\",\"name\":\"keyword.operator.comparison.awk\"},{\"match\":\"\\\\b(in)\\\\b\",\"name\":\"keyword.operator.comparison.awk\"},{\"match\":\"([+\\\\-*/%^]=|\\\\+\\\\+|--|>>|=)\",\"name\":\"keyword.operator.assignment.awk\"},{\"match\":\"(\\\\|\\\\||&&|!)\",\"name\":\"keyword.operator.boolean.awk\"},{\"match\":\"([+\\\\-*/%^])\",\"name\":\"keyword.operator.arithmetic.awk\"},{\"match\":\"([?:])\",\"name\":\"keyword.operator.trinary.awk\"},{\"match\":\"(\\\\[|\\\\])\",\"name\":\"keyword.operator.index.awk\"}]},\"pattern\":{\"patterns\":[{\"include\":\"#regexp-as-pattern\"},{\"include\":\"#function-definition\"},{\"include\":\"#builtin-pattern\"},{\"include\":\"#expression\"}]},\"procedure\":{\"begin\":\"\\\\{\",\"end\":\"\\\\}\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#procedure\"},{\"include\":\"#keyword\"},{\"include\":\"#expression\"}]},\"regex-as-assignment\":{\"begin\":\"([^=<>!+\\\\-*/%^]=)\\\\s*(/)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.assignment.awk\"},\"2\":{\"name\":\"punctuation.definition.regex.begin.awk\"}},\"contentName\":\"string.regexp\",\"end\":\"/\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.regex.end.awk\"}},\"patterns\":[{\"include\":\"source.regexp\"}]},\"regex-as-comparison\":{\"begin\":\"(!?~)\\\\s*(/)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.comparison.awk\"},\"2\":{\"name\":\"punctuation.definition.regex.begin.awk\"}},\"contentName\":\"string.regexp\",\"end\":\"/\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.regex.end.awk\"}},\"patterns\":[{\"include\":\"source.regexp\"}]},\"regex-as-first-argument\":{\"begin\":\"(\\\\()\\\\s*(/)\",\"beginCaptures\":{\"1\":{\"name\":\"meta.brace.round.awk\"},\"2\":{\"name\":\"punctuation.definition.regex.begin.awk\"}},\"contentName\":\"string.regexp\",\"end\":\"/\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.regex.end.awk\"}},\"patterns\":[{\"include\":\"source.regexp\"}]},\"regex-as-nth-argument\":{\"begin\":\"(,)\\\\s*(/)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.separator.parameters.awk\"},\"2\":{\"name\":\"punctuation.definition.regex.begin.awk\"}},\"contentName\":\"string.regexp\",\"end\":\"/\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.regex.end.awk\"}},\"patterns\":[{\"include\":\"source.regexp\"}]},\"regexp-as-pattern\":{\"begin\":\"/\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.regex.begin.awk\"}},\"contentName\":\"string.regexp\",\"end\":\"/\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.regex.end.awk\"}},\"patterns\":[{\"include\":\"source.regexp\"}]},\"regexp-in-expression\":{\"patterns\":[{\"include\":\"#regex-as-assignment\"},{\"include\":\"#regex-as-comparison\"},{\"include\":\"#regex-as-first-argument\"},{\"include\":\"#regex-as-nth-argument\"}]},\"string-constant\":{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.awk\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.awk\"}},\"name\":\"string.quoted.double.awk\",\"patterns\":[{\"include\":\"#escaped-char\"}]},\"variable\":{\"patterns\":[{\"match\":\"\\\\$\\\\d+\",\"name\":\"variable.language.awk\"},{\"match\":\"\\\\b(?:FILENAME|FS|NF|NR|OFMT|OFS|ORS|RS)\\\\b\",\"name\":\"variable.language.awk\"},{\"match\":\"\\\\b(?:ARGC|ARGV|CONVFMT|ENVIRON|FNR|RLENGTH|RSTART|SUBSEP)\\\\b\",\"name\":\"variable.language.nawk\"},{\"match\":\"\\\\b(?:ARGIND|ERRNO|FIELDWIDTHS|IGNORECASE|RT)\\\\b\",\"name\":\"variable.language.gawk\"}]}},\"scopeName\":\"source.awk\"}"));
const __TURBOPACK__default__export__ = [
    lang
];
}}),

};

//# sourceMappingURL=1c5d4_shiki_dist_langs_awk_mjs_954231._.js.map