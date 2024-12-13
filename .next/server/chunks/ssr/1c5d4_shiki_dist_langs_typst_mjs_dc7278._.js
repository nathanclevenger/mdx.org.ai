module.exports = {

"[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/typst.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lang = Object.freeze(JSON.parse("{\"displayName\":\"Typst\",\"name\":\"typst\",\"patterns\":[{\"include\":\"#markup\"}],\"repository\":{\"arguments\":{\"patterns\":[{\"match\":\"\\\\b[A-Za-z_][0-9A-Za-z_-]*(?=:)\",\"name\":\"variable.parameter.typst\"},{\"include\":\"#code\"}]},\"code\":{\"patterns\":[{\"include\":\"#common\"},{\"begin\":\"{\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.block.code.typst\"}},\"end\":\"}\",\"name\":\"meta.block.code.typst\",\"patterns\":[{\"include\":\"#code\"}]},{\"begin\":\"\\\\[\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.block.content.typst\"}},\"end\":\"\\\\]\",\"name\":\"meta.block.content.typst\",\"patterns\":[{\"include\":\"#markup\"}]},{\"begin\":\"//\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.typst\"}},\"end\":\"\\n\",\"name\":\"comment.line.double-slash.typst\"},{\"match\":\":\",\"name\":\"punctuation.separator.colon.typst\"},{\"match\":\",\",\"name\":\"punctuation.separator.comma.typst\"},{\"match\":\"=>|\\\\.\\\\.\",\"name\":\"keyword.operator.typst\"},{\"match\":\"==|!=|<=|<|>=|>\",\"name\":\"keyword.operator.relational.typst\"},{\"match\":\"\\\\+=|-=|\\\\*=|/=|=\",\"name\":\"keyword.operator.assignment.typst\"},{\"match\":\"\\\\+|\\\\*|/|(?<![A-Za-z_][0-9A-Za-z_-]*)-(?![0-9A-Za-z]_-]*[A-Za-z_])\",\"name\":\"keyword.operator.arithmetic.typst\"},{\"match\":\"\\\\b(and|or|not)\\\\b\",\"name\":\"keyword.operator.word.typst\"},{\"match\":\"\\\\b(let|as|in|set|show)\\\\b\",\"name\":\"keyword.other.typst\"},{\"match\":\"\\\\b(if|else)\\\\b\",\"name\":\"keyword.control.conditional.typst\"},{\"match\":\"\\\\b(for|while|break|continue)\\\\b\",\"name\":\"keyword.control.loop.typst\"},{\"match\":\"\\\\b(import|include|export)\\\\b\",\"name\":\"keyword.control.import.typst\"},{\"match\":\"\\\\b(return)\\\\b\",\"name\":\"keyword.control.flow.typst\"},{\"include\":\"#constants\"},{\"comment\":\"Function name\",\"match\":\"\\\\b[A-Za-z_][0-9A-Za-z_-]*!?(?=\\\\[|\\\\()\",\"name\":\"entity.name.function.typst\"},{\"comment\":\"Function name\",\"match\":\"(?<=\\\\bshow\\\\s*)\\\\b[A-Za-z_][0-9A-Za-z_-]*(?=\\\\s*[:.])\",\"name\":\"entity.name.function.typst\"},{\"begin\":\"(?<=\\\\b[A-Za-z_][0-9A-Za-z_-]*!?)\\\\(\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.group.typst\"}},\"comment\":\"Function arguments\",\"end\":\"\\\\)\",\"patterns\":[{\"include\":\"#arguments\"}]},{\"match\":\"\\\\b[A-Za-z_][0-9A-Za-z_-]*\\\\b\",\"name\":\"variable.other.typst\"},{\"begin\":\"\\\\(\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.group.typst\"}},\"end\":\"\\\\)|(?=;)\",\"name\":\"meta.group.typst\",\"patterns\":[{\"include\":\"#code\"}]}]},\"comments\":{\"patterns\":[{\"begin\":\"/\\\\*\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.comment.typst\"}},\"end\":\"\\\\*/\",\"name\":\"comment.block.typst\",\"patterns\":[{\"include\":\"#comments\"}]},{\"begin\":\"(?<!:)//\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.typst\"}},\"end\":\"\\n\",\"name\":\"comment.line.double-slash.typst\",\"patterns\":[{\"include\":\"#comments\"}]}]},\"common\":{\"patterns\":[{\"include\":\"#comments\"}]},\"constants\":{\"patterns\":[{\"match\":\"\\\\bnone\\\\b\",\"name\":\"constant.language.none.typst\"},{\"match\":\"\\\\bauto\\\\b\",\"name\":\"constant.language.auto.typst\"},{\"match\":\"\\\\b(true|false)\\\\b\",\"name\":\"constant.language.boolean.typst\"},{\"match\":\"\\\\b(\\\\d*)?\\\\.?\\\\d+([eE][+-]?\\\\d+)?(mm|pt|cm|in|em)\\\\b\",\"name\":\"constant.numeric.length.typst\"},{\"match\":\"\\\\b(\\\\d*)?\\\\.?\\\\d+([eE][+-]?\\\\d+)?(rad|deg)\\\\b\",\"name\":\"constant.numeric.angle.typst\"},{\"match\":\"\\\\b(\\\\d*)?\\\\.?\\\\d+([eE][+-]?\\\\d+)?%\",\"name\":\"constant.numeric.percentage.typst\"},{\"match\":\"\\\\b(\\\\d*)?\\\\.?\\\\d+([eE][+-]?\\\\d+)?fr\",\"name\":\"constant.numeric.fr.typst\"},{\"match\":\"\\\\b\\\\d+\\\\b\",\"name\":\"constant.numeric.integer.typst\"},{\"match\":\"\\\\b(\\\\d*)?\\\\.?\\\\d+([eE][+-]?\\\\d+)?\\\\b\",\"name\":\"constant.numeric.float.typst\"},{\"begin\":\"\\\"\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.string.typst\"}},\"end\":\"\\\"\",\"name\":\"string.quoted.double.typst\",\"patterns\":[{\"match\":\"\\\\\\\\([\\\\\\\\\\\"nrt]|u\\\\{?[0-9a-zA-Z]*\\\\}?)\",\"name\":\"constant.character.escape.string.typst\"}]},{\"begin\":\"\\\\$\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.string.math.typst\"}},\"end\":\"\\\\$\",\"name\":\"string.other.math.typst\"}]},\"markup\":{\"patterns\":[{\"include\":\"#common\"},{\"match\":\"\\\\\\\\([\\\\\\\\/\\\\[\\\\]{}#*_=~`$-.]|u\\\\{[0-9a-zA-Z]*\\\\}?)\",\"name\":\"constant.character.escape.content.typst\"},{\"match\":\"\\\\\\\\\",\"name\":\"punctuation.definition.linebreak.typst\"},{\"match\":\"~\",\"name\":\"punctuation.definition.nonbreaking-space.typst\"},{\"match\":\"-\\\\?\",\"name\":\"punctuation.definition.shy.typst\"},{\"match\":\"---\",\"name\":\"punctuation.definition.em-dash.typst\"},{\"match\":\"--\",\"name\":\"punctuation.definition.en-dash.typst\"},{\"match\":\"\\\\.\\\\.\\\\.\",\"name\":\"punctuation.definition.ellipsis.typst\"},{\"match\":\":([a-zA-Z0-9]+:)+\",\"name\":\"constant.symbol.typst\"},{\"begin\":\"(^\\\\*|\\\\*$|((?<=\\\\W|_)\\\\*)|(\\\\*(?=\\\\W|_)))\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.bold.typst\"}},\"end\":\"(^\\\\*|\\\\*$|((?<=\\\\W|_)\\\\*)|(\\\\*(?=\\\\W|_)))|\\n|(?=\\\\])\",\"name\":\"markup.bold.typst\",\"patterns\":[{\"include\":\"#markup\"}]},{\"begin\":\"(^_|_$|((?<=\\\\W|_)_)|(_(?=\\\\W|_)))\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.italic.typst\"}},\"end\":\"(^_|_$|((?<=\\\\W|_)_)|(_(?=\\\\W|_)))|\\n|(?=\\\\])\",\"name\":\"markup.italic.typst\",\"patterns\":[{\"include\":\"#markup\"}]},{\"match\":\"https?://[0-9a-zA-Z~/%#&=',;\\\\.+?]*\",\"name\":\"markup.underline.link.typst\"},{\"begin\":\"`{3,}\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.raw.typst\"}},\"end\":\"\\\\0\",\"name\":\"markup.raw.block.typst\"},{\"begin\":\"`\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.raw.typst\"}},\"end\":\"`\",\"name\":\"markup.raw.inline.typst\"},{\"begin\":\"\\\\$\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.string.math.typst\"}},\"end\":\"\\\\$\",\"name\":\"string.other.math.typst\"},{\"begin\":\"^\\\\s*=+\\\\s+\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.heading.typst\"}},\"contentName\":\"entity.name.section.typst\",\"end\":\"\\n|(?=<)\",\"name\":\"markup.heading.typst\",\"patterns\":[{\"include\":\"#markup\"}]},{\"match\":\"^\\\\s*-\\\\s+\",\"name\":\"punctuation.definition.list.unnumbered.typst\"},{\"match\":\"^\\\\s*(\\\\d*\\\\.|\\\\+)\\\\s+\",\"name\":\"punctuation.definition.list.numbered.typst\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.list.description.typst\"},\"2\":{\"name\":\"markup.list.term.typst\"}},\"match\":\"^\\\\s*(/)\\\\s+([^:]*:)\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.label.typst\"}},\"match\":\"<[A-Za-z_][0-9A-Za-z_-]*>\",\"name\":\"entity.other.label.typst\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.reference.typst\"}},\"match\":\"(@)[A-Za-z_][0-9A-Za-z_-]*\",\"name\":\"entity.other.reference.typst\"},{\"begin\":\"(#)(let|set|show)\\\\b\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.other.typst\"},\"1\":{\"name\":\"punctuation.definition.keyword.typst\"}},\"end\":\"\\n|(;)|(?=])\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.terminator.statement.typst\"}},\"patterns\":[{\"include\":\"#code\"}]},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.keyword.typst\"}},\"match\":\"(#)(as|in)\\\\b\",\"name\":\"keyword.other.typst\"},{\"begin\":\"((#)if|(?<=(}|])\\\\s*)else)\\\\b\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.control.conditional.typst\"},\"2\":{\"name\":\"punctuation.definition.keyword.typst\"}},\"end\":\"\\n|(?=])|(?<=}|])\",\"patterns\":[{\"include\":\"#code\"}]},{\"begin\":\"(#)(for|while)\\\\b\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.control.loop.typst\"},\"1\":{\"name\":\"punctuation.definition.keyword.typst\"}},\"end\":\"\\n|(?=])|(?<=}|])\",\"patterns\":[{\"include\":\"#code\"}]},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.keyword.typst\"}},\"match\":\"(#)(break|continue)\\\\b\",\"name\":\"keyword.control.loop.typst\"},{\"begin\":\"(#)(import|include|export)\\\\b\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.control.import.typst\"},\"1\":{\"name\":\"punctuation.definition.keyword.typst\"}},\"end\":\"\\n|(;)|(?=])\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.terminator.statement.typst\"}},\"patterns\":[{\"include\":\"#code\"}]},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.keyword.typst\"}},\"match\":\"(#)(return)\\\\b\",\"name\":\"keyword.control.flow.typst\"},{\"captures\":{\"2\":{\"name\":\"punctuation.definition.function.typst\"}},\"comment\":\"Function name\",\"match\":\"((#)[A-Za-z_][0-9A-Za-z_-]*!?)(?=\\\\[|\\\\()\",\"name\":\"entity.name.function.typst\"},{\"begin\":\"(?<=#[A-Za-z_][0-9A-Za-z_-]*!?)\\\\(\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.group.typst\"}},\"comment\":\"Function arguments\",\"end\":\"\\\\)\",\"patterns\":[{\"include\":\"#arguments\"}]},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.variable.typst\"}},\"match\":\"(#)[A-Za-z_][.0-9A-Za-z_-]*\",\"name\":\"entity.other.interpolated.typst\"},{\"begin\":\"#\",\"end\":\"\\\\s\",\"name\":\"meta.block.content.typst\",\"patterns\":[{\"include\":\"#code\"}]}]}},\"scopeName\":\"source.typst\",\"aliases\":[\"typ\"]}"));
const __TURBOPACK__default__export__ = [
    lang
];
}}),

};

//# sourceMappingURL=1c5d4_shiki_dist_langs_typst_mjs_dc7278._.js.map