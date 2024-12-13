module.exports = {

"[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/vala.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lang = Object.freeze(JSON.parse("{\"displayName\":\"Vala\",\"fileTypes\":[\"vala\",\"vapi\",\"gs\"],\"name\":\"vala\",\"patterns\":[{\"include\":\"#code\"}],\"repository\":{\"code\":{\"patterns\":[{\"include\":\"#comments\"},{\"include\":\"#constants\"},{\"include\":\"#strings\"},{\"include\":\"#keywords\"},{\"include\":\"#types\"},{\"include\":\"#functions\"},{\"include\":\"#variables\"}]},\"comments\":{\"patterns\":[{\"captures\":{\"0\":{\"name\":\"punctuation.definition.comment.vala\"}},\"match\":\"/\\\\*\\\\*/\",\"name\":\"comment.block.empty.vala\"},{\"include\":\"text.html.javadoc\"},{\"include\":\"#comments-inline\"}]},\"comments-inline\":{\"patterns\":[{\"begin\":\"/\\\\*\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.comment.vala\"}},\"end\":\"\\\\*/\",\"name\":\"comment.block.vala\"},{\"captures\":{\"1\":{\"name\":\"comment.line.double-slash.vala\"},\"2\":{\"name\":\"punctuation.definition.comment.vala\"}},\"match\":\"\\\\s*((//).*$\\\\n?)\"}]},\"constants\":{\"patterns\":[{\"match\":\"\\\\b((0(x|X)[0-9a-fA-F]*)|((\\\\d+\\\\.?\\\\d*)|(\\\\.\\\\d+))((e|E)(\\\\+|-)?\\\\d+)?)([LlFfUuDd]|UL|ul)?\\\\b\",\"name\":\"constant.numeric.vala\"},{\"match\":\"\\\\b([A-Z][A-Z0-9_]+)\\\\b\",\"name\":\"variable.other.constant.vala\"}]},\"functions\":{\"patterns\":[{\"match\":\"(\\\\w+)(?=\\\\s*(<[\\\\s\\\\w.]+>\\\\s*)?\\\\()\",\"name\":\"entity.name.function.vala\"}]},\"keywords\":{\"patterns\":[{\"match\":\"(?<=^|[^@\\\\w\\\\.])(as|do|if|in|is|not|or|and|for|get|new|out|ref|set|try|var|base|case|else|enum|lock|null|this|true|void|weak|async|break|catch|class|const|false|owned|throw|using|while|with|yield|delete|extern|inline|params|public|return|sealed|signal|sizeof|static|struct|switch|throws|typeof|unlock|default|dynamic|ensures|finally|foreach|private|unowned|virtual|abstract|continue|delegate|internal|override|requires|volatile|construct|interface|namespace|protected|errordomain)\\\\b\",\"name\":\"keyword.vala\"},{\"match\":\"(?<=^|[^@\\\\w\\\\.])(bool|double|float|unichar|unichar2|char|uchar|int|uint|long|ulong|short|ushort|size_t|ssize_t|string|string16|string32|void|signal|int8|int16|int32|int64|uint8|uint16|uint32|uint64|va_list|time_t)\\\\b\",\"name\":\"keyword.vala\"},{\"match\":\"(#if|#elif|#else|#endif)\",\"name\":\"keyword.vala\"}]},\"strings\":{\"patterns\":[{\"begin\":\"\\\"\\\"\\\"\",\"end\":\"\\\"\\\"\\\"\",\"name\":\"string.quoted.triple.vala\"},{\"begin\":\"@\\\"\",\"end\":\"\\\"\",\"name\":\"string.quoted.interpolated.vala\",\"patterns\":[{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.vala\"},{\"match\":\"\\\\$\\\\w+\",\"name\":\"constant.character.escape.vala\"},{\"match\":\"\\\\$\\\\(([^)(]|\\\\(([^)(]|\\\\([^)]*\\\\))*\\\\))*\\\\)\",\"name\":\"constant.character.escape.vala\"}]},{\"begin\":\"\\\"\",\"end\":\"\\\"\",\"name\":\"string.quoted.double.vala\",\"patterns\":[{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.vala\"}]},{\"begin\":\"'\",\"end\":\"'\",\"name\":\"string.quoted.single.vala\",\"patterns\":[{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.vala\"}]},{\"match\":\"/((\\\\\\\\/)|([^/]))*/(?=\\\\s*[,;)\\\\.\\\\n])\",\"name\":\"string.regexp.vala\"}]},\"types\":{\"patterns\":[{\"match\":\"(?<=^|[^@\\\\w\\\\.])(bool|double|float|unichar|unichar2|char|uchar|int|uint|long|ulong|short|ushort|size_t|ssize_t|string|string16|string32|void|signal|int8|int16|int32|int64|uint8|uint16|uint32|uint64|va_list|time_t)\\\\b\",\"name\":\"storage.type.primitive.vala\"},{\"match\":\"\\\\b([A-Z]+\\\\w*)\\\\b\",\"name\":\"entity.name.type.vala\"}]},\"variables\":{\"patterns\":[{\"match\":\"\\\\b([_a-z]+\\\\w*)\\\\b\",\"name\":\"variable.other.vala\"}]}},\"scopeName\":\"source.vala\"}"));
const __TURBOPACK__default__export__ = [
    lang
];
}}),

};

//# sourceMappingURL=1c5d4_shiki_dist_langs_vala_mjs_f6ceaf._.js.map