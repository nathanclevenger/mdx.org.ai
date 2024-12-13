module.exports = {

"[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/jsonc.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lang = Object.freeze(JSON.parse("{\"displayName\":\"JSON with Comments\",\"name\":\"jsonc\",\"patterns\":[{\"include\":\"#value\"}],\"repository\":{\"array\":{\"begin\":\"\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.array.begin.json.comments\"}},\"end\":\"\\\\]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.array.end.json.comments\"}},\"name\":\"meta.structure.array.json.comments\",\"patterns\":[{\"include\":\"#value\"},{\"match\":\",\",\"name\":\"punctuation.separator.array.json.comments\"},{\"match\":\"[^\\\\s\\\\]]\",\"name\":\"invalid.illegal.expected-array-separator.json.comments\"}]},\"comments\":{\"patterns\":[{\"begin\":\"/\\\\*\\\\*(?!/)\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.comment.json.comments\"}},\"end\":\"\\\\*/\",\"name\":\"comment.block.documentation.json.comments\"},{\"begin\":\"/\\\\*\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.comment.json.comments\"}},\"end\":\"\\\\*/\",\"name\":\"comment.block.json.comments\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.comment.json.comments\"}},\"match\":\"(//).*$\\\\n?\",\"name\":\"comment.line.double-slash.js\"}]},\"constant\":{\"match\":\"\\\\b(?:true|false|null)\\\\b\",\"name\":\"constant.language.json.comments\"},\"number\":{\"match\":\"-?(?:0|[1-9]\\\\d*)(?:(?:\\\\.\\\\d+)?(?:[eE][+-]?\\\\d+)?)?\",\"name\":\"constant.numeric.json.comments\"},\"object\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.dictionary.begin.json.comments\"}},\"end\":\"\\\\}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.dictionary.end.json.comments\"}},\"name\":\"meta.structure.dictionary.json.comments\",\"patterns\":[{\"comment\":\"the JSON object key\",\"include\":\"#objectkey\"},{\"include\":\"#comments\"},{\"begin\":\":\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.separator.dictionary.key-value.json.comments\"}},\"end\":\"(,)|(?=\\\\})\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.separator.dictionary.pair.json.comments\"}},\"name\":\"meta.structure.dictionary.value.json.comments\",\"patterns\":[{\"comment\":\"the JSON object value\",\"include\":\"#value\"},{\"match\":\"[^\\\\s,]\",\"name\":\"invalid.illegal.expected-dictionary-separator.json.comments\"}]},{\"match\":\"[^\\\\s}]\",\"name\":\"invalid.illegal.expected-dictionary-separator.json.comments\"}]},\"objectkey\":{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.support.type.property-name.begin.json.comments\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.support.type.property-name.end.json.comments\"}},\"name\":\"string.json.comments support.type.property-name.json.comments\",\"patterns\":[{\"include\":\"#stringcontent\"}]},\"string\":{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.json.comments\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.json.comments\"}},\"name\":\"string.quoted.double.json.comments\",\"patterns\":[{\"include\":\"#stringcontent\"}]},\"stringcontent\":{\"patterns\":[{\"match\":\"\\\\\\\\(?:[\\\"\\\\\\\\/bfnrt]|u[0-9a-fA-F]{4})\",\"name\":\"constant.character.escape.json.comments\"},{\"match\":\"\\\\\\\\.\",\"name\":\"invalid.illegal.unrecognized-string-escape.json.comments\"}]},\"value\":{\"patterns\":[{\"include\":\"#constant\"},{\"include\":\"#number\"},{\"include\":\"#string\"},{\"include\":\"#array\"},{\"include\":\"#object\"},{\"include\":\"#comments\"}]}},\"scopeName\":\"source.json.comments\"}"));
const __TURBOPACK__default__export__ = [
    lang
];
}}),

};

//# sourceMappingURL=1c5d4_shiki_dist_langs_jsonc_mjs_303765._.js.map