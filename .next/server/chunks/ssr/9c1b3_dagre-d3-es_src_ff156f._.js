module.exports = {

"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Graph": (()=>Graph)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
var DEFAULT_EDGE_NAME = '\x00';
var GRAPH_NODE = '\x00';
var EDGE_KEY_DELIM = '\x01';
class Graph {
    constructor(opts = {}){
        this._isDirected = Object.prototype.hasOwnProperty.call(opts, 'directed') ? opts.directed : true;
        this._isMultigraph = Object.prototype.hasOwnProperty.call(opts, 'multigraph') ? opts.multigraph : false;
        this._isCompound = Object.prototype.hasOwnProperty.call(opts, 'compound') ? opts.compound : false;
        // Label for the graph itself
        this._label = undefined;
        // Defaults to be set when creating a new node
        this._defaultNodeLabelFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.constant(undefined);
        // Defaults to be set when creating a new edge
        this._defaultEdgeLabelFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.constant(undefined);
        // v -> label
        this._nodes = {};
        if (this._isCompound) {
            // v -> parent
            this._parent = {};
            // v -> children
            this._children = {};
            this._children[GRAPH_NODE] = {};
        }
        // v -> edgeObj
        this._in = {};
        // u -> v -> Number
        this._preds = {};
        // v -> edgeObj
        this._out = {};
        // v -> w -> Number
        this._sucs = {};
        // e -> edgeObj
        this._edgeObjs = {};
        // e -> label
        this._edgeLabels = {};
    }
    /* === Graph functions ========= */ isDirected() {
        return this._isDirected;
    }
    isMultigraph() {
        return this._isMultigraph;
    }
    isCompound() {
        return this._isCompound;
    }
    setGraph(label) {
        this._label = label;
        return this;
    }
    graph() {
        return this._label;
    }
    /* === Node functions ========== */ setDefaultNodeLabel(newDefault) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isFunction(newDefault)) {
            newDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.constant(newDefault);
        }
        this._defaultNodeLabelFn = newDefault;
        return this;
    }
    nodeCount() {
        return this._nodeCount;
    }
    nodes() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keys(this._nodes);
    }
    sources() {
        var self = this;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.filter(this.nodes(), function(v) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isEmpty(self._in[v]);
        });
    }
    sinks() {
        var self = this;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.filter(this.nodes(), function(v) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isEmpty(self._out[v]);
        });
    }
    setNodes(vs, value) {
        var args = arguments;
        var self = this;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(vs, function(v) {
            if (args.length > 1) {
                self.setNode(v, value);
            } else {
                self.setNode(v);
            }
        });
        return this;
    }
    setNode(v, value) {
        if (Object.prototype.hasOwnProperty.call(this._nodes, v)) {
            if (arguments.length > 1) {
                this._nodes[v] = value;
            }
            return this;
        }
        // @ts-expect-error
        this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
        if (this._isCompound) {
            this._parent[v] = GRAPH_NODE;
            this._children[v] = {};
            this._children[GRAPH_NODE][v] = true;
        }
        this._in[v] = {};
        this._preds[v] = {};
        this._out[v] = {};
        this._sucs[v] = {};
        ++this._nodeCount;
        return this;
    }
    node(v) {
        return this._nodes[v];
    }
    hasNode(v) {
        return Object.prototype.hasOwnProperty.call(this._nodes, v);
    }
    removeNode(v) {
        if (Object.prototype.hasOwnProperty.call(this._nodes, v)) {
            var removeEdge = (e)=>this.removeEdge(this._edgeObjs[e]);
            delete this._nodes[v];
            if (this._isCompound) {
                this._removeFromParentsChildList(v);
                delete this._parent[v];
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(this.children(v), (child)=>{
                    this.setParent(child);
                });
                delete this._children[v];
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keys(this._in[v]), removeEdge);
            delete this._in[v];
            delete this._preds[v];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keys(this._out[v]), removeEdge);
            delete this._out[v];
            delete this._sucs[v];
            --this._nodeCount;
        }
        return this;
    }
    setParent(v, parent) {
        if (!this._isCompound) {
            throw new Error('Cannot set parent in a non-compound graph');
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(parent)) {
            parent = GRAPH_NODE;
        } else {
            // Coerce parent to string
            parent += '';
            for(var ancestor = parent; !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(ancestor); ancestor = this.parent(ancestor)){
                if (ancestor === v) {
                    throw new Error('Setting ' + parent + ' as parent of ' + v + ' would create a cycle');
                }
            }
            this.setNode(parent);
        }
        this.setNode(v);
        this._removeFromParentsChildList(v);
        this._parent[v] = parent;
        this._children[parent][v] = true;
        return this;
    }
    _removeFromParentsChildList(v) {
        delete this._children[this._parent[v]][v];
    }
    parent(v) {
        if (this._isCompound) {
            var parent = this._parent[v];
            if (parent !== GRAPH_NODE) {
                return parent;
            }
        }
    }
    children(v) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(v)) {
            v = GRAPH_NODE;
        }
        if (this._isCompound) {
            var children = this._children[v];
            if (children) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keys(children);
            }
        } else if (v === GRAPH_NODE) {
            return this.nodes();
        } else if (this.hasNode(v)) {
            return [];
        }
    }
    predecessors(v) {
        var predsV = this._preds[v];
        if (predsV) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keys(predsV);
        }
    }
    successors(v) {
        var sucsV = this._sucs[v];
        if (sucsV) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keys(sucsV);
        }
    }
    neighbors(v) {
        var preds = this.predecessors(v);
        if (preds) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.union(preds, this.successors(v));
        }
    }
    isLeaf(v) {
        var neighbors;
        if (this.isDirected()) {
            neighbors = this.successors(v);
        } else {
            neighbors = this.neighbors(v);
        }
        return neighbors.length === 0;
    }
    filterNodes(filter) {
        // @ts-expect-error
        var copy = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
        });
        copy.setGraph(this.graph());
        var self = this;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(this._nodes, function(value, v) {
            if (filter(v)) {
                copy.setNode(v, value);
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(this._edgeObjs, function(e) {
            // @ts-expect-error
            if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
                copy.setEdge(e, self.edge(e));
            }
        });
        var parents = {};
        function findParent(v) {
            var parent = self.parent(v);
            if (parent === undefined || copy.hasNode(parent)) {
                parents[v] = parent;
                return parent;
            } else if (parent in parents) {
                return parents[parent];
            } else {
                return findParent(parent);
            }
        }
        if (this._isCompound) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(copy.nodes(), function(v) {
                copy.setParent(v, findParent(v));
            });
        }
        return copy;
    }
    /* === Edge functions ========== */ setDefaultEdgeLabel(newDefault) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isFunction(newDefault)) {
            newDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.constant(newDefault);
        }
        this._defaultEdgeLabelFn = newDefault;
        return this;
    }
    edgeCount() {
        return this._edgeCount;
    }
    edges() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.values(this._edgeObjs);
    }
    setPath(vs, value) {
        var self = this;
        var args = arguments;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.reduce(vs, function(v, w) {
            if (args.length > 1) {
                self.setEdge(v, w, value);
            } else {
                self.setEdge(v, w);
            }
            return w;
        });
        return this;
    }
    /*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */ setEdge() {
        var v, w, name, value;
        var valueSpecified = false;
        var arg0 = arguments[0];
        if (typeof arg0 === 'object' && arg0 !== null && 'v' in arg0) {
            v = arg0.v;
            w = arg0.w;
            name = arg0.name;
            if (arguments.length === 2) {
                value = arguments[1];
                valueSpecified = true;
            }
        } else {
            v = arg0;
            w = arguments[1];
            name = arguments[3];
            if (arguments.length > 2) {
                value = arguments[2];
                valueSpecified = true;
            }
        }
        v = '' + v;
        w = '' + w;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(name)) {
            name = '' + name;
        }
        var e = edgeArgsToId(this._isDirected, v, w, name);
        if (Object.prototype.hasOwnProperty.call(this._edgeLabels, e)) {
            if (valueSpecified) {
                this._edgeLabels[e] = value;
            }
            return this;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(name) && !this._isMultigraph) {
            throw new Error('Cannot set a named edge when isMultigraph = false');
        }
        // It didn't exist, so we need to create it.
        // First ensure the nodes exist.
        this.setNode(v);
        this.setNode(w);
        // @ts-expect-error
        this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);
        var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
        // Ensure we add undirected edges in a consistent way.
        v = edgeObj.v;
        w = edgeObj.w;
        Object.freeze(edgeObj);
        this._edgeObjs[e] = edgeObj;
        incrementOrInitEntry(this._preds[w], v);
        incrementOrInitEntry(this._sucs[v], w);
        this._in[w][e] = edgeObj;
        this._out[v][e] = edgeObj;
        this._edgeCount++;
        return this;
    }
    edge(v, w, name) {
        var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
        return this._edgeLabels[e];
    }
    hasEdge(v, w, name) {
        var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
        return Object.prototype.hasOwnProperty.call(this._edgeLabels, e);
    }
    removeEdge(v, w, name) {
        var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
        var edge = this._edgeObjs[e];
        if (edge) {
            v = edge.v;
            w = edge.w;
            delete this._edgeLabels[e];
            delete this._edgeObjs[e];
            decrementOrRemoveEntry(this._preds[w], v);
            decrementOrRemoveEntry(this._sucs[v], w);
            delete this._in[w][e];
            delete this._out[v][e];
            this._edgeCount--;
        }
        return this;
    }
    inEdges(v, u) {
        var inV = this._in[v];
        if (inV) {
            var edges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.values(inV);
            if (!u) {
                return edges;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.filter(edges, function(edge) {
                return edge.v === u;
            });
        }
    }
    outEdges(v, w) {
        var outV = this._out[v];
        if (outV) {
            var edges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.values(outV);
            if (!w) {
                return edges;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.filter(edges, function(edge) {
                return edge.w === w;
            });
        }
    }
    nodeEdges(v, w) {
        var inEdges = this.inEdges(v, w);
        if (inEdges) {
            return inEdges.concat(this.outEdges(v, w));
        }
    }
}
/* Number of nodes in the graph. Should only be changed by the implementation. */ Graph.prototype._nodeCount = 0;
/* Number of edges in the graph. Should only be changed by the implementation. */ Graph.prototype._edgeCount = 0;
function incrementOrInitEntry(map, k) {
    if (map[k]) {
        map[k]++;
    } else {
        map[k] = 1;
    }
}
function decrementOrRemoveEntry(map, k) {
    if (!--map[k]) {
        delete map[k];
    }
}
function edgeArgsToId(isDirected, v_, w_, name) {
    var v = '' + v_;
    var w = '' + w_;
    if (!isDirected && v > w) {
        var tmp = v;
        v = w;
        w = tmp;
    }
    return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(name) ? DEFAULT_EDGE_NAME : name);
}
function edgeArgsToObj(isDirected, v_, w_, name) {
    var v = '' + v_;
    var w = '' + w_;
    if (!isDirected && v > w) {
        var tmp = v;
        v = w;
        w = tmp;
    }
    var edgeObj = {
        v: v,
        w: w
    };
    if (name) {
        edgeObj.name = name;
    }
    return edgeObj;
}
function edgeObjToId(isDirected, edgeObj) {
    return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Includes only the "core" of graphlib
__turbopack_esm__({
    "version": (()=>version)
});
;
const version = '2.1.9-pre';
;
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/data/list.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */ __turbopack_esm__({
    "List": (()=>List)
});
;
class List {
    constructor(){
        var sentinel = {};
        sentinel._next = sentinel._prev = sentinel;
        this._sentinel = sentinel;
    }
    dequeue() {
        var sentinel = this._sentinel;
        var entry = sentinel._prev;
        if (entry !== sentinel) {
            unlink(entry);
            return entry;
        }
    }
    enqueue(entry) {
        var sentinel = this._sentinel;
        if (entry._prev && entry._next) {
            unlink(entry);
        }
        entry._next = sentinel._next;
        sentinel._next._prev = entry;
        sentinel._next = entry;
        entry._prev = sentinel;
    }
    toString() {
        var strs = [];
        var sentinel = this._sentinel;
        var curr = sentinel._prev;
        while(curr !== sentinel){
            strs.push(JSON.stringify(curr, filterOutLinks));
            curr = curr._prev;
        }
        return '[' + strs.join(', ') + ']';
    }
}
function unlink(entry) {
    entry._prev._next = entry._next;
    entry._next._prev = entry._prev;
    delete entry._next;
    delete entry._prev;
}
function filterOutLinks(k, v) {
    if (k !== '_next' && k !== '_prev') {
        return v;
    }
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/greedy-fas.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "greedyFAS": (()=>greedyFAS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$data$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/data/list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)");
;
;
;
;
var DEFAULT_WEIGHT_FN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.constant(1);
function greedyFAS(g, weightFn) {
    if (g.nodeCount() <= 1) {
        return [];
    }
    var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
    var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);
    // Expand multi-edges
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.flatten(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(results, function(e) {
        return g.outEdges(e.v, e.w);
    }));
}
function doGreedyFAS(g, buckets, zeroIdx) {
    var results = [];
    var sources = buckets[buckets.length - 1];
    var sinks = buckets[0];
    var entry;
    while(g.nodeCount()){
        while(entry = sinks.dequeue()){
            removeNode(g, buckets, zeroIdx, entry);
        }
        while(entry = sources.dequeue()){
            removeNode(g, buckets, zeroIdx, entry);
        }
        if (g.nodeCount()) {
            for(var i = buckets.length - 2; i > 0; --i){
                entry = buckets[i].dequeue();
                if (entry) {
                    results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
                    break;
                }
            }
        }
    }
    return results;
}
function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
    var results = collectPredecessors ? [] : undefined;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.inEdges(entry.v), function(edge) {
        var weight = g.edge(edge);
        var uEntry = g.node(edge.v);
        if (collectPredecessors) {
            results.push({
                v: edge.v,
                w: edge.w
            });
        }
        uEntry.out -= weight;
        assignBucket(buckets, zeroIdx, uEntry);
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.outEdges(entry.v), function(edge) {
        var weight = g.edge(edge);
        var w = edge.w;
        var wEntry = g.node(w);
        wEntry['in'] -= weight;
        assignBucket(buckets, zeroIdx, wEntry);
    });
    g.removeNode(entry.v);
    return results;
}
function buildState(g, weightFn) {
    var fasGraph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"]();
    var maxIn = 0;
    var maxOut = 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        fasGraph.setNode(v, {
            v: v,
            in: 0,
            out: 0
        });
    });
    // Aggregate weights on nodes, but also sum the weights across multi-edges
    // into a single edge for the fasGraph.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var prevWeight = fasGraph.edge(e.v, e.w) || 0;
        var weight = weightFn(e);
        var edgeWeight = prevWeight + weight;
        fasGraph.setEdge(e.v, e.w, edgeWeight);
        maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
        maxIn = Math.max(maxIn, fasGraph.node(e.w)['in'] += weight);
    });
    var buckets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.range(maxOut + maxIn + 3).map(function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$data$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"]();
    });
    var zeroIdx = maxIn + 1;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(fasGraph.nodes(), function(v) {
        assignBucket(buckets, zeroIdx, fasGraph.node(v));
    });
    return {
        graph: fasGraph,
        buckets: buckets,
        zeroIdx: zeroIdx
    };
}
function assignBucket(buckets, zeroIdx, entry) {
    if (!entry.out) {
        buckets[0].enqueue(entry);
    } else if (!entry['in']) {
        buckets[buckets.length - 1].enqueue(entry);
    } else {
        buckets[entry.out - entry['in'] + zeroIdx].enqueue(entry);
    }
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/acyclic.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "run": (()=>run),
    "undo": (()=>undo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$greedy$2d$fas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/greedy-fas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
function run(g) {
    var fas = g.graph().acyclicer === 'greedy' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$greedy$2d$fas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greedyFAS"])(g, weightFn(g)) : dfsFAS(g);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(fas, function(e) {
        var label = g.edge(e);
        g.removeEdge(e);
        label.forwardName = e.name;
        label.reversed = true;
        g.setEdge(e.w, e.v, label, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.uniqueId('rev'));
    });
    function weightFn(g) {
        return function(e) {
            return g.edge(e).weight;
        };
    }
}
function dfsFAS(g) {
    var fas = [];
    var stack = {};
    var visited = {};
    function dfs(v) {
        if (Object.prototype.hasOwnProperty.call(visited, v)) {
            return;
        }
        visited[v] = true;
        stack[v] = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.outEdges(v), function(e) {
            if (Object.prototype.hasOwnProperty.call(stack, e.w)) {
                fas.push(e);
            } else {
                dfs(e.w);
            }
        });
        delete stack[v];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), dfs);
    return fas;
}
function undo(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var label = g.edge(e);
        if (label.reversed) {
            g.removeEdge(e);
            var forwardName = label.forwardName;
            delete label.reversed;
            delete label.forwardName;
            g.setEdge(e.w, e.v, label, forwardName);
        }
    });
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/util.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addBorderNode": (()=>addBorderNode),
    "addDummyNode": (()=>addDummyNode),
    "asNonCompoundGraph": (()=>asNonCompoundGraph),
    "buildLayerMatrix": (()=>buildLayerMatrix),
    "intersectRect": (()=>intersectRect),
    "maxRank": (()=>maxRank),
    "normalizeRanks": (()=>normalizeRanks),
    "notime": (()=>notime),
    "partition": (()=>partition),
    "predecessorWeights": (()=>predecessorWeights),
    "removeEmptyRanks": (()=>removeEmptyRanks),
    "simplify": (()=>simplify),
    "successorWeights": (()=>successorWeights),
    "time": (()=>time)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)");
;
;
;
/*
 * Adds a dummy node to the graph and return v.
 */ function addDummyNode(g, type, attrs, name) {
    var v;
    do {
        v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.uniqueId(name);
    }while (g.hasNode(v))
    attrs.dummy = type;
    g.setNode(v, attrs);
    return v;
}
/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */ function simplify(g) {
    var simplified = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"]().setGraph(g.graph());
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        simplified.setNode(v, g.node(v));
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var simpleLabel = simplified.edge(e.v, e.w) || {
            weight: 0,
            minlen: 1
        };
        var label = g.edge(e);
        simplified.setEdge(e.v, e.w, {
            weight: simpleLabel.weight + label.weight,
            minlen: Math.max(simpleLabel.minlen, label.minlen)
        });
    });
    return simplified;
}
function asNonCompoundGraph(g) {
    var simplified = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"]({
        multigraph: g.isMultigraph()
    }).setGraph(g.graph());
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        if (!g.children(v).length) {
            simplified.setNode(v, g.node(v));
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        simplified.setEdge(e, g.edge(e));
    });
    return simplified;
}
function successorWeights(g) {
    var weightMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(g.nodes(), function(v) {
        var sucs = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.outEdges(v), function(e) {
            sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
        });
        return sucs;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.zipObject(g.nodes(), weightMap);
}
function predecessorWeights(g) {
    var weightMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(g.nodes(), function(v) {
        var preds = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.inEdges(v), function(e) {
            preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
        });
        return preds;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.zipObject(g.nodes(), weightMap);
}
/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */ function intersectRect(rect, point) {
    var x = rect.x;
    var y = rect.y;
    // Rectangle intersection algorithm from:
    // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
    var dx = point.x - x;
    var dy = point.y - y;
    var w = rect.width / 2;
    var h = rect.height / 2;
    if (!dx && !dy) {
        throw new Error('Not possible to find intersection inside of the rectangle');
    }
    var sx, sy;
    if (Math.abs(dy) * w > Math.abs(dx) * h) {
        // Intersection is top or bottom of rect.
        if (dy < 0) {
            h = -h;
        }
        sx = h * dx / dy;
        sy = h;
    } else {
        // Intersection is left or right of rect.
        if (dx < 0) {
            w = -w;
        }
        sx = w;
        sy = w * dy / dx;
    }
    return {
        x: x + sx,
        y: y + sy
    };
}
/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */ function buildLayerMatrix(g) {
    var layering = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.range(maxRank(g) + 1), function() {
        return [];
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        var rank = node.rank;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(rank)) {
            layering[rank][node.order] = v;
        }
    });
    return layering;
}
/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */ function normalizeRanks(g) {
    var min = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.min(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(g.nodes(), function(v) {
        return g.node(v).rank;
    }));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.has(node, 'rank')) {
            node.rank -= min;
        }
    });
}
function removeEmptyRanks(g) {
    // Ranks may not start at 0, so we need to offset them
    var offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.min(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(g.nodes(), function(v) {
        return g.node(v).rank;
    }));
    var layers = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        var rank = g.node(v).rank - offset;
        if (!layers[rank]) {
            layers[rank] = [];
        }
        layers[rank].push(v);
    });
    var delta = 0;
    var nodeRankFactor = g.graph().nodeRankFactor;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layers, function(vs, i) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(vs) && i % nodeRankFactor !== 0) {
            --delta;
        } else if (delta) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(vs, function(v) {
                g.node(v).rank += delta;
            });
        }
    });
}
function addBorderNode(g, prefix, rank, order) {
    var node = {
        width: 0,
        height: 0
    };
    if (arguments.length >= 4) {
        node.rank = rank;
        node.order = order;
    }
    return addDummyNode(g, 'border', node, prefix);
}
function maxRank(g) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.max(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(g.nodes(), function(v) {
        var rank = g.node(v).rank;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(rank)) {
            return rank;
        }
    }));
}
/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */ function partition(collection, fn) {
    var result = {
        lhs: [],
        rhs: []
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(collection, function(value) {
        if (fn(value)) {
            result.lhs.push(value);
        } else {
            result.rhs.push(value);
        }
    });
    return result;
}
/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */ function time(name, fn) {
    var start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.now();
    try {
        return fn();
    } finally{
        console.log(name + ' time: ' + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.now() - start) + 'ms');
    }
}
function notime(name, fn) {
    return fn();
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/add-border-segments.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addBorderSegments": (()=>addBorderSegments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
function addBorderSegments(g) {
    function dfs(v) {
        var children = g.children(v);
        var node = g.node(v);
        if (children.length) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(children, dfs);
        }
        if (Object.prototype.hasOwnProperty.call(node, 'minRank')) {
            node.borderLeft = [];
            node.borderRight = [];
            for(var rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank){
                addBorderNode(g, 'borderLeft', '_bl', v, node, rank);
                addBorderNode(g, 'borderRight', '_br', v, node, rank);
            }
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.children(), dfs);
}
function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
    var label = {
        width: 0,
        height: 0,
        rank: rank,
        borderType: prop
    };
    var prev = sgNode[prop][rank - 1];
    var curr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.addDummyNode(g, 'border', label, prefix);
    sgNode[prop][rank] = curr;
    g.setParent(curr, sg);
    if (prev) {
        g.setEdge(prev, curr, {
            weight: 1
        });
    }
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/coordinate-system.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "adjust": (()=>adjust),
    "undo": (()=>undo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
function adjust(g) {
    var rankDir = g.graph().rankdir.toLowerCase();
    if (rankDir === 'lr' || rankDir === 'rl') {
        swapWidthHeight(g);
    }
}
function undo(g) {
    var rankDir = g.graph().rankdir.toLowerCase();
    if (rankDir === 'bt' || rankDir === 'rl') {
        reverseY(g);
    }
    if (rankDir === 'lr' || rankDir === 'rl') {
        swapXY(g);
        swapWidthHeight(g);
    }
}
function swapWidthHeight(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        swapWidthHeightOne(g.node(v));
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        swapWidthHeightOne(g.edge(e));
    });
}
function swapWidthHeightOne(attrs) {
    var w = attrs.width;
    attrs.width = attrs.height;
    attrs.height = w;
}
function reverseY(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        reverseYOne(g.node(v));
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(edge.points, reverseYOne);
        if (Object.prototype.hasOwnProperty.call(edge, 'y')) {
            reverseYOne(edge);
        }
    });
}
function reverseYOne(attrs) {
    attrs.y = -attrs.y;
}
function swapXY(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        swapXYOne(g.node(v));
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(edge.points, swapXYOne);
        if (Object.prototype.hasOwnProperty.call(edge, 'x')) {
            swapXYOne(edge);
        }
    });
}
function swapXYOne(attrs) {
    var x = attrs.x;
    attrs.x = attrs.y;
    attrs.y = x;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/normalize.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * TypeScript type imports:
 *
 * @import { Graph } from '../graphlib/graph.js';
 */ __turbopack_esm__({
    "run": (()=>run),
    "undo": (()=>undo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */ function run(g) {
    g.graph().dummyChains = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(edge) {
        normalizeEdge(g, edge);
    });
}
/**
 * @param {Graph} g
 */ function normalizeEdge(g, e) {
    var v = e.v;
    var vRank = g.node(v).rank;
    var w = e.w;
    var wRank = g.node(w).rank;
    var name = e.name;
    var edgeLabel = g.edge(e);
    var labelRank = edgeLabel.labelRank;
    if (wRank === vRank + 1) return;
    g.removeEdge(e);
    /**
   * @typedef {Object} Attrs
   * @property {number} width
   * @property {number} height
   * @property {ReturnType<Graph["node"]>} edgeLabel
   * @property {any} edgeObj
   * @property {ReturnType<Graph["node"]>["rank"]} rank
   * @property {string} [dummy]
   * @property {ReturnType<Graph["node"]>["labelpos"]} [labelpos]
   */ /** @type {Attrs | undefined} */ var attrs = undefined;
    var dummy, i;
    for(i = 0, ++vRank; vRank < wRank; ++i, ++vRank){
        edgeLabel.points = [];
        attrs = {
            width: 0,
            height: 0,
            edgeLabel: edgeLabel,
            edgeObj: e,
            rank: vRank
        };
        dummy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.addDummyNode(g, 'edge', attrs, '_d');
        if (vRank === labelRank) {
            attrs.width = edgeLabel.width;
            attrs.height = edgeLabel.height;
            attrs.dummy = 'edge-label';
            attrs.labelpos = edgeLabel.labelpos;
        }
        g.setEdge(v, dummy, {
            weight: edgeLabel.weight
        }, name);
        if (i === 0) {
            g.graph().dummyChains.push(dummy);
        }
        v = dummy;
    }
    g.setEdge(v, w, {
        weight: edgeLabel.weight
    }, name);
}
function undo(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.graph().dummyChains, function(v) {
        var node = g.node(v);
        var origLabel = node.edgeLabel;
        var w;
        g.setEdge(node.edgeObj, origLabel);
        while(node.dummy){
            w = g.successors(v)[0];
            g.removeNode(v);
            origLabel.points.push({
                x: node.x,
                y: node.y
            });
            if (node.dummy === 'edge-label') {
                origLabel.x = node.x;
                origLabel.y = node.y;
                origLabel.width = node.width;
                origLabel.height = node.height;
            }
            v = w;
            node = g.node(v);
        }
    });
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/util.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "longestPath": (()=>longestPath),
    "slack": (()=>slack)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */ function longestPath(g) {
    var visited = {};
    function dfs(v) {
        var label = g.node(v);
        if (Object.prototype.hasOwnProperty.call(visited, v)) {
            return label.rank;
        }
        visited[v] = true;
        var rank = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.min(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(g.outEdges(v), function(e) {
            return dfs(e.w) - g.edge(e).minlen;
        }));
        if (rank === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
        rank === undefined || // return value of _.map([]) for Lodash 4
        rank === null) {
            // return value of _.map([null])
            rank = 0;
        }
        return label.rank = rank;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.sources(), dfs);
}
/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */ function slack(g, e) {
    return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/feasible-tree.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "feasibleTree": (()=>feasibleTree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
;
/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */ function feasibleTree(g) {
    var t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"]({
        directed: false
    });
    // Choose arbitrary node from which to start our tree
    var start = g.nodes()[0];
    var size = g.nodeCount();
    t.setNode(start, {});
    var edge, delta;
    while(tightTree(t, g) < size){
        edge = findMinSlackEdge(t, g);
        delta = t.hasNode(edge.v) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slack"])(g, edge) : -(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slack"])(g, edge);
        shiftRanks(t, g, delta);
    }
    return t;
}
/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */ function tightTree(t, g) {
    function dfs(v) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodeEdges(v), function(e) {
            var edgeV = e.v, w = v === edgeV ? e.w : edgeV;
            if (!t.hasNode(w) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slack"])(g, e)) {
                t.setNode(w, {});
                t.setEdge(v, w, {});
                dfs(w);
            }
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(t.nodes(), dfs);
    return t.nodeCount();
}
/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */ function findMinSlackEdge(t, g) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.minBy(g.edges(), function(e) {
        if (t.hasNode(e.v) !== t.hasNode(e.w)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slack"])(g, e);
        }
    });
}
function shiftRanks(t, g, delta) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(t.nodes(), function(v) {
        g.node(v).rank += delta;
    });
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/components.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "components": (()=>components)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
function components(g) {
    var visited = {};
    var cmpts = [];
    var cmpt;
    function dfs(v) {
        if (Object.prototype.hasOwnProperty.call(visited, v)) return;
        visited[v] = true;
        cmpt.push(v);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(g.successors(v), dfs);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(g.predecessors(v), dfs);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(g.nodes(), function(v) {
        cmpt = [];
        dfs(v);
        if (cmpt.length) {
            cmpts.push(cmpt);
        }
    });
    return cmpts;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/data/priority-queue.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PriorityQueue": (()=>PriorityQueue)
});
;
/**
 * A min-priority queue data structure. This algorithm is derived from Cormen,
 * et al., "Introduction to Algorithms". The basic idea of a min-priority
 * queue is that you can efficiently (in O(1) time) get the smallest key in
 * the queue. Adding and removing elements takes O(log n) time. A key can
 * have its priority decreased in O(log n) time.
 */ class PriorityQueue {
    constructor(){
        this._arr = [];
        this._keyIndices = {};
    }
    /**
   * Returns the number of elements in the queue. Takes `O(1)` time.
   */ size() {
        return this._arr.length;
    }
    /**
   * Returns the keys that are in the queue. Takes `O(n)` time.
   */ keys() {
        return this._arr.map(function(x) {
            return x.key;
        });
    }
    /**
   * Returns `true` if **key** is in the queue and `false` if not.
   */ has(key) {
        return Object.prototype.hasOwnProperty.call(this._keyIndices, key);
    }
    /**
   * Returns the priority for **key**. If **key** is not present in the queue
   * then this function returns `undefined`. Takes `O(1)` time.
   *
   * @param {Object} key
   */ priority(key) {
        var index = this._keyIndices[key];
        if (index !== undefined) {
            return this._arr[index].priority;
        }
    }
    /**
   * Returns the key for the minimum element in this queue. If the queue is
   * empty this function throws an Error. Takes `O(1)` time.
   */ min() {
        if (this.size() === 0) {
            throw new Error('Queue underflow');
        }
        return this._arr[0].key;
    }
    /**
   * Inserts a new key into the priority queue. If the key already exists in
   * the queue this function returns `false`; otherwise it will return `true`.
   * Takes `O(n)` time.
   *
   * @param {Object} key the key to add
   * @param {Number} priority the initial priority for the key
   */ add(key, priority) {
        var keyIndices = this._keyIndices;
        key = String(key);
        if (!Object.prototype.hasOwnProperty.call(keyIndices, key)) {
            var arr = this._arr;
            var index = arr.length;
            keyIndices[key] = index;
            arr.push({
                key: key,
                priority: priority
            });
            this._decrease(index);
            return true;
        }
        return false;
    }
    /**
   * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
   */ removeMin() {
        this._swap(0, this._arr.length - 1);
        var min = this._arr.pop();
        delete this._keyIndices[min.key];
        this._heapify(0);
        return min.key;
    }
    /**
   * Decreases the priority for **key** to **priority**. If the new priority is
   * greater than the previous priority, this function will throw an Error.
   *
   * @param {Object} key the key for which to raise priority
   * @param {Number} priority the new priority for the key
   */ decrease(key, priority) {
        var index = this._keyIndices[key];
        if (priority > this._arr[index].priority) {
            throw new Error('New priority is greater than current priority. ' + 'Key: ' + key + ' Old: ' + this._arr[index].priority + ' New: ' + priority);
        }
        this._arr[index].priority = priority;
        this._decrease(index);
    }
    _heapify(i) {
        var arr = this._arr;
        var l = 2 * i;
        var r = l + 1;
        var largest = i;
        if (l < arr.length) {
            largest = arr[l].priority < arr[largest].priority ? l : largest;
            if (r < arr.length) {
                largest = arr[r].priority < arr[largest].priority ? r : largest;
            }
            if (largest !== i) {
                this._swap(i, largest);
                this._heapify(largest);
            }
        }
    }
    _decrease(index) {
        var arr = this._arr;
        var priority = arr[index].priority;
        var parent;
        while(index !== 0){
            parent = index >> 1;
            if (arr[parent].priority < priority) {
                break;
            }
            this._swap(index, parent);
            index = parent;
        }
    }
    _swap(i, j) {
        var arr = this._arr;
        var keyIndices = this._keyIndices;
        var origArrI = arr[i];
        var origArrJ = arr[j];
        arr[i] = origArrJ;
        arr[j] = origArrI;
        keyIndices[origArrJ.key] = i;
        keyIndices[origArrI.key] = j;
    }
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "dijkstra": (()=>dijkstra)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$data$2f$priority$2d$queue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/data/priority-queue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
var DEFAULT_WEIGHT_FUNC = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.constant(1);
function dijkstra(g, source, weightFn, edgeFn) {
    return runDijkstra(g, String(source), weightFn || DEFAULT_WEIGHT_FUNC, edgeFn || function(v) {
        return g.outEdges(v);
    });
}
function runDijkstra(g, source, weightFn, edgeFn) {
    var results = {};
    var pq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$data$2f$priority$2d$queue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PriorityQueue"]();
    var v, vEntry;
    var updateNeighbors = function(edge) {
        var w = edge.v !== v ? edge.v : edge.w;
        var wEntry = results[w];
        var weight = weightFn(edge);
        var distance = vEntry.distance + weight;
        if (weight < 0) {
            throw new Error('dijkstra does not allow negative edge weights. ' + 'Bad edge: ' + edge + ' Weight: ' + weight);
        }
        if (distance < wEntry.distance) {
            wEntry.distance = distance;
            wEntry.predecessor = v;
            pq.decrease(w, distance);
        }
    };
    g.nodes().forEach(function(v) {
        var distance = v === source ? 0 : Number.POSITIVE_INFINITY;
        results[v] = {
            distance: distance
        };
        pq.add(v, distance);
    });
    while(pq.size() > 0){
        v = pq.removeMin();
        vEntry = results[v];
        if (vEntry.distance === Number.POSITIVE_INFINITY) {
            break;
        }
        edgeFn(v).forEach(updateNeighbors);
    }
    return results;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra-all.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "dijkstraAll": (()=>dijkstraAll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dijkstra$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
function dijkstraAll(g, weightFunc, edgeFunc) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.transform(g.nodes(), function(acc, v) {
        acc[v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dijkstra$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dijkstra"])(g, v, weightFunc, edgeFunc);
    }, {});
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/tarjan.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "tarjan": (()=>tarjan)
});
;
function tarjan(g) {
    var index = 0;
    var stack = [];
    var visited = {}; // node id -> { onStack, lowlink, index }
    var results = [];
    function dfs(v) {
        var entry = visited[v] = {
            onStack: true,
            lowlink: index,
            index: index++
        };
        stack.push(v);
        g.successors(v).forEach(function(w) {
            if (!Object.prototype.hasOwnProperty.call(visited, w)) {
                dfs(w);
                entry.lowlink = Math.min(entry.lowlink, visited[w].lowlink);
            } else if (visited[w].onStack) {
                entry.lowlink = Math.min(entry.lowlink, visited[w].index);
            }
        });
        if (entry.lowlink === entry.index) {
            var cmpt = [];
            var w;
            do {
                w = stack.pop();
                visited[w].onStack = false;
                cmpt.push(w);
            }while (v !== w)
            results.push(cmpt);
        }
    }
    g.nodes().forEach(function(v) {
        if (!Object.prototype.hasOwnProperty.call(visited, v)) {
            dfs(v);
        }
    });
    return results;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/find-cycles.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findCycles": (()=>findCycles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$tarjan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/tarjan.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
function findCycles(g) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$tarjan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tarjan"])(g), function(cmpt) {
        return cmpt.length > 1 || cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]);
    });
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/floyd-warshall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "floydWarshall": (()=>floydWarshall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
var DEFAULT_WEIGHT_FUNC = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.constant(1);
function floydWarshall(g, weightFn, edgeFn) {
    return runFloydWarshall(g, weightFn || DEFAULT_WEIGHT_FUNC, edgeFn || function(v) {
        return g.outEdges(v);
    });
}
function runFloydWarshall(g, weightFn, edgeFn) {
    var results = {};
    var nodes = g.nodes();
    nodes.forEach(function(v) {
        results[v] = {};
        results[v][v] = {
            distance: 0
        };
        nodes.forEach(function(w) {
            if (v !== w) {
                results[v][w] = {
                    distance: Number.POSITIVE_INFINITY
                };
            }
        });
        edgeFn(v).forEach(function(edge) {
            var w = edge.v === v ? edge.w : edge.v;
            var d = weightFn(edge);
            results[v][w] = {
                distance: d,
                predecessor: v
            };
        });
    });
    nodes.forEach(function(k) {
        var rowK = results[k];
        nodes.forEach(function(i) {
            var rowI = results[i];
            nodes.forEach(function(j) {
                var ik = rowI[k];
                var kj = rowK[j];
                var ij = rowI[j];
                var altDistance = ik.distance + kj.distance;
                if (altDistance < ij.distance) {
                    ij.distance = altDistance;
                    ij.predecessor = kj.predecessor;
                }
            });
        });
    });
    return results;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/topsort.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CycleException": (()=>CycleException),
    "topsort": (()=>topsort)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
topsort.CycleException = CycleException;
function topsort(g) {
    var visited = {};
    var stack = {};
    var results = [];
    function visit(node) {
        if (Object.prototype.hasOwnProperty.call(stack, node)) {
            throw new CycleException();
        }
        if (!Object.prototype.hasOwnProperty.call(visited, node)) {
            stack[node] = true;
            visited[node] = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(g.predecessors(node), visit);
            delete stack[node];
            results.push(node);
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(g.sinks(), visit);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(visited) !== g.nodeCount()) {
        throw new CycleException();
    }
    return results;
}
function CycleException() {}
CycleException.prototype = new Error(); // must be an instance of Error to pass testing
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/is-acyclic.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isAcyclic": (()=>isAcyclic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$topsort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/topsort.js [app-ssr] (ecmascript)");
;
;
function isAcyclic(g) {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$topsort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topsort"])(g);
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$topsort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CycleException"]) {
            return false;
        }
        throw e;
    }
    return true;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/dfs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "dfs": (()=>dfs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */ function dfs(g, vs, order) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isArray(vs)) {
        vs = [
            vs
        ];
    }
    var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);
    var acc = [];
    var visited = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(vs, function(v) {
        if (!g.hasNode(v)) {
            throw new Error('Graph does not have node: ' + v);
        }
        doDfs(g, v, order === 'post', visited, navigation, acc);
    });
    return acc;
}
function doDfs(g, v, postorder, visited, navigation, acc) {
    if (!Object.prototype.hasOwnProperty.call(visited, v)) {
        visited[v] = true;
        if (!postorder) {
            acc.push(v);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(navigation(v), function(w) {
            doDfs(g, w, postorder, visited, navigation, acc);
        });
        if (postorder) {
            acc.push(v);
        }
    }
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/postorder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "postorder": (()=>postorder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dfs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/dfs.js [app-ssr] (ecmascript)");
;
;
function postorder(g, vs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dfs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dfs"])(g, vs, 'post');
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/preorder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "preorder": (()=>preorder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dfs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/dfs.js [app-ssr] (ecmascript)");
;
;
function preorder(g, vs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dfs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dfs"])(g, vs, 'pre');
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/prim.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "prim": (()=>prim)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$data$2f$priority$2d$queue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/data/priority-queue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
;
function prim(g, weightFunc) {
    var result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"]();
    var parents = {};
    var pq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$data$2f$priority$2d$queue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PriorityQueue"]();
    var v;
    function updateNeighbors(edge) {
        var w = edge.v === v ? edge.w : edge.v;
        var pri = pq.priority(w);
        if (pri !== undefined) {
            var edgeWeight = weightFunc(edge);
            if (edgeWeight < pri) {
                parents[w] = v;
                pq.decrease(w, edgeWeight);
            }
        }
    }
    if (g.nodeCount() === 0) {
        return result;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(g.nodes(), function(v) {
        pq.add(v, Number.POSITIVE_INFINITY);
        result.setNode(v);
    });
    // Start from an arbitrary node
    pq.decrease(g.nodes()[0], 0);
    var init = false;
    while(pq.size() > 0){
        v = pq.removeMin();
        if (Object.prototype.hasOwnProperty.call(parents, v)) {
            result.setEdge(v, parents[v]);
        } else if (init) {
            throw new Error('Input graph is not connected: ' + g);
        } else {
            init = true;
        }
        g.nodeEdges(v).forEach(updateNeighbors);
    }
    return result;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
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
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$components$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/components.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dijkstra$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dijkstra$2d$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra-all.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$find$2d$cycles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/find-cycles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$floyd$2d$warshall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/floyd-warshall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$is$2d$acyclic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/is-acyclic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$postorder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/postorder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$preorder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/preorder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$prim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/prim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$tarjan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/tarjan.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$topsort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/topsort.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/index.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "components": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$components$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["components"]),
    "dijkstra": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dijkstra$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dijkstra"]),
    "dijkstraAll": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dijkstra$2d$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dijkstraAll"]),
    "findCycles": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$find$2d$cycles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findCycles"]),
    "floydWarshall": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$floyd$2d$warshall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floydWarshall"]),
    "isAcyclic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$is$2d$acyclic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAcyclic"]),
    "postorder": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$postorder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postorder"]),
    "preorder": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$preorder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preorder"]),
    "prim": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$prim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prim"]),
    "tarjan": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$tarjan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tarjan"]),
    "topsort": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$topsort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topsort"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$components$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/components.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dijkstra$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$dijkstra$2d$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/dijkstra-all.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$find$2d$cycles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/find-cycles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$floyd$2d$warshall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/floyd-warshall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$is$2d$acyclic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/is-acyclic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$postorder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/postorder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$preorder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/preorder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$prim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/prim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$tarjan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/tarjan.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$topsort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/topsort.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "components": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["components"]),
    "dijkstra": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dijkstra"]),
    "dijkstraAll": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dijkstraAll"]),
    "findCycles": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["findCycles"]),
    "floydWarshall": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["floydWarshall"]),
    "isAcyclic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isAcyclic"]),
    "postorder": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["postorder"]),
    "preorder": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preorder"]),
    "prim": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prim"]),
    "tarjan": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tarjan"]),
    "topsort": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["topsort"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/index.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/network-simplex.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "networkSimplex": (()=>networkSimplex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$feasible$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/feasible-tree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/alg/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Expose some internals for testing purposes
networkSimplex.initLowLimValues = initLowLimValues;
networkSimplex.initCutValues = initCutValues;
networkSimplex.calcCutValue = calcCutValue;
networkSimplex.leaveEdge = leaveEdge;
networkSimplex.enterEdge = enterEdge;
networkSimplex.exchangeEdges = exchangeEdges;
/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */ function networkSimplex(g) {
    g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simplify"])(g);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longestPath"])(g);
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$feasible$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["feasibleTree"])(g);
    initLowLimValues(t);
    initCutValues(t, g);
    var e, f;
    while(e = leaveEdge(t)){
        f = enterEdge(t, g, e);
        exchangeEdges(t, g, e, f);
    }
}
/*
 * Initializes cut values for all edges in the tree.
 */ function initCutValues(t, g) {
    var vs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.postorder(t, t.nodes());
    vs = vs.slice(0, vs.length - 1);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(vs, function(v) {
        assignCutValue(t, g, v);
    });
}
function assignCutValue(t, g, child) {
    var childLab = t.node(child);
    var parent = childLab.parent;
    t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}
/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */ function calcCutValue(t, g, child) {
    var childLab = t.node(child);
    var parent = childLab.parent;
    // True if the child is on the tail end of the edge in the directed graph
    var childIsTail = true;
    // The graph's view of the tree edge we're inspecting
    var graphEdge = g.edge(child, parent);
    // The accumulated cut value for the edge between this node and its parent
    var cutValue = 0;
    if (!graphEdge) {
        childIsTail = false;
        graphEdge = g.edge(parent, child);
    }
    cutValue = graphEdge.weight;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodeEdges(child), function(e) {
        var isOutEdge = e.v === child, other = isOutEdge ? e.w : e.v;
        if (other !== parent) {
            var pointsToHead = isOutEdge === childIsTail, otherWeight = g.edge(e).weight;
            cutValue += pointsToHead ? otherWeight : -otherWeight;
            if (isTreeEdge(t, child, other)) {
                var otherCutValue = t.edge(child, other).cutvalue;
                cutValue += pointsToHead ? -otherCutValue : otherCutValue;
            }
        }
    });
    return cutValue;
}
function initLowLimValues(tree, root) {
    if (arguments.length < 2) {
        root = tree.nodes()[0];
    }
    dfsAssignLowLim(tree, {}, 1, root);
}
function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
    var low = nextLim;
    var label = tree.node(v);
    visited[v] = true;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(tree.neighbors(v), function(w) {
        if (!Object.prototype.hasOwnProperty.call(visited, w)) {
            nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
        }
    });
    label.low = low;
    label.lim = nextLim++;
    if (parent) {
        label.parent = parent;
    } else {
        // TODO should be able to remove this when we incrementally update low lim
        delete label.parent;
    }
    return nextLim;
}
function leaveEdge(tree) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.find(tree.edges(), function(e) {
        return tree.edge(e).cutvalue < 0;
    });
}
function enterEdge(t, g, edge) {
    var v = edge.v;
    var w = edge.w;
    // For the rest of this function we assume that v is the tail and w is the
    // head, so if we don't have this edge in the graph we should flip it to
    // match the correct orientation.
    if (!g.hasEdge(v, w)) {
        v = edge.w;
        w = edge.v;
    }
    var vLabel = t.node(v);
    var wLabel = t.node(w);
    var tailLabel = vLabel;
    var flip = false;
    // If the root is in the tail of the edge then we need to flip the logic that
    // checks for the head and tail nodes in the candidates function below.
    if (vLabel.lim > wLabel.lim) {
        tailLabel = wLabel;
        flip = true;
    }
    var candidates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.filter(g.edges(), function(edge) {
        return flip === isDescendant(t, t.node(edge.v), tailLabel) && flip !== isDescendant(t, t.node(edge.w), tailLabel);
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.minBy(candidates, function(edge) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slack"])(g, edge);
    });
}
function exchangeEdges(t, g, e, f) {
    var v = e.v;
    var w = e.w;
    t.removeEdge(v, w);
    t.setEdge(f.v, f.w, {});
    initLowLimValues(t);
    initCutValues(t, g);
    updateRanks(t, g);
}
function updateRanks(t, g) {
    var root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.find(t.nodes(), function(v) {
        return !g.node(v).parent;
    });
    var vs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$alg$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.preorder(t, root);
    vs = vs.slice(1);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(vs, function(v) {
        var parent = t.node(v).parent, edge = g.edge(v, parent), flipped = false;
        if (!edge) {
            edge = g.edge(parent, v);
            flipped = true;
        }
        g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
    });
}
/*
 * Returns true if the edge is in the tree.
 */ function isTreeEdge(tree, u, v) {
    return tree.hasEdge(u, v);
}
/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */ function isDescendant(tree, vLabel, rootLabel) {
    return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "rank": (()=>rank)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$feasible$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/feasible-tree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$network$2d$simplex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/network-simplex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/util.js [app-ssr] (ecmascript)");
;
;
;
;
/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */ function rank(g) {
    switch(g.graph().ranker){
        case 'network-simplex':
            networkSimplexRanker(g);
            break;
        case 'tight-tree':
            tightTreeRanker(g);
            break;
        case 'longest-path':
            longestPathRanker(g);
            break;
        default:
            networkSimplexRanker(g);
    }
}
// A fast and simple ranker, but results are far from optimal.
var longestPathRanker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longestPath"];
function tightTreeRanker(g) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longestPath"])(g);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$feasible$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["feasibleTree"])(g);
}
function networkSimplexRanker(g) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$network$2d$simplex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkSimplex"])(g);
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/nesting-graph.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cleanup": (()=>cleanup),
    "run": (()=>run)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */ function run(g) {
    var root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.addDummyNode(g, 'root', {}, '_root');
    var depths = treeDepths(g);
    var height = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.max(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.values(depths)) - 1; // Note: depths is an Object not an array
    var nodeSep = 2 * height + 1;
    g.graph().nestingRoot = root;
    // Multiply minlen by nodeSep to align nodes on non-border ranks.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        g.edge(e).minlen *= nodeSep;
    });
    // Calculate a weight that is sufficient to keep subgraphs vertically compact
    var weight = sumWeights(g) + 1;
    // Create border nodes and link them up
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.children(), function(child) {
        dfs(g, root, nodeSep, weight, height, depths, child);
    });
    // Save the multiplier for node layers for later removal of empty border
    // layers.
    g.graph().nodeRankFactor = nodeSep;
}
function dfs(g, root, nodeSep, weight, height, depths, v) {
    var children = g.children(v);
    if (!children.length) {
        if (v !== root) {
            g.setEdge(root, v, {
                weight: 0,
                minlen: nodeSep
            });
        }
        return;
    }
    var top = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.addBorderNode(g, '_bt');
    var bottom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.addBorderNode(g, '_bb');
    var label = g.node(v);
    g.setParent(top, v);
    label.borderTop = top;
    g.setParent(bottom, v);
    label.borderBottom = bottom;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(children, function(child) {
        dfs(g, root, nodeSep, weight, height, depths, child);
        var childNode = g.node(child);
        var childTop = childNode.borderTop ? childNode.borderTop : child;
        var childBottom = childNode.borderBottom ? childNode.borderBottom : child;
        var thisWeight = childNode.borderTop ? weight : 2 * weight;
        var minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
        g.setEdge(top, childTop, {
            weight: thisWeight,
            minlen: minlen,
            nestingEdge: true
        });
        g.setEdge(childBottom, bottom, {
            weight: thisWeight,
            minlen: minlen,
            nestingEdge: true
        });
    });
    if (!g.parent(v)) {
        g.setEdge(root, top, {
            weight: 0,
            minlen: height + depths[v]
        });
    }
}
function treeDepths(g) {
    var depths = {};
    function dfs(v, depth) {
        var children = g.children(v);
        if (children && children.length) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(children, function(child) {
                dfs(child, depth + 1);
            });
        }
        depths[v] = depth;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.children(), function(v) {
        dfs(v, 1);
    });
    return depths;
}
function sumWeights(g) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.reduce(g.edges(), function(acc, e) {
        return acc + g.edge(e).weight;
    }, 0);
}
function cleanup(g) {
    var graphLabel = g.graph();
    g.removeNode(graphLabel.nestingRoot);
    delete graphLabel.nestingRoot;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (edge.nestingEdge) {
            g.removeEdge(e);
        }
    });
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/add-subgraph-constraints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addSubgraphConstraints": (()=>addSubgraphConstraints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
function addSubgraphConstraints(g, cg, vs) {
    var prev = {}, rootPrev;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(vs, function(v) {
        var child = g.parent(v), parent, prevChild;
        while(child){
            parent = g.parent(child);
            if (parent) {
                prevChild = prev[parent];
                prev[parent] = child;
            } else {
                prevChild = rootPrev;
                rootPrev = child;
            }
            if (prevChild && prevChild !== child) {
                cg.setEdge(prevChild, child);
                return;
            }
            child = parent;
        }
    });
/*
  function dfs(v) {
    var children = v ? g.children(v) : g.children();
    if (children.length) {
      var min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.each(children, function(child) {
        var childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */ }
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/build-layer-graph.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildLayerGraph": (()=>buildLayerGraph)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */ function buildLayerGraph(g, rank, relationship) {
    var root = createRootNode(g), result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"]({
        compound: true
    }).setGraph({
        root: root
    }).setDefaultNodeLabel(function(v) {
        return g.node(v);
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        var node = g.node(v), parent = g.parent(v);
        if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
            result.setNode(v);
            result.setParent(v, parent || root);
            // This assumes we have only short edges!
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g[relationship](v), function(e) {
                var u = e.v === v ? e.w : e.v, edge = result.edge(u, v), weight = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(edge) ? edge.weight : 0;
                result.setEdge(u, v, {
                    weight: g.edge(e).weight + weight
                });
            });
            if (Object.prototype.hasOwnProperty.call(node, 'minRank')) {
                result.setNode(v, {
                    borderLeft: node.borderLeft[rank],
                    borderRight: node.borderRight[rank]
                });
            }
        }
    });
    return result;
}
function createRootNode(g) {
    var v;
    while(g.hasNode(v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.uniqueId('_root')));
    return v;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/cross-count.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "crossCount": (()=>crossCount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */ function crossCount(g, layering) {
    var cc = 0;
    for(var i = 1; i < layering.length; ++i){
        cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
    }
    return cc;
}
function twoLayerCrossCount(g, northLayer, southLayer) {
    // Sort all of the edges between the north and south layers by their position
    // in the north layer and then the south. Map these edges to the position of
    // their head in the south layer.
    var southPos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.zipObject(southLayer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(southLayer, function(v, i) {
        return i;
    }));
    var southEntries = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.flatten(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(northLayer, function(v) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.sortBy(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(g.outEdges(v), function(e) {
            return {
                pos: southPos[e.w],
                weight: g.edge(e).weight
            };
        }), 'pos');
    }));
    // Build the accumulator tree
    var firstIndex = 1;
    while(firstIndex < southLayer.length)firstIndex <<= 1;
    var treeSize = 2 * firstIndex - 1;
    firstIndex -= 1;
    var tree = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(new Array(treeSize), function() {
        return 0;
    });
    // Calculate the weighted crossings
    var cc = 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(// @ts-expect-error
    southEntries.forEach(function(entry) {
        var index = entry.pos + firstIndex;
        tree[index] += entry.weight;
        var weightSum = 0;
        // @ts-expect-error
        while(index > 0){
            // @ts-expect-error
            if (index % 2) {
                weightSum += tree[index + 1];
            }
            // @ts-expect-error
            index = index - 1 >> 1;
            tree[index] += entry.weight;
        }
        cc += entry.weight * weightSum;
    }));
    return cc;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/init-order.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "initOrder": (()=>initOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
function initOrder(g) {
    var visited = {};
    var simpleNodes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.filter(g.nodes(), function(v) {
        return !g.children(v).length;
    });
    var maxRank = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.max(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(simpleNodes, function(v) {
        return g.node(v).rank;
    }));
    var layers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.range(maxRank + 1), function() {
        return [];
    });
    function dfs(v) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.has(visited, v)) return;
        visited[v] = true;
        var node = g.node(v);
        layers[node.rank].push(v);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.successors(v), dfs);
    }
    var orderedVs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.sortBy(simpleNodes, function(v) {
        return g.node(v).rank;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(orderedVs, dfs);
    return layers;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/barycenter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "barycenter": (()=>barycenter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
function barycenter(g, movable) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(movable, function(v) {
        var inV = g.inEdges(v);
        if (!inV.length) {
            return {
                v: v
            };
        } else {
            var result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.reduce(inV, function(acc, e) {
                var edge = g.edge(e), nodeU = g.node(e.v);
                return {
                    sum: acc.sum + edge.weight * nodeU.order,
                    weight: acc.weight + edge.weight
                };
            }, {
                sum: 0,
                weight: 0
            });
            return {
                v: v,
                barycenter: result.sum / result.weight,
                weight: result.weight
            };
        }
    });
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/resolve-conflicts.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveConflicts": (()=>resolveConflicts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */ function resolveConflicts(entries, cg) {
    var mappedEntries = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(entries, function(entry, i) {
        var tmp = mappedEntries[entry.v] = {
            indegree: 0,
            in: [],
            out: [],
            vs: [
                entry.v
            ],
            i: i
        };
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(entry.barycenter)) {
            // @ts-expect-error
            tmp.barycenter = entry.barycenter;
            // @ts-expect-error
            tmp.weight = entry.weight;
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(cg.edges(), function(e) {
        var entryV = mappedEntries[e.v];
        var entryW = mappedEntries[e.w];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(entryV) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(entryW)) {
            entryW.indegree++;
            entryV.out.push(mappedEntries[e.w]);
        }
    });
    var sourceSet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.filter(mappedEntries, function(entry) {
        // @ts-expect-error
        return !entry.indegree;
    });
    return doResolveConflicts(sourceSet);
}
function doResolveConflicts(sourceSet) {
    var entries = [];
    function handleIn(vEntry) {
        return function(uEntry) {
            if (uEntry.merged) {
                return;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(uEntry.barycenter) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(vEntry.barycenter) || uEntry.barycenter >= vEntry.barycenter) {
                mergeEntries(vEntry, uEntry);
            }
        };
    }
    function handleOut(vEntry) {
        return function(wEntry) {
            wEntry['in'].push(vEntry);
            if (--wEntry.indegree === 0) {
                sourceSet.push(wEntry);
            }
        };
    }
    while(sourceSet.length){
        var entry = sourceSet.pop();
        entries.push(entry);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(entry['in'].reverse(), handleIn(entry));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(entry.out, handleOut(entry));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.filter(entries, function(entry) {
        return !entry.merged;
    }), function(entry) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.pick(entry, [
            'vs',
            'i',
            'barycenter',
            'weight'
        ]);
    });
}
function mergeEntries(target, source) {
    var sum = 0;
    var weight = 0;
    if (target.weight) {
        sum += target.barycenter * target.weight;
        weight += target.weight;
    }
    if (source.weight) {
        sum += source.barycenter * source.weight;
        weight += source.weight;
    }
    target.vs = source.vs.concat(target.vs);
    target.barycenter = sum / weight;
    target.weight = weight;
    target.i = Math.min(source.i, target.i);
    source.merged = true;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/sort.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sort": (()=>sort)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
function sort(entries, biasRight) {
    var parts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.partition(entries, function(entry) {
        return Object.prototype.hasOwnProperty.call(entry, 'barycenter');
    });
    var sortable = parts.lhs, unsortable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.sortBy(parts.rhs, function(entry) {
        return -entry.i;
    }), vs = [], sum = 0, weight = 0, vsIndex = 0;
    sortable.sort(compareWithBias(!!biasRight));
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(sortable, function(entry) {
        vsIndex += entry.vs.length;
        vs.push(entry.vs);
        sum += entry.barycenter * entry.weight;
        weight += entry.weight;
        vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
    });
    var result = {
        vs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.flatten(vs)
    };
    if (weight) {
        result.barycenter = sum / weight;
        result.weight = weight;
    }
    return result;
}
function consumeUnsortable(vs, unsortable, index) {
    var last;
    while(unsortable.length && (last = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.last(unsortable)).i <= index){
        unsortable.pop();
        vs.push(last.vs);
        index++;
    }
    return index;
}
function compareWithBias(bias) {
    return function(entryV, entryW) {
        if (entryV.barycenter < entryW.barycenter) {
            return -1;
        } else if (entryV.barycenter > entryW.barycenter) {
            return 1;
        }
        return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
    };
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/sort-subgraph.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sortSubgraph": (()=>sortSubgraph)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$barycenter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/barycenter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$resolve$2d$conflicts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/resolve-conflicts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/sort.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
;
;
function sortSubgraph(g, v, cg, biasRight) {
    var movable = g.children(v);
    var node = g.node(v);
    var bl = node ? node.borderLeft : undefined;
    var br = node ? node.borderRight : undefined;
    var subgraphs = {};
    if (bl) {
        movable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.filter(movable, function(w) {
            return w !== bl && w !== br;
        });
    }
    var barycenters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$barycenter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barycenter"])(g, movable);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(barycenters, function(entry) {
        if (g.children(entry.v).length) {
            var subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
            subgraphs[entry.v] = subgraphResult;
            if (Object.prototype.hasOwnProperty.call(subgraphResult, 'barycenter')) {
                mergeBarycenters(entry, subgraphResult);
            }
        }
    });
    var entries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$resolve$2d$conflicts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveConflicts"])(barycenters, cg);
    expandSubgraphs(entries, subgraphs);
    var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sort"])(entries, biasRight);
    if (bl) {
        result.vs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.flatten([
            bl,
            result.vs,
            br
        ]);
        if (g.predecessors(bl).length) {
            var blPred = g.node(g.predecessors(bl)[0]), brPred = g.node(g.predecessors(br)[0]);
            if (!Object.prototype.hasOwnProperty.call(result, 'barycenter')) {
                result.barycenter = 0;
                result.weight = 0;
            }
            result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
            result.weight += 2;
        }
    }
    return result;
}
function expandSubgraphs(entries, subgraphs) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(entries, function(entry) {
        entry.vs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.flatten(entry.vs.map(function(v) {
            if (subgraphs[v]) {
                return subgraphs[v].vs;
            }
            return v;
        }));
    });
}
function mergeBarycenters(target, other) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isUndefined(target.barycenter)) {
        target.barycenter = (target.barycenter * target.weight + other.barycenter * other.weight) / (target.weight + other.weight);
        target.weight += other.weight;
    } else {
        target.barycenter = other.barycenter;
        target.weight = other.weight;
    }
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "order": (()=>order)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$add$2d$subgraph$2d$constraints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/add-subgraph-constraints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$build$2d$layer$2d$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/build-layer-graph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$cross$2d$count$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/cross-count.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$init$2d$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/init-order.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$sort$2d$subgraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/sort-subgraph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */ function order(g) {
    var maxRank = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.maxRank(g), downLayerGraphs = buildLayerGraphs(g, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.range(1, maxRank + 1), 'inEdges'), upLayerGraphs = buildLayerGraphs(g, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.range(maxRank - 1, -1, -1), 'outEdges');
    var layering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$init$2d$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initOrder"])(g);
    assignOrder(g, layering);
    var bestCC = Number.POSITIVE_INFINITY, best;
    for(var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest){
        sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);
        layering = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.buildLayerMatrix(g);
        var cc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$cross$2d$count$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crossCount"])(g, layering);
        if (cc < bestCC) {
            lastBest = 0;
            best = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cloneDeep(layering);
            bestCC = cc;
        }
    }
    assignOrder(g, best);
}
function buildLayerGraphs(g, ranks, relationship) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(ranks, function(rank) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$build$2d$layer$2d$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLayerGraph"])(g, rank, relationship);
    });
}
function sweepLayerGraphs(layerGraphs, biasRight) {
    var cg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layerGraphs, function(lg) {
        var root = lg.graph().root;
        var sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$sort$2d$subgraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortSubgraph"])(lg, root, cg, biasRight);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(sorted.vs, function(v, i) {
            lg.node(v).order = i;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$add$2d$subgraph$2d$constraints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addSubgraphConstraints"])(lg, cg, sorted.vs);
    });
}
function assignOrder(g, layering) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layering, function(layer) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layer, function(v, i) {
            g.node(v).order = i;
        });
    });
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/parent-dummy-chains.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parentDummyChains": (()=>parentDummyChains)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
function parentDummyChains(g) {
    var postorderNums = postorder(g);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.graph().dummyChains, function(v) {
        var node = g.node(v);
        var edgeObj = node.edgeObj;
        var pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
        var path = pathData.path;
        var lca = pathData.lca;
        var pathIdx = 0;
        var pathV = path[pathIdx];
        var ascending = true;
        while(v !== edgeObj.w){
            node = g.node(v);
            if (ascending) {
                while((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank){
                    pathIdx++;
                }
                if (pathV === lca) {
                    ascending = false;
                }
            }
            if (!ascending) {
                while(pathIdx < path.length - 1 && g.node(pathV = path[pathIdx + 1]).minRank <= node.rank){
                    pathIdx++;
                }
                pathV = path[pathIdx];
            }
            g.setParent(v, pathV);
            v = g.successors(v)[0];
        }
    });
}
// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g, postorderNums, v, w) {
    var vPath = [];
    var wPath = [];
    var low = Math.min(postorderNums[v].low, postorderNums[w].low);
    var lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
    var parent;
    var lca;
    // Traverse up from v to find the LCA
    parent = v;
    do {
        parent = g.parent(parent);
        vPath.push(parent);
    }while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim))
    lca = parent;
    // Traverse from w to LCA
    parent = w;
    while((parent = g.parent(parent)) !== lca){
        wPath.push(parent);
    }
    return {
        path: vPath.concat(wPath.reverse()),
        lca: lca
    };
}
function postorder(g) {
    var result = {};
    var lim = 0;
    function dfs(v) {
        var low = lim;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.children(v), dfs);
        result[v] = {
            low: low,
            lim: lim++
        };
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.children(), dfs);
    return result;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/position/bk.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addConflict": (()=>addConflict),
    "alignCoordinates": (()=>alignCoordinates),
    "balance": (()=>balance),
    "findSmallestWidthAlignment": (()=>findSmallestWidthAlignment),
    "findType1Conflicts": (()=>findType1Conflicts),
    "findType2Conflicts": (()=>findType2Conflicts),
    "hasConflict": (()=>hasConflict),
    "horizontalCompaction": (()=>horizontalCompaction),
    "positionX": (()=>positionX),
    "verticalAlignment": (()=>verticalAlignment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)");
;
;
;
;
/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */ function findType1Conflicts(g, layering) {
    var conflicts = {};
    function visitLayer(prevLayer, layer) {
        var // segment.
        k0 = 0, // Tracks the last node in this layer scanned for crossings with a type-1
        // segment.
        scanPos = 0, prevLayerLength = prevLayer.length, lastNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.last(layer);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layer, function(v, i) {
            var w = findOtherInnerSegmentNode(g, v), k1 = w ? g.node(w).order : prevLayerLength;
            if (w || v === lastNode) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layer.slice(scanPos, i + 1), function(scanNode) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.predecessors(scanNode), function(u) {
                        var uLabel = g.node(u), uPos = uLabel.order;
                        if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) {
                            addConflict(conflicts, u, scanNode);
                        }
                    });
                });
                // @ts-expect-error
                scanPos = i + 1;
                k0 = k1;
            }
        });
        return layer;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.reduce(layering, visitLayer);
    return conflicts;
}
function findType2Conflicts(g, layering) {
    var conflicts = {};
    function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
        var v;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.range(southPos, southEnd), function(i) {
            v = south[i];
            if (g.node(v).dummy) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.predecessors(v), function(u) {
                    var uNode = g.node(u);
                    if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
                        addConflict(conflicts, u, v);
                    }
                });
            }
        });
    }
    function visitLayer(north, south) {
        var prevNorthPos = -1, nextNorthPos, southPos = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(south, function(v, southLookahead) {
            if (g.node(v).dummy === 'border') {
                var predecessors = g.predecessors(v);
                if (predecessors.length) {
                    nextNorthPos = g.node(predecessors[0]).order;
                    scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
                    // @ts-expect-error
                    southPos = southLookahead;
                    prevNorthPos = nextNorthPos;
                }
            }
            scan(south, southPos, south.length, nextNorthPos, north.length);
        });
        return south;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.reduce(layering, visitLayer);
    return conflicts;
}
function findOtherInnerSegmentNode(g, v) {
    if (g.node(v).dummy) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.find(g.predecessors(v), function(u) {
            return g.node(u).dummy;
        });
    }
}
function addConflict(conflicts, v, w) {
    if (v > w) {
        var tmp = v;
        v = w;
        w = tmp;
    }
    var conflictsV = conflicts[v];
    if (!conflictsV) {
        conflicts[v] = conflictsV = {};
    }
    conflictsV[w] = true;
}
function hasConflict(conflicts, v, w) {
    if (v > w) {
        var tmp = v;
        v = w;
        w = tmp;
    }
    return !!conflicts[v] && Object.prototype.hasOwnProperty.call(conflicts[v], w);
}
/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */ function verticalAlignment(g, layering, conflicts, neighborFn) {
    var root = {}, align = {}, pos = {};
    // We cache the position here based on the layering because the graph and
    // layering may be out of sync. The layering matrix is manipulated to
    // generate different extreme alignments.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layering, function(layer) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layer, function(v, order) {
            root[v] = v;
            align[v] = v;
            pos[v] = order;
        });
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layering, function(layer) {
        var prevIdx = -1;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layer, function(v) {
            var ws = neighborFn(v);
            if (ws.length) {
                ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.sortBy(ws, function(w) {
                    return pos[w];
                });
                var mp = (ws.length - 1) / 2;
                for(var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i){
                    var w = ws[i];
                    if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
                        align[w] = v;
                        align[v] = root[v] = root[w];
                        prevIdx = pos[w];
                    }
                }
            }
        });
    });
    return {
        root: root,
        align: align
    };
}
function horizontalCompaction(g, layering, root, align, reverseSep) {
    // This portion of the algorithm differs from BK due to a number of problems.
    // Instead of their algorithm we construct a new block graph and do two
    // sweeps. The first sweep places blocks with the smallest possible
    // coordinates. The second sweep removes unused space by moving blocks to the
    // greatest coordinates without violating separation.
    var xs = {}, blockG = buildBlockGraph(g, layering, root, reverseSep), borderType = reverseSep ? 'borderLeft' : 'borderRight';
    function iterate(setXsFunc, nextNodesFunc) {
        var stack = blockG.nodes();
        var elem = stack.pop();
        var visited = {};
        while(elem){
            if (visited[elem]) {
                setXsFunc(elem);
            } else {
                visited[elem] = true;
                stack.push(elem);
                stack = stack.concat(nextNodesFunc(elem));
            }
            elem = stack.pop();
        }
    }
    // First pass, assign smallest coordinates
    function pass1(elem) {
        xs[elem] = blockG.inEdges(elem).reduce(function(acc, e) {
            return Math.max(acc, xs[e.v] + blockG.edge(e));
        }, 0);
    }
    // Second pass, assign greatest coordinates
    function pass2(elem) {
        var min = blockG.outEdges(elem).reduce(function(acc, e) {
            return Math.min(acc, xs[e.w] - blockG.edge(e));
        }, Number.POSITIVE_INFINITY);
        var node = g.node(elem);
        if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
            xs[elem] = Math.max(xs[elem], min);
        }
    }
    iterate(pass1, blockG.predecessors.bind(blockG));
    iterate(pass2, blockG.successors.bind(blockG));
    // Assign x coordinates to all nodes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(align, function(v) {
        xs[v] = xs[root[v]];
    });
    return xs;
}
function buildBlockGraph(g, layering, root, reverseSep) {
    var blockGraph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"](), graphLabel = g.graph(), sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layering, function(layer) {
        var u;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layer, function(v) {
            var vRoot = root[v];
            blockGraph.setNode(vRoot);
            if (u) {
                var uRoot = root[u], prevMax = blockGraph.edge(uRoot, vRoot);
                blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
            }
            u = v;
        });
    });
    return blockGraph;
}
/*
 * Returns the alignment that has the smallest width of the given alignments.
 */ function findSmallestWidthAlignment(g, xss) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.minBy(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.values(xss), function(xs) {
        var max = Number.NEGATIVE_INFINITY;
        var min = Number.POSITIVE_INFINITY;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forIn(xs, function(x, v) {
            var halfWidth = width(g, v) / 2;
            max = Math.max(x + halfWidth, max);
            min = Math.min(x - halfWidth, min);
        });
        return max - min;
    });
}
/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */ function alignCoordinates(xss, alignTo) {
    var alignToVals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.values(alignTo), alignToMin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.min(alignToVals), alignToMax = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.max(alignToVals);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach([
        'u',
        'd'
    ], function(vert) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach([
            'l',
            'r'
        ], function(horiz) {
            var alignment = vert + horiz, xs = xss[alignment], delta;
            if (xs === alignTo) return;
            var xsVals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.values(xs);
            delta = horiz === 'l' ? alignToMin - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.min(xsVals) : alignToMax - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.max(xsVals);
            if (delta) {
                xss[alignment] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mapValues(xs, function(x) {
                    return x + delta;
                });
            }
        });
    });
}
function balance(xss, align) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mapValues(xss.ul, function(ignore, v) {
        if (align) {
            return xss[align.toLowerCase()][v];
        } else {
            var xs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.sortBy(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(xss, v));
            return (xs[1] + xs[2]) / 2;
        }
    });
}
function positionX(g) {
    var layering = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.buildLayerMatrix(g);
    var conflicts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.merge(findType1Conflicts(g, layering), findType2Conflicts(g, layering));
    var xss = {};
    var adjustedLayering;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach([
        'u',
        'd'
    ], function(vert) {
        adjustedLayering = vert === 'u' ? layering : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.values(layering).reverse();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach([
            'l',
            'r'
        ], function(horiz) {
            if (horiz === 'r') {
                adjustedLayering = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(adjustedLayering, function(inner) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.values(inner).reverse();
                });
            }
            var neighborFn = (vert === 'u' ? g.predecessors : g.successors).bind(g);
            var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
            var xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, horiz === 'r');
            if (horiz === 'r') {
                xs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mapValues(xs, function(x) {
                    return -x;
                });
            }
            xss[vert + horiz] = xs;
        });
    });
    var smallestWidth = findSmallestWidthAlignment(g, xss);
    alignCoordinates(xss, smallestWidth);
    return balance(xss, g.graph().align);
}
function sep(nodeSep, edgeSep, reverseSep) {
    return function(g, v, w) {
        var vLabel = g.node(v);
        var wLabel = g.node(w);
        var sum = 0;
        var delta;
        sum += vLabel.width / 2;
        if (Object.prototype.hasOwnProperty.call(vLabel, 'labelpos')) {
            switch(vLabel.labelpos.toLowerCase()){
                case 'l':
                    delta = -vLabel.width / 2;
                    break;
                case 'r':
                    delta = vLabel.width / 2;
                    break;
            }
        }
        if (delta) {
            sum += reverseSep ? delta : -delta;
        }
        delta = 0;
        sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
        sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;
        sum += wLabel.width / 2;
        if (Object.prototype.hasOwnProperty.call(wLabel, 'labelpos')) {
            switch(wLabel.labelpos.toLowerCase()){
                case 'l':
                    delta = wLabel.width / 2;
                    break;
                case 'r':
                    delta = -wLabel.width / 2;
                    break;
            }
        }
        if (delta) {
            sum += reverseSep ? delta : -delta;
        }
        delta = 0;
        return sum;
    };
}
function width(g, v) {
    return g.node(v).width;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/position/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "position": (()=>position)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$position$2f$bk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/position/bk.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
;
;
;
;
function position(g) {
    g = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.asNonCompoundGraph(g);
    positionY(g);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forOwn((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$position$2f$bk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["positionX"])(g), function(x, v) {
        g.node(v).x = x;
    });
}
function positionY(g) {
    var layering = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.buildLayerMatrix(g);
    var rankSep = g.graph().ranksep;
    var prevY = 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layering, function(layer) {
        var maxHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.max(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(layer, function(v) {
            return g.node(v).height;
        }));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layer, function(v) {
            g.node(v).y = prevY + maxHeight / 2;
        });
        prevY += maxHeight + rankSep;
    });
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/layout.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "layout": (()=>layout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$add$2d$border$2d$segments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/add-border-segments.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$coordinate$2d$system$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/coordinate-system.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$acyclic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/acyclic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/normalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$nesting$2d$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/nesting-graph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/order/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$parent$2d$dummy$2d$chains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/parent-dummy-chains.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$position$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/position/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)");
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
function layout(g, opts) {
    var time = opts && opts.debugTiming ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.time : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.notime;
    time('layout', ()=>{
        var layoutGraph = time('  buildLayoutGraph', ()=>buildLayoutGraph(g));
        time('  runLayout', ()=>runLayout(layoutGraph, time));
        time('  updateInputGraph', ()=>updateInputGraph(g, layoutGraph));
    });
}
function runLayout(g, time) {
    time('    makeSpaceForEdgeLabels', ()=>makeSpaceForEdgeLabels(g));
    time('    removeSelfEdges', ()=>removeSelfEdges(g));
    time('    acyclic', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$acyclic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.run(g));
    time('    nestingGraph.run', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$nesting$2d$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.run(g));
    time('    rank', ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rank"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.asNonCompoundGraph(g)));
    time('    injectEdgeLabelProxies', ()=>injectEdgeLabelProxies(g));
    time('    removeEmptyRanks', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.removeEmptyRanks(g));
    time('    nestingGraph.cleanup', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$nesting$2d$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cleanup(g));
    time('    normalizeRanks', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.normalizeRanks(g));
    time('    assignRankMinMax', ()=>assignRankMinMax(g));
    time('    removeEdgeLabelProxies', ()=>removeEdgeLabelProxies(g));
    time('    normalize.run', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.run(g));
    time('    parentDummyChains', ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$parent$2d$dummy$2d$chains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parentDummyChains"])(g));
    time('    addBorderSegments', ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$add$2d$border$2d$segments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addBorderSegments"])(g));
    time('    order', ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$order$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["order"])(g));
    time('    insertSelfEdges', ()=>insertSelfEdges(g));
    time('    adjustCoordinateSystem', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$coordinate$2d$system$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.adjust(g));
    time('    position', ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$position$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["position"])(g));
    time('    positionSelfEdges', ()=>positionSelfEdges(g));
    time('    removeBorderNodes', ()=>removeBorderNodes(g));
    time('    normalize.undo', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.undo(g));
    time('    fixupEdgeLabelCoords', ()=>fixupEdgeLabelCoords(g));
    time('    undoCoordinateSystem', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$coordinate$2d$system$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.undo(g));
    time('    translateGraph', ()=>translateGraph(g));
    time('    assignNodeIntersects', ()=>assignNodeIntersects(g));
    time('    reversePoints', ()=>reversePointsForReversedEdges(g));
    time('    acyclic.undo', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$acyclic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.undo(g));
}
/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */ function updateInputGraph(inputGraph, layoutGraph) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(inputGraph.nodes(), function(v) {
        var inputLabel = inputGraph.node(v);
        var layoutLabel = layoutGraph.node(v);
        if (inputLabel) {
            inputLabel.x = layoutLabel.x;
            inputLabel.y = layoutLabel.y;
            if (layoutGraph.children(v).length) {
                inputLabel.width = layoutLabel.width;
                inputLabel.height = layoutLabel.height;
            }
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(inputGraph.edges(), function(e) {
        var inputLabel = inputGraph.edge(e);
        var layoutLabel = layoutGraph.edge(e);
        inputLabel.points = layoutLabel.points;
        if (Object.prototype.hasOwnProperty.call(layoutLabel, 'x')) {
            inputLabel.x = layoutLabel.x;
            inputLabel.y = layoutLabel.y;
        }
    });
    inputGraph.graph().width = layoutGraph.graph().width;
    inputGraph.graph().height = layoutGraph.graph().height;
}
var graphNumAttrs = [
    'nodesep',
    'edgesep',
    'ranksep',
    'marginx',
    'marginy'
];
var graphDefaults = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: 'tb'
};
var graphAttrs = [
    'acyclicer',
    'ranker',
    'rankdir',
    'align'
];
var nodeNumAttrs = [
    'width',
    'height'
];
var nodeDefaults = {
    width: 0,
    height: 0
};
var edgeNumAttrs = [
    'minlen',
    'weight',
    'width',
    'height',
    'labeloffset'
];
var edgeDefaults = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: 'r'
};
var edgeAttrs = [
    'labelpos'
];
/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */ function buildLayoutGraph(inputGraph) {
    var g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"]({
        multigraph: true,
        compound: true
    });
    var graph = canonicalize(inputGraph.graph());
    g.setGraph(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.merge({}, graphDefaults, selectNumberAttrs(graph, graphNumAttrs), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.pick(graph, graphAttrs)));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(inputGraph.nodes(), function(v) {
        var node = canonicalize(inputGraph.node(v));
        g.setNode(v, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.defaults(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
        g.setParent(v, inputGraph.parent(v));
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(inputGraph.edges(), function(e) {
        var edge = canonicalize(inputGraph.edge(e));
        g.setEdge(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.merge({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.pick(edge, edgeAttrs)));
    });
    return g;
}
/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */ function makeSpaceForEdgeLabels(g) {
    var graph = g.graph();
    graph.ranksep /= 2;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        edge.minlen *= 2;
        if (edge.labelpos.toLowerCase() !== 'c') {
            if (graph.rankdir === 'TB' || graph.rankdir === 'BT') {
                edge.width += edge.labeloffset;
            } else {
                edge.height += edge.labeloffset;
            }
        }
    });
}
/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */ function injectEdgeLabelProxies(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (edge.width && edge.height) {
            var v = g.node(e.v);
            var w = g.node(e.w);
            var label = {
                rank: (w.rank - v.rank) / 2 + v.rank,
                e: e
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.addDummyNode(g, 'edge-proxy', label, '_ep');
        }
    });
}
function assignRankMinMax(g) {
    var maxRank = 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (node.borderTop) {
            node.minRank = g.node(node.borderTop).rank;
            node.maxRank = g.node(node.borderBottom).rank;
            // @ts-expect-error
            maxRank = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.max(maxRank, node.maxRank);
        }
    });
    g.graph().maxRank = maxRank;
}
function removeEdgeLabelProxies(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (node.dummy === 'edge-proxy') {
            g.edge(node.e).labelRank = node.rank;
            g.removeNode(v);
        }
    });
}
function translateGraph(g) {
    var minX = Number.POSITIVE_INFINITY;
    var maxX = 0;
    var minY = Number.POSITIVE_INFINITY;
    var maxY = 0;
    var graphLabel = g.graph();
    var marginX = graphLabel.marginx || 0;
    var marginY = graphLabel.marginy || 0;
    function getExtremes(attrs) {
        var x = attrs.x;
        var y = attrs.y;
        var w = attrs.width;
        var h = attrs.height;
        minX = Math.min(minX, x - w / 2);
        maxX = Math.max(maxX, x + w / 2);
        minY = Math.min(minY, y - h / 2);
        maxY = Math.max(maxY, y + h / 2);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        getExtremes(g.node(v));
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (Object.prototype.hasOwnProperty.call(edge, 'x')) {
            getExtremes(edge);
        }
    });
    minX -= marginX;
    minY -= marginY;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        node.x -= minX;
        node.y -= minY;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(edge.points, function(p) {
            p.x -= minX;
            p.y -= minY;
        });
        if (Object.prototype.hasOwnProperty.call(edge, 'x')) {
            edge.x -= minX;
        }
        if (Object.prototype.hasOwnProperty.call(edge, 'y')) {
            edge.y -= minY;
        }
    });
    graphLabel.width = maxX - minX + marginX;
    graphLabel.height = maxY - minY + marginY;
}
function assignNodeIntersects(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        var nodeV = g.node(e.v);
        var nodeW = g.node(e.w);
        var p1, p2;
        if (!edge.points) {
            edge.points = [];
            p1 = nodeW;
            p2 = nodeV;
        } else {
            p1 = edge.points[0];
            p2 = edge.points[edge.points.length - 1];
        }
        edge.points.unshift(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.intersectRect(nodeV, p1));
        edge.points.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.intersectRect(nodeW, p2));
    });
}
function fixupEdgeLabelCoords(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (Object.prototype.hasOwnProperty.call(edge, 'x')) {
            if (edge.labelpos === 'l' || edge.labelpos === 'r') {
                edge.width -= edge.labeloffset;
            }
            switch(edge.labelpos){
                case 'l':
                    edge.x -= edge.width / 2 + edge.labeloffset;
                    break;
                case 'r':
                    edge.x += edge.width / 2 + edge.labeloffset;
                    break;
            }
        }
    });
}
function reversePointsForReversedEdges(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (edge.reversed) {
            edge.points.reverse();
        }
    });
}
function removeBorderNodes(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        if (g.children(v).length) {
            var node = g.node(v);
            var t = g.node(node.borderTop);
            var b = g.node(node.borderBottom);
            var l = g.node(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.last(node.borderLeft));
            var r = g.node(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.last(node.borderRight));
            node.width = Math.abs(r.x - l.x);
            node.height = Math.abs(b.y - t.y);
            node.x = l.x + node.width / 2;
            node.y = t.y + node.height / 2;
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        if (g.node(v).dummy === 'border') {
            g.removeNode(v);
        }
    });
}
function removeSelfEdges(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.edges(), function(e) {
        if (e.v === e.w) {
            var node = g.node(e.v);
            if (!node.selfEdges) {
                node.selfEdges = [];
            }
            node.selfEdges.push({
                e: e,
                label: g.edge(e)
            });
            g.removeEdge(e);
        }
    });
}
function insertSelfEdges(g) {
    var layers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.buildLayerMatrix(g);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layers, function(layer) {
        var orderShift = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(layer, function(v, i) {
            var node = g.node(v);
            node.order = i + orderShift;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(node.selfEdges, function(selfEdge) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.addDummyNode(g, 'selfedge', {
                    width: selfEdge.label.width,
                    height: selfEdge.label.height,
                    rank: node.rank,
                    order: i + ++orderShift,
                    e: selfEdge.e,
                    label: selfEdge.label
                }, '_se');
            });
            delete node.selfEdges;
        });
    });
}
function positionSelfEdges(g) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (node.dummy === 'selfedge') {
            var selfNode = g.node(node.e.v);
            var x = selfNode.x + selfNode.width / 2;
            var y = selfNode.y;
            var dx = node.x - x;
            var dy = selfNode.height / 2;
            g.setEdge(node.e, node.label);
            g.removeNode(v);
            node.label.points = [
                {
                    x: x + 2 * dx / 3,
                    y: y - dy
                },
                {
                    x: x + 5 * dx / 6,
                    y: y - dy
                },
                {
                    x: x + dx,
                    y: y
                },
                {
                    x: x + 5 * dx / 6,
                    y: y + dy
                },
                {
                    x: x + 2 * dx / 3,
                    y: y + dy
                }
            ];
            node.label.x = node.x;
            node.label.y = node.y;
        }
    });
}
function selectNumberAttrs(obj, attrs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.mapValues(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.pick(obj, attrs), Number);
}
function canonicalize(attrs) {
    var newAttrs = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forEach(attrs, function(v, k) {
        newAttrs[k.toLowerCase()] = v;
    });
    return newAttrs;
}
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$acyclic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/acyclic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/normalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$rank$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/rank/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$dagre$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/dagre/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Graph": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"]),
    "version": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["version"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/graph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Graph": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Graph"]),
    "version": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["version"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$2d$d3$2d$es$40$7$2e$0$2e$11$2f$node_modules$2f$dagre$2d$d3$2d$es$2f$src$2f$graphlib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/dagre-d3-es@7.0.11/node_modules/dagre-d3-es/src/graphlib/index.js [app-ssr] (ecmascript) <exports>");
}}),

};

//# sourceMappingURL=9c1b3_dagre-d3-es_src_ff156f._.js.map