module.exports = {

"[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/json5.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lang = Object.freeze(JSON.parse("{\"displayName\":\"JSON5\",\"fileTypes\":[\"json5\"],\"name\":\"json5\",\"patterns\":[{\"include\":\"#comments\"},{\"include\":\"#value\"}],\"repository\":{\"array\":{\"begin\":\"\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.array.begin.json5\"}},\"end\":\"\\\\]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.array.end.json5\"}},\"name\":\"meta.structure.array.json5\",\"patterns\":[{\"include\":\"#comments\"},{\"include\":\"#value\"},{\"match\":\",\",\"name\":\"punctuation.separator.array.json5\"},{\"match\":\"[^\\\\s\\\\]]\",\"name\":\"invalid.illegal.expected-array-separator.json5\"}]},\"comments\":{\"patterns\":[{\"match\":\"/{2}.*\",\"name\":\"comment.single.json5\"},{\"begin\":\"/\\\\*\\\\*(?!/)\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.comment.json5\"}},\"end\":\"\\\\*/\",\"name\":\"comment.block.documentation.json5\"},{\"begin\":\"/\\\\*\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.comment.json5\"}},\"end\":\"\\\\*/\",\"name\":\"comment.block.json5\"}]},\"constant\":{\"match\":\"\\\\b(?:true|false|null|Infinity|NaN)\\\\b\",\"name\":\"constant.language.json5\"},\"infinity\":{\"match\":\"(-)*\\\\b(?:Infinity|NaN)\\\\b\",\"name\":\"constant.language.json5\"},\"key\":{\"name\":\"string.key.json5\",\"patterns\":[{\"include\":\"#stringSingle\"},{\"include\":\"#stringDouble\"},{\"match\":\"[a-zA-Z0-9_-]\",\"name\":\"string.key.json5\"}]},\"number\":{\"patterns\":[{\"comment\":\"handles hexadecimal numbers\",\"match\":\"(0x)[0-9a-fA-f]*\",\"name\":\"constant.hex.numeric.json5\"},{\"comment\":\"handles integer and decimal numbers\",\"match\":\"[+-.]?(?=[1-9]|0(?!\\\\d))\\\\d+(\\\\.\\\\d+)?([eE][+-]?\\\\d+)?\",\"name\":\"constant.dec.numeric.json5\"}]},\"object\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.dictionary.begin.json5\"}},\"comment\":\"a json5 object\",\"end\":\"\\\\}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.dictionary.end.json5\"}},\"name\":\"meta.structure.dictionary.json5\",\"patterns\":[{\"include\":\"#comments\"},{\"comment\":\"the json5 object key\",\"include\":\"#key\"},{\"begin\":\":\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.separator.dictionary.key-value.json5\"}},\"end\":\"(,)|(?=\\\\})\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.separator.dictionary.pair.json5\"}},\"name\":\"meta.structure.dictionary.value.json5\",\"patterns\":[{\"comment\":\"the json5 object value\",\"include\":\"#value\"},{\"match\":\"[^\\\\s,]\",\"name\":\"invalid.illegal.expected-dictionary-separator.json5\"}]},{\"match\":\"[^\\\\s}]\",\"name\":\"invalid.illegal.expected-dictionary-separator.json5\"}]},\"stringDouble\":{\"begin\":\"[\\\"]\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.json5\"}},\"end\":\"[\\\"]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.json5\"}},\"name\":\"string.quoted.json5\",\"patterns\":[{\"match\":\"(?:\\\\\\\\(?:[\\\"\\\\\\\\/bfnrt]|u[0-9a-fA-F]{4}))\",\"name\":\"constant.character.escape.json5\"},{\"match\":\"\\\\\\\\.\",\"name\":\"invalid.illegal.unrecognized-string-escape.json5\"}]},\"stringSingle\":{\"begin\":\"[']\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.json5\"}},\"end\":\"[']\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.json5\"}},\"name\":\"string.quoted.json5\",\"patterns\":[{\"match\":\"(?:\\\\\\\\(?:[\\\"\\\\\\\\/bfnrt]|u[0-9a-fA-F]{4}))\",\"name\":\"constant.character.escape.json5\"},{\"match\":\"\\\\\\\\.\",\"name\":\"invalid.illegal.unrecognized-string-escape.json5\"}]},\"value\":{\"comment\":\"the 'value' diagram at http://json.org\",\"patterns\":[{\"include\":\"#constant\"},{\"include\":\"#infinity\"},{\"include\":\"#number\"},{\"include\":\"#stringSingle\"},{\"include\":\"#stringDouble\"},{\"include\":\"#array\"},{\"include\":\"#object\"}]}},\"scopeName\":\"source.json5\"}"));
const __TURBOPACK__default__export__ = [
    lang
];
}}),

};

//# sourceMappingURL=1c5d4_shiki_dist_langs_json5_mjs_b93027._.js.map