module.exports = {

"[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/lean.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lang = Object.freeze(JSON.parse("{\"displayName\":\"Lean 4\",\"fileTypes\":[],\"name\":\"lean\",\"patterns\":[{\"include\":\"#comments\"},{\"match\":\"\\\\b(Prop|Type|Sort)\\\\b\",\"name\":\"storage.type.lean4\"},{\"match\":\"\\\\battribute\\\\b\\\\s*\\\\[[^\\\\]]*\\\\]\",\"name\":\"storage.modifier.lean4\"},{\"match\":\"@\\\\[[^\\\\]]*\\\\]\",\"name\":\"storage.modifier.lean4\"},{\"match\":\"\\\\b(?<!\\\\.)(global|local|scoped|partial|unsafe|private|protected|noncomputable)(?!\\\\.)\\\\b\",\"name\":\"storage.modifier.lean4\"},{\"match\":\"\\\\b(sorry|admit|stop)\\\\b\",\"name\":\"invalid.illegal.lean4\"},{\"match\":\"#(print|eval|reduce|check|check_failure)\\\\b\",\"name\":\"keyword.other.lean4\"},{\"match\":\"\\\\bderiving\\\\s+instance\\\\b\",\"name\":\"keyword.other.command.lean4\"},{\"begin\":\"\\\\b(?<!\\\\.)(inductive|coinductive|structure|theorem|axiom|abbrev|lemma|def|instance|class|constant)\\\\b\\\\s+(\\\\{[^}]*\\\\})?\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.other.definitioncommand.lean4\"}},\"end\":\"(?=\\\\bwith\\\\b|\\\\bextends\\\\b|\\\\bwhere\\\\b|[:\\\\|(\\\\[{⦃<>])\",\"name\":\"meta.definitioncommand.lean4\",\"patterns\":[{\"include\":\"#comments\"},{\"include\":\"#definitionName\"},{\"match\":\",\"}]},{\"match\":\"\\\\b(?<!\\\\.)(theorem|show|have|from|suffices|nomatch|def|class|structure|instance|set_option|initialize|builtin_initialize|example|inductive|coinductive|axiom|constant|universe|universes|variable|variables|import|open|export|theory|prelude|renaming|hiding|exposing|do|by|let|extends|mutual|mut|where|rec|syntax|macro_rules|macro|deriving|fun|section|namespace|end|infix|infixl|infixr|postfix|prefix|notation|abbrev|if|then|else|calc|match|with|for|in|unless|try|catch|finally|return|continue|break)(?!\\\\.)\\\\b\",\"name\":\"keyword.other.lean4\"},{\"begin\":\"«\",\"contentName\":\"entity.name.lean4\",\"end\":\"»\"},{\"begin\":\"(s!)\\\"\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.other.lean4\"}},\"end\":\"\\\"\",\"name\":\"string.interpolated.lean4\",\"patterns\":[{\"begin\":\"(\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.other.lean4\"}},\"end\":\"(\\\\})\",\"endCaptures\":{\"1\":{\"name\":\"keyword.other.lean4\"}},\"patterns\":[{\"include\":\"$self\"}]},{\"match\":\"\\\\\\\\[\\\\\\\\\\\"ntr']\",\"name\":\"constant.character.escape.lean4\"},{\"match\":\"\\\\\\\\x[0-9A-Fa-f][0-9A-Fa-f]\",\"name\":\"constant.character.escape.lean4\"},{\"match\":\"\\\\\\\\u[0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f]\",\"name\":\"constant.character.escape.lean4\"}]},{\"begin\":\"\\\"\",\"end\":\"\\\"\",\"name\":\"string.quoted.double.lean4\",\"patterns\":[{\"match\":\"\\\\\\\\[\\\\\\\\\\\"ntr']\",\"name\":\"constant.character.escape.lean4\"},{\"match\":\"\\\\\\\\x[0-9A-Fa-f][0-9A-Fa-f]\",\"name\":\"constant.character.escape.lean4\"},{\"match\":\"\\\\\\\\u[0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f]\",\"name\":\"constant.character.escape.lean4\"}]},{\"match\":\"\\\\b(true|false)\\\\b\",\"name\":\"constant.language.lean4\"},{\"match\":\"'[^\\\\\\\\']'\",\"name\":\"string.quoted.single.lean4\"},{\"captures\":{\"1\":{\"name\":\"constant.character.escape.lean4\"}},\"match\":\"'(\\\\\\\\(x[0-9A-Fa-f][0-9A-Fa-f]|u[0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f]|.))'\",\"name\":\"string.quoted.single.lean4\"},{\"match\":\"`+[^\\\\[(]\\\\S+\",\"name\":\"entity.name.lean4\"},{\"match\":\"\\\\b(\\\\d+|0([xX][0-9a-fA-F]+)|[-]?(0|[1-9]\\\\d*)(\\\\.\\\\d+)?([eE][+-]?\\\\d+)?)\\\\b\",\"name\":\"constant.numeric.lean4\"}],\"repository\":{\"blockComment\":{\"begin\":\"/-\",\"end\":\"-/\",\"name\":\"comment.block.lean4\",\"patterns\":[{\"include\":\"source.lean4.markdown\"},{\"include\":\"#blockComment\"}]},\"comments\":{\"patterns\":[{\"include\":\"#dashComment\"},{\"include\":\"#docComment\"},{\"include\":\"#stringBlock\"},{\"include\":\"#modDocComment\"},{\"include\":\"#blockComment\"}]},\"dashComment\":{\"begin\":\"--\",\"end\":\"$\",\"name\":\"comment.line.double-dash.lean4\",\"patterns\":[{\"include\":\"source.lean4.markdown\"}]},\"definitionName\":{\"patterns\":[{\"match\":\"\\\\b[^:«»(){}\\\\s=→λ∀?][^:«»(){}\\\\s]*\",\"name\":\"entity.name.function.lean4\"},{\"begin\":\"«\",\"contentName\":\"entity.name.function.lean4\",\"end\":\"»\"}]},\"docComment\":{\"begin\":\"/--\",\"end\":\"-/\",\"name\":\"comment.block.documentation.lean4\",\"patterns\":[{\"include\":\"source.lean4.markdown\"},{\"include\":\"#blockComment\"}]},\"modDocComment\":{\"begin\":\"/-!\",\"end\":\"-/\",\"name\":\"comment.block.documentation.lean4\",\"patterns\":[{\"include\":\"source.lean4.markdown\"},{\"include\":\"#blockComment\"}]}},\"scopeName\":\"source.lean4\",\"aliases\":[\"lean4\"]}"));
const __TURBOPACK__default__export__ = [
    lang
];
}}),

};

//# sourceMappingURL=1c5d4_shiki_dist_langs_lean_mjs_be65b3._.js.map