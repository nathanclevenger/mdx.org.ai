module.exports = {

"[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/diff.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lang = Object.freeze(JSON.parse("{\"displayName\":\"Diff\",\"name\":\"diff\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"punctuation.definition.separator.diff\"}},\"match\":\"^((\\\\*{15})|(={67})|(-{3}))$\\\\n?\",\"name\":\"meta.separator.diff\"},{\"match\":\"^\\\\d+(,\\\\d+)*(a|d|c)\\\\d+(,\\\\d+)*$\\\\n?\",\"name\":\"meta.diff.range.normal\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.range.diff\"},\"2\":{\"name\":\"meta.toc-list.line-number.diff\"},\"3\":{\"name\":\"punctuation.definition.range.diff\"}},\"match\":\"^(@@)\\\\s*(.+?)\\\\s*(@@)($\\\\n?)?\",\"name\":\"meta.diff.range.unified\"},{\"captures\":{\"3\":{\"name\":\"punctuation.definition.range.diff\"},\"4\":{\"name\":\"punctuation.definition.range.diff\"},\"6\":{\"name\":\"punctuation.definition.range.diff\"},\"7\":{\"name\":\"punctuation.definition.range.diff\"}},\"match\":\"^(((-{3}) .+ (-{4}))|((\\\\*{3}) .+ (\\\\*{4})))$\\\\n?\",\"name\":\"meta.diff.range.context\"},{\"match\":\"^diff --git a/.*$\\\\n?\",\"name\":\"meta.diff.header.git\"},{\"match\":\"^diff (-|\\\\S+\\\\s+\\\\S+).*$\\\\n?\",\"name\":\"meta.diff.header.command\"},{\"captures\":{\"4\":{\"name\":\"punctuation.definition.from-file.diff\"},\"6\":{\"name\":\"punctuation.definition.from-file.diff\"},\"7\":{\"name\":\"punctuation.definition.from-file.diff\"}},\"match\":\"(^(((-{3}) .+)|((\\\\*{3}) .+))$\\\\n?|^(={4}) .+(?= - ))\",\"name\":\"meta.diff.header.from-file\"},{\"captures\":{\"2\":{\"name\":\"punctuation.definition.to-file.diff\"},\"3\":{\"name\":\"punctuation.definition.to-file.diff\"},\"4\":{\"name\":\"punctuation.definition.to-file.diff\"}},\"match\":\"(^(\\\\+{3}) .+$\\\\n?| (-) .* (={4})$\\\\n?)\",\"name\":\"meta.diff.header.to-file\"},{\"captures\":{\"3\":{\"name\":\"punctuation.definition.inserted.diff\"},\"6\":{\"name\":\"punctuation.definition.inserted.diff\"}},\"match\":\"^(((>)( .*)?)|((\\\\+).*))$\\\\n?\",\"name\":\"markup.inserted.diff\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.changed.diff\"}},\"match\":\"^(!).*$\\\\n?\",\"name\":\"markup.changed.diff\"},{\"captures\":{\"3\":{\"name\":\"punctuation.definition.deleted.diff\"},\"6\":{\"name\":\"punctuation.definition.deleted.diff\"}},\"match\":\"^(((<)( .*)?)|((-).*))$\\\\n?\",\"name\":\"markup.deleted.diff\"},{\"begin\":\"^(#)\",\"captures\":{\"1\":{\"name\":\"punctuation.definition.comment.diff\"}},\"comment\":\"Git produces unified diffs with embedded comments\\\"\",\"end\":\"\\\\n\",\"name\":\"comment.line.number-sign.diff\"},{\"match\":\"^index [0-9a-f]{7,40}\\\\.\\\\.[0-9a-f]{7,40}.*$\\\\n?\",\"name\":\"meta.diff.index.git\"},{\"captures\":{\"1\":{\"name\":\"punctuation.separator.key-value.diff\"},\"2\":{\"name\":\"meta.toc-list.file-name.diff\"}},\"match\":\"^Index(:) (.+)$\\\\n?\",\"name\":\"meta.diff.index\"},{\"match\":\"^Only in .*: .*$\\\\n?\",\"name\":\"meta.diff.only-in\"}],\"scopeName\":\"source.diff\"}"));
const __TURBOPACK__default__export__ = [
    lang
];
}}),
"[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/git-commit.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shiki$40$1$2e$24$2e$2$2f$node_modules$2f$shiki$2f$dist$2f$langs$2f$diff$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/diff.mjs [app-rsc] (ecmascript)");
;
const lang = Object.freeze(JSON.parse("{\"displayName\":\"Git Commit Message\",\"name\":\"git-commit\",\"patterns\":[{\"begin\":\"(?=^diff --git)\",\"comment\":\"diff presented at the end of the commit message when using commit -v.\",\"contentName\":\"source.diff\",\"end\":\"\\\\z\",\"name\":\"meta.embedded.diff.git-commit\",\"patterns\":[{\"include\":\"source.diff\"}]},{\"begin\":\"^(?!#)\",\"comment\":\"User supplied message\",\"end\":\"^(?=#)\",\"name\":\"meta.scope.message.git-commit\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"invalid.deprecated.line-too-long.git-commit\"},\"2\":{\"name\":\"invalid.illegal.line-too-long.git-commit\"}},\"comment\":\"Mark > 50 lines as deprecated, > 72 as illegal\",\"match\":\"\\\\G.{0,50}(.{0,22}(.*))$\",\"name\":\"meta.scope.subject.git-commit\"}]},{\"begin\":\"^(?=#)\",\"comment\":\"Git supplied metadata in a number of lines starting with #\",\"contentName\":\"comment.line.number-sign.git-commit\",\"end\":\"^(?!#)\",\"name\":\"meta.scope.metadata.git-commit\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"markup.changed.git-commit\"}},\"match\":\"^#\\\\t((modified|renamed):.*)$\"},{\"captures\":{\"1\":{\"name\":\"markup.inserted.git-commit\"}},\"match\":\"^#\\\\t(new file:.*)$\"},{\"captures\":{\"1\":{\"name\":\"markup.deleted.git-commit\"}},\"match\":\"^#\\\\t(deleted.*)$\"},{\"captures\":{\"1\":{\"name\":\"keyword.other.file-type.git-commit\"},\"2\":{\"name\":\"string.unquoted.filename.git-commit\"}},\"comment\":\"Fallback for non-English git commit template\",\"match\":\"^#\\\\t([^:]+): *(.*)$\"}]}],\"scopeName\":\"text.git-commit\",\"embeddedLangs\":[\"diff\"]}"));
const __TURBOPACK__default__export__ = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$shiki$40$1$2e$24$2e$2$2f$node_modules$2f$shiki$2f$dist$2f$langs$2f$diff$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    lang
];
}}),

};

//# sourceMappingURL=1c5d4_shiki_dist_langs_3b39ad._.js.map