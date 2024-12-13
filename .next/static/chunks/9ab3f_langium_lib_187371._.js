(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/9ab3f_langium_lib_187371._.js", {

"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "AbstractAstReflection": (()=>AbstractAstReflection),
    "isAstNode": (()=>isAstNode),
    "isAstNodeDescription": (()=>isAstNodeDescription),
    "isCompositeCstNode": (()=>isCompositeCstNode),
    "isLeafCstNode": (()=>isLeafCstNode),
    "isLinkingError": (()=>isLinkingError),
    "isReference": (()=>isReference),
    "isRootCstNode": (()=>isRootCstNode)
});
function isAstNode(obj) {
    return typeof obj === 'object' && obj !== null && typeof obj.$type === 'string';
}
function isReference(obj) {
    return typeof obj === 'object' && obj !== null && typeof obj.$refText === 'string';
}
function isAstNodeDescription(obj) {
    return typeof obj === 'object' && obj !== null && typeof obj.name === 'string' && typeof obj.type === 'string' && typeof obj.path === 'string';
}
function isLinkingError(obj) {
    return typeof obj === 'object' && obj !== null && isAstNode(obj.container) && isReference(obj.reference) && typeof obj.message === 'string';
}
class AbstractAstReflection {
    constructor(){
        this.subtypes = {};
        this.allSubtypes = {};
    }
    isInstance(node, type) {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }
    isSubtype(subtype, supertype) {
        if (subtype === supertype) {
            return true;
        }
        let nested = this.subtypes[subtype];
        if (!nested) {
            nested = this.subtypes[subtype] = {};
        }
        const existing = nested[supertype];
        if (existing !== undefined) {
            return existing;
        } else {
            const result = this.computeIsSubtype(subtype, supertype);
            nested[supertype] = result;
            return result;
        }
    }
    getAllSubTypes(type) {
        const existing = this.allSubtypes[type];
        if (existing) {
            return existing;
        } else {
            const allTypes = this.getAllTypes();
            const types = [];
            for (const possibleSubType of allTypes){
                if (this.isSubtype(possibleSubType, type)) {
                    types.push(possibleSubType);
                }
            }
            this.allSubtypes[type] = types;
            return types;
        }
    }
}
function isCompositeCstNode(node) {
    return typeof node === 'object' && node !== null && Array.isArray(node.content);
}
function isLeafCstNode(node) {
    return typeof node === 'object' && node !== null && typeof node.tokenType === 'object';
}
function isRootCstNode(node) {
    return isCompositeCstNode(node) && typeof node.fullText === 'string';
} //# sourceMappingURL=syntax-tree.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ /**
 * The default implementation of `Stream` works with two input functions:
 *  - The first function creates the initial state of an iteration.
 *  - The second function gets the current state as argument and returns an `IteratorResult`.
 */ __turbopack_esm__({
    "DONE_RESULT": (()=>DONE_RESULT),
    "EMPTY_STREAM": (()=>EMPTY_STREAM),
    "Reduction": (()=>Reduction),
    "StreamImpl": (()=>StreamImpl),
    "TreeStreamImpl": (()=>TreeStreamImpl),
    "stream": (()=>stream)
});
class StreamImpl {
    constructor(startFn, nextFn){
        this.startFn = startFn;
        this.nextFn = nextFn;
    }
    iterator() {
        const iterator = {
            state: this.startFn(),
            next: ()=>this.nextFn(iterator.state),
            [Symbol.iterator]: ()=>iterator
        };
        return iterator;
    }
    [Symbol.iterator]() {
        return this.iterator();
    }
    isEmpty() {
        const iterator = this.iterator();
        return Boolean(iterator.next().done);
    }
    count() {
        const iterator = this.iterator();
        let count = 0;
        let next = iterator.next();
        while(!next.done){
            count++;
            next = iterator.next();
        }
        return count;
    }
    toArray() {
        const result = [];
        const iterator = this.iterator();
        let next;
        do {
            next = iterator.next();
            if (next.value !== undefined) {
                result.push(next.value);
            }
        }while (!next.done)
        return result;
    }
    toSet() {
        return new Set(this);
    }
    toMap(keyFn, valueFn) {
        const entryStream = this.map((element)=>[
                keyFn ? keyFn(element) : element,
                valueFn ? valueFn(element) : element
            ]);
        return new Map(entryStream);
    }
    toString() {
        return this.join();
    }
    concat(other) {
        const iterator = other[Symbol.iterator]();
        return new StreamImpl(()=>({
                first: this.startFn(),
                firstDone: false
            }), (state)=>{
            let result;
            if (!state.firstDone) {
                do {
                    result = this.nextFn(state.first);
                    if (!result.done) {
                        return result;
                    }
                }while (!result.done)
                state.firstDone = true;
            }
            do {
                result = iterator.next();
                if (!result.done) {
                    return result;
                }
            }while (!result.done)
            return DONE_RESULT;
        });
    }
    join(separator = ',') {
        const iterator = this.iterator();
        let value = '';
        let result;
        let addSeparator = false;
        do {
            result = iterator.next();
            if (!result.done) {
                if (addSeparator) {
                    value += separator;
                }
                value += toString(result.value);
            }
            addSeparator = true;
        }while (!result.done)
        return value;
    }
    indexOf(searchElement, fromIndex = 0) {
        const iterator = this.iterator();
        let index = 0;
        let next = iterator.next();
        while(!next.done){
            if (index >= fromIndex && next.value === searchElement) {
                return index;
            }
            next = iterator.next();
            index++;
        }
        return -1;
    }
    every(predicate) {
        const iterator = this.iterator();
        let next = iterator.next();
        while(!next.done){
            if (!predicate(next.value)) {
                return false;
            }
            next = iterator.next();
        }
        return true;
    }
    some(predicate) {
        const iterator = this.iterator();
        let next = iterator.next();
        while(!next.done){
            if (predicate(next.value)) {
                return true;
            }
            next = iterator.next();
        }
        return false;
    }
    forEach(callbackfn) {
        const iterator = this.iterator();
        let index = 0;
        let next = iterator.next();
        while(!next.done){
            callbackfn(next.value, index);
            next = iterator.next();
            index++;
        }
    }
    map(callbackfn) {
        return new StreamImpl(this.startFn, (state)=>{
            const { done, value } = this.nextFn(state);
            if (done) {
                return DONE_RESULT;
            } else {
                return {
                    done: false,
                    value: callbackfn(value)
                };
            }
        });
    }
    filter(predicate) {
        return new StreamImpl(this.startFn, (state)=>{
            let result;
            do {
                result = this.nextFn(state);
                if (!result.done && predicate(result.value)) {
                    return result;
                }
            }while (!result.done)
            return DONE_RESULT;
        });
    }
    nonNullable() {
        return this.filter((e)=>e !== undefined && e !== null);
    }
    reduce(callbackfn, initialValue) {
        const iterator = this.iterator();
        let previousValue = initialValue;
        let next = iterator.next();
        while(!next.done){
            if (previousValue === undefined) {
                previousValue = next.value;
            } else {
                previousValue = callbackfn(previousValue, next.value);
            }
            next = iterator.next();
        }
        return previousValue;
    }
    reduceRight(callbackfn, initialValue) {
        return this.recursiveReduce(this.iterator(), callbackfn, initialValue);
    }
    recursiveReduce(iterator, callbackfn, initialValue) {
        const next = iterator.next();
        if (next.done) {
            return initialValue;
        }
        const previousValue = this.recursiveReduce(iterator, callbackfn, initialValue);
        if (previousValue === undefined) {
            return next.value;
        }
        return callbackfn(previousValue, next.value);
    }
    find(predicate) {
        const iterator = this.iterator();
        let next = iterator.next();
        while(!next.done){
            if (predicate(next.value)) {
                return next.value;
            }
            next = iterator.next();
        }
        return undefined;
    }
    findIndex(predicate) {
        const iterator = this.iterator();
        let index = 0;
        let next = iterator.next();
        while(!next.done){
            if (predicate(next.value)) {
                return index;
            }
            next = iterator.next();
            index++;
        }
        return -1;
    }
    includes(searchElement) {
        const iterator = this.iterator();
        let next = iterator.next();
        while(!next.done){
            if (next.value === searchElement) {
                return true;
            }
            next = iterator.next();
        }
        return false;
    }
    flatMap(callbackfn) {
        return new StreamImpl(()=>({
                this: this.startFn()
            }), (state)=>{
            do {
                if (state.iterator) {
                    const next = state.iterator.next();
                    if (next.done) {
                        state.iterator = undefined;
                    } else {
                        return next;
                    }
                }
                const { done, value } = this.nextFn(state.this);
                if (!done) {
                    const mapped = callbackfn(value);
                    if (isIterable(mapped)) {
                        state.iterator = mapped[Symbol.iterator]();
                    } else {
                        return {
                            done: false,
                            value: mapped
                        };
                    }
                }
            }while (state.iterator)
            return DONE_RESULT;
        });
    }
    flat(depth) {
        if (depth === undefined) {
            depth = 1;
        }
        if (depth <= 0) {
            return this;
        }
        const stream = depth > 1 ? this.flat(depth - 1) : this;
        return new StreamImpl(()=>({
                this: stream.startFn()
            }), (state)=>{
            do {
                if (state.iterator) {
                    const next = state.iterator.next();
                    if (next.done) {
                        state.iterator = undefined;
                    } else {
                        return next;
                    }
                }
                const { done, value } = stream.nextFn(state.this);
                if (!done) {
                    if (isIterable(value)) {
                        state.iterator = value[Symbol.iterator]();
                    } else {
                        return {
                            done: false,
                            value: value
                        };
                    }
                }
            }while (state.iterator)
            return DONE_RESULT;
        });
    }
    head() {
        const iterator = this.iterator();
        const result = iterator.next();
        if (result.done) {
            return undefined;
        }
        return result.value;
    }
    tail(skipCount = 1) {
        return new StreamImpl(()=>{
            const state = this.startFn();
            for(let i = 0; i < skipCount; i++){
                const next = this.nextFn(state);
                if (next.done) {
                    return state;
                }
            }
            return state;
        }, this.nextFn);
    }
    limit(maxSize) {
        return new StreamImpl(()=>({
                size: 0,
                state: this.startFn()
            }), (state)=>{
            state.size++;
            if (state.size > maxSize) {
                return DONE_RESULT;
            }
            return this.nextFn(state.state);
        });
    }
    distinct(by) {
        const set = new Set();
        return this.filter((e)=>{
            const value = by ? by(e) : e;
            if (set.has(value)) {
                return false;
            } else {
                set.add(value);
                return true;
            }
        });
    }
    exclude(other, key) {
        const otherKeySet = new Set();
        for (const item of other){
            const value = key ? key(item) : item;
            otherKeySet.add(value);
        }
        return this.filter((e)=>{
            const ownKey = key ? key(e) : e;
            return !otherKeySet.has(ownKey);
        });
    }
}
function toString(item) {
    if (typeof item === 'string') {
        return item;
    }
    if (typeof item === 'undefined') {
        return 'undefined';
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof item.toString === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return item.toString();
    }
    return Object.prototype.toString.call(item);
}
function isIterable(obj) {
    return !!obj && typeof obj[Symbol.iterator] === 'function';
}
const EMPTY_STREAM = new StreamImpl(()=>undefined, ()=>DONE_RESULT);
const DONE_RESULT = Object.freeze({
    done: true,
    value: undefined
});
function stream(...collections) {
    if (collections.length === 1) {
        const collection = collections[0];
        if (collection instanceof StreamImpl) {
            return collection;
        }
        if (isIterable(collection)) {
            return new StreamImpl(()=>collection[Symbol.iterator](), (iterator)=>iterator.next());
        }
        if (typeof collection.length === 'number') {
            return new StreamImpl(()=>({
                    index: 0
                }), (state)=>{
                if (state.index < collection.length) {
                    return {
                        done: false,
                        value: collection[state.index++]
                    };
                } else {
                    return DONE_RESULT;
                }
            });
        }
    }
    if (collections.length > 1) {
        return new StreamImpl(()=>({
                collIndex: 0,
                arrIndex: 0
            }), (state)=>{
            do {
                if (state.iterator) {
                    const next = state.iterator.next();
                    if (!next.done) {
                        return next;
                    }
                    state.iterator = undefined;
                }
                if (state.array) {
                    if (state.arrIndex < state.array.length) {
                        return {
                            done: false,
                            value: state.array[state.arrIndex++]
                        };
                    }
                    state.array = undefined;
                    state.arrIndex = 0;
                }
                if (state.collIndex < collections.length) {
                    const collection = collections[state.collIndex++];
                    if (isIterable(collection)) {
                        state.iterator = collection[Symbol.iterator]();
                    } else if (collection && typeof collection.length === 'number') {
                        state.array = collection;
                    }
                }
            }while (state.iterator || state.array || state.collIndex < collections.length)
            return DONE_RESULT;
        });
    }
    return EMPTY_STREAM;
}
class TreeStreamImpl extends StreamImpl {
    constructor(root, children, options){
        super(()=>({
                iterators: (options === null || options === void 0 ? void 0 : options.includeRoot) ? [
                    [
                        root
                    ][Symbol.iterator]()
                ] : [
                    children(root)[Symbol.iterator]()
                ],
                pruned: false
            }), (state)=>{
            if (state.pruned) {
                state.iterators.pop();
                state.pruned = false;
            }
            while(state.iterators.length > 0){
                const iterator = state.iterators[state.iterators.length - 1];
                const next = iterator.next();
                if (next.done) {
                    state.iterators.pop();
                } else {
                    state.iterators.push(children(next.value)[Symbol.iterator]());
                    return next;
                }
            }
            return DONE_RESULT;
        });
    }
    iterator() {
        const iterator = {
            state: this.startFn(),
            next: ()=>this.nextFn(iterator.state),
            prune: ()=>{
                iterator.state.pruned = true;
            },
            [Symbol.iterator]: ()=>iterator
        };
        return iterator;
    }
}
var Reduction;
(function(Reduction) {
    /**
     * Compute the sum of a number stream.
     */ function sum(stream) {
        return stream.reduce((a, b)=>a + b, 0);
    }
    Reduction.sum = sum;
    /**
     * Compute the product of a number stream.
     */ function product(stream) {
        return stream.reduce((a, b)=>a * b, 0);
    }
    Reduction.product = product;
    /**
     * Compute the minimum of a number stream. Returns `undefined` if the stream is empty.
     */ function min(stream) {
        return stream.reduce((a, b)=>Math.min(a, b));
    }
    Reduction.min = min;
    /**
     * Compute the maximum of a number stream. Returns `undefined` if the stream is empty.
     */ function max(stream) {
        return stream.reduce((a, b)=>Math.max(a, b));
    }
    Reduction.max = max;
})(Reduction || (Reduction = {})); //# sourceMappingURL=stream.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultNameRegexp": (()=>DefaultNameRegexp),
    "RangeComparison": (()=>RangeComparison),
    "compareRange": (()=>compareRange),
    "findCommentNode": (()=>findCommentNode),
    "findDeclarationNodeAtOffset": (()=>findDeclarationNodeAtOffset),
    "findLeafNodeAtOffset": (()=>findLeafNodeAtOffset),
    "findLeafNodeBeforeOffset": (()=>findLeafNodeBeforeOffset),
    "flattenCst": (()=>flattenCst),
    "getInteriorNodes": (()=>getInteriorNodes),
    "getNextNode": (()=>getNextNode),
    "getPreviousNode": (()=>getPreviousNode),
    "getStartlineNode": (()=>getStartlineNode),
    "inRange": (()=>inRange),
    "isChildNode": (()=>isChildNode),
    "isCommentNode": (()=>isCommentNode),
    "streamCst": (()=>streamCst),
    "toDocumentSegment": (()=>toDocumentSegment),
    "tokenToRange": (()=>tokenToRange)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
;
;
function streamCst(node) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeStreamImpl"](node, (element)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCompositeCstNode"])(element)) {
            return element.content;
        } else {
            return [];
        }
    }, {
        includeRoot: true
    });
}
function flattenCst(node) {
    return streamCst(node).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeafCstNode"]);
}
function isChildNode(child, parent) {
    while(child.container){
        child = child.container;
        if (child === parent) {
            return true;
        }
    }
    return false;
}
function tokenToRange(token) {
    // Chevrotain uses 1-based indices everywhere
    // So we subtract 1 from every value to align with the LSP
    return {
        start: {
            character: token.startColumn - 1,
            line: token.startLine - 1
        },
        end: {
            character: token.endColumn,
            line: token.endLine - 1
        }
    };
}
function toDocumentSegment(node) {
    if (!node) {
        return undefined;
    }
    const { offset, end, range } = node;
    return {
        range,
        offset,
        end,
        length: end - offset
    };
}
var RangeComparison;
(function(RangeComparison) {
    RangeComparison[RangeComparison["Before"] = 0] = "Before";
    RangeComparison[RangeComparison["After"] = 1] = "After";
    RangeComparison[RangeComparison["OverlapFront"] = 2] = "OverlapFront";
    RangeComparison[RangeComparison["OverlapBack"] = 3] = "OverlapBack";
    RangeComparison[RangeComparison["Inside"] = 4] = "Inside";
})(RangeComparison || (RangeComparison = {}));
function compareRange(range, to) {
    if (range.end.line < to.start.line || range.end.line === to.start.line && range.end.character < range.start.character) {
        return RangeComparison.Before;
    } else if (range.start.line > to.end.line || range.start.line === to.end.line && range.start.character > to.end.character) {
        return RangeComparison.After;
    }
    const startInside = range.start.line > to.start.line || range.start.line === to.start.line && range.start.character >= to.start.character;
    const endInside = range.end.line < to.end.line || range.end.line === to.end.line && range.end.character <= to.end.character;
    if (startInside && endInside) {
        return RangeComparison.Inside;
    } else if (startInside) {
        return RangeComparison.OverlapBack;
    } else {
        return RangeComparison.OverlapFront;
    }
}
function inRange(range, to) {
    const comparison = compareRange(range, to);
    return comparison > RangeComparison.After;
}
const DefaultNameRegexp = /^[\w\p{L}]$/u;
function findDeclarationNodeAtOffset(cstNode, offset, nameRegexp = DefaultNameRegexp) {
    if (cstNode) {
        if (offset > 0) {
            const localOffset = offset - cstNode.offset;
            const textAtOffset = cstNode.text.charAt(localOffset);
            if (!nameRegexp.test(textAtOffset)) {
                offset--;
            }
        }
        return findLeafNodeAtOffset(cstNode, offset);
    }
    return undefined;
}
function findCommentNode(cstNode, commentNames) {
    if (cstNode) {
        const previous = getPreviousNode(cstNode, true);
        if (previous && isCommentNode(previous, commentNames)) {
            return previous;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRootCstNode"])(cstNode)) {
            // Go from the first non-hidden node through all nodes in reverse order
            // We do this to find the comment node which directly precedes the root node
            const endIndex = cstNode.content.findIndex((e)=>!e.hidden);
            for(let i = endIndex - 1; i >= 0; i--){
                const child = cstNode.content[i];
                if (isCommentNode(child, commentNames)) {
                    return child;
                }
            }
        }
    }
    return undefined;
}
function isCommentNode(cstNode, commentNames) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeafCstNode"])(cstNode) && commentNames.includes(cstNode.tokenType.name);
}
function findLeafNodeAtOffset(node, offset) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeafCstNode"])(node)) {
        return node;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCompositeCstNode"])(node)) {
        const searchResult = binarySearch(node, offset, false);
        if (searchResult) {
            return findLeafNodeAtOffset(searchResult, offset);
        }
    }
    return undefined;
}
function findLeafNodeBeforeOffset(node, offset) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeafCstNode"])(node)) {
        return node;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCompositeCstNode"])(node)) {
        const searchResult = binarySearch(node, offset, true);
        if (searchResult) {
            return findLeafNodeBeforeOffset(searchResult, offset);
        }
    }
    return undefined;
}
function binarySearch(node, offset, closest) {
    let left = 0;
    let right = node.content.length - 1;
    let closestNode = undefined;
    while(left <= right){
        const middle = Math.floor((left + right) / 2);
        const middleNode = node.content[middle];
        if (middleNode.offset <= offset && middleNode.end > offset) {
            // Found an exact match
            return middleNode;
        }
        if (middleNode.end <= offset) {
            // Update the closest node (less than offset) and move to the right half
            closestNode = closest ? middleNode : undefined;
            left = middle + 1;
        } else {
            // Move to the left half
            right = middle - 1;
        }
    }
    return closestNode;
}
function getPreviousNode(node, hidden = true) {
    while(node.container){
        const parent = node.container;
        let index = parent.content.indexOf(node);
        while(index > 0){
            index--;
            const previous = parent.content[index];
            if (hidden || !previous.hidden) {
                return previous;
            }
        }
        node = parent;
    }
    return undefined;
}
function getNextNode(node, hidden = true) {
    while(node.container){
        const parent = node.container;
        let index = parent.content.indexOf(node);
        const last = parent.content.length - 1;
        while(index < last){
            index++;
            const next = parent.content[index];
            if (hidden || !next.hidden) {
                return next;
            }
        }
        node = parent;
    }
    return undefined;
}
function getStartlineNode(node) {
    if (node.range.start.character === 0) {
        return node;
    }
    const line = node.range.start.line;
    let last = node;
    let index;
    while(node.container){
        const parent = node.container;
        const selfIndex = index !== null && index !== void 0 ? index : parent.content.indexOf(node);
        if (selfIndex === 0) {
            node = parent;
            index = undefined;
        } else {
            index = selfIndex - 1;
            node = parent.content[index];
        }
        if (node.range.start.line !== line) {
            break;
        }
        last = node;
    }
    return last;
}
function getInteriorNodes(start, end) {
    const commonParent = getCommonParent(start, end);
    if (!commonParent) {
        return [];
    }
    return commonParent.parent.content.slice(commonParent.a + 1, commonParent.b);
}
function getCommonParent(a, b) {
    const aParents = getParentChain(a);
    const bParents = getParentChain(b);
    let current;
    for(let i = 0; i < aParents.length && i < bParents.length; i++){
        const aParent = aParents[i];
        const bParent = bParents[i];
        if (aParent.parent === bParent.parent) {
            current = {
                parent: aParent.parent,
                a: aParent.index,
                b: bParent.index
            };
        } else {
            break;
        }
    }
    return current;
}
function getParentChain(node) {
    const chain = [];
    while(node.container){
        const parent = node.container;
        const index = parent.content.indexOf(node);
        chain.push({
            parent,
            index
        });
        node = parent;
    }
    return chain.reverse();
} //# sourceMappingURL=cst-utils.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/errors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "ErrorWithLocation": (()=>ErrorWithLocation),
    "assertUnreachable": (()=>assertUnreachable)
});
class ErrorWithLocation extends Error {
    constructor(node, message){
        super(node ? `${message} at ${node.range.start.line}:${node.range.start.character}` : message);
    }
}
function assertUnreachable(_) {
    throw new Error('Error! The input value was not handled.');
} //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/generated/ast.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * This file was generated by langium-cli 3.0.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/ __turbopack_esm__({
    "AbstractElement": (()=>AbstractElement),
    "AbstractRule": (()=>AbstractRule),
    "AbstractType": (()=>AbstractType),
    "Action": (()=>Action),
    "Alternatives": (()=>Alternatives),
    "ArrayLiteral": (()=>ArrayLiteral),
    "ArrayType": (()=>ArrayType),
    "Assignment": (()=>Assignment),
    "BooleanLiteral": (()=>BooleanLiteral),
    "CharacterRange": (()=>CharacterRange),
    "Condition": (()=>Condition),
    "Conjunction": (()=>Conjunction),
    "CrossReference": (()=>CrossReference),
    "Disjunction": (()=>Disjunction),
    "EndOfFile": (()=>EndOfFile),
    "Grammar": (()=>Grammar),
    "GrammarImport": (()=>GrammarImport),
    "Group": (()=>Group),
    "InferredType": (()=>InferredType),
    "Interface": (()=>Interface),
    "Keyword": (()=>Keyword),
    "LangiumGrammarAstReflection": (()=>LangiumGrammarAstReflection),
    "LangiumGrammarTerminals": (()=>LangiumGrammarTerminals),
    "NamedArgument": (()=>NamedArgument),
    "NegatedToken": (()=>NegatedToken),
    "Negation": (()=>Negation),
    "NumberLiteral": (()=>NumberLiteral),
    "Parameter": (()=>Parameter),
    "ParameterReference": (()=>ParameterReference),
    "ParserRule": (()=>ParserRule),
    "ReferenceType": (()=>ReferenceType),
    "RegexToken": (()=>RegexToken),
    "ReturnType": (()=>ReturnType),
    "RuleCall": (()=>RuleCall),
    "SimpleType": (()=>SimpleType),
    "StringLiteral": (()=>StringLiteral),
    "TerminalAlternatives": (()=>TerminalAlternatives),
    "TerminalGroup": (()=>TerminalGroup),
    "TerminalRule": (()=>TerminalRule),
    "TerminalRuleCall": (()=>TerminalRuleCall),
    "Type": (()=>Type),
    "TypeAttribute": (()=>TypeAttribute),
    "TypeDefinition": (()=>TypeDefinition),
    "UnionType": (()=>UnionType),
    "UnorderedGroup": (()=>UnorderedGroup),
    "UntilToken": (()=>UntilToken),
    "ValueLiteral": (()=>ValueLiteral),
    "Wildcard": (()=>Wildcard),
    "isAbstractElement": (()=>isAbstractElement),
    "isAbstractRule": (()=>isAbstractRule),
    "isAbstractType": (()=>isAbstractType),
    "isAction": (()=>isAction),
    "isAlternatives": (()=>isAlternatives),
    "isArrayLiteral": (()=>isArrayLiteral),
    "isArrayType": (()=>isArrayType),
    "isAssignment": (()=>isAssignment),
    "isBooleanLiteral": (()=>isBooleanLiteral),
    "isCharacterRange": (()=>isCharacterRange),
    "isCondition": (()=>isCondition),
    "isConjunction": (()=>isConjunction),
    "isCrossReference": (()=>isCrossReference),
    "isDisjunction": (()=>isDisjunction),
    "isEndOfFile": (()=>isEndOfFile),
    "isFeatureName": (()=>isFeatureName),
    "isGrammar": (()=>isGrammar),
    "isGrammarImport": (()=>isGrammarImport),
    "isGroup": (()=>isGroup),
    "isInferredType": (()=>isInferredType),
    "isInterface": (()=>isInterface),
    "isKeyword": (()=>isKeyword),
    "isNamedArgument": (()=>isNamedArgument),
    "isNegatedToken": (()=>isNegatedToken),
    "isNegation": (()=>isNegation),
    "isNumberLiteral": (()=>isNumberLiteral),
    "isParameter": (()=>isParameter),
    "isParameterReference": (()=>isParameterReference),
    "isParserRule": (()=>isParserRule),
    "isPrimitiveType": (()=>isPrimitiveType),
    "isReferenceType": (()=>isReferenceType),
    "isRegexToken": (()=>isRegexToken),
    "isReturnType": (()=>isReturnType),
    "isRuleCall": (()=>isRuleCall),
    "isSimpleType": (()=>isSimpleType),
    "isStringLiteral": (()=>isStringLiteral),
    "isTerminalAlternatives": (()=>isTerminalAlternatives),
    "isTerminalGroup": (()=>isTerminalGroup),
    "isTerminalRule": (()=>isTerminalRule),
    "isTerminalRuleCall": (()=>isTerminalRuleCall),
    "isType": (()=>isType),
    "isTypeAttribute": (()=>isTypeAttribute),
    "isTypeDefinition": (()=>isTypeDefinition),
    "isUnionType": (()=>isUnionType),
    "isUnorderedGroup": (()=>isUnorderedGroup),
    "isUntilToken": (()=>isUntilToken),
    "isValueLiteral": (()=>isValueLiteral),
    "isWildcard": (()=>isWildcard),
    "reflection": (()=>reflection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
;
const LangiumGrammarTerminals = {
    ID: /\^?[_a-zA-Z][\w_]*/,
    STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
    NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
    RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
    WS: /\s+/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/
};
const AbstractRule = 'AbstractRule';
function isAbstractRule(item) {
    return reflection.isInstance(item, AbstractRule);
}
const AbstractType = 'AbstractType';
function isAbstractType(item) {
    return reflection.isInstance(item, AbstractType);
}
const Condition = 'Condition';
function isCondition(item) {
    return reflection.isInstance(item, Condition);
}
function isFeatureName(item) {
    return isPrimitiveType(item) || item === 'current' || item === 'entry' || item === 'extends' || item === 'false' || item === 'fragment' || item === 'grammar' || item === 'hidden' || item === 'import' || item === 'interface' || item === 'returns' || item === 'terminal' || item === 'true' || item === 'type' || item === 'infer' || item === 'infers' || item === 'with' || typeof item === 'string' && /\^?[_a-zA-Z][\w_]*/.test(item);
}
function isPrimitiveType(item) {
    return item === 'string' || item === 'number' || item === 'boolean' || item === 'Date' || item === 'bigint';
}
const TypeDefinition = 'TypeDefinition';
function isTypeDefinition(item) {
    return reflection.isInstance(item, TypeDefinition);
}
const ValueLiteral = 'ValueLiteral';
function isValueLiteral(item) {
    return reflection.isInstance(item, ValueLiteral);
}
const AbstractElement = 'AbstractElement';
function isAbstractElement(item) {
    return reflection.isInstance(item, AbstractElement);
}
const ArrayLiteral = 'ArrayLiteral';
function isArrayLiteral(item) {
    return reflection.isInstance(item, ArrayLiteral);
}
const ArrayType = 'ArrayType';
function isArrayType(item) {
    return reflection.isInstance(item, ArrayType);
}
const BooleanLiteral = 'BooleanLiteral';
function isBooleanLiteral(item) {
    return reflection.isInstance(item, BooleanLiteral);
}
const Conjunction = 'Conjunction';
function isConjunction(item) {
    return reflection.isInstance(item, Conjunction);
}
const Disjunction = 'Disjunction';
function isDisjunction(item) {
    return reflection.isInstance(item, Disjunction);
}
const Grammar = 'Grammar';
function isGrammar(item) {
    return reflection.isInstance(item, Grammar);
}
const GrammarImport = 'GrammarImport';
function isGrammarImport(item) {
    return reflection.isInstance(item, GrammarImport);
}
const InferredType = 'InferredType';
function isInferredType(item) {
    return reflection.isInstance(item, InferredType);
}
const Interface = 'Interface';
function isInterface(item) {
    return reflection.isInstance(item, Interface);
}
const NamedArgument = 'NamedArgument';
function isNamedArgument(item) {
    return reflection.isInstance(item, NamedArgument);
}
const Negation = 'Negation';
function isNegation(item) {
    return reflection.isInstance(item, Negation);
}
const NumberLiteral = 'NumberLiteral';
function isNumberLiteral(item) {
    return reflection.isInstance(item, NumberLiteral);
}
const Parameter = 'Parameter';
function isParameter(item) {
    return reflection.isInstance(item, Parameter);
}
const ParameterReference = 'ParameterReference';
function isParameterReference(item) {
    return reflection.isInstance(item, ParameterReference);
}
const ParserRule = 'ParserRule';
function isParserRule(item) {
    return reflection.isInstance(item, ParserRule);
}
const ReferenceType = 'ReferenceType';
function isReferenceType(item) {
    return reflection.isInstance(item, ReferenceType);
}
const ReturnType = 'ReturnType';
function isReturnType(item) {
    return reflection.isInstance(item, ReturnType);
}
const SimpleType = 'SimpleType';
function isSimpleType(item) {
    return reflection.isInstance(item, SimpleType);
}
const StringLiteral = 'StringLiteral';
function isStringLiteral(item) {
    return reflection.isInstance(item, StringLiteral);
}
const TerminalRule = 'TerminalRule';
function isTerminalRule(item) {
    return reflection.isInstance(item, TerminalRule);
}
const Type = 'Type';
function isType(item) {
    return reflection.isInstance(item, Type);
}
const TypeAttribute = 'TypeAttribute';
function isTypeAttribute(item) {
    return reflection.isInstance(item, TypeAttribute);
}
const UnionType = 'UnionType';
function isUnionType(item) {
    return reflection.isInstance(item, UnionType);
}
const Action = 'Action';
function isAction(item) {
    return reflection.isInstance(item, Action);
}
const Alternatives = 'Alternatives';
function isAlternatives(item) {
    return reflection.isInstance(item, Alternatives);
}
const Assignment = 'Assignment';
function isAssignment(item) {
    return reflection.isInstance(item, Assignment);
}
const CharacterRange = 'CharacterRange';
function isCharacterRange(item) {
    return reflection.isInstance(item, CharacterRange);
}
const CrossReference = 'CrossReference';
function isCrossReference(item) {
    return reflection.isInstance(item, CrossReference);
}
const EndOfFile = 'EndOfFile';
function isEndOfFile(item) {
    return reflection.isInstance(item, EndOfFile);
}
const Group = 'Group';
function isGroup(item) {
    return reflection.isInstance(item, Group);
}
const Keyword = 'Keyword';
function isKeyword(item) {
    return reflection.isInstance(item, Keyword);
}
const NegatedToken = 'NegatedToken';
function isNegatedToken(item) {
    return reflection.isInstance(item, NegatedToken);
}
const RegexToken = 'RegexToken';
function isRegexToken(item) {
    return reflection.isInstance(item, RegexToken);
}
const RuleCall = 'RuleCall';
function isRuleCall(item) {
    return reflection.isInstance(item, RuleCall);
}
const TerminalAlternatives = 'TerminalAlternatives';
function isTerminalAlternatives(item) {
    return reflection.isInstance(item, TerminalAlternatives);
}
const TerminalGroup = 'TerminalGroup';
function isTerminalGroup(item) {
    return reflection.isInstance(item, TerminalGroup);
}
const TerminalRuleCall = 'TerminalRuleCall';
function isTerminalRuleCall(item) {
    return reflection.isInstance(item, TerminalRuleCall);
}
const UnorderedGroup = 'UnorderedGroup';
function isUnorderedGroup(item) {
    return reflection.isInstance(item, UnorderedGroup);
}
const UntilToken = 'UntilToken';
function isUntilToken(item) {
    return reflection.isInstance(item, UntilToken);
}
const Wildcard = 'Wildcard';
function isWildcard(item) {
    return reflection.isInstance(item, Wildcard);
}
class LangiumGrammarAstReflection extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAstReflection"] {
    getAllTypes() {
        return [
            'AbstractElement',
            'AbstractRule',
            'AbstractType',
            'Action',
            'Alternatives',
            'ArrayLiteral',
            'ArrayType',
            'Assignment',
            'BooleanLiteral',
            'CharacterRange',
            'Condition',
            'Conjunction',
            'CrossReference',
            'Disjunction',
            'EndOfFile',
            'Grammar',
            'GrammarImport',
            'Group',
            'InferredType',
            'Interface',
            'Keyword',
            'NamedArgument',
            'NegatedToken',
            'Negation',
            'NumberLiteral',
            'Parameter',
            'ParameterReference',
            'ParserRule',
            'ReferenceType',
            'RegexToken',
            'ReturnType',
            'RuleCall',
            'SimpleType',
            'StringLiteral',
            'TerminalAlternatives',
            'TerminalGroup',
            'TerminalRule',
            'TerminalRuleCall',
            'Type',
            'TypeAttribute',
            'TypeDefinition',
            'UnionType',
            'UnorderedGroup',
            'UntilToken',
            'ValueLiteral',
            'Wildcard'
        ];
    }
    computeIsSubtype(subtype, supertype) {
        switch(subtype){
            case Action:
            case Alternatives:
            case Assignment:
            case CharacterRange:
            case CrossReference:
            case EndOfFile:
            case Group:
            case Keyword:
            case NegatedToken:
            case RegexToken:
            case RuleCall:
            case TerminalAlternatives:
            case TerminalGroup:
            case TerminalRuleCall:
            case UnorderedGroup:
            case UntilToken:
            case Wildcard:
                {
                    return this.isSubtype(AbstractElement, supertype);
                }
            case ArrayLiteral:
            case NumberLiteral:
            case StringLiteral:
                {
                    return this.isSubtype(ValueLiteral, supertype);
                }
            case ArrayType:
            case ReferenceType:
            case SimpleType:
            case UnionType:
                {
                    return this.isSubtype(TypeDefinition, supertype);
                }
            case BooleanLiteral:
                {
                    return this.isSubtype(Condition, supertype) || this.isSubtype(ValueLiteral, supertype);
                }
            case Conjunction:
            case Disjunction:
            case Negation:
            case ParameterReference:
                {
                    return this.isSubtype(Condition, supertype);
                }
            case InferredType:
            case Interface:
            case Type:
                {
                    return this.isSubtype(AbstractType, supertype);
                }
            case ParserRule:
                {
                    return this.isSubtype(AbstractRule, supertype) || this.isSubtype(AbstractType, supertype);
                }
            case TerminalRule:
                {
                    return this.isSubtype(AbstractRule, supertype);
                }
            default:
                {
                    return false;
                }
        }
    }
    getReferenceType(refInfo) {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch(referenceId){
            case 'Action:type':
            case 'CrossReference:type':
            case 'Interface:superTypes':
            case 'ParserRule:returnType':
            case 'SimpleType:typeRef':
                {
                    return AbstractType;
                }
            case 'Grammar:hiddenTokens':
            case 'ParserRule:hiddenTokens':
            case 'RuleCall:rule':
                {
                    return AbstractRule;
                }
            case 'Grammar:usedGrammars':
                {
                    return Grammar;
                }
            case 'NamedArgument:parameter':
            case 'ParameterReference:parameter':
                {
                    return Parameter;
                }
            case 'TerminalRuleCall:rule':
                {
                    return TerminalRule;
                }
            default:
                {
                    throw new Error(`${referenceId} is not a valid reference id.`);
                }
        }
    }
    getTypeMetaData(type) {
        switch(type){
            case 'AbstractElement':
                {
                    return {
                        name: 'AbstractElement',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'lookahead'
                            }
                        ]
                    };
                }
            case 'ArrayLiteral':
                {
                    return {
                        name: 'ArrayLiteral',
                        properties: [
                            {
                                name: 'elements',
                                defaultValue: []
                            }
                        ]
                    };
                }
            case 'ArrayType':
                {
                    return {
                        name: 'ArrayType',
                        properties: [
                            {
                                name: 'elementType'
                            }
                        ]
                    };
                }
            case 'BooleanLiteral':
                {
                    return {
                        name: 'BooleanLiteral',
                        properties: [
                            {
                                name: 'true',
                                defaultValue: false
                            }
                        ]
                    };
                }
            case 'Conjunction':
                {
                    return {
                        name: 'Conjunction',
                        properties: [
                            {
                                name: 'left'
                            },
                            {
                                name: 'right'
                            }
                        ]
                    };
                }
            case 'Disjunction':
                {
                    return {
                        name: 'Disjunction',
                        properties: [
                            {
                                name: 'left'
                            },
                            {
                                name: 'right'
                            }
                        ]
                    };
                }
            case 'Grammar':
                {
                    return {
                        name: 'Grammar',
                        properties: [
                            {
                                name: 'definesHiddenTokens',
                                defaultValue: false
                            },
                            {
                                name: 'hiddenTokens',
                                defaultValue: []
                            },
                            {
                                name: 'imports',
                                defaultValue: []
                            },
                            {
                                name: 'interfaces',
                                defaultValue: []
                            },
                            {
                                name: 'isDeclared',
                                defaultValue: false
                            },
                            {
                                name: 'name'
                            },
                            {
                                name: 'rules',
                                defaultValue: []
                            },
                            {
                                name: 'types',
                                defaultValue: []
                            },
                            {
                                name: 'usedGrammars',
                                defaultValue: []
                            }
                        ]
                    };
                }
            case 'GrammarImport':
                {
                    return {
                        name: 'GrammarImport',
                        properties: [
                            {
                                name: 'path'
                            }
                        ]
                    };
                }
            case 'InferredType':
                {
                    return {
                        name: 'InferredType',
                        properties: [
                            {
                                name: 'name'
                            }
                        ]
                    };
                }
            case 'Interface':
                {
                    return {
                        name: 'Interface',
                        properties: [
                            {
                                name: 'attributes',
                                defaultValue: []
                            },
                            {
                                name: 'name'
                            },
                            {
                                name: 'superTypes',
                                defaultValue: []
                            }
                        ]
                    };
                }
            case 'NamedArgument':
                {
                    return {
                        name: 'NamedArgument',
                        properties: [
                            {
                                name: 'calledByName',
                                defaultValue: false
                            },
                            {
                                name: 'parameter'
                            },
                            {
                                name: 'value'
                            }
                        ]
                    };
                }
            case 'Negation':
                {
                    return {
                        name: 'Negation',
                        properties: [
                            {
                                name: 'value'
                            }
                        ]
                    };
                }
            case 'NumberLiteral':
                {
                    return {
                        name: 'NumberLiteral',
                        properties: [
                            {
                                name: 'value'
                            }
                        ]
                    };
                }
            case 'Parameter':
                {
                    return {
                        name: 'Parameter',
                        properties: [
                            {
                                name: 'name'
                            }
                        ]
                    };
                }
            case 'ParameterReference':
                {
                    return {
                        name: 'ParameterReference',
                        properties: [
                            {
                                name: 'parameter'
                            }
                        ]
                    };
                }
            case 'ParserRule':
                {
                    return {
                        name: 'ParserRule',
                        properties: [
                            {
                                name: 'dataType'
                            },
                            {
                                name: 'definesHiddenTokens',
                                defaultValue: false
                            },
                            {
                                name: 'definition'
                            },
                            {
                                name: 'entry',
                                defaultValue: false
                            },
                            {
                                name: 'fragment',
                                defaultValue: false
                            },
                            {
                                name: 'hiddenTokens',
                                defaultValue: []
                            },
                            {
                                name: 'inferredType'
                            },
                            {
                                name: 'name'
                            },
                            {
                                name: 'parameters',
                                defaultValue: []
                            },
                            {
                                name: 'returnType'
                            },
                            {
                                name: 'wildcard',
                                defaultValue: false
                            }
                        ]
                    };
                }
            case 'ReferenceType':
                {
                    return {
                        name: 'ReferenceType',
                        properties: [
                            {
                                name: 'referenceType'
                            }
                        ]
                    };
                }
            case 'ReturnType':
                {
                    return {
                        name: 'ReturnType',
                        properties: [
                            {
                                name: 'name'
                            }
                        ]
                    };
                }
            case 'SimpleType':
                {
                    return {
                        name: 'SimpleType',
                        properties: [
                            {
                                name: 'primitiveType'
                            },
                            {
                                name: 'stringType'
                            },
                            {
                                name: 'typeRef'
                            }
                        ]
                    };
                }
            case 'StringLiteral':
                {
                    return {
                        name: 'StringLiteral',
                        properties: [
                            {
                                name: 'value'
                            }
                        ]
                    };
                }
            case 'TerminalRule':
                {
                    return {
                        name: 'TerminalRule',
                        properties: [
                            {
                                name: 'definition'
                            },
                            {
                                name: 'fragment',
                                defaultValue: false
                            },
                            {
                                name: 'hidden',
                                defaultValue: false
                            },
                            {
                                name: 'name'
                            },
                            {
                                name: 'type'
                            }
                        ]
                    };
                }
            case 'Type':
                {
                    return {
                        name: 'Type',
                        properties: [
                            {
                                name: 'name'
                            },
                            {
                                name: 'type'
                            }
                        ]
                    };
                }
            case 'TypeAttribute':
                {
                    return {
                        name: 'TypeAttribute',
                        properties: [
                            {
                                name: 'defaultValue'
                            },
                            {
                                name: 'isOptional',
                                defaultValue: false
                            },
                            {
                                name: 'name'
                            },
                            {
                                name: 'type'
                            }
                        ]
                    };
                }
            case 'UnionType':
                {
                    return {
                        name: 'UnionType',
                        properties: [
                            {
                                name: 'types',
                                defaultValue: []
                            }
                        ]
                    };
                }
            case 'Action':
                {
                    return {
                        name: 'Action',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'feature'
                            },
                            {
                                name: 'inferredType'
                            },
                            {
                                name: 'lookahead'
                            },
                            {
                                name: 'operator'
                            },
                            {
                                name: 'type'
                            }
                        ]
                    };
                }
            case 'Alternatives':
                {
                    return {
                        name: 'Alternatives',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'elements',
                                defaultValue: []
                            },
                            {
                                name: 'lookahead'
                            }
                        ]
                    };
                }
            case 'Assignment':
                {
                    return {
                        name: 'Assignment',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'feature'
                            },
                            {
                                name: 'lookahead'
                            },
                            {
                                name: 'operator'
                            },
                            {
                                name: 'terminal'
                            }
                        ]
                    };
                }
            case 'CharacterRange':
                {
                    return {
                        name: 'CharacterRange',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'left'
                            },
                            {
                                name: 'lookahead'
                            },
                            {
                                name: 'right'
                            }
                        ]
                    };
                }
            case 'CrossReference':
                {
                    return {
                        name: 'CrossReference',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'deprecatedSyntax',
                                defaultValue: false
                            },
                            {
                                name: 'lookahead'
                            },
                            {
                                name: 'terminal'
                            },
                            {
                                name: 'type'
                            }
                        ]
                    };
                }
            case 'EndOfFile':
                {
                    return {
                        name: 'EndOfFile',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'lookahead'
                            }
                        ]
                    };
                }
            case 'Group':
                {
                    return {
                        name: 'Group',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'elements',
                                defaultValue: []
                            },
                            {
                                name: 'guardCondition'
                            },
                            {
                                name: 'lookahead'
                            }
                        ]
                    };
                }
            case 'Keyword':
                {
                    return {
                        name: 'Keyword',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'lookahead'
                            },
                            {
                                name: 'value'
                            }
                        ]
                    };
                }
            case 'NegatedToken':
                {
                    return {
                        name: 'NegatedToken',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'lookahead'
                            },
                            {
                                name: 'terminal'
                            }
                        ]
                    };
                }
            case 'RegexToken':
                {
                    return {
                        name: 'RegexToken',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'lookahead'
                            },
                            {
                                name: 'regex'
                            }
                        ]
                    };
                }
            case 'RuleCall':
                {
                    return {
                        name: 'RuleCall',
                        properties: [
                            {
                                name: 'arguments',
                                defaultValue: []
                            },
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'lookahead'
                            },
                            {
                                name: 'rule'
                            }
                        ]
                    };
                }
            case 'TerminalAlternatives':
                {
                    return {
                        name: 'TerminalAlternatives',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'elements',
                                defaultValue: []
                            },
                            {
                                name: 'lookahead'
                            }
                        ]
                    };
                }
            case 'TerminalGroup':
                {
                    return {
                        name: 'TerminalGroup',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'elements',
                                defaultValue: []
                            },
                            {
                                name: 'lookahead'
                            }
                        ]
                    };
                }
            case 'TerminalRuleCall':
                {
                    return {
                        name: 'TerminalRuleCall',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'lookahead'
                            },
                            {
                                name: 'rule'
                            }
                        ]
                    };
                }
            case 'UnorderedGroup':
                {
                    return {
                        name: 'UnorderedGroup',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'elements',
                                defaultValue: []
                            },
                            {
                                name: 'lookahead'
                            }
                        ]
                    };
                }
            case 'UntilToken':
                {
                    return {
                        name: 'UntilToken',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'lookahead'
                            },
                            {
                                name: 'terminal'
                            }
                        ]
                    };
                }
            case 'Wildcard':
                {
                    return {
                        name: 'Wildcard',
                        properties: [
                            {
                                name: 'cardinality'
                            },
                            {
                                name: 'lookahead'
                            }
                        ]
                    };
                }
            default:
                {
                    return {
                        name: type,
                        properties: []
                    };
                }
        }
    }
}
const reflection = new LangiumGrammarAstReflection(); //# sourceMappingURL=ast.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "assignMandatoryProperties": (()=>assignMandatoryProperties),
    "copyAstNode": (()=>copyAstNode),
    "findLocalReferences": (()=>findLocalReferences),
    "findRootNode": (()=>findRootNode),
    "getContainerOfType": (()=>getContainerOfType),
    "getDocument": (()=>getDocument),
    "hasContainerOfType": (()=>hasContainerOfType),
    "linkContentToContainer": (()=>linkContentToContainer),
    "streamAllContents": (()=>streamAllContents),
    "streamAst": (()=>streamAst),
    "streamContents": (()=>streamContents),
    "streamReferences": (()=>streamReferences)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)");
;
;
;
function linkContentToContainer(node) {
    for (const [name, value] of Object.entries(node)){
        if (!name.startsWith('$')) {
            if (Array.isArray(value)) {
                value.forEach((item, index)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(item)) {
                        item.$container = node;
                        item.$containerProperty = name;
                        item.$containerIndex = index;
                    }
                });
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(value)) {
                value.$container = node;
                value.$containerProperty = name;
            }
        }
    }
}
function getContainerOfType(node, typePredicate) {
    let item = node;
    while(item){
        if (typePredicate(item)) {
            return item;
        }
        item = item.$container;
    }
    return undefined;
}
function hasContainerOfType(node, predicate) {
    let item = node;
    while(item){
        if (predicate(item)) {
            return true;
        }
        item = item.$container;
    }
    return false;
}
function getDocument(node) {
    const rootNode = findRootNode(node);
    const result = rootNode.$document;
    if (!result) {
        throw new Error('AST node has no document.');
    }
    return result;
}
function findRootNode(node) {
    while(node.$container){
        node = node.$container;
    }
    return node;
}
function streamContents(node, options) {
    if (!node) {
        throw new Error('Node must be an AstNode.');
    }
    const range = options === null || options === void 0 ? void 0 : options.range;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamImpl"](()=>({
            keys: Object.keys(node),
            keyIndex: 0,
            arrayIndex: 0
        }), (state)=>{
        while(state.keyIndex < state.keys.length){
            const property = state.keys[state.keyIndex];
            if (!property.startsWith('$')) {
                const value = node[property];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(value)) {
                    state.keyIndex++;
                    if (isAstNodeInRange(value, range)) {
                        return {
                            done: false,
                            value
                        };
                    }
                } else if (Array.isArray(value)) {
                    while(state.arrayIndex < value.length){
                        const index = state.arrayIndex++;
                        const element = value[index];
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(element) && isAstNodeInRange(element, range)) {
                            return {
                                done: false,
                                value: element
                            };
                        }
                    }
                    state.arrayIndex = 0;
                }
            }
            state.keyIndex++;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DONE_RESULT"];
    });
}
function streamAllContents(root, options) {
    if (!root) {
        throw new Error('Root node must be an AstNode.');
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeStreamImpl"](root, (node)=>streamContents(node, options));
}
function streamAst(root, options) {
    if (!root) {
        throw new Error('Root node must be an AstNode.');
    } else if ((options === null || options === void 0 ? void 0 : options.range) && !isAstNodeInRange(root, options.range)) {
        // Return an empty stream if the root node isn't in range
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeStreamImpl"](root, ()=>[]);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeStreamImpl"](root, (node)=>streamContents(node, options), {
        includeRoot: true
    });
}
function isAstNodeInRange(astNode, range) {
    var _a;
    if (!range) {
        return true;
    }
    const nodeRange = (_a = astNode.$cstNode) === null || _a === void 0 ? void 0 : _a.range;
    if (!nodeRange) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inRange"])(nodeRange, range);
}
function streamReferences(node) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamImpl"](()=>({
            keys: Object.keys(node),
            keyIndex: 0,
            arrayIndex: 0
        }), (state)=>{
        while(state.keyIndex < state.keys.length){
            const property = state.keys[state.keyIndex];
            if (!property.startsWith('$')) {
                const value = node[property];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(value)) {
                    state.keyIndex++;
                    return {
                        done: false,
                        value: {
                            reference: value,
                            container: node,
                            property
                        }
                    };
                } else if (Array.isArray(value)) {
                    while(state.arrayIndex < value.length){
                        const index = state.arrayIndex++;
                        const element = value[index];
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(element)) {
                            return {
                                done: false,
                                value: {
                                    reference: element,
                                    container: node,
                                    property,
                                    index
                                }
                            };
                        }
                    }
                    state.arrayIndex = 0;
                }
            }
            state.keyIndex++;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DONE_RESULT"];
    });
}
function findLocalReferences(targetNode, lookup = getDocument(targetNode).parseResult.value) {
    const refs = [];
    streamAst(lookup).forEach((node)=>{
        streamReferences(node).forEach((refInfo)=>{
            if (refInfo.reference.ref === targetNode) {
                refs.push(refInfo.reference);
            }
        });
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(refs);
}
function assignMandatoryProperties(reflection, node) {
    const typeMetaData = reflection.getTypeMetaData(node.$type);
    const genericNode = node;
    for (const property of typeMetaData.properties){
        // Only set the value if the property is not already set and if it has a default value
        if (property.defaultValue !== undefined && genericNode[property.name] === undefined) {
            genericNode[property.name] = copyDefaultValue(property.defaultValue);
        }
    }
}
function copyDefaultValue(propertyType) {
    if (Array.isArray(propertyType)) {
        return [
            ...propertyType.map(copyDefaultValue)
        ];
    } else {
        return propertyType;
    }
}
function copyAstNode(node, buildReference) {
    const copy = {
        $type: node.$type
    };
    for (const [name, value] of Object.entries(node)){
        if (!name.startsWith('$')) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(value)) {
                copy[name] = copyAstNode(value, buildReference);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(value)) {
                copy[name] = buildReference(copy, name, value.$refNode, value.$refText);
            } else if (Array.isArray(value)) {
                const copiedArray = [];
                for (const element of value){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(element)) {
                        copiedArray.push(copyAstNode(element, buildReference));
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(element)) {
                        copiedArray.push(buildReference(copy, name, element.$refNode, element.$refText));
                    } else {
                        copiedArray.push(element);
                    }
                }
                copy[name] = copiedArray;
            } else {
                copy[name] = value;
            }
        }
    }
    linkContentToContainer(copy);
    return copy;
} //# sourceMappingURL=ast-utils.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/regexp-utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "NEWLINE_REGEXP": (()=>NEWLINE_REGEXP),
    "escapeRegExp": (()=>escapeRegExp),
    "getCaseInsensitivePattern": (()=>getCaseInsensitivePattern),
    "getTerminalParts": (()=>getTerminalParts),
    "isMultilineComment": (()=>isMultilineComment),
    "isWhitespace": (()=>isWhitespace),
    "partialMatches": (()=>partialMatches),
    "partialRegExp": (()=>partialRegExp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+regexp-to-ast@11.0.3/node_modules/@chevrotain/regexp-to-ast/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$regexp$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+regexp-to-ast@11.0.3/node_modules/@chevrotain/regexp-to-ast/lib/src/regexp-parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$base$2d$regexp$2d$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chevrotain+regexp-to-ast@11.0.3/node_modules/@chevrotain/regexp-to-ast/lib/src/base-regexp-visitor.js [app-client] (ecmascript)");
;
const NEWLINE_REGEXP = /\r?\n/gm;
const regexpParser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$regexp$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegExpParser"]();
/**
 * This class is in charge of heuristically identifying start/end tokens of terminals.
 *
 * The way this works is by doing the following:
 * 1. Traverse the regular expression in the "start state"
 * 2. Add any encountered sets/single characters to the "start regexp"
 * 3. Once we encounter any variable-length content (i.e. with quantifiers such as +/?/*), we enter the "end state"
 * 4. In the end state, any sets/single characters are added to an "end stack".
 * 5. If we re-encounter any variable-length content we reset the end stack
 * 6. We continue visiting the regex until the end, reseting the end stack and rebuilding it as necessary
 *
 * After traversing a regular expression the `startRegexp/endRegexp` properties allow access to the stored start/end of the terminal
 */ class TerminalRegExpVisitor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chevrotain$2b$regexp$2d$to$2d$ast$40$11$2e$0$2e$3$2f$node_modules$2f40$chevrotain$2f$regexp$2d$to$2d$ast$2f$lib$2f$src$2f$base$2d$regexp$2d$visitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseRegExpVisitor"] {
    constructor(){
        super(...arguments);
        this.isStarting = true;
        this.endRegexpStack = [];
        this.multiline = false;
    }
    get endRegex() {
        return this.endRegexpStack.join('');
    }
    reset(regex) {
        this.multiline = false;
        this.regex = regex;
        this.startRegexp = '';
        this.isStarting = true;
        this.endRegexpStack = [];
    }
    visitGroup(node) {
        if (node.quantifier) {
            this.isStarting = false;
            this.endRegexpStack = [];
        }
    }
    visitCharacter(node) {
        const char = String.fromCharCode(node.value);
        if (!this.multiline && char === '\n') {
            this.multiline = true;
        }
        if (node.quantifier) {
            this.isStarting = false;
            this.endRegexpStack = [];
        } else {
            const escapedChar = escapeRegExp(char);
            this.endRegexpStack.push(escapedChar);
            if (this.isStarting) {
                this.startRegexp += escapedChar;
            }
        }
    }
    visitSet(node) {
        if (!this.multiline) {
            const set = this.regex.substring(node.loc.begin, node.loc.end);
            const regex = new RegExp(set);
            this.multiline = Boolean('\n'.match(regex));
        }
        if (node.quantifier) {
            this.isStarting = false;
            this.endRegexpStack = [];
        } else {
            const set = this.regex.substring(node.loc.begin, node.loc.end);
            this.endRegexpStack.push(set);
            if (this.isStarting) {
                this.startRegexp += set;
            }
        }
    }
    visitChildren(node) {
        if (node.type === 'Group') {
            // Ignore children of groups with quantifier (+/*/?)
            // These groups are unrelated to start/end tokens of terminals
            const group = node;
            if (group.quantifier) {
                return;
            }
        }
        super.visitChildren(node);
    }
}
const visitor = new TerminalRegExpVisitor();
function getTerminalParts(regexp) {
    try {
        if (typeof regexp !== 'string') {
            regexp = regexp.source;
        }
        regexp = `/${regexp}/`;
        const pattern = regexpParser.pattern(regexp);
        const parts = [];
        for (const alternative of pattern.value.value){
            visitor.reset(regexp);
            visitor.visit(alternative);
            parts.push({
                start: visitor.startRegexp,
                end: visitor.endRegex
            });
        }
        return parts;
    } catch (_a) {
        return [];
    }
}
function isMultilineComment(regexp) {
    try {
        if (typeof regexp === 'string') {
            regexp = new RegExp(regexp);
        }
        regexp = regexp.toString();
        visitor.reset(regexp);
        // Parsing the pattern might fail (since it's user code)
        visitor.visit(regexpParser.pattern(regexp));
        return visitor.multiline;
    } catch (_a) {
        return false;
    }
}
function isWhitespace(value) {
    const regexp = typeof value === 'string' ? new RegExp(value) : value;
    return regexp.test(' ');
}
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getCaseInsensitivePattern(keyword) {
    return Array.prototype.map.call(keyword, (letter)=>/\w/.test(letter) ? `[${letter.toLowerCase()}${letter.toUpperCase()}]` : escapeRegExp(letter)).join('');
}
function partialMatches(regex, input) {
    const partial = partialRegExp(regex);
    const match = input.match(partial);
    return !!match && match[0].length > 0;
}
function partialRegExp(regex) {
    if (typeof regex === 'string') {
        regex = new RegExp(regex);
    }
    const re = regex, source = regex.source;
    let i = 0;
    function process() {
        let result = '', tmp;
        function appendRaw(nbChars) {
            result += source.substr(i, nbChars);
            i += nbChars;
        }
        function appendOptional(nbChars) {
            result += '(?:' + source.substr(i, nbChars) + '|$)';
            i += nbChars;
        }
        while(i < source.length){
            switch(source[i]){
                case '\\':
                    switch(source[i + 1]){
                        case 'c':
                            appendOptional(3);
                            break;
                        case 'x':
                            appendOptional(4);
                            break;
                        case 'u':
                            if (re.unicode) {
                                if (source[i + 2] === '{') {
                                    appendOptional(source.indexOf('}', i) - i + 1);
                                } else {
                                    appendOptional(6);
                                }
                            } else {
                                appendOptional(2);
                            }
                            break;
                        case 'p':
                        case 'P':
                            if (re.unicode) {
                                appendOptional(source.indexOf('}', i) - i + 1);
                            } else {
                                appendOptional(2);
                            }
                            break;
                        case 'k':
                            appendOptional(source.indexOf('>', i) - i + 1);
                            break;
                        default:
                            appendOptional(2);
                            break;
                    }
                    break;
                case '[':
                    tmp = /\[(?:\\.|.)*?\]/g;
                    tmp.lastIndex = i;
                    tmp = tmp.exec(source) || [];
                    appendOptional(tmp[0].length);
                    break;
                case '|':
                case '^':
                case '$':
                case '*':
                case '+':
                case '?':
                    appendRaw(1);
                    break;
                case '{':
                    tmp = /\{\d+,?\d*\}/g;
                    tmp.lastIndex = i;
                    tmp = tmp.exec(source);
                    if (tmp) {
                        appendRaw(tmp[0].length);
                    } else {
                        appendOptional(1);
                    }
                    break;
                case '(':
                    if (source[i + 1] === '?') {
                        switch(source[i + 2]){
                            case ':':
                                result += '(?:';
                                i += 3;
                                result += process() + '|$)';
                                break;
                            case '=':
                                result += '(?=';
                                i += 3;
                                result += process() + ')';
                                break;
                            case '!':
                                tmp = i;
                                i += 3;
                                process();
                                result += source.substr(tmp, i - tmp);
                                break;
                            case '<':
                                switch(source[i + 3]){
                                    case '=':
                                    case '!':
                                        tmp = i;
                                        i += 4;
                                        process();
                                        result += source.substr(tmp, i - tmp);
                                        break;
                                    default:
                                        appendRaw(source.indexOf('>', i) - i + 1);
                                        result += process() + '|$)';
                                        break;
                                }
                                break;
                        }
                    } else {
                        appendRaw(1);
                        result += process() + '|$)';
                    }
                    break;
                case ')':
                    ++i;
                    return result;
                default:
                    appendOptional(1);
                    break;
            }
        }
        return result;
    }
    return new RegExp(process(), regex.flags);
} //# sourceMappingURL=regexp-utils.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021-2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "findAssignment": (()=>findAssignment),
    "findNameAssignment": (()=>findNameAssignment),
    "findNodeForKeyword": (()=>findNodeForKeyword),
    "findNodeForProperty": (()=>findNodeForProperty),
    "findNodesForKeyword": (()=>findNodesForKeyword),
    "findNodesForKeywordInternal": (()=>findNodesForKeywordInternal),
    "findNodesForProperty": (()=>findNodesForProperty),
    "getActionAtElement": (()=>getActionAtElement),
    "getActionType": (()=>getActionType),
    "getAllReachableRules": (()=>getAllReachableRules),
    "getCrossReferenceTerminal": (()=>getCrossReferenceTerminal),
    "getEntryRule": (()=>getEntryRule),
    "getExplicitRuleType": (()=>getExplicitRuleType),
    "getHiddenRules": (()=>getHiddenRules),
    "getRuleType": (()=>getRuleType),
    "getTypeName": (()=>getTypeName),
    "isArrayCardinality": (()=>isArrayCardinality),
    "isArrayOperator": (()=>isArrayOperator),
    "isCommentTerminal": (()=>isCommentTerminal),
    "isDataType": (()=>isDataType),
    "isDataTypeRule": (()=>isDataTypeRule),
    "isOptionalCardinality": (()=>isOptionalCardinality),
    "terminalRegex": (()=>terminalRegex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/generated/ast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/regexp-utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
function getEntryRule(grammar) {
    return grammar.rules.find((e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isParserRule(e) && e.entry);
}
function getHiddenRules(grammar) {
    return grammar.rules.filter((e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isTerminalRule(e) && e.hidden);
}
function getAllReachableRules(grammar, allTerminals) {
    const ruleNames = new Set();
    const entryRule = getEntryRule(grammar);
    if (!entryRule) {
        return new Set(grammar.rules);
    }
    const topMostRules = [
        entryRule
    ].concat(getHiddenRules(grammar));
    for (const rule of topMostRules){
        ruleDfs(rule, ruleNames, allTerminals);
    }
    const rules = new Set();
    for (const rule of grammar.rules){
        if (ruleNames.has(rule.name) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isTerminalRule(rule) && rule.hidden) {
            rules.add(rule);
        }
    }
    return rules;
}
function ruleDfs(rule, visitedSet, allTerminals) {
    visitedSet.add(rule.name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAllContents"])(rule).forEach((node)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isRuleCall(node) || allTerminals && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isTerminalRuleCall(node)) {
            const refRule = node.rule.ref;
            if (refRule && !visitedSet.has(refRule.name)) {
                ruleDfs(refRule, visitedSet, allTerminals);
            }
        }
    });
}
function getCrossReferenceTerminal(crossRef) {
    if (crossRef.terminal) {
        return crossRef.terminal;
    } else if (crossRef.type.ref) {
        const nameAssigment = findNameAssignment(crossRef.type.ref);
        return nameAssigment === null || nameAssigment === void 0 ? void 0 : nameAssigment.terminal;
    }
    return undefined;
}
function isCommentTerminal(terminalRule) {
    return terminalRule.hidden && !terminalRegex(terminalRule).test(' ');
}
function findNodesForProperty(node, property) {
    if (!node || !property) {
        return [];
    }
    return findNodesForPropertyInternal(node, property, node.astNode, true);
}
function findNodeForProperty(node, property, index) {
    if (!node || !property) {
        return undefined;
    }
    const nodes = findNodesForPropertyInternal(node, property, node.astNode, true);
    if (nodes.length === 0) {
        return undefined;
    }
    if (index !== undefined) {
        index = Math.max(0, Math.min(index, nodes.length - 1));
    } else {
        index = 0;
    }
    return nodes[index];
}
function findNodesForPropertyInternal(node, property, element, first) {
    if (!first) {
        const nodeFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContainerOfType"])(node.grammarSource, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAssignment);
        if (nodeFeature && nodeFeature.feature === property) {
            return [
                node
            ];
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCompositeCstNode"])(node) && node.astNode === element) {
        return node.content.flatMap((e)=>findNodesForPropertyInternal(e, property, element, false));
    }
    return [];
}
function findNodesForKeyword(node, keyword) {
    if (!node) {
        return [];
    }
    return findNodesForKeywordInternal(node, keyword, node === null || node === void 0 ? void 0 : node.astNode);
}
function findNodeForKeyword(node, keyword, index) {
    if (!node) {
        return undefined;
    }
    const nodes = findNodesForKeywordInternal(node, keyword, node === null || node === void 0 ? void 0 : node.astNode);
    if (nodes.length === 0) {
        return undefined;
    }
    if (index !== undefined) {
        index = Math.max(0, Math.min(index, nodes.length - 1));
    } else {
        index = 0;
    }
    return nodes[index];
}
function findNodesForKeywordInternal(node, keyword, element) {
    if (node.astNode !== element) {
        return [];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isKeyword(node.grammarSource) && node.grammarSource.value === keyword) {
        return [
            node
        ];
    }
    const treeIterator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamCst"])(node).iterator();
    let result;
    const keywordNodes = [];
    do {
        result = treeIterator.next();
        if (!result.done) {
            const childNode = result.value;
            if (childNode.astNode === element) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isKeyword(childNode.grammarSource) && childNode.grammarSource.value === keyword) {
                    keywordNodes.push(childNode);
                }
            } else {
                treeIterator.prune();
            }
        }
    }while (!result.done)
    return keywordNodes;
}
function findAssignment(cstNode) {
    var _a;
    const astNode = cstNode.astNode;
    // Only search until the ast node of the parent cst node is no longer the original ast node
    // This would make us jump to a preceding rule call, which contains only unrelated assignments
    while(astNode === ((_a = cstNode.container) === null || _a === void 0 ? void 0 : _a.astNode)){
        const assignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContainerOfType"])(cstNode.grammarSource, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAssignment);
        if (assignment) {
            return assignment;
        }
        cstNode = cstNode.container;
    }
    return undefined;
}
function findNameAssignment(type) {
    let startNode = type;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isInferredType(startNode)) {
        // for inferred types, the location to start searching for the name-assignment is different
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAction(startNode.$container)) {
            // a type which is explicitly inferred by an action: investigate the sibbling of the Action node, i.e. start searching at the Action's parent
            startNode = startNode.$container.$container;
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isParserRule(startNode.$container)) {
            // investigate the parser rule with the explicitly inferred type
            startNode = startNode.$container;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertUnreachable"])(startNode.$container);
        }
    }
    return findNameAssignmentInternal(type, startNode, new Map());
}
function findNameAssignmentInternal(type, startNode, cache) {
    var _a;
    // the cache is only required to prevent infinite loops
    function go(node, refType) {
        let childAssignment = undefined;
        const parentAssignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContainerOfType"])(node, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAssignment);
        // No parent assignment implies unassigned rule call
        if (!parentAssignment) {
            childAssignment = findNameAssignmentInternal(refType, refType, cache);
        }
        cache.set(type, childAssignment);
        return childAssignment;
    }
    if (cache.has(type)) {
        return cache.get(type);
    }
    cache.set(type, undefined);
    for (const node of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAllContents"])(startNode)){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAssignment(node) && node.feature.toLowerCase() === 'name') {
            cache.set(type, node);
            return node;
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isRuleCall(node) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isParserRule(node.rule.ref)) {
            return go(node, node.rule.ref);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSimpleType(node) && ((_a = node.typeRef) === null || _a === void 0 ? void 0 : _a.ref)) {
            return go(node, node.typeRef.ref);
        }
    }
    return undefined;
}
function getActionAtElement(element) {
    const parent = element.$container;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isGroup(parent)) {
        const elements = parent.elements;
        const index = elements.indexOf(element);
        for(let i = index - 1; i >= 0; i--){
            const item = elements[i];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAction(item)) {
                return item;
            } else {
                const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAllContents"])(elements[i]).find(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAction);
                if (action) {
                    return action;
                }
            }
        }
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAbstractElement(parent)) {
        return getActionAtElement(parent);
    } else {
        return undefined;
    }
}
function isOptionalCardinality(cardinality, element) {
    return cardinality === '?' || cardinality === '*' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isGroup(element) && Boolean(element.guardCondition);
}
function isArrayCardinality(cardinality) {
    return cardinality === '*' || cardinality === '+';
}
function isArrayOperator(operator) {
    return operator === '+=';
}
function isDataTypeRule(rule) {
    return isDataTypeRuleInternal(rule, new Set());
}
function isDataTypeRuleInternal(rule, visited) {
    if (visited.has(rule)) {
        return true;
    } else {
        visited.add(rule);
    }
    for (const node of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAllContents"])(rule)){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isRuleCall(node)) {
            if (!node.rule.ref) {
                // RuleCall to unresolved rule. Don't assume `rule` is a DataType rule.
                return false;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isParserRule(node.rule.ref) && !isDataTypeRuleInternal(node.rule.ref, visited)) {
                return false;
            }
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAssignment(node)) {
            return false;
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAction(node)) {
            return false;
        }
    }
    return Boolean(rule.definition);
}
function isDataType(type) {
    return isDataTypeInternal(type.type, new Set());
}
function isDataTypeInternal(type, visited) {
    if (visited.has(type)) {
        return true;
    } else {
        visited.add(type);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isArrayType(type)) {
        return false;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isReferenceType(type)) {
        return false;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isUnionType(type)) {
        return type.types.every((e)=>isDataTypeInternal(e, visited));
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isSimpleType(type)) {
        if (type.primitiveType !== undefined) {
            return true;
        } else if (type.stringType !== undefined) {
            return true;
        } else if (type.typeRef !== undefined) {
            const ref = type.typeRef.ref;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isType(ref)) {
                return isDataTypeInternal(ref.type, visited);
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
function getExplicitRuleType(rule) {
    if (rule.inferredType) {
        return rule.inferredType.name;
    } else if (rule.dataType) {
        return rule.dataType;
    } else if (rule.returnType) {
        const refType = rule.returnType.ref;
        if (refType) {
            // check if we need to check Action as return type
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isParserRule(refType)) {
                return refType.name;
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isInterface(refType) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isType(refType)) {
                return refType.name;
            }
        }
    }
    return undefined;
}
function getTypeName(type) {
    var _a;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isParserRule(type)) {
        return isDataTypeRule(type) ? type.name : (_a = getExplicitRuleType(type)) !== null && _a !== void 0 ? _a : type.name;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isInterface(type) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isType(type) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isReturnType(type)) {
        return type.name;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isAction(type)) {
        const actionType = getActionType(type);
        if (actionType) {
            return actionType;
        }
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isInferredType(type)) {
        return type.name;
    }
    throw new Error('Cannot get name of Unknown Type');
}
function getActionType(action) {
    var _a;
    if (action.inferredType) {
        return action.inferredType.name;
    } else if ((_a = action.type) === null || _a === void 0 ? void 0 : _a.ref) {
        return getTypeName(action.type.ref);
    }
    return undefined; // not inferring and not referencing a valid type
}
function getRuleType(rule) {
    var _a, _b, _c;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isTerminalRule(rule)) {
        return (_b = (_a = rule.type) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'string';
    } else {
        return isDataTypeRule(rule) ? rule.name : (_c = getExplicitRuleType(rule)) !== null && _c !== void 0 ? _c : rule.name;
    }
}
function terminalRegex(terminalRule) {
    const flags = {
        s: false,
        i: false,
        u: false
    };
    const source = abstractElementToRegex(terminalRule.definition, flags);
    const flagText = Object.entries(flags).filter(([, value])=>value).map(([name])=>name).join('');
    return new RegExp(source, flagText);
}
// Using [\s\S]* allows to match everything, compared to . which doesn't match line terminators
const WILDCARD = /[\s\S]/.source;
function abstractElementToRegex(element, flags) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isTerminalAlternatives(element)) {
        return terminalAlternativesToRegex(element);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isTerminalGroup(element)) {
        return terminalGroupToRegex(element);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isCharacterRange(element)) {
        return characterRangeToRegex(element);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isTerminalRuleCall(element)) {
        const rule = element.rule.ref;
        if (!rule) {
            throw new Error('Missing rule reference.');
        }
        return withCardinality(abstractElementToRegex(rule.definition), {
            cardinality: element.cardinality,
            lookahead: element.lookahead
        });
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isNegatedToken(element)) {
        return negateTokenToRegex(element);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isUntilToken(element)) {
        return untilTokenToRegex(element);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isRegexToken(element)) {
        const lastSlash = element.regex.lastIndexOf('/');
        const source = element.regex.substring(1, lastSlash);
        const regexFlags = element.regex.substring(lastSlash + 1);
        if (flags) {
            flags.i = regexFlags.includes('i');
            flags.s = regexFlags.includes('s');
            flags.u = regexFlags.includes('u');
        }
        return withCardinality(source, {
            cardinality: element.cardinality,
            lookahead: element.lookahead,
            wrap: false
        });
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isWildcard(element)) {
        return withCardinality(WILDCARD, {
            cardinality: element.cardinality,
            lookahead: element.lookahead
        });
    } else {
        throw new Error(`Invalid terminal element: ${element === null || element === void 0 ? void 0 : element.$type}`);
    }
}
function terminalAlternativesToRegex(alternatives) {
    return withCardinality(alternatives.elements.map((e)=>abstractElementToRegex(e)).join('|'), {
        cardinality: alternatives.cardinality,
        lookahead: alternatives.lookahead
    });
}
function terminalGroupToRegex(group) {
    return withCardinality(group.elements.map((e)=>abstractElementToRegex(e)).join(''), {
        cardinality: group.cardinality,
        lookahead: group.lookahead
    });
}
function untilTokenToRegex(until) {
    return withCardinality(`${WILDCARD}*?${abstractElementToRegex(until.terminal)}`, {
        cardinality: until.cardinality,
        lookahead: until.lookahead
    });
}
function negateTokenToRegex(negate) {
    return withCardinality(`(?!${abstractElementToRegex(negate.terminal)})${WILDCARD}*?`, {
        cardinality: negate.cardinality,
        lookahead: negate.lookahead
    });
}
function characterRangeToRegex(range) {
    if (range.right) {
        return withCardinality(`[${keywordToRegex(range.left)}-${keywordToRegex(range.right)}]`, {
            cardinality: range.cardinality,
            lookahead: range.lookahead,
            wrap: false
        });
    }
    return withCardinality(keywordToRegex(range.left), {
        cardinality: range.cardinality,
        lookahead: range.lookahead,
        wrap: false
    });
}
function keywordToRegex(keyword) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegExp"])(keyword.value);
}
function withCardinality(regex, options) {
    var _a;
    if (options.wrap !== false || options.lookahead) {
        regex = `(${(_a = options.lookahead) !== null && _a !== void 0 ? _a : ''}${regex})`;
    }
    if (options.cardinality) {
        return `${regex}${options.cardinality}`;
    }
    return regex;
} //# sourceMappingURL=grammar-utils.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/grammar-config.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "createGrammarConfig": (()=>createGrammarConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/regexp-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/generated/ast.js [app-client] (ecmascript)");
;
;
;
;
function createGrammarConfig(services) {
    const rules = [];
    const grammar = services.Grammar;
    for (const rule of grammar.rules){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalRule"])(rule) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCommentTerminal"])(rule) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMultilineComment"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalRegex"])(rule))) {
            rules.push(rule.name);
        }
    }
    return {
        multilineCommentRules: rules,
        nameRegexp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultNameRegexp"]
    };
} //# sourceMappingURL=grammar-config.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/cst-node-builder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "AbstractCstNode": (()=>AbstractCstNode),
    "CompositeCstNodeImpl": (()=>CompositeCstNodeImpl),
    "CstNodeBuilder": (()=>CstNodeBuilder),
    "LeafCstNodeImpl": (()=>LeafCstNodeImpl),
    "RootCstNodeImpl": (()=>RootCstNodeImpl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-languageserver-types@3.17.5/node_modules/vscode-languageserver-types/lib/esm/main.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)");
;
;
;
class CstNodeBuilder {
    constructor(){
        this.nodeStack = [];
    }
    get current() {
        return this.nodeStack[this.nodeStack.length - 1];
    }
    buildRootNode(input) {
        this.rootNode = new RootCstNodeImpl(input);
        this.rootNode.root = this.rootNode;
        this.nodeStack = [
            this.rootNode
        ];
        return this.rootNode;
    }
    buildCompositeNode(feature) {
        const compositeNode = new CompositeCstNodeImpl();
        compositeNode.grammarSource = feature;
        compositeNode.root = this.rootNode;
        this.current.content.push(compositeNode);
        this.nodeStack.push(compositeNode);
        return compositeNode;
    }
    buildLeafNode(token, feature) {
        const leafNode = new LeafCstNodeImpl(token.startOffset, token.image.length, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenToRange"])(token), token.tokenType, false);
        leafNode.grammarSource = feature;
        leafNode.root = this.rootNode;
        this.current.content.push(leafNode);
        return leafNode;
    }
    removeNode(node) {
        const parent = node.container;
        if (parent) {
            const index = parent.content.indexOf(node);
            if (index >= 0) {
                parent.content.splice(index, 1);
            }
        }
    }
    construct(item) {
        const current = this.current;
        // The specified item could be a datatype ($type is symbol) or a fragment ($type is undefined)
        // Only if the $type is a string, we actually assign the element
        if (typeof item.$type === 'string') {
            this.current.astNode = item;
        }
        item.$cstNode = current;
        const node = this.nodeStack.pop();
        // Empty composite nodes are not valid
        // Simply remove the node from the tree
        if ((node === null || node === void 0 ? void 0 : node.content.length) === 0) {
            this.removeNode(node);
        }
    }
    addHiddenTokens(hiddenTokens) {
        for (const token of hiddenTokens){
            const hiddenNode = new LeafCstNodeImpl(token.startOffset, token.image.length, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenToRange"])(token), token.tokenType, true);
            hiddenNode.root = this.rootNode;
            this.addHiddenToken(this.rootNode, hiddenNode);
        }
    }
    addHiddenToken(node, token) {
        const { offset: tokenStart, end: tokenEnd } = token;
        for(let i = 0; i < node.content.length; i++){
            const child = node.content[i];
            const { offset: childStart, end: childEnd } = child;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCompositeCstNode"])(child) && tokenStart > childStart && tokenEnd < childEnd) {
                this.addHiddenToken(child, token);
                return;
            } else if (tokenEnd <= childStart) {
                node.content.splice(i, 0, token);
                return;
            }
        }
        // We know that we haven't found a suited position for the token
        // So we simply add it to the end of the current node
        node.content.push(token);
    }
}
class AbstractCstNode {
    /** @deprecated use `container` instead. */ get parent() {
        return this.container;
    }
    /** @deprecated use `grammarSource` instead. */ get feature() {
        return this.grammarSource;
    }
    get hidden() {
        return false;
    }
    get astNode() {
        var _a, _b;
        const node = typeof ((_a = this._astNode) === null || _a === void 0 ? void 0 : _a.$type) === 'string' ? this._astNode : (_b = this.container) === null || _b === void 0 ? void 0 : _b.astNode;
        if (!node) {
            throw new Error('This node has no associated AST element');
        }
        return node;
    }
    set astNode(value) {
        this._astNode = value;
    }
    /** @deprecated use `astNode` instead. */ get element() {
        return this.astNode;
    }
    get text() {
        return this.root.fullText.substring(this.offset, this.end);
    }
}
class LeafCstNodeImpl extends AbstractCstNode {
    get offset() {
        return this._offset;
    }
    get length() {
        return this._length;
    }
    get end() {
        return this._offset + this._length;
    }
    get hidden() {
        return this._hidden;
    }
    get tokenType() {
        return this._tokenType;
    }
    get range() {
        return this._range;
    }
    constructor(offset, length, range, tokenType, hidden = false){
        super();
        this._hidden = hidden;
        this._offset = offset;
        this._tokenType = tokenType;
        this._length = length;
        this._range = range;
    }
}
class CompositeCstNodeImpl extends AbstractCstNode {
    constructor(){
        super(...arguments);
        this.content = new CstNodeContainer(this);
    }
    /** @deprecated use `content` instead. */ get children() {
        return this.content;
    }
    get offset() {
        var _a, _b;
        return (_b = (_a = this.firstNonHiddenNode) === null || _a === void 0 ? void 0 : _a.offset) !== null && _b !== void 0 ? _b : 0;
    }
    get length() {
        return this.end - this.offset;
    }
    get end() {
        var _a, _b;
        return (_b = (_a = this.lastNonHiddenNode) === null || _a === void 0 ? void 0 : _a.end) !== null && _b !== void 0 ? _b : 0;
    }
    get range() {
        const firstNode = this.firstNonHiddenNode;
        const lastNode = this.lastNonHiddenNode;
        if (firstNode && lastNode) {
            if (this._rangeCache === undefined) {
                const { range: firstRange } = firstNode;
                const { range: lastRange } = lastNode;
                this._rangeCache = {
                    start: firstRange.start,
                    end: lastRange.end.line < firstRange.start.line ? firstRange.start : lastRange.end
                };
            }
            return this._rangeCache;
        } else {
            return {
                start: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(0, 0),
                end: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(0, 0)
            };
        }
    }
    get firstNonHiddenNode() {
        for (const child of this.content){
            if (!child.hidden) {
                return child;
            }
        }
        return this.content[0];
    }
    get lastNonHiddenNode() {
        for(let i = this.content.length - 1; i >= 0; i--){
            const child = this.content[i];
            if (!child.hidden) {
                return child;
            }
        }
        return this.content[this.content.length - 1];
    }
}
class CstNodeContainer extends Array {
    constructor(parent){
        super();
        this.parent = parent;
        Object.setPrototypeOf(this, CstNodeContainer.prototype);
    }
    push(...items) {
        this.addParents(items);
        return super.push(...items);
    }
    unshift(...items) {
        this.addParents(items);
        return super.unshift(...items);
    }
    splice(start, count, ...items) {
        this.addParents(items);
        return super.splice(start, count, ...items);
    }
    addParents(items) {
        for (const item of items){
            item.container = this.parent;
        }
    }
}
class RootCstNodeImpl extends CompositeCstNodeImpl {
    get text() {
        return this._text.substring(this.offset, this.end);
    }
    get fullText() {
        return this._text;
    }
    constructor(input){
        super();
        this._text = '';
        this._text = input !== null && input !== void 0 ? input : '';
    }
} //# sourceMappingURL=cst-node-builder.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/langium-parser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "AbstractLangiumParser": (()=>AbstractLangiumParser),
    "AbstractParserErrorMessageProvider": (()=>AbstractParserErrorMessageProvider),
    "DatatypeSymbol": (()=>DatatypeSymbol),
    "LangiumCompletionParser": (()=>LangiumCompletionParser),
    "LangiumParser": (()=>LangiumParser),
    "LangiumParserErrorMessageProvider": (()=>LangiumParserErrorMessageProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$2d$allstar$40$0$2e$3$2e$1_chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2d$allstar$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain-allstar@0.3.1_chevrotain@11.0.3/node_modules/chevrotain-allstar/lib/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/generated/ast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$cst$2d$node$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/cst-node-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/errors_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$2d$allstar$40$0$2e$3$2e$1_chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2d$allstar$2f$lib$2f$all$2d$star$2d$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain-allstar@0.3.1_chevrotain@11.0.3/node_modules/chevrotain-allstar/lib/all-star-lookahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$llk_lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/grammar/llk_lookahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
;
;
;
;
;
;
const DatatypeSymbol = Symbol('Datatype');
function isDataTypeNode(node) {
    return node.$type === DatatypeSymbol;
}
const ruleSuffix = '\u200B';
const withRuleSuffix = (name)=>name.endsWith(ruleSuffix) ? name : name + ruleSuffix;
class AbstractLangiumParser {
    constructor(services){
        this._unorderedGroups = new Map();
        this.lexer = services.parser.Lexer;
        const tokens = this.lexer.definition;
        this.wrapper = new ChevrotainWrapper(tokens, Object.assign(Object.assign({}, services.parser.ParserConfig), {
            errorMessageProvider: services.parser.ParserErrorMessageProvider
        }));
    }
    alternatives(idx, choices) {
        this.wrapper.wrapOr(idx, choices);
    }
    optional(idx, callback) {
        this.wrapper.wrapOption(idx, callback);
    }
    many(idx, callback) {
        this.wrapper.wrapMany(idx, callback);
    }
    atLeastOne(idx, callback) {
        this.wrapper.wrapAtLeastOne(idx, callback);
    }
    isRecording() {
        return this.wrapper.IS_RECORDING;
    }
    get unorderedGroups() {
        return this._unorderedGroups;
    }
    getRuleStack() {
        return this.wrapper.RULE_STACK;
    }
    finalize() {
        this.wrapper.wrapSelfAnalysis();
    }
}
class LangiumParser extends AbstractLangiumParser {
    get current() {
        return this.stack[this.stack.length - 1];
    }
    constructor(services){
        super(services);
        this.nodeBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$cst$2d$node$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CstNodeBuilder"]();
        this.stack = [];
        this.assignmentMap = new Map();
        this.linker = services.references.Linker;
        this.converter = services.parser.ValueConverter;
        this.astReflection = services.shared.AstReflection;
    }
    rule(rule, impl) {
        const type = rule.fragment ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDataTypeRule"])(rule) ? DatatypeSymbol : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypeName"])(rule);
        const ruleMethod = this.wrapper.DEFINE_RULE(withRuleSuffix(rule.name), this.startImplementation(type, impl).bind(this));
        if (rule.entry) {
            this.mainRule = ruleMethod;
        }
        return ruleMethod;
    }
    parse(input) {
        this.nodeBuilder.buildRootNode(input);
        const lexerResult = this.lexer.tokenize(input);
        this.wrapper.input = lexerResult.tokens;
        const result = this.mainRule.call(this.wrapper, {});
        this.nodeBuilder.addHiddenTokens(lexerResult.hidden);
        this.unorderedGroups.clear();
        return {
            value: result,
            lexerErrors: lexerResult.errors,
            parserErrors: this.wrapper.errors
        };
    }
    startImplementation($type, implementation) {
        return (args)=>{
            if (!this.isRecording()) {
                const node = {
                    $type
                };
                this.stack.push(node);
                if ($type === DatatypeSymbol) {
                    node.value = '';
                }
            }
            let result;
            try {
                result = implementation(args);
            } catch (err) {
                result = undefined;
            }
            if (!this.isRecording() && result === undefined) {
                result = this.construct();
            }
            return result;
        };
    }
    consume(idx, tokenType, feature) {
        const token = this.wrapper.wrapConsume(idx, tokenType);
        if (!this.isRecording() && this.isValidToken(token)) {
            const leafNode = this.nodeBuilder.buildLeafNode(token, feature);
            const { assignment, isCrossRef } = this.getAssignment(feature);
            const current = this.current;
            if (assignment) {
                const convertedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyword"])(feature) ? token.image : this.converter.convert(token.image, leafNode);
                this.assign(assignment.operator, assignment.feature, convertedValue, leafNode, isCrossRef);
            } else if (isDataTypeNode(current)) {
                let text = token.image;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyword"])(feature)) {
                    text = this.converter.convert(text, leafNode).toString();
                }
                current.value += text;
            }
        }
    }
    /**
     * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
     *
     * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
     * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
     */ isValidToken(token) {
        return !token.isInsertedInRecovery && !isNaN(token.startOffset) && typeof token.endOffset === 'number' && !isNaN(token.endOffset);
    }
    subrule(idx, rule, feature, args) {
        let cstNode;
        if (!this.isRecording()) {
            cstNode = this.nodeBuilder.buildCompositeNode(feature);
        }
        const subruleResult = this.wrapper.wrapSubrule(idx, rule, args);
        if (!this.isRecording() && cstNode && cstNode.length > 0) {
            this.performSubruleAssignment(subruleResult, feature, cstNode);
        }
    }
    performSubruleAssignment(result, feature, cstNode) {
        const { assignment, isCrossRef } = this.getAssignment(feature);
        if (assignment) {
            this.assign(assignment.operator, assignment.feature, result, cstNode, isCrossRef);
        } else if (!assignment) {
            // If we call a subrule without an assignment we either:
            // 1. append the result of the subrule (data type rule)
            // 2. override the current object with the newly parsed object
            // If the current element is an AST node and the result of the subrule
            // is a data type rule, we can safely discard the results.
            const current = this.current;
            if (isDataTypeNode(current)) {
                current.value += result.toString();
            } else if (typeof result === 'object' && result) {
                const resultKind = result.$type;
                const object = this.assignWithoutOverride(result, current);
                if (resultKind) {
                    object.$type = resultKind;
                }
                const newItem = object;
                this.stack.pop();
                this.stack.push(newItem);
            }
        }
    }
    action($type, action) {
        if (!this.isRecording()) {
            let last = this.current;
            // This branch is used for left recursive grammar rules.
            // Those don't call `construct` before another action.
            // Therefore, we need to call it here.
            if (!last.$cstNode && action.feature && action.operator) {
                last = this.construct(false);
                const feature = last.$cstNode.feature;
                this.nodeBuilder.buildCompositeNode(feature);
            }
            const newItem = {
                $type
            };
            this.stack.pop();
            this.stack.push(newItem);
            if (action.feature && action.operator) {
                this.assign(action.operator, action.feature, last, last.$cstNode, false);
            }
        }
    }
    construct(pop = true) {
        if (this.isRecording()) {
            return undefined;
        }
        const obj = this.current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkContentToContainer"])(obj);
        this.nodeBuilder.construct(obj);
        if (pop) {
            this.stack.pop();
        }
        if (isDataTypeNode(obj)) {
            return this.converter.convert(obj.value, obj.$cstNode);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignMandatoryProperties"])(this.astReflection, obj);
        }
        return obj;
    }
    getAssignment(feature) {
        if (!this.assignmentMap.has(feature)) {
            const assignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContainerOfType"])(feature, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAssignment"]);
            this.assignmentMap.set(feature, {
                assignment: assignment,
                isCrossRef: assignment ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCrossReference"])(assignment.terminal) : false
            });
        }
        return this.assignmentMap.get(feature);
    }
    assign(operator, feature, value, cstNode, isCrossRef) {
        const obj = this.current;
        let item;
        if (isCrossRef && typeof value === 'string') {
            item = this.linker.buildReference(obj, feature, cstNode, value);
        } else {
            item = value;
        }
        switch(operator){
            case '=':
                {
                    obj[feature] = item;
                    break;
                }
            case '?=':
                {
                    obj[feature] = true;
                    break;
                }
            case '+=':
                {
                    if (!Array.isArray(obj[feature])) {
                        obj[feature] = [];
                    }
                    obj[feature].push(item);
                }
        }
    }
    assignWithoutOverride(target, source) {
        for (const [name, existingValue] of Object.entries(source)){
            const newValue = target[name];
            if (newValue === undefined) {
                target[name] = existingValue;
            } else if (Array.isArray(newValue) && Array.isArray(existingValue)) {
                existingValue.push(...newValue);
                target[name] = existingValue;
            }
        }
        return target;
    }
    get definitionErrors() {
        return this.wrapper.definitionErrors;
    }
}
class AbstractParserErrorMessageProvider {
    buildMismatchTokenMessage(options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultParserErrorProvider"].buildMismatchTokenMessage(options);
    }
    buildNotAllInputParsedMessage(options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultParserErrorProvider"].buildNotAllInputParsedMessage(options);
    }
    buildNoViableAltMessage(options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultParserErrorProvider"].buildNoViableAltMessage(options);
    }
    buildEarlyExitMessage(options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$errors_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultParserErrorProvider"].buildEarlyExitMessage(options);
    }
}
class LangiumParserErrorMessageProvider extends AbstractParserErrorMessageProvider {
    buildMismatchTokenMessage({ expected, actual }) {
        const expectedMsg = expected.LABEL ? '`' + expected.LABEL + '`' : expected.name.endsWith(':KW') ? `keyword '${expected.name.substring(0, expected.name.length - 3)}'` : `token of type '${expected.name}'`;
        return `Expecting ${expectedMsg} but found \`${actual.image}\`.`;
    }
    buildNotAllInputParsedMessage({ firstRedundant }) {
        return `Expecting end of file but found \`${firstRedundant.image}\`.`;
    }
}
class LangiumCompletionParser extends AbstractLangiumParser {
    constructor(){
        super(...arguments);
        this.tokens = [];
        this.elementStack = [];
        this.lastElementStack = [];
        this.nextTokenIndex = 0;
        this.stackSize = 0;
    }
    action() {
    // NOOP
    }
    construct() {
        // NOOP
        return undefined;
    }
    parse(input) {
        this.resetState();
        const tokens = this.lexer.tokenize(input);
        this.tokens = tokens.tokens;
        this.wrapper.input = [
            ...this.tokens
        ];
        this.mainRule.call(this.wrapper, {});
        this.unorderedGroups.clear();
        return {
            tokens: this.tokens,
            elementStack: [
                ...this.lastElementStack
            ],
            tokenIndex: this.nextTokenIndex
        };
    }
    rule(rule, impl) {
        const ruleMethod = this.wrapper.DEFINE_RULE(withRuleSuffix(rule.name), this.startImplementation(impl).bind(this));
        if (rule.entry) {
            this.mainRule = ruleMethod;
        }
        return ruleMethod;
    }
    resetState() {
        this.elementStack = [];
        this.lastElementStack = [];
        this.nextTokenIndex = 0;
        this.stackSize = 0;
    }
    startImplementation(implementation) {
        return (args)=>{
            const size = this.keepStackSize();
            try {
                implementation(args);
            } finally{
                this.resetStackSize(size);
            }
        };
    }
    removeUnexpectedElements() {
        this.elementStack.splice(this.stackSize);
    }
    keepStackSize() {
        const size = this.elementStack.length;
        this.stackSize = size;
        return size;
    }
    resetStackSize(size) {
        this.removeUnexpectedElements();
        this.stackSize = size;
    }
    consume(idx, tokenType, feature) {
        this.wrapper.wrapConsume(idx, tokenType);
        if (!this.isRecording()) {
            this.lastElementStack = [
                ...this.elementStack,
                feature
            ];
            this.nextTokenIndex = this.currIdx + 1;
        }
    }
    subrule(idx, rule, feature, args) {
        this.before(feature);
        this.wrapper.wrapSubrule(idx, rule, args);
        this.after(feature);
    }
    before(element) {
        if (!this.isRecording()) {
            this.elementStack.push(element);
        }
    }
    after(element) {
        if (!this.isRecording()) {
            const index = this.elementStack.lastIndexOf(element);
            if (index >= 0) {
                this.elementStack.splice(index);
            }
        }
    }
    get currIdx() {
        return this.wrapper.currIdx;
    }
}
const defaultConfig = {
    recoveryEnabled: true,
    nodeLocationTracking: 'full',
    skipValidations: true,
    errorMessageProvider: new LangiumParserErrorMessageProvider()
};
/**
 * This class wraps the embedded actions parser of chevrotain and exposes protected methods.
 * This way, we can build the `LangiumParser` as a composition.
 */ class ChevrotainWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmbeddedActionsParser"] {
    constructor(tokens, config){
        const useDefaultLookahead = config && 'maxLookahead' in config;
        super(tokens, Object.assign(Object.assign(Object.assign({}, defaultConfig), {
            lookaheadStrategy: useDefaultLookahead ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$grammar$2f$llk_lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LLkLookaheadStrategy"]({
                maxLookahead: config.maxLookahead
            }) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$2d$allstar$40$0$2e$3$2e$1_chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2d$allstar$2f$lib$2f$all$2d$star$2d$lookahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LLStarLookaheadStrategy"]()
        }), config));
    }
    get IS_RECORDING() {
        return this.RECORDING_PHASE;
    }
    DEFINE_RULE(name, impl) {
        return this.RULE(name, impl);
    }
    wrapSelfAnalysis() {
        this.performSelfAnalysis();
    }
    wrapConsume(idx, tokenType) {
        return this.consume(idx, tokenType);
    }
    wrapSubrule(idx, rule, args) {
        return this.subrule(idx, rule, {
            ARGS: [
                args
            ]
        });
    }
    wrapOr(idx, choices) {
        this.or(idx, choices);
    }
    wrapOption(idx, callback) {
        this.option(idx, callback);
    }
    wrapMany(idx, callback) {
        this.many(idx, callback);
    }
    wrapAtLeastOne(idx, callback) {
        this.atLeastOne(idx, callback);
    }
} //# sourceMappingURL=langium-parser.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/parser-builder-base.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "createParser": (()=>createParser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/generated/ast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/tokens_public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/parse/parser/parser.js [app-client] (ecmascript)");
;
;
;
;
;
function createParser(grammar, parser, tokens) {
    const rules = new Map();
    const parserContext = {
        parser,
        tokens,
        rules,
        ruleNames: new Map()
    };
    buildRules(parserContext, grammar);
    return parser;
}
function buildRules(parserContext, grammar) {
    const reachable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllReachableRules"])(grammar, false);
    const parserRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(grammar.rules).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isParserRule"]).filter((rule)=>reachable.has(rule));
    for (const rule of parserRules){
        const ctx = Object.assign(Object.assign({}, parserContext), {
            consume: 1,
            optional: 1,
            subrule: 1,
            many: 1,
            or: 1
        });
        ctx.rules.set(rule.name, parserContext.parser.rule(rule, buildElement(ctx, rule.definition)));
    }
}
function buildElement(ctx, element, ignoreGuard = false) {
    let method;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyword"])(element)) {
        method = buildKeyword(ctx, element);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAction"])(element)) {
        method = buildAction(ctx, element);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAssignment"])(element)) {
        method = buildElement(ctx, element.terminal);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCrossReference"])(element)) {
        method = buildCrossReference(ctx, element);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRuleCall"])(element)) {
        method = buildRuleCall(ctx, element);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAlternatives"])(element)) {
        method = buildAlternatives(ctx, element);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnorderedGroup"])(element)) {
        method = buildUnorderedGroup(ctx, element);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGroup"])(element)) {
        method = buildGroup(ctx, element);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEndOfFile"])(element)) {
        const idx = ctx.consume++;
        method = ()=>ctx.parser.consume(idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$tokens_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOF"], element);
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorWithLocation"](element.$cstNode, `Unexpected element type: ${element.$type}`);
    }
    return wrap(ctx, ignoreGuard ? undefined : getGuardCondition(element), method, element.cardinality);
}
function buildAction(ctx, action) {
    const actionType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypeName"])(action);
    return ()=>ctx.parser.action(actionType, action);
}
function buildRuleCall(ctx, ruleCall) {
    const rule = ruleCall.rule.ref;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isParserRule"])(rule)) {
        const idx = ctx.subrule++;
        const predicate = ruleCall.arguments.length > 0 ? buildRuleCallPredicate(rule, ruleCall.arguments) : ()=>({});
        return (args)=>ctx.parser.subrule(idx, getRule(ctx, rule), ruleCall, predicate(args));
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalRule"])(rule)) {
        const idx = ctx.consume++;
        const method = getToken(ctx, rule.name);
        return ()=>ctx.parser.consume(idx, method, ruleCall);
    } else if (!rule) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorWithLocation"](ruleCall.$cstNode, `Undefined rule type: ${ruleCall.$type}`);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertUnreachable"])(rule);
    }
}
function buildRuleCallPredicate(rule, namedArgs) {
    const predicates = namedArgs.map((e)=>buildPredicate(e.value));
    return (args)=>{
        const ruleArgs = {};
        for(let i = 0; i < predicates.length; i++){
            const ruleTarget = rule.parameters[i];
            const predicate = predicates[i];
            ruleArgs[ruleTarget.name] = predicate(args);
        }
        return ruleArgs;
    };
}
function buildPredicate(condition) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisjunction"])(condition)) {
        const left = buildPredicate(condition.left);
        const right = buildPredicate(condition.right);
        return (args)=>left(args) || right(args);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isConjunction"])(condition)) {
        const left = buildPredicate(condition.left);
        const right = buildPredicate(condition.right);
        return (args)=>left(args) && right(args);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNegation"])(condition)) {
        const value = buildPredicate(condition.value);
        return (args)=>!value(args);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isParameterReference"])(condition)) {
        const name = condition.parameter.ref.name;
        return (args)=>args !== undefined && args[name] === true;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBooleanLiteral"])(condition)) {
        const value = Boolean(condition.true);
        return ()=>value;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertUnreachable"])(condition);
}
function buildAlternatives(ctx, alternatives) {
    if (alternatives.elements.length === 1) {
        return buildElement(ctx, alternatives.elements[0]);
    } else {
        const methods = [];
        for (const element of alternatives.elements){
            const predicatedMethod = {
                // Since we handle the guard condition in the alternative already
                // We can ignore the group guard condition inside
                ALT: buildElement(ctx, element, true)
            };
            const guard = getGuardCondition(element);
            if (guard) {
                predicatedMethod.GATE = buildPredicate(guard);
            }
            methods.push(predicatedMethod);
        }
        const idx = ctx.or++;
        return (args)=>ctx.parser.alternatives(idx, methods.map((method)=>{
                const alt = {
                    ALT: ()=>method.ALT(args)
                };
                const gate = method.GATE;
                if (gate) {
                    alt.GATE = ()=>gate(args);
                }
                return alt;
            }));
    }
}
function buildUnorderedGroup(ctx, group) {
    if (group.elements.length === 1) {
        return buildElement(ctx, group.elements[0]);
    }
    const methods = [];
    for (const element of group.elements){
        const predicatedMethod = {
            // Since we handle the guard condition in the alternative already
            // We can ignore the group guard condition inside
            ALT: buildElement(ctx, element, true)
        };
        const guard = getGuardCondition(element);
        if (guard) {
            predicatedMethod.GATE = buildPredicate(guard);
        }
        methods.push(predicatedMethod);
    }
    const orIdx = ctx.or++;
    const idFunc = (groupIdx, lParser)=>{
        const stackId = lParser.getRuleStack().join('-');
        return `uGroup_${groupIdx}_${stackId}`;
    };
    const alternatives = (args)=>ctx.parser.alternatives(orIdx, methods.map((method, idx)=>{
            const alt = {
                ALT: ()=>true
            };
            const parser = ctx.parser;
            alt.ALT = ()=>{
                method.ALT(args);
                if (!parser.isRecording()) {
                    const key = idFunc(orIdx, parser);
                    if (!parser.unorderedGroups.get(key)) {
                        // init after clear state
                        parser.unorderedGroups.set(key, []);
                    }
                    const groupState = parser.unorderedGroups.get(key);
                    if (typeof (groupState === null || groupState === void 0 ? void 0 : groupState[idx]) === 'undefined') {
                        // Not accessed yet
                        groupState[idx] = true;
                    }
                }
            };
            const gate = method.GATE;
            if (gate) {
                alt.GATE = ()=>gate(args);
            } else {
                alt.GATE = ()=>{
                    const trackedAlternatives = parser.unorderedGroups.get(idFunc(orIdx, parser));
                    const allow = !(trackedAlternatives === null || trackedAlternatives === void 0 ? void 0 : trackedAlternatives[idx]);
                    return allow;
                };
            }
            return alt;
        }));
    const wrapped = wrap(ctx, getGuardCondition(group), alternatives, '*');
    return (args)=>{
        wrapped(args);
        if (!ctx.parser.isRecording()) {
            ctx.parser.unorderedGroups.delete(idFunc(orIdx, ctx.parser));
        }
    };
}
function buildGroup(ctx, group) {
    const methods = group.elements.map((e)=>buildElement(ctx, e));
    return (args)=>methods.forEach((method)=>method(args));
}
function getGuardCondition(element) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGroup"])(element)) {
        return element.guardCondition;
    }
    return undefined;
}
function buildCrossReference(ctx, crossRef, terminal = crossRef.terminal) {
    if (!terminal) {
        if (!crossRef.type.ref) {
            throw new Error('Could not resolve reference to type: ' + crossRef.type.$refText);
        }
        const assignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNameAssignment"])(crossRef.type.ref);
        const assignTerminal = assignment === null || assignment === void 0 ? void 0 : assignment.terminal;
        if (!assignTerminal) {
            throw new Error('Could not find name assignment for type: ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypeName"])(crossRef.type.ref));
        }
        return buildCrossReference(ctx, crossRef, assignTerminal);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRuleCall"])(terminal) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isParserRule"])(terminal.rule.ref)) {
        const idx = ctx.subrule++;
        return (args)=>ctx.parser.subrule(idx, getRule(ctx, terminal.rule.ref), crossRef, args);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRuleCall"])(terminal) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalRule"])(terminal.rule.ref)) {
        const idx = ctx.consume++;
        const terminalRule = getToken(ctx, terminal.rule.ref.name);
        return ()=>ctx.parser.consume(idx, terminalRule, crossRef);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyword"])(terminal)) {
        const idx = ctx.consume++;
        const keyword = getToken(ctx, terminal.value);
        return ()=>ctx.parser.consume(idx, keyword, crossRef);
    } else {
        throw new Error('Could not build cross reference parser');
    }
}
function buildKeyword(ctx, keyword) {
    const idx = ctx.consume++;
    const token = ctx.tokens[keyword.value];
    if (!token) {
        throw new Error('Could not find token for keyword: ' + keyword.value);
    }
    return ()=>ctx.parser.consume(idx, token, keyword);
}
function wrap(ctx, guard, method, cardinality) {
    const gate = guard && buildPredicate(guard);
    if (!cardinality) {
        if (gate) {
            const idx = ctx.or++;
            return (args)=>ctx.parser.alternatives(idx, [
                    {
                        ALT: ()=>method(args),
                        GATE: ()=>gate(args)
                    },
                    {
                        ALT: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_ALT"])(),
                        GATE: ()=>!gate(args)
                    }
                ]);
        } else {
            return method;
        }
    }
    if (cardinality === '*') {
        const idx = ctx.many++;
        return (args)=>ctx.parser.many(idx, {
                DEF: ()=>method(args),
                GATE: gate ? ()=>gate(args) : undefined
            });
    } else if (cardinality === '+') {
        const idx = ctx.many++;
        if (gate) {
            const orIdx = ctx.or++;
            // In the case of a guard condition for the `+` group
            // We combine it with an empty alternative
            // If the condition returns true, it needs to parse at least a single iteration
            // If its false, it is not allowed to parse anything
            return (args)=>ctx.parser.alternatives(orIdx, [
                    {
                        ALT: ()=>ctx.parser.atLeastOne(idx, {
                                DEF: ()=>method(args)
                            }),
                        GATE: ()=>gate(args)
                    },
                    {
                        ALT: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$parse$2f$parser$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_ALT"])(),
                        GATE: ()=>!gate(args)
                    }
                ]);
        } else {
            return (args)=>ctx.parser.atLeastOne(idx, {
                    DEF: ()=>method(args)
                });
        }
    } else if (cardinality === '?') {
        const idx = ctx.optional++;
        return (args)=>ctx.parser.optional(idx, {
                DEF: ()=>method(args),
                GATE: gate ? ()=>gate(args) : undefined
            });
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertUnreachable"])(cardinality);
    }
}
function getRule(ctx, element) {
    const name = getRuleName(ctx, element);
    const rule = ctx.rules.get(name);
    if (!rule) throw new Error(`Rule "${name}" not found."`);
    return rule;
}
function getRuleName(ctx, element) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isParserRule"])(element)) {
        return element.name;
    } else if (ctx.ruleNames.has(element)) {
        return ctx.ruleNames.get(element);
    } else {
        let item = element;
        let parent = item.$container;
        let ruleName = element.$type;
        while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isParserRule"])(parent)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGroup"])(parent) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAlternatives"])(parent) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnorderedGroup"])(parent)) {
                const index = parent.elements.indexOf(item);
                ruleName = index.toString() + ':' + ruleName;
            }
            item = parent;
            parent = parent.$container;
        }
        const rule = parent;
        ruleName = rule.name + ':' + ruleName;
        ctx.ruleNames.set(element, ruleName);
        return ruleName;
    }
}
function getToken(ctx, name) {
    const token = ctx.tokens[name];
    if (!token) throw new Error(`Token "${name}" not found."`);
    return token;
} //# sourceMappingURL=parser-builder-base.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/completion-parser-builder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "createCompletionParser": (()=>createCompletionParser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$langium$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/langium-parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$parser$2d$builder$2d$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/parser-builder-base.js [app-client] (ecmascript)");
;
;
function createCompletionParser(services) {
    const grammar = services.Grammar;
    const lexer = services.parser.Lexer;
    const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$langium$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangiumCompletionParser"](services);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$parser$2d$builder$2d$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParser"])(grammar, parser, lexer.definition);
    parser.finalize();
    return parser;
} //# sourceMappingURL=completion-parser-builder.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/langium-parser-builder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "createLangiumParser": (()=>createLangiumParser),
    "prepareLangiumParser": (()=>prepareLangiumParser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$langium$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/langium-parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$parser$2d$builder$2d$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/parser-builder-base.js [app-client] (ecmascript)");
;
;
function createLangiumParser(services) {
    const parser = prepareLangiumParser(services);
    parser.finalize();
    return parser;
}
function prepareLangiumParser(services) {
    const grammar = services.Grammar;
    const lexer = services.parser.Lexer;
    const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$langium$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangiumParser"](services);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$parser$2d$builder$2d$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParser"])(grammar, parser, lexer.definition);
} //# sourceMappingURL=langium-parser-builder.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/token-builder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultTokenBuilder": (()=>DefaultTokenBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/generated/ast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/regexp-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer_public.js [app-client] (ecmascript)");
;
;
;
;
;
;
class DefaultTokenBuilder {
    buildTokens(grammar, options) {
        const reachableRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllReachableRules"])(grammar, false));
        const terminalTokens = this.buildTerminalTokens(reachableRules);
        const tokens = this.buildKeywordTokens(reachableRules, terminalTokens, options);
        terminalTokens.forEach((terminalToken)=>{
            const pattern = terminalToken.PATTERN;
            if (typeof pattern === 'object' && pattern && 'test' in pattern && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWhitespace"])(pattern)) {
                tokens.unshift(terminalToken);
            } else {
                tokens.push(terminalToken);
            }
        });
        // We don't need to add the EOF token explicitly.
        // It is automatically available at the end of the token stream.
        return tokens;
    }
    buildTerminalTokens(rules) {
        return rules.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalRule"]).filter((e)=>!e.fragment).map((terminal)=>this.buildTerminalToken(terminal)).toArray();
    }
    buildTerminalToken(terminal) {
        const regex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalRegex"])(terminal);
        const pattern = this.requiresCustomPattern(regex) ? this.regexPatternFunction(regex) : regex;
        const tokenType = {
            name: terminal.name,
            PATTERN: pattern,
            LINE_BREAKS: true
        };
        if (terminal.hidden) {
            // Only skip tokens that are able to accept whitespace
            tokenType.GROUP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWhitespace"])(regex) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"].SKIPPED : 'hidden';
        }
        return tokenType;
    }
    requiresCustomPattern(regex) {
        if (regex.flags.includes('u')) {
            // Unicode regexes are not supported by Chevrotain.
            return true;
        } else if (regex.source.includes('?<=') || regex.source.includes('?<!')) {
            // Negative and positive lookbehind are not supported by Chevrotain yet.
            return true;
        } else {
            return false;
        }
    }
    regexPatternFunction(regex) {
        const stickyRegex = new RegExp(regex, regex.flags + 'y');
        return (text, offset)=>{
            stickyRegex.lastIndex = offset;
            const execResult = stickyRegex.exec(text);
            return execResult;
        };
    }
    buildKeywordTokens(rules, terminalTokens, options) {
        return rules// We filter by parser rules, since keywords in terminal rules get transformed into regex and are not actual tokens
        .filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isParserRule"]).flatMap((rule)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAllContents"])(rule).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyword"])).distinct((e)=>e.value).toArray()// Sort keywords by descending length
        .sort((a, b)=>b.value.length - a.value.length).map((keyword)=>this.buildKeywordToken(keyword, terminalTokens, Boolean(options === null || options === void 0 ? void 0 : options.caseInsensitive)));
    }
    buildKeywordToken(keyword, terminalTokens, caseInsensitive) {
        return {
            name: keyword.value,
            PATTERN: this.buildKeywordPattern(keyword, caseInsensitive),
            LONGER_ALT: this.findLongerAlt(keyword, terminalTokens)
        };
    }
    buildKeywordPattern(keyword, caseInsensitive) {
        return caseInsensitive ? new RegExp((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCaseInsensitivePattern"])(keyword.value)) : keyword.value;
    }
    findLongerAlt(keyword, terminalTokens) {
        return terminalTokens.reduce((longerAlts, token)=>{
            const pattern = token === null || token === void 0 ? void 0 : token.PATTERN;
            if ((pattern === null || pattern === void 0 ? void 0 : pattern.source) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partialMatches"])('^' + pattern.source + '$', keyword.value)) {
                longerAlts.push(token);
            }
            return longerAlts;
        }, []);
    }
} //# sourceMappingURL=token-builder.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/value-converter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultValueConverter": (()=>DefaultValueConverter),
    "ValueConverter": (()=>ValueConverter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/generated/ast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)");
;
;
class DefaultValueConverter {
    convert(input, cstNode) {
        let feature = cstNode.grammarSource;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCrossReference"])(feature)) {
            feature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrossReferenceTerminal"])(feature);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRuleCall"])(feature)) {
            const rule = feature.rule.ref;
            if (!rule) {
                throw new Error('This cst node was not parsed by a rule.');
            }
            return this.runConverter(rule, input, cstNode);
        }
        return input;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runConverter(rule, input, cstNode) {
        var _a;
        switch(rule.name.toUpperCase()){
            case 'INT':
                return ValueConverter.convertInt(input);
            case 'STRING':
                return ValueConverter.convertString(input);
            case 'ID':
                return ValueConverter.convertID(input);
        }
        switch((_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRuleType"])(rule)) === null || _a === void 0 ? void 0 : _a.toLowerCase()){
            case 'number':
                return ValueConverter.convertNumber(input);
            case 'boolean':
                return ValueConverter.convertBoolean(input);
            case 'bigint':
                return ValueConverter.convertBigint(input);
            case 'date':
                return ValueConverter.convertDate(input);
            default:
                return input;
        }
    }
}
var ValueConverter;
(function(ValueConverter) {
    function convertString(input) {
        let result = '';
        for(let i = 1; i < input.length - 1; i++){
            const c = input.charAt(i);
            if (c === '\\') {
                const c1 = input.charAt(++i);
                result += convertEscapeCharacter(c1);
            } else {
                result += c;
            }
        }
        return result;
    }
    ValueConverter.convertString = convertString;
    function convertEscapeCharacter(char) {
        switch(char){
            case 'b':
                return '\b';
            case 'f':
                return '\f';
            case 'n':
                return '\n';
            case 'r':
                return '\r';
            case 't':
                return '\t';
            case 'v':
                return '\v';
            case '0':
                return '\0';
            default:
                return char;
        }
    }
    function convertID(input) {
        if (input.charAt(0) === '^') {
            return input.substring(1);
        } else {
            return input;
        }
    }
    ValueConverter.convertID = convertID;
    function convertInt(input) {
        return parseInt(input);
    }
    ValueConverter.convertInt = convertInt;
    function convertBigint(input) {
        return BigInt(input);
    }
    ValueConverter.convertBigint = convertBigint;
    function convertDate(input) {
        return new Date(input);
    }
    ValueConverter.convertDate = convertDate;
    function convertNumber(input) {
        return Number(input);
    }
    ValueConverter.convertNumber = convertNumber;
    function convertBoolean(input) {
        return input.toLowerCase() === 'true';
    }
    ValueConverter.convertBoolean = convertBoolean;
})(ValueConverter || (ValueConverter = {})); //# sourceMappingURL=value-converter.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2024 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ // eslint-disable-next-line no-restricted-imports
__turbopack_esm__({});
;
 //# sourceMappingURL=cancellation.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "Deferred": (()=>Deferred),
    "OperationCancelled": (()=>OperationCancelled),
    "delayNextTick": (()=>delayNextTick),
    "interruptAndCheck": (()=>interruptAndCheck),
    "isOperationCancelled": (()=>isOperationCancelled),
    "setInterruptionPeriod": (()=>setInterruptionPeriod),
    "startCancelableOperation": (()=>startCancelableOperation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
;
function delayNextTick() {
    return new Promise((resolve)=>{
        // In case we are running in a non-node environment, `setImmediate` isn't available.
        // Using `setTimeout` of the browser API accomplishes the same result.
        if (typeof setImmediate === 'undefined') {
            setTimeout(resolve, 0);
        } else {
            setImmediate(resolve);
        }
    });
}
let lastTick = 0;
let globalInterruptionPeriod = 10;
function startCancelableOperation() {
    lastTick = Date.now();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
}
function setInterruptionPeriod(period) {
    globalInterruptionPeriod = period;
}
const OperationCancelled = Symbol('OperationCancelled');
function isOperationCancelled(err) {
    return err === OperationCancelled;
}
async function interruptAndCheck(token) {
    if (token === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        // Early exit in case cancellation was disabled by the caller
        return;
    }
    const current = Date.now();
    if (current - lastTick >= globalInterruptionPeriod) {
        lastTick = current;
        await delayNextTick();
    }
    if (token.isCancellationRequested) {
        throw OperationCancelled;
    }
}
class Deferred {
    constructor(){
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = (arg)=>{
                resolve(arg);
                return this;
            };
            this.reject = (err)=>{
                reject(err);
                return this;
            };
        });
    }
} //# sourceMappingURL=promise-utils.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "UriUtils": (()=>UriUtils)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-uri@3.0.8/node_modules/vscode-uri/lib/esm/index.mjs [app-client] (ecmascript)");
;
;
var UriUtils;
(function(UriUtils) {
    UriUtils.basename = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Utils"].basename;
    UriUtils.dirname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Utils"].dirname;
    UriUtils.extname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Utils"].extname;
    UriUtils.joinPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Utils"].joinPath;
    UriUtils.resolvePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Utils"].resolvePath;
    function equals(a, b) {
        return (a === null || a === void 0 ? void 0 : a.toString()) === (b === null || b === void 0 ? void 0 : b.toString());
    }
    UriUtils.equals = equals;
    function relative(from, to) {
        const fromPath = typeof from === 'string' ? from : from.path;
        const toPath = typeof to === 'string' ? to : to.path;
        const fromParts = fromPath.split('/').filter((e)=>e.length > 0);
        const toParts = toPath.split('/').filter((e)=>e.length > 0);
        let i = 0;
        for(; i < fromParts.length; i++){
            if (fromParts[i] !== toParts[i]) {
                break;
            }
        }
        const backPart = '../'.repeat(fromParts.length - i);
        const toPart = toParts.slice(i).join('/');
        return backPart + toPart;
    }
    UriUtils.relative = relative;
})(UriUtils || (UriUtils = {})); //# sourceMappingURL=uri-utils.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ /**
 * Re-export 'TextDocument' from 'vscode-languageserver-textdocument' for convenience,
 *  including both type _and_ symbol (namespace), as we here and there also refer to the symbol,
 *  the overhead is very small, just a few kilobytes.
 * Everything else of that package (at the time contributing) is also defined
 *  in 'vscode-languageserver-protocol' or 'vscode-languageserver-types'.
 */ __turbopack_esm__({
    "DefaultLangiumDocumentFactory": (()=>DefaultLangiumDocumentFactory),
    "DefaultLangiumDocuments": (()=>DefaultLangiumDocuments),
    "DocumentState": (()=>DocumentState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-uri@3.0.8/node_modules/vscode-uri/lib/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$textdocument$40$1$2e$0$2e$12$2f$node_modules$2f$vscode$2d$languageserver$2d$textdocument$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-languageserver-textdocument@1.0.12/node_modules/vscode-languageserver-textdocument/lib/esm/main.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
;
;
;
;
;
var DocumentState;
(function(DocumentState) {
    /**
     * The text content has changed and needs to be parsed again. The AST held by this outdated
     * document instance is no longer valid.
     */ DocumentState[DocumentState["Changed"] = 0] = "Changed";
    /**
     * An AST has been created from the text content. The document structure can be traversed,
     * but cross-references cannot be resolved yet. If necessary, the structure can be manipulated
     * at this stage as a preprocessing step.
     */ DocumentState[DocumentState["Parsed"] = 1] = "Parsed";
    /**
     * The `IndexManager` service has processed AST nodes of this document. This means the
     * exported symbols are available in the global scope and can be resolved from other documents.
     */ DocumentState[DocumentState["IndexedContent"] = 2] = "IndexedContent";
    /**
     * The `ScopeComputation` service has processed this document. This means the local symbols
     * are stored in a MultiMap so they can be looked up by the `ScopeProvider` service.
     * Once a document has reached this state, you may follow every reference - it will lazily
     * resolve its `ref` property and yield either the target AST node or `undefined` in case
     * the target is not in scope.
     */ DocumentState[DocumentState["ComputedScopes"] = 3] = "ComputedScopes";
    /**
     * The `Linker` service has processed this document. All outgoing references have been
     * resolved or marked as erroneous.
     */ DocumentState[DocumentState["Linked"] = 4] = "Linked";
    /**
     * The `IndexManager` service has processed AST node references of this document. This is
     * necessary to determine which documents are affected by a change in one of the workspace
     * documents.
     */ DocumentState[DocumentState["IndexedReferences"] = 5] = "IndexedReferences";
    /**
     * The `DocumentValidator` service has processed this document. The language server listens
     * to the results of this phase and sends diagnostics to the client.
     */ DocumentState[DocumentState["Validated"] = 6] = "Validated";
})(DocumentState || (DocumentState = {}));
class DefaultLangiumDocumentFactory {
    constructor(services){
        this.serviceRegistry = services.ServiceRegistry;
        this.textDocuments = services.workspace.TextDocuments;
        this.fileSystemProvider = services.workspace.FileSystemProvider;
    }
    async fromUri(uri, cancellationToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        const content = await this.fileSystemProvider.readFile(uri);
        return this.createAsync(uri, content, cancellationToken);
    }
    fromTextDocument(textDocument, uri, cancellationToken) {
        uri = uri !== null && uri !== void 0 ? uri : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(textDocument.uri);
        if (cancellationToken) {
            return this.createAsync(uri, textDocument, cancellationToken);
        } else {
            return this.create(uri, textDocument);
        }
    }
    fromString(text, uri, cancellationToken) {
        if (cancellationToken) {
            return this.createAsync(uri, text, cancellationToken);
        } else {
            return this.create(uri, text);
        }
    }
    fromModel(model, uri) {
        return this.create(uri, {
            $model: model
        });
    }
    create(uri, content) {
        if (typeof content === 'string') {
            const parseResult = this.parse(uri, content);
            return this.createLangiumDocument(parseResult, uri, undefined, content);
        } else if ('$model' in content) {
            const parseResult = {
                value: content.$model,
                parserErrors: [],
                lexerErrors: []
            };
            return this.createLangiumDocument(parseResult, uri);
        } else {
            const parseResult = this.parse(uri, content.getText());
            return this.createLangiumDocument(parseResult, uri, content);
        }
    }
    async createAsync(uri, content, cancelToken) {
        if (typeof content === 'string') {
            const parseResult = await this.parseAsync(uri, content, cancelToken);
            return this.createLangiumDocument(parseResult, uri, undefined, content);
        } else {
            const parseResult = await this.parseAsync(uri, content.getText(), cancelToken);
            return this.createLangiumDocument(parseResult, uri, content);
        }
    }
    /**
     * Create a LangiumDocument from a given parse result.
     *
     * A TextDocument is created on demand if it is not provided as argument here. Usually this
     * should not be necessary because the main purpose of the TextDocument is to convert between
     * text ranges and offsets, which is done solely in LSP request handling.
     *
     * With the introduction of {@link update} below this method is supposed to be mainly called
     * during workspace initialization and on addition/recognition of new files, while changes in
     * existing documents are processed via {@link update}.
     */ createLangiumDocument(parseResult, uri, textDocument, text) {
        let document;
        if (textDocument) {
            document = {
                parseResult,
                uri,
                state: DocumentState.Parsed,
                references: [],
                textDocument
            };
        } else {
            const textDocumentGetter = this.createTextDocumentGetter(uri, text);
            document = {
                parseResult,
                uri,
                state: DocumentState.Parsed,
                references: [],
                get textDocument () {
                    return textDocumentGetter();
                }
            };
        }
        parseResult.value.$document = document;
        return document;
    }
    async update(document, cancellationToken) {
        var _a, _b;
        // The CST full text property contains the original text that was used to create the AST.
        const oldText = (_a = document.parseResult.value.$cstNode) === null || _a === void 0 ? void 0 : _a.root.fullText;
        const textDocument = (_b = this.textDocuments) === null || _b === void 0 ? void 0 : _b.get(document.uri.toString());
        const text = textDocument ? textDocument.getText() : await this.fileSystemProvider.readFile(document.uri);
        if (textDocument) {
            Object.defineProperty(document, 'textDocument', {
                value: textDocument
            });
        } else {
            const textDocumentGetter = this.createTextDocumentGetter(document.uri, text);
            Object.defineProperty(document, 'textDocument', {
                get: textDocumentGetter
            });
        }
        // Some of these documents can be pretty large, so parsing them again can be quite expensive.
        // Therefore, we only parse if the text has actually changed.
        if (oldText !== text) {
            document.parseResult = await this.parseAsync(document.uri, text, cancellationToken);
            document.parseResult.value.$document = document;
        }
        document.state = DocumentState.Parsed;
        return document;
    }
    parse(uri, text) {
        const services = this.serviceRegistry.getServices(uri);
        return services.parser.LangiumParser.parse(text);
    }
    parseAsync(uri, text, cancellationToken) {
        const services = this.serviceRegistry.getServices(uri);
        return services.parser.AsyncParser.parse(text, cancellationToken);
    }
    createTextDocumentGetter(uri, text) {
        const serviceRegistry = this.serviceRegistry;
        let textDoc = undefined;
        return ()=>{
            return textDoc !== null && textDoc !== void 0 ? textDoc : textDoc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$textdocument$40$1$2e$0$2e$12$2f$node_modules$2f$vscode$2d$languageserver$2d$textdocument$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextDocument"].create(uri.toString(), serviceRegistry.getServices(uri).LanguageMetaData.languageId, 0, text !== null && text !== void 0 ? text : '');
        };
    }
}
class DefaultLangiumDocuments {
    constructor(services){
        this.documentMap = new Map();
        this.langiumDocumentFactory = services.workspace.LangiumDocumentFactory;
    }
    get all() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(this.documentMap.values());
    }
    addDocument(document) {
        const uriString = document.uri.toString();
        if (this.documentMap.has(uriString)) {
            throw new Error(`A document with the URI '${uriString}' is already present.`);
        }
        this.documentMap.set(uriString, document);
    }
    getDocument(uri) {
        const uriString = uri.toString();
        return this.documentMap.get(uriString);
    }
    async getOrCreateDocument(uri, cancellationToken) {
        let document = this.getDocument(uri);
        if (document) {
            return document;
        }
        document = await this.langiumDocumentFactory.fromUri(uri, cancellationToken);
        this.addDocument(document);
        return document;
    }
    createDocument(uri, text, cancellationToken) {
        if (cancellationToken) {
            return this.langiumDocumentFactory.fromString(text, uri, cancellationToken).then((document)=>{
                this.addDocument(document);
                return document;
            });
        } else {
            const document = this.langiumDocumentFactory.fromString(text, uri);
            this.addDocument(document);
            return document;
        }
    }
    hasDocument(uri) {
        return this.documentMap.has(uri.toString());
    }
    invalidateDocument(uri) {
        const uriString = uri.toString();
        const langiumDoc = this.documentMap.get(uriString);
        if (langiumDoc) {
            langiumDoc.state = DocumentState.Changed;
            langiumDoc.precomputedScopes = undefined;
            langiumDoc.references = [];
            langiumDoc.diagnostics = undefined;
        }
        return langiumDoc;
    }
    deleteDocument(uri) {
        const uriString = uri.toString();
        const langiumDoc = this.documentMap.get(uriString);
        if (langiumDoc) {
            langiumDoc.state = DocumentState.Changed;
            this.documentMap.delete(uriString);
        }
        return langiumDoc;
    }
} //# sourceMappingURL=documents.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$textdocument$40$1$2e$0$2e$12$2f$node_modules$2f$vscode$2d$languageserver$2d$textdocument$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-languageserver-textdocument@1.0.12/node_modules/vscode-languageserver-textdocument/lib/esm/main.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/linker.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultLinker": (()=>DefaultLinker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
class DefaultLinker {
    constructor(services){
        this.reflection = services.shared.AstReflection;
        this.langiumDocuments = ()=>services.shared.workspace.LangiumDocuments;
        this.scopeProvider = services.references.ScopeProvider;
        this.astNodeLocator = services.workspace.AstNodeLocator;
    }
    async link(document, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        for (const node of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAst"])(document.parseResult.value)){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamReferences"])(node).forEach((ref)=>this.doLink(ref, document));
        }
    }
    doLink(refInfo, document) {
        const ref = refInfo.reference;
        // The reference may already have been resolved lazily by accessing its `ref` property.
        if (ref._ref === undefined) {
            try {
                const description = this.getCandidate(refInfo);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinkingError"])(description)) {
                    ref._ref = description;
                } else {
                    ref._nodeDescription = description;
                    if (this.langiumDocuments().hasDocument(description.documentUri)) {
                        // The target document is already loaded
                        const linkedNode = this.loadAstNode(description);
                        ref._ref = linkedNode !== null && linkedNode !== void 0 ? linkedNode : this.createLinkingError(refInfo, description);
                    }
                }
            } catch (err) {
                ref._ref = Object.assign(Object.assign({}, refInfo), {
                    message: `An error occurred while resolving reference to '${ref.$refText}': ${err}`
                });
            }
        }
        // Add the reference to the document's array of references
        document.references.push(ref);
    }
    unlink(document) {
        for (const ref of document.references){
            delete ref._ref;
            delete ref._nodeDescription;
        }
        document.references = [];
    }
    getCandidate(refInfo) {
        const scope = this.scopeProvider.getScope(refInfo);
        const description = scope.getElement(refInfo.reference.$refText);
        return description !== null && description !== void 0 ? description : this.createLinkingError(refInfo);
    }
    buildReference(node, property, refNode, refText) {
        // See behavior description in doc of Linker, update that on changes in here.
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const linker = this;
        const reference = {
            $refNode: refNode,
            $refText: refText,
            get ref () {
                var _a;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(this._ref)) {
                    // Most frequent case: the target is already resolved.
                    return this._ref;
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNodeDescription"])(this._nodeDescription)) {
                    // A candidate has been found before, but it is not loaded yet.
                    const linkedNode = linker.loadAstNode(this._nodeDescription);
                    this._ref = linkedNode !== null && linkedNode !== void 0 ? linkedNode : linker.createLinkingError({
                        reference,
                        container: node,
                        property
                    }, this._nodeDescription);
                } else if (this._ref === undefined) {
                    // The reference has not been linked yet, so do that now.
                    const refData = linker.getLinkedNode({
                        reference,
                        container: node,
                        property
                    });
                    if (refData.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(node).state < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].ComputedScopes) {
                        // Document scope is not ready, don't set `this._ref` so linker can retry later.
                        return undefined;
                    }
                    this._ref = (_a = refData.node) !== null && _a !== void 0 ? _a : refData.error;
                    this._nodeDescription = refData.descr;
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(this._ref) ? this._ref : undefined;
            },
            get $nodeDescription () {
                return this._nodeDescription;
            },
            get error () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinkingError"])(this._ref) ? this._ref : undefined;
            }
        };
        return reference;
    }
    getLinkedNode(refInfo) {
        try {
            const description = this.getCandidate(refInfo);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinkingError"])(description)) {
                return {
                    error: description
                };
            }
            const linkedNode = this.loadAstNode(description);
            if (linkedNode) {
                return {
                    node: linkedNode,
                    descr: description
                };
            } else {
                return {
                    descr: description,
                    error: this.createLinkingError(refInfo, description)
                };
            }
        } catch (err) {
            return {
                error: Object.assign(Object.assign({}, refInfo), {
                    message: `An error occurred while resolving reference to '${refInfo.reference.$refText}': ${err}`
                })
            };
        }
    }
    loadAstNode(nodeDescription) {
        if (nodeDescription.node) {
            return nodeDescription.node;
        }
        const doc = this.langiumDocuments().getDocument(nodeDescription.documentUri);
        if (!doc) {
            return undefined;
        }
        return this.astNodeLocator.getAstNode(doc.parseResult.value, nodeDescription.path);
    }
    createLinkingError(refInfo, targetDescription) {
        // Check whether the document is sufficiently processed by the DocumentBuilder. If not, this is a hint for a bug
        // in the language implementation.
        const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(refInfo.container);
        if (document.state < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].ComputedScopes) {
            console.warn(`Attempted reference resolution before document reached ComputedScopes state (${document.uri}).`);
        }
        const referenceType = this.reflection.getReferenceType(refInfo);
        return Object.assign(Object.assign({}, refInfo), {
            message: `Could not resolve reference to ${referenceType} named '${refInfo.reference.$refText}'.`,
            targetDescription
        });
    }
} //# sourceMappingURL=linker.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/name-provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultNameProvider": (()=>DefaultNameProvider),
    "isNamed": (()=>isNamed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)");
;
function isNamed(node) {
    return typeof node.name === 'string';
}
class DefaultNameProvider {
    getName(node) {
        if (isNamed(node)) {
            return node.name;
        }
        return undefined;
    }
    getNameNode(node) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNodeForProperty"])(node.$cstNode, 'name');
    }
} //# sourceMappingURL=name-provider.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/references.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultReferences": (()=>DefaultReferences)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
class DefaultReferences {
    constructor(services){
        this.nameProvider = services.references.NameProvider;
        this.index = services.shared.workspace.IndexManager;
        this.nodeLocator = services.workspace.AstNodeLocator;
    }
    findDeclaration(sourceCstNode) {
        if (sourceCstNode) {
            const assignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAssignment"])(sourceCstNode);
            const nodeElem = sourceCstNode.astNode;
            if (assignment && nodeElem) {
                const reference = nodeElem[assignment.feature];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(reference)) {
                    return reference.ref;
                } else if (Array.isArray(reference)) {
                    for (const ref of reference){
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(ref) && ref.$refNode && ref.$refNode.offset <= sourceCstNode.offset && ref.$refNode.end >= sourceCstNode.end) {
                            return ref.ref;
                        }
                    }
                }
            }
            if (nodeElem) {
                const nameNode = this.nameProvider.getNameNode(nodeElem);
                // Only return the targeted node in case the targeted cst node is the name node or part of it
                if (nameNode && (nameNode === sourceCstNode || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChildNode"])(sourceCstNode, nameNode))) {
                    return nodeElem;
                }
            }
        }
        return undefined;
    }
    findDeclarationNode(sourceCstNode) {
        const astNode = this.findDeclaration(sourceCstNode);
        if (astNode === null || astNode === void 0 ? void 0 : astNode.$cstNode) {
            const targetNode = this.nameProvider.getNameNode(astNode);
            return targetNode !== null && targetNode !== void 0 ? targetNode : astNode.$cstNode;
        }
        return undefined;
    }
    findReferences(targetNode, options) {
        const refs = [];
        if (options.includeDeclaration) {
            const ref = this.getReferenceToSelf(targetNode);
            if (ref) {
                refs.push(ref);
            }
        }
        let indexReferences = this.index.findAllReferences(targetNode, this.nodeLocator.getAstNodePath(targetNode));
        if (options.documentUri) {
            indexReferences = indexReferences.filter((ref)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UriUtils"].equals(ref.sourceUri, options.documentUri));
        }
        refs.push(...indexReferences);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(refs);
    }
    getReferenceToSelf(targetNode) {
        const nameNode = this.nameProvider.getNameNode(targetNode);
        if (nameNode) {
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(targetNode);
            const path = this.nodeLocator.getAstNodePath(targetNode);
            return {
                sourceUri: doc.uri,
                sourcePath: path,
                targetUri: doc.uri,
                targetPath: path,
                segment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDocumentSegment"])(nameNode),
                local: true
            };
        }
        return undefined;
    }
} //# sourceMappingURL=references.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/collections.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "BiMap": (()=>BiMap),
    "MultiMap": (()=>MultiMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
;
class MultiMap {
    constructor(elements){
        this.map = new Map();
        if (elements) {
            for (const [key, value] of elements){
                this.add(key, value);
            }
        }
    }
    /**
     * The total number of values in the multimap.
     */ get size() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reduction"].sum((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(this.map.values()).map((a)=>a.length));
    }
    /**
     * Clear all entries in the multimap.
     */ clear() {
        this.map.clear();
    }
    /**
     * Operates differently depending on whether a `value` is given:
     *  * With a value, this method deletes the specific key / value pair from the multimap.
     *  * Without a value, all values associated with the given key are deleted.
     *
     * @returns `true` if a value existed and has been removed, or `false` if the specified
     *     key / value does not exist.
     */ delete(key, value) {
        if (value === undefined) {
            return this.map.delete(key);
        } else {
            const values = this.map.get(key);
            if (values) {
                const index = values.indexOf(value);
                if (index >= 0) {
                    if (values.length === 1) {
                        this.map.delete(key);
                    } else {
                        values.splice(index, 1);
                    }
                    return true;
                }
            }
            return false;
        }
    }
    /**
     * Returns an array of all values associated with the given key. If no value exists,
     * an empty array is returned.
     *
     * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
     * value and `delete` to remove a value from the multimap.
     */ get(key) {
        var _a;
        return (_a = this.map.get(key)) !== null && _a !== void 0 ? _a : [];
    }
    /**
     * Operates differently depending on whether a `value` is given:
     *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
     *  * Without a value, this method returns `true` if the given key is present in the multimap.
     */ has(key, value) {
        if (value === undefined) {
            return this.map.has(key);
        } else {
            const values = this.map.get(key);
            if (values) {
                return values.indexOf(value) >= 0;
            }
            return false;
        }
    }
    /**
     * Add the given key / value pair to the multimap.
     */ add(key, value) {
        if (this.map.has(key)) {
            this.map.get(key).push(value);
        } else {
            this.map.set(key, [
                value
            ]);
        }
        return this;
    }
    /**
     * Add the given set of key / value pairs to the multimap.
     */ addAll(key, values) {
        if (this.map.has(key)) {
            this.map.get(key).push(...values);
        } else {
            this.map.set(key, Array.from(values));
        }
        return this;
    }
    /**
     * Invokes the given callback function for every key / value pair in the multimap.
     */ forEach(callbackfn) {
        this.map.forEach((array, key)=>array.forEach((value)=>callbackfn(value, key, this)));
    }
    /**
     * Returns an iterator of key, value pairs for every entry in the map.
     */ [Symbol.iterator]() {
        return this.entries().iterator();
    }
    /**
     * Returns a stream of key, value pairs for every entry in the map.
     */ entries() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(this.map.entries()).flatMap(([key, array])=>array.map((value)=>[
                    key,
                    value
                ]));
    }
    /**
     * Returns a stream of keys in the map.
     */ keys() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(this.map.keys());
    }
    /**
     * Returns a stream of values in the map.
     */ values() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(this.map.values()).flat();
    }
    /**
     * Returns a stream of key, value set pairs for every key in the map.
     */ entriesGroupedByKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(this.map.entries());
    }
}
class BiMap {
    get size() {
        return this.map.size;
    }
    constructor(elements){
        this.map = new Map();
        this.inverse = new Map();
        if (elements) {
            for (const [key, value] of elements){
                this.set(key, value);
            }
        }
    }
    clear() {
        this.map.clear();
        this.inverse.clear();
    }
    set(key, value) {
        this.map.set(key, value);
        this.inverse.set(value, key);
        return this;
    }
    get(key) {
        return this.map.get(key);
    }
    getKey(value) {
        return this.inverse.get(value);
    }
    delete(key) {
        const value = this.map.get(key);
        if (value !== undefined) {
            this.map.delete(key);
            this.inverse.delete(value);
            return true;
        }
        return false;
    }
} //# sourceMappingURL=collections.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/scope-computation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021-2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultScopeComputation": (()=>DefaultScopeComputation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/collections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
;
;
;
;
class DefaultScopeComputation {
    constructor(services){
        this.nameProvider = services.references.NameProvider;
        this.descriptions = services.workspace.AstNodeDescriptionProvider;
    }
    async computeExports(document, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        return this.computeExportsForNode(document.parseResult.value, document, undefined, cancelToken);
    }
    /**
     * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
     * The list of children to be considered is determined by the function parameter {@link children}.
     * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
     *
     * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
     * @param document The document containing the AST node to be exported.
     * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
     * @param cancelToken Indicates when to cancel the current operation.
     * @throws `OperationCanceled` if a user action occurs during execution.
     * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
     */ async computeExportsForNode(parentNode, document, children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamContents"], cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        const exports = [];
        this.exportNode(parentNode, exports, document);
        for (const node of children(parentNode)){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
            this.exportNode(node, exports, document);
        }
        return exports;
    }
    /**
     * Add a single node to the list of exports if it has a name. Override this method to change how
     * symbols are exported, e.g. by modifying their exported name.
     */ exportNode(node, exports, document) {
        const name = this.nameProvider.getName(node);
        if (name) {
            exports.push(this.descriptions.createDescription(node, name, document));
        }
    }
    async computeLocalScopes(document, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        const rootNode = document.parseResult.value;
        const scopes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiMap"]();
        // Here we navigate the full AST - local scopes shall be available in the whole document
        for (const node of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAllContents"])(rootNode)){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
            this.processNode(node, document, scopes);
        }
        return scopes;
    }
    /**
     * Process a single node during scopes computation. The default implementation makes the node visible
     * in the subtree of its container (if the node has a name). Override this method to change this,
     * e.g. by increasing the visibility to a higher level in the AST.
     */ processNode(node, document, scopes) {
        const container = node.$container;
        if (container) {
            const name = this.nameProvider.getName(node);
            if (name) {
                scopes.add(container, this.descriptions.createDescription(node, name, document));
            }
        }
    }
} //# sourceMappingURL=scope-computation.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/scope.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "EMPTY_SCOPE": (()=>EMPTY_SCOPE),
    "MapScope": (()=>MapScope),
    "StreamScope": (()=>StreamScope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
;
class StreamScope {
    constructor(elements, outerScope, options){
        var _a;
        this.elements = elements;
        this.outerScope = outerScope;
        this.caseInsensitive = (_a = options === null || options === void 0 ? void 0 : options.caseInsensitive) !== null && _a !== void 0 ? _a : false;
    }
    getAllElements() {
        if (this.outerScope) {
            return this.elements.concat(this.outerScope.getAllElements());
        } else {
            return this.elements;
        }
    }
    getElement(name) {
        const local = this.caseInsensitive ? this.elements.find((e)=>e.name.toLowerCase() === name.toLowerCase()) : this.elements.find((e)=>e.name === name);
        if (local) {
            return local;
        }
        if (this.outerScope) {
            return this.outerScope.getElement(name);
        }
        return undefined;
    }
}
class MapScope {
    constructor(elements, outerScope, options){
        var _a;
        this.elements = new Map();
        this.caseInsensitive = (_a = options === null || options === void 0 ? void 0 : options.caseInsensitive) !== null && _a !== void 0 ? _a : false;
        for (const element of elements){
            const name = this.caseInsensitive ? element.name.toLowerCase() : element.name;
            this.elements.set(name, element);
        }
        this.outerScope = outerScope;
    }
    getElement(name) {
        const localName = this.caseInsensitive ? name.toLowerCase() : name;
        const local = this.elements.get(localName);
        if (local) {
            return local;
        }
        if (this.outerScope) {
            return this.outerScope.getElement(name);
        }
        return undefined;
    }
    getAllElements() {
        let elementStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(this.elements.values());
        if (this.outerScope) {
            elementStream = elementStream.concat(this.outerScope.getAllElements());
        }
        return elementStream;
    }
}
const EMPTY_SCOPE = {
    getElement () {
        return undefined;
    },
    getAllElements () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_STREAM"];
    }
}; //# sourceMappingURL=scope.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/caching.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "ContextCache": (()=>ContextCache),
    "DisposableCache": (()=>DisposableCache),
    "DocumentCache": (()=>DocumentCache),
    "SimpleCache": (()=>SimpleCache),
    "WorkspaceCache": (()=>WorkspaceCache)
});
class DisposableCache {
    constructor(){
        this.toDispose = [];
        this.isDisposed = false;
    }
    onDispose(disposable) {
        this.toDispose.push(disposable);
    }
    dispose() {
        this.throwIfDisposed();
        this.clear();
        this.isDisposed = true;
        this.toDispose.forEach((disposable)=>disposable.dispose());
    }
    throwIfDisposed() {
        if (this.isDisposed) {
            throw new Error('This cache has already been disposed');
        }
    }
}
class SimpleCache extends DisposableCache {
    constructor(){
        super(...arguments);
        this.cache = new Map();
    }
    has(key) {
        this.throwIfDisposed();
        return this.cache.has(key);
    }
    set(key, value) {
        this.throwIfDisposed();
        this.cache.set(key, value);
    }
    get(key, provider) {
        this.throwIfDisposed();
        if (this.cache.has(key)) {
            return this.cache.get(key);
        } else if (provider) {
            const value = provider();
            this.cache.set(key, value);
            return value;
        } else {
            return undefined;
        }
    }
    delete(key) {
        this.throwIfDisposed();
        return this.cache.delete(key);
    }
    clear() {
        this.throwIfDisposed();
        this.cache.clear();
    }
}
class ContextCache extends DisposableCache {
    constructor(converter){
        super();
        this.cache = new Map();
        this.converter = converter !== null && converter !== void 0 ? converter : (value)=>value;
    }
    has(contextKey, key) {
        this.throwIfDisposed();
        return this.cacheForContext(contextKey).has(key);
    }
    set(contextKey, key, value) {
        this.throwIfDisposed();
        this.cacheForContext(contextKey).set(key, value);
    }
    get(contextKey, key, provider) {
        this.throwIfDisposed();
        const contextCache = this.cacheForContext(contextKey);
        if (contextCache.has(key)) {
            return contextCache.get(key);
        } else if (provider) {
            const value = provider();
            contextCache.set(key, value);
            return value;
        } else {
            return undefined;
        }
    }
    delete(contextKey, key) {
        this.throwIfDisposed();
        return this.cacheForContext(contextKey).delete(key);
    }
    clear(contextKey) {
        this.throwIfDisposed();
        if (contextKey) {
            const mapKey = this.converter(contextKey);
            this.cache.delete(mapKey);
        } else {
            this.cache.clear();
        }
    }
    cacheForContext(contextKey) {
        const mapKey = this.converter(contextKey);
        let documentCache = this.cache.get(mapKey);
        if (!documentCache) {
            documentCache = new Map();
            this.cache.set(mapKey, documentCache);
        }
        return documentCache;
    }
}
class DocumentCache extends ContextCache {
    constructor(sharedServices){
        super((uri)=>uri.toString());
        this.onDispose(sharedServices.workspace.DocumentBuilder.onUpdate((changed, deleted)=>{
            const allUris = changed.concat(deleted);
            for (const uri of allUris){
                this.clear(uri);
            }
        }));
    }
}
class WorkspaceCache extends SimpleCache {
    constructor(sharedServices){
        super();
        this.onDispose(sharedServices.workspace.DocumentBuilder.onUpdate(()=>{
            this.clear();
        }));
    }
} //# sourceMappingURL=caching.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/scope-provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021-2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultScopeProvider": (()=>DefaultScopeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/scope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$caching$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/caching.js [app-client] (ecmascript)");
;
;
;
;
class DefaultScopeProvider {
    constructor(services){
        this.reflection = services.shared.AstReflection;
        this.nameProvider = services.references.NameProvider;
        this.descriptions = services.workspace.AstNodeDescriptionProvider;
        this.indexManager = services.shared.workspace.IndexManager;
        this.globalScopeCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$caching$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkspaceCache"](services.shared);
    }
    getScope(context) {
        const scopes = [];
        const referenceType = this.reflection.getReferenceType(context);
        const precomputed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(context.container).precomputedScopes;
        if (precomputed) {
            let currentNode = context.container;
            do {
                const allDescriptions = precomputed.get(currentNode);
                if (allDescriptions.length > 0) {
                    scopes.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(allDescriptions).filter((desc)=>this.reflection.isSubtype(desc.type, referenceType)));
                }
                currentNode = currentNode.$container;
            }while (currentNode)
        }
        let result = this.getGlobalScope(referenceType, context);
        for(let i = scopes.length - 1; i >= 0; i--){
            result = this.createScope(scopes[i], result);
        }
        return result;
    }
    /**
     * Create a scope for the given collection of AST node descriptions.
     */ createScope(elements, outerScope, options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamScope"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(elements), outerScope, options);
    }
    /**
     * Create a scope for the given collection of AST nodes, which need to be transformed into respective
     * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
     */ createScopeForNodes(elements, outerScope, options) {
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(elements).map((e)=>{
            const name = this.nameProvider.getName(e);
            if (name) {
                return this.descriptions.createDescription(e, name);
            }
            return undefined;
        }).nonNullable();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamScope"](s, outerScope, options);
    }
    /**
     * Create a global scope filtered for the given reference type.
     */ getGlobalScope(referenceType, _context) {
        return this.globalScopeCache.get(referenceType, ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapScope"](this.indexManager.allElements(referenceType)));
    }
} //# sourceMappingURL=scope-provider.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/json-serializer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultJsonSerializer": (()=>DefaultJsonSerializer),
    "isAstNodeWithComment": (()=>isAstNodeWithComment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-uri@3.0.8/node_modules/vscode-uri/lib/esm/index.mjs [app-client] (ecmascript)");
;
;
;
;
function isAstNodeWithComment(node) {
    return typeof node.$comment === 'string';
}
function isIntermediateReference(obj) {
    return typeof obj === 'object' && !!obj && ('$ref' in obj || '$error' in obj);
}
class DefaultJsonSerializer {
    constructor(services){
        /** The set of AstNode properties to be ignored by the serializer. */ this.ignoreProperties = new Set([
            '$container',
            '$containerProperty',
            '$containerIndex',
            '$document',
            '$cstNode'
        ]);
        this.langiumDocuments = services.shared.workspace.LangiumDocuments;
        this.astNodeLocator = services.workspace.AstNodeLocator;
        this.nameProvider = services.references.NameProvider;
        this.commentProvider = services.documentation.CommentProvider;
    }
    serialize(node, options = {}) {
        const specificReplacer = options === null || options === void 0 ? void 0 : options.replacer;
        const defaultReplacer = (key, value)=>this.replacer(key, value, options);
        const replacer = specificReplacer ? (key, value)=>specificReplacer(key, value, defaultReplacer) : defaultReplacer;
        try {
            this.currentDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(node);
            return JSON.stringify(node, replacer, options === null || options === void 0 ? void 0 : options.space);
        } finally{
            this.currentDocument = undefined;
        }
    }
    deserialize(content, options = {}) {
        const root = JSON.parse(content);
        this.linkNode(root, root, options);
        return root;
    }
    replacer(key, value, { refText, sourceText, textRegions, comments, uriConverter }) {
        var _a, _b, _c, _d;
        if (this.ignoreProperties.has(key)) {
            return undefined;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(value)) {
            const refValue = value.ref;
            const $refText = refText ? value.$refText : undefined;
            if (refValue) {
                const targetDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(refValue);
                let targetUri = '';
                if (this.currentDocument && this.currentDocument !== targetDocument) {
                    if (uriConverter) {
                        targetUri = uriConverter(targetDocument.uri, value);
                    } else {
                        targetUri = targetDocument.uri.toString();
                    }
                }
                const targetPath = this.astNodeLocator.getAstNodePath(refValue);
                return {
                    $ref: `${targetUri}#${targetPath}`,
                    $refText
                };
            } else {
                return {
                    $error: (_b = (_a = value.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Could not resolve reference',
                    $refText
                };
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(value)) {
            let astNode = undefined;
            if (textRegions) {
                astNode = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, value));
                if ((!key || value.$document) && (astNode === null || astNode === void 0 ? void 0 : astNode.$textRegion)) {
                    // The document URI is added to the root node of the resulting JSON tree
                    astNode.$textRegion.documentURI = (_c = this.currentDocument) === null || _c === void 0 ? void 0 : _c.uri.toString();
                }
            }
            if (sourceText && !key) {
                astNode !== null && astNode !== void 0 ? astNode : astNode = Object.assign({}, value);
                astNode.$sourceText = (_d = value.$cstNode) === null || _d === void 0 ? void 0 : _d.text;
            }
            if (comments) {
                astNode !== null && astNode !== void 0 ? astNode : astNode = Object.assign({}, value);
                const comment = this.commentProvider.getComment(value);
                if (comment) {
                    astNode.$comment = comment.replace(/\r/g, '');
                }
            }
            return astNode !== null && astNode !== void 0 ? astNode : value;
        } else {
            return value;
        }
    }
    addAstNodeRegionWithAssignmentsTo(node) {
        const createDocumentSegment = (cstNode)=>({
                offset: cstNode.offset,
                end: cstNode.end,
                length: cstNode.length,
                range: cstNode.range
            });
        if (node.$cstNode) {
            const textRegion = node.$textRegion = createDocumentSegment(node.$cstNode);
            const assignments = textRegion.assignments = {};
            Object.keys(node).filter((key)=>!key.startsWith('$')).forEach((key)=>{
                const propertyAssignments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNodesForProperty"])(node.$cstNode, key).map(createDocumentSegment);
                if (propertyAssignments.length !== 0) {
                    assignments[key] = propertyAssignments;
                }
            });
            return node;
        }
        return undefined;
    }
    linkNode(node, root, options, container, containerProperty, containerIndex) {
        for (const [propertyName, item] of Object.entries(node)){
            if (Array.isArray(item)) {
                for(let index = 0; index < item.length; index++){
                    const element = item[index];
                    if (isIntermediateReference(element)) {
                        item[index] = this.reviveReference(node, propertyName, root, element, options);
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(element)) {
                        this.linkNode(element, root, options, node, propertyName, index);
                    }
                }
            } else if (isIntermediateReference(item)) {
                node[propertyName] = this.reviveReference(node, propertyName, root, item, options);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(item)) {
                this.linkNode(item, root, options, node, propertyName);
            }
        }
        const mutable = node;
        mutable.$container = container;
        mutable.$containerProperty = containerProperty;
        mutable.$containerIndex = containerIndex;
    }
    reviveReference(container, property, root, reference, options) {
        let refText = reference.$refText;
        let error = reference.$error;
        if (reference.$ref) {
            const ref = this.getRefNode(root, reference.$ref, options.uriConverter);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(ref)) {
                if (!refText) {
                    refText = this.nameProvider.getName(ref);
                }
                return {
                    $refText: refText !== null && refText !== void 0 ? refText : '',
                    ref
                };
            } else {
                error = ref;
            }
        }
        if (error) {
            const ref = {
                $refText: refText !== null && refText !== void 0 ? refText : ''
            };
            ref.error = {
                container,
                property,
                message: error,
                reference: ref
            };
            return ref;
        } else {
            return undefined;
        }
    }
    getRefNode(root, uri, uriConverter) {
        try {
            const fragmentIndex = uri.indexOf('#');
            if (fragmentIndex === 0) {
                const node = this.astNodeLocator.getAstNode(root, uri.substring(1));
                if (!node) {
                    return 'Could not resolve path: ' + uri;
                }
                return node;
            }
            if (fragmentIndex < 0) {
                const documentUri = uriConverter ? uriConverter(uri) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(uri);
                const document = this.langiumDocuments.getDocument(documentUri);
                if (!document) {
                    return 'Could not find document for URI: ' + uri;
                }
                return document.parseResult.value;
            }
            const documentUri = uriConverter ? uriConverter(uri.substring(0, fragmentIndex)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(uri.substring(0, fragmentIndex));
            const document = this.langiumDocuments.getDocument(documentUri);
            if (!document) {
                return 'Could not find document for URI: ' + uri;
            }
            if (fragmentIndex === uri.length - 1) {
                return document.parseResult.value;
            }
            const node = this.astNodeLocator.getAstNode(document.parseResult.value, uri.substring(fragmentIndex + 1));
            if (!node) {
                return 'Could not resolve URI: ' + uri;
            }
            return node;
        } catch (err) {
            return String(err);
        }
    }
} //# sourceMappingURL=json-serializer.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/service-registry.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultServiceRegistry": (()=>DefaultServiceRegistry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <locals>");
;
class DefaultServiceRegistry {
    register(language) {
        if (!this.singleton && !this.map) {
            // This is the first language to be registered; store it as singleton.
            this.singleton = language;
            return;
        }
        if (!this.map) {
            this.map = {};
            if (this.singleton) {
                // Move the previous singleton instance to the new map.
                for (const ext of this.singleton.LanguageMetaData.fileExtensions){
                    this.map[ext] = this.singleton;
                }
                this.singleton = undefined;
            }
        }
        // Store the language services in the map.
        for (const ext of language.LanguageMetaData.fileExtensions){
            if (this.map[ext] !== undefined && this.map[ext] !== language) {
                console.warn(`The file extension ${ext} is used by multiple languages. It is now assigned to '${language.LanguageMetaData.languageId}'.`);
            }
            this.map[ext] = language;
        }
    }
    getServices(uri) {
        if (this.singleton !== undefined) {
            return this.singleton;
        }
        if (this.map === undefined) {
            throw new Error('The service registry is empty. Use `register` to register the services of a language.');
        }
        const ext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UriUtils"].extname(uri);
        const services = this.map[ext];
        if (!services) {
            throw new Error(`The service registry contains no services for the extension '${ext}'.`);
        }
        return services;
    }
    get all() {
        if (this.singleton !== undefined) {
            return [
                this.singleton
            ];
        }
        if (this.map !== undefined) {
            return Object.values(this.map);
        }
        return [];
    }
} //# sourceMappingURL=service-registry.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/validation-registry.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "ValidationCategory": (()=>ValidationCategory),
    "ValidationRegistry": (()=>ValidationRegistry),
    "diagnosticData": (()=>diagnosticData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/collections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
;
;
;
function diagnosticData(code) {
    return {
        code
    };
}
var ValidationCategory;
(function(ValidationCategory) {
    ValidationCategory.all = [
        'fast',
        'slow',
        'built-in'
    ];
})(ValidationCategory || (ValidationCategory = {}));
class ValidationRegistry {
    constructor(services){
        this.entries = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiMap"]();
        this.reflection = services.shared.AstReflection;
    }
    /**
     * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
     * or an array of validation checks.
     *
     * @param checksRecord Set of validation checks to register.
     * @param category Optional category for the validation checks (defaults to `'fast'`).
     * @param thisObj Optional object to be used as `this` when calling the validation check functions.
     */ register(checksRecord, thisObj = this, category = 'fast') {
        if (category === 'built-in') {
            throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
        }
        for (const [type, ch] of Object.entries(checksRecord)){
            const callbacks = ch;
            if (Array.isArray(callbacks)) {
                for (const check of callbacks){
                    const entry = {
                        check: this.wrapValidationException(check, thisObj),
                        category
                    };
                    this.addEntry(type, entry);
                }
            } else if (typeof callbacks === 'function') {
                const entry = {
                    check: this.wrapValidationException(callbacks, thisObj),
                    category
                };
                this.addEntry(type, entry);
            }
        }
    }
    wrapValidationException(check, thisObj) {
        return async (node, accept, cancelToken)=>{
            try {
                await check.call(thisObj, node, accept, cancelToken);
            } catch (err) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOperationCancelled"])(err)) {
                    throw err;
                }
                console.error('An error occurred during validation:', err);
                const message = err instanceof Error ? err.message : String(err);
                if (err instanceof Error && err.stack) {
                    console.error(err.stack);
                }
                accept('error', 'An error occurred during validation: ' + message, {
                    node
                });
            }
        };
    }
    addEntry(type, entry) {
        if (type === 'AstNode') {
            this.entries.add('AstNode', entry);
            return;
        }
        for (const subtype of this.reflection.getAllSubTypes(type)){
            this.entries.add(subtype, entry);
        }
    }
    getChecks(type, categories) {
        let checks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(this.entries.get(type)).concat(this.entries.get('AstNode'));
        if (categories) {
            checks = checks.filter((entry)=>categories.includes(entry.category));
        }
        return checks.map((entry)=>entry.check);
    }
} //# sourceMappingURL=validation-registry.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/document-validator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultDocumentValidator": (()=>DefaultDocumentValidator),
    "DocumentValidator": (()=>DocumentValidator),
    "getDiagnosticRange": (()=>getDiagnosticRange),
    "toDiagnosticSeverity": (()=>toDiagnosticSeverity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$validation$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/validation-registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
;
;
;
;
;
;
class DefaultDocumentValidator {
    constructor(services){
        this.validationRegistry = services.validation.ValidationRegistry;
        this.metadata = services.LanguageMetaData;
    }
    async validateDocument(document, options = {}, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        const parseResult = document.parseResult;
        const diagnostics = [];
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
        if (!options.categories || options.categories.includes('built-in')) {
            this.processLexingErrors(parseResult, diagnostics, options);
            if (options.stopAfterLexingErrors && diagnostics.some((d)=>{
                var _a;
                return ((_a = d.data) === null || _a === void 0 ? void 0 : _a.code) === DocumentValidator.LexingError;
            })) {
                return diagnostics;
            }
            this.processParsingErrors(parseResult, diagnostics, options);
            if (options.stopAfterParsingErrors && diagnostics.some((d)=>{
                var _a;
                return ((_a = d.data) === null || _a === void 0 ? void 0 : _a.code) === DocumentValidator.ParsingError;
            })) {
                return diagnostics;
            }
            this.processLinkingErrors(document, diagnostics, options);
            if (options.stopAfterLinkingErrors && diagnostics.some((d)=>{
                var _a;
                return ((_a = d.data) === null || _a === void 0 ? void 0 : _a.code) === DocumentValidator.LinkingError;
            })) {
                return diagnostics;
            }
        }
        // Process custom validations
        try {
            diagnostics.push(...await this.validateAst(parseResult.value, options, cancelToken));
        } catch (err) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOperationCancelled"])(err)) {
                throw err;
            }
            console.error('An error occurred during validation:', err);
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
        return diagnostics;
    }
    processLexingErrors(parseResult, diagnostics, _options) {
        for (const lexerError of parseResult.lexerErrors){
            const diagnostic = {
                severity: toDiagnosticSeverity('error'),
                range: {
                    start: {
                        line: lexerError.line - 1,
                        character: lexerError.column - 1
                    },
                    end: {
                        line: lexerError.line - 1,
                        character: lexerError.column + lexerError.length - 1
                    }
                },
                message: lexerError.message,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$validation$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diagnosticData"])(DocumentValidator.LexingError),
                source: this.getSource()
            };
            diagnostics.push(diagnostic);
        }
    }
    processParsingErrors(parseResult, diagnostics, _options) {
        for (const parserError of parseResult.parserErrors){
            let range = undefined;
            // We can run into the chevrotain error recovery here
            // The token contained in the parser error might be automatically inserted
            // In this case every position value will be `NaN`
            if (isNaN(parserError.token.startOffset)) {
                // Some special parser error types contain a `previousToken`
                // We can simply append our diagnostic to that token
                if ('previousToken' in parserError) {
                    const token = parserError.previousToken;
                    if (!isNaN(token.startOffset)) {
                        const position = {
                            line: token.endLine - 1,
                            character: token.endColumn
                        };
                        range = {
                            start: position,
                            end: position
                        };
                    } else {
                        // No valid prev token. Might be empty document or containing only hidden tokens.
                        // Point to document start
                        const position = {
                            line: 0,
                            character: 0
                        };
                        range = {
                            start: position,
                            end: position
                        };
                    }
                }
            } else {
                range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenToRange"])(parserError.token);
            }
            if (range) {
                const diagnostic = {
                    severity: toDiagnosticSeverity('error'),
                    range,
                    message: parserError.message,
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$validation$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diagnosticData"])(DocumentValidator.ParsingError),
                    source: this.getSource()
                };
                diagnostics.push(diagnostic);
            }
        }
    }
    processLinkingErrors(document, diagnostics, _options) {
        for (const reference of document.references){
            const linkingError = reference.error;
            if (linkingError) {
                const info = {
                    node: linkingError.container,
                    property: linkingError.property,
                    index: linkingError.index,
                    data: {
                        code: DocumentValidator.LinkingError,
                        containerType: linkingError.container.$type,
                        property: linkingError.property,
                        refText: linkingError.reference.$refText
                    }
                };
                diagnostics.push(this.toDiagnostic('error', linkingError.message, info));
            }
        }
    }
    async validateAst(rootNode, options, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        const validationItems = [];
        const acceptor = (severity, message, info)=>{
            validationItems.push(this.toDiagnostic(severity, message, info));
        };
        await Promise.all((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAst"])(rootNode).map(async (node)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
            const checks = this.validationRegistry.getChecks(node.$type, options.categories);
            for (const check of checks){
                await check(node, acceptor, cancelToken);
            }
        }));
        return validationItems;
    }
    toDiagnostic(severity, message, info) {
        return {
            message,
            range: getDiagnosticRange(info),
            severity: toDiagnosticSeverity(severity),
            code: info.code,
            codeDescription: info.codeDescription,
            tags: info.tags,
            relatedInformation: info.relatedInformation,
            data: info.data,
            source: this.getSource()
        };
    }
    getSource() {
        return this.metadata.languageId;
    }
}
function getDiagnosticRange(info) {
    if (info.range) {
        return info.range;
    }
    let cstNode;
    if (typeof info.property === 'string') {
        cstNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNodeForProperty"])(info.node.$cstNode, info.property, info.index);
    } else if (typeof info.keyword === 'string') {
        cstNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNodeForKeyword"])(info.node.$cstNode, info.keyword, info.index);
    }
    cstNode !== null && cstNode !== void 0 ? cstNode : cstNode = info.node.$cstNode;
    if (!cstNode) {
        return {
            start: {
                line: 0,
                character: 0
            },
            end: {
                line: 0,
                character: 0
            }
        };
    }
    return cstNode.range;
}
function toDiagnosticSeverity(severity) {
    switch(severity){
        case 'error':
            return 1; // according to vscode-languageserver-types/lib/esm/main.js#DiagnosticSeverity.Error
        case 'warning':
            return 2; // according to vscode-languageserver-types/lib/esm/main.js#DiagnosticSeverity.Warning
        case 'info':
            return 3; // according to vscode-languageserver-types/lib/esm/main.js#DiagnosticSeverity.Information
        case 'hint':
            return 4; // according to vscode-languageserver-types/lib/esm/main.js#DiagnosticSeverity.Hint
        default:
            throw new Error('Invalid diagnostic severity: ' + severity);
    }
}
var DocumentValidator;
(function(DocumentValidator) {
    DocumentValidator.LexingError = 'lexing-error';
    DocumentValidator.ParsingError = 'parsing-error';
    DocumentValidator.LinkingError = 'linking-error';
})(DocumentValidator || (DocumentValidator = {})); //# sourceMappingURL=document-validator.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/ast-descriptions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultAstNodeDescriptionProvider": (()=>DefaultAstNodeDescriptionProvider),
    "DefaultReferenceDescriptionProvider": (()=>DefaultReferenceDescriptionProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
class DefaultAstNodeDescriptionProvider {
    constructor(services){
        this.astNodeLocator = services.workspace.AstNodeLocator;
        this.nameProvider = services.references.NameProvider;
    }
    createDescription(node, name, document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(node)) {
        name !== null && name !== void 0 ? name : name = this.nameProvider.getName(node);
        const path = this.astNodeLocator.getAstNodePath(node);
        if (!name) {
            throw new Error(`Node at path ${path} has no name.`);
        }
        let nameNodeSegment;
        const nameSegmentGetter = ()=>{
            var _a;
            return nameNodeSegment !== null && nameNodeSegment !== void 0 ? nameNodeSegment : nameNodeSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDocumentSegment"])((_a = this.nameProvider.getNameNode(node)) !== null && _a !== void 0 ? _a : node.$cstNode);
        };
        return {
            node,
            name,
            get nameSegment () {
                return nameSegmentGetter();
            },
            selectionSegment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDocumentSegment"])(node.$cstNode),
            type: node.$type,
            documentUri: document.uri,
            path
        };
    }
}
class DefaultReferenceDescriptionProvider {
    constructor(services){
        this.nodeLocator = services.workspace.AstNodeLocator;
    }
    async createDescriptions(document, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        const descr = [];
        const rootNode = document.parseResult.value;
        for (const astNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAst"])(rootNode)){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamReferences"])(astNode).filter((refInfo)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinkingError"])(refInfo)).forEach((refInfo)=>{
                // TODO: Consider logging a warning or throw an exception when DocumentState is < than Linked
                const description = this.createDescription(refInfo);
                if (description) {
                    descr.push(description);
                }
            });
        }
        return descr;
    }
    createDescription(refInfo) {
        const targetNodeDescr = refInfo.reference.$nodeDescription;
        const refCstNode = refInfo.reference.$refNode;
        if (!targetNodeDescr || !refCstNode) {
            return undefined;
        }
        const docUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(refInfo.container).uri;
        return {
            sourceUri: docUri,
            sourcePath: this.nodeLocator.getAstNodePath(refInfo.container),
            targetUri: targetNodeDescr.documentUri,
            targetPath: targetNodeDescr.path,
            segment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDocumentSegment"])(refCstNode),
            local: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UriUtils"].equals(targetNodeDescr.documentUri, docUri)
        };
    }
} //# sourceMappingURL=ast-descriptions.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/ast-node-locator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultAstNodeLocator": (()=>DefaultAstNodeLocator)
});
class DefaultAstNodeLocator {
    constructor(){
        this.segmentSeparator = '/';
        this.indexSeparator = '@';
    }
    getAstNodePath(node) {
        if (node.$container) {
            const containerPath = this.getAstNodePath(node.$container);
            const newSegment = this.getPathSegment(node);
            const nodePath = containerPath + this.segmentSeparator + newSegment;
            return nodePath;
        }
        return '';
    }
    getPathSegment({ $containerProperty, $containerIndex }) {
        if (!$containerProperty) {
            throw new Error("Missing '$containerProperty' in AST node.");
        }
        if ($containerIndex !== undefined) {
            return $containerProperty + this.indexSeparator + $containerIndex;
        }
        return $containerProperty;
    }
    getAstNode(node, path) {
        const segments = path.split(this.segmentSeparator);
        return segments.reduce((previousValue, currentValue)=>{
            if (!previousValue || currentValue.length === 0) {
                return previousValue;
            }
            const propertyIndex = currentValue.indexOf(this.indexSeparator);
            if (propertyIndex > 0) {
                const property = currentValue.substring(0, propertyIndex);
                const arrayIndex = parseInt(currentValue.substring(propertyIndex + 1));
                const array = previousValue[property];
                return array === null || array === void 0 ? void 0 : array[arrayIndex];
            }
            return previousValue[currentValue];
        }, node);
    }
} //# sourceMappingURL=ast-node-locator.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/configuration.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultConfigurationProvider": (()=>DefaultConfigurationProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
;
class DefaultConfigurationProvider {
    constructor(services){
        this._ready = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Deferred"]();
        this.settings = {};
        this.workspaceConfig = false;
        this.serviceRegistry = services.ServiceRegistry;
    }
    get ready() {
        return this._ready.promise;
    }
    initialize(params) {
        var _a, _b;
        this.workspaceConfig = (_b = (_a = params.capabilities.workspace) === null || _a === void 0 ? void 0 : _a.configuration) !== null && _b !== void 0 ? _b : false;
    }
    async initialized(params) {
        if (this.workspaceConfig) {
            if (params.register) {
                // params.register(...) is a function to be provided by the calling language server for the sake of
                //  decoupling this implementation from the concrete LSP implementations, specifically the LSP Connection
                const languages = this.serviceRegistry.all;
                params.register({
                    // Listen to configuration changes for all languages
                    section: languages.map((lang)=>this.toSectionName(lang.LanguageMetaData.languageId))
                });
            }
            if (params.fetchConfiguration) {
                // params.fetchConfiguration(...) is a function to be provided by the calling language server for the sake of
                //  decoupling this implementation from the concrete LSP implementations, specifically the LSP Connection
                const configToUpdate = this.serviceRegistry.all.map((lang)=>({
                        // Fetch the configuration changes for all languages
                        section: this.toSectionName(lang.LanguageMetaData.languageId)
                    }));
                // get workspace configurations (default scope URI)
                const configs = await params.fetchConfiguration(configToUpdate);
                configToUpdate.forEach((conf, idx)=>{
                    this.updateSectionConfiguration(conf.section, configs[idx]);
                });
            }
        }
        this._ready.resolve();
    }
    /**
     *  Updates the cached configurations using the `change` notification parameters.
     *
     * @param change The parameters of a change configuration notification.
     * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
     */ updateConfiguration(change) {
        if (!change.settings) {
            return;
        }
        Object.keys(change.settings).forEach((section)=>{
            this.updateSectionConfiguration(section, change.settings[section]);
        });
    }
    updateSectionConfiguration(section, configuration) {
        this.settings[section] = configuration;
    }
    /**
    * Returns a configuration value stored for the given language.
    *
    * @param language The language id
    * @param configuration Configuration name
    */ async getConfiguration(language, configuration) {
        await this.ready;
        const sectionName = this.toSectionName(language);
        if (this.settings[sectionName]) {
            return this.settings[sectionName][configuration];
        }
    }
    toSectionName(languageId) {
        return `${languageId}`;
    }
} //# sourceMappingURL=configuration.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/disposable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "Disposable": (()=>Disposable)
});
var Disposable;
(function(Disposable) {
    function create(callback) {
        return {
            dispose: async ()=>await callback()
        };
    }
    Disposable.create = create;
})(Disposable || (Disposable = {})); //# sourceMappingURL=disposable.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/document-builder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultDocumentBuilder": (()=>DefaultDocumentBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$disposable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/disposable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/collections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$validation$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/validation-registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class DefaultDocumentBuilder {
    constructor(services){
        this.updateBuildOptions = {
            // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
            validation: {
                categories: [
                    'built-in',
                    'fast'
                ]
            }
        };
        this.updateListeners = [];
        this.buildPhaseListeners = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiMap"]();
        this.buildState = new Map();
        this.documentBuildWaiters = new Map();
        this.currentState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].Changed;
        this.langiumDocuments = services.workspace.LangiumDocuments;
        this.langiumDocumentFactory = services.workspace.LangiumDocumentFactory;
        this.indexManager = services.workspace.IndexManager;
        this.serviceRegistry = services.ServiceRegistry;
    }
    async build(documents, options = {}, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        var _a, _b;
        for (const document of documents){
            const key = document.uri.toString();
            if (document.state === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].Validated) {
                if (typeof options.validation === 'boolean' && options.validation) {
                    // Force re-running all validation checks
                    document.state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].IndexedReferences;
                    document.diagnostics = undefined;
                    this.buildState.delete(key);
                } else if (typeof options.validation === 'object') {
                    const buildState = this.buildState.get(key);
                    const previousCategories = (_a = buildState === null || buildState === void 0 ? void 0 : buildState.result) === null || _a === void 0 ? void 0 : _a.validationChecks;
                    if (previousCategories) {
                        // Validation with explicit options was requested for a document that has already been partly validated.
                        // In this case, we need to merge the previous validation categories with the new ones.
                        const newCategories = (_b = options.validation.categories) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$validation$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationCategory"].all;
                        const categories = newCategories.filter((c)=>!previousCategories.includes(c));
                        if (categories.length > 0) {
                            this.buildState.set(key, {
                                completed: false,
                                options: {
                                    validation: Object.assign(Object.assign({}, options.validation), {
                                        categories
                                    })
                                },
                                result: buildState.result
                            });
                            document.state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].IndexedReferences;
                        }
                    }
                }
            } else {
                // Default: forget any previous build options
                this.buildState.delete(key);
            }
        }
        this.currentState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].Changed;
        await this.emitUpdate(documents.map((e)=>e.uri), []);
        await this.buildDocuments(documents, options, cancelToken);
    }
    async update(changed, deleted, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        this.currentState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].Changed;
        // Remove all metadata of documents that are reported as deleted
        for (const deletedUri of deleted){
            this.langiumDocuments.deleteDocument(deletedUri);
            this.buildState.delete(deletedUri.toString());
            this.indexManager.remove(deletedUri);
        }
        // Set the state of all changed documents to `Changed` so they are completely rebuilt
        for (const changedUri of changed){
            const invalidated = this.langiumDocuments.invalidateDocument(changedUri);
            if (!invalidated) {
                // We create an unparsed, invalid document.
                // This will be parsed as soon as we reach the first document builder phase.
                // This allows to cancel the parsing process later in case we need it.
                const newDocument = this.langiumDocumentFactory.fromModel({
                    $type: 'INVALID'
                }, changedUri);
                newDocument.state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].Changed;
                this.langiumDocuments.addDocument(newDocument);
            }
            this.buildState.delete(changedUri.toString());
        }
        // Set the state of all documents that should be relinked to `ComputedScopes` (if not already lower)
        const allChangedUris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(changed).concat(deleted).map((uri)=>uri.toString()).toSet();
        this.langiumDocuments.all.filter((doc)=>!allChangedUris.has(doc.uri.toString()) && this.shouldRelink(doc, allChangedUris)).forEach((doc)=>{
            const linker = this.serviceRegistry.getServices(doc.uri).references.Linker;
            linker.unlink(doc);
            doc.state = Math.min(doc.state, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].ComputedScopes);
            doc.diagnostics = undefined;
        });
        // Notify listeners of the update
        await this.emitUpdate(changed, deleted);
        // Only allow interrupting the execution after all state changes are done
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
        // Collect all documents that we should rebuild
        const rebuildDocuments = this.langiumDocuments.all.filter((doc)=>{
            var _a;
            // This includes those that were reported as changed and those that we selected for relinking
            return doc.state < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].Linked || !((_a = this.buildState.get(doc.uri.toString())) === null || _a === void 0 ? void 0 : _a.completed);
        }).toArray();
        await this.buildDocuments(rebuildDocuments, this.updateBuildOptions, cancelToken);
    }
    async emitUpdate(changed, deleted) {
        await Promise.all(this.updateListeners.map((listener)=>listener(changed, deleted)));
    }
    /**
     * Check whether the given document should be relinked after changes were found in the given URIs.
     */ shouldRelink(document, changedUris) {
        // Relink documents with linking errors -- maybe those references can be resolved now
        if (document.references.some((ref)=>ref.error !== undefined)) {
            return true;
        }
        // Check whether the document is affected by any of the changed URIs
        return this.indexManager.isAffected(document, changedUris);
    }
    onUpdate(callback) {
        this.updateListeners.push(callback);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$disposable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].create(()=>{
            const index = this.updateListeners.indexOf(callback);
            if (index >= 0) {
                this.updateListeners.splice(index, 1);
            }
        });
    }
    /**
     * Build the given documents by stepping through all build phases. If a document's state indicates
     * that a certain build phase is already done, the phase is skipped for that document.
     */ async buildDocuments(documents, options, cancelToken) {
        this.prepareBuild(documents, options);
        // 0. Parse content
        await this.runCancelable(documents, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].Parsed, cancelToken, (doc)=>this.langiumDocumentFactory.update(doc, cancelToken));
        // 1. Index content
        await this.runCancelable(documents, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].IndexedContent, cancelToken, (doc)=>this.indexManager.updateContent(doc, cancelToken));
        // 2. Compute scopes
        await this.runCancelable(documents, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].ComputedScopes, cancelToken, async (doc)=>{
            const scopeComputation = this.serviceRegistry.getServices(doc.uri).references.ScopeComputation;
            doc.precomputedScopes = await scopeComputation.computeLocalScopes(doc, cancelToken);
        });
        // 3. Linking
        await this.runCancelable(documents, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].Linked, cancelToken, (doc)=>{
            const linker = this.serviceRegistry.getServices(doc.uri).references.Linker;
            return linker.link(doc, cancelToken);
        });
        // 4. Index references
        await this.runCancelable(documents, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].IndexedReferences, cancelToken, (doc)=>this.indexManager.updateReferences(doc, cancelToken));
        // 5. Validation
        const toBeValidated = documents.filter((doc)=>this.shouldValidate(doc));
        await this.runCancelable(toBeValidated, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocumentState"].Validated, cancelToken, (doc)=>this.validate(doc, cancelToken));
        // If we've made it to this point without being cancelled, we can mark the build state as completed.
        for (const doc of documents){
            const state = this.buildState.get(doc.uri.toString());
            if (state) {
                state.completed = true;
            }
        }
    }
    prepareBuild(documents, options) {
        for (const doc of documents){
            const key = doc.uri.toString();
            const state = this.buildState.get(key);
            // If the document has no previous build state, we set it. If it has one, but it's already marked
            // as completed, we overwrite it. If the previous build was not completed, we keep its state
            // and continue where it was cancelled.
            if (!state || state.completed) {
                this.buildState.set(key, {
                    completed: false,
                    options,
                    result: state === null || state === void 0 ? void 0 : state.result
                });
            }
        }
    }
    async runCancelable(documents, targetState, cancelToken, callback) {
        const filtered = documents.filter((e)=>e.state < targetState);
        for (const document of filtered){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
            await callback(document);
            document.state = targetState;
        }
        await this.notifyBuildPhase(filtered, targetState, cancelToken);
        this.currentState = targetState;
    }
    onBuildPhase(targetState, callback) {
        this.buildPhaseListeners.add(targetState, callback);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$disposable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].create(()=>{
            this.buildPhaseListeners.delete(targetState, callback);
        });
    }
    waitUntil(state, uriOrToken, cancelToken) {
        let uri = undefined;
        if (uriOrToken && 'path' in uriOrToken) {
            uri = uriOrToken;
        } else {
            cancelToken = uriOrToken;
        }
        cancelToken !== null && cancelToken !== void 0 ? cancelToken : cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None;
        if (uri) {
            const document = this.langiumDocuments.getDocument(uri);
            if (document && document.state > state) {
                return Promise.resolve(uri);
            }
        }
        if (this.currentState >= state) {
            return Promise.resolve(undefined);
        } else if (cancelToken.isCancellationRequested) {
            return Promise.reject(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OperationCancelled"]);
        }
        return new Promise((resolve, reject)=>{
            const buildDisposable = this.onBuildPhase(state, ()=>{
                buildDisposable.dispose();
                cancelDisposable.dispose();
                if (uri) {
                    const document = this.langiumDocuments.getDocument(uri);
                    resolve(document === null || document === void 0 ? void 0 : document.uri);
                } else {
                    resolve(undefined);
                }
            });
            const cancelDisposable = cancelToken.onCancellationRequested(()=>{
                buildDisposable.dispose();
                cancelDisposable.dispose();
                reject(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OperationCancelled"]);
            });
        });
    }
    async notifyBuildPhase(documents, state, cancelToken) {
        if (documents.length === 0) {
            // Don't notify when no document has been processed
            return;
        }
        const listeners = this.buildPhaseListeners.get(state);
        for (const listener of listeners){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
            await listener(documents, cancelToken);
        }
    }
    /**
     * Determine whether the given document should be validated during a build. The default
     * implementation checks the `validation` property of the build options. If it's set to `true`
     * or a `ValidationOptions` object, the document is included in the validation phase.
     */ shouldValidate(document) {
        return Boolean(this.getBuildOptions(document).validation);
    }
    /**
     * Run validation checks on the given document and store the resulting diagnostics in the document.
     * If the document already contains diagnostics, the new ones are added to the list.
     */ async validate(document, cancelToken) {
        var _a, _b;
        const validator = this.serviceRegistry.getServices(document.uri).validation.DocumentValidator;
        const validationSetting = this.getBuildOptions(document).validation;
        const options = typeof validationSetting === 'object' ? validationSetting : undefined;
        const diagnostics = await validator.validateDocument(document, options, cancelToken);
        if (document.diagnostics) {
            document.diagnostics.push(...diagnostics);
        } else {
            document.diagnostics = diagnostics;
        }
        // Store information about the executed validation in the build state
        const state = this.buildState.get(document.uri.toString());
        if (state) {
            (_a = state.result) !== null && _a !== void 0 ? _a : state.result = {};
            const newCategories = (_b = options === null || options === void 0 ? void 0 : options.categories) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$validation$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationCategory"].all;
            if (state.result.validationChecks) {
                state.result.validationChecks.push(...newCategories);
            } else {
                state.result.validationChecks = [
                    ...newCategories
                ];
            }
        }
    }
    getBuildOptions(document) {
        var _a, _b;
        return (_b = (_a = this.buildState.get(document.uri.toString())) === null || _a === void 0 ? void 0 : _a.options) !== null && _b !== void 0 ? _b : {};
    }
} //# sourceMappingURL=document-builder.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/index-manager.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultIndexManager": (()=>DefaultIndexManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$caching$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/caching.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
;
;
;
;
;
class DefaultIndexManager {
    constructor(services){
        /**
         * The symbol index stores all `AstNodeDescription` items exported by a document.
         * The key used in this map is the string representation of the specific document URI.
         */ this.symbolIndex = new Map();
        /**
         * This is a cache for the `allElements()` method.
         * It caches the descriptions from `symbolIndex` grouped by types.
         */ this.symbolByTypeIndex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$caching$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextCache"]();
        /**
         * This index keeps track of all `ReferenceDescription` items exported by a document.
         * This is used to compute which elements are affected by a document change
         * and for finding references to an AST node.
         */ this.referenceIndex = new Map();
        this.documents = services.workspace.LangiumDocuments;
        this.serviceRegistry = services.ServiceRegistry;
        this.astReflection = services.AstReflection;
    }
    findAllReferences(targetNode, astNodePath) {
        const targetDocUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(targetNode).uri;
        const result = [];
        this.referenceIndex.forEach((docRefs)=>{
            docRefs.forEach((refDescr)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UriUtils"].equals(refDescr.targetUri, targetDocUri) && refDescr.targetPath === astNodePath) {
                    result.push(refDescr);
                }
            });
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(result);
    }
    allElements(nodeType, uris) {
        let documentUris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stream"])(this.symbolIndex.keys());
        if (uris) {
            documentUris = documentUris.filter((uri)=>!uris || uris.has(uri));
        }
        return documentUris.map((uri)=>this.getFileDescriptions(uri, nodeType)).flat();
    }
    getFileDescriptions(uri, nodeType) {
        var _a;
        if (!nodeType) {
            return (_a = this.symbolIndex.get(uri)) !== null && _a !== void 0 ? _a : [];
        }
        const descriptions = this.symbolByTypeIndex.get(uri, nodeType, ()=>{
            var _a;
            const allFileDescriptions = (_a = this.symbolIndex.get(uri)) !== null && _a !== void 0 ? _a : [];
            return allFileDescriptions.filter((e)=>this.astReflection.isSubtype(e.type, nodeType));
        });
        return descriptions;
    }
    remove(uri) {
        const uriString = uri.toString();
        this.symbolIndex.delete(uriString);
        this.symbolByTypeIndex.clear(uriString);
        this.referenceIndex.delete(uriString);
    }
    async updateContent(document, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        const services = this.serviceRegistry.getServices(document.uri);
        const exports = await services.references.ScopeComputation.computeExports(document, cancelToken);
        const uri = document.uri.toString();
        this.symbolIndex.set(uri, exports);
        this.symbolByTypeIndex.clear(uri);
    }
    async updateReferences(document, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        const services = this.serviceRegistry.getServices(document.uri);
        const indexData = await services.workspace.ReferenceDescriptionProvider.createDescriptions(document, cancelToken);
        this.referenceIndex.set(document.uri.toString(), indexData);
    }
    isAffected(document, changedUris) {
        const references = this.referenceIndex.get(document.uri.toString());
        if (!references) {
            return false;
        }
        return references.some((ref)=>!ref.local && changedUris.has(ref.targetUri.toString()));
    }
} //# sourceMappingURL=index-manager.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/workspace-manager.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultWorkspaceManager": (()=>DefaultWorkspaceManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-uri@3.0.8/node_modules/vscode-uri/lib/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <locals>");
;
;
;
class DefaultWorkspaceManager {
    constructor(services){
        this.initialBuildOptions = {};
        this._ready = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Deferred"]();
        this.serviceRegistry = services.ServiceRegistry;
        this.langiumDocuments = services.workspace.LangiumDocuments;
        this.documentBuilder = services.workspace.DocumentBuilder;
        this.fileSystemProvider = services.workspace.FileSystemProvider;
        this.mutex = services.workspace.WorkspaceLock;
    }
    get ready() {
        return this._ready.promise;
    }
    initialize(params) {
        var _a;
        this.folders = (_a = params.workspaceFolders) !== null && _a !== void 0 ? _a : undefined;
    }
    initialized(_params) {
        // Initialize the workspace even if there are no workspace folders
        // We still want to load additional documents (language library or similar) during initialization
        return this.mutex.write((token)=>{
            var _a;
            return this.initializeWorkspace((_a = this.folders) !== null && _a !== void 0 ? _a : [], token);
        });
    }
    async initializeWorkspace(folders, cancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None) {
        const documents = await this.performStartup(folders);
        // Only after creating all documents do we check whether we need to cancel the initialization
        // The document builder will later pick up on all unprocessed documents
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interruptAndCheck"])(cancelToken);
        await this.documentBuilder.build(documents, this.initialBuildOptions, cancelToken);
    }
    /**
     * Performs the uninterruptable startup sequence of the workspace manager.
     * This methods loads all documents in the workspace and other documents and returns them.
     */ async performStartup(folders) {
        const fileExtensions = this.serviceRegistry.all.flatMap((e)=>e.LanguageMetaData.fileExtensions);
        const documents = [];
        const collector = (document)=>{
            documents.push(document);
            if (!this.langiumDocuments.hasDocument(document.uri)) {
                this.langiumDocuments.addDocument(document);
            }
        };
        // Even though we don't await the initialization of the workspace manager,
        // we can still assume that all library documents and file documents are loaded by the time we start building documents.
        // The mutex prevents anything from performing a workspace build until we check the cancellation token
        await this.loadAdditionalDocuments(folders, collector);
        await Promise.all(folders.map((wf)=>[
                wf,
                this.getRootFolder(wf)
            ]).map(async (entry)=>this.traverseFolder(...entry, fileExtensions, collector)));
        this._ready.resolve();
        return documents;
    }
    /**
     * Load all additional documents that shall be visible in the context of the given workspace
     * folders and add them to the collector. This can be used to include built-in libraries of
     * your language, which can be either loaded from provided files or constructed in memory.
     */ loadAdditionalDocuments(_folders, _collector) {
        return Promise.resolve();
    }
    /**
     * Determine the root folder of the source documents in the given workspace folder.
     * The default implementation returns the URI of the workspace folder, but you can override
     * this to return a subfolder like `src` instead.
     */ getRootFolder(workspaceFolder) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(workspaceFolder.uri);
    }
    /**
     * Traverse the file system folder identified by the given URI and its subfolders. All
     * contained files that match the file extensions are added to the collector.
     */ async traverseFolder(workspaceFolder, folderPath, fileExtensions, collector) {
        const content = await this.fileSystemProvider.readDirectory(folderPath);
        await Promise.all(content.map(async (entry)=>{
            if (this.includeEntry(workspaceFolder, entry, fileExtensions)) {
                if (entry.isDirectory) {
                    await this.traverseFolder(workspaceFolder, entry.uri, fileExtensions, collector);
                } else if (entry.isFile) {
                    const document = await this.langiumDocuments.getOrCreateDocument(entry.uri);
                    collector(document);
                }
            }
        }));
    }
    /**
     * Determine whether the given folder entry shall be included while indexing the workspace.
     */ includeEntry(_workspaceFolder, entry, fileExtensions) {
        const name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UriUtils"].basename(entry.uri);
        if (name.startsWith('.')) {
            return false;
        }
        if (entry.isDirectory) {
            return name !== 'node_modules' && name !== 'out';
        } else if (entry.isFile) {
            const extname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UriUtils"].extname(entry.uri);
            return fileExtensions.includes(extname);
        }
        return false;
    }
} //# sourceMappingURL=workspace-manager.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/lexer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultLexer": (()=>DefaultLexer),
    "isIMultiModeLexerDefinition": (()=>isIMultiModeLexerDefinition),
    "isTokenTypeArray": (()=>isTokenTypeArray),
    "isTokenTypeDictionary": (()=>isTokenTypeDictionary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/api.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chevrotain@11.0.3/node_modules/chevrotain/lib/src/scan/lexer_public.js [app-client] (ecmascript)");
;
class DefaultLexer {
    constructor(services){
        const tokens = services.parser.TokenBuilder.buildTokens(services.Grammar, {
            caseInsensitive: services.LanguageMetaData.caseInsensitive
        });
        this.tokenTypes = this.toTokenTypeDictionary(tokens);
        const lexerTokens = isTokenTypeDictionary(tokens) ? Object.values(tokens) : tokens;
        this.chevrotainLexer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chevrotain$40$11$2e$0$2e$3$2f$node_modules$2f$chevrotain$2f$lib$2f$src$2f$scan$2f$lexer_public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lexer"](lexerTokens, {
            positionTracking: 'full'
        });
    }
    get definition() {
        return this.tokenTypes;
    }
    tokenize(text) {
        var _a;
        const chevrotainResult = this.chevrotainLexer.tokenize(text);
        return {
            tokens: chevrotainResult.tokens,
            errors: chevrotainResult.errors,
            hidden: (_a = chevrotainResult.groups.hidden) !== null && _a !== void 0 ? _a : []
        };
    }
    toTokenTypeDictionary(buildTokens) {
        if (isTokenTypeDictionary(buildTokens)) return buildTokens;
        const tokens = isIMultiModeLexerDefinition(buildTokens) ? Object.values(buildTokens.modes).flat() : buildTokens;
        const res = {};
        tokens.forEach((token)=>res[token.name] = token);
        return res;
    }
}
function isTokenTypeArray(tokenVocabulary) {
    return Array.isArray(tokenVocabulary) && (tokenVocabulary.length === 0 || 'name' in tokenVocabulary[0]);
}
function isIMultiModeLexerDefinition(tokenVocabulary) {
    return tokenVocabulary && 'modes' in tokenVocabulary && 'defaultMode' in tokenVocabulary;
}
function isTokenTypeDictionary(tokenVocabulary) {
    return !isTokenTypeArray(tokenVocabulary) && !isIMultiModeLexerDefinition(tokenVocabulary);
} //# sourceMappingURL=lexer.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/jsdoc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "isJSDoc": (()=>isJSDoc),
    "parseJSDoc": (()=>parseJSDoc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-languageserver-types@3.17.5/node_modules/vscode-languageserver-types/lib/esm/main.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/regexp-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-uri@3.0.8/node_modules/vscode-uri/lib/esm/index.mjs [app-client] (ecmascript)");
;
;
;
function parseJSDoc(node, start, options) {
    let opts;
    let position;
    if (typeof node === 'string') {
        position = start;
        opts = options;
    } else {
        position = node.range.start;
        opts = start;
    }
    if (!position) {
        position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(0, 0);
    }
    const lines = getLines(node);
    const normalizedOptions = normalizeOptions(opts);
    const tokens = tokenize({
        lines,
        position,
        options: normalizedOptions
    });
    return parseJSDocComment({
        index: 0,
        tokens,
        position
    });
}
function isJSDoc(node, options) {
    const normalizedOptions = normalizeOptions(options);
    const lines = getLines(node);
    if (lines.length === 0) {
        return false;
    }
    const first = lines[0];
    const last = lines[lines.length - 1];
    const firstRegex = normalizedOptions.start;
    const lastRegex = normalizedOptions.end;
    return Boolean(firstRegex === null || firstRegex === void 0 ? void 0 : firstRegex.exec(first)) && Boolean(lastRegex === null || lastRegex === void 0 ? void 0 : lastRegex.exec(last));
}
function getLines(node) {
    let content = '';
    if (typeof node === 'string') {
        content = node;
    } else {
        content = node.text;
    }
    const lines = content.split(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEWLINE_REGEXP"]);
    return lines;
}
const tagRegex = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy;
const inlineTagRegex = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function tokenize(context) {
    var _a, _b, _c;
    const tokens = [];
    let currentLine = context.position.line;
    let currentCharacter = context.position.character;
    for(let i = 0; i < context.lines.length; i++){
        const first = i === 0;
        const last = i === context.lines.length - 1;
        let line = context.lines[i];
        let index = 0;
        if (first && context.options.start) {
            const match = (_a = context.options.start) === null || _a === void 0 ? void 0 : _a.exec(line);
            if (match) {
                index = match.index + match[0].length;
            }
        } else {
            const match = (_b = context.options.line) === null || _b === void 0 ? void 0 : _b.exec(line);
            if (match) {
                index = match.index + match[0].length;
            }
        }
        if (last) {
            const match = (_c = context.options.end) === null || _c === void 0 ? void 0 : _c.exec(line);
            if (match) {
                line = line.substring(0, match.index);
            }
        }
        line = line.substring(0, lastCharacter(line));
        const whitespaceEnd = skipWhitespace(line, index);
        if (whitespaceEnd >= line.length) {
            // Only create a break token when we already have previous tokens
            if (tokens.length > 0) {
                const position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(currentLine, currentCharacter);
                tokens.push({
                    type: 'break',
                    content: '',
                    range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(position, position)
                });
            }
        } else {
            tagRegex.lastIndex = index;
            const tagMatch = tagRegex.exec(line);
            if (tagMatch) {
                const fullMatch = tagMatch[0];
                const value = tagMatch[1];
                const start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(currentLine, currentCharacter + index);
                const end = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(currentLine, currentCharacter + index + fullMatch.length);
                tokens.push({
                    type: 'tag',
                    content: value,
                    range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(start, end)
                });
                index += fullMatch.length;
                index = skipWhitespace(line, index);
            }
            if (index < line.length) {
                const rest = line.substring(index);
                const inlineTagMatches = Array.from(rest.matchAll(inlineTagRegex));
                tokens.push(...buildInlineTokens(inlineTagMatches, rest, currentLine, currentCharacter + index));
            }
        }
        currentLine++;
        currentCharacter = 0;
    }
    // Remove last break token if there is one
    if (tokens.length > 0 && tokens[tokens.length - 1].type === 'break') {
        return tokens.slice(0, -1);
    }
    return tokens;
}
function buildInlineTokens(tags, line, lineIndex, characterIndex) {
    const tokens = [];
    if (tags.length === 0) {
        const start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, characterIndex);
        const end = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, characterIndex + line.length);
        tokens.push({
            type: 'text',
            content: line,
            range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(start, end)
        });
    } else {
        let lastIndex = 0;
        for (const match of tags){
            const matchIndex = match.index;
            const startContent = line.substring(lastIndex, matchIndex);
            if (startContent.length > 0) {
                tokens.push({
                    type: 'text',
                    content: line.substring(lastIndex, matchIndex),
                    range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, lastIndex + characterIndex), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, matchIndex + characterIndex))
                });
            }
            let offset = startContent.length + 1;
            const tagName = match[1];
            tokens.push({
                type: 'inline-tag',
                content: tagName,
                range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, lastIndex + offset + characterIndex), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, lastIndex + offset + tagName.length + characterIndex))
            });
            offset += tagName.length;
            if (match.length === 4) {
                offset += match[2].length;
                const value = match[3];
                tokens.push({
                    type: 'text',
                    content: value,
                    range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, lastIndex + offset + characterIndex), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, lastIndex + offset + value.length + characterIndex))
                });
            } else {
                tokens.push({
                    type: 'text',
                    content: '',
                    range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, lastIndex + offset + characterIndex), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, lastIndex + offset + characterIndex))
                });
            }
            lastIndex = matchIndex + match[0].length;
        }
        const endContent = line.substring(lastIndex);
        if (endContent.length > 0) {
            tokens.push({
                type: 'text',
                content: endContent,
                range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, lastIndex + characterIndex), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(lineIndex, lastIndex + characterIndex + endContent.length))
            });
        }
    }
    return tokens;
}
const nonWhitespaceRegex = /\S/;
const whitespaceEndRegex = /\s*$/;
function skipWhitespace(line, index) {
    const match = line.substring(index).match(nonWhitespaceRegex);
    if (match) {
        return index + match.index;
    } else {
        return line.length;
    }
}
function lastCharacter(line) {
    const match = line.match(whitespaceEndRegex);
    if (match && typeof match.index === 'number') {
        return match.index;
    }
    return undefined;
}
// Parsing
function parseJSDocComment(context) {
    var _a, _b, _c, _d;
    const startPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].create(context.position.line, context.position.character);
    if (context.tokens.length === 0) {
        return new JSDocCommentImpl([], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(startPosition, startPosition));
    }
    const elements = [];
    while(context.index < context.tokens.length){
        const element = parseJSDocElement(context, elements[elements.length - 1]);
        if (element) {
            elements.push(element);
        }
    }
    const start = (_b = (_a = elements[0]) === null || _a === void 0 ? void 0 : _a.range.start) !== null && _b !== void 0 ? _b : startPosition;
    const end = (_d = (_c = elements[elements.length - 1]) === null || _c === void 0 ? void 0 : _c.range.end) !== null && _d !== void 0 ? _d : startPosition;
    return new JSDocCommentImpl(elements, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(start, end));
}
function parseJSDocElement(context, last) {
    const next = context.tokens[context.index];
    if (next.type === 'tag') {
        return parseJSDocTag(context, false);
    } else if (next.type === 'text' || next.type === 'inline-tag') {
        return parseJSDocText(context);
    } else {
        appendEmptyLine(next, last);
        context.index++;
        return undefined;
    }
}
function appendEmptyLine(token, element) {
    if (element) {
        const line = new JSDocLineImpl('', token.range);
        if ('inlines' in element) {
            element.inlines.push(line);
        } else {
            element.content.inlines.push(line);
        }
    }
}
function parseJSDocText(context) {
    let token = context.tokens[context.index];
    const firstToken = token;
    let lastToken = token;
    const lines = [];
    while(token && token.type !== 'break' && token.type !== 'tag'){
        lines.push(parseJSDocInline(context));
        lastToken = token;
        token = context.tokens[context.index];
    }
    return new JSDocTextImpl(lines, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(firstToken.range.start, lastToken.range.end));
}
function parseJSDocInline(context) {
    const token = context.tokens[context.index];
    if (token.type === 'inline-tag') {
        return parseJSDocTag(context, true);
    } else {
        return parseJSDocLine(context);
    }
}
function parseJSDocTag(context, inline) {
    const tagToken = context.tokens[context.index++];
    const name = tagToken.content.substring(1);
    const nextToken = context.tokens[context.index];
    if ((nextToken === null || nextToken === void 0 ? void 0 : nextToken.type) === 'text') {
        if (inline) {
            const docLine = parseJSDocLine(context);
            return new JSDocTagImpl(name, new JSDocTextImpl([
                docLine
            ], docLine.range), inline, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(tagToken.range.start, docLine.range.end));
        } else {
            const textDoc = parseJSDocText(context);
            return new JSDocTagImpl(name, textDoc, inline, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$languageserver$2d$types$40$3$2e$17$2e$5$2f$node_modules$2f$vscode$2d$languageserver$2d$types$2f$lib$2f$esm$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].create(tagToken.range.start, textDoc.range.end));
        }
    } else {
        const range = tagToken.range;
        return new JSDocTagImpl(name, new JSDocTextImpl([], range), inline, range);
    }
}
function parseJSDocLine(context) {
    const token = context.tokens[context.index++];
    return new JSDocLineImpl(token.content, token.range);
}
function normalizeOptions(options) {
    if (!options) {
        return normalizeOptions({
            start: '/**',
            end: '*/',
            line: '*'
        });
    }
    const { start, end, line } = options;
    return {
        start: normalizeOption(start, true),
        end: normalizeOption(end, false),
        line: normalizeOption(line, true)
    };
}
function normalizeOption(option, start) {
    if (typeof option === 'string' || typeof option === 'object') {
        const escaped = typeof option === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegExp"])(option) : option.source;
        if (start) {
            return new RegExp(`^\\s*${escaped}`);
        } else {
            return new RegExp(`\\s*${escaped}\\s*$`);
        }
    } else {
        return option;
    }
}
class JSDocCommentImpl {
    constructor(elements, range){
        this.elements = elements;
        this.range = range;
    }
    getTag(name) {
        return this.getAllTags().find((e)=>e.name === name);
    }
    getTags(name) {
        return this.getAllTags().filter((e)=>e.name === name);
    }
    getAllTags() {
        return this.elements.filter((e)=>'name' in e);
    }
    toString() {
        let value = '';
        for (const element of this.elements){
            if (value.length === 0) {
                value = element.toString();
            } else {
                const text = element.toString();
                value += fillNewlines(value) + text;
            }
        }
        return value.trim();
    }
    toMarkdown(options) {
        let value = '';
        for (const element of this.elements){
            if (value.length === 0) {
                value = element.toMarkdown(options);
            } else {
                const text = element.toMarkdown(options);
                value += fillNewlines(value) + text;
            }
        }
        return value.trim();
    }
}
class JSDocTagImpl {
    constructor(name, content, inline, range){
        this.name = name;
        this.content = content;
        this.inline = inline;
        this.range = range;
    }
    toString() {
        let text = `@${this.name}`;
        const content = this.content.toString();
        if (this.content.inlines.length === 1) {
            text = `${text} ${content}`;
        } else if (this.content.inlines.length > 1) {
            text = `${text}\n${content}`;
        }
        if (this.inline) {
            // Inline tags are surrounded by curly braces
            return `{${text}}`;
        } else {
            return text;
        }
    }
    toMarkdown(options) {
        var _a, _b;
        return (_b = (_a = options === null || options === void 0 ? void 0 : options.renderTag) === null || _a === void 0 ? void 0 : _a.call(options, this)) !== null && _b !== void 0 ? _b : this.toMarkdownDefault(options);
    }
    toMarkdownDefault(options) {
        const content = this.content.toMarkdown(options);
        if (this.inline) {
            const rendered = renderInlineTag(this.name, content, options !== null && options !== void 0 ? options : {});
            if (typeof rendered === 'string') {
                return rendered;
            }
        }
        let marker = '';
        if ((options === null || options === void 0 ? void 0 : options.tag) === 'italic' || (options === null || options === void 0 ? void 0 : options.tag) === undefined) {
            marker = '*';
        } else if ((options === null || options === void 0 ? void 0 : options.tag) === 'bold') {
            marker = '**';
        } else if ((options === null || options === void 0 ? void 0 : options.tag) === 'bold-italic') {
            marker = '***';
        }
        let text = `${marker}@${this.name}${marker}`;
        if (this.content.inlines.length === 1) {
            text = `${text} — ${content}`;
        } else if (this.content.inlines.length > 1) {
            text = `${text}\n${content}`;
        }
        if (this.inline) {
            // Inline tags are surrounded by curly braces
            return `{${text}}`;
        } else {
            return text;
        }
    }
}
function renderInlineTag(tag, content, options) {
    var _a, _b;
    if (tag === 'linkplain' || tag === 'linkcode' || tag === 'link') {
        const index = content.indexOf(' ');
        let display = content;
        if (index > 0) {
            const displayStart = skipWhitespace(content, index);
            display = content.substring(displayStart);
            content = content.substring(0, index);
        }
        if (tag === 'linkcode' || tag === 'link' && options.link === 'code') {
            // Surround the display value in a markdown inline code block
            display = `\`${display}\``;
        }
        const renderedLink = (_b = (_a = options.renderLink) === null || _a === void 0 ? void 0 : _a.call(options, content, display)) !== null && _b !== void 0 ? _b : renderLinkDefault(content, display);
        return renderedLink;
    }
    return undefined;
}
function renderLinkDefault(content, display) {
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(content, true);
        return `[${display}](${content})`;
    } catch (_a) {
        return content;
    }
}
class JSDocTextImpl {
    constructor(lines, range){
        this.inlines = lines;
        this.range = range;
    }
    toString() {
        let text = '';
        for(let i = 0; i < this.inlines.length; i++){
            const inline = this.inlines[i];
            const next = this.inlines[i + 1];
            text += inline.toString();
            if (next && next.range.start.line > inline.range.start.line) {
                text += '\n';
            }
        }
        return text;
    }
    toMarkdown(options) {
        let text = '';
        for(let i = 0; i < this.inlines.length; i++){
            const inline = this.inlines[i];
            const next = this.inlines[i + 1];
            text += inline.toMarkdown(options);
            if (next && next.range.start.line > inline.range.start.line) {
                text += '\n';
            }
        }
        return text;
    }
}
class JSDocLineImpl {
    constructor(text, range){
        this.text = text;
        this.range = range;
    }
    toString() {
        return this.text;
    }
    toMarkdown() {
        return this.text;
    }
}
function fillNewlines(text) {
    if (text.endsWith('\n')) {
        return '\n';
    } else {
        return '\n\n';
    }
} //# sourceMappingURL=jsdoc.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/documentation-provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "JSDocDocumentationProvider": (()=>JSDocDocumentationProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$jsdoc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/jsdoc.js [app-client] (ecmascript)");
;
;
class JSDocDocumentationProvider {
    constructor(services){
        this.indexManager = services.shared.workspace.IndexManager;
        this.commentProvider = services.documentation.CommentProvider;
    }
    getDocumentation(node) {
        const comment = this.commentProvider.getComment(node);
        if (comment && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$jsdoc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJSDoc"])(comment)) {
            const parsedJSDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$jsdoc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseJSDoc"])(comment);
            return parsedJSDoc.toMarkdown({
                renderLink: (link, display)=>{
                    return this.documentationLinkRenderer(node, link, display);
                },
                renderTag: (tag)=>{
                    return this.documentationTagRenderer(node, tag);
                }
            });
        }
        return undefined;
    }
    documentationLinkRenderer(node, name, display) {
        var _a;
        const description = (_a = this.findNameInPrecomputedScopes(node, name)) !== null && _a !== void 0 ? _a : this.findNameInGlobalScope(node, name);
        if (description && description.nameSegment) {
            const line = description.nameSegment.range.start.line + 1;
            const character = description.nameSegment.range.start.character + 1;
            const uri = description.documentUri.with({
                fragment: `L${line},${character}`
            });
            return `[${display}](${uri.toString()})`;
        } else {
            return undefined;
        }
    }
    documentationTagRenderer(_node, _tag) {
        // Fall back to the default tag rendering
        return undefined;
    }
    findNameInPrecomputedScopes(node, name) {
        const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(node);
        const precomputed = document.precomputedScopes;
        if (!precomputed) {
            return undefined;
        }
        let currentNode = node;
        do {
            const allDescriptions = precomputed.get(currentNode);
            const description = allDescriptions.find((e)=>e.name === name);
            if (description) {
                return description;
            }
            currentNode = currentNode.$container;
        }while (currentNode)
        return undefined;
    }
    findNameInGlobalScope(node, name) {
        const description = this.indexManager.allElements().find((e)=>e.name === name);
        return description;
    }
} //# sourceMappingURL=documentation-provider.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/comment-provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultCommentProvider": (()=>DefaultCommentProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$serializer$2f$json$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/json-serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)");
;
;
class DefaultCommentProvider {
    constructor(services){
        this.grammarConfig = ()=>services.parser.GrammarConfig;
    }
    getComment(node) {
        var _a;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$serializer$2f$json$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNodeWithComment"])(node)) {
            return node.$comment;
        }
        return (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findCommentNode"])(node.$cstNode, this.grammarConfig().multilineCommentRules)) === null || _a === void 0 ? void 0 : _a.text;
    }
} //# sourceMappingURL=comment-provider.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/event.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2024 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ // eslint-disable-next-line no-restricted-imports
__turbopack_esm__({});
;
 //# sourceMappingURL=event.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/event.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/event.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/async-parser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "AbstractThreadedAsyncParser": (()=>AbstractThreadedAsyncParser),
    "DefaultAsyncParser": (()=>DefaultAsyncParser),
    "ParserWorker": (()=>ParserWorker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/event.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/events.js [app-client] (ecmascript)");
;
;
class DefaultAsyncParser {
    constructor(services){
        this.syncParser = services.parser.LangiumParser;
    }
    parse(text) {
        return Promise.resolve(this.syncParser.parse(text));
    }
}
class AbstractThreadedAsyncParser {
    constructor(services){
        /**
         * The thread count determines how many threads are used to parse files in parallel.
         * The default value is 8. Decreasing this value increases startup performance, but decreases parallel parsing performance.
         */ this.threadCount = 8;
        /**
         * The termination delay determines how long the parser waits for a thread to finish after a cancellation request.
         * The default value is 200(ms).
         */ this.terminationDelay = 200;
        this.workerPool = [];
        this.queue = [];
        this.hydrator = services.serializer.Hydrator;
    }
    initializeWorkers() {
        while(this.workerPool.length < this.threadCount){
            const worker = this.createWorker();
            worker.onReady(()=>{
                if (this.queue.length > 0) {
                    const deferred = this.queue.shift();
                    if (deferred) {
                        worker.lock();
                        deferred.resolve(worker);
                    }
                }
            });
            this.workerPool.push(worker);
        }
    }
    async parse(text, cancelToken) {
        const worker = await this.acquireParserWorker(cancelToken);
        const deferred = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Deferred"]();
        let timeout;
        // If the cancellation token is requested, we wait for a certain time before terminating the worker.
        // Since the cancellation token lives longer than the parsing process, we need to dispose the event listener.
        // Otherwise, we might accidentally terminate the worker after the parsing process has finished.
        const cancellation = cancelToken.onCancellationRequested(()=>{
            timeout = setTimeout(()=>{
                this.terminateWorker(worker);
            }, this.terminationDelay);
        });
        worker.parse(text).then((result)=>{
            const hydrated = this.hydrator.hydrate(result);
            deferred.resolve(hydrated);
        }).catch((err)=>{
            deferred.reject(err);
        }).finally(()=>{
            cancellation.dispose();
            clearTimeout(timeout);
        });
        return deferred.promise;
    }
    terminateWorker(worker) {
        worker.terminate();
        const index = this.workerPool.indexOf(worker);
        if (index >= 0) {
            this.workerPool.splice(index, 1);
        }
    }
    async acquireParserWorker(cancelToken) {
        this.initializeWorkers();
        for (const worker of this.workerPool){
            if (worker.ready) {
                worker.lock();
                return worker;
            }
        }
        const deferred = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Deferred"]();
        cancelToken.onCancellationRequested(()=>{
            const index = this.queue.indexOf(deferred);
            if (index >= 0) {
                this.queue.splice(index, 1);
            }
            deferred.reject(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OperationCancelled"]);
        });
        this.queue.push(deferred);
        return deferred.promise;
    }
}
class ParserWorker {
    get ready() {
        return this._ready;
    }
    get onReady() {
        return this.onReadyEmitter.event;
    }
    constructor(sendMessage, onMessage, onError, terminate){
        this.onReadyEmitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.deferred = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Deferred"]();
        this._ready = true;
        this._parsing = false;
        this.sendMessage = sendMessage;
        this._terminate = terminate;
        onMessage((result)=>{
            const parseResult = result;
            this.deferred.resolve(parseResult);
            this.unlock();
        });
        onError((error)=>{
            this.deferred.reject(error);
            this.unlock();
        });
    }
    terminate() {
        this.deferred.reject(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OperationCancelled"]);
        this._terminate();
    }
    lock() {
        this._ready = false;
    }
    unlock() {
        this._parsing = false;
        this._ready = true;
        this.onReadyEmitter.fire();
    }
    parse(text) {
        if (this._parsing) {
            throw new Error('Parser worker is busy');
        }
        this._parsing = true;
        this.deferred = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Deferred"]();
        this.sendMessage(text);
        return this.deferred.promise;
    }
} //# sourceMappingURL=async-parser.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/workspace-lock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultWorkspaceLock": (()=>DefaultWorkspaceLock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js [app-client] (ecmascript)");
;
;
class DefaultWorkspaceLock {
    constructor(){
        this.previousTokenSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
        this.writeQueue = [];
        this.readQueue = [];
        this.done = true;
    }
    write(action) {
        this.cancelWrite();
        const tokenSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
        this.previousTokenSource = tokenSource;
        return this.enqueue(this.writeQueue, action, tokenSource.token);
    }
    read(action) {
        return this.enqueue(this.readQueue, action);
    }
    enqueue(queue, action, cancellationToken) {
        const deferred = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Deferred"]();
        const entry = {
            action,
            deferred,
            cancellationToken: cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$jsonrpc$40$8$2e$2$2e$0$2f$node_modules$2f$vscode$2d$jsonrpc$2f$lib$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None
        };
        queue.push(entry);
        this.performNextOperation();
        return deferred.promise;
    }
    async performNextOperation() {
        if (!this.done) {
            return;
        }
        const entries = [];
        if (this.writeQueue.length > 0) {
            // Just perform the next write action
            entries.push(this.writeQueue.shift());
        } else if (this.readQueue.length > 0) {
            // Empty the read queue and perform all actions in parallel
            entries.push(...this.readQueue.splice(0, this.readQueue.length));
        } else {
            return;
        }
        this.done = false;
        await Promise.all(entries.map(async ({ action, deferred, cancellationToken })=>{
            try {
                // Move the execution of the action to the next event loop tick via `Promise.resolve()`
                const result = await Promise.resolve().then(()=>action(cancellationToken));
                deferred.resolve(result);
            } catch (err) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOperationCancelled"])(err)) {
                    // If the operation was cancelled, we don't want to reject the promise
                    deferred.resolve(undefined);
                } else {
                    deferred.reject(err);
                }
            }
        }));
        this.done = true;
        this.performNextOperation();
    }
    cancelWrite() {
        this.previousTokenSource.cancel();
    }
} //# sourceMappingURL=workspace-lock.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/hydrator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2024 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "DefaultHydrator": (()=>DefaultHydrator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$cst$2d$node$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/cst-node-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/generated/ast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/collections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
class DefaultHydrator {
    constructor(services){
        this.grammarElementIdMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiMap"]();
        this.tokenTypeIdMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiMap"]();
        this.grammar = services.Grammar;
        this.lexer = services.parser.Lexer;
        this.linker = services.references.Linker;
    }
    dehydrate(result) {
        return {
            // We need to create shallow copies of the errors
            // The original errors inherit from the `Error` class, which is not transferable across worker threads
            lexerErrors: result.lexerErrors.map((e)=>Object.assign({}, e)),
            parserErrors: result.parserErrors.map((e)=>Object.assign({}, e)),
            value: this.dehydrateAstNode(result.value, this.createDehyrationContext(result.value))
        };
    }
    createDehyrationContext(node) {
        const astNodes = new Map();
        const cstNodes = new Map();
        for (const astNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAst"])(node)){
            astNodes.set(astNode, {});
        }
        if (node.$cstNode) {
            for (const cstNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamCst"])(node.$cstNode)){
                cstNodes.set(cstNode, {});
            }
        }
        return {
            astNodes,
            cstNodes
        };
    }
    dehydrateAstNode(node, context) {
        const obj = context.astNodes.get(node);
        obj.$type = node.$type;
        obj.$containerIndex = node.$containerIndex;
        obj.$containerProperty = node.$containerProperty;
        if (node.$cstNode !== undefined) {
            obj.$cstNode = this.dehydrateCstNode(node.$cstNode, context);
        }
        for (const [name, value] of Object.entries(node)){
            if (name.startsWith('$')) {
                continue;
            }
            if (Array.isArray(value)) {
                const arr = [];
                obj[name] = arr;
                for (const item of value){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(item)) {
                        arr.push(this.dehydrateAstNode(item, context));
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(item)) {
                        arr.push(this.dehydrateReference(item, context));
                    } else {
                        arr.push(item);
                    }
                }
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(value)) {
                obj[name] = this.dehydrateAstNode(value, context);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(value)) {
                obj[name] = this.dehydrateReference(value, context);
            } else if (value !== undefined) {
                obj[name] = value;
            }
        }
        return obj;
    }
    dehydrateReference(reference, context) {
        const obj = {};
        obj.$refText = reference.$refText;
        if (reference.$refNode) {
            obj.$refNode = context.cstNodes.get(reference.$refNode);
        }
        return obj;
    }
    dehydrateCstNode(node, context) {
        const cstNode = context.cstNodes.get(node);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRootCstNode"])(node)) {
            cstNode.fullText = node.fullText;
        } else {
            // Note: This returns undefined for hidden nodes (i.e. comments)
            cstNode.grammarSource = this.getGrammarElementId(node.grammarSource);
        }
        cstNode.hidden = node.hidden;
        cstNode.astNode = context.astNodes.get(node.astNode);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCompositeCstNode"])(node)) {
            cstNode.content = node.content.map((child)=>this.dehydrateCstNode(child, context));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeafCstNode"])(node)) {
            cstNode.tokenType = node.tokenType.name;
            cstNode.offset = node.offset;
            cstNode.length = node.length;
            cstNode.startLine = node.range.start.line;
            cstNode.startColumn = node.range.start.character;
            cstNode.endLine = node.range.end.line;
            cstNode.endColumn = node.range.end.character;
        }
        return cstNode;
    }
    hydrate(result) {
        const node = result.value;
        const context = this.createHydrationContext(node);
        if ('$cstNode' in node) {
            this.hydrateCstNode(node.$cstNode, context);
        }
        return {
            lexerErrors: result.lexerErrors,
            parserErrors: result.parserErrors,
            value: this.hydrateAstNode(node, context)
        };
    }
    createHydrationContext(node) {
        const astNodes = new Map();
        const cstNodes = new Map();
        for (const astNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAst"])(node)){
            astNodes.set(astNode, {});
        }
        let root;
        if (node.$cstNode) {
            for (const cstNode of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamCst"])(node.$cstNode)){
                let cst;
                if ('fullText' in cstNode) {
                    cst = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$cst$2d$node$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RootCstNodeImpl"](cstNode.fullText);
                    root = cst;
                } else if ('content' in cstNode) {
                    cst = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$cst$2d$node$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompositeCstNodeImpl"]();
                } else if ('tokenType' in cstNode) {
                    cst = this.hydrateCstLeafNode(cstNode);
                }
                if (cst) {
                    cstNodes.set(cstNode, cst);
                    cst.root = root;
                }
            }
        }
        return {
            astNodes,
            cstNodes
        };
    }
    hydrateAstNode(node, context) {
        const astNode = context.astNodes.get(node);
        astNode.$type = node.$type;
        astNode.$containerIndex = node.$containerIndex;
        astNode.$containerProperty = node.$containerProperty;
        if (node.$cstNode) {
            astNode.$cstNode = context.cstNodes.get(node.$cstNode);
        }
        for (const [name, value] of Object.entries(node)){
            if (name.startsWith('$')) {
                continue;
            }
            if (Array.isArray(value)) {
                const arr = [];
                astNode[name] = arr;
                for (const item of value){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(item)) {
                        arr.push(this.setParent(this.hydrateAstNode(item, context), astNode));
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(item)) {
                        arr.push(this.hydrateReference(item, astNode, name, context));
                    } else {
                        arr.push(item);
                    }
                }
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAstNode"])(value)) {
                astNode[name] = this.setParent(this.hydrateAstNode(value, context), astNode);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"])(value)) {
                astNode[name] = this.hydrateReference(value, astNode, name, context);
            } else if (value !== undefined) {
                astNode[name] = value;
            }
        }
        return astNode;
    }
    setParent(node, parent) {
        node.$container = parent;
        return node;
    }
    hydrateReference(reference, node, name, context) {
        return this.linker.buildReference(node, name, context.cstNodes.get(reference.$refNode), reference.$refText);
    }
    hydrateCstNode(cstNode, context, num = 0) {
        const cstNodeObj = context.cstNodes.get(cstNode);
        if (typeof cstNode.grammarSource === 'number') {
            cstNodeObj.grammarSource = this.getGrammarElement(cstNode.grammarSource);
        }
        cstNodeObj.astNode = context.astNodes.get(cstNode.astNode);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCompositeCstNode"])(cstNodeObj)) {
            for (const child of cstNode.content){
                const hydrated = this.hydrateCstNode(child, context, num++);
                cstNodeObj.content.push(hydrated);
            }
        }
        return cstNodeObj;
    }
    hydrateCstLeafNode(cstNode) {
        const tokenType = this.getTokenType(cstNode.tokenType);
        const offset = cstNode.offset;
        const length = cstNode.length;
        const startLine = cstNode.startLine;
        const startColumn = cstNode.startColumn;
        const endLine = cstNode.endLine;
        const endColumn = cstNode.endColumn;
        const hidden = cstNode.hidden;
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$cst$2d$node$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeafCstNodeImpl"](offset, length, {
            start: {
                line: startLine,
                character: startColumn
            },
            end: {
                line: endLine,
                character: endColumn
            }
        }, tokenType, hidden);
        return node;
    }
    getTokenType(name) {
        return this.lexer.definition[name];
    }
    getGrammarElementId(node) {
        if (this.grammarElementIdMap.size === 0) {
            this.createGrammarElementIdMap();
        }
        return this.grammarElementIdMap.get(node);
    }
    getGrammarElement(id) {
        if (this.grammarElementIdMap.size === 0) {
            this.createGrammarElementIdMap();
        }
        const element = this.grammarElementIdMap.getKey(id);
        if (element) {
            return element;
        } else {
            throw new Error('Invalid grammar element id: ' + id);
        }
    }
    createGrammarElementIdMap() {
        let id = 0;
        for (const element of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAst"])(this.grammar)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAbstractElement"])(element)) {
                this.grammarElementIdMap.set(element, id++);
            }
        }
    }
} //# sourceMappingURL=hydrator.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/default-module.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
******************************************************************************/ __turbopack_esm__({
    "createDefaultCoreModule": (()=>createDefaultCoreModule),
    "createDefaultSharedCoreModule": (()=>createDefaultSharedCoreModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$grammar$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/grammar-config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$completion$2d$parser$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/completion-parser-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$langium$2d$parser$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/langium-parser-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$token$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/token-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$value$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/value-converter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$linker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/linker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$name$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/name-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$references$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/references.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2d$computation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/scope-computation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/scope-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$serializer$2f$json$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/json-serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$service$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/service-registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$document$2d$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/document-validator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$validation$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/validation-registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$ast$2d$descriptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/ast-descriptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$ast$2d$node$2d$locator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/ast-node-locator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$document$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/document-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$index$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/index-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$workspace$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/workspace-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/lexer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$documentation$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/documentation-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$comment$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/comment-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$langium$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/langium-parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$async$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/async-parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$workspace$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/workspace-lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$serializer$2f$hydrator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/hydrator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <locals>");
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
function createDefaultCoreModule(context) {
    return {
        documentation: {
            CommentProvider: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$comment$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultCommentProvider"](services),
            DocumentationProvider: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$documentation$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSDocDocumentationProvider"](services)
        },
        parser: {
            AsyncParser: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$async$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultAsyncParser"](services),
            GrammarConfig: (services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$grammar$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGrammarConfig"])(services),
            LangiumParser: (services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$langium$2d$parser$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLangiumParser"])(services),
            CompletionParser: (services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$completion$2d$parser$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCompletionParser"])(services),
            ValueConverter: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$value$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultValueConverter"](),
            TokenBuilder: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$token$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultTokenBuilder"](),
            Lexer: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultLexer"](services),
            ParserErrorMessageProvider: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$langium$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangiumParserErrorMessageProvider"]()
        },
        workspace: {
            AstNodeLocator: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$ast$2d$node$2d$locator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultAstNodeLocator"](),
            AstNodeDescriptionProvider: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$ast$2d$descriptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultAstNodeDescriptionProvider"](services),
            ReferenceDescriptionProvider: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$ast$2d$descriptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultReferenceDescriptionProvider"](services)
        },
        references: {
            Linker: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$linker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultLinker"](services),
            NameProvider: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$name$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultNameProvider"](),
            ScopeProvider: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultScopeProvider"](services),
            ScopeComputation: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2d$computation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultScopeComputation"](services),
            References: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$references$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultReferences"](services)
        },
        serializer: {
            Hydrator: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$serializer$2f$hydrator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultHydrator"](services),
            JsonSerializer: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$serializer$2f$json$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultJsonSerializer"](services)
        },
        validation: {
            DocumentValidator: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$document$2d$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultDocumentValidator"](services),
            ValidationRegistry: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$validation$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationRegistry"](services)
        },
        shared: ()=>context.shared
    };
}
function createDefaultSharedCoreModule(context) {
    return {
        ServiceRegistry: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$service$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultServiceRegistry"](),
        workspace: {
            LangiumDocuments: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DefaultLangiumDocuments"](services),
            LangiumDocumentFactory: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DefaultLangiumDocumentFactory"](services),
            DocumentBuilder: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$document$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultDocumentBuilder"](services),
            IndexManager: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$index$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultIndexManager"](services),
            WorkspaceManager: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$workspace$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultWorkspaceManager"](services),
            FileSystemProvider: (services)=>context.fileSystemProvider(services),
            WorkspaceLock: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$workspace$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultWorkspaceLock"](),
            ConfigurationProvider: (services)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultConfigurationProvider"](services)
        }
    };
} //# sourceMappingURL=default-module.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/dependency-injection.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "Module": (()=>Module),
    "eagerLoad": (()=>eagerLoad),
    "inject": (()=>inject)
});
var Module;
(function(Module) {
    Module.merge = (m1, m2)=>_merge(_merge({}, m1), m2);
})(Module || (Module = {}));
function inject(module1, module2, module3, module4, module5, module6, module7, module8, module9) {
    const module = [
        module1,
        module2,
        module3,
        module4,
        module5,
        module6,
        module7,
        module8,
        module9
    ].reduce(_merge, {});
    return _inject(module);
}
const isProxy = Symbol('isProxy');
function eagerLoad(item) {
    if (item && item[isProxy]) {
        for (const value of Object.values(item)){
            eagerLoad(value);
        }
    }
    return item;
}
/**
 * Helper function that returns an injector by creating a proxy.
 * Invariant: injector is of type I. If injector is undefined, then T = I.
 */ function _inject(module, injector) {
    const proxy = new Proxy({}, {
        deleteProperty: ()=>false,
        get: (obj, prop)=>_resolve(obj, prop, module, injector || proxy),
        getOwnPropertyDescriptor: (obj, prop)=>(_resolve(obj, prop, module, injector || proxy), Object.getOwnPropertyDescriptor(obj, prop)),
        has: (_, prop)=>prop in module,
        ownKeys: ()=>[
                ...Reflect.ownKeys(module),
                isProxy
            ] // used by for..in
    });
    proxy[isProxy] = true;
    return proxy;
}
/**
 * Internally used to tag a requested dependency, directly before calling the factory.
 * This allows us to find cycles during instance creation.
 */ const __requested__ = Symbol();
/**
 * Returns the value `obj[prop]`. If the value does not exist, yet, it is resolved from
 * the module description. The result of service factories is cached. Groups are
 * recursively proxied.
 *
 * @param obj an object holding all group proxies and services
 * @param prop the key of a value within obj
 * @param module an object containing groups and service factories
 * @param injector the first level proxy that provides access to all values
 * @returns the requested value `obj[prop]`
 * @throws Error if a dependency cycle is detected
 */ function _resolve(obj, prop, module, injector) {
    if (prop in obj) {
        if (obj[prop] instanceof Error) {
            throw new Error('Construction failure. Please make sure that your dependencies are constructable.', {
                cause: obj[prop]
            });
        }
        if (obj[prop] === __requested__) {
            throw new Error('Cycle detected. Please make "' + String(prop) + '" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');
        }
        return obj[prop];
    } else if (prop in module) {
        const value = module[prop];
        obj[prop] = __requested__;
        try {
            obj[prop] = typeof value === 'function' ? value(injector) : _inject(value, injector);
        } catch (error) {
            obj[prop] = error instanceof Error ? error : undefined;
            throw error;
        }
        return obj[prop];
    } else {
        return undefined;
    }
}
/**
 * Performs a deep-merge of two modules by writing source entries into the target module.
 *
 * @param target the module which is written
 * @param source the module which is read
 * @returns the target module
 */ function _merge(target, source) {
    if (source) {
        for (const [key, value2] of Object.entries(source)){
            if (value2 !== undefined) {
                const value1 = target[key];
                if (value1 !== null && value2 !== null && typeof value1 === 'object' && typeof value2 === 'object') {
                    target[key] = _merge(value1, value2);
                } else {
                    target[key] = value2;
                }
            }
        }
    }
    return target;
} //# sourceMappingURL=dependency-injection.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/services.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
;
 //# sourceMappingURL=services.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$comment$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/comment-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$documentation$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/documentation-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$jsdoc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/jsdoc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/language-meta-data.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
;
 //# sourceMappingURL=language-meta-data.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$grammar$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/grammar-config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$language$2d$meta$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/language-meta-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/parser-config.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
;
 //# sourceMappingURL=parser-config.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$async$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/async-parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$completion$2d$parser$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/completion-parser-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$cst$2d$node$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/cst-node-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$langium$2d$parser$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/langium-parser-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$langium$2d$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/langium-parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$lexer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/lexer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$parser$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/parser-config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$token$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/token-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$value$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/value-converter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$linker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/linker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$name$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/name-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$references$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/references.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/scope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2d$computation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/scope-computation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$scope$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/scope-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$serializer$2f$hydrator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/hydrator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$serializer$2f$json$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/json-serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$serializer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/file-system-provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "EmptyFileSystem": (()=>EmptyFileSystem),
    "EmptyFileSystemProvider": (()=>EmptyFileSystemProvider)
});
class EmptyFileSystemProvider {
    readFile() {
        throw new Error('No file system is available.');
    }
    async readDirectory() {
        return [];
    }
}
const EmptyFileSystem = {
    fileSystemProvider: ()=>new EmptyFileSystemProvider()
}; //# sourceMappingURL=file-system-provider.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-loader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({
    "loadGrammarFromJson": (()=>loadGrammarFromJson)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$default$2d$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/default-module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$dependency$2d$injection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/dependency-injection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/generated/ast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$file$2d$system$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/file-system-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/vscode-uri@3.0.8/node_modules/vscode-uri/lib/esm/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
const minimalGrammarModule = {
    Grammar: ()=>undefined,
    LanguageMetaData: ()=>({
            caseInsensitive: false,
            fileExtensions: [
                '.langium'
            ],
            languageId: 'langium'
        })
};
const minimalSharedGrammarModule = {
    AstReflection: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.LangiumGrammarAstReflection()
};
function createMinimalGrammarServices() {
    const shared = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$dependency$2d$injection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$default$2d$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDefaultSharedCoreModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$file$2d$system$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyFileSystem"]), minimalSharedGrammarModule);
    const grammar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$dependency$2d$injection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$default$2d$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDefaultCoreModule"])({
        shared
    }), minimalGrammarModule);
    shared.ServiceRegistry.register(grammar);
    return grammar;
}
function loadGrammarFromJson(json) {
    var _a;
    const services = createMinimalGrammarServices();
    const astNode = services.serializer.JsonSerializer.deserialize(json);
    services.shared.workspace.LangiumDocumentFactory.fromModel(astNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$vscode$2d$uri$40$3$2e$0$2e$8$2f$node_modules$2f$vscode$2d$uri$2f$lib$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(`memory://${(_a = astNode.name) !== null && _a !== void 0 ? _a : 'grammar'}.langium`));
    return astNode;
} //# sourceMappingURL=grammar-loader.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
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
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$caching$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/caching.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/event.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/collections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$disposable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/disposable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-loader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$promise$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/promise-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/stream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$uri$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/uri-utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$ast$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/ast-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cancellation.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$cst$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/cst-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$grammar$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/grammar-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$regexp$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/regexp-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$document$2d$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/document-validator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$validation$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/validation-registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2023 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$ast$2d$descriptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/ast-descriptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$ast$2d$node$2d$locator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/ast-node-locator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$document$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/document-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$documents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/documents.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$file$2d$system$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/file-system-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$index$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/index-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$workspace$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/workspace-lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$workspace$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/workspace-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/ __turbopack_esm__({});
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
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$default$2d$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/default-module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$dependency$2d$injection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/dependency-injection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$service$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/service-registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$services$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/services.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$syntax$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/syntax-tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$documentation$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/documentation/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/parser/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$references$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/references/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$serializer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/serializer/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/utils/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$validation$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/validation/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$workspace$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/workspace/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$languages$2f$generated$2f$ast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/languages/generated/ast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langium$40$3$2e$0$2e$0$2f$node_modules$2f$langium$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langium@3.0.0/node_modules/langium/lib/index.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=9ab3f_langium_lib_187371._.js.map