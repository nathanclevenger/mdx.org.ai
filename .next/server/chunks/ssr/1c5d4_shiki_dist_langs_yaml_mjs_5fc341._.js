module.exports = {

"[project]/node_modules/.pnpm/shiki@1.24.2/node_modules/shiki/dist/langs/yaml.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lang = Object.freeze(JSON.parse("{\"displayName\":\"YAML\",\"fileTypes\":[\"yaml\",\"yml\",\"rviz\",\"reek\",\"clang-format\",\"yaml-tmlanguage\",\"syntax\",\"sublime-syntax\"],\"firstLineMatch\":\"^%YAML( ?1.\\\\d+)?\",\"name\":\"yaml\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#property\"},{\"include\":\"#directive\"},{\"match\":\"^---\",\"name\":\"entity.other.document.begin.yaml\"},{\"match\":\"^\\\\.{3}\",\"name\":\"entity.other.document.end.yaml\"},{\"include\":\"#node\"}],\"repository\":{\"block-collection\":{\"patterns\":[{\"include\":\"#block-sequence\"},{\"include\":\"#block-mapping\"}]},\"block-mapping\":{\"patterns\":[{\"include\":\"#block-pair\"}]},\"block-node\":{\"patterns\":[{\"include\":\"#prototype\"},{\"include\":\"#block-scalar\"},{\"include\":\"#block-collection\"},{\"include\":\"#flow-scalar-plain-out\"},{\"include\":\"#flow-node\"}]},\"block-pair\":{\"patterns\":[{\"begin\":\"\\\\?\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.key-value.begin.yaml\"}},\"end\":\"(?=\\\\?)|^ *(:)|(:)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.separator.key-value.mapping.yaml\"},\"2\":{\"name\":\"invalid.illegal.expected-newline.yaml\"}},\"name\":\"meta.block-mapping.yaml\",\"patterns\":[{\"include\":\"#block-node\"}]},{\"begin\":\"(?=(?:[^\\\\s[-?:,\\\\[\\\\]{}#&*!|>'\\\"%@`]]|[?:-]\\\\S)([^\\\\s:]|:\\\\S|\\\\s+(?![#\\\\s]))*\\\\s*:(\\\\s|$))\",\"end\":\"(?=\\\\s*$|\\\\s+\\\\#|\\\\s*:(\\\\s|$))\",\"patterns\":[{\"include\":\"#flow-scalar-plain-out-implicit-type\"},{\"begin\":\"[^\\\\s[-?:,\\\\[\\\\]{}#&*!|>'\\\"%@`]]|[?:-]\\\\S\",\"beginCaptures\":{\"0\":{\"name\":\"entity.name.tag.yaml\"}},\"contentName\":\"entity.name.tag.yaml\",\"end\":\"(?=\\\\s*$|\\\\s+\\\\#|\\\\s*:(\\\\s|$))\",\"name\":\"string.unquoted.plain.out.yaml\"}]},{\"match\":\":(?=\\\\s|$)\",\"name\":\"punctuation.separator.key-value.mapping.yaml\"}]},\"block-scalar\":{\"begin\":\"(?:(\\\\|)|(>))([1-9])?([-+])?(.*\\\\n?)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.flow.block-scalar.literal.yaml\"},\"2\":{\"name\":\"keyword.control.flow.block-scalar.folded.yaml\"},\"3\":{\"name\":\"constant.numeric.indentation-indicator.yaml\"},\"4\":{\"name\":\"storage.modifier.chomping-indicator.yaml\"},\"5\":{\"patterns\":[{\"include\":\"#comment\"},{\"match\":\".+\",\"name\":\"invalid.illegal.expected-comment-or-newline.yaml\"}]}},\"end\":\"^(?=\\\\S)|(?!\\\\G)\",\"patterns\":[{\"begin\":\"^([ ]+)(?! )\",\"end\":\"^(?!\\\\1|\\\\s*$)\",\"name\":\"string.unquoted.block.yaml\"}]},\"block-sequence\":{\"match\":\"(-)(?!\\\\S)\",\"name\":\"punctuation.definition.block.sequence.item.yaml\"},\"comment\":{\"begin\":\"(?:(^[ \\\\t]*)|[ \\\\t]+)(?=#\\\\p{Print}*$)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.whitespace.comment.leading.yaml\"}},\"end\":\"(?!\\\\G)\",\"patterns\":[{\"begin\":\"#\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.yaml\"}},\"end\":\"\\\\n\",\"name\":\"comment.line.number-sign.yaml\"}]},\"directive\":{\"begin\":\"^%\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.directive.begin.yaml\"}},\"end\":\"(?=$|[ \\\\t]+($|#))\",\"name\":\"meta.directive.yaml\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"keyword.other.directive.yaml.yaml\"},\"2\":{\"name\":\"constant.numeric.yaml-version.yaml\"}},\"match\":\"\\\\G(YAML)[ \\\\t]+(\\\\d+\\\\.\\\\d+)\"},{\"captures\":{\"1\":{\"name\":\"keyword.other.directive.tag.yaml\"},\"2\":{\"name\":\"storage.type.tag-handle.yaml\"},\"3\":{\"name\":\"support.type.tag-prefix.yaml\"}},\"match\":\"\\\\G(TAG)(?:[ \\\\t]+((?:!(?:[0-9A-Za-z\\\\-]*!)?))(?:[ \\\\t]+(!(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\\\\-#;/?:@&=+$,_.!~*'()\\\\[\\\\]])*|(?![,!\\\\[\\\\]{}])(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\\\\-#;/?:@&=+$,_.!~*'()\\\\[\\\\]])+))?)?\"},{\"captures\":{\"1\":{\"name\":\"support.other.directive.reserved.yaml\"},\"2\":{\"name\":\"string.unquoted.directive-name.yaml\"},\"3\":{\"name\":\"string.unquoted.directive-parameter.yaml\"}},\"match\":\"\\\\G(\\\\w+)(?:[ \\\\t]+(\\\\w+)(?:[ \\\\t]+(\\\\w+))?)?\"},{\"match\":\"\\\\S+\",\"name\":\"invalid.illegal.unrecognized.yaml\"}]},\"flow-alias\":{\"captures\":{\"1\":{\"name\":\"keyword.control.flow.alias.yaml\"},\"2\":{\"name\":\"punctuation.definition.alias.yaml\"},\"3\":{\"name\":\"variable.other.alias.yaml\"},\"4\":{\"name\":\"invalid.illegal.character.anchor.yaml\"}},\"match\":\"((\\\\*))([^\\\\s\\\\[\\\\]/{/},]+)([^\\\\s\\\\]},]\\\\S*)?\"},\"flow-collection\":{\"patterns\":[{\"include\":\"#flow-sequence\"},{\"include\":\"#flow-mapping\"}]},\"flow-mapping\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.mapping.begin.yaml\"}},\"end\":\"\\\\}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.mapping.end.yaml\"}},\"name\":\"meta.flow-mapping.yaml\",\"patterns\":[{\"include\":\"#prototype\"},{\"match\":\",\",\"name\":\"punctuation.separator.mapping.yaml\"},{\"include\":\"#flow-pair\"}]},\"flow-node\":{\"patterns\":[{\"include\":\"#prototype\"},{\"include\":\"#flow-alias\"},{\"include\":\"#flow-collection\"},{\"include\":\"#flow-scalar\"}]},\"flow-pair\":{\"patterns\":[{\"begin\":\"\\\\?\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.key-value.begin.yaml\"}},\"end\":\"(?=[},\\\\]])\",\"name\":\"meta.flow-pair.explicit.yaml\",\"patterns\":[{\"include\":\"#prototype\"},{\"include\":\"#flow-pair\"},{\"include\":\"#flow-node\"},{\"begin\":\":(?=\\\\s|$|[\\\\[\\\\]{},])\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.separator.key-value.mapping.yaml\"}},\"end\":\"(?=[},\\\\]])\",\"patterns\":[{\"include\":\"#flow-value\"}]}]},{\"begin\":\"(?=(?:[^\\\\s[-?:,\\\\[\\\\]{}#&*!|>'\\\"%@`]]|[?:-][^\\\\s[\\\\[\\\\]{},]])([^\\\\s:[\\\\[\\\\]{},]]|:[^\\\\s[\\\\[\\\\]{},]]|\\\\s+(?![#\\\\s]))*\\\\s*:(\\\\s|$))\",\"end\":\"(?=\\\\s*$|\\\\s+\\\\#|\\\\s*:(\\\\s|$)|\\\\s*:[\\\\[\\\\]{},]|\\\\s*[\\\\[\\\\]{},])\",\"name\":\"meta.flow-pair.key.yaml\",\"patterns\":[{\"include\":\"#flow-scalar-plain-in-implicit-type\"},{\"begin\":\"[^\\\\s[-?:,\\\\[\\\\]{}#&*!|>'\\\"%@`]]|[?:-][^\\\\s[\\\\[\\\\]{},]]\",\"beginCaptures\":{\"0\":{\"name\":\"entity.name.tag.yaml\"}},\"contentName\":\"entity.name.tag.yaml\",\"end\":\"(?=\\\\s*$|\\\\s+\\\\#|\\\\s*:(\\\\s|$)|\\\\s*:[\\\\[\\\\]{},]|\\\\s*[\\\\[\\\\]{},])\",\"name\":\"string.unquoted.plain.in.yaml\"}]},{\"include\":\"#flow-node\"},{\"begin\":\":(?=\\\\s|$|[\\\\[\\\\]{},])\",\"captures\":{\"0\":{\"name\":\"punctuation.separator.key-value.mapping.yaml\"}},\"end\":\"(?=[},\\\\]])\",\"name\":\"meta.flow-pair.yaml\",\"patterns\":[{\"include\":\"#flow-value\"}]}]},\"flow-scalar\":{\"patterns\":[{\"include\":\"#flow-scalar-double-quoted\"},{\"include\":\"#flow-scalar-single-quoted\"},{\"include\":\"#flow-scalar-plain-in\"}]},\"flow-scalar-double-quoted\":{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.yaml\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.yaml\"}},\"name\":\"string.quoted.double.yaml\",\"patterns\":[{\"match\":\"\\\\\\\\([0abtnvfre \\\"/\\\\\\\\N_Lp]|x\\\\d\\\\d|u\\\\d{4}|U\\\\d{8})\",\"name\":\"constant.character.escape.yaml\"},{\"match\":\"\\\\\\\\\\\\n\",\"name\":\"constant.character.escape.double-quoted.newline.yaml\"}]},\"flow-scalar-plain-in\":{\"patterns\":[{\"include\":\"#flow-scalar-plain-in-implicit-type\"},{\"begin\":\"[^\\\\s[-?:,\\\\[\\\\]{}#&*!|>'\\\"%@`]]|[?:-][^\\\\s[\\\\[\\\\]{},]]\",\"end\":\"(?=\\\\s*$|\\\\s+\\\\#|\\\\s*:(\\\\s|$)|\\\\s*:[\\\\[\\\\]{},]|\\\\s*[\\\\[\\\\]{},])\",\"name\":\"string.unquoted.plain.in.yaml\"}]},\"flow-scalar-plain-in-implicit-type\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"constant.language.null.yaml\"},\"2\":{\"name\":\"constant.language.boolean.yaml\"},\"3\":{\"name\":\"constant.numeric.integer.yaml\"},\"4\":{\"name\":\"constant.numeric.float.yaml\"},\"5\":{\"name\":\"constant.other.timestamp.yaml\"},\"6\":{\"name\":\"constant.language.value.yaml\"},\"7\":{\"name\":\"constant.language.merge.yaml\"}},\"match\":\"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?\\\\d)+))|((?:[-+]?(?:\\\\d[0-9_]*)?\\\\.[0-9.]*(?:[eE][-+]\\\\d+)?|[-+]?\\\\d[0-9_]*(?::[0-5]?\\\\d)+\\\\.[0-9_]*|[-+]?\\\\.(?:inf|Inf|INF)|\\\\.(?:nan|NaN|NAN)))|((?:\\\\d{4}-\\\\d{2}-\\\\d{2}|\\\\d{4}-\\\\d{1,2}-\\\\d{1,2}(?:[Tt]|[ \\\\t]+)\\\\d{1,2}:\\\\d{2}:\\\\d{2}(?:\\\\.\\\\d*)?(?:(?:[ \\\\t]*)Z|[-+]\\\\d{1,2}(?::\\\\d{1,2})?)?))|(=)|(<<))(?:(?=\\\\s*$|\\\\s+\\\\#|\\\\s*:(\\\\s|$)|\\\\s*:[\\\\[\\\\]{},]|\\\\s*[\\\\[\\\\]{},]))\"}]},\"flow-scalar-plain-out\":{\"patterns\":[{\"include\":\"#flow-scalar-plain-out-implicit-type\"},{\"begin\":\"[^\\\\s[-?:,\\\\[\\\\]{}#&*!|>'\\\"%@`]]|[?:-]\\\\S\",\"end\":\"(?=\\\\s*$|\\\\s+\\\\#|\\\\s*:(\\\\s|$))\",\"name\":\"string.unquoted.plain.out.yaml\"}]},\"flow-scalar-plain-out-implicit-type\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"constant.language.null.yaml\"},\"2\":{\"name\":\"constant.language.boolean.yaml\"},\"3\":{\"name\":\"constant.numeric.integer.yaml\"},\"4\":{\"name\":\"constant.numeric.float.yaml\"},\"5\":{\"name\":\"constant.other.timestamp.yaml\"},\"6\":{\"name\":\"constant.language.value.yaml\"},\"7\":{\"name\":\"constant.language.merge.yaml\"}},\"match\":\"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?\\\\d)+))|((?:[-+]?(?:\\\\d[0-9_]*)?\\\\.[0-9.]*(?:[eE][-+]\\\\d+)?|[-+]?\\\\d[0-9_]*(?::[0-5]?\\\\d)+\\\\.[0-9_]*|[-+]?\\\\.(?:inf|Inf|INF)|\\\\.(?:nan|NaN|NAN)))|((?:\\\\d{4}-\\\\d{2}-\\\\d{2}|\\\\d{4}-\\\\d{1,2}-\\\\d{1,2}(?:[Tt]|[ \\\\t]+)\\\\d{1,2}:\\\\d{2}:\\\\d{2}(?:\\\\.\\\\d*)?(?:(?:[ \\\\t]*)Z|[-+]\\\\d{1,2}(?::\\\\d{1,2})?)?))|(=)|(<<))(?:(?=\\\\s*$|\\\\s+\\\\#|\\\\s*:(\\\\s|$)))\"}]},\"flow-scalar-single-quoted\":{\"begin\":\"'\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.yaml\"}},\"end\":\"'(?!')\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.yaml\"}},\"name\":\"string.quoted.single.yaml\",\"patterns\":[{\"match\":\"''\",\"name\":\"constant.character.escape.single-quoted.yaml\"}]},\"flow-sequence\":{\"begin\":\"\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.sequence.begin.yaml\"}},\"end\":\"\\\\]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.sequence.end.yaml\"}},\"name\":\"meta.flow-sequence.yaml\",\"patterns\":[{\"include\":\"#prototype\"},{\"match\":\",\",\"name\":\"punctuation.separator.sequence.yaml\"},{\"include\":\"#flow-pair\"},{\"include\":\"#flow-node\"}]},\"flow-value\":{\"patterns\":[{\"begin\":\"\\\\G(?![},\\\\]])\",\"end\":\"(?=[},\\\\]])\",\"name\":\"meta.flow-pair.value.yaml\",\"patterns\":[{\"include\":\"#flow-node\"}]}]},\"node\":{\"patterns\":[{\"include\":\"#block-node\"}]},\"property\":{\"begin\":\"(?=!|&)\",\"end\":\"(?!\\\\G)\",\"name\":\"meta.property.yaml\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"keyword.control.property.anchor.yaml\"},\"2\":{\"name\":\"punctuation.definition.anchor.yaml\"},\"3\":{\"name\":\"entity.name.type.anchor.yaml\"},\"4\":{\"name\":\"invalid.illegal.character.anchor.yaml\"}},\"match\":\"\\\\G((&))([^\\\\s\\\\[\\\\]/{/},]+)(\\\\S+)?\"},{\"match\":\"\\\\G(?:!<(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\\\\-#;/?:@&=+$,_.!~*'()\\\\[\\\\]])+>|(?:!(?:[0-9A-Za-z\\\\-]*!)?)(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\\\\-#;/?:@&=+$_.~*'()])+|!)(?= |\\\\t|$)\",\"name\":\"storage.type.tag-handle.yaml\"},{\"match\":\"\\\\S+\",\"name\":\"invalid.illegal.tag-handle.yaml\"}]},\"prototype\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#property\"}]}},\"scopeName\":\"source.yaml\",\"aliases\":[\"yml\"]}"));
const __TURBOPACK__default__export__ = [
    lang
];
}}),

};

//# sourceMappingURL=1c5d4_shiki_dist_langs_yaml_mjs_5fc341._.js.map