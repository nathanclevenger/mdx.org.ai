(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/4f1d5_chevrotain_lib_src_7b323e._.js", {

"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/version.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// needs a separate module as this is required inside chevrotain productive code
// and also in the entry point for webpack(api.ts).
// A separate file avoids cyclic dependencies and webpack errors.
__turbopack_esm__({
    "VERSION": (()=>VERSION)
});
const VERSION = "11.0.3"; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/rest.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RestWalker": (()=>RestWalker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/drop.js [app-client] (ecmascript) <export default as drop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/model.js [app-client] (ecmascript)");
;
;
class RestWalker {
    walk(prod, prevRest = []) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(prod.definition, (subProd, index)=>{
            const currRest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(prod.definition, index + 1);
            /* istanbul ignore else */ if (subProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonTerminal"]) {
                this.walkProdRef(subProd, currRest, prevRest);
            } else if (subProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
                this.walkTerminal(subProd, currRest, prevRest);
            } else if (subProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"]) {
                this.walkFlat(subProd, currRest, prevRest);
            } else if (subProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"]) {
                this.walkOption(subProd, currRest, prevRest);
            } else if (subProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatory"]) {
                this.walkAtLeastOne(subProd, currRest, prevRest);
            } else if (subProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatoryWithSeparator"]) {
                this.walkAtLeastOneSep(subProd, currRest, prevRest);
            } else if (subProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionWithSeparator"]) {
                this.walkManySep(subProd, currRest, prevRest);
            } else if (subProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]) {
                this.walkMany(subProd, currRest, prevRest);
            } else if (subProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternation"]) {
                this.walkOr(subProd, currRest, prevRest);
            } else {
                throw Error("non exhaustive match");
            }
        });
    }
    walkTerminal(terminal, currRest, prevRest) {}
    walkProdRef(refProd, currRest, prevRest) {}
    walkFlat(flatProd, currRest, prevRest) {
        // ABCDEF => after the D the rest is EF
        const fullOrRest = currRest.concat(prevRest);
        this.walk(flatProd, fullOrRest);
    }
    walkOption(optionProd, currRest, prevRest) {
        // ABC(DE)?F => after the (DE)? the rest is F
        const fullOrRest = currRest.concat(prevRest);
        this.walk(optionProd, fullOrRest);
    }
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
        // ABC(DE)+F => after the (DE)+ the rest is (DE)?F
        const fullAtLeastOneRest = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"]({
                definition: atLeastOneProd.definition
            })
        ].concat(currRest, prevRest);
        this.walk(atLeastOneProd, fullAtLeastOneRest);
    }
    walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
        // ABC DE(,DE)* F => after the (,DE)+ the rest is (,DE)?F
        const fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
        this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
    }
    walkMany(manyProd, currRest, prevRest) {
        // ABC(DE)*F => after the (DE)* the rest is (DE)?F
        const fullManyRest = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"]({
                definition: manyProd.definition
            })
        ].concat(currRest, prevRest);
        this.walk(manyProd, fullManyRest);
    }
    walkManySep(manySepProd, currRest, prevRest) {
        // ABC (DE(,DE)*)? F => after the (,DE)* the rest is (,DE)?F
        const fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
        this.walk(manySepProd, fullManySepRest);
    }
    walkOr(orProd, currRest, prevRest) {
        // ABC(D|E|F)G => when finding the (D|E|F) the rest is G
        const fullOrRest = currRest.concat(prevRest);
        // walk all different alternatives
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(orProd.definition, (alt)=>{
            // wrapping each alternative in a single definition wrapper
            // to avoid errors in computing the rest of that alternative in the invocation to computeInProdFollows
            // (otherwise for OR([alt1,alt2]) alt2 will be considered in 'rest' of alt1
            const prodWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"]({
                definition: [
                    alt
                ]
            });
            this.walk(prodWrapper, fullOrRest);
        });
    }
}
function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
    const repSepRest = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"]({
            definition: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]({
                    terminalType: repSepProd.separator
                })
            ].concat(repSepProd.definition)
        })
    ];
    const fullRepSepRest = repSepRest.concat(currRest, prevRest);
    return fullRepSepRest;
} //# sourceMappingURL=rest.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/first.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "first": (()=>first),
    "firstForBranching": (()=>firstForBranching),
    "firstForSequence": (()=>firstForSequence),
    "firstForTerminal": (()=>firstForTerminal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__uniq$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js [app-client] (ecmascript) <export default as uniq>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js [app-client] (ecmascript) <export default as map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js [app-client] (ecmascript) <export default as flatten>");
;
;
function first(prod) {
    /* istanbul ignore else */ if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonTerminal"]) {
        // this could in theory cause infinite loops if
        // (1) prod A refs prod B.
        // (2) prod B refs prod A
        // (3) AB can match the empty set
        // in other words a cycle where everything is optional so the first will keep
        // looking ahead for the next optional part and will never exit
        // currently there is no safeguard for this unique edge case because
        // (1) not sure a grammar in which this can happen is useful for anything (productive)
        return first(prod.referencedRule);
    } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
        return firstForTerminal(prod);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSequenceProd"])(prod)) {
        return firstForSequence(prod);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBranchingProd"])(prod)) {
        return firstForBranching(prod);
    } else {
        throw Error("non exhaustive match");
    }
}
function firstForSequence(prod) {
    let firstSet = [];
    const seq = prod.definition;
    let nextSubProdIdx = 0;
    let hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    let currSubProd;
    // so we enter the loop at least once (if the definition is not empty
    let isLastInnerProdOptional = true;
    // scan a sequence until it's end or until we have found a NONE optional production in it
    while(hasInnerProdsRemaining && isLastInnerProdOptional){
        currSubProd = seq[nextSubProdIdx];
        isLastInnerProdOptional = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOptionalProd"])(currSubProd);
        firstSet = firstSet.concat(first(currSubProd));
        nextSubProdIdx = nextSubProdIdx + 1;
        hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__uniq$3e$__["uniq"])(firstSet);
}
function firstForBranching(prod) {
    const allAlternativesFirsts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(prod.definition, (innerProd)=>{
        return first(innerProd);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__uniq$3e$__["uniq"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])(allAlternativesFirsts));
}
function firstForTerminal(terminal) {
    return [
        terminal.terminalType
    ];
} //# sourceMappingURL=first.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// TODO: can this be removed? where is it used?
__turbopack_esm__({
    "IN": (()=>IN)
});
const IN = "_~IN~_"; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/follow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ResyncFollowsWalker": (()=>ResyncFollowsWalker),
    "buildBetweenProdsFollowPrefix": (()=>buildBetweenProdsFollowPrefix),
    "buildInProdFollowPrefix": (()=>buildInProdFollowPrefix),
    "computeAllProdsFollows": (()=>computeAllProdsFollows)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/rest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$first$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/first.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$assign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__assign$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/assign.js [app-client] (ecmascript) <export default as assign>");
;
;
;
;
;
class ResyncFollowsWalker extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RestWalker"] {
    constructor(topProd){
        super();
        this.topProd = topProd;
        this.follows = {};
    }
    startWalking() {
        this.walk(this.topProd);
        return this.follows;
    }
    walkTerminal(terminal, currRest, prevRest) {
    // do nothing! just like in the public sector after 13:00
    }
    walkProdRef(refProd, currRest, prevRest) {
        const followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) + this.topProd.name;
        const fullRest = currRest.concat(prevRest);
        const restProd = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"]({
            definition: fullRest
        });
        const t_in_topProd_follows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$first$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["first"])(restProd);
        this.follows[followName] = t_in_topProd_follows;
    }
}
function computeAllProdsFollows(topProductions) {
    const reSyncFollows = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(topProductions, (topProd)=>{
        const currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$assign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__assign$3e$__["assign"])(reSyncFollows, currRefsFollow);
    });
    return reSyncFollows;
}
function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
    return inner.name + occurenceInParent + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IN"];
}
function buildInProdFollowPrefix(terminal) {
    const terminalName = terminal.terminalType.name;
    return terminalName + terminal.idx + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IN"];
} //# sourceMappingURL=follow.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/reg_exp_parser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clearRegExpParserCache": (()=>clearRegExpParserCache),
    "getRegExpAst": (()=>getRegExpAst)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+regexp-to-ast@11.0.3/node_modules/@chevrotain/regexp-to-ast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$regexp$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+regexp-to-ast@11.0.3/node_modules/@chevrotain/regexp-to-ast/lib/src/regexp-parser.js [app-client] (ecmascript)");
;
let regExpAstCache = {};
const regExpParser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$regexp$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegExpParser"]();
function getRegExpAst(regExp) {
    const regExpStr = regExp.toString();
    if (regExpAstCache.hasOwnProperty(regExpStr)) {
        return regExpAstCache[regExpStr];
    } else {
        const regExpAst = regExpParser.pattern(regExpStr);
        regExpAstCache[regExpStr] = regExpAst;
        return regExpAst;
    }
}
function clearRegExpParserCache() {
    regExpAstCache = {};
} //# sourceMappingURL=reg_exp_parser.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/reg_exp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "canMatchCharCode": (()=>canMatchCharCode),
    "failedOptimizationPrefixMsg": (()=>failedOptimizationPrefixMsg),
    "firstCharOptimizedIndices": (()=>firstCharOptimizedIndices),
    "getOptimizedStartCodesIndices": (()=>getOptimizedStartCodesIndices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+regexp-to-ast@11.0.3/node_modules/@chevrotain/regexp-to-ast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/reg_exp_parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/print.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js [app-client] (ecmascript) <export default as values>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__find$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/find.js [app-client] (ecmascript) <export default as find>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/includes.js [app-client] (ecmascript) <export default as includes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js [app-client] (ecmascript) <export default as isArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/every.js [app-client] (ecmascript) <export default as every>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$base$2d$regexp$2d$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+regexp-to-ast@11.0.3/node_modules/@chevrotain/regexp-to-ast/lib/src/base-regexp-visitor.js [app-client] (ecmascript)");
;
;
;
;
;
const complementErrorMessage = "Complement Sets are not supported for first char optimization";
const failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
function getOptimizedStartCodesIndices(regExp, ensureOptimizations = false) {
    try {
        const ast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegExpAst"])(regExp);
        const firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
        return firstChars;
    } catch (e) {
        /* istanbul ignore next */ // Testing this relies on the regexp-to-ast library having a bug... */
        // TODO: only the else branch needs to be ignored, try to fix with newer prettier / tsc
        if (e.message === complementErrorMessage) {
            if (ensureOptimizations) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRINT_WARNING"])(`${failedOptimizationPrefixMsg}` + `\tUnable to optimize: < ${regExp.toString()} >\n` + "\tComplement Sets cannot be automatically optimized.\n" + "\tThis will disable the lexer's first char optimizations.\n" + "\tSee: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");
            }
        } else {
            let msgSuffix = "";
            if (ensureOptimizations) {
                msgSuffix = "\n\tThis will disable the lexer's first char optimizations.\n" + "\tSee: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRINT_ERROR"])(`${failedOptimizationPrefixMsg}\n` + `\tFailed parsing: < ${regExp.toString()} >\n` + `\tUsing the @chevrotain/regexp-to-ast library\n` + "\tPlease open an issue at: https://github.com/chevrotain/chevrotain/issues" + msgSuffix);
        }
    }
    return [];
}
function firstCharOptimizedIndices(ast, result, ignoreCase) {
    switch(ast.type){
        case "Disjunction":
            for(let i = 0; i < ast.value.length; i++){
                firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
            }
            break;
        case "Alternative":
            const terms = ast.value;
            for(let i = 0; i < terms.length; i++){
                const term = terms[i];
                // skip terms that cannot effect the first char results
                switch(term.type){
                    case "EndAnchor":
                    // A group back reference cannot affect potential starting char.
                    // because if a back reference is the first production than automatically
                    // the group being referenced has had to come BEFORE so its codes have already been added
                    case "GroupBackReference":
                    // assertions do not affect potential starting codes
                    case "Lookahead":
                    case "NegativeLookahead":
                    case "StartAnchor":
                    case "WordBoundary":
                    case "NonWordBoundary":
                        continue;
                }
                const atom = term;
                switch(atom.type){
                    case "Character":
                        addOptimizedIdxToResult(atom.value, result, ignoreCase);
                        break;
                    case "Set":
                        if (atom.complement === true) {
                            throw Error(complementErrorMessage);
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(atom.value, (code)=>{
                            if (typeof code === "number") {
                                addOptimizedIdxToResult(code, result, ignoreCase);
                            } else {
                                // range
                                const range = code;
                                // cannot optimize when ignoreCase is
                                if (ignoreCase === true) {
                                    for(let rangeCode = range.from; rangeCode <= range.to; rangeCode++){
                                        addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                                    }
                                } else {
                                    // handle unoptimized values
                                    for(let rangeCode = range.from; rangeCode <= range.to && rangeCode < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minOptimizationVal"]; rangeCode++){
                                        addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                                    }
                                    // Less common charCode where we optimize for faster init time, by using larger "buckets"
                                    if (range.to >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minOptimizationVal"]) {
                                        const minUnOptVal = range.from >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minOptimizationVal"] ? range.from : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minOptimizationVal"];
                                        const maxUnOptVal = range.to;
                                        const minOptIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodeToOptimizedIndex"])(minUnOptVal);
                                        const maxOptIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodeToOptimizedIndex"])(maxUnOptVal);
                                        for(let currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++){
                                            result[currOptIdx] = currOptIdx;
                                        }
                                    }
                                }
                            }
                        });
                        break;
                    case "Group":
                        firstCharOptimizedIndices(atom.value, result, ignoreCase);
                        break;
                    /* istanbul ignore next */ default:
                        throw Error("Non Exhaustive Match");
                }
                // reached a mandatory production, no more **start** codes can be found on this alternative
                const isOptionalQuantifier = atom.quantifier !== undefined && atom.quantifier.atLeast === 0;
                if (// A group may be optional due to empty contents /(?:)/
                // or if everything inside it is optional /((a)?)/
                atom.type === "Group" && isWholeOptional(atom) === false || atom.type !== "Group" && isOptionalQuantifier === false) {
                    break;
                }
            }
            break;
        /* istanbul ignore next */ default:
            throw Error("non exhaustive match!");
    }
    // console.log(Object.keys(result).length)
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(result);
}
function addOptimizedIdxToResult(code, result, ignoreCase) {
    const optimizedCharIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodeToOptimizedIndex"])(code);
    result[optimizedCharIdx] = optimizedCharIdx;
    if (ignoreCase === true) {
        handleIgnoreCase(code, result);
    }
}
function handleIgnoreCase(code, result) {
    const char = String.fromCharCode(code);
    const upperChar = char.toUpperCase();
    /* istanbul ignore else */ if (upperChar !== char) {
        const optimizedCharIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodeToOptimizedIndex"])(upperChar.charCodeAt(0));
        result[optimizedCharIdx] = optimizedCharIdx;
    } else {
        const lowerChar = char.toLowerCase();
        if (lowerChar !== char) {
            const optimizedCharIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodeToOptimizedIndex"])(lowerChar.charCodeAt(0));
            result[optimizedCharIdx] = optimizedCharIdx;
        }
    }
}
function findCode(setNode, targetCharCodes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__find$3e$__["find"])(setNode.value, (codeOrRange)=>{
        if (typeof codeOrRange === "number") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(targetCharCodes, codeOrRange);
        } else {
            // range
            const range = codeOrRange;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__find$3e$__["find"])(targetCharCodes, (targetCode)=>range.from <= targetCode && targetCode <= range.to) !== undefined;
        }
    });
}
function isWholeOptional(ast) {
    const quantifier = ast.quantifier;
    if (quantifier && quantifier.atLeast === 0) {
        return true;
    }
    if (!ast.value) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(ast.value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__["every"])(ast.value, isWholeOptional) : isWholeOptional(ast.value);
}
class CharCodeFinder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$base$2d$regexp$2d$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseRegExpVisitor"] {
    constructor(targetCharCodes){
        super();
        this.targetCharCodes = targetCharCodes;
        this.found = false;
    }
    visitChildren(node) {
        // No need to keep looking...
        if (this.found === true) {
            return;
        }
        // switch lookaheads as they do not actually consume any characters thus
        // finding a charCode at lookahead context does not mean that regexp can actually contain it in a match.
        switch(node.type){
            case "Lookahead":
                this.visitLookahead(node);
                return;
            case "NegativeLookahead":
                this.visitNegativeLookahead(node);
                return;
        }
        super.visitChildren(node);
    }
    visitCharacter(node) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(this.targetCharCodes, node.value)) {
            this.found = true;
        }
    }
    visitSet(node) {
        if (node.complement) {
            if (findCode(node, this.targetCharCodes) === undefined) {
                this.found = true;
            }
        } else {
            if (findCode(node, this.targetCharCodes) !== undefined) {
                this.found = true;
            }
        }
    }
}
function canMatchCharCode(charCodes, pattern) {
    if (pattern instanceof RegExp) {
        const ast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegExpAst"])(pattern);
        const charCodeFinder = new CharCodeFinder(charCodes);
        charCodeFinder.visit(ast);
        return charCodeFinder.found;
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__find$3e$__["find"])(pattern, (char)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(charCodes, char.charCodeAt(0));
        }) !== undefined;
    }
} //# sourceMappingURL=reg_exp.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DEFAULT_MODE": (()=>DEFAULT_MODE),
    "LineTerminatorOptimizedTester": (()=>LineTerminatorOptimizedTester),
    "MODES": (()=>MODES),
    "SUPPORT_STICKY": (()=>SUPPORT_STICKY),
    "addStartOfInput": (()=>addStartOfInput),
    "addStickyFlag": (()=>addStickyFlag),
    "analyzeTokenTypes": (()=>analyzeTokenTypes),
    "buildLineBreakIssueMessage": (()=>buildLineBreakIssueMessage),
    "charCodeToOptimizedIndex": (()=>charCodeToOptimizedIndex),
    "cloneEmptyGroups": (()=>cloneEmptyGroups),
    "disableSticky": (()=>disableSticky),
    "enableSticky": (()=>enableSticky),
    "findDuplicatePatterns": (()=>findDuplicatePatterns),
    "findEmptyMatchRegExps": (()=>findEmptyMatchRegExps),
    "findEndOfInputAnchor": (()=>findEndOfInputAnchor),
    "findInvalidGroupType": (()=>findInvalidGroupType),
    "findInvalidPatterns": (()=>findInvalidPatterns),
    "findMissingPatterns": (()=>findMissingPatterns),
    "findModesThatDoNotExist": (()=>findModesThatDoNotExist),
    "findStartOfInputAnchor": (()=>findStartOfInputAnchor),
    "findUnreachablePatterns": (()=>findUnreachablePatterns),
    "findUnsupportedFlags": (()=>findUnsupportedFlags),
    "isCustomPattern": (()=>isCustomPattern),
    "isShortPattern": (()=>isShortPattern),
    "minOptimizationVal": (()=>minOptimizationVal),
    "performRuntimeChecks": (()=>performRuntimeChecks),
    "performWarningRuntimeChecks": (()=>performWarningRuntimeChecks),
    "validatePatterns": (()=>validatePatterns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+regexp-to-ast@11.0.3/node_modules/@chevrotain/regexp-to-ast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/reg_exp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/reg_exp_parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaults$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/defaults.js [app-client] (ecmascript) <export default as defaults>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reject$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/reject.js [app-client] (ecmascript) <export default as reject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js [app-client] (ecmascript) <export default as map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isRegExp$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isRegExp.js [app-client] (ecmascript) <export default as isRegExp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isFunction$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js [app-client] (ecmascript) <export default as isFunction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/includes.js [app-client] (ecmascript) <export default as includes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.js [app-client] (ecmascript) <export default as isString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js [app-client] (ecmascript) <export default as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js [app-client] (ecmascript) <export default as isArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$indexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__indexOf$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/indexOf.js [app-client] (ecmascript) <export default as indexOf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/reduce.js [app-client] (ecmascript) <export default as reduce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/print.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/filter.js [app-client] (ecmascript) <export default as filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__difference$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js [app-client] (ecmascript) <export default as difference>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$base$2d$regexp$2d$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+regexp-to-ast@11.0.3/node_modules/@chevrotain/regexp-to-ast/lib/src/base-regexp-visitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__compact$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js [app-client] (ecmascript) <export default as compact>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js [app-client] (ecmascript) <export default as first>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__find$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/find.js [app-client] (ecmascript) <export default as find>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js [app-client] (ecmascript) <export default as flatten>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js [app-client] (ecmascript) <export default as values>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__keys$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js [app-client] (ecmascript) <export default as keys>");
;
;
;
;
;
;
const PATTERN = "PATTERN";
const DEFAULT_MODE = "defaultMode";
const MODES = "modes";
let SUPPORT_STICKY = typeof new RegExp("(?:)").sticky === "boolean";
function disableSticky() {
    SUPPORT_STICKY = false;
}
function enableSticky() {
    SUPPORT_STICKY = true;
}
function analyzeTokenTypes(tokenTypes, options) {
    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaults$3e$__["defaults"])(options, {
        useSticky: SUPPORT_STICKY,
        debug: false,
        safeMode: false,
        positionTracking: "full",
        lineTerminatorCharacters: [
            "\r",
            "\n"
        ],
        tracer: (msg, action)=>action()
    });
    const tracer = options.tracer;
    tracer("initCharCodeToOptimizedIndexMap", ()=>{
        initCharCodeToOptimizedIndexMap();
    });
    let onlyRelevantTypes;
    tracer("Reject Lexer.NA", ()=>{
        onlyRelevantTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reject$3e$__["reject"])(tokenTypes, (currType)=>{
            return currType[PATTERN] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].NA;
        });
    });
    let hasCustom = false;
    let allTransformedPatterns;
    tracer("Transform Patterns", ()=>{
        hasCustom = false;
        allTransformedPatterns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(onlyRelevantTypes, (currType)=>{
            const currPattern = currType[PATTERN];
            /* istanbul ignore else */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isRegExp$3e$__["isRegExp"])(currPattern)) {
                const regExpSource = currPattern.source;
                if (regExpSource.length === 1 && // only these regExp meta characters which can appear in a length one regExp
                regExpSource !== "^" && regExpSource !== "$" && regExpSource !== "." && !currPattern.ignoreCase) {
                    return regExpSource;
                } else if (regExpSource.length === 2 && regExpSource[0] === "\\" && // not a meta character
                !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])([
                    "d",
                    "D",
                    "s",
                    "S",
                    "t",
                    "r",
                    "n",
                    "t",
                    "0",
                    "c",
                    "b",
                    "B",
                    "f",
                    "v",
                    "w",
                    "W"
                ], regExpSource[1])) {
                    // escaped meta Characters: /\+/ /\[/
                    // or redundant escaping: /\a/
                    // without the escaping "\"
                    return regExpSource[1];
                } else {
                    return options.useSticky ? addStickyFlag(currPattern) : addStartOfInput(currPattern);
                }
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isFunction$3e$__["isFunction"])(currPattern)) {
                hasCustom = true;
                // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
                return {
                    exec: currPattern
                };
            } else if (typeof currPattern === "object") {
                hasCustom = true;
                // ICustomPattern
                return currPattern;
            } else if (typeof currPattern === "string") {
                if (currPattern.length === 1) {
                    return currPattern;
                } else {
                    const escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
                    const wrappedRegExp = new RegExp(escapedRegExpString);
                    return options.useSticky ? addStickyFlag(wrappedRegExp) : addStartOfInput(wrappedRegExp);
                }
            } else {
                throw Error("non exhaustive match");
            }
        });
    });
    let patternIdxToType;
    let patternIdxToGroup;
    let patternIdxToLongerAltIdxArr;
    let patternIdxToPushMode;
    let patternIdxToPopMode;
    tracer("misc mapping", ()=>{
        patternIdxToType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(onlyRelevantTypes, (currType)=>currType.tokenTypeIdx);
        patternIdxToGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(onlyRelevantTypes, (clazz)=>{
            const groupName = clazz.GROUP;
            /* istanbul ignore next */ if (groupName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].SKIPPED) {
                return undefined;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__["isString"])(groupName)) {
                return groupName;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__["isUndefined"])(groupName)) {
                return false;
            } else {
                throw Error("non exhaustive match");
            }
        });
        patternIdxToLongerAltIdxArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(onlyRelevantTypes, (clazz)=>{
            const longerAltType = clazz.LONGER_ALT;
            if (longerAltType) {
                const longerAltIdxArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(longerAltType) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(longerAltType, (type)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$indexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__indexOf$3e$__["indexOf"])(onlyRelevantTypes, type)) : [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$indexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__indexOf$3e$__["indexOf"])(onlyRelevantTypes, longerAltType)
                ];
                return longerAltIdxArr;
            }
        });
        patternIdxToPushMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(onlyRelevantTypes, (clazz)=>clazz.PUSH_MODE);
        patternIdxToPopMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(onlyRelevantTypes, (clazz)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(clazz, "POP_MODE"));
    });
    let patternIdxToCanLineTerminator;
    tracer("Line Terminator Handling", ()=>{
        const lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
        patternIdxToCanLineTerminator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(onlyRelevantTypes, (tokType)=>false);
        if (options.positionTracking !== "onlyOffset") {
            patternIdxToCanLineTerminator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(onlyRelevantTypes, (tokType)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(tokType, "LINE_BREAKS")) {
                    return !!tokType.LINE_BREAKS;
                } else {
                    return checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMatchCharCode"])(lineTerminatorCharCodes, tokType.PATTERN);
                }
            });
        }
    });
    let patternIdxToIsCustom;
    let patternIdxToShort;
    let emptyGroups;
    let patternIdxToConfig;
    tracer("Misc Mapping #2", ()=>{
        patternIdxToIsCustom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(onlyRelevantTypes, isCustomPattern);
        patternIdxToShort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(allTransformedPatterns, isShortPattern);
        emptyGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(onlyRelevantTypes, (acc, clazz)=>{
            const groupName = clazz.GROUP;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__["isString"])(groupName) && !(groupName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].SKIPPED)) {
                acc[groupName] = [];
            }
            return acc;
        }, {});
        patternIdxToConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(allTransformedPatterns, (x, idx)=>{
            return {
                pattern: allTransformedPatterns[idx],
                longerAlt: patternIdxToLongerAltIdxArr[idx],
                canLineTerminator: patternIdxToCanLineTerminator[idx],
                isCustom: patternIdxToIsCustom[idx],
                short: patternIdxToShort[idx],
                group: patternIdxToGroup[idx],
                push: patternIdxToPushMode[idx],
                pop: patternIdxToPopMode[idx],
                tokenTypeIdx: patternIdxToType[idx],
                tokenType: onlyRelevantTypes[idx]
            };
        });
    });
    let canBeOptimized = true;
    let charCodeToPatternIdxToConfig = [];
    if (!options.safeMode) {
        tracer("First Char Optimization", ()=>{
            charCodeToPatternIdxToConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(onlyRelevantTypes, (result, currTokType, idx)=>{
                if (typeof currTokType.PATTERN === "string") {
                    const charCode = currTokType.PATTERN.charCodeAt(0);
                    const optimizedIdx = charCodeToOptimizedIndex(charCode);
                    addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(currTokType.START_CHARS_HINT)) {
                    let lastOptimizedIdx;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(currTokType.START_CHARS_HINT, (charOrInt)=>{
                        const charCode = typeof charOrInt === "string" ? charOrInt.charCodeAt(0) : charOrInt;
                        const currOptimizedIdx = charCodeToOptimizedIndex(charCode);
                        // Avoid adding the config multiple times
                        /* istanbul ignore else */ // - Difficult to check this scenario effects as it is only a performance
                        //   optimization that does not change correctness
                        if (lastOptimizedIdx !== currOptimizedIdx) {
                            lastOptimizedIdx = currOptimizedIdx;
                            addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]);
                        }
                    });
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isRegExp$3e$__["isRegExp"])(currTokType.PATTERN)) {
                    if (currTokType.PATTERN.unicode) {
                        canBeOptimized = false;
                        if (options.ensureOptimizations) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRINT_ERROR"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["failedOptimizationPrefixMsg"]}` + `\tUnable to analyze < ${currTokType.PATTERN.toString()} > pattern.\n` + "\tThe regexp unicode flag is not currently supported by the regexp-to-ast library.\n" + "\tThis will disable the lexer's first char optimizations.\n" + "\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");
                        }
                    } else {
                        const optimizedCodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptimizedStartCodesIndices"])(currTokType.PATTERN, options.ensureOptimizations);
                        /* istanbul ignore if */ // start code will only be empty given an empty regExp or failure of regexp-to-ast library
                        // the first should be a different validation and the second cannot be tested.
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(optimizedCodes)) {
                            // we cannot understand what codes may start possible matches
                            // The optimization correctness requires knowing start codes for ALL patterns.
                            // Not actually sure this is an error, no debug message
                            canBeOptimized = false;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(optimizedCodes, (code)=>{
                            addToMapOfArrays(result, code, patternIdxToConfig[idx]);
                        });
                    }
                } else {
                    if (options.ensureOptimizations) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRINT_ERROR"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["failedOptimizationPrefixMsg"]}` + `\tTokenType: <${currTokType.name}> is using a custom token pattern without providing <start_chars_hint> parameter.\n` + "\tThis will disable the lexer's first char optimizations.\n" + "\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE");
                    }
                    canBeOptimized = false;
                }
                return result;
            }, []);
        });
    }
    return {
        emptyGroups: emptyGroups,
        patternIdxToConfig: patternIdxToConfig,
        charCodeToPatternIdxToConfig: charCodeToPatternIdxToConfig,
        hasCustom: hasCustom,
        canBeOptimized: canBeOptimized
    };
}
function validatePatterns(tokenTypes, validModesNames) {
    let errors = [];
    const missingResult = findMissingPatterns(tokenTypes);
    errors = errors.concat(missingResult.errors);
    const invalidResult = findInvalidPatterns(missingResult.valid);
    const validTokenTypes = invalidResult.valid;
    errors = errors.concat(invalidResult.errors);
    errors = errors.concat(validateRegExpPattern(validTokenTypes));
    errors = errors.concat(findInvalidGroupType(validTokenTypes));
    errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
    errors = errors.concat(findUnreachablePatterns(validTokenTypes));
    return errors;
}
function validateRegExpPattern(tokenTypes) {
    let errors = [];
    const withRegExpPatterns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(tokenTypes, (currTokType)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isRegExp$3e$__["isRegExp"])(currTokType[PATTERN]));
    errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
    errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
    errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
    return errors;
}
function findMissingPatterns(tokenTypes) {
    const tokenTypesWithMissingPattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(tokenTypes, (currType)=>{
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(currType, PATTERN);
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(tokenTypesWithMissingPattern, (currType)=>{
        return {
            message: "Token Type: ->" + currType.name + "<- missing static 'PATTERN' property",
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].MISSING_PATTERN,
            tokenTypes: [
                currType
            ]
        };
    });
    const valid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__difference$3e$__["difference"])(tokenTypes, tokenTypesWithMissingPattern);
    return {
        errors,
        valid
    };
}
function findInvalidPatterns(tokenTypes) {
    const tokenTypesWithInvalidPattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(tokenTypes, (currType)=>{
        const pattern = currType[PATTERN];
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isRegExp$3e$__["isRegExp"])(pattern) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isFunction$3e$__["isFunction"])(pattern) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(pattern, "exec") && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__["isString"])(pattern);
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(tokenTypesWithInvalidPattern, (currType)=>{
        return {
            message: "Token Type: ->" + currType.name + "<- static 'PATTERN' can only be a RegExp, a" + " Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].INVALID_PATTERN,
            tokenTypes: [
                currType
            ]
        };
    });
    const valid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__difference$3e$__["difference"])(tokenTypes, tokenTypesWithInvalidPattern);
    return {
        errors,
        valid
    };
}
const end_of_input = /[^\\][$]/;
function findEndOfInputAnchor(tokenTypes) {
    class EndAnchorFinder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$base$2d$regexp$2d$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseRegExpVisitor"] {
        constructor(){
            super(...arguments);
            this.found = false;
        }
        visitEndAnchor(node) {
            this.found = true;
        }
    }
    const invalidRegex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(tokenTypes, (currType)=>{
        const pattern = currType.PATTERN;
        try {
            const regexpAst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegExpAst"])(pattern);
            const endAnchorVisitor = new EndAnchorFinder();
            endAnchorVisitor.visit(regexpAst);
            return endAnchorVisitor.found;
        } catch (e) {
            // old behavior in case of runtime exceptions with regexp-to-ast.
            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/ return end_of_input.test(pattern.source);
        }
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(invalidRegex, (currType)=>{
        return {
            message: "Unexpected RegExp Anchor Error:\n" + "\tToken Type: ->" + currType.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n" + "\tSee chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS" + "\tfor details.",
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].EOI_ANCHOR_FOUND,
            tokenTypes: [
                currType
            ]
        };
    });
    return errors;
}
function findEmptyMatchRegExps(tokenTypes) {
    const matchesEmptyString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(tokenTypes, (currType)=>{
        const pattern = currType.PATTERN;
        return pattern.test("");
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(matchesEmptyString, (currType)=>{
        return {
            message: "Token Type: ->" + currType.name + "<- static 'PATTERN' must not match an empty string",
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].EMPTY_MATCH_PATTERN,
            tokenTypes: [
                currType
            ]
        };
    });
    return errors;
}
const start_of_input = /[^\\[][\^]|^\^/;
function findStartOfInputAnchor(tokenTypes) {
    class StartAnchorFinder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$base$2d$regexp$2d$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseRegExpVisitor"] {
        constructor(){
            super(...arguments);
            this.found = false;
        }
        visitStartAnchor(node) {
            this.found = true;
        }
    }
    const invalidRegex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(tokenTypes, (currType)=>{
        const pattern = currType.PATTERN;
        try {
            const regexpAst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegExpAst"])(pattern);
            const startAnchorVisitor = new StartAnchorFinder();
            startAnchorVisitor.visit(regexpAst);
            return startAnchorVisitor.found;
        } catch (e) {
            // old behavior in case of runtime exceptions with regexp-to-ast.
            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/ return start_of_input.test(pattern.source);
        }
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(invalidRegex, (currType)=>{
        return {
            message: "Unexpected RegExp Anchor Error:\n" + "\tToken Type: ->" + currType.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n" + "\tSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS" + "\tfor details.",
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].SOI_ANCHOR_FOUND,
            tokenTypes: [
                currType
            ]
        };
    });
    return errors;
}
function findUnsupportedFlags(tokenTypes) {
    const invalidFlags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(tokenTypes, (currType)=>{
        const pattern = currType[PATTERN];
        return pattern instanceof RegExp && (pattern.multiline || pattern.global);
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(invalidFlags, (currType)=>{
        return {
            message: "Token Type: ->" + currType.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].UNSUPPORTED_FLAGS_FOUND,
            tokenTypes: [
                currType
            ]
        };
    });
    return errors;
}
function findDuplicatePatterns(tokenTypes) {
    const found = [];
    let identicalPatterns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(tokenTypes, (outerType)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(tokenTypes, (result, innerType)=>{
            if (outerType.PATTERN.source === innerType.PATTERN.source && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(found, innerType) && innerType.PATTERN !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].NA) {
                // this avoids duplicates in the result, each Token Type may only appear in one "set"
                // in essence we are creating Equivalence classes on equality relation.
                found.push(innerType);
                result.push(innerType);
                return result;
            }
            return result;
        }, []);
    });
    identicalPatterns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__compact$3e$__["compact"])(identicalPatterns);
    const duplicatePatterns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(identicalPatterns, (currIdenticalSet)=>{
        return currIdenticalSet.length > 1;
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(duplicatePatterns, (setOfIdentical)=>{
        const tokenTypeNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(setOfIdentical, (currType)=>{
            return currType.name;
        });
        const dupPatternSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(setOfIdentical).PATTERN;
        return {
            message: `The same RegExp pattern ->${dupPatternSrc}<-` + `has been used in all of the following Token Types: ${tokenTypeNames.join(", ")} <-`,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].DUPLICATE_PATTERNS_FOUND,
            tokenTypes: setOfIdentical
        };
    });
    return errors;
}
function findInvalidGroupType(tokenTypes) {
    const invalidTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(tokenTypes, (clazz)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(clazz, "GROUP")) {
            return false;
        }
        const group = clazz.GROUP;
        return group !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].SKIPPED && group !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].NA && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__["isString"])(group);
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(invalidTypes, (currType)=>{
        return {
            message: "Token Type: ->" + currType.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].INVALID_GROUP_TYPE_FOUND,
            tokenTypes: [
                currType
            ]
        };
    });
    return errors;
}
function findModesThatDoNotExist(tokenTypes, validModes) {
    const invalidModes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(tokenTypes, (clazz)=>{
        return clazz.PUSH_MODE !== undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(validModes, clazz.PUSH_MODE);
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(invalidModes, (tokType)=>{
        const msg = `Token Type: ->${tokType.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${tokType.PUSH_MODE}<-` + `which does not exist`;
        return {
            message: msg,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].PUSH_MODE_DOES_NOT_EXIST,
            tokenTypes: [
                tokType
            ]
        };
    });
    return errors;
}
function findUnreachablePatterns(tokenTypes) {
    const errors = [];
    const canBeTested = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(tokenTypes, (result, tokType, idx)=>{
        const pattern = tokType.PATTERN;
        if (pattern === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].NA) {
            return result;
        }
        // a more comprehensive validation for all forms of regExps would require
        // deeper regExp analysis capabilities
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__["isString"])(pattern)) {
            result.push({
                str: pattern,
                idx,
                tokenType: tokType
            });
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isRegExp$3e$__["isRegExp"])(pattern) && noMetaChar(pattern)) {
            result.push({
                str: pattern.source,
                idx,
                tokenType: tokType
            });
        }
        return result;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(tokenTypes, (tokType, testIdx)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(canBeTested, ({ str, idx, tokenType })=>{
            if (testIdx < idx && testTokenType(str, tokType.PATTERN)) {
                const msg = `Token: ->${tokenType.name}<- can never be matched.\n` + `Because it appears AFTER the Token Type ->${tokType.name}<-` + `in the lexer's definition.\n` + `See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
                errors.push({
                    message: msg,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].UNREACHABLE_PATTERN,
                    tokenTypes: [
                        tokType,
                        tokenType
                    ]
                });
            }
        });
    });
    return errors;
}
function testTokenType(str, pattern) {
    /* istanbul ignore else */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isRegExp$3e$__["isRegExp"])(pattern)) {
        const regExpArray = pattern.exec(str);
        return regExpArray !== null && regExpArray.index === 0;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isFunction$3e$__["isFunction"])(pattern)) {
        // maintain the API of custom patterns
        return pattern(str, 0, [], {});
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(pattern, "exec")) {
        // maintain the API of custom patterns
        return pattern.exec(str, 0, [], {});
    } else if (typeof pattern === "string") {
        return pattern === str;
    } else {
        throw Error("non exhaustive match");
    }
}
function noMetaChar(regExp) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    const metaChars = [
        ".",
        "\\",
        "[",
        "]",
        "|",
        "^",
        "$",
        "(",
        ")",
        "?",
        "*",
        "+",
        "{"
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__find$3e$__["find"])(metaChars, (char)=>regExp.source.indexOf(char) !== -1) === undefined;
}
function addStartOfInput(pattern) {
    const flags = pattern.ignoreCase ? "i" : "";
    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
    return new RegExp(`^(?:${pattern.source})`, flags);
}
function addStickyFlag(pattern) {
    const flags = pattern.ignoreCase ? "iy" : "y";
    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
    return new RegExp(`${pattern.source}`, flags);
}
function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    const errors = [];
    // some run time checks to help the end users.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(lexerDefinition, DEFAULT_MODE)) {
        errors.push({
            message: "A MultiMode Lexer cannot be initialized without a <" + DEFAULT_MODE + "> property in its definition\n",
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
        });
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(lexerDefinition, MODES)) {
        errors.push({
            message: "A MultiMode Lexer cannot be initialized without a <" + MODES + "> property in its definition\n",
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(lexerDefinition, MODES) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(lexerDefinition, DEFAULT_MODE) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(lexerDefinition.modes, lexerDefinition.defaultMode)) {
        errors.push({
            message: `A MultiMode Lexer cannot be initialized with a ${DEFAULT_MODE}: <${lexerDefinition.defaultMode}>` + `which does not exist\n`,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(lexerDefinition, MODES)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(lexerDefinition.modes, (currModeValue, currModeName)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(currModeValue, (currTokType, currIdx)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__["isUndefined"])(currTokType)) {
                    errors.push({
                        message: `A Lexer cannot be initialized using an undefined Token Type. Mode:` + `<${currModeName}> at index: <${currIdx}>\n`,
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
                    });
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(currTokType, "LONGER_ALT")) {
                    const longerAlt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(currTokType.LONGER_ALT) ? currTokType.LONGER_ALT : [
                        currTokType.LONGER_ALT
                    ];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(longerAlt, (currLongerAlt)=>{
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__["isUndefined"])(currLongerAlt) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(currModeValue, currLongerAlt)) {
                            errors.push({
                                message: `A MultiMode Lexer cannot be initialized with a longer_alt <${currLongerAlt.name}> on token <${currTokType.name}> outside of mode <${currModeName}>\n`,
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
                            });
                        }
                    });
                }
            });
        });
    }
    return errors;
}
function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    const warnings = [];
    let hasAnyLineBreak = false;
    const allTokenTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__compact$3e$__["compact"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(lexerDefinition.modes)));
    const concreteTokenTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reject$3e$__["reject"])(allTokenTypes, (currType)=>currType[PATTERN] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].NA);
    const terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
    if (trackLines) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(concreteTokenTypes, (tokType)=>{
            const currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
            if (currIssue !== false) {
                const message = buildLineBreakIssueMessage(tokType, currIssue);
                const warningDescriptor = {
                    message,
                    type: currIssue.issue,
                    tokenType: tokType
                };
                warnings.push(warningDescriptor);
            } else {
                // we don't want to attempt to scan if the user explicitly specified the line_breaks option.
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(tokType, "LINE_BREAKS")) {
                    if (tokType.LINE_BREAKS === true) {
                        hasAnyLineBreak = true;
                    }
                } else {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMatchCharCode"])(terminatorCharCodes, tokType.PATTERN)) {
                        hasAnyLineBreak = true;
                    }
                }
            }
        });
    }
    if (trackLines && !hasAnyLineBreak) {
        warnings.push({
            message: "Warning: No LINE_BREAKS Found.\n" + "\tThis Lexer has been defined to track line and column information,\n" + "\tBut none of the Token Types can be identified as matching a line terminator.\n" + "\tSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n" + "\tfor details.",
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].NO_LINE_BREAKS_FLAGS
        });
    }
    return warnings;
}
function cloneEmptyGroups(emptyGroups) {
    const clonedResult = {};
    const groupKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__keys$3e$__["keys"])(emptyGroups);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(groupKeys, (currKey)=>{
        const currGroupValue = emptyGroups[currKey];
        /* istanbul ignore else */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(currGroupValue)) {
            clonedResult[currKey] = [];
        } else {
            throw Error("non exhaustive match");
        }
    });
    return clonedResult;
}
function isCustomPattern(tokenType) {
    const pattern = tokenType.PATTERN;
    /* istanbul ignore else */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isRegExp$3e$__["isRegExp"])(pattern)) {
        return false;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isFunction$3e$__["isFunction"])(pattern)) {
        // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
        return true;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(pattern, "exec")) {
        // ICustomPattern
        return true;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__["isString"])(pattern)) {
        return false;
    } else {
        throw Error("non exhaustive match");
    }
}
function isShortPattern(pattern) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__["isString"])(pattern) && pattern.length === 1) {
        return pattern.charCodeAt(0);
    } else {
        return false;
    }
}
const LineTerminatorOptimizedTester = {
    // implements /\n|\r\n?/g.test
    test: function(text) {
        const len = text.length;
        for(let i = this.lastIndex; i < len; i++){
            const c = text.charCodeAt(i);
            if (c === 10) {
                this.lastIndex = i + 1;
                return true;
            } else if (c === 13) {
                if (text.charCodeAt(i + 1) === 10) {
                    this.lastIndex = i + 2;
                } else {
                    this.lastIndex = i + 1;
                }
                return true;
            }
        }
        return false;
    },
    lastIndex: 0
};
function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(tokType, "LINE_BREAKS")) {
        // if the user explicitly declared the line_breaks option we will respect their choice
        // and assume it is correct.
        return false;
    } else {
        /* istanbul ignore else */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isRegExp$3e$__["isRegExp"])(tokType.PATTERN)) {
            try {
                // TODO: why is the casting suddenly needed?
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMatchCharCode"])(lineTerminatorCharCodes, tokType.PATTERN);
            } catch (e) {
                /* istanbul ignore next - to test this we would have to mock <canMatchCharCode> to throw an error */ return {
                    issue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].IDENTIFY_TERMINATOR,
                    errMsg: e.message
                };
            }
            return false;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__["isString"])(tokType.PATTERN)) {
            // string literal patterns can always be analyzed to detect line terminator usage
            return false;
        } else if (isCustomPattern(tokType)) {
            // custom token types
            return {
                issue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].CUSTOM_LINE_BREAK
            };
        } else {
            throw Error("non exhaustive match");
        }
    }
}
function buildLineBreakIssueMessage(tokType, details) {
    /* istanbul ignore else */ if (details.issue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].IDENTIFY_TERMINATOR) {
        return "Warning: unable to identify line terminator usage in pattern.\n" + `\tThe problem is in the <${tokType.name}> Token Type\n` + `\t Root cause: ${details.errMsg}.\n` + "\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";
    } else if (details.issue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerDefinitionErrorType"].CUSTOM_LINE_BREAK) {
        return "Warning: A Custom Token Pattern should specify the <line_breaks> option.\n" + `\tThe problem is in the <${tokType.name}> Token Type\n` + "\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";
    } else {
        throw Error("non exhaustive match");
    }
}
function getCharCodes(charsOrCodes) {
    const charCodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(charsOrCodes, (numOrString)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__["isString"])(numOrString)) {
            return numOrString.charCodeAt(0);
        } else {
            return numOrString;
        }
    });
    return charCodes;
}
function addToMapOfArrays(map, key, value) {
    if (map[key] === undefined) {
        map[key] = [
            value
        ];
    } else {
        map[key].push(value);
    }
}
const minOptimizationVal = 256;
/**
 * We are mapping charCode above ASCI (256) into buckets each in the size of 256.
 * This is because ASCI are the most common start chars so each one of those will get its own
 * possible token configs vector.
 *
 * Tokens starting with charCodes "above" ASCI are uncommon, so we can "afford"
 * to place these into buckets of possible token configs, What we gain from
 * this is avoiding the case of creating an optimization 'charCodeToPatternIdxToConfig'
 * which would contain 10,000+ arrays of small size (e.g unicode Identifiers scenario).
 * Our 'charCodeToPatternIdxToConfig' max size will now be:
 * 256 + (2^16 / 2^8) - 1 === 511
 *
 * note the hack for fast division integer part extraction
 * See: https://stackoverflow.com/a/4228528
 */ let charCodeToOptimizedIdxMap = [];
function charCodeToOptimizedIndex(charCode) {
    return charCode < minOptimizationVal ? charCode : charCodeToOptimizedIdxMap[charCode];
}
/**
 * This is a compromise between cold start / hot running performance
 * Creating this array takes ~3ms on a modern machine,
 * But if we perform the computation at runtime as needed the CSS Lexer benchmark
 * performance degrades by ~10%
 *
 * TODO: Perhaps it should be lazy initialized only if a charCode > 255 is used.
 */ function initCharCodeToOptimizedIndexMap() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(charCodeToOptimizedIdxMap)) {
        charCodeToOptimizedIdxMap = new Array(65536);
        for(let i = 0; i < 65536; i++){
            charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
        }
    }
} //# sourceMappingURL=lexer.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "assignCategoriesMapProp": (()=>assignCategoriesMapProp),
    "assignCategoriesTokensProp": (()=>assignCategoriesTokensProp),
    "assignTokenDefaultProps": (()=>assignTokenDefaultProps),
    "augmentTokenTypes": (()=>augmentTokenTypes),
    "expandCategories": (()=>expandCategories),
    "hasCategoriesProperty": (()=>hasCategoriesProperty),
    "hasExtendingTokensTypesMapProperty": (()=>hasExtendingTokensTypesMapProperty),
    "hasExtendingTokensTypesProperty": (()=>hasExtendingTokensTypesProperty),
    "hasShortKeyProperty": (()=>hasShortKeyProperty),
    "isTokenType": (()=>isTokenType),
    "singleAssignCategoriesToksMap": (()=>singleAssignCategoriesToksMap),
    "tokenIdxToClass": (()=>tokenIdxToClass),
    "tokenShortNameIdx": (()=>tokenShortNameIdx),
    "tokenStructuredMatcher": (()=>tokenStructuredMatcher),
    "tokenStructuredMatcherNoCategories": (()=>tokenStructuredMatcherNoCategories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clone.js [app-client] (ecmascript) <export default as clone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__compact$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js [app-client] (ecmascript) <export default as compact>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js [app-client] (ecmascript) <export default as flatten>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js [app-client] (ecmascript) <export default as map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__difference$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js [app-client] (ecmascript) <export default as difference>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js [app-client] (ecmascript) <export default as isArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/includes.js [app-client] (ecmascript) <export default as includes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
;
function tokenStructuredMatcher(tokInstance, tokConstructor) {
    const instanceType = tokInstance.tokenTypeIdx;
    if (instanceType === tokConstructor.tokenTypeIdx) {
        return true;
    } else {
        return tokConstructor.isParent === true && tokConstructor.categoryMatchesMap[instanceType] === true;
    }
}
function tokenStructuredMatcherNoCategories(token, tokType) {
    return token.tokenTypeIdx === tokType.tokenTypeIdx;
}
let tokenShortNameIdx = 1;
const tokenIdxToClass = {};
function augmentTokenTypes(tokenTypes) {
    // collect the parent Token Types as well.
    const tokenTypesAndParents = expandCategories(tokenTypes);
    // add required tokenType and categoryMatches properties
    assignTokenDefaultProps(tokenTypesAndParents);
    // fill up the categoryMatches
    assignCategoriesMapProp(tokenTypesAndParents);
    assignCategoriesTokensProp(tokenTypesAndParents);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(tokenTypesAndParents, (tokType)=>{
        tokType.isParent = tokType.categoryMatches.length > 0;
    });
}
function expandCategories(tokenTypes) {
    let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(tokenTypes);
    let categories = tokenTypes;
    let searching = true;
    while(searching){
        categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__compact$3e$__["compact"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(categories, (currTokType)=>currTokType.CATEGORIES)));
        const newCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__difference$3e$__["difference"])(categories, result);
        result = result.concat(newCategories);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(newCategories)) {
            searching = false;
        } else {
            categories = newCategories;
        }
    }
    return result;
}
function assignTokenDefaultProps(tokenTypes) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(tokenTypes, (currTokType)=>{
        if (!hasShortKeyProperty(currTokType)) {
            tokenIdxToClass[tokenShortNameIdx] = currTokType;
            currTokType.tokenTypeIdx = tokenShortNameIdx++;
        }
        // CATEGORIES? : TokenType | TokenType[]
        if (hasCategoriesProperty(currTokType) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(currTokType.CATEGORIES)) {
            currTokType.CATEGORIES = [
                currTokType.CATEGORIES
            ];
        }
        if (!hasCategoriesProperty(currTokType)) {
            currTokType.CATEGORIES = [];
        }
        if (!hasExtendingTokensTypesProperty(currTokType)) {
            currTokType.categoryMatches = [];
        }
        if (!hasExtendingTokensTypesMapProperty(currTokType)) {
            currTokType.categoryMatchesMap = {};
        }
    });
}
function assignCategoriesTokensProp(tokenTypes) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(tokenTypes, (currTokType)=>{
        // avoid duplications
        currTokType.categoryMatches = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(currTokType.categoryMatchesMap, (val, key)=>{
            currTokType.categoryMatches.push(tokenIdxToClass[key].tokenTypeIdx);
        });
    });
}
function assignCategoriesMapProp(tokenTypes) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(tokenTypes, (currTokType)=>{
        singleAssignCategoriesToksMap([], currTokType);
    });
}
function singleAssignCategoriesToksMap(path, nextNode) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(path, (pathNode)=>{
        nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(nextNode.CATEGORIES, (nextCategory)=>{
        const newPath = path.concat(nextNode);
        // avoids infinite loops due to cyclic categories.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(newPath, nextCategory)) {
            singleAssignCategoriesToksMap(newPath, nextCategory);
        }
    });
}
function hasShortKeyProperty(tokType) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(tokType, "tokenTypeIdx");
}
function hasCategoriesProperty(tokType) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(tokType, "CATEGORIES");
}
function hasExtendingTokensTypesProperty(tokType) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(tokType, "categoryMatches");
}
function hasExtendingTokensTypesMapProperty(tokType) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(tokType, "categoryMatchesMap");
}
function isTokenType(tokType) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(tokType, "tokenTypeIdx");
} //# sourceMappingURL=tokens.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer_errors_public.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultLexerErrorProvider": (()=>defaultLexerErrorProvider)
});
const defaultLexerErrorProvider = {
    buildUnableToPopLexerModeMessage (token) {
        return `Unable to pop Lexer Mode after encountering Token ->${token.image}<- The Mode Stack is empty`;
    },
    buildUnexpectedCharactersMessage (fullText, startOffset, length, line, column) {
        return `unexpected character: ->${fullText.charAt(startOffset)}<- at offset: ${startOffset},` + ` skipped ${length} characters.`;
    }
}; //# sourceMappingURL=lexer_errors_public.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer_public.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Lexer": (()=>Lexer),
    "LexerDefinitionErrorType": (()=>LexerDefinitionErrorType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer_errors_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/reg_exp_parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/timer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$assign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__assign$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/assign.js [app-client] (ecmascript) <export default as assign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js [app-client] (ecmascript) <export default as isArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clone.js [app-client] (ecmascript) <export default as clone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reject$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/reject.js [app-client] (ecmascript) <export default as reject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js [app-client] (ecmascript) <export default as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__keys$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js [app-client] (ecmascript) <export default as keys>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js [app-client] (ecmascript) <export default as map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/print.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js [app-client] (ecmascript) <export default as noop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__identity$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js [app-client] (ecmascript) <export default as identity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/reduce.js [app-client] (ecmascript) <export default as reduce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$to$2d$fast$2d$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/to-fast-properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__last$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js [app-client] (ecmascript) <export default as last>");
;
;
;
;
;
;
var LexerDefinitionErrorType;
(function(LexerDefinitionErrorType) {
    LexerDefinitionErrorType[LexerDefinitionErrorType["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
    LexerDefinitionErrorType[LexerDefinitionErrorType["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
    LexerDefinitionErrorType[LexerDefinitionErrorType["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
    LexerDefinitionErrorType[LexerDefinitionErrorType["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
    LexerDefinitionErrorType[LexerDefinitionErrorType["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"] = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(LexerDefinitionErrorType || (LexerDefinitionErrorType = {}));
const DEFAULT_LEXER_CONFIG = {
    deferDefinitionErrorsHandling: false,
    positionTracking: "full",
    lineTerminatorsPattern: /\n|\r\n?/g,
    lineTerminatorCharacters: [
        "\n",
        "\r"
    ],
    ensureOptimizations: false,
    safeMode: false,
    errorMessageProvider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultLexerErrorProvider"],
    traceInitPerf: false,
    skipValidations: false,
    recoveryEnabled: true
};
Object.freeze(DEFAULT_LEXER_CONFIG);
class Lexer {
    constructor(lexerDefinition, config = DEFAULT_LEXER_CONFIG){
        this.lexerDefinition = lexerDefinition;
        this.lexerDefinitionErrors = [];
        this.lexerDefinitionWarning = [];
        this.patternIdxToConfig = {};
        this.charCodeToPatternIdxToConfig = {};
        this.modes = [];
        this.emptyGroups = {};
        this.trackStartLines = true;
        this.trackEndLines = true;
        this.hasCustom = false;
        this.canModeBeOptimized = {};
        // Duplicated from the parser's perf trace trait to allow future extraction
        // of the lexer to a separate package.
        this.TRACE_INIT = (phaseDesc, phaseImpl)=>{
            // No need to optimize this using NOOP pattern because
            // It is not called in a hot spot...
            if (this.traceInitPerf === true) {
                this.traceInitIndent++;
                const indent = new Array(this.traceInitIndent + 1).join("\t");
                if (this.traceInitIndent < this.traceInitMaxIdent) {
                    console.log(`${indent}--> <${phaseDesc}>`);
                }
                const { time, value } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timer"])(phaseImpl);
                /* istanbul ignore next - Difficult to reproduce specific performance behavior (>10ms) in tests */ const traceMethod = time > 10 ? console.warn : console.log;
                if (this.traceInitIndent < this.traceInitMaxIdent) {
                    traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
                }
                this.traceInitIndent--;
                return value;
            } else {
                return phaseImpl();
            }
        };
        if (typeof config === "boolean") {
            throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\n" + "a boolean 2nd argument is no longer supported");
        }
        // todo: defaults func?
        this.config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$assign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__assign$3e$__["assign"])({}, DEFAULT_LEXER_CONFIG, config);
        const traceInitVal = this.config.traceInitPerf;
        if (traceInitVal === true) {
            this.traceInitMaxIdent = Infinity;
            this.traceInitPerf = true;
        } else if (typeof traceInitVal === "number") {
            this.traceInitMaxIdent = traceInitVal;
            this.traceInitPerf = true;
        }
        this.traceInitIndent = -1;
        this.TRACE_INIT("Lexer Constructor", ()=>{
            let actualDefinition;
            let hasOnlySingleMode = true;
            this.TRACE_INIT("Lexer Config handling", ()=>{
                if (this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {
                    // optimized built-in implementation for the defaults definition of lineTerminators
                    this.config.lineTerminatorsPattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineTerminatorOptimizedTester"];
                } else {
                    if (this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {
                        throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n" + "\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
                    }
                }
                if (config.safeMode && config.ensureOptimizations) {
                    throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
                }
                this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking);
                this.trackEndLines = /full/i.test(this.config.positionTracking);
                // Convert SingleModeLexerDefinition into a IMultiModeLexerDefinition.
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(lexerDefinition)) {
                    actualDefinition = {
                        modes: {
                            defaultMode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(lexerDefinition)
                        },
                        defaultMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MODE"]
                    };
                } else {
                    // no conversion needed, input should already be a IMultiModeLexerDefinition
                    hasOnlySingleMode = false;
                    actualDefinition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(lexerDefinition);
                }
            });
            if (this.config.skipValidations === false) {
                this.TRACE_INIT("performRuntimeChecks", ()=>{
                    this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["performRuntimeChecks"])(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
                });
                this.TRACE_INIT("performWarningRuntimeChecks", ()=>{
                    this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["performWarningRuntimeChecks"])(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
                });
            }
            // for extra robustness to avoid throwing an none informative error message
            actualDefinition.modes = actualDefinition.modes ? actualDefinition.modes : {};
            // an error of undefined TokenTypes will be detected in "performRuntimeChecks" above.
            // this transformation is to increase robustness in the case of partially invalid lexer definition.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(actualDefinition.modes, (currModeValue, currModeName)=>{
                actualDefinition.modes[currModeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reject$3e$__["reject"])(currModeValue, (currTokType)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__["isUndefined"])(currTokType));
            });
            const allModeNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__keys$3e$__["keys"])(actualDefinition.modes);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(actualDefinition.modes, (currModDef, currModName)=>{
                this.TRACE_INIT(`Mode: <${currModName}> processing`, ()=>{
                    this.modes.push(currModName);
                    if (this.config.skipValidations === false) {
                        this.TRACE_INIT(`validatePatterns`, ()=>{
                            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validatePatterns"])(currModDef, allModeNames));
                        });
                    }
                    // If definition errors were encountered, the analysis phase may fail unexpectedly/
                    // Considering a lexer with definition errors may never be used, there is no point
                    // to performing the analysis anyhow...
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(this.lexerDefinitionErrors)) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["augmentTokenTypes"])(currModDef);
                        let currAnalyzeResult;
                        this.TRACE_INIT(`analyzeTokenTypes`, ()=>{
                            currAnalyzeResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeTokenTypes"])(currModDef, {
                                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                                positionTracking: config.positionTracking,
                                ensureOptimizations: config.ensureOptimizations,
                                safeMode: config.safeMode,
                                tracer: this.TRACE_INIT
                            });
                        });
                        this.patternIdxToConfig[currModName] = currAnalyzeResult.patternIdxToConfig;
                        this.charCodeToPatternIdxToConfig[currModName] = currAnalyzeResult.charCodeToPatternIdxToConfig;
                        this.emptyGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$assign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__assign$3e$__["assign"])({}, this.emptyGroups, currAnalyzeResult.emptyGroups);
                        this.hasCustom = currAnalyzeResult.hasCustom || this.hasCustom;
                        this.canModeBeOptimized[currModName] = currAnalyzeResult.canBeOptimized;
                    }
                });
            });
            this.defaultMode = actualDefinition.defaultMode;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
                const allErrMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(this.lexerDefinitionErrors, (error)=>{
                    return error.message;
                });
                const allErrMessagesString = allErrMessages.join("-----------------------\n");
                throw new Error("Errors detected in definition of Lexer:\n" + allErrMessagesString);
            }
            // Only print warning if there are no errors, This will avoid pl
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(this.lexerDefinitionWarning, (warningDescriptor)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRINT_WARNING"])(warningDescriptor.message);
            });
            this.TRACE_INIT("Choosing sub-methods implementations", ()=>{
                // Choose the relevant internal implementations for this specific parser.
                // These implementations should be in-lined by the JavaScript engine
                // to provide optimal performance in each scenario.
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORT_STICKY"]) {
                    this.chopInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__identity$3e$__["identity"];
                    this.match = this.matchWithTest;
                } else {
                    this.updateLastIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                    this.match = this.matchWithExec;
                }
                if (hasOnlySingleMode) {
                    this.handleModes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                }
                if (this.trackStartLines === false) {
                    this.computeNewColumn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__identity$3e$__["identity"];
                }
                if (this.trackEndLines === false) {
                    this.updateTokenEndLineColumnLocation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                }
                if (/full/i.test(this.config.positionTracking)) {
                    this.createTokenInstance = this.createFullToken;
                } else if (/onlyStart/i.test(this.config.positionTracking)) {
                    this.createTokenInstance = this.createStartOnlyToken;
                } else if (/onlyOffset/i.test(this.config.positionTracking)) {
                    this.createTokenInstance = this.createOffsetOnlyToken;
                } else {
                    throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
                }
                if (this.hasCustom) {
                    this.addToken = this.addTokenUsingPush;
                    this.handlePayload = this.handlePayloadWithCustom;
                } else {
                    this.addToken = this.addTokenUsingMemberAccess;
                    this.handlePayload = this.handlePayloadNoCustom;
                }
            });
            this.TRACE_INIT("Failed Optimization Warnings", ()=>{
                const unOptimizedModes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(this.canModeBeOptimized, (cannotBeOptimized, canBeOptimized, modeName)=>{
                    if (canBeOptimized === false) {
                        cannotBeOptimized.push(modeName);
                    }
                    return cannotBeOptimized;
                }, []);
                if (config.ensureOptimizations && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(unOptimizedModes)) {
                    throw Error(`Lexer Modes: < ${unOptimizedModes.join(", ")} > cannot be optimized.\n` + '\t Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n' + "\t Or inspect the console log for details on how to resolve these issues.");
                }
            });
            this.TRACE_INIT("clearRegExpParserCache", ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$reg_exp_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearRegExpParserCache"])();
            });
            this.TRACE_INIT("toFastProperties", ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$to$2d$fast$2d$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFastProperties"])(this);
            });
        });
    }
    tokenize(text, initialMode = this.defaultMode) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(this.lexerDefinitionErrors)) {
            const allErrMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(this.lexerDefinitionErrors, (error)=>{
                return error.message;
            });
            const allErrMessagesString = allErrMessages.join("-----------------------\n");
            throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + allErrMessagesString);
        }
        return this.tokenizeInternal(text, initialMode);
    }
    // There is quite a bit of duplication between this and "tokenizeInternalLazy"
    // This is intentional due to performance considerations.
    // this method also used quite a bit of `!` none null assertions because it is too optimized
    // for `tsc` to always understand it is "safe"
    tokenizeInternal(text, initialMode) {
        let i, j, k, matchAltImage, longerAlt, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, droppedChar, msg, match;
        const orgText = text;
        const orgLength = orgText.length;
        let offset = 0;
        let matchedTokensIndex = 0;
        // initializing the tokensArray to the "guessed" size.
        // guessing too little will still reduce the number of array re-sizes on pushes.
        // guessing too large (Tested by guessing x4 too large) may cost a bit more of memory
        // but would still have a faster runtime by avoiding (All but one) array resizing.
        const guessedNumberOfTokens = this.hasCustom ? 0 // will break custom token pattern APIs the matchedTokens array will contain undefined elements.
         : Math.floor(text.length / 10);
        const matchedTokens = new Array(guessedNumberOfTokens);
        const errors = [];
        let line = this.trackStartLines ? 1 : undefined;
        let column = this.trackStartLines ? 1 : undefined;
        const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneEmptyGroups"])(this.emptyGroups);
        const trackLines = this.trackStartLines;
        const lineTerminatorPattern = this.config.lineTerminatorsPattern;
        let currModePatternsLength = 0;
        let patternIdxToConfig = [];
        let currCharCodeToPatternIdxToConfig = [];
        const modeStack = [];
        const emptyArray = [];
        Object.freeze(emptyArray);
        let getPossiblePatterns;
        function getPossiblePatternsSlow() {
            return patternIdxToConfig;
        }
        function getPossiblePatternsOptimized(charCode) {
            const optimizedCharIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodeToOptimizedIndex"])(charCode);
            const possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
            if (possiblePatterns === undefined) {
                return emptyArray;
            } else {
                return possiblePatterns;
            }
        }
        const pop_mode = (popToken)=>{
            // TODO: perhaps avoid this error in the edge case there is no more input?
            if (modeStack.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
            // So no error should occur.
            popToken.tokenType.PUSH_MODE === undefined) {
                // if we try to pop the last mode there lexer will no longer have ANY mode.
                // thus the pop is ignored, an error will be created and the lexer will continue parsing in the previous mode.
                const msg = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
                errors.push({
                    offset: popToken.startOffset,
                    line: popToken.startLine,
                    column: popToken.startColumn,
                    length: popToken.image.length,
                    message: msg
                });
            } else {
                modeStack.pop();
                const newMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__last$3e$__["last"])(modeStack);
                patternIdxToConfig = this.patternIdxToConfig[newMode];
                currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
                currModePatternsLength = patternIdxToConfig.length;
                const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
                if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
                    getPossiblePatterns = getPossiblePatternsOptimized;
                } else {
                    getPossiblePatterns = getPossiblePatternsSlow;
                }
            }
        };
        function push_mode(newMode) {
            modeStack.push(newMode);
            currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
            patternIdxToConfig = this.patternIdxToConfig[newMode];
            currModePatternsLength = patternIdxToConfig.length;
            currModePatternsLength = patternIdxToConfig.length;
            const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
            if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
                getPossiblePatterns = getPossiblePatternsOptimized;
            } else {
                getPossiblePatterns = getPossiblePatternsSlow;
            }
        }
        // this pattern seems to avoid a V8 de-optimization, although that de-optimization does not
        // seem to matter performance wise.
        push_mode.call(this, initialMode);
        let currConfig;
        const recoveryEnabled = this.config.recoveryEnabled;
        while(offset < orgLength){
            matchedImage = null;
            const nextCharCode = orgText.charCodeAt(offset);
            const chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode);
            const chosenPatternsLength = chosenPatternIdxToConfig.length;
            for(i = 0; i < chosenPatternsLength; i++){
                currConfig = chosenPatternIdxToConfig[i];
                const currPattern = currConfig.pattern;
                payload = null;
                // manually in-lined because > 600 chars won't be in-lined in V8
                const singleCharCode = currConfig.short;
                if (singleCharCode !== false) {
                    if (nextCharCode === singleCharCode) {
                        // single character string
                        matchedImage = currPattern;
                    }
                } else if (currConfig.isCustom === true) {
                    match = currPattern.exec(orgText, offset, matchedTokens, groups);
                    if (match !== null) {
                        matchedImage = match[0];
                        if (match.payload !== undefined) {
                            payload = match.payload;
                        }
                    } else {
                        matchedImage = null;
                    }
                } else {
                    this.updateLastIndex(currPattern, offset);
                    matchedImage = this.match(currPattern, text, offset);
                }
                if (matchedImage !== null) {
                    // even though this pattern matched we must try a another longer alternative.
                    // this can be used to prioritize keywords over identifiers
                    longerAlt = currConfig.longerAlt;
                    if (longerAlt !== undefined) {
                        // TODO: micro optimize, avoid extra prop access
                        // by saving/linking longerAlt on the original config?
                        const longerAltLength = longerAlt.length;
                        for(k = 0; k < longerAltLength; k++){
                            const longerAltConfig = patternIdxToConfig[longerAlt[k]];
                            const longerAltPattern = longerAltConfig.pattern;
                            altPayload = null;
                            // single Char can never be a longer alt so no need to test it.
                            // manually in-lined because > 600 chars won't be in-lined in V8
                            if (longerAltConfig.isCustom === true) {
                                match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                                if (match !== null) {
                                    matchAltImage = match[0];
                                    if (match.payload !== undefined) {
                                        altPayload = match.payload;
                                    }
                                } else {
                                    matchAltImage = null;
                                }
                            } else {
                                this.updateLastIndex(longerAltPattern, offset);
                                matchAltImage = this.match(longerAltPattern, text, offset);
                            }
                            if (matchAltImage && matchAltImage.length > matchedImage.length) {
                                matchedImage = matchAltImage;
                                payload = altPayload;
                                currConfig = longerAltConfig;
                                break;
                            }
                        }
                    }
                    break;
                }
            }
            // successful match
            if (matchedImage !== null) {
                imageLength = matchedImage.length;
                group = currConfig.group;
                if (group !== undefined) {
                    tokType = currConfig.tokenTypeIdx;
                    // TODO: "offset + imageLength" and the new column may be computed twice in case of "full" location information inside
                    // createFullToken method
                    newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);
                    this.handlePayload(newToken, payload);
                    // TODO: optimize NOOP in case there are no special groups?
                    if (group === false) {
                        matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
                    } else {
                        groups[group].push(newToken);
                    }
                }
                text = this.chopInput(text, imageLength);
                offset = offset + imageLength;
                // TODO: with newlines the column may be assigned twice
                column = this.computeNewColumn(column, imageLength);
                if (trackLines === true && currConfig.canLineTerminator === true) {
                    let numOfLTsInMatch = 0;
                    let foundTerminator;
                    let lastLTEndOffset;
                    lineTerminatorPattern.lastIndex = 0;
                    do {
                        foundTerminator = lineTerminatorPattern.test(matchedImage);
                        if (foundTerminator === true) {
                            lastLTEndOffset = lineTerminatorPattern.lastIndex - 1;
                            numOfLTsInMatch++;
                        }
                    }while (foundTerminator === true)
                    if (numOfLTsInMatch !== 0) {
                        line = line + numOfLTsInMatch;
                        column = imageLength - lastLTEndOffset;
                        this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength);
                    }
                }
                // will be NOOP if no modes present
                this.handleModes(currConfig, pop_mode, push_mode, newToken);
            } else {
                // error recovery, drop characters until we identify a valid token's start point
                const errorStartOffset = offset;
                const errorLine = line;
                const errorColumn = column;
                let foundResyncPoint = recoveryEnabled === false;
                while(foundResyncPoint === false && offset < orgLength){
                    // Identity Func (when sticky flag is enabled)
                    text = this.chopInput(text, 1);
                    offset++;
                    for(j = 0; j < currModePatternsLength; j++){
                        const currConfig = patternIdxToConfig[j];
                        const currPattern = currConfig.pattern;
                        // manually in-lined because > 600 chars won't be in-lined in V8
                        const singleCharCode = currConfig.short;
                        if (singleCharCode !== false) {
                            if (orgText.charCodeAt(offset) === singleCharCode) {
                                // single character string
                                foundResyncPoint = true;
                            }
                        } else if (currConfig.isCustom === true) {
                            foundResyncPoint = currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
                        } else {
                            this.updateLastIndex(currPattern, offset);
                            foundResyncPoint = currPattern.exec(text) !== null;
                        }
                        if (foundResyncPoint === true) {
                            break;
                        }
                    }
                }
                errLength = offset - errorStartOffset;
                column = this.computeNewColumn(column, errLength);
                // at this point we either re-synced or reached the end of the input text
                msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn);
                errors.push({
                    offset: errorStartOffset,
                    line: errorLine,
                    column: errorColumn,
                    length: errLength,
                    message: msg
                });
                if (recoveryEnabled === false) {
                    break;
                }
            }
        }
        // if we do have custom patterns which push directly into the
        // TODO: custom tokens should not push directly??
        if (!this.hasCustom) {
            // if we guessed a too large size for the tokens array this will shrink it to the right size.
            matchedTokens.length = matchedTokensIndex;
        }
        return {
            tokens: matchedTokens,
            groups: groups,
            errors: errors
        };
    }
    handleModes(config, pop_mode, push_mode, newToken) {
        if (config.pop === true) {
            // need to save the PUSH_MODE property as if the mode is popped
            // patternIdxToPopMode is updated to reflect the new mode after popping the stack
            const pushMode = config.push;
            pop_mode(newToken);
            if (pushMode !== undefined) {
                push_mode.call(this, pushMode);
            }
        } else if (config.push !== undefined) {
            push_mode.call(this, config.push);
        }
    }
    chopInput(text, length) {
        return text.substring(length);
    }
    updateLastIndex(regExp, newLastIndex) {
        regExp.lastIndex = newLastIndex;
    }
    // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
    updateTokenEndLineColumnLocation(newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
        let lastCharIsLT, fixForEndingInLT;
        if (group !== undefined) {
            // a none skipped multi line Token, need to update endLine/endColumn
            lastCharIsLT = lastLTIdx === imageLength - 1;
            fixForEndingInLT = lastCharIsLT ? -1 : 0;
            if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
                // if a token ends in a LT that last LT only affects the line numbering of following Tokens
                newToken.endLine = line + fixForEndingInLT;
                // the last LT in a token does not affect the endColumn either as the [columnStart ... columnEnd)
                // inclusive to exclusive range.
                newToken.endColumn = column - 1 + -fixForEndingInLT;
            }
        // else single LT in the last character of a token, no need to modify the endLine/EndColumn
        }
    }
    computeNewColumn(oldColumn, imageLength) {
        return oldColumn + imageLength;
    }
    createOffsetOnlyToken(image, startOffset, tokenTypeIdx, tokenType) {
        return {
            image,
            startOffset,
            tokenTypeIdx,
            tokenType
        };
    }
    createStartOnlyToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
        return {
            image,
            startOffset,
            startLine,
            startColumn,
            tokenTypeIdx,
            tokenType
        };
    }
    createFullToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
        return {
            image,
            startOffset,
            endOffset: startOffset + imageLength - 1,
            startLine,
            endLine: startLine,
            startColumn,
            endColumn: startColumn + imageLength - 1,
            tokenTypeIdx,
            tokenType
        };
    }
    addTokenUsingPush(tokenVector, index, tokenToAdd) {
        tokenVector.push(tokenToAdd);
        return index;
    }
    addTokenUsingMemberAccess(tokenVector, index, tokenToAdd) {
        tokenVector[index] = tokenToAdd;
        index++;
        return index;
    }
    handlePayloadNoCustom(token, payload) {}
    handlePayloadWithCustom(token, payload) {
        if (payload !== null) {
            token.payload = payload;
        }
    }
    matchWithTest(pattern, text, offset) {
        const found = pattern.test(text);
        if (found === true) {
            return text.substring(offset, pattern.lastIndex);
        }
        return null;
    }
    matchWithExec(pattern, text) {
        const regExpArray = pattern.exec(text);
        return regExpArray !== null ? regExpArray[0] : null;
    }
}
Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it will" + "be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
Lexer.NA = /NOT_APPLICABLE/; //# sourceMappingURL=lexer_public.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens_public.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EOF": (()=>EOF),
    "createToken": (()=>createToken),
    "createTokenInstance": (()=>createTokenInstance),
    "hasTokenLabel": (()=>hasTokenLabel),
    "tokenLabel": (()=>tokenLabel),
    "tokenMatcher": (()=>tokenMatcher),
    "tokenName": (()=>tokenName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.js [app-client] (ecmascript) <export default as isString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js [app-client] (ecmascript) <export default as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
;
;
;
function tokenLabel(tokType) {
    if (hasTokenLabel(tokType)) {
        return tokType.LABEL;
    } else {
        return tokType.name;
    }
}
function tokenName(tokType) {
    return tokType.name;
}
function hasTokenLabel(obj) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isString$3e$__["isString"])(obj.LABEL) && obj.LABEL !== "";
}
const PARENT = "parent";
const CATEGORIES = "categories";
const LABEL = "label";
const GROUP = "group";
const PUSH_MODE = "push_mode";
const POP_MODE = "pop_mode";
const LONGER_ALT = "longer_alt";
const LINE_BREAKS = "line_breaks";
const START_CHARS_HINT = "start_chars_hint";
function createToken(config) {
    return createTokenInternal(config);
}
function createTokenInternal(config) {
    const pattern = config.pattern;
    const tokenType = {};
    tokenType.name = config.name;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__["isUndefined"])(pattern)) {
        tokenType.PATTERN = pattern;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, PARENT)) {
        throw "The parent property is no longer supported.\n" + "See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, CATEGORIES)) {
        // casting to ANY as this will be fixed inside `augmentTokenTypes``
        tokenType.CATEGORIES = config[CATEGORIES];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["augmentTokenTypes"])([
        tokenType
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, LABEL)) {
        tokenType.LABEL = config[LABEL];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, GROUP)) {
        tokenType.GROUP = config[GROUP];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, POP_MODE)) {
        tokenType.POP_MODE = config[POP_MODE];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, PUSH_MODE)) {
        tokenType.PUSH_MODE = config[PUSH_MODE];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, LONGER_ALT)) {
        tokenType.LONGER_ALT = config[LONGER_ALT];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, LINE_BREAKS)) {
        tokenType.LINE_BREAKS = config[LINE_BREAKS];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, START_CHARS_HINT)) {
        tokenType.START_CHARS_HINT = config[START_CHARS_HINT];
    }
    return tokenType;
}
const EOF = createToken({
    name: "EOF",
    pattern: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].NA
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["augmentTokenTypes"])([
    EOF
]);
function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
    return {
        image,
        startOffset,
        endOffset,
        startLine,
        endLine,
        startColumn,
        endColumn,
        tokenTypeIdx: tokType.tokenTypeIdx,
        tokenType: tokType
    };
}
function tokenMatcher(token, tokType) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenStructuredMatcher"])(token, tokType);
} //# sourceMappingURL=tokens_public.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/errors_public.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultGrammarResolverErrorProvider": (()=>defaultGrammarResolverErrorProvider),
    "defaultGrammarValidatorErrorProvider": (()=>defaultGrammarValidatorErrorProvider),
    "defaultParserErrorProvider": (()=>defaultParserErrorProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js [app-client] (ecmascript) <export default as first>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/reduce.js [app-client] (ecmascript) <export default as reduce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js [app-client] (ecmascript) <export default as map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/model.js [app-client] (ecmascript)");
;
;
;
const defaultParserErrorProvider = {
    buildMismatchTokenMessage ({ expected, actual, previous, ruleName }) {
        const hasLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTokenLabel"])(expected);
        const expectedMsg = hasLabel ? `--> ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenLabel"])(expected)} <--` : `token of type --> ${expected.name} <--`;
        const msg = `Expecting ${expectedMsg} but found --> '${actual.image}' <--`;
        return msg;
    },
    buildNotAllInputParsedMessage ({ firstRedundant, ruleName }) {
        return "Redundant input, expecting EOF but found: " + firstRedundant.image;
    },
    buildNoViableAltMessage ({ expectedPathsPerAlt, actual, previous, customUserDescription, ruleName }) {
        const errPrefix = "Expecting: ";
        // TODO: issue: No Viable Alternative Error may have incomplete details. #502
        const actualText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(actual).image;
        const errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) {
            return errPrefix + customUserDescription + errSuffix;
        } else {
            const allLookAheadPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(expectedPathsPerAlt, (result, currAltPaths)=>result.concat(currAltPaths), []);
            const nextValidTokenSequences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(allLookAheadPaths, (currPath)=>`[${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(currPath, (currTokenType)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenLabel"])(currTokenType)).join(", ")}]`);
            const nextValidSequenceItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(nextValidTokenSequences, (itemMsg, idx)=>`  ${idx + 1}. ${itemMsg}`);
            const calculatedDescription = `one of these possible Token sequences:\n${nextValidSequenceItems.join("\n")}`;
            return errPrefix + calculatedDescription + errSuffix;
        }
    },
    buildEarlyExitMessage ({ expectedIterationPaths, actual, customUserDescription, ruleName }) {
        const errPrefix = "Expecting: ";
        // TODO: issue: No Viable Alternative Error may have incomplete details. #502
        const actualText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(actual).image;
        const errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) {
            return errPrefix + customUserDescription + errSuffix;
        } else {
            const nextValidTokenSequences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(expectedIterationPaths, (currPath)=>`[${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(currPath, (currTokenType)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenLabel"])(currTokenType)).join(",")}]`);
            const calculatedDescription = `expecting at least one iteration which starts with one of these possible Token sequences::\n  ` + `<${nextValidTokenSequences.join(" ,")}>`;
            return errPrefix + calculatedDescription + errSuffix;
        }
    }
};
Object.freeze(defaultParserErrorProvider);
const defaultGrammarResolverErrorProvider = {
    buildRuleNotFoundError (topLevelRule, undefinedRule) {
        const msg = "Invalid grammar, reference to a rule which is not defined: ->" + undefinedRule.nonTerminalName + "<-\n" + "inside top level rule: ->" + topLevelRule.name + "<-";
        return msg;
    }
};
const defaultGrammarValidatorErrorProvider = {
    buildDuplicateFoundError (topLevelRule, duplicateProds) {
        function getExtraProductionArgument(prod) {
            if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
                return prod.terminalType.name;
            } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonTerminal"]) {
                return prod.nonTerminalName;
            } else {
                return "";
            }
        }
        const topLevelName = topLevelRule.name;
        const duplicateProd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(duplicateProds);
        const index = duplicateProd.idx;
        const dslName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionDslName"])(duplicateProd);
        const extraArgument = getExtraProductionArgument(duplicateProd);
        const hasExplicitIndex = index > 0;
        let msg = `->${dslName}${hasExplicitIndex ? index : ""}<- ${extraArgument ? `with argument: ->${extraArgument}<-` : ""}
                  appears more than once (${duplicateProds.length} times) in the top level rule: ->${topLevelName}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
        // white space trimming time! better to trim afterwards as it allows to use WELL formatted multi line template strings...
        msg = msg.replace(/[ \t]+/g, " ");
        msg = msg.replace(/\s\s+/g, "\n");
        return msg;
    },
    buildNamespaceConflictError (rule) {
        const errMsg = `Namespace conflict found in grammar.\n` + `The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${rule.name}>.\n` + `To resolve this make sure each Terminal and Non-Terminal names are unique\n` + `This is easy to accomplish by using the convention that Terminal names start with an uppercase letter\n` + `and Non-Terminal names start with a lower case letter.`;
        return errMsg;
    },
    buildAlternationPrefixAmbiguityError (options) {
        const pathMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(options.prefixPath, (currTok)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenLabel"])(currTok)).join(", ");
        const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        const errMsg = `Ambiguous alternatives: <${options.ambiguityIndices.join(" ,")}> due to common lookahead prefix\n` + `in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,\n` + `<${pathMsg}> may appears as a prefix path in all these alternatives.\n` + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\n` + `For Further details.`;
        return errMsg;
    },
    buildAlternationAmbiguityError (options) {
        const pathMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(options.prefixPath, (currtok)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenLabel"])(currtok)).join(", ");
        const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        let currMessage = `Ambiguous Alternatives Detected: <${options.ambiguityIndices.join(" ,")}> in <OR${occurrence}>` + ` inside <${options.topLevelRule.name}> Rule,\n` + `<${pathMsg}> may appears as a prefix path in all these alternatives.\n`;
        currMessage = currMessage + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\n` + `For Further details.`;
        return currMessage;
    },
    buildEmptyRepetitionError (options) {
        let dslName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionDslName"])(options.repetition);
        if (options.repetition.idx !== 0) {
            dslName += options.repetition.idx;
        }
        const errMsg = `The repetition <${dslName}> within Rule <${options.topLevelRule.name}> can never consume any tokens.\n` + `This could lead to an infinite loop.`;
        return errMsg;
    },
    // TODO: remove - `errors_public` from nyc.config.js exclude
    //       once this method is fully removed from this file
    buildTokenNameError (options) {
        /* istanbul ignore next */ return "deprecated";
    },
    buildEmptyAlternationError (options) {
        const errMsg = `Ambiguous empty alternative: <${options.emptyChoiceIdx + 1}>` + ` in <OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.\n` + `Only the last alternative may be an empty alternative.`;
        return errMsg;
    },
    buildTooManyAlternativesError (options) {
        const errMsg = `An Alternation cannot have more than 256 alternatives:\n` + `<OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.\n has ${options.alternation.definition.length + 1} alternatives.`;
        return errMsg;
    },
    buildLeftRecursionError (options) {
        const ruleName = options.topLevelRule.name;
        const pathNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(options.leftRecursionPath, (currRule)=>currRule.name);
        const leftRecursivePath = `${ruleName} --> ${pathNames.concat([
            ruleName
        ]).join(" --> ")}`;
        const errMsg = `Left Recursion found in grammar.\n` + `rule: <${ruleName}> can be invoked from itself (directly or indirectly)\n` + `without consuming any Tokens. The grammar path that causes this is: \n ${leftRecursivePath}\n` + ` To fix this refactor your grammar to remove the left recursion.\n` + `see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
        return errMsg;
    },
    // TODO: remove - `errors_public` from nyc.config.js exclude
    //       once this method is fully removed from this file
    buildInvalidRuleNameError (options) {
        /* istanbul ignore next */ return "deprecated";
    },
    buildDuplicateRuleNameError (options) {
        let ruleName;
        if (options.topLevelRule instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rule"]) {
            ruleName = options.topLevelRule.name;
        } else {
            ruleName = options.topLevelRule;
        }
        const errMsg = `Duplicate definition, rule: ->${ruleName}<- is already defined in the grammar: ->${options.grammarName}<-`;
        return errMsg;
    }
}; //# sourceMappingURL=errors_public.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/resolver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GastRefResolverVisitor": (()=>GastRefResolverVisitor),
    "resolveGrammar": (()=>resolveGrammar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js [app-client] (ecmascript) <export default as values>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/visitor.js [app-client] (ecmascript)");
;
;
;
function resolveGrammar(topLevels, errMsgProvider) {
    const refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
    refResolver.resolveRefs();
    return refResolver.errors;
}
class GastRefResolverVisitor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAstVisitor"] {
    constructor(nameToTopRule, errMsgProvider){
        super();
        this.nameToTopRule = nameToTopRule;
        this.errMsgProvider = errMsgProvider;
        this.errors = [];
    }
    resolveRefs() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.nameToTopRule), (prod)=>{
            this.currTopLevel = prod;
            prod.accept(this);
        });
    }
    visitNonTerminal(node) {
        const ref = this.nameToTopRule[node.nonTerminalName];
        if (!ref) {
            const msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
            this.errors.push({
                message: msg,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].UNRESOLVED_SUBRULE_REF,
                ruleName: this.currTopLevel.name,
                unresolvedRefName: node.nonTerminalName
            });
        } else {
            node.referencedRule = ref;
        }
    }
} //# sourceMappingURL=resolver.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/interpreter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AbstractNextPossibleTokensWalker": (()=>AbstractNextPossibleTokensWalker),
    "AbstractNextTerminalAfterProductionWalker": (()=>AbstractNextTerminalAfterProductionWalker),
    "NextAfterTokenWalker": (()=>NextAfterTokenWalker),
    "NextTerminalAfterAtLeastOneSepWalker": (()=>NextTerminalAfterAtLeastOneSepWalker),
    "NextTerminalAfterAtLeastOneWalker": (()=>NextTerminalAfterAtLeastOneWalker),
    "NextTerminalAfterManySepWalker": (()=>NextTerminalAfterManySepWalker),
    "NextTerminalAfterManyWalker": (()=>NextTerminalAfterManyWalker),
    "nextPossibleTokensAfter": (()=>nextPossibleTokensAfter),
    "possiblePathsFrom": (()=>possiblePathsFrom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$first$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/first.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/rest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clone.js [app-client] (ecmascript) <export default as clone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js [app-client] (ecmascript) <export default as first>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/drop.js [app-client] (ecmascript) <export default as drop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__last$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js [app-client] (ecmascript) <export default as last>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$dropRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dropRight$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/dropRight.js [app-client] (ecmascript) <export default as dropRight>");
;
;
;
;
class AbstractNextPossibleTokensWalker extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RestWalker"] {
    constructor(topProd, path){
        super();
        this.topProd = topProd;
        this.path = path;
        this.possibleTokTypes = [];
        this.nextProductionName = "";
        this.nextProductionOccurrence = 0;
        this.found = false;
        this.isAtEndOfPath = false;
    }
    startWalking() {
        this.found = false;
        if (this.path.ruleStack[0] !== this.topProd.name) {
            throw Error("The path does not start with the walker's top Rule!");
        }
        // immutable for the win
        this.ruleStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(this.path.ruleStack).reverse(); // intelij bug requires assertion
        this.occurrenceStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(this.path.occurrenceStack).reverse(); // intelij bug requires assertion
        // already verified that the first production is valid, we now seek the 2nd production
        this.ruleStack.pop();
        this.occurrenceStack.pop();
        this.updateExpectedNext();
        this.walk(this.topProd);
        return this.possibleTokTypes;
    }
    walk(prod, prevRest = []) {
        // stop scanning once we found the path
        if (!this.found) {
            super.walk(prod, prevRest);
        }
    }
    walkProdRef(refProd, currRest, prevRest) {
        // found the next production, need to keep walking in it
        if (refProd.referencedRule.name === this.nextProductionName && refProd.idx === this.nextProductionOccurrence) {
            const fullRest = currRest.concat(prevRest);
            this.updateExpectedNext();
            this.walk(refProd.referencedRule, fullRest);
        }
    }
    updateExpectedNext() {
        // need to consume the Terminal
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(this.ruleStack)) {
            // must reset nextProductionXXX to avoid walking down another Top Level production while what we are
            // really seeking is the last Terminal...
            this.nextProductionName = "";
            this.nextProductionOccurrence = 0;
            this.isAtEndOfPath = true;
        } else {
            this.nextProductionName = this.ruleStack.pop();
            this.nextProductionOccurrence = this.occurrenceStack.pop();
        }
    }
}
class NextAfterTokenWalker extends AbstractNextPossibleTokensWalker {
    constructor(topProd, path){
        super(topProd, path);
        this.path = path;
        this.nextTerminalName = "";
        this.nextTerminalOccurrence = 0;
        this.nextTerminalName = this.path.lastTok.name;
        this.nextTerminalOccurrence = this.path.lastTokOccurrence;
    }
    walkTerminal(terminal, currRest, prevRest) {
        if (this.isAtEndOfPath && terminal.terminalType.name === this.nextTerminalName && terminal.idx === this.nextTerminalOccurrence && !this.found) {
            const fullRest = currRest.concat(prevRest);
            const restProd = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"]({
                definition: fullRest
            });
            this.possibleTokTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$first$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["first"])(restProd);
            this.found = true;
        }
    }
}
class AbstractNextTerminalAfterProductionWalker extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RestWalker"] {
    constructor(topRule, occurrence){
        super();
        this.topRule = topRule;
        this.occurrence = occurrence;
        this.result = {
            token: undefined,
            occurrence: undefined,
            isEndOfRule: undefined
        };
    }
    startWalking() {
        this.walk(this.topRule);
        return this.result;
    }
}
class NextTerminalAfterManyWalker extends AbstractNextTerminalAfterProductionWalker {
    walkMany(manyProd, currRest, prevRest) {
        if (manyProd.idx === this.occurrence) {
            const firstAfterMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterMany === undefined;
            if (firstAfterMany instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
                this.result.token = firstAfterMany.terminalType;
                this.result.occurrence = firstAfterMany.idx;
            }
        } else {
            super.walkMany(manyProd, currRest, prevRest);
        }
    }
}
class NextTerminalAfterManySepWalker extends AbstractNextTerminalAfterProductionWalker {
    walkManySep(manySepProd, currRest, prevRest) {
        if (manySepProd.idx === this.occurrence) {
            const firstAfterManySep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterManySep === undefined;
            if (firstAfterManySep instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
                this.result.token = firstAfterManySep.terminalType;
                this.result.occurrence = firstAfterManySep.idx;
            }
        } else {
            super.walkManySep(manySepProd, currRest, prevRest);
        }
    }
}
class NextTerminalAfterAtLeastOneWalker extends AbstractNextTerminalAfterProductionWalker {
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
        if (atLeastOneProd.idx === this.occurrence) {
            const firstAfterAtLeastOne = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterAtLeastOne === undefined;
            if (firstAfterAtLeastOne instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
                this.result.token = firstAfterAtLeastOne.terminalType;
                this.result.occurrence = firstAfterAtLeastOne.idx;
            }
        } else {
            super.walkAtLeastOne(atLeastOneProd, currRest, prevRest);
        }
    }
}
class NextTerminalAfterAtLeastOneSepWalker extends AbstractNextTerminalAfterProductionWalker {
    walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest) {
        if (atleastOneSepProd.idx === this.occurrence) {
            const firstAfterfirstAfterAtLeastOneSep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterfirstAfterAtLeastOneSep === undefined;
            if (firstAfterfirstAfterAtLeastOneSep instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
                this.result.token = firstAfterfirstAfterAtLeastOneSep.terminalType;
                this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
            }
        } else {
            super.walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest);
        }
    }
}
function possiblePathsFrom(targetDef, maxLength, currPath = []) {
    // avoid side effects
    currPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(currPath);
    let result = [];
    let i = 0;
    // TODO: avoid inner funcs
    function remainingPathWith(nextDef) {
        return nextDef.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(targetDef, i + 1));
    }
    // TODO: avoid inner funcs
    function getAlternativesForProd(definition) {
        const alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
        return result.concat(alternatives);
    }
    /**
     * Mandatory productions will halt the loop as the paths computed from their recursive calls will already contain the
     * following (rest) of the targetDef.
     *
     * For optional productions (Option/Repetition/...) the loop will continue to represent the paths that do not include the
     * the optional production.
     */ while(currPath.length < maxLength && i < targetDef.length){
        const prod = targetDef[i];
        /* istanbul ignore else */ if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"]) {
            return getAlternativesForProd(prod.definition);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonTerminal"]) {
            return getAlternativesForProd(prod.definition);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"]) {
            result = getAlternativesForProd(prod.definition);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatory"]) {
            const newDef = prod.definition.concat([
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]({
                    definition: prod.definition
                })
            ]);
            return getAlternativesForProd(newDef);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatoryWithSeparator"]) {
            const newDef = [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"]({
                    definition: prod.definition
                }),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]({
                    definition: [
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]({
                            terminalType: prod.separator
                        })
                    ].concat(prod.definition)
                })
            ];
            return getAlternativesForProd(newDef);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionWithSeparator"]) {
            const newDef = prod.definition.concat([
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]({
                    definition: [
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]({
                            terminalType: prod.separator
                        })
                    ].concat(prod.definition)
                })
            ]);
            result = getAlternativesForProd(newDef);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]) {
            const newDef = prod.definition.concat([
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]({
                    definition: prod.definition
                })
            ]);
            result = getAlternativesForProd(newDef);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternation"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(prod.definition, (currAlt)=>{
                // TODO: this is a limited check for empty alternatives
                //   It would prevent a common case of infinite loops during parser initialization.
                //   However **in-directly** empty alternatives may still cause issues.
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(currAlt.definition) === false) {
                    result = getAlternativesForProd(currAlt.definition);
                }
            });
            return result;
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
            currPath.push(prod.terminalType);
        } else {
            throw Error("non exhaustive match");
        }
        i++;
    }
    result.push({
        partialPath: currPath,
        suffixDef: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(targetDef, i)
    });
    return result;
}
function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
    const EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
    // to avoid creating a new Array each time.
    const EXIT_NON_TERMINAL_ARR = [
        EXIT_NON_TERMINAL
    ];
    const EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
    let foundCompletePath = false;
    const tokenVectorLength = tokenVector.length;
    const minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
    const result = [];
    const possiblePaths = [];
    possiblePaths.push({
        idx: -1,
        def: initialDef,
        ruleStack: [],
        occurrenceStack: []
    });
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(possiblePaths)){
        const currPath = possiblePaths.pop();
        // skip alternatives if no more results can be found (assuming deterministic grammar with fixed lookahead)
        if (currPath === EXIT_ALTERNATIVE) {
            if (foundCompletePath && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__last$3e$__["last"])(possiblePaths).idx <= minimalAlternativesIndex) {
                // remove irrelevant alternative
                possiblePaths.pop();
            }
            continue;
        }
        const currDef = currPath.def;
        const currIdx = currPath.idx;
        const currRuleStack = currPath.ruleStack;
        const currOccurrenceStack = currPath.occurrenceStack;
        // For Example: an empty path could exist in a valid grammar in the case of an EMPTY_ALT
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(currDef)) {
            continue;
        }
        const prod = currDef[0];
        /* istanbul ignore else */ if (prod === EXIT_NON_TERMINAL) {
            const nextPath = {
                idx: currIdx,
                def: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef),
                ruleStack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$dropRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dropRight$3e$__["dropRight"])(currRuleStack),
                occurrenceStack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$dropRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dropRight$3e$__["dropRight"])(currOccurrenceStack)
            };
            possiblePaths.push(nextPath);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
            /* istanbul ignore else */ if (currIdx < tokenVectorLength - 1) {
                const nextIdx = currIdx + 1;
                const actualToken = tokenVector[nextIdx];
                if (tokMatcher(actualToken, prod.terminalType)) {
                    const nextPath = {
                        idx: nextIdx,
                        def: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef),
                        ruleStack: currRuleStack,
                        occurrenceStack: currOccurrenceStack
                    };
                    possiblePaths.push(nextPath);
                }
            // end of the line
            } else if (currIdx === tokenVectorLength - 1) {
                // IGNORE ABOVE ELSE
                result.push({
                    nextTokenType: prod.terminalType,
                    nextTokenOccurrence: prod.idx,
                    ruleStack: currRuleStack,
                    occurrenceStack: currOccurrenceStack
                });
                foundCompletePath = true;
            } else {
                throw Error("non exhaustive match");
            }
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonTerminal"]) {
            const newRuleStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(currRuleStack);
            newRuleStack.push(prod.nonTerminalName);
            const newOccurrenceStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(currOccurrenceStack);
            newOccurrenceStack.push(prod.idx);
            const nextPath = {
                idx: currIdx,
                def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef)),
                ruleStack: newRuleStack,
                occurrenceStack: newOccurrenceStack
            };
            possiblePaths.push(nextPath);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"]) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            const nextPathWithout = {
                idx: currIdx,
                def: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            const nextPathWith = {
                idx: currIdx,
                def: prod.definition.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatory"]) {
            // TODO:(THE NEW operators here take a while...) (convert once?)
            const secondIteration = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]({
                definition: prod.definition,
                idx: prod.idx
            });
            const nextDef = prod.definition.concat([
                secondIteration
            ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef));
            const nextPath = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatoryWithSeparator"]) {
            // TODO:(THE NEW operators here take a while...) (convert once?)
            const separatorGast = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]({
                terminalType: prod.separator
            });
            const secondIteration = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]({
                definition: [
                    separatorGast
                ].concat(prod.definition),
                idx: prod.idx
            });
            const nextDef = prod.definition.concat([
                secondIteration
            ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef));
            const nextPath = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionWithSeparator"]) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            const nextPathWithout = {
                idx: currIdx,
                def: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            const separatorGast = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]({
                terminalType: prod.separator
            });
            const nthRepetition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]({
                definition: [
                    separatorGast
                ].concat(prod.definition),
                idx: prod.idx
            });
            const nextDef = prod.definition.concat([
                nthRepetition
            ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef));
            const nextPathWith = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            const nextPathWithout = {
                idx: currIdx,
                def: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            // TODO: an empty repetition will cause infinite loops here, will the parser detect this in selfAnalysis?
            const nthRepetition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]({
                definition: prod.definition,
                idx: prod.idx
            });
            const nextDef = prod.definition.concat([
                nthRepetition
            ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef));
            const nextPathWith = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternation"]) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            for(let i = prod.definition.length - 1; i >= 0; i--){
                const currAlt = prod.definition[i];
                const currAltPath = {
                    idx: currIdx,
                    def: currAlt.definition.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef)),
                    ruleStack: currRuleStack,
                    occurrenceStack: currOccurrenceStack
                };
                possiblePaths.push(currAltPath);
                possiblePaths.push(EXIT_ALTERNATIVE);
            }
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"]) {
            possiblePaths.push({
                idx: currIdx,
                def: prod.definition.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            });
        } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rule"]) {
            // last because we should only encounter at most a single one of these per invocation.
            possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
        } else {
            throw Error("non exhaustive match");
        }
    }
    return result;
}
function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
    const newRuleStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(currRuleStack);
    newRuleStack.push(topRule.name);
    const newCurrOccurrenceStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(currOccurrenceStack);
    // top rule is always assumed to have been called with occurrence index 1
    newCurrOccurrenceStack.push(1);
    return {
        idx: currIdx,
        def: topRule.definition,
        ruleStack: newRuleStack,
        occurrenceStack: newCurrOccurrenceStack
    };
} //# sourceMappingURL=interpreter.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/lookahead.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PROD_TYPE": (()=>PROD_TYPE),
    "areTokenCategoriesNotUsed": (()=>areTokenCategoriesNotUsed),
    "buildAlternativesLookAheadFunc": (()=>buildAlternativesLookAheadFunc),
    "buildLookaheadFuncForOptionalProd": (()=>buildLookaheadFuncForOptionalProd),
    "buildLookaheadFuncForOr": (()=>buildLookaheadFuncForOr),
    "buildSingleAlternativeLookaheadFunction": (()=>buildSingleAlternativeLookaheadFunction),
    "containsPath": (()=>containsPath),
    "getLookaheadPaths": (()=>getLookaheadPaths),
    "getLookaheadPathsForOptionalProd": (()=>getLookaheadPathsForOptionalProd),
    "getLookaheadPathsForOr": (()=>getLookaheadPathsForOr),
    "getProdType": (()=>getProdType),
    "isStrictPrefixOfPath": (()=>isStrictPrefixOfPath),
    "lookAheadSequenceFromAlternatives": (()=>lookAheadSequenceFromAlternatives)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/interpreter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/rest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/every.js [app-client] (ecmascript) <export default as every>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js [app-client] (ecmascript) <export default as map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js [app-client] (ecmascript) <export default as flatten>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/reduce.js [app-client] (ecmascript) <export default as reduce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/visitor.js [app-client] (ecmascript)");
;
;
;
;
;
var PROD_TYPE;
(function(PROD_TYPE) {
    PROD_TYPE[PROD_TYPE["OPTION"] = 0] = "OPTION";
    PROD_TYPE[PROD_TYPE["REPETITION"] = 1] = "REPETITION";
    PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
    PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
    PROD_TYPE[PROD_TYPE["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
    PROD_TYPE[PROD_TYPE["ALTERNATION"] = 5] = "ALTERNATION";
})(PROD_TYPE || (PROD_TYPE = {}));
function getProdType(prod) {
    /* istanbul ignore else */ if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"] || prod === "Option") {
        return PROD_TYPE.OPTION;
    } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"] || prod === "Repetition") {
        return PROD_TYPE.REPETITION;
    } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatory"] || prod === "RepetitionMandatory") {
        return PROD_TYPE.REPETITION_MANDATORY;
    } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatoryWithSeparator"] || prod === "RepetitionMandatoryWithSeparator") {
        return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
    } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionWithSeparator"] || prod === "RepetitionWithSeparator") {
        return PROD_TYPE.REPETITION_WITH_SEPARATOR;
    } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternation"] || prod === "Alternation") {
        return PROD_TYPE.ALTERNATION;
    } else {
        throw Error("non exhaustive match");
    }
}
function getLookaheadPaths(options) {
    const { occurrence, rule, prodType, maxLookahead } = options;
    const type = getProdType(prodType);
    if (type === PROD_TYPE.ALTERNATION) {
        return getLookaheadPathsForOr(occurrence, rule, maxLookahead);
    } else {
        return getLookaheadPathsForOptionalProd(occurrence, rule, type, maxLookahead);
    }
}
function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
    const lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead);
    const tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenStructuredMatcherNoCategories"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenStructuredMatcher"];
    return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher, dynamicTokensEnabled);
}
function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
    const lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
    const tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenStructuredMatcherNoCategories"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenStructuredMatcher"];
    return lookaheadBuilder(lookAheadPaths[0], tokenMatcher, dynamicTokensEnabled);
}
function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {
    const numOfAlts = alts.length;
    const areAllOneTokenLookahead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__["every"])(alts, (currAlt)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__["every"])(currAlt, (currPath)=>{
            return currPath.length === 1;
        });
    });
    // This version takes into account the predicates as well.
    if (hasPredicates) {
        /**
         * @returns {number} - The chosen alternative index
         */ return function(orAlts) {
            // unfortunately the predicates must be extracted every single time
            // as they cannot be cached due to references to parameters(vars) which are no longer valid.
            // note that in the common case of no predicates, no cpu time will be wasted on this (see else block)
            const predicates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(orAlts, (currAlt)=>currAlt.GATE);
            for(let t = 0; t < numOfAlts; t++){
                const currAlt = alts[t];
                const currNumOfPaths = currAlt.length;
                const currPredicate = predicates[t];
                if (currPredicate !== undefined && currPredicate.call(this) === false) {
                    continue;
                }
                nextPath: for(let j = 0; j < currNumOfPaths; j++){
                    const currPath = currAlt[j];
                    const currPathLength = currPath.length;
                    for(let i = 0; i < currPathLength; i++){
                        const nextToken = this.LA(i + 1);
                        if (tokenMatcher(nextToken, currPath[i]) === false) {
                            continue nextPath;
                        }
                    }
                    // found a full path that matches.
                    // this will also work for an empty ALT as the loop will be skipped
                    return t;
                }
            // none of the paths for the current alternative matched
            // try the next alternative
            }
            // none of the alternatives could be matched
            return undefined;
        };
    } else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        // optimized (common) case of all the lookaheads paths requiring only
        // a single token lookahead. These Optimizations cannot work if dynamically defined Tokens are used.
        const singleTokenAlts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(alts, (currAlt)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])(currAlt);
        });
        const choiceToAlt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(singleTokenAlts, (result, currAlt, idx)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(currAlt, (currTokType)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(result, currTokType.tokenTypeIdx)) {
                    result[currTokType.tokenTypeIdx] = idx;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(currTokType.categoryMatches, (currExtendingType)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(result, currExtendingType)) {
                        result[currExtendingType] = idx;
                    }
                });
            });
            return result;
        }, {});
        /**
         * @returns {number} - The chosen alternative index
         */ return function() {
            const nextToken = this.LA(1);
            return choiceToAlt[nextToken.tokenTypeIdx];
        };
    } else {
        // optimized lookahead without needing to check the predicates at all.
        // this causes code duplication which is intentional to improve performance.
        /**
         * @returns {number} - The chosen alternative index
         */ return function() {
            for(let t = 0; t < numOfAlts; t++){
                const currAlt = alts[t];
                const currNumOfPaths = currAlt.length;
                nextPath: for(let j = 0; j < currNumOfPaths; j++){
                    const currPath = currAlt[j];
                    const currPathLength = currPath.length;
                    for(let i = 0; i < currPathLength; i++){
                        const nextToken = this.LA(i + 1);
                        if (tokenMatcher(nextToken, currPath[i]) === false) {
                            continue nextPath;
                        }
                    }
                    // found a full path that matches.
                    // this will also work for an empty ALT as the loop will be skipped
                    return t;
                }
            // none of the paths for the current alternative matched
            // try the next alternative
            }
            // none of the alternatives could be matched
            return undefined;
        };
    }
}
function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher, dynamicTokensEnabled) {
    const areAllOneTokenLookahead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__["every"])(alt, (currPath)=>{
        return currPath.length === 1;
    });
    const numOfPaths = alt.length;
    // optimized (common) case of all the lookaheads paths requiring only
    // a single token lookahead.
    if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        const singleTokensTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])(alt);
        if (singleTokensTypes.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(singleTokensTypes[0].categoryMatches)) {
            const expectedTokenType = singleTokensTypes[0];
            const expectedTokenUniqueKey = expectedTokenType.tokenTypeIdx;
            return function() {
                return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey;
            };
        } else {
            const choiceToAlt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(singleTokensTypes, (result, currTokType, idx)=>{
                result[currTokType.tokenTypeIdx] = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(currTokType.categoryMatches, (currExtendingType)=>{
                    result[currExtendingType] = true;
                });
                return result;
            }, []);
            return function() {
                const nextToken = this.LA(1);
                return choiceToAlt[nextToken.tokenTypeIdx] === true;
            };
        }
    } else {
        return function() {
            nextPath: for(let j = 0; j < numOfPaths; j++){
                const currPath = alt[j];
                const currPathLength = currPath.length;
                for(let i = 0; i < currPathLength; i++){
                    const nextToken = this.LA(i + 1);
                    if (tokenMatcher(nextToken, currPath[i]) === false) {
                        continue nextPath;
                    }
                }
                // found a full path that matches.
                return true;
            }
            // none of the paths matched
            return false;
        };
    }
}
class RestDefinitionFinderWalker extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RestWalker"] {
    constructor(topProd, targetOccurrence, targetProdType){
        super();
        this.topProd = topProd;
        this.targetOccurrence = targetOccurrence;
        this.targetProdType = targetProdType;
    }
    startWalking() {
        this.walk(this.topProd);
        return this.restDef;
    }
    checkIsTarget(node, expectedProdType, currRest, prevRest) {
        if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdType) {
            this.restDef = currRest.concat(prevRest);
            return true;
        }
        // performance optimization, do not iterate over the entire Grammar ast after we have found the target
        return false;
    }
    walkOption(optionProd, currRest, prevRest) {
        if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {
            super.walkOption(optionProd, currRest, prevRest);
        }
    }
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {
            super.walkOption(atLeastOneProd, currRest, prevRest);
        }
    }
    walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {
            super.walkOption(atLeastOneSepProd, currRest, prevRest);
        }
    }
    walkMany(manyProd, currRest, prevRest) {
        if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {
            super.walkOption(manyProd, currRest, prevRest);
        }
    }
    walkManySep(manySepProd, currRest, prevRest) {
        if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {
            super.walkOption(manySepProd, currRest, prevRest);
        }
    }
}
/**
 * Returns the definition of a target production in a top level level rule.
 */ class InsideDefinitionFinderVisitor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAstVisitor"] {
    constructor(targetOccurrence, targetProdType, targetRef){
        super();
        this.targetOccurrence = targetOccurrence;
        this.targetProdType = targetProdType;
        this.targetRef = targetRef;
        this.result = [];
    }
    checkIsTarget(node, expectedProdName) {
        if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdName && (this.targetRef === undefined || node === this.targetRef)) {
            this.result = node.definition;
        }
    }
    visitOption(node) {
        this.checkIsTarget(node, PROD_TYPE.OPTION);
    }
    visitRepetition(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION);
    }
    visitRepetitionMandatory(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
    }
    visitRepetitionMandatoryWithSeparator(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
    }
    visitRepetitionWithSeparator(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
    }
    visitAlternation(node) {
        this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
    }
}
function initializeArrayOfArrays(size) {
    const result = new Array(size);
    for(let i = 0; i < size; i++){
        result[i] = [];
    }
    return result;
}
/**
 * A sort of hash function between a Path in the grammar and a string.
 * Note that this returns multiple "hashes" to support the scenario of token categories.
 * -  A single path with categories may match multiple **actual** paths.
 */ function pathToHashKeys(path) {
    let keys = [
        ""
    ];
    for(let i = 0; i < path.length; i++){
        const tokType = path[i];
        const longerKeys = [];
        for(let j = 0; j < keys.length; j++){
            const currShorterKey = keys[j];
            longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
            for(let t = 0; t < tokType.categoryMatches.length; t++){
                const categoriesKeySuffix = "_" + tokType.categoryMatches[t];
                longerKeys.push(currShorterKey + categoriesKeySuffix);
            }
        }
        keys = longerKeys;
    }
    return keys;
}
/**
 * Imperative style due to being called from a hot spot
 */ function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
    for(let currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++){
        // We only want to test vs the other alternatives
        if (currAltIdx === idx) {
            continue;
        }
        const otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx];
        for(let searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++){
            const searchKey = searchPathKeys[searchIdx];
            if (otherAltKnownPathsKeys[searchKey] === true) {
                return false;
            }
        }
    }
    // None of the SearchPathKeys were found in any of the other alternatives
    return true;
}
function lookAheadSequenceFromAlternatives(altsDefs, k) {
    const partialAlts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(altsDefs, (currAlt)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["possiblePathsFrom"])([
            currAlt
        ], 1));
    const finalResult = initializeArrayOfArrays(partialAlts.length);
    const altsHashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(partialAlts, (currAltPaths)=>{
        const dict = {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(currAltPaths, (item)=>{
            const keys = pathToHashKeys(item.partialPath);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(keys, (currKey)=>{
                dict[currKey] = true;
            });
        });
        return dict;
    });
    let newData = partialAlts;
    // maxLookahead loop
    for(let pathLength = 1; pathLength <= k; pathLength++){
        const currDataset = newData;
        newData = initializeArrayOfArrays(currDataset.length);
        // alternatives loop
        for(let altIdx = 0; altIdx < currDataset.length; altIdx++){
            const currAltPathsAndSuffixes = currDataset[altIdx];
            // paths in current alternative loop
            for(let currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++){
                const currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
                const suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
                const prefixKeys = pathToHashKeys(currPathPrefix);
                const isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx);
                // End of the line for this path.
                if (isUnique || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(suffixDef) || currPathPrefix.length === k) {
                    const currAltResult = finalResult[altIdx];
                    // TODO: Can we implement a containsPath using Maps/Dictionaries?
                    if (containsPath(currAltResult, currPathPrefix) === false) {
                        currAltResult.push(currPathPrefix);
                        // Update all new  keys for the current path.
                        for(let j = 0; j < prefixKeys.length; j++){
                            const currKey = prefixKeys[j];
                            altsHashes[altIdx][currKey] = true;
                        }
                    }
                } else {
                    const newPartialPathsAndSuffixes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["possiblePathsFrom"])(suffixDef, pathLength + 1, currPathPrefix);
                    newData[altIdx] = newData[altIdx].concat(newPartialPathsAndSuffixes);
                    // Update keys for new known paths
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(newPartialPathsAndSuffixes, (item)=>{
                        const prefixKeys = pathToHashKeys(item.partialPath);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(prefixKeys, (key)=>{
                            altsHashes[altIdx][key] = true;
                        });
                    });
                }
            }
        }
    }
    return finalResult;
}
function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
    const visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
    ruleGrammar.accept(visitor);
    return lookAheadSequenceFromAlternatives(visitor.result, k);
}
function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
    const insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
    ruleGrammar.accept(insideDefVisitor);
    const insideDef = insideDefVisitor.result;
    const afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
    const afterDef = afterDefWalker.startWalking();
    const insideFlat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"]({
        definition: insideDef
    });
    const afterFlat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"]({
        definition: afterDef
    });
    return lookAheadSequenceFromAlternatives([
        insideFlat,
        afterFlat
    ], k);
}
function containsPath(alternative, searchPath) {
    compareOtherPath: for(let i = 0; i < alternative.length; i++){
        const otherPath = alternative[i];
        if (otherPath.length !== searchPath.length) {
            continue;
        }
        for(let j = 0; j < otherPath.length; j++){
            const searchTok = searchPath[j];
            const otherTok = otherPath[j];
            const matchingTokens = searchTok === otherTok || otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !== undefined;
            if (matchingTokens === false) {
                continue compareOtherPath;
            }
        }
        return true;
    }
    return false;
}
function isStrictPrefixOfPath(prefix, other) {
    return prefix.length < other.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__["every"])(prefix, (tokType, idx)=>{
        const otherTokType = other[idx];
        return tokType === otherTokType || otherTokType.categoryMatchesMap[tokType.tokenTypeIdx];
    });
}
function areTokenCategoriesNotUsed(lookAheadPaths) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__["every"])(lookAheadPaths, (singleAltPaths)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__["every"])(singleAltPaths, (singlePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__["every"])(singlePath, (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(token.categoryMatches))));
} //# sourceMappingURL=lookahead.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/checks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OccurrenceValidationCollector": (()=>OccurrenceValidationCollector),
    "RepetitionCollector": (()=>RepetitionCollector),
    "checkPrefixAlternativesAmbiguities": (()=>checkPrefixAlternativesAmbiguities),
    "getFirstNoneTerminal": (()=>getFirstNoneTerminal),
    "identifyProductionForDuplicates": (()=>identifyProductionForDuplicates),
    "validateAmbiguousAlternationAlternatives": (()=>validateAmbiguousAlternationAlternatives),
    "validateEmptyOrAlternative": (()=>validateEmptyOrAlternative),
    "validateGrammar": (()=>validateGrammar),
    "validateLookahead": (()=>validateLookahead),
    "validateNoLeftRecursion": (()=>validateNoLeftRecursion),
    "validateRuleDoesNotAlreadyExist": (()=>validateRuleDoesNotAlreadyExist),
    "validateRuleIsOverridden": (()=>validateRuleIsOverridden),
    "validateSomeNonEmptyLookaheadPath": (()=>validateSomeNonEmptyLookaheadPath),
    "validateTooManyAlts": (()=>validateTooManyAlts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/lookahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/interpreter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js [app-client] (ecmascript) <export default as map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatMap.js [app-client] (ecmascript) <export default as flatMap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$groupBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__groupBy$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/groupBy.js [app-client] (ecmascript) <export default as groupBy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$pickBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickBy$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pickBy.js [app-client] (ecmascript) <export default as pickBy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js [app-client] (ecmascript) <export default as values>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js [app-client] (ecmascript) <export default as first>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/visitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/reduce.js [app-client] (ecmascript) <export default as reduce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/includes.js [app-client] (ecmascript) <export default as includes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__difference$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js [app-client] (ecmascript) <export default as difference>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clone.js [app-client] (ecmascript) <export default as clone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js [app-client] (ecmascript) <export default as flatten>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/drop.js [app-client] (ecmascript) <export default as drop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$dropRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dropRight$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/dropRight.js [app-client] (ecmascript) <export default as dropRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reject$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/reject.js [app-client] (ecmascript) <export default as reject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__compact$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js [app-client] (ecmascript) <export default as compact>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/filter.js [app-client] (ecmascript) <export default as filter>");
;
;
;
;
;
;
function validateLookahead(options) {
    const lookaheadValidationErrorMessages = options.lookaheadStrategy.validate({
        rules: options.rules,
        tokenTypes: options.tokenTypes,
        grammarName: options.grammarName
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(lookaheadValidationErrorMessages, (errorMessage)=>Object.assign({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].CUSTOM_LOOKAHEAD_VALIDATION
        }, errorMessage));
}
function validateGrammar(topLevels, tokenTypes, errMsgProvider, grammarName) {
    const duplicateErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(topLevels, (currTopLevel)=>validateDuplicateProductions(currTopLevel, errMsgProvider));
    const termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
    const tooManyAltsErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(topLevels, (curRule)=>validateTooManyAlts(curRule, errMsgProvider));
    const duplicateRulesError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(topLevels, (curRule)=>validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider));
    return duplicateErrors.concat(termsNamespaceConflictErrors, tooManyAltsErrors, duplicateRulesError);
}
function validateDuplicateProductions(topLevelRule, errMsgProvider) {
    const collectorVisitor = new OccurrenceValidationCollector();
    topLevelRule.accept(collectorVisitor);
    const allRuleProductions = collectorVisitor.allProductions;
    const productionGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$groupBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__groupBy$3e$__["groupBy"])(allRuleProductions, identifyProductionForDuplicates);
    const duplicates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$pickBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickBy$3e$__["pickBy"])(productionGroups, (currGroup)=>{
        return currGroup.length > 1;
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(duplicates), (currDuplicates)=>{
        const firstProd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(currDuplicates);
        const msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
        const dslName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionDslName"])(firstProd);
        const defError = {
            message: msg,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].DUPLICATE_PRODUCTIONS,
            ruleName: topLevelRule.name,
            dslName: dslName,
            occurrence: firstProd.idx
        };
        const param = getExtraProductionArgument(firstProd);
        if (param) {
            defError.parameter = param;
        }
        return defError;
    });
    return errors;
}
function identifyProductionForDuplicates(prod) {
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionDslName"])(prod)}_#_${prod.idx}_#_${getExtraProductionArgument(prod)}`;
}
function getExtraProductionArgument(prod) {
    if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
        return prod.terminalType.name;
    } else if (prod instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonTerminal"]) {
        return prod.nonTerminalName;
    } else {
        return "";
    }
}
class OccurrenceValidationCollector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAstVisitor"] {
    constructor(){
        super(...arguments);
        this.allProductions = [];
    }
    visitNonTerminal(subrule) {
        this.allProductions.push(subrule);
    }
    visitOption(option) {
        this.allProductions.push(option);
    }
    visitRepetitionWithSeparator(manySep) {
        this.allProductions.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
        this.allProductions.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
    }
    visitRepetition(many) {
        this.allProductions.push(many);
    }
    visitAlternation(or) {
        this.allProductions.push(or);
    }
    visitTerminal(terminal) {
        this.allProductions.push(terminal);
    }
}
function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
    const errors = [];
    const occurrences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(allRules, (result, curRule)=>{
        if (curRule.name === rule.name) {
            return result + 1;
        }
        return result;
    }, 0);
    if (occurrences > 1) {
        const errMsg = errMsgProvider.buildDuplicateRuleNameError({
            topLevelRule: rule,
            grammarName: className
        });
        errors.push({
            message: errMsg,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].DUPLICATE_RULE_NAME,
            ruleName: rule.name
        });
    }
    return errors;
}
function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
    const errors = [];
    let errMsg;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(definedRulesNames, ruleName)) {
        errMsg = `Invalid rule override, rule: ->${ruleName}<- cannot be overridden in the grammar: ->${className}<-` + `as it is not defined in any of the super grammars `;
        errors.push({
            message: errMsg,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].INVALID_RULE_OVERRIDE,
            ruleName: ruleName
        });
    }
    return errors;
}
function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path = []) {
    const errors = [];
    const nextNonTerminals = getFirstNoneTerminal(currRule.definition);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(nextNonTerminals)) {
        return [];
    } else {
        const ruleName = topRule.name;
        const foundLeftRecursion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(nextNonTerminals, topRule);
        if (foundLeftRecursion) {
            errors.push({
                message: errMsgProvider.buildLeftRecursionError({
                    topLevelRule: topRule,
                    leftRecursionPath: path
                }),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].LEFT_RECURSION,
                ruleName: ruleName
            });
        }
        // we are only looking for cyclic paths leading back to the specific topRule
        // other cyclic paths are ignored, we still need this difference to avoid infinite loops...
        const validNextSteps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__difference$3e$__["difference"])(nextNonTerminals, path.concat([
            topRule
        ]));
        const errorsFromNextSteps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(validNextSteps, (currRefRule)=>{
            const newPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(path);
            newPath.push(currRefRule);
            return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
        });
        return errors.concat(errorsFromNextSteps);
    }
}
function getFirstNoneTerminal(definition) {
    let result = [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(definition)) {
        return result;
    }
    const firstProd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(definition);
    /* istanbul ignore else */ if (firstProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonTerminal"]) {
        result.push(firstProd.referencedRule);
    } else if (firstProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"] || firstProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"] || firstProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatory"] || firstProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatoryWithSeparator"] || firstProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionWithSeparator"] || firstProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"]) {
        result = result.concat(getFirstNoneTerminal(firstProd.definition));
    } else if (firstProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternation"]) {
        // each sub definition in alternation is a FLAT
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(firstProd.definition, (currSubDef)=>getFirstNoneTerminal(currSubDef.definition)));
    } else if (firstProd instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]) {
    // nothing to see, move along
    } else {
        throw Error("non exhaustive match");
    }
    const isFirstOptional = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOptionalProd"])(firstProd);
    const hasMore = definition.length > 1;
    if (isFirstOptional && hasMore) {
        const rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drop$3e$__["drop"])(definition);
        return result.concat(getFirstNoneTerminal(rest));
    } else {
        return result;
    }
}
class OrCollector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAstVisitor"] {
    constructor(){
        super(...arguments);
        this.alternations = [];
    }
    visitAlternation(node) {
        this.alternations.push(node);
    }
}
function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
    const orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    const ors = orCollector.alternations;
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(ors, (currOr)=>{
        const exceptLast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$dropRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dropRight$3e$__["dropRight"])(currOr.definition);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(exceptLast, (currAlternative, currAltIdx)=>{
            const possibleFirstInAlt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextPossibleTokensAfter"])([
                currAlternative
            ], [], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenStructuredMatcher"], 1);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(possibleFirstInAlt)) {
                return [
                    {
                        message: errMsgProvider.buildEmptyAlternationError({
                            topLevelRule: topLevelRule,
                            alternation: currOr,
                            emptyChoiceIdx: currAltIdx
                        }),
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].NONE_LAST_EMPTY_ALT,
                        ruleName: topLevelRule.name,
                        occurrence: currOr.idx,
                        alternative: currAltIdx + 1
                    }
                ];
            } else {
                return [];
            }
        });
    });
    return errors;
}
function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, errMsgProvider) {
    const orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    let ors = orCollector.alternations;
    // New Handling of ignoring ambiguities
    // - https://github.com/chevrotain/chevrotain/issues/869
    ors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reject$3e$__["reject"])(ors, (currOr)=>currOr.ignoreAmbiguities === true);
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(ors, (currOr)=>{
        const currOccurrence = currOr.idx;
        const actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead;
        const alternatives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLookaheadPathsForOr"])(currOccurrence, topLevelRule, actualMaxLookahead, currOr);
        const altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        const altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        return altsAmbiguityErrors.concat(altsPrefixAmbiguityErrors);
    });
    return errors;
}
class RepetitionCollector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAstVisitor"] {
    constructor(){
        super(...arguments);
        this.allProductions = [];
    }
    visitRepetitionWithSeparator(manySep) {
        this.allProductions.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
        this.allProductions.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
    }
    visitRepetition(many) {
        this.allProductions.push(many);
    }
}
function validateTooManyAlts(topLevelRule, errMsgProvider) {
    const orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    const ors = orCollector.alternations;
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(ors, (currOr)=>{
        if (currOr.definition.length > 255) {
            return [
                {
                    message: errMsgProvider.buildTooManyAlternativesError({
                        topLevelRule: topLevelRule,
                        alternation: currOr
                    }),
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].TOO_MANY_ALTS,
                    ruleName: topLevelRule.name,
                    occurrence: currOr.idx
                }
            ];
        } else {
            return [];
        }
    });
    return errors;
}
function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
    const errors = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(topLevelRules, (currTopRule)=>{
        const collectorVisitor = new RepetitionCollector();
        currTopRule.accept(collectorVisitor);
        const allRuleProductions = collectorVisitor.allProductions;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(allRuleProductions, (currProd)=>{
            const prodType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProdType"])(currProd);
            const actualMaxLookahead = currProd.maxLookahead || maxLookahead;
            const currOccurrence = currProd.idx;
            const paths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLookaheadPathsForOptionalProd"])(currOccurrence, currTopRule, prodType, actualMaxLookahead);
            const pathsInsideProduction = paths[0];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])(pathsInsideProduction))) {
                const errMsg = errMsgProvider.buildEmptyRepetitionError({
                    topLevelRule: currTopRule,
                    repetition: currProd
                });
                errors.push({
                    message: errMsg,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].NO_NON_EMPTY_LOOKAHEAD,
                    ruleName: currTopRule.name
                });
            }
        });
    });
    return errors;
}
function checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    const foundAmbiguousPaths = [];
    const identicalAmbiguities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(alternatives, (result, currAlt, currAltIdx)=>{
        // ignore (skip) ambiguities with this alternative
        if (alternation.definition[currAltIdx].ignoreAmbiguities === true) {
            return result;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(currAlt, (currPath)=>{
            const altsCurrPathAppearsIn = [
                currAltIdx
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(alternatives, (currOtherAlt, currOtherAltIdx)=>{
                if (currAltIdx !== currOtherAltIdx && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsPath"])(currOtherAlt, currPath) && // ignore (skip) ambiguities with this "other" alternative
                alternation.definition[currOtherAltIdx].ignoreAmbiguities !== true) {
                    altsCurrPathAppearsIn.push(currOtherAltIdx);
                }
            });
            if (altsCurrPathAppearsIn.length > 1 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsPath"])(foundAmbiguousPaths, currPath)) {
                foundAmbiguousPaths.push(currPath);
                result.push({
                    alts: altsCurrPathAppearsIn,
                    path: currPath
                });
            }
        });
        return result;
    }, []);
    const currErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(identicalAmbiguities, (currAmbDescriptor)=>{
        const ambgIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(currAmbDescriptor.alts, (currAltIdx)=>currAltIdx + 1);
        const currMessage = errMsgProvider.buildAlternationAmbiguityError({
            topLevelRule: rule,
            alternation: alternation,
            ambiguityIndices: ambgIndices,
            prefixPath: currAmbDescriptor.path
        });
        return {
            message: currMessage,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].AMBIGUOUS_ALTS,
            ruleName: rule.name,
            occurrence: alternation.idx,
            alternatives: currAmbDescriptor.alts
        };
    });
    return currErrors;
}
function checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    // flatten
    const pathsAndIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(alternatives, (result, currAlt, idx)=>{
        const currPathsAndIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(currAlt, (currPath)=>{
            return {
                idx: idx,
                path: currPath
            };
        });
        return result.concat(currPathsAndIdx);
    }, []);
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__compact$3e$__["compact"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(pathsAndIndices, (currPathAndIdx)=>{
        const alternativeGast = alternation.definition[currPathAndIdx.idx];
        // ignore (skip) ambiguities with this alternative
        if (alternativeGast.ignoreAmbiguities === true) {
            return [];
        }
        const targetIdx = currPathAndIdx.idx;
        const targetPath = currPathAndIdx.path;
        const prefixAmbiguitiesPathsAndIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(pathsAndIndices, (searchPathAndIdx)=>{
            // prefix ambiguity can only be created from lower idx (higher priority) path
            return(// ignore (skip) ambiguities with this "other" alternative
            alternation.definition[searchPathAndIdx.idx].ignoreAmbiguities !== true && searchPathAndIdx.idx < targetIdx && // checking for strict prefix because identical lookaheads
            // will be be detected using a different validation.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStrictPrefixOfPath"])(searchPathAndIdx.path, targetPath));
        });
        const currPathPrefixErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(prefixAmbiguitiesPathsAndIndices, (currAmbPathAndIdx)=>{
            const ambgIndices = [
                currAmbPathAndIdx.idx + 1,
                targetIdx + 1
            ];
            const occurrence = alternation.idx === 0 ? "" : alternation.idx;
            const message = errMsgProvider.buildAlternationPrefixAmbiguityError({
                topLevelRule: rule,
                alternation: alternation,
                ambiguityIndices: ambgIndices,
                prefixPath: currAmbPathAndIdx.path
            });
            return {
                message: message,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].AMBIGUOUS_PREFIX_ALTS,
                ruleName: rule.name,
                occurrence: occurrence,
                alternatives: ambgIndices
            };
        });
        return currPathPrefixErrors;
    }));
    return errors;
}
function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
    const errors = [];
    const tokenNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(tokenTypes, (currToken)=>currToken.name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(topLevels, (currRule)=>{
        const currRuleName = currRule.name;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(tokenNames, currRuleName)) {
            const errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
            errors.push({
                message: errMsg,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].CONFLICT_TOKENS_RULES_NAMESPACE,
                ruleName: currRuleName
            });
        }
    });
    return errors;
} //# sourceMappingURL=checks.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveGrammar": (()=>resolveGrammar),
    "validateGrammar": (()=>validateGrammar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/resolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/errors_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaults$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/defaults.js [app-client] (ecmascript) <export default as defaults>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
;
;
;
;
function resolveGrammar(options) {
    const actualOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaults$3e$__["defaults"])(options, {
        errMsgProvider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGrammarResolverErrorProvider"]
    });
    const topRulesTable = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(options.rules, (rule)=>{
        topRulesTable[rule.name] = rule;
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveGrammar"])(topRulesTable, actualOptions.errMsgProvider);
}
function validateGrammar(options) {
    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaults$3e$__["defaults"])(options, {
        errMsgProvider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGrammarValidatorErrorProvider"]
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateGrammar"])(options.rules, options.tokenTypes, options.errMsgProvider, options.grammarName);
} //# sourceMappingURL=gast_resolver_public.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/exceptions_public.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EarlyExitException": (()=>EarlyExitException),
    "MismatchedTokenException": (()=>MismatchedTokenException),
    "NoViableAltException": (()=>NoViableAltException),
    "NotAllInputParsedException": (()=>NotAllInputParsedException),
    "isRecognitionException": (()=>isRecognitionException)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/includes.js [app-client] (ecmascript) <export default as includes>");
;
const MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
const NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
const EARLY_EXIT_EXCEPTION = "EarlyExitException";
const NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
const RECOGNITION_EXCEPTION_NAMES = [
    MISMATCHED_TOKEN_EXCEPTION,
    NO_VIABLE_ALT_EXCEPTION,
    EARLY_EXIT_EXCEPTION,
    NOT_ALL_INPUT_PARSED_EXCEPTION
];
Object.freeze(RECOGNITION_EXCEPTION_NAMES);
function isRecognitionException(error) {
    // can't do instanceof on hacked custom js exceptions
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(RECOGNITION_EXCEPTION_NAMES, error.name);
}
class RecognitionException extends Error {
    constructor(message, token){
        super(message);
        this.token = token;
        this.resyncedTokens = [];
        // fix prototype chain when typescript target is ES5
        Object.setPrototypeOf(this, new.target.prototype);
        /* istanbul ignore next - V8 workaround to remove constructor from stacktrace when typescript target is ES5 */ if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
class MismatchedTokenException extends RecognitionException {
    constructor(message, token, previousToken){
        super(message, token);
        this.previousToken = previousToken;
        this.name = MISMATCHED_TOKEN_EXCEPTION;
    }
}
class NoViableAltException extends RecognitionException {
    constructor(message, token, previousToken){
        super(message, token);
        this.previousToken = previousToken;
        this.name = NO_VIABLE_ALT_EXCEPTION;
    }
}
class NotAllInputParsedException extends RecognitionException {
    constructor(message, token){
        super(message, token);
        this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
    }
}
class EarlyExitException extends RecognitionException {
    constructor(message, token, previousToken){
        super(message, token);
        this.previousToken = previousToken;
        this.name = EARLY_EXIT_EXCEPTION;
    }
} //# sourceMappingURL=exceptions_public.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EOF_FOLLOW_KEY": (()=>EOF_FOLLOW_KEY),
    "IN_RULE_RECOVERY_EXCEPTION": (()=>IN_RULE_RECOVERY_EXCEPTION),
    "InRuleRecoveryException": (()=>InRuleRecoveryException),
    "Recoverable": (()=>Recoverable),
    "attemptInRepetitionRecovery": (()=>attemptInRepetitionRecovery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/exceptions_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$dropRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dropRight$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/dropRight.js [app-client] (ecmascript) <export default as dropRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__find$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/find.js [app-client] (ecmascript) <export default as find>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/includes.js [app-client] (ecmascript) <export default as includes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js [app-client] (ecmascript) <export default as map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js [app-client] (ecmascript) <export default as flatten>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clone.js [app-client] (ecmascript) <export default as clone>");
;
;
;
;
;
const EOF_FOLLOW_KEY = {};
const IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
class InRuleRecoveryException extends Error {
    constructor(message){
        super(message);
        this.name = IN_RULE_RECOVERY_EXCEPTION;
    }
}
class Recoverable {
    initRecoverable(config) {
        this.firstAfterRepMap = {};
        this.resyncFollows = {};
        this.recoveryEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "recoveryEnabled") ? config.recoveryEnabled // assumes end user provides the correct config value/type
         : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PARSER_CONFIG"].recoveryEnabled;
        // performance optimization, NOOP will be inlined which
        // effectively means that this optional feature does not exist
        // when not used.
        if (this.recoveryEnabled) {
            this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
        }
    }
    getTokenToInsert(tokType) {
        const tokToInsert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTokenInstance"])(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
        tokToInsert.isInsertedInRecovery = true;
        return tokToInsert;
    }
    canTokenTypeBeInsertedInRecovery(tokType) {
        return true;
    }
    canTokenTypeBeDeletedInRecovery(tokType) {
        return true;
    }
    tryInRepetitionRecovery(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
        // TODO: can the resyncTokenType be cached?
        const reSyncTokType = this.findReSyncTokenType();
        const savedLexerState = this.exportLexerState();
        const resyncedTokens = [];
        let passedResyncPoint = false;
        const nextTokenWithoutResync = this.LA(1);
        let currToken = this.LA(1);
        const generateErrorMessage = ()=>{
            const previousToken = this.LA(0);
            // we are preemptively re-syncing before an error has been detected, therefor we must reproduce
            // the error that would have been thrown
            const msg = this.errorMessageProvider.buildMismatchTokenMessage({
                expected: expectedTokType,
                actual: nextTokenWithoutResync,
                previous: previousToken,
                ruleName: this.getCurrRuleFullName()
            });
            const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MismatchedTokenException"](msg, nextTokenWithoutResync, this.LA(0));
            // the first token here will be the original cause of the error, this is not part of the resyncedTokens property.
            error.resyncedTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$dropRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dropRight$3e$__["dropRight"])(resyncedTokens);
            this.SAVE_ERROR(error);
        };
        while(!passedResyncPoint){
            // re-synced to a point where we can safely exit the repetition/
            if (this.tokenMatcher(currToken, expectedTokType)) {
                generateErrorMessage();
                return; // must return here to avoid reverting the inputIdx
            } else if (lookAheadFunc.call(this)) {
                // we skipped enough tokens so we can resync right back into another iteration of the repetition grammar rule
                generateErrorMessage();
                // recursive invocation in other to support multiple re-syncs in the same top level repetition grammar rule
                grammarRule.apply(this, grammarRuleArgs);
                return; // must return here to avoid reverting the inputIdx
            } else if (this.tokenMatcher(currToken, reSyncTokType)) {
                passedResyncPoint = true;
            } else {
                currToken = this.SKIP_TOKEN();
                this.addToResyncTokens(currToken, resyncedTokens);
            }
        }
        // we were unable to find a CLOSER point to resync inside the Repetition, reset the state.
        // The parsing exception we were trying to prevent will happen in the NEXT parsing step. it may be handled by
        // "between rules" resync recovery later in the flow.
        this.importLexerState(savedLexerState);
    }
    shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck) {
        // Edge case of arriving from a MANY repetition which is stuck
        // Attempting recovery in this case could cause an infinite loop
        if (notStuck === false) {
            return false;
        }
        // no need to recover, next token is what we expect...
        if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) {
            return false;
        }
        // error recovery is disabled during backtracking as it can make the parser ignore a valid grammar path
        // and prefer some backtracking path that includes recovered errors.
        if (this.isBackTracking()) {
            return false;
        }
        // if we can perform inRule recovery (single token insertion or deletion) we always prefer that recovery algorithm
        // because if it works, it makes the least amount of changes to the input stream (greedy algorithm)
        //noinspection RedundantIfStatementJS
        if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {
            return false;
        }
        return true;
    }
    // Error Recovery functionality
    getFollowsForInRuleRecovery(tokType, tokIdxInRule) {
        const grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
        const follows = this.getNextPossibleTokenTypes(grammarPath);
        return follows;
    }
    tryInRuleRecovery(expectedTokType, follows) {
        if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
            const tokToInsert = this.getTokenToInsert(expectedTokType);
            return tokToInsert;
        }
        if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
            const nextTok = this.SKIP_TOKEN();
            this.consumeToken();
            return nextTok;
        }
        throw new InRuleRecoveryException("sad sad panda");
    }
    canPerformInRuleRecovery(expectedToken, follows) {
        return this.canRecoverWithSingleTokenInsertion(expectedToken, follows) || this.canRecoverWithSingleTokenDeletion(expectedToken);
    }
    canRecoverWithSingleTokenInsertion(expectedTokType, follows) {
        if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {
            return false;
        }
        // must know the possible following tokens to perform single token insertion
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(follows)) {
            return false;
        }
        const mismatchedTok = this.LA(1);
        const isMisMatchedTokInFollows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__find$3e$__["find"])(follows, (possibleFollowsTokType)=>{
            return this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
        }) !== undefined;
        return isMisMatchedTokInFollows;
    }
    canRecoverWithSingleTokenDeletion(expectedTokType) {
        if (!this.canTokenTypeBeDeletedInRecovery(expectedTokType)) {
            return false;
        }
        const isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
        return isNextTokenWhatIsExpected;
    }
    isInCurrentRuleReSyncSet(tokenTypeIdx) {
        const followKey = this.getCurrFollowKey();
        const currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(currentRuleReSyncSet, tokenTypeIdx);
    }
    findReSyncTokenType() {
        const allPossibleReSyncTokTypes = this.flattenFollowSet();
        // this loop will always terminate as EOF is always in the follow stack and also always (virtually) in the input
        let nextToken = this.LA(1);
        let k = 2;
        while(true){
            const foundMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__find$3e$__["find"])(allPossibleReSyncTokTypes, (resyncTokType)=>{
                const canMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenMatcher"])(nextToken, resyncTokType);
                return canMatch;
            });
            if (foundMatch !== undefined) {
                return foundMatch;
            }
            nextToken = this.LA(k);
            k++;
        }
    }
    getCurrFollowKey() {
        // the length is at least one as we always add the ruleName to the stack before invoking the rule.
        if (this.RULE_STACK.length === 1) {
            return EOF_FOLLOW_KEY;
        }
        const currRuleShortName = this.getLastExplicitRuleShortName();
        const currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
        const prevRuleShortName = this.getPreviousExplicitRuleShortName();
        return {
            ruleName: this.shortRuleNameToFullName(currRuleShortName),
            idxInCallingRule: currRuleIdx,
            inRule: this.shortRuleNameToFullName(prevRuleShortName)
        };
    }
    buildFullFollowKeyStack() {
        const explicitRuleStack = this.RULE_STACK;
        const explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(explicitRuleStack, (ruleName, idx)=>{
            if (idx === 0) {
                return EOF_FOLLOW_KEY;
            }
            return {
                ruleName: this.shortRuleNameToFullName(ruleName),
                idxInCallingRule: explicitOccurrenceStack[idx],
                inRule: this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
            };
        });
    }
    flattenFollowSet() {
        const followStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(this.buildFullFollowKeyStack(), (currKey)=>{
            return this.getFollowSetFromFollowKey(currKey);
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])(followStack);
    }
    getFollowSetFromFollowKey(followKey) {
        if (followKey === EOF_FOLLOW_KEY) {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOF"]
            ];
        }
        const followName = followKey.ruleName + followKey.idxInCallingRule + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IN"] + followKey.inRule;
        return this.resyncFollows[followName];
    }
    // It does not make any sense to include a virtual EOF token in the list of resynced tokens
    // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
    addToResyncTokens(token, resyncTokens) {
        if (!this.tokenMatcher(token, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOF"])) {
            resyncTokens.push(token);
        }
        return resyncTokens;
    }
    reSyncTo(tokType) {
        const resyncedTokens = [];
        let nextTok = this.LA(1);
        while(this.tokenMatcher(nextTok, tokType) === false){
            nextTok = this.SKIP_TOKEN();
            this.addToResyncTokens(nextTok, resyncedTokens);
        }
        // the last token is not part of the error.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$dropRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dropRight$3e$__["dropRight"])(resyncedTokens);
    }
    attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
    // by default this is a NO-OP
    // The actual implementation is with the function(not method) below
    }
    getCurrentGrammarPath(tokType, tokIdxInRule) {
        const pathRuleStack = this.getHumanReadableRuleStack();
        const pathOccurrenceStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(this.RULE_OCCURRENCE_STACK);
        const grammarPath = {
            ruleStack: pathRuleStack,
            occurrenceStack: pathOccurrenceStack,
            lastTok: tokType,
            lastTokOccurrence: tokIdxInRule
        };
        return grammarPath;
    }
    getHumanReadableRuleStack() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(this.RULE_STACK, (currShortName)=>this.shortRuleNameToFullName(currShortName));
    }
}
function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
    const key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
    let firstAfterRepInfo = this.firstAfterRepMap[key];
    if (firstAfterRepInfo === undefined) {
        const currRuleName = this.getCurrRuleFullName();
        const ruleGrammar = this.getGAstProductions()[currRuleName];
        const walker = new nextToksWalker(ruleGrammar, prodOccurrence);
        firstAfterRepInfo = walker.startWalking();
        this.firstAfterRepMap[key] = firstAfterRepInfo;
    }
    let expectTokAfterLastMatch = firstAfterRepInfo.token;
    let nextTokIdx = firstAfterRepInfo.occurrence;
    const isEndOfRule = firstAfterRepInfo.isEndOfRule;
    // special edge case of a TOP most repetition after which the input should END.
    // this will force an attempt for inRule recovery in that scenario.
    if (this.RULE_STACK.length === 1 && isEndOfRule && expectTokAfterLastMatch === undefined) {
        expectTokAfterLastMatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOF"];
        nextTokIdx = 1;
    }
    // We don't have anything to re-sync to...
    // this condition was extracted from `shouldInRepetitionRecoveryBeTried` to act as a type-guard
    if (expectTokAfterLastMatch === undefined || nextTokIdx === undefined) {
        return;
    }
    if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) {
        // TODO: performance optimization: instead of passing the original args here, we modify
        // the args param (or create a new one) and make sure the lookahead func is explicitly provided
        // to avoid searching the cache for it once more.
        this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
    }
} //# sourceMappingURL=recoverable.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/keys.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Lookahead keys are 32Bit integers in the form
// TTTTTTTT-ZZZZZZZZZZZZ-YYYY-XXXXXXXX
// XXXX -> Occurrence Index bitmap.
// YYYY -> DSL Method Type bitmap.
// ZZZZZZZZZZZZZZZ -> Rule short Index bitmap.
// TTTTTTTTT -> alternation alternative index bitmap
__turbopack_esm__({
    "AT_LEAST_ONE_IDX": (()=>AT_LEAST_ONE_IDX),
    "AT_LEAST_ONE_SEP_IDX": (()=>AT_LEAST_ONE_SEP_IDX),
    "BITS_FOR_ALT_IDX": (()=>BITS_FOR_ALT_IDX),
    "BITS_FOR_METHOD_TYPE": (()=>BITS_FOR_METHOD_TYPE),
    "BITS_FOR_OCCURRENCE_IDX": (()=>BITS_FOR_OCCURRENCE_IDX),
    "BITS_FOR_RULE_IDX": (()=>BITS_FOR_RULE_IDX),
    "MANY_IDX": (()=>MANY_IDX),
    "MANY_SEP_IDX": (()=>MANY_SEP_IDX),
    "OPTION_IDX": (()=>OPTION_IDX),
    "OR_IDX": (()=>OR_IDX),
    "getKeyForAutomaticLookahead": (()=>getKeyForAutomaticLookahead)
});
const BITS_FOR_METHOD_TYPE = 4;
const BITS_FOR_OCCURRENCE_IDX = 8;
const BITS_FOR_RULE_IDX = 12;
const BITS_FOR_ALT_IDX = 8;
const OR_IDX = 1 << BITS_FOR_OCCURRENCE_IDX;
const OPTION_IDX = 2 << BITS_FOR_OCCURRENCE_IDX;
const MANY_IDX = 3 << BITS_FOR_OCCURRENCE_IDX;
const AT_LEAST_ONE_IDX = 4 << BITS_FOR_OCCURRENCE_IDX;
const MANY_SEP_IDX = 5 << BITS_FOR_OCCURRENCE_IDX;
const AT_LEAST_ONE_SEP_IDX = 6 << BITS_FOR_OCCURRENCE_IDX;
function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
    return occurrence | dslMethodIdx | ruleIdx;
}
const BITS_START_FOR_ALT_IDX = 32 - BITS_FOR_ALT_IDX; //# sourceMappingURL=keys.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/llk_lookahead.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LLkLookaheadStrategy": (()=>LLkLookaheadStrategy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/errors_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/lookahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatMap.js [app-client] (ecmascript) <export default as flatMap>");
;
;
;
;
;
class LLkLookaheadStrategy {
    constructor(options){
        var _a;
        this.maxLookahead = (_a = options === null || options === void 0 ? void 0 : options.maxLookahead) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PARSER_CONFIG"].maxLookahead;
    }
    validate(options) {
        const leftRecursionErrors = this.validateNoLeftRecursion(options.rules);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(leftRecursionErrors)) {
            const emptyAltErrors = this.validateEmptyOrAlternatives(options.rules);
            const ambiguousAltsErrors = this.validateAmbiguousAlternationAlternatives(options.rules, this.maxLookahead);
            const emptyRepetitionErrors = this.validateSomeNonEmptyLookaheadPath(options.rules, this.maxLookahead);
            const allErrors = [
                ...leftRecursionErrors,
                ...emptyAltErrors,
                ...ambiguousAltsErrors,
                ...emptyRepetitionErrors
            ];
            return allErrors;
        }
        return leftRecursionErrors;
    }
    validateNoLeftRecursion(rules) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(rules, (currTopRule)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNoLeftRecursion"])(currTopRule, currTopRule, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGrammarValidatorErrorProvider"]));
    }
    validateEmptyOrAlternatives(rules) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(rules, (currTopRule)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateEmptyOrAlternative"])(currTopRule, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGrammarValidatorErrorProvider"]));
    }
    validateAmbiguousAlternationAlternatives(rules, maxLookahead) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatMap$3e$__["flatMap"])(rules, (currTopRule)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAmbiguousAlternationAlternatives"])(currTopRule, maxLookahead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGrammarValidatorErrorProvider"]));
    }
    validateSomeNonEmptyLookaheadPath(rules, maxLookahead) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSomeNonEmptyLookaheadPath"])(rules, maxLookahead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGrammarValidatorErrorProvider"]);
    }
    buildLookaheadForAlternation(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLookaheadFuncForOr"])(options.prodOccurrence, options.rule, options.maxLookahead, options.hasPredicates, options.dynamicTokensEnabled, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildAlternativesLookAheadFunc"]);
    }
    buildLookaheadForOptional(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLookaheadFuncForOptionalProd"])(options.prodOccurrence, options.rule, options.maxLookahead, options.dynamicTokensEnabled, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProdType"])(options.prodType), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSingleAlternativeLookaheadFunction"]);
    }
} //# sourceMappingURL=llk_lookahead.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LooksAhead": (()=>LooksAhead),
    "collectMethods": (()=>collectMethods)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$llk_lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/llk_lookahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/visitor.js [app-client] (ecmascript)");
;
;
;
;
;
class LooksAhead {
    initLooksAhead(config) {
        this.dynamicTokensEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "dynamicTokensEnabled") ? config.dynamicTokensEnabled // assumes end user provides the correct config value/type
         : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PARSER_CONFIG"].dynamicTokensEnabled;
        this.maxLookahead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "maxLookahead") ? config.maxLookahead // assumes end user provides the correct config value/type
         : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PARSER_CONFIG"].maxLookahead;
        this.lookaheadStrategy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "lookaheadStrategy") ? config.lookaheadStrategy // assumes end user provides the correct config value/type
         : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$llk_lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LLkLookaheadStrategy"]({
            maxLookahead: this.maxLookahead
        });
        this.lookAheadFuncsCache = new Map();
    }
    preComputeLookaheadFunctions(rules) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(rules, (currRule)=>{
            this.TRACE_INIT(`${currRule.name} Rule Lookahead`, ()=>{
                const { alternation, repetition, option, repetitionMandatory, repetitionMandatoryWithSeparator, repetitionWithSeparator } = collectMethods(currRule);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(alternation, (currProd)=>{
                    const prodIdx = currProd.idx === 0 ? "" : currProd.idx;
                    this.TRACE_INIT(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionDslName"])(currProd)}${prodIdx}`, ()=>{
                        const laFunc = this.lookaheadStrategy.buildLookaheadForAlternation({
                            prodOccurrence: currProd.idx,
                            rule: currRule,
                            maxLookahead: currProd.maxLookahead || this.maxLookahead,
                            hasPredicates: currProd.hasPredicates,
                            dynamicTokensEnabled: this.dynamicTokensEnabled
                        });
                        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKeyForAutomaticLookahead"])(this.fullRuleNameToShort[currRule.name], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OR_IDX"], currProd.idx);
                        this.setLaFuncCache(key, laFunc);
                    });
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(repetition, (currProd)=>{
                    this.computeLookaheadFunc(currRule, currProd.idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANY_IDX"], "Repetition", currProd.maxLookahead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionDslName"])(currProd));
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(option, (currProd)=>{
                    this.computeLookaheadFunc(currRule, currProd.idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPTION_IDX"], "Option", currProd.maxLookahead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionDslName"])(currProd));
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(repetitionMandatory, (currProd)=>{
                    this.computeLookaheadFunc(currRule, currProd.idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AT_LEAST_ONE_IDX"], "RepetitionMandatory", currProd.maxLookahead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionDslName"])(currProd));
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(repetitionMandatoryWithSeparator, (currProd)=>{
                    this.computeLookaheadFunc(currRule, currProd.idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AT_LEAST_ONE_SEP_IDX"], "RepetitionMandatoryWithSeparator", currProd.maxLookahead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionDslName"])(currProd));
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(repetitionWithSeparator, (currProd)=>{
                    this.computeLookaheadFunc(currRule, currProd.idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANY_SEP_IDX"], "RepetitionWithSeparator", currProd.maxLookahead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductionDslName"])(currProd));
                });
            });
        });
    }
    computeLookaheadFunc(rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
        this.TRACE_INIT(`${dslMethodName}${prodOccurrence === 0 ? "" : prodOccurrence}`, ()=>{
            const laFunc = this.lookaheadStrategy.buildLookaheadForOptional({
                prodOccurrence,
                rule,
                maxLookahead: prodMaxLookahead || this.maxLookahead,
                dynamicTokensEnabled: this.dynamicTokensEnabled,
                prodType
            });
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKeyForAutomaticLookahead"])(this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
            this.setLaFuncCache(key, laFunc);
        });
    }
    // this actually returns a number, but it is always used as a string (object prop key)
    getKeyForAutomaticLookahead(dslMethodIdx, occurrence) {
        const currRuleShortName = this.getLastExplicitRuleShortName();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKeyForAutomaticLookahead"])(currRuleShortName, dslMethodIdx, occurrence);
    }
    getLaFuncFromCache(key) {
        return this.lookAheadFuncsCache.get(key);
    }
    /* istanbul ignore next */ setLaFuncCache(key, value) {
        this.lookAheadFuncsCache.set(key, value);
    }
}
class DslMethodsCollectorVisitor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAstVisitor"] {
    constructor(){
        super(...arguments);
        this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
        };
    }
    reset() {
        this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
        };
    }
    visitOption(option) {
        this.dslMethods.option.push(option);
    }
    visitRepetitionWithSeparator(manySep) {
        this.dslMethods.repetitionWithSeparator.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
        this.dslMethods.repetitionMandatory.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
        this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
    }
    visitRepetition(many) {
        this.dslMethods.repetition.push(many);
    }
    visitAlternation(or) {
        this.dslMethods.alternation.push(or);
    }
}
const collectorVisitor = new DslMethodsCollectorVisitor();
function collectMethods(rule) {
    collectorVisitor.reset();
    rule.accept(collectorVisitor);
    const dslMethods = collectorVisitor.dslMethods;
    // avoid uncleaned references
    collectorVisitor.reset();
    return dslMethods;
} //# sourceMappingURL=looksahead.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/cst/cst.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */ __turbopack_esm__({
    "addNoneTerminalToCst": (()=>addNoneTerminalToCst),
    "addTerminalToCst": (()=>addTerminalToCst),
    "setNodeLocationFull": (()=>setNodeLocationFull),
    "setNodeLocationOnlyOffset": (()=>setNodeLocationOnlyOffset)
});
function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
    // First (valid) update for this cst node
    if (isNaN(currNodeLocation.startOffset) === true) {
        // assumption1: Token location information is either NaN or a valid number
        // assumption2: Token location information is fully valid if it exist
        // (both start/end offsets exist and are numbers).
        currNodeLocation.startOffset = newLocationInfo.startOffset;
        currNodeLocation.endOffset = newLocationInfo.endOffset;
    } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
        currNodeLocation.endOffset = newLocationInfo.endOffset;
    }
}
function setNodeLocationFull(currNodeLocation, newLocationInfo) {
    // First (valid) update for this cst node
    if (isNaN(currNodeLocation.startOffset) === true) {
        // assumption1: Token location information is either NaN or a valid number
        // assumption2: Token location information is fully valid if it exist
        // (all start/end props exist and are numbers).
        currNodeLocation.startOffset = newLocationInfo.startOffset;
        currNodeLocation.startColumn = newLocationInfo.startColumn;
        currNodeLocation.startLine = newLocationInfo.startLine;
        currNodeLocation.endOffset = newLocationInfo.endOffset;
        currNodeLocation.endColumn = newLocationInfo.endColumn;
        currNodeLocation.endLine = newLocationInfo.endLine;
    } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
        currNodeLocation.endOffset = newLocationInfo.endOffset;
        currNodeLocation.endColumn = newLocationInfo.endColumn;
        currNodeLocation.endLine = newLocationInfo.endLine;
    }
}
function addTerminalToCst(node, token, tokenTypeName) {
    if (node.children[tokenTypeName] === undefined) {
        node.children[tokenTypeName] = [
            token
        ];
    } else {
        node.children[tokenTypeName].push(token);
    }
}
function addNoneTerminalToCst(node, ruleName, ruleResult) {
    if (node.children[ruleName] === undefined) {
        node.children[ruleName] = [
            ruleResult
        ];
    } else {
        node.children[ruleName].push(ruleResult);
    }
} //# sourceMappingURL=cst.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/lang/lang_extensions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defineNameProp": (()=>defineNameProp)
});
const NAME = "name";
function defineNameProp(obj, nameValue) {
    Object.defineProperty(obj, NAME, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: nameValue
    });
} //# sourceMappingURL=lang_extensions.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CstVisitorDefinitionError": (()=>CstVisitorDefinitionError),
    "createBaseSemanticVisitorConstructor": (()=>createBaseSemanticVisitorConstructor),
    "createBaseVisitorConstructorWithDefaults": (()=>createBaseVisitorConstructorWithDefaults),
    "defaultVisit": (()=>defaultVisit),
    "validateMissingCstMethods": (()=>validateMissingCstMethods),
    "validateVisitor": (()=>validateVisitor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$lang$2f$lang_extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/lang/lang_extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__keys$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js [app-client] (ecmascript) <export default as keys>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js [app-client] (ecmascript) <export default as isArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js [app-client] (ecmascript) <export default as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js [app-client] (ecmascript) <export default as map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/filter.js [app-client] (ecmascript) <export default as filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isFunction$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js [app-client] (ecmascript) <export default as isFunction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__compact$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js [app-client] (ecmascript) <export default as compact>");
;
;
function defaultVisit(ctx, param) {
    const childrenNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__keys$3e$__["keys"])(ctx);
    const childrenNamesLength = childrenNames.length;
    for(let i = 0; i < childrenNamesLength; i++){
        const currChildName = childrenNames[i];
        const currChildArray = ctx[currChildName];
        const currChildArrayLength = currChildArray.length;
        for(let j = 0; j < currChildArrayLength; j++){
            const currChild = currChildArray[j];
            // distinction between Tokens Children and CstNode children
            if (currChild.tokenTypeIdx === undefined) {
                this[currChild.name](currChild.children, param);
            }
        }
    }
// defaultVisit does not support generic out param
}
function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
    const derivedConstructor = function() {};
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$lang$2f$lang_extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineNameProp"])(derivedConstructor, grammarName + "BaseSemantics");
    const semanticProto = {
        visit: function(cstNode, param) {
            // enables writing more concise visitor methods when CstNode has only a single child
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(cstNode)) {
                // A CST Node's children dictionary can never have empty arrays as values
                // If a key is defined there will be at least one element in the corresponding value array.
                cstNode = cstNode[0];
            }
            // enables passing optional CstNodes concisely.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__["isUndefined"])(cstNode)) {
                return undefined;
            }
            return this[cstNode.name](cstNode.children, param);
        },
        validateVisitor: function() {
            const semanticDefinitionErrors = validateVisitor(this, ruleNames);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(semanticDefinitionErrors)) {
                const errorMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(semanticDefinitionErrors, (currDefError)=>currDefError.msg);
                throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:\n\t` + `${errorMessages.join("\n\n").replace(/\n/g, "\n\t")}`);
            }
        }
    };
    derivedConstructor.prototype = semanticProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    derivedConstructor._RULE_NAMES = ruleNames;
    return derivedConstructor;
}
function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
    const derivedConstructor = function() {};
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$lang$2f$lang_extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineNameProp"])(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
    const withDefaultsProto = Object.create(baseConstructor.prototype);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(ruleNames, (ruleName)=>{
        withDefaultsProto[ruleName] = defaultVisit;
    });
    derivedConstructor.prototype = withDefaultsProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    return derivedConstructor;
}
var CstVisitorDefinitionError;
(function(CstVisitorDefinitionError) {
    CstVisitorDefinitionError[CstVisitorDefinitionError["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
    CstVisitorDefinitionError[CstVisitorDefinitionError["MISSING_METHOD"] = 1] = "MISSING_METHOD";
})(CstVisitorDefinitionError || (CstVisitorDefinitionError = {}));
function validateVisitor(visitorInstance, ruleNames) {
    const missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
    return missingErrors;
}
function validateMissingCstMethods(visitorInstance, ruleNames) {
    const missingRuleNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__filter$3e$__["filter"])(ruleNames, (currRuleName)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isFunction$3e$__["isFunction"])(visitorInstance[currRuleName]) === false;
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(missingRuleNames, (currRuleName)=>{
        return {
            msg: `Missing visitor method: <${currRuleName}> on ${visitorInstance.constructor.name} CST Visitor.`,
            type: CstVisitorDefinitionError.MISSING_METHOD,
            methodName: currRuleName
        };
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__compact$3e$__["compact"])(errors);
} //# sourceMappingURL=cst_visitor.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TreeBuilder": (()=>TreeBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$cst$2f$cst$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/cst/cst.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$cst$2f$cst_visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js [app-client] (ecmascript) <export default as noop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js [app-client] (ecmascript) <export default as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__keys$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js [app-client] (ecmascript) <export default as keys>");
;
;
;
;
class TreeBuilder {
    initTreeBuilder(config) {
        this.CST_STACK = [];
        // outputCst is no longer exposed/defined in the pubic API
        this.outputCst = config.outputCst;
        this.nodeLocationTracking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "nodeLocationTracking") ? config.nodeLocationTracking // assumes end user provides the correct config value/type
         : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PARSER_CONFIG"].nodeLocationTracking;
        if (!this.outputCst) {
            this.cstInvocationStateUpdate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
            this.cstFinallyStateUpdate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
            this.cstPostTerminal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
            this.cstPostNonTerminal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
            this.cstPostRule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
        } else {
            if (/full/i.test(this.nodeLocationTracking)) {
                if (this.recoveryEnabled) {
                    this.setNodeLocationFromToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$cst$2f$cst$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNodeLocationFull"];
                    this.setNodeLocationFromNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$cst$2f$cst$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNodeLocationFull"];
                    this.cstPostRule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                    this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
                } else {
                    this.setNodeLocationFromToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                    this.setNodeLocationFromNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                    this.cstPostRule = this.cstPostRuleFull;
                    this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
                }
            } else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
                if (this.recoveryEnabled) {
                    this.setNodeLocationFromToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$cst$2f$cst$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNodeLocationOnlyOffset"];
                    this.setNodeLocationFromNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$cst$2f$cst$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNodeLocationOnlyOffset"];
                    this.cstPostRule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                    this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
                } else {
                    this.setNodeLocationFromToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                    this.setNodeLocationFromNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                    this.cstPostRule = this.cstPostRuleOnlyOffset;
                    this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
                }
            } else if (/none/i.test(this.nodeLocationTracking)) {
                this.setNodeLocationFromToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                this.setNodeLocationFromNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                this.cstPostRule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
                this.setInitialNodeLocation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__noop$3e$__["noop"];
            } else {
                throw Error(`Invalid <nodeLocationTracking> config option: "${config.nodeLocationTracking}"`);
            }
        }
    }
    setInitialNodeLocationOnlyOffsetRecovery(cstNode) {
        cstNode.location = {
            startOffset: NaN,
            endOffset: NaN
        };
    }
    setInitialNodeLocationOnlyOffsetRegular(cstNode) {
        cstNode.location = {
            // without error recovery the starting Location of a new CstNode is guaranteed
            // To be the next Token's startOffset (for valid inputs).
            // For invalid inputs there won't be any CSTOutput so this potential
            // inaccuracy does not matter
            startOffset: this.LA(1).startOffset,
            endOffset: NaN
        };
    }
    setInitialNodeLocationFullRecovery(cstNode) {
        cstNode.location = {
            startOffset: NaN,
            startLine: NaN,
            startColumn: NaN,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
        };
    }
    /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */ setInitialNodeLocationFullRegular(cstNode) {
        const nextToken = this.LA(1);
        cstNode.location = {
            startOffset: nextToken.startOffset,
            startLine: nextToken.startLine,
            startColumn: nextToken.startColumn,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
        };
    }
    cstInvocationStateUpdate(fullRuleName) {
        const cstNode = {
            name: fullRuleName,
            children: Object.create(null)
        };
        this.setInitialNodeLocation(cstNode);
        this.CST_STACK.push(cstNode);
    }
    cstFinallyStateUpdate() {
        this.CST_STACK.pop();
    }
    cstPostRuleFull(ruleCstNode) {
        // casts to `required<CstNodeLocation>` are safe because `cstPostRuleFull` should only be invoked when full location is enabled
        const prevToken = this.LA(0);
        const loc = ruleCstNode.location;
        // If this condition is true it means we consumed at least one Token
        // In this CstNode.
        if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
            loc.endLine = prevToken.endLine;
            loc.endColumn = prevToken.endColumn;
        } else {
            loc.startOffset = NaN;
            loc.startLine = NaN;
            loc.startColumn = NaN;
        }
    }
    cstPostRuleOnlyOffset(ruleCstNode) {
        const prevToken = this.LA(0);
        // `location' is not null because `cstPostRuleOnlyOffset` will only be invoked when location tracking is enabled.
        const loc = ruleCstNode.location;
        // If this condition is true it means we consumed at least one Token
        // In this CstNode.
        if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
        } else {
            loc.startOffset = NaN;
        }
    }
    cstPostTerminal(key, consumedToken) {
        const rootCst = this.CST_STACK[this.CST_STACK.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$cst$2f$cst$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTerminalToCst"])(rootCst, consumedToken, key);
        // This is only used when **both** error recovery and CST Output are enabled.
        this.setNodeLocationFromToken(rootCst.location, consumedToken);
    }
    cstPostNonTerminal(ruleCstResult, ruleName) {
        const preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$cst$2f$cst$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNoneTerminalToCst"])(preCstNode, ruleName, ruleCstResult);
        // This is only used when **both** error recovery and CST Output are enabled.
        this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
    }
    getBaseCstVisitorConstructor() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__["isUndefined"])(this.baseCstVisitorConstructor)) {
            const newBaseCstVisitorConstructor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$cst$2f$cst_visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBaseSemanticVisitorConstructor"])(this.className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__keys$3e$__["keys"])(this.gastProductionsCache));
            this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
            return newBaseCstVisitorConstructor;
        }
        return this.baseCstVisitorConstructor;
    }
    getBaseCstVisitorConstructorWithDefaults() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__["isUndefined"])(this.baseCstVisitorWithDefaultsConstructor)) {
            const newConstructor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$cst$2f$cst_visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBaseVisitorConstructorWithDefaults"])(this.className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__keys$3e$__["keys"])(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
            this.baseCstVisitorWithDefaultsConstructor = newConstructor;
            return newConstructor;
        }
        return this.baseCstVisitorWithDefaultsConstructor;
    }
    getLastExplicitRuleShortName() {
        const ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 1];
    }
    getPreviousExplicitRuleShortName() {
        const ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 2];
    }
    getLastExplicitRuleOccurrenceIndex() {
        const occurrenceStack = this.RULE_OCCURRENCE_STACK;
        return occurrenceStack[occurrenceStack.length - 1];
    }
} //# sourceMappingURL=tree_builder.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LexerAdapter": (()=>LexerAdapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
;
class LexerAdapter {
    initLexerAdapter() {
        this.tokVector = [];
        this.tokVectorLength = 0;
        this.currIdx = -1;
    }
    set input(newInput) {
        // @ts-ignore - `this parameter` not supported in setters/getters
        //   - https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
        if (this.selfAnalysisDone !== true) {
            throw Error(`Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.`);
        }
        // @ts-ignore - `this parameter` not supported in setters/getters
        //   - https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
        this.reset();
        this.tokVector = newInput;
        this.tokVectorLength = newInput.length;
    }
    get input() {
        return this.tokVector;
    }
    // skips a token and returns the next token
    SKIP_TOKEN() {
        if (this.currIdx <= this.tokVector.length - 2) {
            this.consumeToken();
            return this.LA(1);
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_OF_FILE"];
        }
    }
    // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
    // or lexers dependent on parser context.
    LA(howMuch) {
        const soughtIdx = this.currIdx + howMuch;
        if (soughtIdx < 0 || this.tokVectorLength <= soughtIdx) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_OF_FILE"];
        } else {
            return this.tokVector[soughtIdx];
        }
    }
    consumeToken() {
        this.currIdx++;
    }
    exportLexerState() {
        return this.currIdx;
    }
    importLexerState(newState) {
        this.currIdx = newState;
    }
    resetLexerState() {
        this.currIdx = -1;
    }
    moveToTerminatedState() {
        this.currIdx = this.tokVector.length - 1;
    }
    getLexerPosition() {
        return this.exportLexerState();
    }
} //# sourceMappingURL=lexer_adapter.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RecognizerApi": (()=>RecognizerApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/exceptions_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/errors_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/includes.js [app-client] (ecmascript) <export default as includes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js [app-client] (ecmascript) <export default as values>");
;
;
;
;
;
;
class RecognizerApi {
    ACTION(impl) {
        return impl.call(this);
    }
    consume(idx, tokType, options) {
        return this.consumeInternal(tokType, idx, options);
    }
    subrule(idx, ruleToCall, options) {
        return this.subruleInternal(ruleToCall, idx, options);
    }
    option(idx, actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, idx);
    }
    or(idx, altsOrOpts) {
        return this.orInternal(altsOrOpts, idx);
    }
    many(idx, actionORMethodDef) {
        return this.manyInternal(idx, actionORMethodDef);
    }
    atLeastOne(idx, actionORMethodDef) {
        return this.atLeastOneInternal(idx, actionORMethodDef);
    }
    CONSUME(tokType, options) {
        return this.consumeInternal(tokType, 0, options);
    }
    CONSUME1(tokType, options) {
        return this.consumeInternal(tokType, 1, options);
    }
    CONSUME2(tokType, options) {
        return this.consumeInternal(tokType, 2, options);
    }
    CONSUME3(tokType, options) {
        return this.consumeInternal(tokType, 3, options);
    }
    CONSUME4(tokType, options) {
        return this.consumeInternal(tokType, 4, options);
    }
    CONSUME5(tokType, options) {
        return this.consumeInternal(tokType, 5, options);
    }
    CONSUME6(tokType, options) {
        return this.consumeInternal(tokType, 6, options);
    }
    CONSUME7(tokType, options) {
        return this.consumeInternal(tokType, 7, options);
    }
    CONSUME8(tokType, options) {
        return this.consumeInternal(tokType, 8, options);
    }
    CONSUME9(tokType, options) {
        return this.consumeInternal(tokType, 9, options);
    }
    SUBRULE(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 0, options);
    }
    SUBRULE1(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 1, options);
    }
    SUBRULE2(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 2, options);
    }
    SUBRULE3(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 3, options);
    }
    SUBRULE4(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 4, options);
    }
    SUBRULE5(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 5, options);
    }
    SUBRULE6(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 6, options);
    }
    SUBRULE7(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 7, options);
    }
    SUBRULE8(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 8, options);
    }
    SUBRULE9(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 9, options);
    }
    OPTION(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 0);
    }
    OPTION1(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 1);
    }
    OPTION2(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 2);
    }
    OPTION3(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 3);
    }
    OPTION4(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 4);
    }
    OPTION5(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 5);
    }
    OPTION6(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 6);
    }
    OPTION7(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 7);
    }
    OPTION8(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 8);
    }
    OPTION9(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 9);
    }
    OR(altsOrOpts) {
        return this.orInternal(altsOrOpts, 0);
    }
    OR1(altsOrOpts) {
        return this.orInternal(altsOrOpts, 1);
    }
    OR2(altsOrOpts) {
        return this.orInternal(altsOrOpts, 2);
    }
    OR3(altsOrOpts) {
        return this.orInternal(altsOrOpts, 3);
    }
    OR4(altsOrOpts) {
        return this.orInternal(altsOrOpts, 4);
    }
    OR5(altsOrOpts) {
        return this.orInternal(altsOrOpts, 5);
    }
    OR6(altsOrOpts) {
        return this.orInternal(altsOrOpts, 6);
    }
    OR7(altsOrOpts) {
        return this.orInternal(altsOrOpts, 7);
    }
    OR8(altsOrOpts) {
        return this.orInternal(altsOrOpts, 8);
    }
    OR9(altsOrOpts) {
        return this.orInternal(altsOrOpts, 9);
    }
    MANY(actionORMethodDef) {
        this.manyInternal(0, actionORMethodDef);
    }
    MANY1(actionORMethodDef) {
        this.manyInternal(1, actionORMethodDef);
    }
    MANY2(actionORMethodDef) {
        this.manyInternal(2, actionORMethodDef);
    }
    MANY3(actionORMethodDef) {
        this.manyInternal(3, actionORMethodDef);
    }
    MANY4(actionORMethodDef) {
        this.manyInternal(4, actionORMethodDef);
    }
    MANY5(actionORMethodDef) {
        this.manyInternal(5, actionORMethodDef);
    }
    MANY6(actionORMethodDef) {
        this.manyInternal(6, actionORMethodDef);
    }
    MANY7(actionORMethodDef) {
        this.manyInternal(7, actionORMethodDef);
    }
    MANY8(actionORMethodDef) {
        this.manyInternal(8, actionORMethodDef);
    }
    MANY9(actionORMethodDef) {
        this.manyInternal(9, actionORMethodDef);
    }
    MANY_SEP(options) {
        this.manySepFirstInternal(0, options);
    }
    MANY_SEP1(options) {
        this.manySepFirstInternal(1, options);
    }
    MANY_SEP2(options) {
        this.manySepFirstInternal(2, options);
    }
    MANY_SEP3(options) {
        this.manySepFirstInternal(3, options);
    }
    MANY_SEP4(options) {
        this.manySepFirstInternal(4, options);
    }
    MANY_SEP5(options) {
        this.manySepFirstInternal(5, options);
    }
    MANY_SEP6(options) {
        this.manySepFirstInternal(6, options);
    }
    MANY_SEP7(options) {
        this.manySepFirstInternal(7, options);
    }
    MANY_SEP8(options) {
        this.manySepFirstInternal(8, options);
    }
    MANY_SEP9(options) {
        this.manySepFirstInternal(9, options);
    }
    AT_LEAST_ONE(actionORMethodDef) {
        this.atLeastOneInternal(0, actionORMethodDef);
    }
    AT_LEAST_ONE1(actionORMethodDef) {
        return this.atLeastOneInternal(1, actionORMethodDef);
    }
    AT_LEAST_ONE2(actionORMethodDef) {
        this.atLeastOneInternal(2, actionORMethodDef);
    }
    AT_LEAST_ONE3(actionORMethodDef) {
        this.atLeastOneInternal(3, actionORMethodDef);
    }
    AT_LEAST_ONE4(actionORMethodDef) {
        this.atLeastOneInternal(4, actionORMethodDef);
    }
    AT_LEAST_ONE5(actionORMethodDef) {
        this.atLeastOneInternal(5, actionORMethodDef);
    }
    AT_LEAST_ONE6(actionORMethodDef) {
        this.atLeastOneInternal(6, actionORMethodDef);
    }
    AT_LEAST_ONE7(actionORMethodDef) {
        this.atLeastOneInternal(7, actionORMethodDef);
    }
    AT_LEAST_ONE8(actionORMethodDef) {
        this.atLeastOneInternal(8, actionORMethodDef);
    }
    AT_LEAST_ONE9(actionORMethodDef) {
        this.atLeastOneInternal(9, actionORMethodDef);
    }
    AT_LEAST_ONE_SEP(options) {
        this.atLeastOneSepFirstInternal(0, options);
    }
    AT_LEAST_ONE_SEP1(options) {
        this.atLeastOneSepFirstInternal(1, options);
    }
    AT_LEAST_ONE_SEP2(options) {
        this.atLeastOneSepFirstInternal(2, options);
    }
    AT_LEAST_ONE_SEP3(options) {
        this.atLeastOneSepFirstInternal(3, options);
    }
    AT_LEAST_ONE_SEP4(options) {
        this.atLeastOneSepFirstInternal(4, options);
    }
    AT_LEAST_ONE_SEP5(options) {
        this.atLeastOneSepFirstInternal(5, options);
    }
    AT_LEAST_ONE_SEP6(options) {
        this.atLeastOneSepFirstInternal(6, options);
    }
    AT_LEAST_ONE_SEP7(options) {
        this.atLeastOneSepFirstInternal(7, options);
    }
    AT_LEAST_ONE_SEP8(options) {
        this.atLeastOneSepFirstInternal(8, options);
    }
    AT_LEAST_ONE_SEP9(options) {
        this.atLeastOneSepFirstInternal(9, options);
    }
    RULE(name, implementation, config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RULE_CONFIG"]) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__includes$3e$__["includes"])(this.definedRulesNames, name)) {
            const errMsg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGrammarValidatorErrorProvider"].buildDuplicateRuleNameError({
                topLevelRule: name,
                grammarName: this.className
            });
            const error = {
                message: errMsg,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParserDefinitionErrorType"].DUPLICATE_RULE_NAME,
                ruleName: name
            };
            this.definitionErrors.push(error);
        }
        this.definedRulesNames.push(name);
        const ruleImplementation = this.defineRule(name, implementation, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
    }
    OVERRIDE_RULE(name, impl, config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RULE_CONFIG"]) {
        const ruleErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRuleIsOverridden"])(name, this.definedRulesNames, this.className);
        this.definitionErrors = this.definitionErrors.concat(ruleErrors);
        const ruleImplementation = this.defineRule(name, impl, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
    }
    BACKTRACK(grammarRule, args) {
        return function() {
            // save org state
            this.isBackTrackingStack.push(1);
            const orgState = this.saveRecogState();
            try {
                grammarRule.apply(this, args);
                // if no exception was thrown we have succeed parsing the rule.
                return true;
            } catch (e) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecognitionException"])(e)) {
                    return false;
                } else {
                    throw e;
                }
            } finally{
                this.reloadRecogState(orgState);
                this.isBackTrackingStack.pop();
            }
        };
    }
    // GAST export APIs
    getGAstProductions() {
        return this.gastProductionsCache;
    }
    getSerializedGastProductions() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeGrammar"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.gastProductionsCache));
    }
} //# sourceMappingURL=recognizer_api.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RecognizerEngine": (()=>RecognizerEngine)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/exceptions_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/lookahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/interpreter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$recoverable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js [app-client] (ecmascript) <export default as isArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/every.js [app-client] (ecmascript) <export default as every>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js [app-client] (ecmascript) <export default as flatten>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js [app-client] (ecmascript) <export default as values>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isObject$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js [app-client] (ecmascript) <export default as isObject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clone.js [app-client] (ecmascript) <export default as clone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__uniq$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js [app-client] (ecmascript) <export default as uniq>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/reduce.js [app-client] (ecmascript) <export default as reduce>");
;
;
;
;
;
;
;
;
;
class RecognizerEngine {
    initRecognizerEngine(tokenVocabulary, config) {
        this.className = this.constructor.name;
        // TODO: would using an ES6 Map or plain object be faster (CST building scenario)
        this.shortRuleNameToFull = {};
        this.fullRuleNameToShort = {};
        this.ruleShortNameIdx = 256;
        this.tokenMatcher = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenStructuredMatcherNoCategories"];
        this.subruleIdx = 0;
        this.definedRulesNames = [];
        this.tokensMap = {};
        this.isBackTrackingStack = [];
        this.RULE_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
        this.gastProductionsCache = {};
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "serializedGrammar")) {
            throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n" + "\tSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n" + "\tFor Further details.");
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(tokenVocabulary)) {
            // This only checks for Token vocabularies provided as arrays.
            // That is good enough because the main objective is to detect users of pre-V4.0 APIs
            // rather than all edge cases of empty Token vocabularies.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(tokenVocabulary)) {
                throw Error("A Token Vocabulary cannot be empty.\n" + "\tNote that the first argument for the parser constructor\n" + "\tis no longer a Token vector (since v4.0).");
            }
            if (typeof tokenVocabulary[0].startOffset === "number") {
                throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n" + "\tSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n" + "\tFor Further details.");
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(tokenVocabulary)) {
            this.tokensMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(tokenVocabulary, (acc, tokType)=>{
                acc[tokType.name] = tokType;
                return acc;
            }, {});
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(tokenVocabulary, "modes") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__["every"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(tokenVocabulary.modes)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTokenType"])) {
            const allTokenTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(tokenVocabulary.modes));
            const uniqueTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__uniq$3e$__["uniq"])(allTokenTypes);
            this.tokensMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$reduce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__reduce$3e$__["reduce"])(uniqueTokens, (acc, tokType)=>{
                acc[tokType.name] = tokType;
                return acc;
            }, {});
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isObject$3e$__["isObject"])(tokenVocabulary)) {
            this.tokensMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(tokenVocabulary);
        } else {
            throw new Error("<tokensDictionary> argument must be An Array of Token constructors," + " A dictionary of Token constructors or an IMultiModeLexerDefinition");
        }
        // always add EOF to the tokenNames -> constructors map. it is useful to assure all the input has been
        // parsed with a clear error message ("expecting EOF but found ...")
        this.tokensMap["EOF"] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOF"];
        const allTokenTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(tokenVocabulary, "modes") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__flatten$3e$__["flatten"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(tokenVocabulary.modes)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(tokenVocabulary);
        const noTokenCategoriesUsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__every$3e$__["every"])(allTokenTypes, (tokenConstructor)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(tokenConstructor.categoryMatches));
        this.tokenMatcher = noTokenCategoriesUsed ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenStructuredMatcherNoCategories"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenStructuredMatcher"];
        // Because ES2015+ syntax should be supported for creating Token classes
        // We cannot assume that the Token classes were created using the "extendToken" utilities
        // Therefore we must augment the Token classes both on Lexer initialization and on Parser initialization
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["augmentTokenTypes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.tokensMap));
    }
    defineRule(ruleName, impl, config) {
        if (this.selfAnalysisDone) {
            throw Error(`Grammar rule <${ruleName}> may not be defined after the 'performSelfAnalysis' method has been called'\n` + `Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
        }
        const resyncEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "resyncEnabled") ? config.resyncEnabled // assumes end user provides the correct config value/type
         : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RULE_CONFIG"].resyncEnabled;
        const recoveryValueFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "recoveryValueFunc") ? config.recoveryValueFunc // assumes end user provides the correct config value/type
         : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RULE_CONFIG"].recoveryValueFunc;
        // performance optimization: Use small integers as keys for the longer human readable "full" rule names.
        // this greatly improves Map access time (as much as 8% for some performance benchmarks).
        const shortName = this.ruleShortNameIdx << __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BITS_FOR_METHOD_TYPE"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BITS_FOR_OCCURRENCE_IDX"];
        this.ruleShortNameIdx++;
        this.shortRuleNameToFull[shortName] = ruleName;
        this.fullRuleNameToShort[ruleName] = shortName;
        let invokeRuleWithTry;
        // Micro optimization, only check the condition **once** on rule definition
        // instead of **every single** rule invocation.
        if (this.outputCst === true) {
            invokeRuleWithTry = function invokeRuleWithTry(...args) {
                try {
                    this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
                    impl.apply(this, args);
                    const cst = this.CST_STACK[this.CST_STACK.length - 1];
                    this.cstPostRule(cst);
                    return cst;
                } catch (e) {
                    return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
                } finally{
                    this.ruleFinallyStateUpdate();
                }
            };
        } else {
            invokeRuleWithTry = function invokeRuleWithTryCst(...args) {
                try {
                    this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
                    return impl.apply(this, args);
                } catch (e) {
                    return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
                } finally{
                    this.ruleFinallyStateUpdate();
                }
            };
        }
        const wrappedGrammarRule = Object.assign(invokeRuleWithTry, {
            ruleName,
            originalGrammarAction: impl
        });
        return wrappedGrammarRule;
    }
    invokeRuleCatch(e, resyncEnabledConfig, recoveryValueFunc) {
        const isFirstInvokedRule = this.RULE_STACK.length === 1;
        // note the reSync is always enabled for the first rule invocation, because we must always be able to
        // reSync with EOF and just output some INVALID ParseTree
        // during backtracking reSync recovery is disabled, otherwise we can't be certain the backtracking
        // path is really the most valid one
        const reSyncEnabled = resyncEnabledConfig && !this.isBackTracking() && this.recoveryEnabled;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecognitionException"])(e)) {
            const recogError = e;
            if (reSyncEnabled) {
                const reSyncTokType = this.findReSyncTokenType();
                if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
                    recogError.resyncedTokens = this.reSyncTo(reSyncTokType);
                    if (this.outputCst) {
                        const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                        partialCstResult.recoveredNode = true;
                        return partialCstResult;
                    } else {
                        return recoveryValueFunc(e);
                    }
                } else {
                    if (this.outputCst) {
                        const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                        partialCstResult.recoveredNode = true;
                        recogError.partialCstResult = partialCstResult;
                    }
                    // to be handled Further up the call stack
                    throw recogError;
                }
            } else if (isFirstInvokedRule) {
                // otherwise a Redundant input error will be created as well and we cannot guarantee that this is indeed the case
                this.moveToTerminatedState();
                // the parser should never throw one of its own errors outside its flow.
                // even if error recovery is disabled
                return recoveryValueFunc(e);
            } else {
                // to be recovered Further up the call stack
                throw recogError;
            }
        } else {
            // some other Error type which we don't know how to handle (for example a built in JavaScript Error)
            throw e;
        }
    }
    // Implementation of parsing DSL
    optionInternal(actionORMethodDef, occurrence) {
        const key = this.getKeyForAutomaticLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPTION_IDX"], occurrence);
        return this.optionInternalLogic(actionORMethodDef, occurrence, key);
    }
    optionInternalLogic(actionORMethodDef, occurrence, key) {
        let lookAheadFunc = this.getLaFuncFromCache(key);
        let action;
        if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            const predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                const orgLookaheadFunction = lookAheadFunc;
                lookAheadFunc = ()=>{
                    return predicate.call(this) && orgLookaheadFunction.call(this);
                };
            }
        } else {
            action = actionORMethodDef;
        }
        if (lookAheadFunc.call(this) === true) {
            return action.call(this);
        }
        return undefined;
    }
    atLeastOneInternal(prodOccurrence, actionORMethodDef) {
        const laKey = this.getKeyForAutomaticLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AT_LEAST_ONE_IDX"], prodOccurrence);
        return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
    }
    atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key) {
        let lookAheadFunc = this.getLaFuncFromCache(key);
        let action;
        if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            const predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                const orgLookaheadFunction = lookAheadFunc;
                lookAheadFunc = ()=>{
                    return predicate.call(this) && orgLookaheadFunction.call(this);
                };
            }
        } else {
            action = actionORMethodDef;
        }
        if (lookAheadFunc.call(this) === true) {
            let notStuck = this.doSingleRepetition(action);
            while(lookAheadFunc.call(this) === true && notStuck === true){
                notStuck = this.doSingleRepetition(action);
            }
        } else {
            throw this.raiseEarlyExitException(prodOccurrence, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROD_TYPE"].REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
        }
        // note that while it may seem that this can cause an error because by using a recursive call to
        // AT_LEAST_ONE we change the grammar to AT_LEAST_TWO, AT_LEAST_THREE ... , the possible recursive call
        // from the tryInRepetitionRecovery(...) will only happen IFF there really are TWO/THREE/.... items.
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        this.attemptInRepetitionRecovery(this.atLeastOneInternal, [
            prodOccurrence,
            actionORMethodDef
        ], lookAheadFunc, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AT_LEAST_ONE_IDX"], prodOccurrence, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextTerminalAfterAtLeastOneWalker"]);
    }
    atLeastOneSepFirstInternal(prodOccurrence, options) {
        const laKey = this.getKeyForAutomaticLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AT_LEAST_ONE_SEP_IDX"], prodOccurrence);
        this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
    }
    atLeastOneSepFirstInternalLogic(prodOccurrence, options, key) {
        const action = options.DEF;
        const separator = options.SEP;
        const firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
        // 1st iteration
        if (firstIterationLookaheadFunc.call(this) === true) {
            action.call(this);
            //  TODO: Optimization can move this function construction into "attemptInRepetitionRecovery"
            //  because it is only needed in error recovery scenarios.
            const separatorLookAheadFunc = ()=>{
                return this.tokenMatcher(this.LA(1), separator);
            };
            // 2nd..nth iterations
            while(this.tokenMatcher(this.LA(1), separator) === true){
                // note that this CONSUME will never enter recovery because
                // the separatorLookAheadFunc checks that the separator really does exist.
                this.CONSUME(separator);
                // No need for checking infinite loop here due to consuming the separator.
                action.call(this);
            }
            // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                prodOccurrence,
                separator,
                separatorLookAheadFunc,
                action,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextTerminalAfterAtLeastOneSepWalker"]
            ], separatorLookAheadFunc, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AT_LEAST_ONE_SEP_IDX"], prodOccurrence, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextTerminalAfterAtLeastOneSepWalker"]);
        } else {
            throw this.raiseEarlyExitException(prodOccurrence, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROD_TYPE"].REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
        }
    }
    manyInternal(prodOccurrence, actionORMethodDef) {
        const laKey = this.getKeyForAutomaticLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANY_IDX"], prodOccurrence);
        return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
    }
    manyInternalLogic(prodOccurrence, actionORMethodDef, key) {
        let lookaheadFunction = this.getLaFuncFromCache(key);
        let action;
        if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            const predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                const orgLookaheadFunction = lookaheadFunction;
                lookaheadFunction = ()=>{
                    return predicate.call(this) && orgLookaheadFunction.call(this);
                };
            }
        } else {
            action = actionORMethodDef;
        }
        let notStuck = true;
        while(lookaheadFunction.call(this) === true && notStuck === true){
            notStuck = this.doSingleRepetition(action);
        }
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        this.attemptInRepetitionRecovery(this.manyInternal, [
            prodOccurrence,
            actionORMethodDef
        ], lookaheadFunction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANY_IDX"], prodOccurrence, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextTerminalAfterManyWalker"], // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
        // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
        // An infinite loop cannot occur as:
        // - Either the lookahead is guaranteed to consume something (Single Token Separator)
        // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
        notStuck);
    }
    manySepFirstInternal(prodOccurrence, options) {
        const laKey = this.getKeyForAutomaticLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANY_SEP_IDX"], prodOccurrence);
        this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
    }
    manySepFirstInternalLogic(prodOccurrence, options, key) {
        const action = options.DEF;
        const separator = options.SEP;
        const firstIterationLaFunc = this.getLaFuncFromCache(key);
        // 1st iteration
        if (firstIterationLaFunc.call(this) === true) {
            action.call(this);
            const separatorLookAheadFunc = ()=>{
                return this.tokenMatcher(this.LA(1), separator);
            };
            // 2nd..nth iterations
            while(this.tokenMatcher(this.LA(1), separator) === true){
                // note that this CONSUME will never enter recovery because
                // the separatorLookAheadFunc checks that the separator really does exist.
                this.CONSUME(separator);
                // No need for checking infinite loop here due to consuming the separator.
                action.call(this);
            }
            // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                prodOccurrence,
                separator,
                separatorLookAheadFunc,
                action,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextTerminalAfterManySepWalker"]
            ], separatorLookAheadFunc, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANY_SEP_IDX"], prodOccurrence, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextTerminalAfterManySepWalker"]);
        }
    }
    repetitionSepSecondInternal(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
        while(separatorLookAheadFunc()){
            // note that this CONSUME will never enter recovery because
            // the separatorLookAheadFunc checks that the separator really does exist.
            this.CONSUME(separator);
            action.call(this);
        }
        // we can only arrive to this function after an error
        // has occurred (hence the name 'second') so the following
        // IF will always be entered, its possible to remove it...
        // however it is kept to avoid confusion and be consistent.
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        /* istanbul ignore else */ this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
            prodOccurrence,
            separator,
            separatorLookAheadFunc,
            action,
            nextTerminalAfterWalker
        ], separatorLookAheadFunc, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AT_LEAST_ONE_SEP_IDX"], prodOccurrence, nextTerminalAfterWalker);
    }
    doSingleRepetition(action) {
        const beforeIteration = this.getLexerPosition();
        action.call(this);
        const afterIteration = this.getLexerPosition();
        // This boolean will indicate if this repetition progressed
        // or if we are "stuck" (potential infinite loop in the repetition).
        return afterIteration > beforeIteration;
    }
    orInternal(altsOrOpts, occurrence) {
        const laKey = this.getKeyForAutomaticLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OR_IDX"], occurrence);
        const alts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF;
        const laFunc = this.getLaFuncFromCache(laKey);
        const altIdxToTake = laFunc.call(this, alts);
        if (altIdxToTake !== undefined) {
            const chosenAlternative = alts[altIdxToTake];
            return chosenAlternative.ALT.call(this);
        }
        this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
    }
    ruleFinallyStateUpdate() {
        this.RULE_STACK.pop();
        this.RULE_OCCURRENCE_STACK.pop();
        // NOOP when cst is disabled
        this.cstFinallyStateUpdate();
        if (this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
            const firstRedundantTok = this.LA(1);
            const errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
                firstRedundant: firstRedundantTok,
                ruleName: this.getCurrRuleFullName()
            });
            this.SAVE_ERROR(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotAllInputParsedException"](errMsg, firstRedundantTok));
        }
    }
    subruleInternal(ruleToCall, idx, options) {
        let ruleResult;
        try {
            const args = options !== undefined ? options.ARGS : undefined;
            this.subruleIdx = idx;
            ruleResult = ruleToCall.apply(this, args);
            this.cstPostNonTerminal(ruleResult, options !== undefined && options.LABEL !== undefined ? options.LABEL : ruleToCall.ruleName);
            return ruleResult;
        } catch (e) {
            throw this.subruleInternalError(e, options, ruleToCall.ruleName);
        }
    }
    subruleInternalError(e, options, ruleName) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecognitionException"])(e) && e.partialCstResult !== undefined) {
            this.cstPostNonTerminal(e.partialCstResult, options !== undefined && options.LABEL !== undefined ? options.LABEL : ruleName);
            delete e.partialCstResult;
        }
        throw e;
    }
    consumeInternal(tokType, idx, options) {
        let consumedToken;
        try {
            const nextToken = this.LA(1);
            if (this.tokenMatcher(nextToken, tokType) === true) {
                this.consumeToken();
                consumedToken = nextToken;
            } else {
                this.consumeInternalError(tokType, nextToken, options);
            }
        } catch (eFromConsumption) {
            consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
        }
        this.cstPostTerminal(options !== undefined && options.LABEL !== undefined ? options.LABEL : tokType.name, consumedToken);
        return consumedToken;
    }
    consumeInternalError(tokType, nextToken, options) {
        let msg;
        const previousToken = this.LA(0);
        if (options !== undefined && options.ERR_MSG) {
            msg = options.ERR_MSG;
        } else {
            msg = this.errorMessageProvider.buildMismatchTokenMessage({
                expected: tokType,
                actual: nextToken,
                previous: previousToken,
                ruleName: this.getCurrRuleFullName()
            });
        }
        throw this.SAVE_ERROR(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MismatchedTokenException"](msg, nextToken, previousToken));
    }
    consumeInternalRecovery(tokType, idx, eFromConsumption) {
        // no recovery allowed during backtracking, otherwise backtracking may recover invalid syntax and accept it
        // but the original syntax could have been parsed successfully without any backtracking + recovery
        if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
        eFromConsumption.name === "MismatchedTokenException" && !this.isBackTracking()) {
            const follows = this.getFollowsForInRuleRecovery(tokType, idx);
            try {
                return this.tryInRuleRecovery(tokType, follows);
            } catch (eFromInRuleRecovery) {
                if (eFromInRuleRecovery.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$recoverable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IN_RULE_RECOVERY_EXCEPTION"]) {
                    // failed in RuleRecovery.
                    // throw the original error in order to trigger reSync error recovery
                    throw eFromConsumption;
                } else {
                    throw eFromInRuleRecovery;
                }
            }
        } else {
            throw eFromConsumption;
        }
    }
    saveRecogState() {
        // errors is a getter which will clone the errors array
        const savedErrors = this.errors;
        const savedRuleStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(this.RULE_STACK);
        return {
            errors: savedErrors,
            lexerState: this.exportLexerState(),
            RULE_STACK: savedRuleStack,
            CST_STACK: this.CST_STACK
        };
    }
    reloadRecogState(newState) {
        this.errors = newState.errors;
        this.importLexerState(newState.lexerState);
        this.RULE_STACK = newState.RULE_STACK;
    }
    ruleInvocationStateUpdate(shortName, fullName, idxInCallingRule) {
        this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);
        this.RULE_STACK.push(shortName);
        // NOOP when cst is disabled
        this.cstInvocationStateUpdate(fullName);
    }
    isBackTracking() {
        return this.isBackTrackingStack.length !== 0;
    }
    getCurrRuleFullName() {
        const shortName = this.getLastExplicitRuleShortName();
        return this.shortRuleNameToFull[shortName];
    }
    shortRuleNameToFullName(shortName) {
        return this.shortRuleNameToFull[shortName];
    }
    isAtEndOfInput() {
        return this.tokenMatcher(this.LA(1), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOF"]);
    }
    reset() {
        this.resetLexerState();
        this.subruleIdx = 0;
        this.isBackTrackingStack = [];
        this.errors = [];
        this.RULE_STACK = [];
        // TODO: extract a specific reset for TreeBuilder trait
        this.CST_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
    }
} //# sourceMappingURL=recognizer_engine.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ErrorHandler": (()=>ErrorHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/exceptions_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/lookahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clone.js [app-client] (ecmascript) <export default as clone>");
;
;
;
;
class ErrorHandler {
    initErrorHandler(config) {
        this._errors = [];
        this.errorMessageProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "errorMessageProvider") ? config.errorMessageProvider // assumes end user provides the correct config value/type
         : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PARSER_CONFIG"].errorMessageProvider;
    }
    SAVE_ERROR(error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecognitionException"])(error)) {
            error.context = {
                ruleStack: this.getHumanReadableRuleStack(),
                ruleOccurrenceStack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(this.RULE_OCCURRENCE_STACK)
            };
            this._errors.push(error);
            return error;
        } else {
            throw Error("Trying to save an Error which is not a RecognitionException");
        }
    }
    get errors() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(this._errors);
    }
    set errors(newErrors) {
        this._errors = newErrors;
    }
    // TODO: consider caching the error message computed information
    raiseEarlyExitException(occurrence, prodType, userDefinedErrMsg) {
        const ruleName = this.getCurrRuleFullName();
        const ruleGrammar = this.getGAstProductions()[ruleName];
        const lookAheadPathsPerAlternative = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLookaheadPathsForOptionalProd"])(occurrence, ruleGrammar, prodType, this.maxLookahead);
        const insideProdPaths = lookAheadPathsPerAlternative[0];
        const actualTokens = [];
        for(let i = 1; i <= this.maxLookahead; i++){
            actualTokens.push(this.LA(i));
        }
        const msg = this.errorMessageProvider.buildEarlyExitMessage({
            expectedIterationPaths: insideProdPaths,
            actual: actualTokens,
            previous: this.LA(0),
            customUserDescription: userDefinedErrMsg,
            ruleName: ruleName
        });
        throw this.SAVE_ERROR(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EarlyExitException"](msg, this.LA(1), this.LA(0)));
    }
    // TODO: consider caching the error message computed information
    raiseNoAltException(occurrence, errMsgTypes) {
        const ruleName = this.getCurrRuleFullName();
        const ruleGrammar = this.getGAstProductions()[ruleName];
        // TODO: getLookaheadPathsForOr can be slow for large enough maxLookahead and certain grammars, consider caching ?
        const lookAheadPathsPerAlternative = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLookaheadPathsForOr"])(occurrence, ruleGrammar, this.maxLookahead);
        const actualTokens = [];
        for(let i = 1; i <= this.maxLookahead; i++){
            actualTokens.push(this.LA(i));
        }
        const previousToken = this.LA(0);
        const errMsg = this.errorMessageProvider.buildNoViableAltMessage({
            expectedPathsPerAlt: lookAheadPathsPerAlternative,
            actual: actualTokens,
            previous: previousToken,
            customUserDescription: errMsgTypes,
            ruleName: this.getCurrRuleFullName()
        });
        throw this.SAVE_ERROR(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoViableAltException"](errMsg, this.LA(1), previousToken));
    }
} //# sourceMappingURL=error_handler.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ContentAssist": (()=>ContentAssist)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/interpreter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js [app-client] (ecmascript) <export default as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js [app-client] (ecmascript) <export default as first>");
;
;
class ContentAssist {
    initContentAssist() {}
    computeContentAssist(startRuleName, precedingInput) {
        const startRuleGast = this.gastProductionsCache[startRuleName];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isUndefined$3e$__["isUndefined"])(startRuleGast)) {
            throw Error(`Rule ->${startRuleName}<- does not exist in this grammar.`);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextPossibleTokensAfter"])([
            startRuleGast
        ], precedingInput, this.tokenMatcher, this.maxLookahead);
    }
    // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
    // TODO: should this be more explicitly part of the public API?
    getNextPossibleTokenTypes(grammarPath) {
        const topRuleName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__first$3e$__["first"])(grammarPath.ruleStack);
        const gastProductions = this.getGAstProductions();
        const topProduction = gastProductions[topRuleName];
        const nextPossibleTokenTypes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$interpreter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextAfterTokenWalker"](topProduction, grammarPath).startWalking();
        return nextPossibleTokenTypes;
    }
} //# sourceMappingURL=context_assist.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/gast_recorder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GastRecorder": (()=>GastRecorder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__last$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js [app-client] (ecmascript) <export default as last>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isFunction$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js [app-client] (ecmascript) <export default as isFunction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js [app-client] (ecmascript) <export default as isArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$some$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__some$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/some.js [app-client] (ecmascript) <export default as some>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
;
;
;
;
;
;
;
const RECORDING_NULL_OBJECT = {
    description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(RECORDING_NULL_OBJECT);
const HANDLE_SEPARATOR = true;
const MAX_METHOD_IDX = Math.pow(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BITS_FOR_OCCURRENCE_IDX"]) - 1;
const RFT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createToken"])({
    name: "RECORDING_PHASE_TOKEN",
    pattern: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].NA
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["augmentTokenTypes"])([
    RFT
]);
const RECORDING_PHASE_TOKEN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTokenInstance"])(RFT, "This IToken indicates the Parser is in Recording Phase\n\t" + "" + "See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details", // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
// cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
-1, -1, -1, -1, -1, -1);
Object.freeze(RECORDING_PHASE_TOKEN);
const RECORDING_PHASE_CSTNODE = {
    name: "This CSTNode indicates the Parser is in Recording Phase\n\t" + "See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
    children: {}
};
class GastRecorder {
    initGastRecorder(config) {
        this.recordingProdStack = [];
        this.RECORDING_PHASE = false;
    }
    enableRecording() {
        this.RECORDING_PHASE = true;
        this.TRACE_INIT("Enable Recording", ()=>{
            /**
             * Warning Dark Voodoo Magic upcoming!
             * We are "replacing" the public parsing DSL methods API
             * With **new** alternative implementations on the Parser **instance**
             *
             * So far this is the only way I've found to avoid performance regressions during parsing time.
             * - Approx 30% performance regression was measured on Chrome 75 Canary when attempting to replace the "internal"
             *   implementations directly instead.
             */ for(let i = 0; i < 10; i++){
                const idx = i > 0 ? i : "";
                this[`CONSUME${idx}`] = function(arg1, arg2) {
                    return this.consumeInternalRecord(arg1, i, arg2);
                };
                this[`SUBRULE${idx}`] = function(arg1, arg2) {
                    return this.subruleInternalRecord(arg1, i, arg2);
                };
                this[`OPTION${idx}`] = function(arg1) {
                    return this.optionInternalRecord(arg1, i);
                };
                this[`OR${idx}`] = function(arg1) {
                    return this.orInternalRecord(arg1, i);
                };
                this[`MANY${idx}`] = function(arg1) {
                    this.manyInternalRecord(i, arg1);
                };
                this[`MANY_SEP${idx}`] = function(arg1) {
                    this.manySepFirstInternalRecord(i, arg1);
                };
                this[`AT_LEAST_ONE${idx}`] = function(arg1) {
                    this.atLeastOneInternalRecord(i, arg1);
                };
                this[`AT_LEAST_ONE_SEP${idx}`] = function(arg1) {
                    this.atLeastOneSepFirstInternalRecord(i, arg1);
                };
            }
            // DSL methods with the idx(suffix) as an argument
            this[`consume`] = function(idx, arg1, arg2) {
                return this.consumeInternalRecord(arg1, idx, arg2);
            };
            this[`subrule`] = function(idx, arg1, arg2) {
                return this.subruleInternalRecord(arg1, idx, arg2);
            };
            this[`option`] = function(idx, arg1) {
                return this.optionInternalRecord(arg1, idx);
            };
            this[`or`] = function(idx, arg1) {
                return this.orInternalRecord(arg1, idx);
            };
            this[`many`] = function(idx, arg1) {
                this.manyInternalRecord(idx, arg1);
            };
            this[`atLeastOne`] = function(idx, arg1) {
                this.atLeastOneInternalRecord(idx, arg1);
            };
            this.ACTION = this.ACTION_RECORD;
            this.BACKTRACK = this.BACKTRACK_RECORD;
            this.LA = this.LA_RECORD;
        });
    }
    disableRecording() {
        this.RECORDING_PHASE = false;
        // By deleting these **instance** properties, any future invocation
        // will be deferred to the original methods on the **prototype** object
        // This seems to get rid of any incorrect optimizations that V8 may
        // do during the recording phase.
        this.TRACE_INIT("Deleting Recording methods", ()=>{
            const that = this;
            for(let i = 0; i < 10; i++){
                const idx = i > 0 ? i : "";
                delete that[`CONSUME${idx}`];
                delete that[`SUBRULE${idx}`];
                delete that[`OPTION${idx}`];
                delete that[`OR${idx}`];
                delete that[`MANY${idx}`];
                delete that[`MANY_SEP${idx}`];
                delete that[`AT_LEAST_ONE${idx}`];
                delete that[`AT_LEAST_ONE_SEP${idx}`];
            }
            delete that[`consume`];
            delete that[`subrule`];
            delete that[`option`];
            delete that[`or`];
            delete that[`many`];
            delete that[`atLeastOne`];
            delete that.ACTION;
            delete that.BACKTRACK;
            delete that.LA;
        });
    }
    //   Parser methods are called inside an ACTION?
    //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
    // @ts-expect-error -- noop place holder
    ACTION_RECORD(impl) {
    // NO-OP during recording
    }
    // Executing backtracking logic will break our recording logic assumptions
    BACKTRACK_RECORD(grammarRule, args) {
        return ()=>true;
    }
    // LA is part of the official API and may be used for custom lookahead logic
    // by end users who may forget to wrap it in ACTION or inside a GATE
    LA_RECORD(howMuch) {
        // We cannot use the RECORD_PHASE_TOKEN here because someone may depend
        // On LA return EOF at the end of the input so an infinite loop may occur.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_OF_FILE"];
    }
    topLevelRuleRecord(name, def) {
        try {
            const newTopLevelRule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rule"]({
                definition: [],
                name: name
            });
            newTopLevelRule.name = name;
            this.recordingProdStack.push(newTopLevelRule);
            def.call(this);
            this.recordingProdStack.pop();
            return newTopLevelRule;
        } catch (originalError) {
            if (originalError.KNOWN_RECORDER_ERROR !== true) {
                try {
                    originalError.message = originalError.message + '\n\t This error was thrown during the "grammar recording phase" For more info see:\n\t' + "https://chevrotain.io/docs/guide/internals.html#grammar-recording";
                } catch (mutabilityError) {
                    // We may not be able to modify the original error object
                    throw originalError;
                }
            }
            throw originalError;
        }
    }
    // Implementation of parsing DSL
    optionInternalRecord(actionORMethodDef, occurrence) {
        return recordProd.call(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"], actionORMethodDef, occurrence);
    }
    atLeastOneInternalRecord(occurrence, actionORMethodDef) {
        recordProd.call(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatory"], actionORMethodDef, occurrence);
    }
    atLeastOneSepFirstInternalRecord(occurrence, options) {
        recordProd.call(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionMandatoryWithSeparator"], options, occurrence, HANDLE_SEPARATOR);
    }
    manyInternalRecord(occurrence, actionORMethodDef) {
        recordProd.call(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repetition"], actionORMethodDef, occurrence);
    }
    manySepFirstInternalRecord(occurrence, options) {
        recordProd.call(this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepetitionWithSeparator"], options, occurrence, HANDLE_SEPARATOR);
    }
    orInternalRecord(altsOrOpts, occurrence) {
        return recordOrProd.call(this, altsOrOpts, occurrence);
    }
    subruleInternalRecord(ruleToCall, occurrence, options) {
        assertMethodIdxIsValid(occurrence);
        if (!ruleToCall || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(ruleToCall, "ruleName") === false) {
            const error = new Error(`<SUBRULE${getIdxSuffix(occurrence)}> argument is invalid` + ` expecting a Parser method reference but got: <${JSON.stringify(ruleToCall)}>` + `\n inside top level rule: <${this.recordingProdStack[0].name}>`);
            error.KNOWN_RECORDER_ERROR = true;
            throw error;
        }
        const prevProd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__last$3e$__["last"])(this.recordingProdStack);
        const ruleName = ruleToCall.ruleName;
        const newNoneTerminal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonTerminal"]({
            idx: occurrence,
            nonTerminalName: ruleName,
            label: options === null || options === void 0 ? void 0 : options.LABEL,
            // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
            referencedRule: undefined
        });
        prevProd.definition.push(newNoneTerminal);
        return this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
    }
    consumeInternalRecord(tokType, occurrence, options) {
        assertMethodIdxIsValid(occurrence);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasShortKeyProperty"])(tokType)) {
            const error = new Error(`<CONSUME${getIdxSuffix(occurrence)}> argument is invalid` + ` expecting a TokenType reference but got: <${JSON.stringify(tokType)}>` + `\n inside top level rule: <${this.recordingProdStack[0].name}>`);
            error.KNOWN_RECORDER_ERROR = true;
            throw error;
        }
        const prevProd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__last$3e$__["last"])(this.recordingProdStack);
        const newNoneTerminal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]({
            idx: occurrence,
            terminalType: tokType,
            label: options === null || options === void 0 ? void 0 : options.LABEL
        });
        prevProd.definition.push(newNoneTerminal);
        return RECORDING_PHASE_TOKEN;
    }
}
function recordProd(prodConstructor, mainProdArg, occurrence, handleSep = false) {
    assertMethodIdxIsValid(occurrence);
    const prevProd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__last$3e$__["last"])(this.recordingProdStack);
    const grammarAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isFunction$3e$__["isFunction"])(mainProdArg) ? mainProdArg : mainProdArg.DEF;
    const newProd = new prodConstructor({
        definition: [],
        idx: occurrence
    });
    if (handleSep) {
        newProd.separator = mainProdArg.SEP;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(mainProdArg, "MAX_LOOKAHEAD")) {
        newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
    }
    this.recordingProdStack.push(newProd);
    grammarAction.call(this);
    prevProd.definition.push(newProd);
    this.recordingProdStack.pop();
    return RECORDING_NULL_OBJECT;
}
function recordOrProd(mainProdArg, occurrence) {
    assertMethodIdxIsValid(occurrence);
    const prevProd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__last$3e$__["last"])(this.recordingProdStack);
    // Only an array of alternatives
    const hasOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isArray$3e$__["isArray"])(mainProdArg) === false;
    const alts = hasOptions === false ? mainProdArg : mainProdArg.DEF;
    const newOrProd = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternation"]({
        definition: [],
        idx: occurrence,
        ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === true
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(mainProdArg, "MAX_LOOKAHEAD")) {
        newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
    }
    const hasPredicates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$some$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__some$3e$__["some"])(alts, (currAlt)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isFunction$3e$__["isFunction"])(currAlt.GATE));
    newOrProd.hasPredicates = hasPredicates;
    prevProd.definition.push(newOrProd);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(alts, (currAlt)=>{
        const currAltFlat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alternative"]({
            definition: []
        });
        newOrProd.definition.push(currAltFlat);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(currAlt, "IGNORE_AMBIGUITIES")) {
            currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES; // assumes end user provides the correct config value/type
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(currAlt, "GATE")) {
            currAltFlat.ignoreAmbiguities = true;
        }
        this.recordingProdStack.push(currAltFlat);
        currAlt.ALT.call(this);
        this.recordingProdStack.pop();
    });
    return RECORDING_NULL_OBJECT;
}
function getIdxSuffix(idx) {
    return idx === 0 ? "" : `${idx}`;
}
function assertMethodIdxIsValid(idx) {
    if (idx < 0 || idx > MAX_METHOD_IDX) {
        const error = new Error(// The stack trace will contain all the needed details
        `Invalid DSL Method idx value: <${idx}>\n\t` + `Idx value must be a none negative value smaller than ${MAX_METHOD_IDX + 1}`);
        error.KNOWN_RECORDER_ERROR = true;
        throw error;
    }
} //# sourceMappingURL=gast_recorder.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/perf_tracer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PerformanceTracer": (()=>PerformanceTracer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/timer.js [app-client] (ecmascript)");
;
;
;
class PerformanceTracer {
    initPerformanceTracer(config) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "traceInitPerf")) {
            const userTraceInitPerf = config.traceInitPerf;
            const traceIsNumber = typeof userTraceInitPerf === "number";
            this.traceInitMaxIdent = traceIsNumber ? userTraceInitPerf : Infinity;
            this.traceInitPerf = traceIsNumber ? userTraceInitPerf > 0 : userTraceInitPerf; // assumes end user provides the correct config value/type
        } else {
            this.traceInitMaxIdent = 0;
            this.traceInitPerf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PARSER_CONFIG"].traceInitPerf;
        }
        this.traceInitIndent = -1;
    }
    TRACE_INIT(phaseDesc, phaseImpl) {
        // No need to optimize this using NOOP pattern because
        // It is not called in a hot spot...
        if (this.traceInitPerf === true) {
            this.traceInitIndent++;
            const indent = new Array(this.traceInitIndent + 1).join("\t");
            if (this.traceInitIndent < this.traceInitMaxIdent) {
                console.log(`${indent}--> <${phaseDesc}>`);
            }
            const { time, value } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timer"])(phaseImpl);
            /* istanbul ignore next - Difficult to reproduce specific performance behavior (>10ms) in tests */ const traceMethod = time > 10 ? console.warn : console.log;
            if (this.traceInitIndent < this.traceInitMaxIdent) {
                traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
            }
            this.traceInitIndent--;
            return value;
        } else {
            return phaseImpl();
        }
    }
} //# sourceMappingURL=perf_tracer.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/utils/apply_mixins.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "applyMixins": (()=>applyMixins)
});
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach((baseCtor)=>{
        const baseProto = baseCtor.prototype;
        Object.getOwnPropertyNames(baseProto).forEach((propName)=>{
            if (propName === "constructor") {
                return;
            }
            const basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
            // Handle Accessors
            if (basePropDescriptor && (basePropDescriptor.get || basePropDescriptor.set)) {
                Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
            } else {
                derivedCtor.prototype[propName] = baseCtor.prototype[propName];
            }
        });
    });
} //# sourceMappingURL=apply_mixins.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CstParser": (()=>CstParser),
    "DEFAULT_PARSER_CONFIG": (()=>DEFAULT_PARSER_CONFIG),
    "DEFAULT_RULE_CONFIG": (()=>DEFAULT_RULE_CONFIG),
    "EMPTY_ALT": (()=>EMPTY_ALT),
    "END_OF_FILE": (()=>END_OF_FILE),
    "EmbeddedActionsParser": (()=>EmbeddedActionsParser),
    "Parser": (()=>Parser),
    "ParserDefinitionErrorType": (()=>ParserDefinitionErrorType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$follow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/follow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/errors_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$gast$2f$gast_resolver_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$recoverable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$looksahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$tree_builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$lexer_adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$recognizer_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$recognizer_engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$error_handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$context_assist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$gast_recorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/gast_recorder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$perf_tracer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/traits/perf_tracer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$utils$2f$apply_mixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/utils/apply_mixins.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$to$2d$fast$2d$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+utils@11.0.3/node_modules/@chevrotain/utils/lib/src/to-fast-properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/forEach.js [app-client] (ecmascript) <export default as forEach>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js [app-client] (ecmascript) <export default as values>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-client] (ecmascript) <export default as isEmpty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js [app-client] (ecmascript) <export default as map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/has.js [app-client] (ecmascript) <export default as has>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clone.js [app-client] (ecmascript) <export default as clone>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const END_OF_FILE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTokenInstance"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOF"], "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(END_OF_FILE);
const DEFAULT_PARSER_CONFIG = Object.freeze({
    recoveryEnabled: false,
    maxLookahead: 3,
    dynamicTokensEnabled: false,
    outputCst: true,
    errorMessageProvider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultParserErrorProvider"],
    nodeLocationTracking: "none",
    traceInitPerf: false,
    skipValidations: false
});
const DEFAULT_RULE_CONFIG = Object.freeze({
    recoveryValueFunc: ()=>undefined,
    resyncEnabled: true
});
var ParserDefinitionErrorType;
(function(ParserDefinitionErrorType) {
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
    ParserDefinitionErrorType[ParserDefinitionErrorType["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
    ParserDefinitionErrorType[ParserDefinitionErrorType["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
    ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["NO_NON_EMPTY_LOOKAHEAD"] = 10] = "NO_NON_EMPTY_LOOKAHEAD";
    ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_PREFIX_ALTS"] = 11] = "AMBIGUOUS_PREFIX_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["TOO_MANY_ALTS"] = 12] = "TOO_MANY_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["CUSTOM_LOOKAHEAD_VALIDATION"] = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ParserDefinitionErrorType || (ParserDefinitionErrorType = {}));
function EMPTY_ALT(value = undefined) {
    return function() {
        return value;
    };
}
class Parser {
    /**
     *  @deprecated use the **instance** method with the same name instead
     */ static performSelfAnalysis(parserInstance) {
        throw Error("The **static** `performSelfAnalysis` method has been deprecated." + "\t\nUse the **instance** method with the same name instead.");
    }
    performSelfAnalysis() {
        this.TRACE_INIT("performSelfAnalysis", ()=>{
            let defErrorsMsgs;
            this.selfAnalysisDone = true;
            const className = this.className;
            this.TRACE_INIT("toFastProps", ()=>{
                // Without this voodoo magic the parser would be x3-x4 slower
                // It seems it is better to invoke `toFastProperties` **before**
                // Any manipulations of the `this` object done during the recording phase.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$utils$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$utils$2f$lib$2f$src$2f$to$2d$fast$2d$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFastProperties"])(this);
            });
            this.TRACE_INIT("Grammar Recording", ()=>{
                try {
                    this.enableRecording();
                    // Building the GAST
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$forEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forEach$3e$__["forEach"])(this.definedRulesNames, (currRuleName)=>{
                        const wrappedRule = this[currRuleName];
                        const originalGrammarAction = wrappedRule["originalGrammarAction"];
                        let recordedRuleGast;
                        this.TRACE_INIT(`${currRuleName} Rule`, ()=>{
                            recordedRuleGast = this.topLevelRuleRecord(currRuleName, originalGrammarAction);
                        });
                        this.gastProductionsCache[currRuleName] = recordedRuleGast;
                    });
                } finally{
                    this.disableRecording();
                }
            });
            let resolverErrors = [];
            this.TRACE_INIT("Grammar Resolving", ()=>{
                resolverErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$gast$2f$gast_resolver_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveGrammar"])({
                    rules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.gastProductionsCache)
                });
                this.definitionErrors = this.definitionErrors.concat(resolverErrors);
            });
            this.TRACE_INIT("Grammar Validations", ()=>{
                // only perform additional grammar validations IFF no resolving errors have occurred.
                // as unresolved grammar may lead to unhandled runtime exceptions in the follow up validations.
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(resolverErrors) && this.skipValidations === false) {
                    const validationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$gast$2f$gast_resolver_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateGrammar"])({
                        rules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.gastProductionsCache),
                        tokenTypes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.tokensMap),
                        errMsgProvider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGrammarValidatorErrorProvider"],
                        grammarName: className
                    });
                    const lookaheadValidationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLookahead"])({
                        lookaheadStrategy: this.lookaheadStrategy,
                        rules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.gastProductionsCache),
                        tokenTypes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.tokensMap),
                        grammarName: className
                    });
                    this.definitionErrors = this.definitionErrors.concat(validationErrors, lookaheadValidationErrors);
                }
            });
            // this analysis may fail if the grammar is not perfectly valid
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(this.definitionErrors)) {
                // The results of these computations are not needed unless error recovery is enabled.
                if (this.recoveryEnabled) {
                    this.TRACE_INIT("computeAllProdsFollows", ()=>{
                        const allFollows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$follow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeAllProdsFollows"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.gastProductionsCache));
                        this.resyncFollows = allFollows;
                    });
                }
                this.TRACE_INIT("ComputeLookaheadFunctions", ()=>{
                    var _a, _b;
                    (_b = (_a = this.lookaheadStrategy).initialize) === null || _b === void 0 ? void 0 : _b.call(_a, {
                        rules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.gastProductionsCache)
                    });
                    this.preComputeLookaheadFunctions((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__values$3e$__["values"])(this.gastProductionsCache));
                });
            }
            if (!Parser.DEFER_DEFINITION_ERRORS_HANDLING && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEmpty$3e$__["isEmpty"])(this.definitionErrors)) {
                defErrorsMsgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__map$3e$__["map"])(this.definitionErrors, (defError)=>defError.message);
                throw new Error(`Parser Definition Errors detected:\n ${defErrorsMsgs.join("\n-------------------------------\n")}`);
            }
        });
    }
    constructor(tokenVocabulary, config){
        this.definitionErrors = [];
        this.selfAnalysisDone = false;
        const that = this;
        that.initErrorHandler(config);
        that.initLexerAdapter();
        that.initLooksAhead(config);
        that.initRecognizerEngine(tokenVocabulary, config);
        that.initRecoverable(config);
        that.initTreeBuilder(config);
        that.initContentAssist();
        that.initGastRecorder(config);
        that.initPerformanceTracer(config);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "ignoredIssues")) {
            throw new Error("The <ignoredIssues> IParserConfig property has been deprecated.\n\t" + "Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n\t" + "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n\t" + "For further details.");
        }
        this.skipValidations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$has$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__has$3e$__["has"])(config, "skipValidations") ? config.skipValidations // casting assumes the end user passing the correct type
         : DEFAULT_PARSER_CONFIG.skipValidations;
    }
}
// Set this flag to true if you don't want the Parser to throw error when problems in it's definition are detected.
// (normally during the parser's constructor).
// This is a design time flag, it will not affect the runtime error handling of the parser, just design time errors,
// for example: duplicate rule names, referencing an unresolved subrule, ect...
// This flag should not be enabled during normal usage, it is used in special situations, for example when
// needing to display the parser definition errors in some GUI(online playground).
Parser.DEFER_DEFINITION_ERRORS_HANDLING = false;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$utils$2f$apply_mixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyMixins"])(Parser, [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$recoverable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Recoverable"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$looksahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LooksAhead"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$tree_builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeBuilder"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$lexer_adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexerAdapter"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$recognizer_engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecognizerEngine"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$recognizer_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecognizerApi"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$error_handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorHandler"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$context_assist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentAssist"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$gast_recorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GastRecorder"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$traits$2f$perf_tracer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceTracer"]
]);
class CstParser extends Parser {
    constructor(tokenVocabulary, config = DEFAULT_PARSER_CONFIG){
        const configClone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(config);
        configClone.outputCst = true;
        super(tokenVocabulary, configClone);
    }
}
class EmbeddedActionsParser extends Parser {
    constructor(tokenVocabulary, config = DEFAULT_PARSER_CONFIG){
        const configClone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__clone$3e$__["clone"])(config);
        configClone.outputCst = false;
        super(tokenVocabulary, configClone);
    }
} //# sourceMappingURL=parser.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/diagrams/render_public.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createSyntaxDiagramsCode": (()=>createSyntaxDiagramsCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/version.js [app-client] (ecmascript)");
;
function createSyntaxDiagramsCode(grammar, { resourceBase = `https://unpkg.com/chevrotain@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]}/diagrams/`, css = `https://unpkg.com/chevrotain@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]}/diagrams/diagrams.css` } = {}) {
    const header = `
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`;
    const cssHtml = `
<link rel='stylesheet' href='${css}'>
`;
    const scripts = `
<script src='${resourceBase}vendor/railroad-diagrams.js'></script>
<script src='${resourceBase}src/diagrams_builder.js'></script>
<script src='${resourceBase}src/diagrams_behavior.js'></script>
<script src='${resourceBase}src/main.js'></script>
`;
    const diagramsDiv = `
<div id="diagrams" align="center"></div>    
`;
    const serializedGrammar = `
<script>
    window.serializedGrammar = ${JSON.stringify(grammar, null, "  ")};
</script>
`;
    const initLogic = `
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
</script>
`;
    return header + cssHtml + scripts + diagramsDiv + serializedGrammar + initLogic;
} //# sourceMappingURL=render_public.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/api.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* istanbul ignore file - tricky to import some things from this module during testing */ // semantic version
__turbopack_esm__({
    "Parser": (()=>Parser),
    "clearCache": (()=>clearCache)
});
;
;
;
;
;
;
;
;
;
;
;
;
function clearCache() {
    console.warn("The clearCache function was 'soft' removed from the Chevrotain API." + "\n\t It performs no action other than printing this message." + "\n\t Please avoid using it as it will be completely removed in the future");
}
;
class Parser {
    constructor(){
        throw new Error("The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.\t\n" + "See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0");
    }
} //# sourceMappingURL=api.js.map
}}),
"[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/api.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/lookahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$llk_lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/llk_lookahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/errors_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$exceptions_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/exceptions_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer_errors_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$gast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$gast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+gast@11.0.3/node_modules/@chevrotain/gast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$cst$2d$dts$2d$gen$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$cst$2d$dts$2d$gen$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+cst-dts-gen@11.0.3/node_modules/@chevrotain/cst-dts-gen/lib/src/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$diagrams$2f$render_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/diagrams/render_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/api.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=4f1d5_chevrotain_lib_src_7b323e._.js.map