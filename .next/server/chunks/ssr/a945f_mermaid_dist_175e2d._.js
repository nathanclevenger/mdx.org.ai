module.exports = {

"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UnknownDiagramError": (()=>UnknownDiagramError),
    "__export": (()=>__export),
    "__name": (()=>__name),
    "addDirective": (()=>addDirective),
    "assignWithDepth_default": (()=>assignWithDepth_default),
    "calculateMathMLDimensions": (()=>calculateMathMLDimensions),
    "clear": (()=>clear),
    "commonDb_exports": (()=>commonDb_exports),
    "common_default": (()=>common_default),
    "configureSvgSize": (()=>configureSvgSize),
    "defaultConfig": (()=>defaultConfig),
    "defaultConfig2": (()=>defaultConfig2),
    "defaultConfig_default": (()=>defaultConfig_default),
    "detectType": (()=>detectType),
    "detectors": (()=>detectors),
    "directiveRegex": (()=>directiveRegex),
    "evaluate": (()=>evaluate),
    "frontMatterRegex": (()=>frontMatterRegex),
    "getAccDescription": (()=>getAccDescription),
    "getAccTitle": (()=>getAccTitle),
    "getConfig": (()=>getConfig),
    "getConfig2": (()=>getConfig2),
    "getDiagram": (()=>getDiagram),
    "getDiagramLoader": (()=>getDiagramLoader),
    "getDiagramTitle": (()=>getDiagramTitle),
    "getSiteConfig": (()=>getSiteConfig),
    "getThemeVariables": (()=>getThemeVariables3),
    "hasKatex": (()=>hasKatex),
    "lineBreakRegex": (()=>lineBreakRegex),
    "log": (()=>log),
    "parseGenericTypes": (()=>parseGenericTypes),
    "registerDiagram": (()=>registerDiagram),
    "registerLazyLoadedDiagrams": (()=>registerLazyLoadedDiagrams),
    "renderKatex": (()=>renderKatex),
    "reset": (()=>reset),
    "sanitizeDirective": (()=>sanitizeDirective),
    "sanitizeText": (()=>sanitizeText),
    "sanitizeText2": (()=>sanitizeText3),
    "saveConfigFromInitialize": (()=>saveConfigFromInitialize),
    "setAccDescription": (()=>setAccDescription),
    "setAccTitle": (()=>setAccTitle),
    "setConfig": (()=>setConfig),
    "setConfig2": (()=>setConfig2),
    "setDiagramTitle": (()=>setDiagramTitle),
    "setLogLevel": (()=>setLogLevel),
    "setSiteConfig": (()=>setSiteConfig),
    "setupGraphViewbox": (()=>setupGraphViewbox),
    "setupGraphViewbox2": (()=>setupGraphViewbox2),
    "styles_default": (()=>styles_default),
    "themes_default": (()=>themes_default),
    "updateSiteConfig": (()=>updateSiteConfig)
});
// src/logger.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js [app-ssr] (ecmascript)");
// src/diagrams/common/common.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dompurify$40$3$2e$2$2e$3$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dompurify@3.2.3/node_modules/dompurify/dist/purify.es.mjs [app-ssr] (ecmascript)");
// src/themes/theme-helpers.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/adjust.js [app-ssr] (ecmascript) <export default as adjust>");
// src/themes/theme-base.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/invert.js [app-ssr] (ecmascript) <export default as invert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/darken.js [app-ssr] (ecmascript) <export default as darken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/lighten.js [app-ssr] (ecmascript) <export default as lighten>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$is_dark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__isDark$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/is_dark.js [app-ssr] (ecmascript) <export default as isDark>");
// src/themes/theme-dark.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$rgba$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__rgba$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/rgba.js [app-ssr] (ecmascript) <export default as rgba>");
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
;
var LEVELS = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
};
var log = {
    trace: /* @__PURE__ */ __name((..._args)=>{}, "trace"),
    debug: /* @__PURE__ */ __name((..._args)=>{}, "debug"),
    info: /* @__PURE__ */ __name((..._args)=>{}, "info"),
    warn: /* @__PURE__ */ __name((..._args)=>{}, "warn"),
    error: /* @__PURE__ */ __name((..._args)=>{}, "error"),
    fatal: /* @__PURE__ */ __name((..._args)=>{}, "fatal")
};
var setLogLevel = /* @__PURE__ */ __name(function(level = "fatal") {
    let numericLevel = LEVELS.fatal;
    if (typeof level === "string") {
        if (level.toLowerCase() in LEVELS) {
            numericLevel = LEVELS[level];
        }
    } else if (typeof level === "number") {
        numericLevel = level;
    }
    log.trace = ()=>{};
    log.debug = ()=>{};
    log.info = ()=>{};
    log.warn = ()=>{};
    log.error = ()=>{};
    log.fatal = ()=>{};
    if (numericLevel <= LEVELS.fatal) {
        log.fatal = console.error ? console.error.bind(console, format("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", format("FATAL"));
    }
    if (numericLevel <= LEVELS.error) {
        log.error = console.error ? console.error.bind(console, format("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", format("ERROR"));
    }
    if (numericLevel <= LEVELS.warn) {
        log.warn = console.warn ? console.warn.bind(console, format("WARN"), "color: orange") : console.log.bind(console, `\x1B[33m`, format("WARN"));
    }
    if (numericLevel <= LEVELS.info) {
        log.info = console.info ? console.info.bind(console, format("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", format("INFO"));
    }
    if (numericLevel <= LEVELS.debug) {
        log.debug = console.debug ? console.debug.bind(console, format("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format("DEBUG"));
    }
    if (numericLevel <= LEVELS.trace) {
        log.trace = console.debug ? console.debug.bind(console, format("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format("TRACE"));
    }
}, "setLogLevel");
var format = /* @__PURE__ */ __name((level)=>{
    const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().format("ss.SSS");
    return `%c${time} : ${level} : `;
}, "format");
// src/diagram-api/regexes.ts
var frontMatterRegex = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
var directiveRegex = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var anyCommentRegex = /\s*%%.*\n/gm;
// src/errors.ts
var UnknownDiagramError = class extends Error {
    static{
        __name(this, "UnknownDiagramError");
    }
    constructor(message){
        super(message);
        this.name = "UnknownDiagramError";
    }
};
// src/diagram-api/detectType.ts
var detectors = {};
var detectType = /* @__PURE__ */ __name(function(text, config2) {
    text = text.replace(frontMatterRegex, "").replace(directiveRegex, "").replace(anyCommentRegex, "\n");
    for (const [key, { detector }] of Object.entries(detectors)){
        const diagram = detector(text, config2);
        if (diagram) {
            return key;
        }
    }
    throw new UnknownDiagramError(`No diagram type detected matching given configuration for text: ${text}`);
}, "detectType");
var registerLazyLoadedDiagrams = /* @__PURE__ */ __name((...diagrams2)=>{
    for (const { id, detector, loader } of diagrams2){
        addDetector(id, detector, loader);
    }
}, "registerLazyLoadedDiagrams");
var addDetector = /* @__PURE__ */ __name((key, detector, loader)=>{
    if (detectors[key]) {
        log.warn(`Detector with key ${key} already exists. Overwriting.`);
    }
    detectors[key] = {
        detector,
        loader
    };
    log.debug(`Detector with key ${key} added${loader ? " with loader" : ""}`);
}, "addDetector");
var getDiagramLoader = /* @__PURE__ */ __name((key)=>{
    return detectors[key].loader;
}, "getDiagramLoader");
// src/assignWithDepth.ts
var assignWithDepth = /* @__PURE__ */ __name((dst, src, { depth = 2, clobber = false } = {})=>{
    const config2 = {
        depth,
        clobber
    };
    if (Array.isArray(src) && !Array.isArray(dst)) {
        src.forEach((s)=>assignWithDepth(dst, s, config2));
        return dst;
    } else if (Array.isArray(src) && Array.isArray(dst)) {
        src.forEach((s)=>{
            if (!dst.includes(s)) {
                dst.push(s);
            }
        });
        return dst;
    }
    if (dst === void 0 || depth <= 0) {
        if (dst !== void 0 && dst !== null && typeof dst === "object" && typeof src === "object") {
            return Object.assign(dst, src);
        } else {
            return src;
        }
    }
    if (src !== void 0 && typeof dst === "object" && typeof src === "object") {
        Object.keys(src).forEach((key)=>{
            if (typeof src[key] === "object" && (dst[key] === void 0 || typeof dst[key] === "object")) {
                if (dst[key] === void 0) {
                    dst[key] = Array.isArray(src[key]) ? [] : {};
                }
                dst[key] = assignWithDepth(dst[key], src[key], {
                    depth: depth - 1,
                    clobber
                });
            } else if (clobber || typeof dst[key] !== "object" && typeof src[key] !== "object") {
                dst[key] = src[key];
            }
        });
    }
    return dst;
}, "assignWithDepth");
var assignWithDepth_default = assignWithDepth;
;
// src/themes/erDiagram-oldHardcodedValues.ts
var oldAttributeBackgroundColorOdd = "#ffffff";
var oldAttributeBackgroundColorEven = "#f2f2f2";
;
var mkBorder = /* @__PURE__ */ __name((col, darkMode)=>darkMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(col, {
        s: -40,
        l: 10
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(col, {
        s: -40,
        l: -10
    }), "mkBorder");
// src/themes/theme-base.js
var Theme = class {
    static{
        __name(this, "Theme");
    }
    constructor(){
        this.background = "#f4f4f4";
        this.primaryColor = "#fff4dd";
        this.noteBkgColor = "#fff5ad";
        this.noteTextColor = "#333";
        this.THEME_COLOR_LIMIT = 12;
        this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
        this.fontSize = "16px";
    }
    updateColors() {
        this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
        this.secondaryColor = this.secondaryColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -120
        });
        this.tertiaryColor = this.tertiaryColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 180,
            l: 5
        });
        this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode);
        this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode);
        this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode);
        this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode);
        this.noteBkgColor = this.noteBkgColor || "#fff5ad";
        this.noteTextColor = this.noteTextColor || "#333";
        this.secondaryTextColor = this.secondaryTextColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.secondaryColor);
        this.tertiaryTextColor = this.tertiaryTextColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.tertiaryColor);
        this.lineColor = this.lineColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.arrowheadColor = this.arrowheadColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.textColor = this.textColor || this.primaryTextColor;
        this.border2 = this.border2 || this.tertiaryBorderColor;
        this.nodeBkg = this.nodeBkg || this.primaryColor;
        this.mainBkg = this.mainBkg || this.primaryColor;
        this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
        this.clusterBkg = this.clusterBkg || this.tertiaryColor;
        this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
        this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
        this.titleColor = this.titleColor || this.tertiaryTextColor;
        this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.secondaryColor, 30) : this.secondaryColor);
        this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
        this.actorBorder = this.actorBorder || this.primaryBorderColor;
        this.actorBkg = this.actorBkg || this.mainBkg;
        this.actorTextColor = this.actorTextColor || this.primaryTextColor;
        this.actorLineColor = this.actorLineColor || this.actorBorder;
        this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
        this.signalColor = this.signalColor || this.textColor;
        this.signalTextColor = this.signalTextColor || this.textColor;
        this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
        this.labelTextColor = this.labelTextColor || this.actorTextColor;
        this.loopTextColor = this.loopTextColor || this.actorTextColor;
        this.activationBorderColor = this.activationBorderColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.secondaryColor, 10);
        this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
        this.sequenceNumberColor = this.sequenceNumberColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.lineColor);
        this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor;
        this.altSectionBkgColor = this.altSectionBkgColor || "white";
        this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor;
        this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor;
        this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
        this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
        this.taskBkgColor = this.taskBkgColor || this.primaryColor;
        this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor;
        this.activeTaskBkgColor = this.activeTaskBkgColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.primaryColor, 23);
        this.gridColor = this.gridColor || "lightgrey";
        this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
        this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
        this.critBorderColor = this.critBorderColor || "#ff8888";
        this.critBkgColor = this.critBkgColor || "red";
        this.todayLineColor = this.todayLineColor || "red";
        this.taskTextColor = this.taskTextColor || this.textColor;
        this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
        this.taskTextLightColor = this.taskTextLightColor || this.textColor;
        this.taskTextColor = this.taskTextColor || this.primaryTextColor;
        this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
        this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
        this.personBorder = this.personBorder || this.primaryBorderColor;
        this.personBkg = this.personBkg || this.mainBkg;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.transitionLabelColor = this.transitionLabelColor || this.textColor;
        this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
        this.stateBkg = this.stateBkg || this.mainBkg;
        this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
        this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
        this.altBackground = this.altBackground || this.tertiaryColor;
        this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
        this.compositeBorder = this.compositeBorder || this.nodeBorder;
        this.innerEndBackground = this.nodeBorder;
        this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
        this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.specialStateColor = this.lineColor;
        this.cScale0 = this.cScale0 || this.primaryColor;
        this.cScale1 = this.cScale1 || this.secondaryColor;
        this.cScale2 = this.cScale2 || this.tertiaryColor;
        this.cScale3 = this.cScale3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 30
        });
        this.cScale4 = this.cScale4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60
        });
        this.cScale5 = this.cScale5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 90
        });
        this.cScale6 = this.cScale6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120
        });
        this.cScale7 = this.cScale7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 150
        });
        this.cScale8 = this.cScale8 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 210,
            l: 150
        });
        this.cScale9 = this.cScale9 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 270
        });
        this.cScale10 = this.cScale10 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 300
        });
        this.cScale11 = this.cScale11 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 330
        });
        if (this.darkMode) {
            for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
                this["cScale" + i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this["cScale" + i], 75);
            }
        } else {
            for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
                this["cScale" + i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this["cScale" + i], 25);
            }
        }
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScaleInv" + i] = this["cScaleInv" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this["cScale" + i]);
        }
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            if (this.darkMode) {
                this["cScalePeer" + i] = this["cScalePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this["cScale" + i], 10);
            } else {
                this["cScalePeer" + i] = this["cScalePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this["cScale" + i], 10);
            }
        }
        this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
        }
        const multiplier = this.darkMode ? -4 : -1;
        for(let i = 0; i < 5; i++){
            this["surface" + i] = this["surface" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.mainBkg, {
                h: 180,
                s: -15,
                l: multiplier * (5 + i * 3)
            });
            this["surfacePeer" + i] = this["surfacePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.mainBkg, {
                h: 180,
                s: -15,
                l: multiplier * (8 + i * 3)
            });
        }
        this.classText = this.classText || this.textColor;
        this.fillType0 = this.fillType0 || this.primaryColor;
        this.fillType1 = this.fillType1 || this.secondaryColor;
        this.fillType2 = this.fillType2 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 64
        });
        this.fillType3 = this.fillType3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: 64
        });
        this.fillType4 = this.fillType4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -64
        });
        this.fillType5 = this.fillType5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: -64
        });
        this.fillType6 = this.fillType6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 128
        });
        this.fillType7 = this.fillType7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: 128
        });
        this.pie1 = this.pie1 || this.primaryColor;
        this.pie2 = this.pie2 || this.secondaryColor;
        this.pie3 = this.pie3 || this.tertiaryColor;
        this.pie4 = this.pie4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            l: -10
        });
        this.pie5 = this.pie5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            l: -10
        });
        this.pie6 = this.pie6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.tertiaryColor, {
            l: -10
        });
        this.pie7 = this.pie7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60,
            l: -10
        });
        this.pie8 = this.pie8 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -60,
            l: -10
        });
        this.pie9 = this.pie9 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120,
            l: 0
        });
        this.pie10 = this.pie10 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60,
            l: -20
        });
        this.pie11 = this.pie11 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -60,
            l: -20
        });
        this.pie12 = this.pie12 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120,
            l: -10
        });
        this.pieTitleTextSize = this.pieTitleTextSize || "25px";
        this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
        this.pieSectionTextSize = this.pieSectionTextSize || "17px";
        this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
        this.pieLegendTextSize = this.pieLegendTextSize || "17px";
        this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
        this.pieStrokeColor = this.pieStrokeColor || "black";
        this.pieStrokeWidth = this.pieStrokeWidth || "2px";
        this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
        this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
        this.pieOpacity = this.pieOpacity || "0.7";
        this.archEdgeColor = this.archEdgeColor || "#777";
        this.archEdgeArrowColor = this.archEdgeArrowColor || "#777";
        this.archEdgeWidth = this.archEdgeWidth || "3";
        this.archGroupBorderColor = this.archGroupBorderColor || "#000";
        this.archGroupBorderWidth = this.archGroupBorderWidth || "2px";
        this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
        this.quadrant2Fill = this.quadrant2Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        });
        this.quadrant3Fill = this.quadrant3Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        });
        this.quadrant4Fill = this.quadrant4Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        });
        this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
        this.quadrant2TextFill = this.quadrant2TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        });
        this.quadrant3TextFill = this.quadrant3TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        });
        this.quadrant4TextFill = this.quadrant4TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        });
        this.quadrantPointFill = this.quadrantPointFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$is_dark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__isDark$3e$__["isDark"])(this.quadrant1Fill) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.quadrant1Fill) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.quadrant1Fill);
        this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
        this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
        this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
        this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
        this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
        };
        this.requirementBackground = this.requirementBackground || this.primaryColor;
        this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
        this.requirementBorderSize = this.requirementBorderSize || "1";
        this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
        this.relationColor = this.relationColor || this.lineColor;
        this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.secondaryColor, 30) : this.secondaryColor);
        this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
        this.git0 = this.git0 || this.primaryColor;
        this.git1 = this.git1 || this.secondaryColor;
        this.git2 = this.git2 || this.tertiaryColor;
        this.git3 = this.git3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -30
        });
        this.git4 = this.git4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -60
        });
        this.git5 = this.git5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -90
        });
        this.git6 = this.git6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60
        });
        this.git7 = this.git7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120
        });
        if (this.darkMode) {
            this.git0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git0, 25);
            this.git1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git1, 25);
            this.git2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git2, 25);
            this.git3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git3, 25);
            this.git4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git4, 25);
            this.git5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git5, 25);
            this.git6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git6, 25);
            this.git7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git7, 25);
        } else {
            this.git0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git0, 25);
            this.git1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git1, 25);
            this.git2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git2, 25);
            this.git3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git3, 25);
            this.git4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git4, 25);
            this.git5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git5, 25);
            this.git6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git6, 25);
            this.git7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git7, 25);
        }
        this.gitInv0 = this.gitInv0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git0);
        this.gitInv1 = this.gitInv1 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git1);
        this.gitInv2 = this.gitInv2 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git2);
        this.gitInv3 = this.gitInv3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git3);
        this.gitInv4 = this.gitInv4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git4);
        this.gitInv5 = this.gitInv5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git5);
        this.gitInv6 = this.gitInv6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git6);
        this.gitInv7 = this.gitInv7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git7);
        this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
        this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
        this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
        this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
        this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
        this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
        this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
        this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
        this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
        this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
        this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
        this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
        this.tagLabelFontSize = this.tagLabelFontSize || "10px";
        this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
        this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
        this.commitLabelFontSize = this.commitLabelFontSize || "10px";
        this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
        this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
    }
    calculate(overrides) {
        if (typeof overrides !== "object") {
            this.updateColors();
            return;
        }
        const keys = Object.keys(overrides);
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
        this.updateColors();
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
    }
};
var getThemeVariables = /* @__PURE__ */ __name((userOverrides)=>{
    const theme = new Theme();
    theme.calculate(userOverrides);
    return theme;
}, "getThemeVariables");
;
var Theme2 = class {
    static{
        __name(this, "Theme");
    }
    constructor(){
        this.background = "#333";
        this.primaryColor = "#1f2020";
        this.secondaryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.primaryColor, 16);
        this.tertiaryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -160
        });
        this.primaryBorderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
        this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
        this.primaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.primaryColor);
        this.secondaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.secondaryColor);
        this.tertiaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.tertiaryColor);
        this.lineColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.textColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.mainBkg = "#1f2020";
        this.secondBkg = "calculated";
        this.mainContrastColor = "lightgrey";
        this.darkTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])("#323D47"), 10);
        this.lineColor = "calculated";
        this.border1 = "#ccc";
        this.border2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$rgba$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__rgba$3e$__["rgba"])(255, 255, 255, 0.25);
        this.arrowheadColor = "calculated";
        this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
        this.fontSize = "16px";
        this.labelBackground = "#181818";
        this.textColor = "#ccc";
        this.THEME_COLOR_LIMIT = 12;
        this.nodeBkg = "calculated";
        this.nodeBorder = "calculated";
        this.clusterBkg = "calculated";
        this.clusterBorder = "calculated";
        this.defaultLinkColor = "calculated";
        this.titleColor = "#F9FFFE";
        this.edgeLabelBackground = "calculated";
        this.actorBorder = "calculated";
        this.actorBkg = "calculated";
        this.actorTextColor = "calculated";
        this.actorLineColor = "calculated";
        this.signalColor = "calculated";
        this.signalTextColor = "calculated";
        this.labelBoxBkgColor = "calculated";
        this.labelBoxBorderColor = "calculated";
        this.labelTextColor = "calculated";
        this.loopTextColor = "calculated";
        this.noteBorderColor = "calculated";
        this.noteBkgColor = "#fff5ad";
        this.noteTextColor = "calculated";
        this.activationBorderColor = "calculated";
        this.activationBkgColor = "calculated";
        this.sequenceNumberColor = "black";
        this.sectionBkgColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])("#EAE8D9", 30);
        this.altSectionBkgColor = "calculated";
        this.sectionBkgColor2 = "#EAE8D9";
        this.excludeBkgColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.sectionBkgColor, 10);
        this.taskBorderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$rgba$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__rgba$3e$__["rgba"])(255, 255, 255, 70);
        this.taskBkgColor = "calculated";
        this.taskTextColor = "calculated";
        this.taskTextLightColor = "calculated";
        this.taskTextOutsideColor = "calculated";
        this.taskTextClickableColor = "#003163";
        this.activeTaskBorderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$rgba$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__rgba$3e$__["rgba"])(255, 255, 255, 50);
        this.activeTaskBkgColor = "#81B1DB";
        this.gridColor = "calculated";
        this.doneTaskBkgColor = "calculated";
        this.doneTaskBorderColor = "grey";
        this.critBorderColor = "#E83737";
        this.critBkgColor = "#E83737";
        this.taskTextDarkColor = "calculated";
        this.todayLineColor = "#DB5757";
        this.personBorder = this.primaryBorderColor;
        this.personBkg = this.mainBkg;
        this.archEdgeColor = "calculated";
        this.archEdgeArrowColor = "calculated";
        this.archEdgeWidth = "3";
        this.archGroupBorderColor = this.primaryBorderColor;
        this.archGroupBorderWidth = "2px";
        this.labelColor = "calculated";
        this.errorBkgColor = "#a44141";
        this.errorTextColor = "#ddd";
    }
    updateColors() {
        this.secondBkg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.mainBkg, 16);
        this.lineColor = this.mainContrastColor;
        this.arrowheadColor = this.mainContrastColor;
        this.nodeBkg = this.mainBkg;
        this.nodeBorder = this.border1;
        this.clusterBkg = this.secondBkg;
        this.clusterBorder = this.border2;
        this.defaultLinkColor = this.lineColor;
        this.edgeLabelBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.labelBackground, 25);
        this.actorBorder = this.border1;
        this.actorBkg = this.mainBkg;
        this.actorTextColor = this.mainContrastColor;
        this.actorLineColor = this.actorBorder;
        this.signalColor = this.mainContrastColor;
        this.signalTextColor = this.mainContrastColor;
        this.labelBoxBkgColor = this.actorBkg;
        this.labelBoxBorderColor = this.actorBorder;
        this.labelTextColor = this.mainContrastColor;
        this.loopTextColor = this.mainContrastColor;
        this.noteBorderColor = this.secondaryBorderColor;
        this.noteBkgColor = this.secondBkg;
        this.noteTextColor = this.secondaryTextColor;
        this.activationBorderColor = this.border1;
        this.activationBkgColor = this.secondBkg;
        this.altSectionBkgColor = this.background;
        this.taskBkgColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.mainBkg, 23);
        this.taskTextColor = this.darkTextColor;
        this.taskTextLightColor = this.mainContrastColor;
        this.taskTextOutsideColor = this.taskTextLightColor;
        this.gridColor = this.mainContrastColor;
        this.doneTaskBkgColor = this.mainContrastColor;
        this.taskTextDarkColor = this.darkTextColor;
        this.archEdgeColor = this.lineColor;
        this.archEdgeArrowColor = this.lineColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.transitionLabelColor = this.transitionLabelColor || this.textColor;
        this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
        this.stateBkg = this.stateBkg || this.mainBkg;
        this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
        this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
        this.altBackground = this.altBackground || "#555";
        this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
        this.compositeBorder = this.compositeBorder || this.nodeBorder;
        this.innerEndBackground = this.primaryBorderColor;
        this.specialStateColor = "#f4f4f4";
        this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
        this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
        this.fillType0 = this.primaryColor;
        this.fillType1 = this.secondaryColor;
        this.fillType2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 64
        });
        this.fillType3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: 64
        });
        this.fillType4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -64
        });
        this.fillType5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: -64
        });
        this.fillType6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 128
        });
        this.fillType7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: 128
        });
        this.cScale1 = this.cScale1 || "#0b0000";
        this.cScale2 = this.cScale2 || "#4d1037";
        this.cScale3 = this.cScale3 || "#3f5258";
        this.cScale4 = this.cScale4 || "#4f2f1b";
        this.cScale5 = this.cScale5 || "#6e0a0a";
        this.cScale6 = this.cScale6 || "#3b0048";
        this.cScale7 = this.cScale7 || "#995a01";
        this.cScale8 = this.cScale8 || "#154706";
        this.cScale9 = this.cScale9 || "#161722";
        this.cScale10 = this.cScale10 || "#00296f";
        this.cScale11 = this.cScale11 || "#01629c";
        this.cScale12 = this.cScale12 || "#010029";
        this.cScale0 = this.cScale0 || this.primaryColor;
        this.cScale1 = this.cScale1 || this.secondaryColor;
        this.cScale2 = this.cScale2 || this.tertiaryColor;
        this.cScale3 = this.cScale3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 30
        });
        this.cScale4 = this.cScale4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60
        });
        this.cScale5 = this.cScale5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 90
        });
        this.cScale6 = this.cScale6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120
        });
        this.cScale7 = this.cScale7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 150
        });
        this.cScale8 = this.cScale8 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 210
        });
        this.cScale9 = this.cScale9 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 270
        });
        this.cScale10 = this.cScale10 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 300
        });
        this.cScale11 = this.cScale11 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 330
        });
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScaleInv" + i] = this["cScaleInv" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this["cScale" + i]);
        }
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScalePeer" + i] = this["cScalePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this["cScale" + i], 10);
        }
        for(let i = 0; i < 5; i++){
            this["surface" + i] = this["surface" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.mainBkg, {
                h: 30,
                s: -30,
                l: -(-10 + i * 4)
            });
            this["surfacePeer" + i] = this["surfacePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.mainBkg, {
                h: 30,
                s: -30,
                l: -(-7 + i * 4)
            });
        }
        this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
        }
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["pie" + i] = this["cScale" + i];
        }
        this.pieTitleTextSize = this.pieTitleTextSize || "25px";
        this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
        this.pieSectionTextSize = this.pieSectionTextSize || "17px";
        this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
        this.pieLegendTextSize = this.pieLegendTextSize || "17px";
        this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
        this.pieStrokeColor = this.pieStrokeColor || "black";
        this.pieStrokeWidth = this.pieStrokeWidth || "2px";
        this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
        this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
        this.pieOpacity = this.pieOpacity || "0.7";
        this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
        this.quadrant2Fill = this.quadrant2Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        });
        this.quadrant3Fill = this.quadrant3Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        });
        this.quadrant4Fill = this.quadrant4Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        });
        this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
        this.quadrant2TextFill = this.quadrant2TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        });
        this.quadrant3TextFill = this.quadrant3TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        });
        this.quadrant4TextFill = this.quadrant4TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        });
        this.quadrantPointFill = this.quadrantPointFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$is_dark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__isDark$3e$__["isDark"])(this.quadrant1Fill) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.quadrant1Fill) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.quadrant1Fill);
        this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
        this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
        this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
        this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
        this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
        };
        this.packet = {
            startByteColor: this.primaryTextColor,
            endByteColor: this.primaryTextColor,
            labelColor: this.primaryTextColor,
            titleColor: this.primaryTextColor,
            blockStrokeColor: this.primaryTextColor,
            blockFillColor: this.background
        };
        this.classText = this.primaryTextColor;
        this.requirementBackground = this.requirementBackground || this.primaryColor;
        this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
        this.requirementBorderSize = this.requirementBorderSize || "1";
        this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
        this.relationColor = this.relationColor || this.lineColor;
        this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.secondaryColor, 30) : this.secondaryColor);
        this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
        this.git0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.secondaryColor, 20);
        this.git1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.pie2 || this.secondaryColor, 20);
        this.git2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.pie3 || this.tertiaryColor, 20);
        this.git3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.pie4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -30
        }), 20);
        this.git4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.pie5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -60
        }), 20);
        this.git5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.pie6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -90
        }), 10);
        this.git6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.pie7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60
        }), 10);
        this.git7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.pie8 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120
        }), 20);
        this.gitInv0 = this.gitInv0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git0);
        this.gitInv1 = this.gitInv1 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git1);
        this.gitInv2 = this.gitInv2 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git2);
        this.gitInv3 = this.gitInv3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git3);
        this.gitInv4 = this.gitInv4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git4);
        this.gitInv5 = this.gitInv5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git5);
        this.gitInv6 = this.gitInv6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git6);
        this.gitInv7 = this.gitInv7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git7);
        this.gitBranchLabel0 = this.gitBranchLabel0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.labelTextColor);
        this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
        this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
        this.gitBranchLabel3 = this.gitBranchLabel3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.labelTextColor);
        this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
        this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
        this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
        this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
        this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
        this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
        this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
        this.tagLabelFontSize = this.tagLabelFontSize || "10px";
        this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
        this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
        this.commitLabelFontSize = this.commitLabelFontSize || "10px";
        this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.background, 12);
        this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.background, 2);
        this.nodeBorder = this.nodeBorder || "#999";
    }
    calculate(overrides) {
        if (typeof overrides !== "object") {
            this.updateColors();
            return;
        }
        const keys = Object.keys(overrides);
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
        this.updateColors();
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
    }
};
var getThemeVariables2 = /* @__PURE__ */ __name((userOverrides)=>{
    const theme = new Theme2();
    theme.calculate(userOverrides);
    return theme;
}, "getThemeVariables");
;
var Theme3 = class {
    static{
        __name(this, "Theme");
    }
    constructor(){
        this.background = "#f4f4f4";
        this.primaryColor = "#ECECFF";
        this.secondaryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120
        });
        this.secondaryColor = "#ffffde";
        this.tertiaryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -160
        });
        this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
        this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
        this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
        this.primaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.primaryColor);
        this.secondaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.secondaryColor);
        this.tertiaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.tertiaryColor);
        this.lineColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.textColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.background = "white";
        this.mainBkg = "#ECECFF";
        this.secondBkg = "#ffffde";
        this.lineColor = "#333333";
        this.border1 = "#9370DB";
        this.border2 = "#aaaa33";
        this.arrowheadColor = "#333333";
        this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
        this.fontSize = "16px";
        this.labelBackground = "rgba(232,232,232, 0.8)";
        this.textColor = "#333";
        this.THEME_COLOR_LIMIT = 12;
        this.nodeBkg = "calculated";
        this.nodeBorder = "calculated";
        this.clusterBkg = "calculated";
        this.clusterBorder = "calculated";
        this.defaultLinkColor = "calculated";
        this.titleColor = "calculated";
        this.edgeLabelBackground = "calculated";
        this.actorBorder = "calculated";
        this.actorBkg = "calculated";
        this.actorTextColor = "black";
        this.actorLineColor = "calculated";
        this.signalColor = "calculated";
        this.signalTextColor = "calculated";
        this.labelBoxBkgColor = "calculated";
        this.labelBoxBorderColor = "calculated";
        this.labelTextColor = "calculated";
        this.loopTextColor = "calculated";
        this.noteBorderColor = "calculated";
        this.noteBkgColor = "#fff5ad";
        this.noteTextColor = "calculated";
        this.activationBorderColor = "#666";
        this.activationBkgColor = "#f4f4f4";
        this.sequenceNumberColor = "white";
        this.sectionBkgColor = "calculated";
        this.altSectionBkgColor = "calculated";
        this.sectionBkgColor2 = "calculated";
        this.excludeBkgColor = "#eeeeee";
        this.taskBorderColor = "calculated";
        this.taskBkgColor = "calculated";
        this.taskTextLightColor = "calculated";
        this.taskTextColor = this.taskTextLightColor;
        this.taskTextDarkColor = "calculated";
        this.taskTextOutsideColor = this.taskTextDarkColor;
        this.taskTextClickableColor = "calculated";
        this.activeTaskBorderColor = "calculated";
        this.activeTaskBkgColor = "calculated";
        this.gridColor = "calculated";
        this.doneTaskBkgColor = "calculated";
        this.doneTaskBorderColor = "calculated";
        this.critBorderColor = "calculated";
        this.critBkgColor = "calculated";
        this.todayLineColor = "calculated";
        this.sectionBkgColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$rgba$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__rgba$3e$__["rgba"])(102, 102, 255, 0.49);
        this.altSectionBkgColor = "white";
        this.sectionBkgColor2 = "#fff400";
        this.taskBorderColor = "#534fbc";
        this.taskBkgColor = "#8a90dd";
        this.taskTextLightColor = "white";
        this.taskTextColor = "calculated";
        this.taskTextDarkColor = "black";
        this.taskTextOutsideColor = "calculated";
        this.taskTextClickableColor = "#003163";
        this.activeTaskBorderColor = "#534fbc";
        this.activeTaskBkgColor = "#bfc7ff";
        this.gridColor = "lightgrey";
        this.doneTaskBkgColor = "lightgrey";
        this.doneTaskBorderColor = "grey";
        this.critBorderColor = "#ff8888";
        this.critBkgColor = "red";
        this.todayLineColor = "red";
        this.personBorder = this.primaryBorderColor;
        this.personBkg = this.mainBkg;
        this.archEdgeColor = "calculated";
        this.archEdgeArrowColor = "calculated";
        this.archEdgeWidth = "3";
        this.archGroupBorderColor = this.primaryBorderColor;
        this.archGroupBorderWidth = "2px";
        this.labelColor = "black";
        this.errorBkgColor = "#552222";
        this.errorTextColor = "#552222";
        this.updateColors();
    }
    updateColors() {
        this.cScale0 = this.cScale0 || this.primaryColor;
        this.cScale1 = this.cScale1 || this.secondaryColor;
        this.cScale2 = this.cScale2 || this.tertiaryColor;
        this.cScale3 = this.cScale3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 30
        });
        this.cScale4 = this.cScale4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60
        });
        this.cScale5 = this.cScale5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 90
        });
        this.cScale6 = this.cScale6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120
        });
        this.cScale7 = this.cScale7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 150
        });
        this.cScale8 = this.cScale8 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 210
        });
        this.cScale9 = this.cScale9 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 270
        });
        this.cScale10 = this.cScale10 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 300
        });
        this.cScale11 = this.cScale11 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 330
        });
        this["cScalePeer1"] = this["cScalePeer1"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.secondaryColor, 45);
        this["cScalePeer2"] = this["cScalePeer2"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.tertiaryColor, 40);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScale" + i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this["cScale" + i], 10);
            this["cScalePeer" + i] = this["cScalePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this["cScale" + i], 25);
        }
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScaleInv" + i] = this["cScaleInv" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this["cScale" + i], {
                h: 180
            });
        }
        for(let i = 0; i < 5; i++){
            this["surface" + i] = this["surface" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.mainBkg, {
                h: 30,
                l: -(5 + i * 5)
            });
            this["surfacePeer" + i] = this["surfacePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.mainBkg, {
                h: 30,
                l: -(7 + i * 5)
            });
        }
        this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
        if (this.labelTextColor !== "calculated") {
            this.cScaleLabel0 = this.cScaleLabel0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.labelTextColor);
            this.cScaleLabel3 = this.cScaleLabel3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.labelTextColor);
            for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
                this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.labelTextColor;
            }
        }
        this.nodeBkg = this.mainBkg;
        this.nodeBorder = this.border1;
        this.clusterBkg = this.secondBkg;
        this.clusterBorder = this.border2;
        this.defaultLinkColor = this.lineColor;
        this.titleColor = this.textColor;
        this.edgeLabelBackground = this.labelBackground;
        this.actorBorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.border1, 23);
        this.actorBkg = this.mainBkg;
        this.labelBoxBkgColor = this.actorBkg;
        this.signalColor = this.textColor;
        this.signalTextColor = this.textColor;
        this.labelBoxBorderColor = this.actorBorder;
        this.labelTextColor = this.actorTextColor;
        this.loopTextColor = this.actorTextColor;
        this.noteBorderColor = this.border2;
        this.noteTextColor = this.actorTextColor;
        this.actorLineColor = this.actorBorder;
        this.taskTextColor = this.taskTextLightColor;
        this.taskTextOutsideColor = this.taskTextDarkColor;
        this.archEdgeColor = this.lineColor;
        this.archEdgeArrowColor = this.lineColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.transitionLabelColor = this.transitionLabelColor || this.textColor;
        this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
        this.stateBkg = this.stateBkg || this.mainBkg;
        this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
        this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
        this.altBackground = this.altBackground || "#f0f0f0";
        this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
        this.compositeBorder = this.compositeBorder || this.nodeBorder;
        this.innerEndBackground = this.nodeBorder;
        this.specialStateColor = this.lineColor;
        this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
        this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.classText = this.primaryTextColor;
        this.fillType0 = this.primaryColor;
        this.fillType1 = this.secondaryColor;
        this.fillType2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 64
        });
        this.fillType3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: 64
        });
        this.fillType4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -64
        });
        this.fillType5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: -64
        });
        this.fillType6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 128
        });
        this.fillType7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: 128
        });
        this.pie1 = this.pie1 || this.primaryColor;
        this.pie2 = this.pie2 || this.secondaryColor;
        this.pie3 = this.pie3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.tertiaryColor, {
            l: -40
        });
        this.pie4 = this.pie4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            l: -10
        });
        this.pie5 = this.pie5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            l: -30
        });
        this.pie6 = this.pie6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.tertiaryColor, {
            l: -20
        });
        this.pie7 = this.pie7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60,
            l: -20
        });
        this.pie8 = this.pie8 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -60,
            l: -40
        });
        this.pie9 = this.pie9 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120,
            l: -40
        });
        this.pie10 = this.pie10 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60,
            l: -40
        });
        this.pie11 = this.pie11 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -90,
            l: -40
        });
        this.pie12 = this.pie12 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120,
            l: -30
        });
        this.pieTitleTextSize = this.pieTitleTextSize || "25px";
        this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
        this.pieSectionTextSize = this.pieSectionTextSize || "17px";
        this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
        this.pieLegendTextSize = this.pieLegendTextSize || "17px";
        this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
        this.pieStrokeColor = this.pieStrokeColor || "black";
        this.pieStrokeWidth = this.pieStrokeWidth || "2px";
        this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
        this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
        this.pieOpacity = this.pieOpacity || "0.7";
        this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
        this.quadrant2Fill = this.quadrant2Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        });
        this.quadrant3Fill = this.quadrant3Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        });
        this.quadrant4Fill = this.quadrant4Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        });
        this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
        this.quadrant2TextFill = this.quadrant2TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        });
        this.quadrant3TextFill = this.quadrant3TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        });
        this.quadrant4TextFill = this.quadrant4TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        });
        this.quadrantPointFill = this.quadrantPointFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$is_dark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__isDark$3e$__["isDark"])(this.quadrant1Fill) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.quadrant1Fill) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.quadrant1Fill);
        this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
        this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
        this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
        this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
        this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
        };
        this.requirementBackground = this.requirementBackground || this.primaryColor;
        this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
        this.requirementBorderSize = this.requirementBorderSize || "1";
        this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
        this.relationColor = this.relationColor || this.lineColor;
        this.relationLabelBackground = this.relationLabelBackground || this.labelBackground;
        this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
        this.git0 = this.git0 || this.primaryColor;
        this.git1 = this.git1 || this.secondaryColor;
        this.git2 = this.git2 || this.tertiaryColor;
        this.git3 = this.git3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -30
        });
        this.git4 = this.git4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -60
        });
        this.git5 = this.git5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -90
        });
        this.git6 = this.git6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60
        });
        this.git7 = this.git7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120
        });
        if (this.darkMode) {
            this.git0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git0, 25);
            this.git1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git1, 25);
            this.git2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git2, 25);
            this.git3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git3, 25);
            this.git4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git4, 25);
            this.git5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git5, 25);
            this.git6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git6, 25);
            this.git7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git7, 25);
        } else {
            this.git0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git0, 25);
            this.git1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git1, 25);
            this.git2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git2, 25);
            this.git3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git3, 25);
            this.git4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git4, 25);
            this.git5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git5, 25);
            this.git6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git6, 25);
            this.git7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git7, 25);
        }
        this.gitInv0 = this.gitInv0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git0), 25);
        this.gitInv1 = this.gitInv1 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git1);
        this.gitInv2 = this.gitInv2 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git2);
        this.gitInv3 = this.gitInv3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git3);
        this.gitInv4 = this.gitInv4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git4);
        this.gitInv5 = this.gitInv5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git5);
        this.gitInv6 = this.gitInv6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git6);
        this.gitInv7 = this.gitInv7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git7);
        this.gitBranchLabel0 = this.gitBranchLabel0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.labelTextColor);
        this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
        this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
        this.gitBranchLabel3 = this.gitBranchLabel3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.labelTextColor);
        this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
        this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
        this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
        this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
        this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
        this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
        this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
        this.tagLabelFontSize = this.tagLabelFontSize || "10px";
        this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
        this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
        this.commitLabelFontSize = this.commitLabelFontSize || "10px";
        this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
        this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
    }
    calculate(overrides) {
        if (typeof overrides !== "object") {
            this.updateColors();
            return;
        }
        const keys = Object.keys(overrides);
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
        this.updateColors();
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
    }
};
var getThemeVariables3 = /* @__PURE__ */ __name((userOverrides)=>{
    const theme = new Theme3();
    theme.calculate(userOverrides);
    return theme;
}, "getThemeVariables");
;
var Theme4 = class {
    static{
        __name(this, "Theme");
    }
    constructor(){
        this.background = "#f4f4f4";
        this.primaryColor = "#cde498";
        this.secondaryColor = "#cdffb2";
        this.background = "white";
        this.mainBkg = "#cde498";
        this.secondBkg = "#cdffb2";
        this.lineColor = "green";
        this.border1 = "#13540c";
        this.border2 = "#6eaa49";
        this.arrowheadColor = "green";
        this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
        this.fontSize = "16px";
        this.tertiaryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])("#cde498", 10);
        this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
        this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
        this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
        this.primaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.primaryColor);
        this.secondaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.secondaryColor);
        this.tertiaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.primaryColor);
        this.lineColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.textColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.THEME_COLOR_LIMIT = 12;
        this.nodeBkg = "calculated";
        this.nodeBorder = "calculated";
        this.clusterBkg = "calculated";
        this.clusterBorder = "calculated";
        this.defaultLinkColor = "calculated";
        this.titleColor = "#333";
        this.edgeLabelBackground = "#e8e8e8";
        this.actorBorder = "calculated";
        this.actorBkg = "calculated";
        this.actorTextColor = "black";
        this.actorLineColor = "calculated";
        this.signalColor = "#333";
        this.signalTextColor = "#333";
        this.labelBoxBkgColor = "calculated";
        this.labelBoxBorderColor = "#326932";
        this.labelTextColor = "calculated";
        this.loopTextColor = "calculated";
        this.noteBorderColor = "calculated";
        this.noteBkgColor = "#fff5ad";
        this.noteTextColor = "calculated";
        this.activationBorderColor = "#666";
        this.activationBkgColor = "#f4f4f4";
        this.sequenceNumberColor = "white";
        this.sectionBkgColor = "#6eaa49";
        this.altSectionBkgColor = "white";
        this.sectionBkgColor2 = "#6eaa49";
        this.excludeBkgColor = "#eeeeee";
        this.taskBorderColor = "calculated";
        this.taskBkgColor = "#487e3a";
        this.taskTextLightColor = "white";
        this.taskTextColor = "calculated";
        this.taskTextDarkColor = "black";
        this.taskTextOutsideColor = "calculated";
        this.taskTextClickableColor = "#003163";
        this.activeTaskBorderColor = "calculated";
        this.activeTaskBkgColor = "calculated";
        this.gridColor = "lightgrey";
        this.doneTaskBkgColor = "lightgrey";
        this.doneTaskBorderColor = "grey";
        this.critBorderColor = "#ff8888";
        this.critBkgColor = "red";
        this.todayLineColor = "red";
        this.personBorder = this.primaryBorderColor;
        this.personBkg = this.mainBkg;
        this.archEdgeColor = "calculated";
        this.archEdgeArrowColor = "calculated";
        this.archEdgeWidth = "3";
        this.archGroupBorderColor = this.primaryBorderColor;
        this.archGroupBorderWidth = "2px";
        this.labelColor = "black";
        this.errorBkgColor = "#552222";
        this.errorTextColor = "#552222";
    }
    updateColors() {
        this.actorBorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.mainBkg, 20);
        this.actorBkg = this.mainBkg;
        this.labelBoxBkgColor = this.actorBkg;
        this.labelTextColor = this.actorTextColor;
        this.loopTextColor = this.actorTextColor;
        this.noteBorderColor = this.border2;
        this.noteTextColor = this.actorTextColor;
        this.actorLineColor = this.actorBorder;
        this.cScale0 = this.cScale0 || this.primaryColor;
        this.cScale1 = this.cScale1 || this.secondaryColor;
        this.cScale2 = this.cScale2 || this.tertiaryColor;
        this.cScale3 = this.cScale3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 30
        });
        this.cScale4 = this.cScale4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60
        });
        this.cScale5 = this.cScale5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 90
        });
        this.cScale6 = this.cScale6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120
        });
        this.cScale7 = this.cScale7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 150
        });
        this.cScale8 = this.cScale8 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 210
        });
        this.cScale9 = this.cScale9 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 270
        });
        this.cScale10 = this.cScale10 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 300
        });
        this.cScale11 = this.cScale11 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 330
        });
        this["cScalePeer1"] = this["cScalePeer1"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.secondaryColor, 45);
        this["cScalePeer2"] = this["cScalePeer2"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.tertiaryColor, 40);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScale" + i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this["cScale" + i], 10);
            this["cScalePeer" + i] = this["cScalePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this["cScale" + i], 25);
        }
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScaleInv" + i] = this["cScaleInv" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this["cScale" + i], {
                h: 180
            });
        }
        this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
        }
        for(let i = 0; i < 5; i++){
            this["surface" + i] = this["surface" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.mainBkg, {
                h: 30,
                s: -30,
                l: -(5 + i * 5)
            });
            this["surfacePeer" + i] = this["surfacePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.mainBkg, {
                h: 30,
                s: -30,
                l: -(8 + i * 5)
            });
        }
        this.nodeBkg = this.mainBkg;
        this.nodeBorder = this.border1;
        this.clusterBkg = this.secondBkg;
        this.clusterBorder = this.border2;
        this.defaultLinkColor = this.lineColor;
        this.taskBorderColor = this.border1;
        this.taskTextColor = this.taskTextLightColor;
        this.taskTextOutsideColor = this.taskTextDarkColor;
        this.activeTaskBorderColor = this.taskBorderColor;
        this.activeTaskBkgColor = this.mainBkg;
        this.archEdgeColor = this.lineColor;
        this.archEdgeArrowColor = this.lineColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.transitionLabelColor = this.transitionLabelColor || this.textColor;
        this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
        this.stateBkg = this.stateBkg || this.mainBkg;
        this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
        this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
        this.altBackground = this.altBackground || "#f0f0f0";
        this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
        this.compositeBorder = this.compositeBorder || this.nodeBorder;
        this.innerEndBackground = this.primaryBorderColor;
        this.specialStateColor = this.lineColor;
        this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
        this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.classText = this.primaryTextColor;
        this.fillType0 = this.primaryColor;
        this.fillType1 = this.secondaryColor;
        this.fillType2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 64
        });
        this.fillType3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: 64
        });
        this.fillType4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -64
        });
        this.fillType5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: -64
        });
        this.fillType6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 128
        });
        this.fillType7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: 128
        });
        this.pie1 = this.pie1 || this.primaryColor;
        this.pie2 = this.pie2 || this.secondaryColor;
        this.pie3 = this.pie3 || this.tertiaryColor;
        this.pie4 = this.pie4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            l: -30
        });
        this.pie5 = this.pie5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            l: -30
        });
        this.pie6 = this.pie6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.tertiaryColor, {
            h: 40,
            l: -40
        });
        this.pie7 = this.pie7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60,
            l: -10
        });
        this.pie8 = this.pie8 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -60,
            l: -10
        });
        this.pie9 = this.pie9 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120,
            l: 0
        });
        this.pie10 = this.pie10 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60,
            l: -50
        });
        this.pie11 = this.pie11 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -60,
            l: -50
        });
        this.pie12 = this.pie12 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120,
            l: -50
        });
        this.pieTitleTextSize = this.pieTitleTextSize || "25px";
        this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
        this.pieSectionTextSize = this.pieSectionTextSize || "17px";
        this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
        this.pieLegendTextSize = this.pieLegendTextSize || "17px";
        this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
        this.pieStrokeColor = this.pieStrokeColor || "black";
        this.pieStrokeWidth = this.pieStrokeWidth || "2px";
        this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
        this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
        this.pieOpacity = this.pieOpacity || "0.7";
        this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
        this.quadrant2Fill = this.quadrant2Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        });
        this.quadrant3Fill = this.quadrant3Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        });
        this.quadrant4Fill = this.quadrant4Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        });
        this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
        this.quadrant2TextFill = this.quadrant2TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        });
        this.quadrant3TextFill = this.quadrant3TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        });
        this.quadrant4TextFill = this.quadrant4TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        });
        this.quadrantPointFill = this.quadrantPointFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$is_dark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__isDark$3e$__["isDark"])(this.quadrant1Fill) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.quadrant1Fill) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.quadrant1Fill);
        this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
        this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
        this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
        this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
        this.packet = {
            startByteColor: this.primaryTextColor,
            endByteColor: this.primaryTextColor,
            labelColor: this.primaryTextColor,
            titleColor: this.primaryTextColor,
            blockStrokeColor: this.primaryTextColor,
            blockFillColor: this.mainBkg
        };
        this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
        };
        this.requirementBackground = this.requirementBackground || this.primaryColor;
        this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
        this.requirementBorderSize = this.requirementBorderSize || "1";
        this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
        this.relationColor = this.relationColor || this.lineColor;
        this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
        this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
        this.git0 = this.git0 || this.primaryColor;
        this.git1 = this.git1 || this.secondaryColor;
        this.git2 = this.git2 || this.tertiaryColor;
        this.git3 = this.git3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -30
        });
        this.git4 = this.git4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -60
        });
        this.git5 = this.git5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -90
        });
        this.git6 = this.git6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60
        });
        this.git7 = this.git7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120
        });
        if (this.darkMode) {
            this.git0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git0, 25);
            this.git1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git1, 25);
            this.git2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git2, 25);
            this.git3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git3, 25);
            this.git4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git4, 25);
            this.git5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git5, 25);
            this.git6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git6, 25);
            this.git7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.git7, 25);
        } else {
            this.git0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git0, 25);
            this.git1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git1, 25);
            this.git2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git2, 25);
            this.git3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git3, 25);
            this.git4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git4, 25);
            this.git5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git5, 25);
            this.git6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git6, 25);
            this.git7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.git7, 25);
        }
        this.gitInv0 = this.gitInv0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git0);
        this.gitInv1 = this.gitInv1 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git1);
        this.gitInv2 = this.gitInv2 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git2);
        this.gitInv3 = this.gitInv3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git3);
        this.gitInv4 = this.gitInv4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git4);
        this.gitInv5 = this.gitInv5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git5);
        this.gitInv6 = this.gitInv6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git6);
        this.gitInv7 = this.gitInv7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git7);
        this.gitBranchLabel0 = this.gitBranchLabel0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.labelTextColor);
        this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
        this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
        this.gitBranchLabel3 = this.gitBranchLabel3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.labelTextColor);
        this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
        this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
        this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
        this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
        this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
        this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
        this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
        this.tagLabelFontSize = this.tagLabelFontSize || "10px";
        this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
        this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
        this.commitLabelFontSize = this.commitLabelFontSize || "10px";
        this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
        this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
    }
    calculate(overrides) {
        if (typeof overrides !== "object") {
            this.updateColors();
            return;
        }
        const keys = Object.keys(overrides);
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
        this.updateColors();
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
    }
};
var getThemeVariables4 = /* @__PURE__ */ __name((userOverrides)=>{
    const theme = new Theme4();
    theme.calculate(userOverrides);
    return theme;
}, "getThemeVariables");
;
var Theme5 = class {
    static{
        __name(this, "Theme");
    }
    constructor(){
        this.primaryColor = "#eee";
        this.contrast = "#707070";
        this.secondaryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.contrast, 55);
        this.background = "#ffffff";
        this.tertiaryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -160
        });
        this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
        this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
        this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
        this.primaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.primaryColor);
        this.secondaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.secondaryColor);
        this.tertiaryTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.tertiaryColor);
        this.lineColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.textColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.background);
        this.mainBkg = "#eee";
        this.secondBkg = "calculated";
        this.lineColor = "#666";
        this.border1 = "#999";
        this.border2 = "calculated";
        this.note = "#ffa";
        this.text = "#333";
        this.critical = "#d42";
        this.done = "#bbb";
        this.arrowheadColor = "#333333";
        this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
        this.fontSize = "16px";
        this.THEME_COLOR_LIMIT = 12;
        this.nodeBkg = "calculated";
        this.nodeBorder = "calculated";
        this.clusterBkg = "calculated";
        this.clusterBorder = "calculated";
        this.defaultLinkColor = "calculated";
        this.titleColor = "calculated";
        this.edgeLabelBackground = "white";
        this.actorBorder = "calculated";
        this.actorBkg = "calculated";
        this.actorTextColor = "calculated";
        this.actorLineColor = this.actorBorder;
        this.signalColor = "calculated";
        this.signalTextColor = "calculated";
        this.labelBoxBkgColor = "calculated";
        this.labelBoxBorderColor = "calculated";
        this.labelTextColor = "calculated";
        this.loopTextColor = "calculated";
        this.noteBorderColor = "calculated";
        this.noteBkgColor = "calculated";
        this.noteTextColor = "calculated";
        this.activationBorderColor = "#666";
        this.activationBkgColor = "#f4f4f4";
        this.sequenceNumberColor = "white";
        this.sectionBkgColor = "calculated";
        this.altSectionBkgColor = "white";
        this.sectionBkgColor2 = "calculated";
        this.excludeBkgColor = "#eeeeee";
        this.taskBorderColor = "calculated";
        this.taskBkgColor = "calculated";
        this.taskTextLightColor = "white";
        this.taskTextColor = "calculated";
        this.taskTextDarkColor = "calculated";
        this.taskTextOutsideColor = "calculated";
        this.taskTextClickableColor = "#003163";
        this.activeTaskBorderColor = "calculated";
        this.activeTaskBkgColor = "calculated";
        this.gridColor = "calculated";
        this.doneTaskBkgColor = "calculated";
        this.doneTaskBorderColor = "calculated";
        this.critBkgColor = "calculated";
        this.critBorderColor = "calculated";
        this.todayLineColor = "calculated";
        this.personBorder = this.primaryBorderColor;
        this.personBkg = this.mainBkg;
        this.archEdgeColor = "calculated";
        this.archEdgeArrowColor = "calculated";
        this.archEdgeWidth = "3";
        this.archGroupBorderColor = this.primaryBorderColor;
        this.archGroupBorderWidth = "2px";
        this.labelColor = "black";
        this.errorBkgColor = "#552222";
        this.errorTextColor = "#552222";
    }
    updateColors() {
        this.secondBkg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.contrast, 55);
        this.border2 = this.contrast;
        this.actorBorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.border1, 23);
        this.actorBkg = this.mainBkg;
        this.actorTextColor = this.text;
        this.actorLineColor = this.actorBorder;
        this.signalColor = this.text;
        this.signalTextColor = this.text;
        this.labelBoxBkgColor = this.actorBkg;
        this.labelBoxBorderColor = this.actorBorder;
        this.labelTextColor = this.text;
        this.loopTextColor = this.text;
        this.noteBorderColor = "#999";
        this.noteBkgColor = "#666";
        this.noteTextColor = "#fff";
        this.cScale0 = this.cScale0 || "#555";
        this.cScale1 = this.cScale1 || "#F4F4F4";
        this.cScale2 = this.cScale2 || "#555";
        this.cScale3 = this.cScale3 || "#BBB";
        this.cScale4 = this.cScale4 || "#777";
        this.cScale5 = this.cScale5 || "#999";
        this.cScale6 = this.cScale6 || "#DDD";
        this.cScale7 = this.cScale7 || "#FFF";
        this.cScale8 = this.cScale8 || "#DDD";
        this.cScale9 = this.cScale9 || "#BBB";
        this.cScale10 = this.cScale10 || "#999";
        this.cScale11 = this.cScale11 || "#777";
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScaleInv" + i] = this["cScaleInv" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this["cScale" + i]);
        }
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            if (this.darkMode) {
                this["cScalePeer" + i] = this["cScalePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this["cScale" + i], 10);
            } else {
                this["cScalePeer" + i] = this["cScalePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this["cScale" + i], 10);
            }
        }
        this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
        this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1;
        this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
        }
        for(let i = 0; i < 5; i++){
            this["surface" + i] = this["surface" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.mainBkg, {
                l: -(5 + i * 5)
            });
            this["surfacePeer" + i] = this["surfacePeer" + i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.mainBkg, {
                l: -(8 + i * 5)
            });
        }
        this.nodeBkg = this.mainBkg;
        this.nodeBorder = this.border1;
        this.clusterBkg = this.secondBkg;
        this.clusterBorder = this.border2;
        this.defaultLinkColor = this.lineColor;
        this.titleColor = this.text;
        this.sectionBkgColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.contrast, 30);
        this.sectionBkgColor2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.contrast, 30);
        this.taskBorderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.contrast, 10);
        this.taskBkgColor = this.contrast;
        this.taskTextColor = this.taskTextLightColor;
        this.taskTextDarkColor = this.text;
        this.taskTextOutsideColor = this.taskTextDarkColor;
        this.activeTaskBorderColor = this.taskBorderColor;
        this.activeTaskBkgColor = this.mainBkg;
        this.gridColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.border1, 30);
        this.doneTaskBkgColor = this.done;
        this.doneTaskBorderColor = this.lineColor;
        this.critBkgColor = this.critical;
        this.critBorderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.critBkgColor, 10);
        this.todayLineColor = this.critBkgColor;
        this.archEdgeColor = this.lineColor;
        this.archEdgeArrowColor = this.lineColor;
        this.transitionColor = this.transitionColor || "#000";
        this.transitionLabelColor = this.transitionLabelColor || this.textColor;
        this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
        this.stateBkg = this.stateBkg || this.mainBkg;
        this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
        this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
        this.altBackground = this.altBackground || "#f4f4f4";
        this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
        this.stateBorder = this.stateBorder || "#000";
        this.innerEndBackground = this.primaryBorderColor;
        this.specialStateColor = "#222";
        this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
        this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
        this.classText = this.primaryTextColor;
        this.fillType0 = this.primaryColor;
        this.fillType1 = this.secondaryColor;
        this.fillType2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 64
        });
        this.fillType3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: 64
        });
        this.fillType4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -64
        });
        this.fillType5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: -64
        });
        this.fillType6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 128
        });
        this.fillType7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.secondaryColor, {
            h: 128
        });
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["pie" + i] = this["cScale" + i];
        }
        this.pie12 = this.pie0;
        this.pieTitleTextSize = this.pieTitleTextSize || "25px";
        this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
        this.pieSectionTextSize = this.pieSectionTextSize || "17px";
        this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
        this.pieLegendTextSize = this.pieLegendTextSize || "17px";
        this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
        this.pieStrokeColor = this.pieStrokeColor || "black";
        this.pieStrokeWidth = this.pieStrokeWidth || "2px";
        this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
        this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
        this.pieOpacity = this.pieOpacity || "0.7";
        this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
        this.quadrant2Fill = this.quadrant2Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        });
        this.quadrant3Fill = this.quadrant3Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        });
        this.quadrant4Fill = this.quadrant4Fill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        });
        this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
        this.quadrant2TextFill = this.quadrant2TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        });
        this.quadrant3TextFill = this.quadrant3TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        });
        this.quadrant4TextFill = this.quadrant4TextFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        });
        this.quadrantPointFill = this.quadrantPointFill || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$is_dark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__isDark$3e$__["isDark"])(this.quadrant1Fill) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$lighten$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__lighten$3e$__["lighten"])(this.quadrant1Fill) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.quadrant1Fill);
        this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
        this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
        this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
        this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
        this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
        };
        this.requirementBackground = this.requirementBackground || this.primaryColor;
        this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
        this.requirementBorderSize = this.requirementBorderSize || "1";
        this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
        this.relationColor = this.relationColor || this.lineColor;
        this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
        this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
        this.git0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$darken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__darken$3e$__["darken"])(this.pie1, 25) || this.primaryColor;
        this.git1 = this.pie2 || this.secondaryColor;
        this.git2 = this.pie3 || this.tertiaryColor;
        this.git3 = this.pie4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -30
        });
        this.git4 = this.pie5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -60
        });
        this.git5 = this.pie6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: -90
        });
        this.git6 = this.pie7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 60
        });
        this.git7 = this.pie8 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$adjust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__adjust$3e$__["adjust"])(this.primaryColor, {
            h: 120
        });
        this.gitInv0 = this.gitInv0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git0);
        this.gitInv1 = this.gitInv1 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git1);
        this.gitInv2 = this.gitInv2 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git2);
        this.gitInv3 = this.gitInv3 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git3);
        this.gitInv4 = this.gitInv4 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git4);
        this.gitInv5 = this.gitInv5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git5);
        this.gitInv6 = this.gitInv6 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git6);
        this.gitInv7 = this.gitInv7 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$khroma$40$2$2e$1$2e$0$2f$node_modules$2f$khroma$2f$dist$2f$methods$2f$invert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__invert$3e$__["invert"])(this.git7);
        this.branchLabelColor = this.branchLabelColor || this.labelTextColor;
        this.gitBranchLabel0 = this.branchLabelColor;
        this.gitBranchLabel1 = "white";
        this.gitBranchLabel2 = this.branchLabelColor;
        this.gitBranchLabel3 = "white";
        this.gitBranchLabel4 = this.branchLabelColor;
        this.gitBranchLabel5 = this.branchLabelColor;
        this.gitBranchLabel6 = this.branchLabelColor;
        this.gitBranchLabel7 = this.branchLabelColor;
        this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
        this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
        this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
        this.tagLabelFontSize = this.tagLabelFontSize || "10px";
        this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
        this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
        this.commitLabelFontSize = this.commitLabelFontSize || "10px";
        this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
        this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
    }
    calculate(overrides) {
        if (typeof overrides !== "object") {
            this.updateColors();
            return;
        }
        const keys = Object.keys(overrides);
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
        this.updateColors();
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
    }
};
var getThemeVariables5 = /* @__PURE__ */ __name((userOverrides)=>{
    const theme = new Theme5();
    theme.calculate(userOverrides);
    return theme;
}, "getThemeVariables");
// src/themes/index.js
var themes_default = {
    base: {
        getThemeVariables
    },
    dark: {
        getThemeVariables: getThemeVariables2
    },
    default: {
        getThemeVariables: getThemeVariables3
    },
    forest: {
        getThemeVariables: getThemeVariables4
    },
    neutral: {
        getThemeVariables: getThemeVariables5
    }
};
// src/schemas/config.schema.yaml?only-defaults=true
var config_schema_default = {
    "flowchart": {
        "useMaxWidth": true,
        "titleTopMargin": 25,
        "subGraphTitleMargin": {
            "top": 0,
            "bottom": 0
        },
        "diagramPadding": 8,
        "htmlLabels": true,
        "nodeSpacing": 50,
        "rankSpacing": 50,
        "curve": "basis",
        "padding": 15,
        "defaultRenderer": "dagre-wrapper",
        "wrappingWidth": 200
    },
    "sequence": {
        "useMaxWidth": true,
        "hideUnusedParticipants": false,
        "activationWidth": 10,
        "diagramMarginX": 50,
        "diagramMarginY": 10,
        "actorMargin": 50,
        "width": 150,
        "height": 65,
        "boxMargin": 10,
        "boxTextMargin": 5,
        "noteMargin": 10,
        "messageMargin": 35,
        "messageAlign": "center",
        "mirrorActors": true,
        "forceMenus": false,
        "bottomMarginAdj": 1,
        "rightAngles": false,
        "showSequenceNumbers": false,
        "actorFontSize": 14,
        "actorFontFamily": '"Open Sans", sans-serif',
        "actorFontWeight": 400,
        "noteFontSize": 14,
        "noteFontFamily": '"trebuchet ms", verdana, arial, sans-serif',
        "noteFontWeight": 400,
        "noteAlign": "center",
        "messageFontSize": 16,
        "messageFontFamily": '"trebuchet ms", verdana, arial, sans-serif',
        "messageFontWeight": 400,
        "wrap": false,
        "wrapPadding": 10,
        "labelBoxWidth": 50,
        "labelBoxHeight": 20
    },
    "gantt": {
        "useMaxWidth": true,
        "titleTopMargin": 25,
        "barHeight": 20,
        "barGap": 4,
        "topPadding": 50,
        "rightPadding": 75,
        "leftPadding": 75,
        "gridLineStartPadding": 35,
        "fontSize": 11,
        "sectionFontSize": 11,
        "numberSectionStyles": 4,
        "axisFormat": "%Y-%m-%d",
        "topAxis": false,
        "displayMode": "",
        "weekday": "sunday"
    },
    "journey": {
        "useMaxWidth": true,
        "diagramMarginX": 50,
        "diagramMarginY": 10,
        "leftMargin": 150,
        "width": 150,
        "height": 50,
        "boxMargin": 10,
        "boxTextMargin": 5,
        "noteMargin": 10,
        "messageMargin": 35,
        "messageAlign": "center",
        "bottomMarginAdj": 1,
        "rightAngles": false,
        "taskFontSize": 14,
        "taskFontFamily": '"Open Sans", sans-serif',
        "taskMargin": 50,
        "activationWidth": 10,
        "textPlacement": "fo",
        "actorColours": [
            "#8FBC8F",
            "#7CFC00",
            "#00FFFF",
            "#20B2AA",
            "#B0E0E6",
            "#FFFFE0"
        ],
        "sectionFills": [
            "#191970",
            "#8B008B",
            "#4B0082",
            "#2F4F4F",
            "#800000",
            "#8B4513",
            "#00008B"
        ],
        "sectionColours": [
            "#fff"
        ]
    },
    "class": {
        "useMaxWidth": true,
        "titleTopMargin": 25,
        "arrowMarkerAbsolute": false,
        "dividerMargin": 10,
        "padding": 5,
        "textHeight": 10,
        "defaultRenderer": "dagre-wrapper",
        "htmlLabels": false,
        "hideEmptyMembersBox": false
    },
    "state": {
        "useMaxWidth": true,
        "titleTopMargin": 25,
        "dividerMargin": 10,
        "sizeUnit": 5,
        "padding": 8,
        "textHeight": 10,
        "titleShift": -15,
        "noteMargin": 10,
        "forkWidth": 70,
        "forkHeight": 7,
        "miniPadding": 2,
        "fontSizeFactor": 5.02,
        "fontSize": 24,
        "labelHeight": 16,
        "edgeLengthFactor": "20",
        "compositTitleSize": 35,
        "radius": 5,
        "defaultRenderer": "dagre-wrapper"
    },
    "er": {
        "useMaxWidth": true,
        "titleTopMargin": 25,
        "diagramPadding": 20,
        "layoutDirection": "TB",
        "minEntityWidth": 100,
        "minEntityHeight": 75,
        "entityPadding": 15,
        "stroke": "gray",
        "fill": "honeydew",
        "fontSize": 12
    },
    "pie": {
        "useMaxWidth": true,
        "textPosition": 0.75
    },
    "quadrantChart": {
        "useMaxWidth": true,
        "chartWidth": 500,
        "chartHeight": 500,
        "titleFontSize": 20,
        "titlePadding": 10,
        "quadrantPadding": 5,
        "xAxisLabelPadding": 5,
        "yAxisLabelPadding": 5,
        "xAxisLabelFontSize": 16,
        "yAxisLabelFontSize": 16,
        "quadrantLabelFontSize": 16,
        "quadrantTextTopPadding": 5,
        "pointTextPadding": 5,
        "pointLabelFontSize": 12,
        "pointRadius": 5,
        "xAxisPosition": "top",
        "yAxisPosition": "left",
        "quadrantInternalBorderStrokeWidth": 1,
        "quadrantExternalBorderStrokeWidth": 2
    },
    "xyChart": {
        "useMaxWidth": true,
        "width": 700,
        "height": 500,
        "titleFontSize": 20,
        "titlePadding": 10,
        "showTitle": true,
        "xAxis": {
            "$ref": "#/$defs/XYChartAxisConfig",
            "showLabel": true,
            "labelFontSize": 14,
            "labelPadding": 5,
            "showTitle": true,
            "titleFontSize": 16,
            "titlePadding": 5,
            "showTick": true,
            "tickLength": 5,
            "tickWidth": 2,
            "showAxisLine": true,
            "axisLineWidth": 2
        },
        "yAxis": {
            "$ref": "#/$defs/XYChartAxisConfig",
            "showLabel": true,
            "labelFontSize": 14,
            "labelPadding": 5,
            "showTitle": true,
            "titleFontSize": 16,
            "titlePadding": 5,
            "showTick": true,
            "tickLength": 5,
            "tickWidth": 2,
            "showAxisLine": true,
            "axisLineWidth": 2
        },
        "chartOrientation": "vertical",
        "plotReservedSpacePercent": 50
    },
    "requirement": {
        "useMaxWidth": true,
        "rect_fill": "#f9f9f9",
        "text_color": "#333",
        "rect_border_size": "0.5px",
        "rect_border_color": "#bbb",
        "rect_min_width": 200,
        "rect_min_height": 200,
        "fontSize": 14,
        "rect_padding": 10,
        "line_height": 20
    },
    "mindmap": {
        "useMaxWidth": true,
        "padding": 10,
        "maxNodeWidth": 200
    },
    "kanban": {
        "useMaxWidth": true,
        "padding": 8,
        "sectionWidth": 200,
        "ticketBaseUrl": ""
    },
    "timeline": {
        "useMaxWidth": true,
        "diagramMarginX": 50,
        "diagramMarginY": 10,
        "leftMargin": 150,
        "width": 150,
        "height": 50,
        "boxMargin": 10,
        "boxTextMargin": 5,
        "noteMargin": 10,
        "messageMargin": 35,
        "messageAlign": "center",
        "bottomMarginAdj": 1,
        "rightAngles": false,
        "taskFontSize": 14,
        "taskFontFamily": '"Open Sans", sans-serif',
        "taskMargin": 50,
        "activationWidth": 10,
        "textPlacement": "fo",
        "actorColours": [
            "#8FBC8F",
            "#7CFC00",
            "#00FFFF",
            "#20B2AA",
            "#B0E0E6",
            "#FFFFE0"
        ],
        "sectionFills": [
            "#191970",
            "#8B008B",
            "#4B0082",
            "#2F4F4F",
            "#800000",
            "#8B4513",
            "#00008B"
        ],
        "sectionColours": [
            "#fff"
        ],
        "disableMulticolor": false
    },
    "gitGraph": {
        "useMaxWidth": true,
        "titleTopMargin": 25,
        "diagramPadding": 8,
        "nodeLabel": {
            "width": 75,
            "height": 100,
            "x": -25,
            "y": 0
        },
        "mainBranchName": "main",
        "mainBranchOrder": 0,
        "showCommitLabel": true,
        "showBranches": true,
        "rotateCommitLabel": true,
        "parallelCommits": false,
        "arrowMarkerAbsolute": false
    },
    "c4": {
        "useMaxWidth": true,
        "diagramMarginX": 50,
        "diagramMarginY": 10,
        "c4ShapeMargin": 50,
        "c4ShapePadding": 20,
        "width": 216,
        "height": 60,
        "boxMargin": 10,
        "c4ShapeInRow": 4,
        "nextLinePaddingX": 0,
        "c4BoundaryInRow": 2,
        "personFontSize": 14,
        "personFontFamily": '"Open Sans", sans-serif',
        "personFontWeight": "normal",
        "external_personFontSize": 14,
        "external_personFontFamily": '"Open Sans", sans-serif',
        "external_personFontWeight": "normal",
        "systemFontSize": 14,
        "systemFontFamily": '"Open Sans", sans-serif',
        "systemFontWeight": "normal",
        "external_systemFontSize": 14,
        "external_systemFontFamily": '"Open Sans", sans-serif',
        "external_systemFontWeight": "normal",
        "system_dbFontSize": 14,
        "system_dbFontFamily": '"Open Sans", sans-serif',
        "system_dbFontWeight": "normal",
        "external_system_dbFontSize": 14,
        "external_system_dbFontFamily": '"Open Sans", sans-serif',
        "external_system_dbFontWeight": "normal",
        "system_queueFontSize": 14,
        "system_queueFontFamily": '"Open Sans", sans-serif',
        "system_queueFontWeight": "normal",
        "external_system_queueFontSize": 14,
        "external_system_queueFontFamily": '"Open Sans", sans-serif',
        "external_system_queueFontWeight": "normal",
        "boundaryFontSize": 14,
        "boundaryFontFamily": '"Open Sans", sans-serif',
        "boundaryFontWeight": "normal",
        "messageFontSize": 12,
        "messageFontFamily": '"Open Sans", sans-serif',
        "messageFontWeight": "normal",
        "containerFontSize": 14,
        "containerFontFamily": '"Open Sans", sans-serif',
        "containerFontWeight": "normal",
        "external_containerFontSize": 14,
        "external_containerFontFamily": '"Open Sans", sans-serif',
        "external_containerFontWeight": "normal",
        "container_dbFontSize": 14,
        "container_dbFontFamily": '"Open Sans", sans-serif',
        "container_dbFontWeight": "normal",
        "external_container_dbFontSize": 14,
        "external_container_dbFontFamily": '"Open Sans", sans-serif',
        "external_container_dbFontWeight": "normal",
        "container_queueFontSize": 14,
        "container_queueFontFamily": '"Open Sans", sans-serif',
        "container_queueFontWeight": "normal",
        "external_container_queueFontSize": 14,
        "external_container_queueFontFamily": '"Open Sans", sans-serif',
        "external_container_queueFontWeight": "normal",
        "componentFontSize": 14,
        "componentFontFamily": '"Open Sans", sans-serif',
        "componentFontWeight": "normal",
        "external_componentFontSize": 14,
        "external_componentFontFamily": '"Open Sans", sans-serif',
        "external_componentFontWeight": "normal",
        "component_dbFontSize": 14,
        "component_dbFontFamily": '"Open Sans", sans-serif',
        "component_dbFontWeight": "normal",
        "external_component_dbFontSize": 14,
        "external_component_dbFontFamily": '"Open Sans", sans-serif',
        "external_component_dbFontWeight": "normal",
        "component_queueFontSize": 14,
        "component_queueFontFamily": '"Open Sans", sans-serif',
        "component_queueFontWeight": "normal",
        "external_component_queueFontSize": 14,
        "external_component_queueFontFamily": '"Open Sans", sans-serif',
        "external_component_queueFontWeight": "normal",
        "wrap": true,
        "wrapPadding": 10,
        "person_bg_color": "#08427B",
        "person_border_color": "#073B6F",
        "external_person_bg_color": "#686868",
        "external_person_border_color": "#8A8A8A",
        "system_bg_color": "#1168BD",
        "system_border_color": "#3C7FC0",
        "system_db_bg_color": "#1168BD",
        "system_db_border_color": "#3C7FC0",
        "system_queue_bg_color": "#1168BD",
        "system_queue_border_color": "#3C7FC0",
        "external_system_bg_color": "#999999",
        "external_system_border_color": "#8A8A8A",
        "external_system_db_bg_color": "#999999",
        "external_system_db_border_color": "#8A8A8A",
        "external_system_queue_bg_color": "#999999",
        "external_system_queue_border_color": "#8A8A8A",
        "container_bg_color": "#438DD5",
        "container_border_color": "#3C7FC0",
        "container_db_bg_color": "#438DD5",
        "container_db_border_color": "#3C7FC0",
        "container_queue_bg_color": "#438DD5",
        "container_queue_border_color": "#3C7FC0",
        "external_container_bg_color": "#B3B3B3",
        "external_container_border_color": "#A6A6A6",
        "external_container_db_bg_color": "#B3B3B3",
        "external_container_db_border_color": "#A6A6A6",
        "external_container_queue_bg_color": "#B3B3B3",
        "external_container_queue_border_color": "#A6A6A6",
        "component_bg_color": "#85BBF0",
        "component_border_color": "#78A8D8",
        "component_db_bg_color": "#85BBF0",
        "component_db_border_color": "#78A8D8",
        "component_queue_bg_color": "#85BBF0",
        "component_queue_border_color": "#78A8D8",
        "external_component_bg_color": "#CCCCCC",
        "external_component_border_color": "#BFBFBF",
        "external_component_db_bg_color": "#CCCCCC",
        "external_component_db_border_color": "#BFBFBF",
        "external_component_queue_bg_color": "#CCCCCC",
        "external_component_queue_border_color": "#BFBFBF"
    },
    "sankey": {
        "useMaxWidth": true,
        "width": 600,
        "height": 400,
        "linkColor": "gradient",
        "nodeAlignment": "justify",
        "showValues": true,
        "prefix": "",
        "suffix": ""
    },
    "block": {
        "useMaxWidth": true,
        "padding": 8
    },
    "packet": {
        "useMaxWidth": true,
        "rowHeight": 32,
        "bitWidth": 32,
        "bitsPerRow": 32,
        "showBits": true,
        "paddingX": 5,
        "paddingY": 5
    },
    "architecture": {
        "useMaxWidth": true,
        "padding": 40,
        "iconSize": 80,
        "fontSize": 16
    },
    "theme": "default",
    "look": "classic",
    "handDrawnSeed": 0,
    "layout": "dagre",
    "maxTextSize": 5e4,
    "maxEdges": 500,
    "darkMode": false,
    "fontFamily": '"trebuchet ms", verdana, arial, sans-serif;',
    "logLevel": 5,
    "securityLevel": "strict",
    "startOnLoad": true,
    "arrowMarkerAbsolute": false,
    "secure": [
        "secure",
        "securityLevel",
        "startOnLoad",
        "maxTextSize",
        "suppressErrorRendering",
        "maxEdges"
    ],
    "legacyMathML": false,
    "forceLegacyMathML": false,
    "deterministicIds": false,
    "fontSize": 16,
    "markdownAutoWrap": true,
    "suppressErrorRendering": false
};
// src/defaultConfig.ts
var config = {
    ...config_schema_default,
    // Set, even though they're `undefined` so that `configKeys` finds these keys
    // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
    deterministicIDSeed: void 0,
    elk: {
        // mergeEdges is needed here to be considered
        mergeEdges: false,
        nodePlacementStrategy: "BRANDES_KOEPF"
    },
    themeCSS: void 0,
    // add non-JSON default config values
    themeVariables: themes_default.default.getThemeVariables(),
    sequence: {
        ...config_schema_default.sequence,
        messageFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.messageFontFamily,
                fontSize: this.messageFontSize,
                fontWeight: this.messageFontWeight
            };
        }, "messageFont"),
        noteFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.noteFontFamily,
                fontSize: this.noteFontSize,
                fontWeight: this.noteFontWeight
            };
        }, "noteFont"),
        actorFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.actorFontFamily,
                fontSize: this.actorFontSize,
                fontWeight: this.actorFontWeight
            };
        }, "actorFont")
    },
    class: {
        hideEmptyMembersBox: false
    },
    gantt: {
        ...config_schema_default.gantt,
        tickInterval: void 0,
        useWidth: void 0
    },
    c4: {
        ...config_schema_default.c4,
        useWidth: void 0,
        personFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.personFontFamily,
                fontSize: this.personFontSize,
                fontWeight: this.personFontWeight
            };
        }, "personFont"),
        external_personFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.external_personFontFamily,
                fontSize: this.external_personFontSize,
                fontWeight: this.external_personFontWeight
            };
        }, "external_personFont"),
        systemFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.systemFontFamily,
                fontSize: this.systemFontSize,
                fontWeight: this.systemFontWeight
            };
        }, "systemFont"),
        external_systemFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.external_systemFontFamily,
                fontSize: this.external_systemFontSize,
                fontWeight: this.external_systemFontWeight
            };
        }, "external_systemFont"),
        system_dbFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.system_dbFontFamily,
                fontSize: this.system_dbFontSize,
                fontWeight: this.system_dbFontWeight
            };
        }, "system_dbFont"),
        external_system_dbFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.external_system_dbFontFamily,
                fontSize: this.external_system_dbFontSize,
                fontWeight: this.external_system_dbFontWeight
            };
        }, "external_system_dbFont"),
        system_queueFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.system_queueFontFamily,
                fontSize: this.system_queueFontSize,
                fontWeight: this.system_queueFontWeight
            };
        }, "system_queueFont"),
        external_system_queueFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.external_system_queueFontFamily,
                fontSize: this.external_system_queueFontSize,
                fontWeight: this.external_system_queueFontWeight
            };
        }, "external_system_queueFont"),
        containerFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.containerFontFamily,
                fontSize: this.containerFontSize,
                fontWeight: this.containerFontWeight
            };
        }, "containerFont"),
        external_containerFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.external_containerFontFamily,
                fontSize: this.external_containerFontSize,
                fontWeight: this.external_containerFontWeight
            };
        }, "external_containerFont"),
        container_dbFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.container_dbFontFamily,
                fontSize: this.container_dbFontSize,
                fontWeight: this.container_dbFontWeight
            };
        }, "container_dbFont"),
        external_container_dbFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.external_container_dbFontFamily,
                fontSize: this.external_container_dbFontSize,
                fontWeight: this.external_container_dbFontWeight
            };
        }, "external_container_dbFont"),
        container_queueFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.container_queueFontFamily,
                fontSize: this.container_queueFontSize,
                fontWeight: this.container_queueFontWeight
            };
        }, "container_queueFont"),
        external_container_queueFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.external_container_queueFontFamily,
                fontSize: this.external_container_queueFontSize,
                fontWeight: this.external_container_queueFontWeight
            };
        }, "external_container_queueFont"),
        componentFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.componentFontFamily,
                fontSize: this.componentFontSize,
                fontWeight: this.componentFontWeight
            };
        }, "componentFont"),
        external_componentFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.external_componentFontFamily,
                fontSize: this.external_componentFontSize,
                fontWeight: this.external_componentFontWeight
            };
        }, "external_componentFont"),
        component_dbFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.component_dbFontFamily,
                fontSize: this.component_dbFontSize,
                fontWeight: this.component_dbFontWeight
            };
        }, "component_dbFont"),
        external_component_dbFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.external_component_dbFontFamily,
                fontSize: this.external_component_dbFontSize,
                fontWeight: this.external_component_dbFontWeight
            };
        }, "external_component_dbFont"),
        component_queueFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.component_queueFontFamily,
                fontSize: this.component_queueFontSize,
                fontWeight: this.component_queueFontWeight
            };
        }, "component_queueFont"),
        external_component_queueFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.external_component_queueFontFamily,
                fontSize: this.external_component_queueFontSize,
                fontWeight: this.external_component_queueFontWeight
            };
        }, "external_component_queueFont"),
        boundaryFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.boundaryFontFamily,
                fontSize: this.boundaryFontSize,
                fontWeight: this.boundaryFontWeight
            };
        }, "boundaryFont"),
        messageFont: /* @__PURE__ */ __name(function() {
            return {
                fontFamily: this.messageFontFamily,
                fontSize: this.messageFontSize,
                fontWeight: this.messageFontWeight
            };
        }, "messageFont")
    },
    pie: {
        ...config_schema_default.pie,
        useWidth: 984
    },
    xyChart: {
        ...config_schema_default.xyChart,
        useWidth: void 0
    },
    requirement: {
        ...config_schema_default.requirement,
        useWidth: void 0
    },
    packet: {
        ...config_schema_default.packet
    }
};
var keyify = /* @__PURE__ */ __name((obj, prefix = "")=>Object.keys(obj).reduce((res, el)=>{
        if (Array.isArray(obj[el])) {
            return res;
        } else if (typeof obj[el] === "object" && obj[el] !== null) {
            return [
                ...res,
                prefix + el,
                ...keyify(obj[el], "")
            ];
        }
        return [
            ...res,
            prefix + el
        ];
    }, []), "keyify");
var configKeys = new Set(keyify(config, ""));
var defaultConfig_default = config;
// src/utils/sanitizeDirective.ts
var sanitizeDirective = /* @__PURE__ */ __name((args)=>{
    log.debug("sanitizeDirective called with", args);
    if (typeof args !== "object" || args == null) {
        return;
    }
    if (Array.isArray(args)) {
        args.forEach((arg)=>sanitizeDirective(arg));
        return;
    }
    for (const key of Object.keys(args)){
        log.debug("Checking key", key);
        if (key.startsWith("__") || key.includes("proto") || key.includes("constr") || !configKeys.has(key) || args[key] == null) {
            log.debug("sanitize deleting key: ", key);
            delete args[key];
            continue;
        }
        if (typeof args[key] === "object") {
            log.debug("sanitizing object", key);
            sanitizeDirective(args[key]);
            continue;
        }
        const cssMatchers = [
            "themeCSS",
            "fontFamily",
            "altFontFamily"
        ];
        for (const cssKey of cssMatchers){
            if (key.includes(cssKey)) {
                log.debug("sanitizing css option", key);
                args[key] = sanitizeCss(args[key]);
            }
        }
    }
    if (args.themeVariables) {
        for (const k of Object.keys(args.themeVariables)){
            const val = args.themeVariables[k];
            if (val?.match && !val.match(/^[\d "#%(),.;A-Za-z]+$/)) {
                args.themeVariables[k] = "";
            }
        }
    }
    log.debug("After sanitization", args);
}, "sanitizeDirective");
var sanitizeCss = /* @__PURE__ */ __name((str)=>{
    let startCnt = 0;
    let endCnt = 0;
    for (const element of str){
        if (startCnt < endCnt) {
            return "{ /* ERROR: Unbalanced CSS */ }";
        }
        if (element === "{") {
            startCnt++;
        } else if (element === "}") {
            endCnt++;
        }
    }
    if (startCnt !== endCnt) {
        return "{ /* ERROR: Unbalanced CSS */ }";
    }
    return str;
}, "sanitizeCss");
// src/config.ts
var defaultConfig = Object.freeze(defaultConfig_default);
var siteConfig = assignWithDepth_default({}, defaultConfig);
var configFromInitialize;
var directives = [];
var currentConfig = assignWithDepth_default({}, defaultConfig);
var updateCurrentConfig = /* @__PURE__ */ __name((siteCfg, _directives)=>{
    let cfg = assignWithDepth_default({}, siteCfg);
    let sumOfDirectives = {};
    for (const d of _directives){
        sanitize(d);
        sumOfDirectives = assignWithDepth_default(sumOfDirectives, d);
    }
    cfg = assignWithDepth_default(cfg, sumOfDirectives);
    if (sumOfDirectives.theme && sumOfDirectives.theme in themes_default) {
        const tmpConfigFromInitialize = assignWithDepth_default({}, configFromInitialize);
        const themeVariables = assignWithDepth_default(tmpConfigFromInitialize.themeVariables || {}, sumOfDirectives.themeVariables);
        if (cfg.theme && cfg.theme in themes_default) {
            cfg.themeVariables = themes_default[cfg.theme].getThemeVariables(themeVariables);
        }
    }
    currentConfig = cfg;
    checkConfig(currentConfig);
    return currentConfig;
}, "updateCurrentConfig");
var setSiteConfig = /* @__PURE__ */ __name((conf)=>{
    siteConfig = assignWithDepth_default({}, defaultConfig);
    siteConfig = assignWithDepth_default(siteConfig, conf);
    if (conf.theme && themes_default[conf.theme]) {
        siteConfig.themeVariables = themes_default[conf.theme].getThemeVariables(conf.themeVariables);
    }
    updateCurrentConfig(siteConfig, directives);
    return siteConfig;
}, "setSiteConfig");
var saveConfigFromInitialize = /* @__PURE__ */ __name((conf)=>{
    configFromInitialize = assignWithDepth_default({}, conf);
}, "saveConfigFromInitialize");
var updateSiteConfig = /* @__PURE__ */ __name((conf)=>{
    siteConfig = assignWithDepth_default(siteConfig, conf);
    updateCurrentConfig(siteConfig, directives);
    return siteConfig;
}, "updateSiteConfig");
var getSiteConfig = /* @__PURE__ */ __name(()=>{
    return assignWithDepth_default({}, siteConfig);
}, "getSiteConfig");
var setConfig = /* @__PURE__ */ __name((conf)=>{
    checkConfig(conf);
    assignWithDepth_default(currentConfig, conf);
    return getConfig();
}, "setConfig");
var getConfig = /* @__PURE__ */ __name(()=>{
    return assignWithDepth_default({}, currentConfig);
}, "getConfig");
var sanitize = /* @__PURE__ */ __name((options)=>{
    if (!options) {
        return;
    }
    [
        "secure",
        ...siteConfig.secure ?? []
    ].forEach((key)=>{
        if (Object.hasOwn(options, key)) {
            log.debug(`Denied attempt to modify a secure key ${key}`, options[key]);
            delete options[key];
        }
    });
    Object.keys(options).forEach((key)=>{
        if (key.startsWith("__")) {
            delete options[key];
        }
    });
    Object.keys(options).forEach((key)=>{
        if (typeof options[key] === "string" && (options[key].includes("<") || options[key].includes(">") || options[key].includes("url(data:"))) {
            delete options[key];
        }
        if (typeof options[key] === "object") {
            sanitize(options[key]);
        }
    });
}, "sanitize");
var addDirective = /* @__PURE__ */ __name((directive)=>{
    sanitizeDirective(directive);
    if (directive.fontFamily && !directive.themeVariables?.fontFamily) {
        directive.themeVariables = {
            ...directive.themeVariables,
            fontFamily: directive.fontFamily
        };
    }
    directives.push(directive);
    updateCurrentConfig(siteConfig, directives);
}, "addDirective");
var reset = /* @__PURE__ */ __name((config2 = siteConfig)=>{
    directives = [];
    updateCurrentConfig(config2, directives);
}, "reset");
var ConfigWarning = {
    LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
};
var issuedWarnings = {};
var issueWarning = /* @__PURE__ */ __name((warning)=>{
    if (issuedWarnings[warning]) {
        return;
    }
    log.warn(ConfigWarning[warning]);
    issuedWarnings[warning] = true;
}, "issueWarning");
var checkConfig = /* @__PURE__ */ __name((config2)=>{
    if (!config2) {
        return;
    }
    if (config2.lazyLoadedDiagrams || config2.loadExternalDiagramsAtStartup) {
        issueWarning("LAZY_LOAD_DEPRECATED");
    }
}, "checkConfig");
;
var lineBreakRegex = /<br\s*\/?>/gi;
var getRows = /* @__PURE__ */ __name((s)=>{
    if (!s) {
        return [
            ""
        ];
    }
    const str = breakToPlaceholder(s).replace(/\\n/g, "#br#");
    return str.split("#br#");
}, "getRows");
var setupDompurifyHooksIfNotSetup = /* @__PURE__ */ (()=>{
    let setup = false;
    return ()=>{
        if (!setup) {
            setupDompurifyHooks();
            setup = true;
        }
    };
})();
function setupDompurifyHooks() {
    const TEMPORARY_ATTRIBUTE = "data-temp-href-target";
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dompurify$40$3$2e$2$2e$3$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].addHook("beforeSanitizeAttributes", (node)=>{
        if (node instanceof Element && node.tagName === "A" && node.hasAttribute("target")) {
            node.setAttribute(TEMPORARY_ATTRIBUTE, node.getAttribute("target") ?? "");
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dompurify$40$3$2e$2$2e$3$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].addHook("afterSanitizeAttributes", (node)=>{
        if (node instanceof Element && node.tagName === "A" && node.hasAttribute(TEMPORARY_ATTRIBUTE)) {
            node.setAttribute("target", node.getAttribute(TEMPORARY_ATTRIBUTE) ?? "");
            node.removeAttribute(TEMPORARY_ATTRIBUTE);
            if (node.getAttribute("target") === "_blank") {
                node.setAttribute("rel", "noopener");
            }
        }
    });
}
__name(setupDompurifyHooks, "setupDompurifyHooks");
var removeScript = /* @__PURE__ */ __name((txt)=>{
    setupDompurifyHooksIfNotSetup();
    const sanitizedText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dompurify$40$3$2e$2$2e$3$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(txt);
    return sanitizedText;
}, "removeScript");
var sanitizeMore = /* @__PURE__ */ __name((text, config2)=>{
    if (config2.flowchart?.htmlLabels !== false) {
        const level = config2.securityLevel;
        if (level === "antiscript" || level === "strict") {
            text = removeScript(text);
        } else if (level !== "loose") {
            text = breakToPlaceholder(text);
            text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            text = text.replace(/=/g, "&equals;");
            text = placeholderToBreak(text);
        }
    }
    return text;
}, "sanitizeMore");
var sanitizeText = /* @__PURE__ */ __name((text, config2)=>{
    if (!text) {
        return text;
    }
    if (config2.dompurifyConfig) {
        text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dompurify$40$3$2e$2$2e$3$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(sanitizeMore(text, config2), config2.dompurifyConfig).toString();
    } else {
        text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dompurify$40$3$2e$2$2e$3$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(sanitizeMore(text, config2), {
            FORBID_TAGS: [
                "style"
            ]
        }).toString();
    }
    return text;
}, "sanitizeText");
var sanitizeTextOrArray = /* @__PURE__ */ __name((a, config2)=>{
    if (typeof a === "string") {
        return sanitizeText(a, config2);
    }
    return a.flat().map((x)=>sanitizeText(x, config2));
}, "sanitizeTextOrArray");
var hasBreaks = /* @__PURE__ */ __name((text)=>{
    return lineBreakRegex.test(text);
}, "hasBreaks");
var splitBreaks = /* @__PURE__ */ __name((text)=>{
    return text.split(lineBreakRegex);
}, "splitBreaks");
var placeholderToBreak = /* @__PURE__ */ __name((s)=>{
    return s.replace(/#br#/g, "<br/>");
}, "placeholderToBreak");
var breakToPlaceholder = /* @__PURE__ */ __name((s)=>{
    return s.replace(lineBreakRegex, "#br#");
}, "breakToPlaceholder");
var getUrl = /* @__PURE__ */ __name((useAbsolute)=>{
    let url = "";
    if (useAbsolute) {
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        url = url.replaceAll(/\(/g, "\\(");
        url = url.replaceAll(/\)/g, "\\)");
    }
    return url;
}, "getUrl");
var evaluate = /* @__PURE__ */ __name((val)=>val === false || [
        "false",
        "null",
        "0"
    ].includes(String(val).trim().toLowerCase()) ? false : true, "evaluate");
var getMax = /* @__PURE__ */ __name(function(...values) {
    const newValues = values.filter((value)=>{
        return !isNaN(value);
    });
    return Math.max(...newValues);
}, "getMax");
var getMin = /* @__PURE__ */ __name(function(...values) {
    const newValues = values.filter((value)=>{
        return !isNaN(value);
    });
    return Math.min(...newValues);
}, "getMin");
var parseGenericTypes = /* @__PURE__ */ __name(function(input) {
    const inputSets = input.split(/(,)/);
    const output = [];
    for(let i = 0; i < inputSets.length; i++){
        let thisSet = inputSets[i];
        if (thisSet === "," && i > 0 && i + 1 < inputSets.length) {
            const previousSet = inputSets[i - 1];
            const nextSet = inputSets[i + 1];
            if (shouldCombineSets(previousSet, nextSet)) {
                thisSet = previousSet + "," + nextSet;
                i++;
                output.pop();
            }
        }
        output.push(processSet(thisSet));
    }
    return output.join("");
}, "parseGenericTypes");
var countOccurrence = /* @__PURE__ */ __name((string, substring)=>{
    return Math.max(0, string.split(substring).length - 1);
}, "countOccurrence");
var shouldCombineSets = /* @__PURE__ */ __name((previousSet, nextSet)=>{
    const prevCount = countOccurrence(previousSet, "~");
    const nextCount = countOccurrence(nextSet, "~");
    return prevCount === 1 && nextCount === 1;
}, "shouldCombineSets");
var processSet = /* @__PURE__ */ __name((input)=>{
    const tildeCount = countOccurrence(input, "~");
    let hasStartingTilde = false;
    if (tildeCount <= 1) {
        return input;
    }
    if (tildeCount % 2 !== 0 && input.startsWith("~")) {
        input = input.substring(1);
        hasStartingTilde = true;
    }
    const chars = [
        ...input
    ];
    let first = chars.indexOf("~");
    let last = chars.lastIndexOf("~");
    while(first !== -1 && last !== -1 && first !== last){
        chars[first] = "<";
        chars[last] = ">";
        first = chars.indexOf("~");
        last = chars.lastIndexOf("~");
    }
    if (hasStartingTilde) {
        chars.unshift("~");
    }
    return chars.join("");
}, "processSet");
var isMathMLSupported = /* @__PURE__ */ __name(()=>window.MathMLElement !== void 0, "isMathMLSupported");
var katexRegex = /\$\$(.*)\$\$/g;
var hasKatex = /* @__PURE__ */ __name((text)=>(text.match(katexRegex)?.length ?? 0) > 0, "hasKatex");
var calculateMathMLDimensions = /* @__PURE__ */ __name(async (text, config2)=>{
    text = await renderKatex(text, config2);
    const divElem = document.createElement("div");
    divElem.innerHTML = text;
    divElem.id = "katex-temp";
    divElem.style.visibility = "hidden";
    divElem.style.position = "absolute";
    divElem.style.top = "0";
    const body = document.querySelector("body");
    body?.insertAdjacentElement("beforeend", divElem);
    const dim = {
        width: divElem.clientWidth,
        height: divElem.clientHeight
    };
    divElem.remove();
    return dim;
}, "calculateMathMLDimensions");
var renderKatex = /* @__PURE__ */ __name(async (text, config2)=>{
    if (!hasKatex(text)) {
        return text;
    }
    if (!(isMathMLSupported() || config2.legacyMathML || config2.forceLegacyMathML)) {
        return text.replace(katexRegex, "MathML is unsupported in this environment.");
    }
    const { default: katex } = await __turbopack_require__("[project]/node_modules/.pnpm/katex@0.16.15/node_modules/katex/dist/katex.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    const outputMode = config2.forceLegacyMathML || !isMathMLSupported() && config2.legacyMathML ? "htmlAndMathml" : "mathml";
    return text.split(lineBreakRegex).map((line)=>hasKatex(line) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${line}</div>` : `<div>${line}</div>`).join("").replace(katexRegex, (_, c)=>katex.renderToString(c, {
            throwOnError: true,
            displayMode: true,
            output: outputMode
        }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
}, "renderKatex");
var common_default = {
    getRows,
    sanitizeText,
    sanitizeTextOrArray,
    hasBreaks,
    splitBreaks,
    lineBreakRegex,
    removeScript,
    getUrl,
    evaluate,
    getMax,
    getMin
};
// src/setupGraphViewbox.js
var d3Attrs = /* @__PURE__ */ __name(function(d3Elem, attrs) {
    for (let attr of attrs){
        d3Elem.attr(attr[0], attr[1]);
    }
}, "d3Attrs");
var calculateSvgSizeAttrs = /* @__PURE__ */ __name(function(height, width, useMaxWidth) {
    let attrs = /* @__PURE__ */ new Map();
    if (useMaxWidth) {
        attrs.set("width", "100%");
        attrs.set("style", `max-width: ${width}px;`);
    } else {
        attrs.set("height", height);
        attrs.set("width", width);
    }
    return attrs;
}, "calculateSvgSizeAttrs");
var configureSvgSize = /* @__PURE__ */ __name(function(svgElem, height, width, useMaxWidth) {
    const attrs = calculateSvgSizeAttrs(height, width, useMaxWidth);
    d3Attrs(svgElem, attrs);
}, "configureSvgSize");
var setupGraphViewbox = /* @__PURE__ */ __name(function(graph, svgElem, padding, useMaxWidth) {
    const svgBounds = svgElem.node().getBBox();
    const sWidth = svgBounds.width;
    const sHeight = svgBounds.height;
    log.info(`SVG bounds: ${sWidth}x${sHeight}`, svgBounds);
    let width = 0;
    let height = 0;
    log.info(`Graph bounds: ${width}x${height}`, graph);
    width = sWidth + padding * 2;
    height = sHeight + padding * 2;
    log.info(`Calculated bounds: ${width}x${height}`);
    configureSvgSize(svgElem, height, width, useMaxWidth);
    const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${svgBounds.width + 2 * padding} ${svgBounds.height + 2 * padding}`;
    svgElem.attr("viewBox", vBox);
}, "setupGraphViewbox");
// src/styles.ts
var themes = {};
var getStyles = /* @__PURE__ */ __name((type, userStyles, options)=>{
    let diagramStyles = "";
    if (type in themes && themes[type]) {
        diagramStyles = themes[type](options);
    } else {
        log.warn(`No theme found for ${type}`);
    }
    return ` & {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
    fill: ${options.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${options.errorBkgColor};
  }
  & .error-text {
    fill: ${options.errorTextColor};
    stroke: ${options.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${options.lineColor};
    stroke: ${options.lineColor};
  }
  & .marker.cross {
    stroke: ${options.lineColor};
  }

  & svg {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
  }
   & p {
    margin: 0
   }

  ${diagramStyles}

  ${userStyles}
`;
}, "getStyles");
var addStylesForDiagram = /* @__PURE__ */ __name((type, diagramTheme)=>{
    if (diagramTheme !== void 0) {
        themes[type] = diagramTheme;
    }
}, "addStylesForDiagram");
var styles_default = getStyles;
// src/diagrams/common/commonDb.ts
var commonDb_exports = {};
__export(commonDb_exports, {
    clear: ()=>clear,
    getAccDescription: ()=>getAccDescription,
    getAccTitle: ()=>getAccTitle,
    getDiagramTitle: ()=>getDiagramTitle,
    setAccDescription: ()=>setAccDescription,
    setAccTitle: ()=>setAccTitle,
    setDiagramTitle: ()=>setDiagramTitle
});
var accTitle = "";
var diagramTitle = "";
var accDescription = "";
var sanitizeText2 = /* @__PURE__ */ __name((txt)=>sanitizeText(txt, getConfig()), "sanitizeText");
var clear = /* @__PURE__ */ __name(()=>{
    accTitle = "";
    accDescription = "";
    diagramTitle = "";
}, "clear");
var setAccTitle = /* @__PURE__ */ __name((txt)=>{
    accTitle = sanitizeText2(txt).replace(/^\s+/g, "");
}, "setAccTitle");
var getAccTitle = /* @__PURE__ */ __name(()=>accTitle, "getAccTitle");
var setAccDescription = /* @__PURE__ */ __name((txt)=>{
    accDescription = sanitizeText2(txt).replace(/\n\s+/g, "\n");
}, "setAccDescription");
var getAccDescription = /* @__PURE__ */ __name(()=>accDescription, "getAccDescription");
var setDiagramTitle = /* @__PURE__ */ __name((txt)=>{
    diagramTitle = sanitizeText2(txt);
}, "setDiagramTitle");
var getDiagramTitle = /* @__PURE__ */ __name(()=>diagramTitle, "getDiagramTitle");
// src/diagram-api/diagramAPI.ts
var log2 = log;
var setLogLevel2 = setLogLevel;
var getConfig2 = getConfig;
var setConfig2 = setConfig;
var defaultConfig2 = defaultConfig;
var sanitizeText3 = /* @__PURE__ */ __name((text)=>sanitizeText(text, getConfig2()), "sanitizeText");
var setupGraphViewbox2 = setupGraphViewbox;
var getCommonDb = /* @__PURE__ */ __name(()=>{
    return commonDb_exports;
}, "getCommonDb");
var diagrams = {};
var registerDiagram = /* @__PURE__ */ __name((id, diagram, detector)=>{
    if (diagrams[id]) {
        log2.warn(`Diagram with id ${id} already registered. Overwriting.`);
    }
    diagrams[id] = diagram;
    if (detector) {
        addDetector(id, detector);
    }
    addStylesForDiagram(id, diagram.styles);
    diagram.injectUtils?.(log2, setLogLevel2, getConfig2, sanitizeText3, setupGraphViewbox2, getCommonDb(), ()=>{});
}, "registerDiagram");
var getDiagram = /* @__PURE__ */ __name((name)=>{
    if (name in diagrams) {
        return diagrams[name];
    }
    throw new DiagramNotFoundError(name);
}, "getDiagram");
var DiagramNotFoundError = class extends Error {
    static{
        __name(this, "DiagramNotFoundError");
    }
    constructor(name){
        super(`Diagram ${name} not found.`);
    }
};
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-S3SWNSAA.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "JSON_SCHEMA": (()=>JSON_SCHEMA),
    "load": (()=>load)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
;
// ../../node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs
function isNothing(subject) {
    return typeof subject === "undefined" || subject === null;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isNothing, "isNothing");
function isObject(subject) {
    return typeof subject === "object" && subject !== null;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isObject, "isObject");
function toArray(sequence) {
    if (Array.isArray(sequence)) return sequence;
    else if (isNothing(sequence)) return [];
    return [
        sequence
    ];
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(toArray, "toArray");
function extend(target, source) {
    var index, length, key, sourceKeys;
    if (source) {
        sourceKeys = Object.keys(source);
        for(index = 0, length = sourceKeys.length; index < length; index += 1){
            key = sourceKeys[index];
            target[key] = source[key];
        }
    }
    return target;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(extend, "extend");
function repeat(string, count) {
    var result = "", cycle;
    for(cycle = 0; cycle < count; cycle += 1){
        result += string;
    }
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(repeat, "repeat");
function isNegativeZero(number) {
    return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isNegativeZero, "isNegativeZero");
var isNothing_1 = isNothing;
var isObject_1 = isObject;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common = {
    isNothing: isNothing_1,
    isObject: isObject_1,
    toArray: toArray_1,
    repeat: repeat_1,
    isNegativeZero: isNegativeZero_1,
    extend: extend_1
};
function formatError(exception2, compact) {
    var where = "", message = exception2.reason || "(unknown reason)";
    if (!exception2.mark) return message;
    if (exception2.mark.name) {
        where += 'in "' + exception2.mark.name + '" ';
    }
    where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
    if (!compact && exception2.mark.snippet) {
        where += "\n\n" + exception2.mark.snippet;
    }
    return message + " " + where;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(formatError, "formatError");
function YAMLException$1(reason, mark) {
    Error.call(this);
    this.name = "YAMLException";
    this.reason = reason;
    this.mark = mark;
    this.message = formatError(this, false);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = new Error().stack || "";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(YAMLException$1, "YAMLException$1");
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function toString(compact) {
    return this.name + ": " + formatError(this, compact);
}, "toString");
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
    var head = "";
    var tail = "";
    var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
    if (position - lineStart > maxHalfLength) {
        head = " ... ";
        lineStart = position - maxHalfLength + head.length;
    }
    if (lineEnd - position > maxHalfLength) {
        tail = " ...";
        lineEnd = position + maxHalfLength - tail.length;
    }
    return {
        str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
        pos: position - lineStart + head.length
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(getLine, "getLine");
function padStart(string, max) {
    return common.repeat(" ", max - string.length) + string;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(padStart, "padStart");
function makeSnippet(mark, options) {
    options = Object.create(options || null);
    if (!mark.buffer) return null;
    if (!options.maxLength) options.maxLength = 79;
    if (typeof options.indent !== "number") options.indent = 1;
    if (typeof options.linesBefore !== "number") options.linesBefore = 3;
    if (typeof options.linesAfter !== "number") options.linesAfter = 2;
    var re = /\r?\n|\r|\0/g;
    var lineStarts = [
        0
    ];
    var lineEnds = [];
    var match;
    var foundLineNo = -1;
    while(match = re.exec(mark.buffer)){
        lineEnds.push(match.index);
        lineStarts.push(match.index + match[0].length);
        if (mark.position <= match.index && foundLineNo < 0) {
            foundLineNo = lineStarts.length - 2;
        }
    }
    if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
    var result = "", i, line;
    var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
    var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
    for(i = 1; i <= options.linesBefore; i++){
        if (foundLineNo - i < 0) break;
        line = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
        result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
    }
    line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
    result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
    for(i = 1; i <= options.linesAfter; i++){
        if (foundLineNo + i >= lineEnds.length) break;
        line = getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
        result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    }
    return result.replace(/\n$/, "");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(makeSnippet, "makeSnippet");
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
];
var YAML_NODE_KINDS = [
    "scalar",
    "sequence",
    "mapping"
];
function compileStyleAliases(map2) {
    var result = {};
    if (map2 !== null) {
        Object.keys(map2).forEach(function(style) {
            map2[style].forEach(function(alias) {
                result[String(alias)] = style;
            });
        });
    }
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(compileStyleAliases, "compileStyleAliases");
function Type$1(tag, options) {
    options = options || {};
    Object.keys(options).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
            throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
    });
    this.options = options;
    this.tag = tag;
    this.kind = options["kind"] || null;
    this.resolve = options["resolve"] || function() {
        return true;
    };
    this.construct = options["construct"] || function(data) {
        return data;
    };
    this.instanceOf = options["instanceOf"] || null;
    this.predicate = options["predicate"] || null;
    this.represent = options["represent"] || null;
    this.representName = options["representName"] || null;
    this.defaultStyle = options["defaultStyle"] || null;
    this.multi = options["multi"] || false;
    this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(Type$1, "Type$1");
var type = Type$1;
function compileList(schema2, name) {
    var result = [];
    schema2[name].forEach(function(currentType) {
        var newIndex = result.length;
        result.forEach(function(previousType, previousIndex) {
            if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
                newIndex = previousIndex;
            }
        });
        result[newIndex] = currentType;
    });
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(compileList, "compileList");
function compileMap() {
    var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
            scalar: [],
            sequence: [],
            mapping: [],
            fallback: []
        }
    }, index, length;
    function collectType(type2) {
        if (type2.multi) {
            result.multi[type2.kind].push(type2);
            result.multi["fallback"].push(type2);
        } else {
            result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(collectType, "collectType");
    for(index = 0, length = arguments.length; index < length; index += 1){
        arguments[index].forEach(collectType);
    }
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(compileMap, "compileMap");
function Schema$1(definition) {
    return this.extend(definition);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(Schema$1, "Schema$1");
Schema$1.prototype.extend = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function extend2(definition) {
    var implicit = [];
    var explicit = [];
    if (definition instanceof type) {
        explicit.push(definition);
    } else if (Array.isArray(definition)) {
        explicit = explicit.concat(definition);
    } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
        if (definition.implicit) implicit = implicit.concat(definition.implicit);
        if (definition.explicit) explicit = explicit.concat(definition.explicit);
    } else {
        throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    }
    implicit.forEach(function(type$1) {
        if (!(type$1 instanceof type)) {
            throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        }
        if (type$1.loadKind && type$1.loadKind !== "scalar") {
            throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        }
        if (type$1.multi) {
            throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
        }
    });
    explicit.forEach(function(type$1) {
        if (!(type$1 instanceof type)) {
            throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        }
    });
    var result = Object.create(Schema$1.prototype);
    result.implicit = (this.implicit || []).concat(implicit);
    result.explicit = (this.explicit || []).concat(explicit);
    result.compiledImplicit = compileList(result, "implicit");
    result.compiledExplicit = compileList(result, "explicit");
    result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
    return result;
}, "extend");
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(data) {
        return data !== null ? data : "";
    }, "construct")
});
var seq = new type("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(data) {
        return data !== null ? data : [];
    }, "construct")
});
var map = new type("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(data) {
        return data !== null ? data : {};
    }, "construct")
});
var failsafe = new schema({
    explicit: [
        str,
        seq,
        map
    ]
});
function resolveYamlNull(data) {
    if (data === null) return true;
    var max = data.length;
    return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(resolveYamlNull, "resolveYamlNull");
function constructYamlNull() {
    return null;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(constructYamlNull, "constructYamlNull");
function isNull(object) {
    return object === null;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isNull, "isNull");
var _null = new type("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
        canonical: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function() {
            return "~";
        }, "canonical"),
        lowercase: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function() {
            return "null";
        }, "lowercase"),
        uppercase: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function() {
            return "NULL";
        }, "uppercase"),
        camelcase: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function() {
            return "Null";
        }, "camelcase"),
        empty: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function() {
            return "";
        }, "empty")
    },
    defaultStyle: "lowercase"
});
function resolveYamlBoolean(data) {
    if (data === null) return false;
    var max = data.length;
    return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(resolveYamlBoolean, "resolveYamlBoolean");
function constructYamlBoolean(data) {
    return data === "true" || data === "True" || data === "TRUE";
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(constructYamlBoolean, "constructYamlBoolean");
function isBoolean(object) {
    return Object.prototype.toString.call(object) === "[object Boolean]";
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isBoolean, "isBoolean");
var bool = new type("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
        lowercase: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(object) {
            return object ? "true" : "false";
        }, "lowercase"),
        uppercase: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(object) {
            return object ? "TRUE" : "FALSE";
        }, "uppercase"),
        camelcase: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(object) {
            return object ? "True" : "False";
        }, "camelcase")
    },
    defaultStyle: "lowercase"
});
function isHexCode(c) {
    return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isHexCode, "isHexCode");
function isOctCode(c) {
    return 48 <= c && c <= 55;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isOctCode, "isOctCode");
function isDecCode(c) {
    return 48 <= c && c <= 57;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isDecCode, "isDecCode");
function resolveYamlInteger(data) {
    if (data === null) return false;
    var max = data.length, index = 0, hasDigits = false, ch;
    if (!max) return false;
    ch = data[index];
    if (ch === "-" || ch === "+") {
        ch = data[++index];
    }
    if (ch === "0") {
        if (index + 1 === max) return true;
        ch = data[++index];
        if (ch === "b") {
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (ch !== "0" && ch !== "1") return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
        if (ch === "x") {
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (!isHexCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
        if (ch === "o") {
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (!isOctCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
    }
    if (ch === "_") return false;
    for(; index < max; index++){
        ch = data[index];
        if (ch === "_") continue;
        if (!isDecCode(data.charCodeAt(index))) {
            return false;
        }
        hasDigits = true;
    }
    if (!hasDigits || ch === "_") return false;
    return true;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(resolveYamlInteger, "resolveYamlInteger");
function constructYamlInteger(data) {
    var value = data, sign = 1, ch;
    if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, "");
    }
    ch = value[0];
    if (ch === "-" || ch === "+") {
        if (ch === "-") sign = -1;
        value = value.slice(1);
        ch = value[0];
    }
    if (value === "0") return 0;
    if (ch === "0") {
        if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x") return sign * parseInt(value.slice(2), 16);
        if (value[1] === "o") return sign * parseInt(value.slice(2), 8);
    }
    return sign * parseInt(value, 10);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(constructYamlInteger, "constructYamlInteger");
function isInteger(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && object % 1 === 0 && !common.isNegativeZero(object);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isInteger, "isInteger");
var int = new type("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: resolveYamlInteger,
    construct: constructYamlInteger,
    predicate: isInteger,
    represent: {
        binary: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(obj) {
            return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        }, "binary"),
        octal: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(obj) {
            return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
        }, "octal"),
        decimal: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(obj) {
            return obj.toString(10);
        }, "decimal"),
        /* eslint-disable max-len */ hexadecimal: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(obj) {
            return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }, "hexadecimal")
    },
    defaultStyle: "decimal",
    styleAliases: {
        binary: [
            2,
            "bin"
        ],
        octal: [
            8,
            "oct"
        ],
        decimal: [
            10,
            "dec"
        ],
        hexadecimal: [
            16,
            "hex"
        ]
    }
});
var YAML_FLOAT_PATTERN = new RegExp(// 2.5e4, 2.5 and integers
"^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat(data) {
    if (data === null) return false;
    if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    data[data.length - 1] === "_") {
        return false;
    }
    return true;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(resolveYamlFloat, "resolveYamlFloat");
function constructYamlFloat(data) {
    var value, sign;
    value = data.replace(/_/g, "").toLowerCase();
    sign = value[0] === "-" ? -1 : 1;
    if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
    }
    if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    } else if (value === ".nan") {
        return NaN;
    }
    return sign * parseFloat(value, 10);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(constructYamlFloat, "constructYamlFloat");
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
    var res;
    if (isNaN(object)) {
        switch(style){
            case "lowercase":
                return ".nan";
            case "uppercase":
                return ".NAN";
            case "camelcase":
                return ".NaN";
        }
    } else if (Number.POSITIVE_INFINITY === object) {
        switch(style){
            case "lowercase":
                return ".inf";
            case "uppercase":
                return ".INF";
            case "camelcase":
                return ".Inf";
        }
    } else if (Number.NEGATIVE_INFINITY === object) {
        switch(style){
            case "lowercase":
                return "-.inf";
            case "uppercase":
                return "-.INF";
            case "camelcase":
                return "-.Inf";
        }
    } else if (common.isNegativeZero(object)) {
        return "-0.0";
    }
    res = object.toString(10);
    return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(representYamlFloat, "representYamlFloat");
function isFloat(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isFloat, "isFloat");
var float = new type("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: resolveYamlFloat,
    construct: constructYamlFloat,
    predicate: isFloat,
    represent: representYamlFloat,
    defaultStyle: "lowercase"
});
var json = failsafe.extend({
    implicit: [
        _null,
        bool,
        int,
        float
    ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function resolveYamlTimestamp(data) {
    if (data === null) return false;
    if (YAML_DATE_REGEXP.exec(data) !== null) return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
    return false;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(resolveYamlTimestamp, "resolveYamlTimestamp");
function constructYamlTimestamp(data) {
    var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
    match = YAML_DATE_REGEXP.exec(data);
    if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
    if (match === null) throw new Error("Date resolve error");
    year = +match[1];
    month = +match[2] - 1;
    day = +match[3];
    if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
    }
    hour = +match[4];
    minute = +match[5];
    second = +match[6];
    if (match[7]) {
        fraction = match[7].slice(0, 3);
        while(fraction.length < 3){
            fraction += "0";
        }
        fraction = +fraction;
    }
    if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match[9] === "-") delta = -delta;
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta) date.setTime(date.getTime() - delta);
    return date;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(constructYamlTimestamp, "constructYamlTimestamp");
function representYamlTimestamp(object) {
    return object.toISOString();
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(representYamlTimestamp, "representYamlTimestamp");
var timestamp = new type("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
    return data === "<<" || data === null;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(resolveYamlMerge, "resolveYamlMerge");
var merge = new type("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: resolveYamlMerge
});
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
    if (data === null) return false;
    var code, idx, bitlen = 0, max = data.length, map2 = BASE64_MAP;
    for(idx = 0; idx < max; idx++){
        code = map2.indexOf(data.charAt(idx));
        if (code > 64) continue;
        if (code < 0) return false;
        bitlen += 6;
    }
    return bitlen % 8 === 0;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(resolveYamlBinary, "resolveYamlBinary");
function constructYamlBinary(data) {
    var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map2 = BASE64_MAP, bits = 0, result = [];
    for(idx = 0; idx < max; idx++){
        if (idx % 4 === 0 && idx) {
            result.push(bits >> 16 & 255);
            result.push(bits >> 8 & 255);
            result.push(bits & 255);
        }
        bits = bits << 6 | map2.indexOf(input.charAt(idx));
    }
    tailbits = max % 4 * 6;
    if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
    } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
    } else if (tailbits === 12) {
        result.push(bits >> 4 & 255);
    }
    return new Uint8Array(result);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(constructYamlBinary, "constructYamlBinary");
function representYamlBinary(object) {
    var result = "", bits = 0, idx, tail, max = object.length, map2 = BASE64_MAP;
    for(idx = 0; idx < max; idx++){
        if (idx % 3 === 0 && idx) {
            result += map2[bits >> 18 & 63];
            result += map2[bits >> 12 & 63];
            result += map2[bits >> 6 & 63];
            result += map2[bits & 63];
        }
        bits = (bits << 8) + object[idx];
    }
    tail = max % 3;
    if (tail === 0) {
        result += map2[bits >> 18 & 63];
        result += map2[bits >> 12 & 63];
        result += map2[bits >> 6 & 63];
        result += map2[bits & 63];
    } else if (tail === 2) {
        result += map2[bits >> 10 & 63];
        result += map2[bits >> 4 & 63];
        result += map2[bits << 2 & 63];
        result += map2[64];
    } else if (tail === 1) {
        result += map2[bits >> 2 & 63];
        result += map2[bits << 4 & 63];
        result += map2[64];
        result += map2[64];
    }
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(representYamlBinary, "representYamlBinary");
function isBinary(obj) {
    return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isBinary, "isBinary");
var binary = new type("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
    if (data === null) return true;
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        pairHasKey = false;
        if (_toString$2.call(pair) !== "[object Object]") return false;
        for(pairKey in pair){
            if (_hasOwnProperty$3.call(pair, pairKey)) {
                if (!pairHasKey) pairHasKey = true;
                else return false;
            }
        }
        if (!pairHasKey) return false;
        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
        else return false;
    }
    return true;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(resolveYamlOmap, "resolveYamlOmap");
function constructYamlOmap(data) {
    return data !== null ? data : [];
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(constructYamlOmap, "constructYamlOmap");
var omap = new type("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
    if (data === null) return true;
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        if (_toString$1.call(pair) !== "[object Object]") return false;
        keys = Object.keys(pair);
        if (keys.length !== 1) return false;
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return true;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(resolveYamlPairs, "resolveYamlPairs");
function constructYamlPairs(data) {
    if (data === null) return [];
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(constructYamlPairs, "constructYamlPairs");
var pairs = new type("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
    if (data === null) return true;
    var key, object = data;
    for(key in object){
        if (_hasOwnProperty$2.call(object, key)) {
            if (object[key] !== null) return false;
        }
    }
    return true;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(resolveYamlSet, "resolveYamlSet");
function constructYamlSet(data) {
    return data !== null ? data : {};
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(constructYamlSet, "constructYamlSet");
var set = new type("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: resolveYamlSet,
    construct: constructYamlSet
});
var _default = core.extend({
    implicit: [
        timestamp,
        merge
    ],
    explicit: [
        binary,
        omap,
        pairs,
        set
    ]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
    return Object.prototype.toString.call(obj);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(_class, "_class");
function is_EOL(c) {
    return c === 10 || c === 13;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(is_EOL, "is_EOL");
function is_WHITE_SPACE(c) {
    return c === 9 || c === 32;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(is_WHITE_SPACE, "is_WHITE_SPACE");
function is_WS_OR_EOL(c) {
    return c === 9 || c === 32 || c === 10 || c === 13;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(is_WS_OR_EOL, "is_WS_OR_EOL");
function is_FLOW_INDICATOR(c) {
    return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(is_FLOW_INDICATOR, "is_FLOW_INDICATOR");
function fromHexCode(c) {
    var lc;
    if (48 <= c && c <= 57) {
        return c - 48;
    }
    lc = c | 32;
    if (97 <= lc && lc <= 102) {
        return lc - 97 + 10;
    }
    return -1;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(fromHexCode, "fromHexCode");
function escapedHexLen(c) {
    if (c === 120) {
        return 2;
    }
    if (c === 117) {
        return 4;
    }
    if (c === 85) {
        return 8;
    }
    return 0;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(escapedHexLen, "escapedHexLen");
function fromDecimalCode(c) {
    if (48 <= c && c <= 57) {
        return c - 48;
    }
    return -1;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(fromDecimalCode, "fromDecimalCode");
function simpleEscapeSequence(c) {
    return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(simpleEscapeSequence, "simpleEscapeSequence");
function charFromCodepoint(c) {
    if (c <= 65535) {
        return String.fromCharCode(c);
    }
    return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(charFromCodepoint, "charFromCodepoint");
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for(i = 0; i < 256; i++){
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
}
var i;
function State$1(input, options) {
    this.input = input;
    this.filename = options["filename"] || null;
    this.schema = options["schema"] || _default;
    this.onWarning = options["onWarning"] || null;
    this.legacy = options["legacy"] || false;
    this.json = options["json"] || false;
    this.listener = options["listener"] || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.firstTabInLine = -1;
    this.documents = [];
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(State$1, "State$1");
function generateError(state, message) {
    var mark = {
        name: state.filename,
        buffer: state.input.slice(0, -1),
        // omit trailing \0
        position: state.position,
        line: state.line,
        column: state.position - state.lineStart
    };
    mark.snippet = snippet(mark);
    return new exception(message, mark);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(generateError, "generateError");
function throwError(state, message) {
    throw generateError(state, message);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(throwError, "throwError");
function throwWarning(state, message) {
    if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(throwWarning, "throwWarning");
var directiveHandlers = {
    YAML: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
            throwError(state, "duplication of %YAML directive");
        }
        if (args.length !== 1) {
            throwError(state, "YAML directive accepts exactly one argument");
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
            throwError(state, "ill-formed argument of the YAML directive");
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
            throwError(state, "unacceptable YAML version of the document");
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
            throwWarning(state, "unsupported YAML version of the document");
        }
    }, "handleYamlDirective"),
    TAG: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
            throwError(state, "TAG directive accepts exactly two arguments");
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
            throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
        }
        if (_hasOwnProperty$1.call(state.tagMap, handle)) {
            throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
            throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
        }
        try {
            prefix = decodeURIComponent(prefix);
        } catch (err) {
            throwError(state, "tag prefix is malformed: " + prefix);
        }
        state.tagMap[handle] = prefix;
    }, "handleTagDirective")
};
function captureSegment(state, start, end, checkJson) {
    var _position, _length, _character, _result;
    if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
            for(_position = 0, _length = _result.length; _position < _length; _position += 1){
                _character = _result.charCodeAt(_position);
                if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
                    throwError(state, "expected valid JSON character");
                }
            }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
            throwError(state, "the stream contains non-printable characters");
        }
        state.result += _result;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(captureSegment, "captureSegment");
function mergeMappings(state, destination, source, overridableKeys) {
    var sourceKeys, key, index, quantity;
    if (!common.isObject(source)) {
        throwError(state, "cannot merge mappings; the provided source object is unacceptable");
    }
    sourceKeys = Object.keys(source);
    for(index = 0, quantity = sourceKeys.length; index < quantity; index += 1){
        key = sourceKeys[index];
        if (!_hasOwnProperty$1.call(destination, key)) {
            destination[key] = source[key];
            overridableKeys[key] = true;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(mergeMappings, "mergeMappings");
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
    var index, quantity;
    if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for(index = 0, quantity = keyNode.length; index < quantity; index += 1){
            if (Array.isArray(keyNode[index])) {
                throwError(state, "nested arrays are not supported inside keys");
            }
            if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
                keyNode[index] = "[object Object]";
            }
        }
    }
    if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
    }
    keyNode = String(keyNode);
    if (_result === null) {
        _result = {};
    }
    if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
            for(index = 0, quantity = valueNode.length; index < quantity; index += 1){
                mergeMappings(state, _result, valueNode[index], overridableKeys);
            }
        } else {
            mergeMappings(state, _result, valueNode, overridableKeys);
        }
    } else {
        if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
            state.line = startLine || state.line;
            state.lineStart = startLineStart || state.lineStart;
            state.position = startPos || state.position;
            throwError(state, "duplicated mapping key");
        }
        if (keyNode === "__proto__") {
            Object.defineProperty(_result, keyNode, {
                configurable: true,
                enumerable: true,
                writable: true,
                value: valueNode
            });
        } else {
            _result[keyNode] = valueNode;
        }
        delete overridableKeys[keyNode];
    }
    return _result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(storeMappingPair, "storeMappingPair");
function readLineBreak(state) {
    var ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 10) {
        state.position++;
    } else if (ch === 13) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 10) {
            state.position++;
        }
    } else {
        throwError(state, "a line break is expected");
    }
    state.line += 1;
    state.lineStart = state.position;
    state.firstTabInLine = -1;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readLineBreak, "readLineBreak");
function skipSeparationSpace(state, allowComments, checkIndent) {
    var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        while(is_WHITE_SPACE(ch)){
            if (ch === 9 && state.firstTabInLine === -1) {
                state.firstTabInLine = state.position;
            }
            ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 35) {
            do {
                ch = state.input.charCodeAt(++state.position);
            }while (ch !== 10 && ch !== 13 && ch !== 0)
        }
        if (is_EOL(ch)) {
            readLineBreak(state);
            ch = state.input.charCodeAt(state.position);
            lineBreaks++;
            state.lineIndent = 0;
            while(ch === 32){
                state.lineIndent++;
                ch = state.input.charCodeAt(++state.position);
            }
        } else {
            break;
        }
    }
    if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, "deficient indentation");
    }
    return lineBreaks;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(skipSeparationSpace, "skipSeparationSpace");
function testDocumentSeparator(state) {
    var _position = state.position, ch;
    ch = state.input.charCodeAt(_position);
    if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
            return true;
        }
    }
    return false;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(testDocumentSeparator, "testDocumentSeparator");
function writeFoldedLines(state, count) {
    if (count === 1) {
        state.result += " ";
    } else if (count > 1) {
        state.result += common.repeat("\n", count - 1);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(writeFoldedLines, "writeFoldedLines");
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
    var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
    ch = state.input.charCodeAt(state.position);
    if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
        return false;
    }
    if (ch === 63 || ch === 45) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            return false;
        }
    }
    state.kind = "scalar";
    state.result = "";
    captureStart = captureEnd = state.position;
    hasPendingContent = false;
    while(ch !== 0){
        if (ch === 58) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
                break;
            }
        } else if (ch === 35) {
            preceding = state.input.charCodeAt(state.position - 1);
            if (is_WS_OR_EOL(preceding)) {
                break;
            }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
            break;
        } else if (is_EOL(ch)) {
            _line = state.line;
            _lineStart = state.lineStart;
            _lineIndent = state.lineIndent;
            skipSeparationSpace(state, false, -1);
            if (state.lineIndent >= nodeIndent) {
                hasPendingContent = true;
                ch = state.input.charCodeAt(state.position);
                continue;
            } else {
                state.position = captureEnd;
                state.line = _line;
                state.lineStart = _lineStart;
                state.lineIndent = _lineIndent;
                break;
            }
        }
        if (hasPendingContent) {
            captureSegment(state, captureStart, captureEnd, false);
            writeFoldedLines(state, state.line - _line);
            captureStart = captureEnd = state.position;
            hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
            captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, captureEnd, false);
    if (state.result) {
        return true;
    }
    state.kind = _kind;
    state.result = _result;
    return false;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readPlainScalar, "readPlainScalar");
function readSingleQuotedScalar(state, nodeIndent) {
    var ch, captureStart, captureEnd;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 39) {
        return false;
    }
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        if (ch === 39) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (ch === 39) {
                captureStart = state.position;
                state.position++;
                captureEnd = state.position;
            } else {
                return true;
            }
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, "unexpected end of the document within a single quoted scalar");
        } else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, "unexpected end of the stream within a single quoted scalar");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readSingleQuotedScalar, "readSingleQuotedScalar");
function readDoubleQuotedScalar(state, nodeIndent) {
    var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 34) {
        return false;
    }
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        if (ch === 34) {
            captureSegment(state, captureStart, state.position, true);
            state.position++;
            return true;
        } else if (ch === 92) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (is_EOL(ch)) {
                skipSeparationSpace(state, false, nodeIndent);
            } else if (ch < 256 && simpleEscapeCheck[ch]) {
                state.result += simpleEscapeMap[ch];
                state.position++;
            } else if ((tmp = escapedHexLen(ch)) > 0) {
                hexLength = tmp;
                hexResult = 0;
                for(; hexLength > 0; hexLength--){
                    ch = state.input.charCodeAt(++state.position);
                    if ((tmp = fromHexCode(ch)) >= 0) {
                        hexResult = (hexResult << 4) + tmp;
                    } else {
                        throwError(state, "expected hexadecimal character");
                    }
                }
                state.result += charFromCodepoint(hexResult);
                state.position++;
            } else {
                throwError(state, "unknown escape sequence");
            }
            captureStart = captureEnd = state.position;
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, "unexpected end of the document within a double quoted scalar");
        } else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, "unexpected end of the stream within a double quoted scalar");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readDoubleQuotedScalar, "readDoubleQuotedScalar");
function readFlowCollection(state, nodeIndent) {
    var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 91) {
        terminator = 93;
        isMapping = false;
        _result = [];
    } else if (ch === 123) {
        terminator = 125;
        isMapping = true;
        _result = {};
    } else {
        return false;
    }
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(++state.position);
    while(ch !== 0){
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
            state.position++;
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = isMapping ? "mapping" : "sequence";
            state.result = _result;
            return true;
        } else if (!readNext) {
            throwError(state, "missed comma between flow collection entries");
        } else if (ch === 44) {
            throwError(state, "expected the node content, but found ','");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following)) {
                isPair = isExplicitPair = true;
                state.position++;
                skipSeparationSpace(state, true, nodeIndent);
            }
        }
        _line = state.line;
        _lineStart = state.lineStart;
        _pos = state.position;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 58) {
            isPair = true;
            ch = state.input.charCodeAt(++state.position);
            skipSeparationSpace(state, true, nodeIndent);
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
            valueNode = state.result;
        }
        if (isMapping) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
        } else if (isPair) {
            _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
        } else {
            _result.push(keyNode);
        }
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 44) {
            readNext = true;
            ch = state.input.charCodeAt(++state.position);
        } else {
            readNext = false;
        }
    }
    throwError(state, "unexpected end of the stream within a flow collection");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readFlowCollection, "readFlowCollection");
function readBlockScalar(state, nodeIndent) {
    var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 124) {
        folding = false;
    } else if (ch === 62) {
        folding = true;
    } else {
        return false;
    }
    state.kind = "scalar";
    state.result = "";
    while(ch !== 0){
        ch = state.input.charCodeAt(++state.position);
        if (ch === 43 || ch === 45) {
            if (CHOMPING_CLIP === chomping) {
                chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
            } else {
                throwError(state, "repeat of a chomping mode identifier");
            }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) {
                throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
            } else if (!detectedIndent) {
                textIndent = nodeIndent + tmp - 1;
                detectedIndent = true;
            } else {
                throwError(state, "repeat of an indentation width identifier");
            }
        } else {
            break;
        }
    }
    if (is_WHITE_SPACE(ch)) {
        do {
            ch = state.input.charCodeAt(++state.position);
        }while (is_WHITE_SPACE(ch))
        if (ch === 35) {
            do {
                ch = state.input.charCodeAt(++state.position);
            }while (!is_EOL(ch) && ch !== 0)
        }
    }
    while(ch !== 0){
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while((!detectedIndent || state.lineIndent < textIndent) && ch === 32){
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
            textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
            emptyLines++;
            continue;
        }
        if (state.lineIndent < textIndent) {
            if (chomping === CHOMPING_KEEP) {
                state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            } else if (chomping === CHOMPING_CLIP) {
                if (didReadContent) {
                    state.result += "\n";
                }
            }
            break;
        }
        if (folding) {
            if (is_WHITE_SPACE(ch)) {
                atMoreIndented = true;
                state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            } else if (atMoreIndented) {
                atMoreIndented = false;
                state.result += common.repeat("\n", emptyLines + 1);
            } else if (emptyLines === 0) {
                if (didReadContent) {
                    state.result += " ";
                }
            } else {
                state.result += common.repeat("\n", emptyLines);
            }
        } else {
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while(!is_EOL(ch) && ch !== 0){
            ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false);
    }
    return true;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readBlockScalar, "readBlockScalar");
function readBlockSequence(state, nodeIndent) {
    var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
    if (state.firstTabInLine !== -1) return false;
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        if (state.firstTabInLine !== -1) {
            state.position = state.firstTabInLine;
            throwError(state, "tab characters must not be used in indentation");
        }
        if (ch !== 45) {
            break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
            break;
        }
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
            if (state.lineIndent <= nodeIndent) {
                _result.push(null);
                ch = state.input.charCodeAt(state.position);
                continue;
            }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
            throwError(state, "bad indentation of a sequence entry");
        } else if (state.lineIndent < nodeIndent) {
            break;
        }
    }
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "sequence";
        state.result = _result;
        return true;
    }
    return false;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readBlockSequence, "readBlockSequence");
function readBlockMapping(state, nodeIndent, flowIndent) {
    var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
    if (state.firstTabInLine !== -1) return false;
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        if (!atExplicitKey && state.firstTabInLine !== -1) {
            state.position = state.firstTabInLine;
            throwError(state, "tab characters must not be used in indentation");
        }
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line;
        if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
            if (ch === 63) {
                if (atExplicitKey) {
                    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                    keyTag = keyNode = valueNode = null;
                }
                detected = true;
                atExplicitKey = true;
                allowCompact = true;
            } else if (atExplicitKey) {
                atExplicitKey = false;
                allowCompact = true;
            } else {
                throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
            }
            state.position += 1;
            ch = following;
        } else {
            _keyLine = state.line;
            _keyLineStart = state.lineStart;
            _keyPos = state.position;
            if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
                break;
            }
            if (state.line === _line) {
                ch = state.input.charCodeAt(state.position);
                while(is_WHITE_SPACE(ch)){
                    ch = state.input.charCodeAt(++state.position);
                }
                if (ch === 58) {
                    ch = state.input.charCodeAt(++state.position);
                    if (!is_WS_OR_EOL(ch)) {
                        throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
                    }
                    if (atExplicitKey) {
                        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                        keyTag = keyNode = valueNode = null;
                    }
                    detected = true;
                    atExplicitKey = false;
                    allowCompact = false;
                    keyTag = state.tag;
                    keyNode = state.result;
                } else if (detected) {
                    throwError(state, "can not read an implicit mapping pair; a colon is missed");
                } else {
                    state.tag = _tag;
                    state.anchor = _anchor;
                    return true;
                }
            } else if (detected) {
                throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
            } else {
                state.tag = _tag;
                state.anchor = _anchor;
                return true;
            }
        }
        if (state.line === _line || state.lineIndent > nodeIndent) {
            if (atExplicitKey) {
                _keyLine = state.line;
                _keyLineStart = state.lineStart;
                _keyPos = state.position;
            }
            if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
                if (atExplicitKey) {
                    keyNode = state.result;
                } else {
                    valueNode = state.result;
                }
            }
            if (!atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
                keyTag = keyNode = valueNode = null;
            }
            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
        }
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
            throwError(state, "bad indentation of a mapping entry");
        } else if (state.lineIndent < nodeIndent) {
            break;
        }
    }
    if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
    }
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "mapping";
        state.result = _result;
    }
    return detected;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readBlockMapping, "readBlockMapping");
function readTagProperty(state) {
    var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 33) return false;
    if (state.tag !== null) {
        throwError(state, "duplication of a tag property");
    }
    ch = state.input.charCodeAt(++state.position);
    if (ch === 60) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
    } else if (ch === 33) {
        isNamed = true;
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position);
    } else {
        tagHandle = "!";
    }
    _position = state.position;
    if (isVerbatim) {
        do {
            ch = state.input.charCodeAt(++state.position);
        }while (ch !== 0 && ch !== 62)
        if (state.position < state.length) {
            tagName = state.input.slice(_position, state.position);
            ch = state.input.charCodeAt(++state.position);
        } else {
            throwError(state, "unexpected end of the stream within a verbatim tag");
        }
    } else {
        while(ch !== 0 && !is_WS_OR_EOL(ch)){
            if (ch === 33) {
                if (!isNamed) {
                    tagHandle = state.input.slice(_position - 1, state.position + 1);
                    if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                        throwError(state, "named tag handle cannot contain such characters");
                    }
                    isNamed = true;
                    _position = state.position + 1;
                } else {
                    throwError(state, "tag suffix cannot contain exclamation marks");
                }
            }
            ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
            throwError(state, "tag suffix cannot contain flow indicator characters");
        }
    }
    if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, "tag name cannot contain such characters: " + tagName);
    }
    try {
        tagName = decodeURIComponent(tagName);
    } catch (err) {
        throwError(state, "tag name is malformed: " + tagName);
    }
    if (isVerbatim) {
        state.tag = tagName;
    } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
    } else if (tagHandle === "!") {
        state.tag = "!" + tagName;
    } else if (tagHandle === "!!") {
        state.tag = "tag:yaml.org,2002:" + tagName;
    } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
    }
    return true;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readTagProperty, "readTagProperty");
function readAnchorProperty(state) {
    var _position, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 38) return false;
    if (state.anchor !== null) {
        throwError(state, "duplication of an anchor property");
    }
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while(ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)){
        ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
        throwError(state, "name of an anchor node must contain at least one character");
    }
    state.anchor = state.input.slice(_position, state.position);
    return true;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readAnchorProperty, "readAnchorProperty");
function readAlias(state) {
    var _position, alias, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 42) return false;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while(ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)){
        ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
        throwError(state, "name of an alias node must contain at least one character");
    }
    alias = state.input.slice(_position, state.position);
    if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
    }
    state.result = state.anchorMap[alias];
    skipSeparationSpace(state, true, -1);
    return true;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readAlias, "readAlias");
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
    if (state.listener !== null) {
        state.listener("open", state);
    }
    state.tag = null;
    state.anchor = null;
    state.kind = null;
    state.result = null;
    allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
    if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            if (state.lineIndent > parentIndent) {
                indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
                indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
                indentStatus = -1;
            }
        }
    }
    if (indentStatus === 1) {
        while(readTagProperty(state) || readAnchorProperty(state)){
            if (skipSeparationSpace(state, true, -1)) {
                atNewLine = true;
                allowBlockCollections = allowBlockStyles;
                if (state.lineIndent > parentIndent) {
                    indentStatus = 1;
                } else if (state.lineIndent === parentIndent) {
                    indentStatus = 0;
                } else if (state.lineIndent < parentIndent) {
                    indentStatus = -1;
                }
            } else {
                allowBlockCollections = false;
            }
        }
    }
    if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
    }
    if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
            flowIndent = parentIndent;
        } else {
            flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
            if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
                hasContent = true;
            } else {
                if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
                    hasContent = true;
                } else if (readAlias(state)) {
                    hasContent = true;
                    if (state.tag !== null || state.anchor !== null) {
                        throwError(state, "alias node should not have any properties");
                    }
                } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                    hasContent = true;
                    if (state.tag === null) {
                        state.tag = "?";
                    }
                }
                if (state.anchor !== null) {
                    state.anchorMap[state.anchor] = state.result;
                }
            }
        } else if (indentStatus === 0) {
            hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
    }
    if (state.tag === null) {
        if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
        }
    } else if (state.tag === "?") {
        if (state.result !== null && state.kind !== "scalar") {
            throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
        }
        for(typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1){
            type2 = state.implicitTypes[typeIndex];
            if (type2.resolve(state.result)) {
                state.result = type2.construct(state.result);
                state.tag = type2.tag;
                if (state.anchor !== null) {
                    state.anchorMap[state.anchor] = state.result;
                }
                break;
            }
        }
    } else if (state.tag !== "!") {
        if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
            type2 = state.typeMap[state.kind || "fallback"][state.tag];
        } else {
            type2 = null;
            typeList = state.typeMap.multi[state.kind || "fallback"];
            for(typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1){
                if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
                    type2 = typeList[typeIndex];
                    break;
                }
            }
        }
        if (!type2) {
            throwError(state, "unknown tag !<" + state.tag + ">");
        }
        if (state.result !== null && type2.kind !== state.kind) {
            throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
        }
        if (!type2.resolve(state.result, state.tag)) {
            throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
        } else {
            state.result = type2.construct(state.result, state.tag);
            if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
            }
        }
    }
    if (state.listener !== null) {
        state.listener("close", state);
    }
    return state.tag !== null || state.anchor !== null || hasContent;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(composeNode, "composeNode");
function readDocument(state) {
    var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
    state.version = null;
    state.checkLineBreaks = state.legacy;
    state.tagMap = /* @__PURE__ */ Object.create(null);
    state.anchorMap = /* @__PURE__ */ Object.create(null);
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 37) {
            break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while(ch !== 0 && !is_WS_OR_EOL(ch)){
            ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
            throwError(state, "directive name must not be less than one character in length");
        }
        while(ch !== 0){
            while(is_WHITE_SPACE(ch)){
                ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 35) {
                do {
                    ch = state.input.charCodeAt(++state.position);
                }while (ch !== 0 && !is_EOL(ch))
                break;
            }
            if (is_EOL(ch)) break;
            _position = state.position;
            while(ch !== 0 && !is_WS_OR_EOL(ch)){
                ch = state.input.charCodeAt(++state.position);
            }
            directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0) readLineBreak(state);
        if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
            directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
            throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
    }
    skipSeparationSpace(state, true, -1);
    if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) {
        throwError(state, "directives end mark is expected");
    }
    composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
    skipSeparationSpace(state, true, -1);
    if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, "non-ASCII line breaks are interpreted as content");
    }
    state.documents.push(state.result);
    if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 46) {
            state.position += 3;
            skipSeparationSpace(state, true, -1);
        }
        return;
    }
    if (state.position < state.length - 1) {
        throwError(state, "end of the stream or a document separator is expected");
    } else {
        return;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(readDocument, "readDocument");
function loadDocuments(input, options) {
    input = String(input);
    options = options || {};
    if (input.length !== 0) {
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
            input += "\n";
        }
        if (input.charCodeAt(0) === 65279) {
            input = input.slice(1);
        }
    }
    var state = new State$1(input, options);
    var nullpos = input.indexOf("\0");
    if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, "null byte is not allowed in input");
    }
    state.input += "\0";
    while(state.input.charCodeAt(state.position) === 32){
        state.lineIndent += 1;
        state.position += 1;
    }
    while(state.position < state.length - 1){
        readDocument(state);
    }
    return state.documents;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(loadDocuments, "loadDocuments");
function loadAll$1(input, iterator, options) {
    if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
        options = iterator;
        iterator = null;
    }
    var documents = loadDocuments(input, options);
    if (typeof iterator !== "function") {
        return documents;
    }
    for(var index = 0, length = documents.length; index < length; index += 1){
        iterator(documents[index]);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(loadAll$1, "loadAll$1");
function load$1(input, options) {
    var documents = loadDocuments(input, options);
    if (documents.length === 0) {
        return void 0;
    } else if (documents.length === 1) {
        return documents[0];
    }
    throw new exception("expected a single document in the stream, but found more");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(load$1, "load$1");
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
    loadAll: loadAll_1,
    load: load_1
};
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_BOM = 65279;
var CHAR_TAB = 9;
var CHAR_LINE_FEED = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_EXCLAMATION = 33;
var CHAR_DOUBLE_QUOTE = 34;
var CHAR_SHARP = 35;
var CHAR_PERCENT = 37;
var CHAR_AMPERSAND = 38;
var CHAR_SINGLE_QUOTE = 39;
var CHAR_ASTERISK = 42;
var CHAR_COMMA = 44;
var CHAR_MINUS = 45;
var CHAR_COLON = 58;
var CHAR_EQUALS = 61;
var CHAR_GREATER_THAN = 62;
var CHAR_QUESTION = 63;
var CHAR_COMMERCIAL_AT = 64;
var CHAR_LEFT_SQUARE_BRACKET = 91;
var CHAR_RIGHT_SQUARE_BRACKET = 93;
var CHAR_GRAVE_ACCENT = 96;
var CHAR_LEFT_CURLY_BRACKET = 123;
var CHAR_VERTICAL_LINE = 124;
var CHAR_RIGHT_CURLY_BRACKET = 125;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
];
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(schema2, map2) {
    var result, keys, index, length, tag, style, type2;
    if (map2 === null) return {};
    result = {};
    keys = Object.keys(map2);
    for(index = 0, length = keys.length; index < length; index += 1){
        tag = keys[index];
        style = String(map2[tag]);
        if (tag.slice(0, 2) === "!!") {
            tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type2 = schema2.compiledTypeMap["fallback"][tag];
        if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
            style = type2.styleAliases[style];
        }
        result[tag] = style;
    }
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(compileStyleMap, "compileStyleMap");
function encodeHex(character) {
    var string, handle, length;
    string = character.toString(16).toUpperCase();
    if (character <= 255) {
        handle = "x";
        length = 2;
    } else if (character <= 65535) {
        handle = "u";
        length = 4;
    } else if (character <= 4294967295) {
        handle = "U";
        length = 8;
    } else {
        throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
    }
    return "\\" + handle + common.repeat("0", length - string.length) + string;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(encodeHex, "encodeHex");
var QUOTING_TYPE_SINGLE = 1;
var QUOTING_TYPE_DOUBLE = 2;
function State(options) {
    this.schema = options["schema"] || _default;
    this.indent = Math.max(1, options["indent"] || 2);
    this.noArrayIndent = options["noArrayIndent"] || false;
    this.skipInvalid = options["skipInvalid"] || false;
    this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
    this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
    this.sortKeys = options["sortKeys"] || false;
    this.lineWidth = options["lineWidth"] || 80;
    this.noRefs = options["noRefs"] || false;
    this.noCompatMode = options["noCompatMode"] || false;
    this.condenseFlow = options["condenseFlow"] || false;
    this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
    this.forceQuotes = options["forceQuotes"] || false;
    this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = "";
    this.duplicates = [];
    this.usedDuplicates = null;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(State, "State");
function indentString(string, spaces) {
    var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
    while(position < length){
        next = string.indexOf("\n", position);
        if (next === -1) {
            line = string.slice(position);
            position = length;
        } else {
            line = string.slice(position, next + 1);
            position = next + 1;
        }
        if (line.length && line !== "\n") result += ind;
        result += line;
    }
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(indentString, "indentString");
function generateNextLine(state, level) {
    return "\n" + common.repeat(" ", state.indent * level);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(generateNextLine, "generateNextLine");
function testImplicitResolving(state, str2) {
    var index, length, type2;
    for(index = 0, length = state.implicitTypes.length; index < length; index += 1){
        type2 = state.implicitTypes[index];
        if (type2.resolve(str2)) {
            return true;
        }
    }
    return false;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(testImplicitResolving, "testImplicitResolving");
function isWhitespace(c) {
    return c === CHAR_SPACE || c === CHAR_TAB;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isWhitespace, "isWhitespace");
function isPrintable(c) {
    return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isPrintable, "isPrintable");
function isNsCharOrWhitespace(c) {
    return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isNsCharOrWhitespace, "isNsCharOrWhitespace");
function isPlainSafe(c, prev, inblock) {
    var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
    var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
    return(// ns-plain-safe
    (inblock ? // c = flow-in
    cIsNsCharOrWhitespace : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isPlainSafe, "isPlainSafe");
function isPlainSafeFirst(c) {
    return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isPlainSafeFirst, "isPlainSafeFirst");
function isPlainSafeLast(c) {
    return !isWhitespace(c) && c !== CHAR_COLON;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isPlainSafeLast, "isPlainSafeLast");
function codePointAt(string, pos) {
    var first = string.charCodeAt(pos), second;
    if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
        second = string.charCodeAt(pos + 1);
        if (second >= 56320 && second <= 57343) {
            return (first - 55296) * 1024 + second - 56320 + 65536;
        }
    }
    return first;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(codePointAt, "codePointAt");
function needIndentIndicator(string) {
    var leadingSpaceRe = /^\n* /;
    return leadingSpaceRe.test(string);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(needIndentIndicator, "needIndentIndicator");
var STYLE_PLAIN = 1;
var STYLE_SINGLE = 2;
var STYLE_LITERAL = 3;
var STYLE_FOLDED = 4;
var STYLE_DOUBLE = 5;
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
    var i;
    var char = 0;
    var prevChar = null;
    var hasLineBreak = false;
    var hasFoldableLine = false;
    var shouldTrackWidth = lineWidth !== -1;
    var previousLineBreak = -1;
    var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
    if (singleLineOnly || forceQuotes) {
        for(i = 0; i < string.length; char >= 65536 ? i += 2 : i++){
            char = codePointAt(string, i);
            if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            plain = plain && isPlainSafe(char, prevChar, inblock);
            prevChar = char;
        }
    } else {
        for(i = 0; i < string.length; char >= 65536 ? i += 2 : i++){
            char = codePointAt(string, i);
            if (char === CHAR_LINE_FEED) {
                hasLineBreak = true;
                if (shouldTrackWidth) {
                    hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
                    i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
                    previousLineBreak = i;
                }
            } else if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            plain = plain && isPlainSafe(char, prevChar, inblock);
            prevChar = char;
        }
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
    }
    if (!hasLineBreak && !hasFoldableLine) {
        if (plain && !forceQuotes && !testAmbiguousType(string)) {
            return STYLE_PLAIN;
        }
        return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
    }
    if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
    }
    if (!forceQuotes) {
        return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(chooseScalarStyle, "chooseScalarStyle");
function writeScalar(state, string, level, iskey, inblock) {
    state.dump = function() {
        if (string.length === 0) {
            return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
        }
        if (!state.noCompatMode) {
            if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
                return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
            }
        }
        var indent = state.indent * Math.max(1, level);
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string2) {
            return testImplicitResolving(state, string2);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(testAmbiguity, "testAmbiguity");
        switch(chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)){
            case STYLE_PLAIN:
                return string;
            case STYLE_SINGLE:
                return "'" + string.replace(/'/g, "''") + "'";
            case STYLE_LITERAL:
                return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
            case STYLE_FOLDED:
                return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
            case STYLE_DOUBLE:
                return '"' + escapeString(string) + '"';
            default:
                throw new exception("impossible error: invalid scalar style");
        }
    }();
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(writeScalar, "writeScalar");
function blockHeader(string, indentPerLevel) {
    var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
    var clip = string[string.length - 1] === "\n";
    var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
    var chomp = keep ? "+" : clip ? "" : "-";
    return indentIndicator + chomp + "\n";
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(blockHeader, "blockHeader");
function dropEndingNewline(string) {
    return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(dropEndingNewline, "dropEndingNewline");
function foldString(string, width) {
    var lineRe = /(\n+)([^\n]*)/g;
    var result = function() {
        var nextLF = string.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
    }();
    var prevMoreIndented = string[0] === "\n" || string[0] === " ";
    var moreIndented;
    var match;
    while(match = lineRe.exec(string)){
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
        prevMoreIndented = moreIndented;
    }
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(foldString, "foldString");
function foldLine(line, width) {
    if (line === "" || line[0] === " ") return line;
    var breakRe = / [^ ]/g;
    var match;
    var start = 0, end, curr = 0, next = 0;
    var result = "";
    while(match = breakRe.exec(line)){
        next = match.index;
        if (next - start > width) {
            end = curr > start ? curr : next;
            result += "\n" + line.slice(start, end);
            start = end + 1;
        }
        curr = next;
    }
    result += "\n";
    if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
    } else {
        result += line.slice(start);
    }
    return result.slice(1);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(foldLine, "foldLine");
function escapeString(string) {
    var result = "";
    var char = 0;
    var escapeSeq;
    for(var i = 0; i < string.length; char >= 65536 ? i += 2 : i++){
        char = codePointAt(string, i);
        escapeSeq = ESCAPE_SEQUENCES[char];
        if (!escapeSeq && isPrintable(char)) {
            result += string[i];
            if (char >= 65536) result += string[i + 1];
        } else {
            result += escapeSeq || encodeHex(char);
        }
    }
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(escapeString, "escapeString");
function writeFlowSequence(state, level, object) {
    var _result = "", _tag = state.tag, index, length, value;
    for(index = 0, length = object.length; index < length; index += 1){
        value = object[index];
        if (state.replacer) {
            value = state.replacer.call(object, String(index), value);
        }
        if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
            if (_result !== "") _result += "," + (!state.condenseFlow ? " " : "");
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = "[" + _result + "]";
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(writeFlowSequence, "writeFlowSequence");
function writeBlockSequence(state, level, object, compact) {
    var _result = "", _tag = state.tag, index, length, value;
    for(index = 0, length = object.length; index < length; index += 1){
        value = object[index];
        if (state.replacer) {
            value = state.replacer.call(object, String(index), value);
        }
        if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
            if (!compact || _result !== "") {
                _result += generateNextLine(state, level);
            }
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                _result += "-";
            } else {
                _result += "- ";
            }
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = _result || "[]";
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(writeBlockSequence, "writeBlockSequence");
function writeFlowMapping(state, level, object) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
    for(index = 0, length = objectKeyList.length; index < length; index += 1){
        pairBuffer = "";
        if (_result !== "") pairBuffer += ", ";
        if (state.condenseFlow) pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
            objectValue = state.replacer.call(object, objectKey, objectValue);
        }
        if (!writeNode(state, level, objectKey, false, false)) {
            continue;
        }
        if (state.dump.length > 1024) pairBuffer += "? ";
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
        if (!writeNode(state, level, objectValue, false, false)) {
            continue;
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = "{" + _result + "}";
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(writeFlowMapping, "writeFlowMapping");
function writeBlockMapping(state, level, object, compact) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
    if (state.sortKeys === true) {
        objectKeyList.sort();
    } else if (typeof state.sortKeys === "function") {
        objectKeyList.sort(state.sortKeys);
    } else if (state.sortKeys) {
        throw new exception("sortKeys must be a boolean or a function");
    }
    for(index = 0, length = objectKeyList.length; index < length; index += 1){
        pairBuffer = "";
        if (!compact || _result !== "") {
            pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
            objectValue = state.replacer.call(object, objectKey, objectValue);
        }
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
            continue;
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
        if (explicitPair) {
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                pairBuffer += "?";
            } else {
                pairBuffer += "? ";
            }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
            pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
            continue;
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += ":";
        } else {
            pairBuffer += ": ";
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = _result || "{}";
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(writeBlockMapping, "writeBlockMapping");
function detectType(state, object, explicit) {
    var _result, typeList, index, length, type2, style;
    typeList = explicit ? state.explicitTypes : state.implicitTypes;
    for(index = 0, length = typeList.length; index < length; index += 1){
        type2 = typeList[index];
        if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
            if (explicit) {
                if (type2.multi && type2.representName) {
                    state.tag = type2.representName(object);
                } else {
                    state.tag = type2.tag;
                }
            } else {
                state.tag = "?";
            }
            if (type2.represent) {
                style = state.styleMap[type2.tag] || type2.defaultStyle;
                if (_toString.call(type2.represent) === "[object Function]") {
                    _result = type2.represent(object, style);
                } else if (_hasOwnProperty.call(type2.represent, style)) {
                    _result = type2.represent[style](object, style);
                } else {
                    throw new exception("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
                }
                state.dump = _result;
            }
            return true;
        }
    }
    return false;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(detectType, "detectType");
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
    state.tag = null;
    state.dump = object;
    if (!detectType(state, object, false)) {
        detectType(state, object, true);
    }
    var type2 = _toString.call(state.dump);
    var inblock = block;
    var tagStr;
    if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
    }
    var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
    if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
    }
    if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
    }
    if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex;
    } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
            state.usedDuplicates[duplicateIndex] = true;
        }
        if (type2 === "[object Object]") {
            if (block && Object.keys(state.dump).length !== 0) {
                writeBlockMapping(state, level, state.dump, compact);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + state.dump;
                }
            } else {
                writeFlowMapping(state, level, state.dump);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                }
            }
        } else if (type2 === "[object Array]") {
            if (block && state.dump.length !== 0) {
                if (state.noArrayIndent && !isblockseq && level > 0) {
                    writeBlockSequence(state, level - 1, state.dump, compact);
                } else {
                    writeBlockSequence(state, level, state.dump, compact);
                }
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + state.dump;
                }
            } else {
                writeFlowSequence(state, level, state.dump);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                }
            }
        } else if (type2 === "[object String]") {
            if (state.tag !== "?") {
                writeScalar(state, state.dump, level, iskey, inblock);
            }
        } else if (type2 === "[object Undefined]") {
            return false;
        } else {
            if (state.skipInvalid) return false;
            throw new exception("unacceptable kind of an object to dump " + type2);
        }
        if (state.tag !== null && state.tag !== "?") {
            tagStr = encodeURI(state.tag[0] === "!" ? state.tag.slice(1) : state.tag).replace(/!/g, "%21");
            if (state.tag[0] === "!") {
                tagStr = "!" + tagStr;
            } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
                tagStr = "!!" + tagStr.slice(18);
            } else {
                tagStr = "!<" + tagStr + ">";
            }
            state.dump = tagStr + " " + state.dump;
        }
    }
    return true;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(writeNode, "writeNode");
function getDuplicateReferences(object, state) {
    var objects = [], duplicatesIndexes = [], index, length;
    inspectNode(object, objects, duplicatesIndexes);
    for(index = 0, length = duplicatesIndexes.length; index < length; index += 1){
        state.duplicates.push(objects[duplicatesIndexes[index]]);
    }
    state.usedDuplicates = new Array(length);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(getDuplicateReferences, "getDuplicateReferences");
function inspectNode(object, objects, duplicatesIndexes) {
    var objectKeyList, index, length;
    if (object !== null && typeof object === "object") {
        index = objects.indexOf(object);
        if (index !== -1) {
            if (duplicatesIndexes.indexOf(index) === -1) {
                duplicatesIndexes.push(index);
            }
        } else {
            objects.push(object);
            if (Array.isArray(object)) {
                for(index = 0, length = object.length; index < length; index += 1){
                    inspectNode(object[index], objects, duplicatesIndexes);
                }
            } else {
                objectKeyList = Object.keys(object);
                for(index = 0, length = objectKeyList.length; index < length; index += 1){
                    inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
                }
            }
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(inspectNode, "inspectNode");
function dump$1(input, options) {
    options = options || {};
    var state = new State(options);
    if (!state.noRefs) getDuplicateReferences(input, state);
    var value = input;
    if (state.replacer) {
        value = state.replacer.call({
            "": value
        }, "", value);
    }
    if (writeNode(state, 0, value, true, true)) return state.dump + "\n";
    return "";
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(dump$1, "dump$1");
var dump_1 = dump$1;
var dumper = {
    dump: dump_1
};
function renamed(from, to) {
    return function() {
        throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(renamed, "renamed");
var JSON_SCHEMA = json;
var load = loader.load;
var loadAll = loader.loadAll;
var dump = dumper.dump;
var safeLoad = renamed("safeLoad", "load");
var safeLoadAll = renamed("safeLoadAll", "loadAll");
var safeDump = renamed("safeDump", "dump");
;
 /*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/ }}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-OPO4IU42.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getIconSVG": (()=>getIconSVG),
    "registerIconPacks": (()=>registerIconPacks),
    "unknownIcon": (()=>unknownIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
// src/rendering-util/icons.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iconify$2b$utils$40$2$2e$2$2e$0$2f$node_modules$2f40$iconify$2f$utils$2f$lib$2f$icon$2f$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@iconify+utils@2.2.0/node_modules/@iconify/utils/lib/icon/name.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iconify$2b$utils$40$2$2e$2$2e$0$2f$node_modules$2f40$iconify$2f$utils$2f$lib$2f$icon$2d$set$2f$get$2d$icon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@iconify+utils@2.2.0/node_modules/@iconify/utils/lib/icon-set/get-icon.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iconify$2b$utils$40$2$2e$2$2e$0$2f$node_modules$2f40$iconify$2f$utils$2f$lib$2f$svg$2f$build$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@iconify+utils@2.2.0/node_modules/@iconify/utils/lib/svg/build.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iconify$2b$utils$40$2$2e$2$2e$0$2f$node_modules$2f40$iconify$2f$utils$2f$lib$2f$svg$2f$html$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@iconify+utils@2.2.0/node_modules/@iconify/utils/lib/svg/html.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iconify$2b$utils$40$2$2e$2$2e$0$2f$node_modules$2f40$iconify$2f$utils$2f$lib$2f$svg$2f$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@iconify+utils@2.2.0/node_modules/@iconify/utils/lib/svg/id.mjs [app-ssr] (ecmascript)");
;
;
var unknownIcon = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80
};
var iconsStore = /* @__PURE__ */ new Map();
var loaderStore = /* @__PURE__ */ new Map();
var registerIconPacks = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((iconLoaders)=>{
    for (const iconLoader of iconLoaders){
        if (!iconLoader.name) {
            throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Registering icon pack:", iconLoader.name);
        if ("loader" in iconLoader) {
            loaderStore.set(iconLoader.name, iconLoader.loader);
        } else if ("icons" in iconLoader) {
            iconsStore.set(iconLoader.name, iconLoader.icons);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error("Invalid icon loader:", iconLoader);
            throw new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
        }
    }
}, "registerIconPacks");
var getRegisteredIconData = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (iconName, fallbackPrefix)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iconify$2b$utils$40$2$2e$2$2e$0$2f$node_modules$2f40$iconify$2f$utils$2f$lib$2f$icon$2f$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToIcon"])(iconName, true, fallbackPrefix !== void 0);
    if (!data) {
        throw new Error(`Invalid icon name: ${iconName}`);
    }
    const prefix = data.prefix || fallbackPrefix;
    if (!prefix) {
        throw new Error(`Icon name must contain a prefix: ${iconName}`);
    }
    let icons = iconsStore.get(prefix);
    if (!icons) {
        const loader = loaderStore.get(prefix);
        if (!loader) {
            throw new Error(`Icon set not found: ${data.prefix}`);
        }
        try {
            const loaded = await loader();
            icons = {
                ...loaded,
                prefix
            };
            iconsStore.set(prefix, icons);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error(e);
            throw new Error(`Failed to load icon set: ${data.prefix}`);
        }
    }
    const iconData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iconify$2b$utils$40$2$2e$2$2e$0$2f$node_modules$2f40$iconify$2f$utils$2f$lib$2f$icon$2d$set$2f$get$2d$icon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIconData"])(icons, data.name);
    if (!iconData) {
        throw new Error(`Icon not found: ${iconName}`);
    }
    return iconData;
}, "getRegisteredIconData");
var getIconSVG = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (iconName, customisations)=>{
    let iconData;
    try {
        iconData = await getRegisteredIconData(iconName, customisations?.fallbackPrefix);
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error(e);
        iconData = unknownIcon;
    }
    const renderData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iconify$2b$utils$40$2$2e$2$2e$0$2f$node_modules$2f40$iconify$2f$utils$2f$lib$2f$svg$2f$build$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconToSVG"])(iconData, customisations);
    const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iconify$2b$utils$40$2$2e$2$2e$0$2f$node_modules$2f40$iconify$2f$utils$2f$lib$2f$svg$2f$html$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconToHTML"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$iconify$2b$utils$40$2$2e$2$2e$0$2f$node_modules$2f40$iconify$2f$utils$2f$lib$2f$svg$2f$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceIDs"])(renderData.body), renderData.attributes);
    return svg;
}, "getIconSVG");
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-3X56UNUX.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getSubGraphTitleMargins": (()=>getSubGraphTitleMargins)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
;
// src/utils/subGraphTitleMargins.ts
var getSubGraphTitleMargins = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(({ flowchart })=>{
    const subGraphTitleTopMargin = flowchart?.subGraphTitleMargin?.top ?? 0;
    const subGraphTitleBottomMargin = flowchart?.subGraphTitleMargin?.bottom ?? 0;
    const subGraphTitleTotalMargin = subGraphTitleTopMargin + subGraphTitleBottomMargin;
    return {
        subGraphTitleTopMargin,
        subGraphTitleBottomMargin,
        subGraphTitleTotalMargin
    };
}, "getSubGraphTitleMargins");
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-7DKRZKHE.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ZERO_WIDTH_SPACE": (()=>ZERO_WIDTH_SPACE),
    "calculateTextHeight": (()=>calculateTextHeight),
    "calculateTextWidth": (()=>calculateTextWidth),
    "cleanAndMerge": (()=>cleanAndMerge),
    "decodeEntities": (()=>decodeEntities),
    "encodeEntities": (()=>encodeEntities),
    "generateId": (()=>generateId),
    "getEdgeId": (()=>getEdgeId),
    "getStylesFromArray": (()=>getStylesFromArray),
    "handleUndefinedAttr": (()=>handleUndefinedAttr),
    "interpolateToCurve": (()=>interpolateToCurve),
    "isDetailedError": (()=>isDetailedError),
    "parseFontSize": (()=>parseFontSize),
    "random": (()=>random),
    "removeDirectives": (()=>removeDirectives),
    "utils_default": (()=>utils_default),
    "wrapLabel": (()=>wrapLabel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
// src/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$braintree$2b$sanitize$2d$url$40$7$2e$1$2e$0$2f$node_modules$2f40$braintree$2f$sanitize$2d$url$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@braintree+sanitize-url@7.1.0/node_modules/@braintree/sanitize-url/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$40$7$2e$9$2e$0$2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasis$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basis.js [app-ssr] (ecmascript) <export default as curveBasis>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basisClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasisClosed$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basisClosed.js [app-ssr] (ecmascript) <export default as curveBasisClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basisOpen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasisOpen$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basisOpen.js [app-ssr] (ecmascript) <export default as curveBasisOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__bumpX__as__curveBumpX$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/bump.js [app-ssr] (ecmascript) <export bumpX as curveBumpX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__bumpY__as__curveBumpY$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/bump.js [app-ssr] (ecmascript) <export bumpY as curveBumpY>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bundle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBundle$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/bundle.js [app-ssr] (ecmascript) <export default as curveBundle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$cardinalClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCardinalClosed$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/cardinalClosed.js [app-ssr] (ecmascript) <export default as curveCardinalClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$cardinalOpen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCardinalOpen$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/cardinalOpen.js [app-ssr] (ecmascript) <export default as curveCardinalOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$cardinal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCardinal$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/cardinal.js [app-ssr] (ecmascript) <export default as curveCardinal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$catmullRomClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCatmullRomClosed$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/catmullRomClosed.js [app-ssr] (ecmascript) <export default as curveCatmullRomClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$catmullRomOpen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCatmullRomOpen$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/catmullRomOpen.js [app-ssr] (ecmascript) <export default as curveCatmullRomOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$catmullRom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCatmullRom$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/catmullRom.js [app-ssr] (ecmascript) <export default as curveCatmullRom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveLinear$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/linear.js [app-ssr] (ecmascript) <export default as curveLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linearClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveLinearClosed$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/linearClosed.js [app-ssr] (ecmascript) <export default as curveLinearClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__monotoneX__as__curveMonotoneX$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/monotone.js [app-ssr] (ecmascript) <export monotoneX as curveMonotoneX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__monotoneY__as__curveMonotoneY$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/monotone.js [app-ssr] (ecmascript) <export monotoneY as curveMonotoneY>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$natural$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveNatural$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/natural.js [app-ssr] (ecmascript) <export default as curveNatural>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveStep$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/step.js [app-ssr] (ecmascript) <export default as curveStep>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__stepAfter__as__curveStepAfter$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/step.js [app-ssr] (ecmascript) <export stepAfter as curveStepAfter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__stepBefore__as__curveStepBefore$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/step.js [app-ssr] (ecmascript) <export stepBefore as curveStepBefore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js [app-ssr] (ecmascript)");
;
;
;
;
;
var ZERO_WIDTH_SPACE = "\u200B";
var d3CurveTypes = {
    curveBasis: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasis$3e$__["curveBasis"],
    curveBasisClosed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basisClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasisClosed$3e$__["curveBasisClosed"],
    curveBasisOpen: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basisOpen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasisOpen$3e$__["curveBasisOpen"],
    curveBumpX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__bumpX__as__curveBumpX$3e$__["curveBumpX"],
    curveBumpY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__bumpY__as__curveBumpY$3e$__["curveBumpY"],
    curveBundle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bundle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBundle$3e$__["curveBundle"],
    curveCardinalClosed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$cardinalClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCardinalClosed$3e$__["curveCardinalClosed"],
    curveCardinalOpen: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$cardinalOpen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCardinalOpen$3e$__["curveCardinalOpen"],
    curveCardinal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$cardinal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCardinal$3e$__["curveCardinal"],
    curveCatmullRomClosed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$catmullRomClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCatmullRomClosed$3e$__["curveCatmullRomClosed"],
    curveCatmullRomOpen: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$catmullRomOpen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCatmullRomOpen$3e$__["curveCatmullRomOpen"],
    curveCatmullRom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$catmullRom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveCatmullRom$3e$__["curveCatmullRom"],
    curveLinear: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveLinear$3e$__["curveLinear"],
    curveLinearClosed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linearClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveLinearClosed$3e$__["curveLinearClosed"],
    curveMonotoneX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__monotoneX__as__curveMonotoneX$3e$__["curveMonotoneX"],
    curveMonotoneY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__monotoneY__as__curveMonotoneY$3e$__["curveMonotoneY"],
    curveNatural: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$natural$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveNatural$3e$__["curveNatural"],
    curveStep: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveStep$3e$__["curveStep"],
    curveStepAfter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__stepAfter__as__curveStepAfter$3e$__["curveStepAfter"],
    curveStepBefore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__stepBefore__as__curveStepBefore$3e$__["curveStepBefore"]
};
var directiveWithoutOpen = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var detectInit = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(text, config) {
    const inits = detectDirective(text, /(?:init\b)|(?:initialize\b)/);
    let results = {};
    if (Array.isArray(inits)) {
        const args = inits.map((init)=>init.args);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeDirective"])(args);
        results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignWithDepth_default"])(results, [
            ...args
        ]);
    } else {
        results = inits.args;
    }
    if (!results) {
        return;
    }
    let type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectType"])(text, config);
    const prop = "config";
    if (results[prop] !== void 0) {
        if (type === "flowchart-v2") {
            type = "flowchart";
        }
        results[type] = results[prop];
        delete results[prop];
    }
    return results;
}, "detectInit");
var detectDirective = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(text, type = null) {
    try {
        const commentWithoutDirectives = new RegExp(`[%]{2}(?![{]${directiveWithoutOpen.source})(?=[}][%]{2}).*
`, "ig");
        text = text.trim().replace(commentWithoutDirectives, "").replace(/'/gm, '"');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug(`Detecting diagram directive${type !== null ? " type:" + type : ""} based on the text:${text}`);
        let match;
        const result = [];
        while((match = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directiveRegex"].exec(text)) !== null){
            if (match.index === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directiveRegex"].lastIndex) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directiveRegex"].lastIndex++;
            }
            if (match && !type || type && match[1]?.match(type) || type && match[2]?.match(type)) {
                const type2 = match[1] ? match[1] : match[2];
                const args = match[3] ? match[3].trim() : match[4] ? JSON.parse(match[4].trim()) : null;
                result.push({
                    type: type2,
                    args
                });
            }
        }
        if (result.length === 0) {
            return {
                type: text,
                args: null
            };
        }
        return result.length === 1 ? result[0] : result;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error(`ERROR: ${error.message} - Unable to parse directive type: '${type}' based on the text: '${text}'`);
        return {
            type: void 0,
            args: null
        };
    }
}, "detectDirective");
var removeDirectives = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(text) {
    return text.replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directiveRegex"], "");
}, "removeDirectives");
var isSubstringInArray = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(str, arr) {
    for (const [i, element] of arr.entries()){
        if (element.match(str)) {
            return i;
        }
    }
    return -1;
}, "isSubstringInArray");
function interpolateToCurve(interpolate, defaultCurve) {
    if (!interpolate) {
        return defaultCurve;
    }
    const curveName = `curve${interpolate.charAt(0).toUpperCase() + interpolate.slice(1)}`;
    return d3CurveTypes[curveName] ?? defaultCurve;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(interpolateToCurve, "interpolateToCurve");
function formatUrl(linkStr, config) {
    const url = linkStr.trim();
    if (!url) {
        return void 0;
    }
    if (config.securityLevel !== "loose") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$braintree$2b$sanitize$2d$url$40$7$2e$1$2e$0$2f$node_modules$2f40$braintree$2f$sanitize$2d$url$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeUrl"])(url);
    }
    return url;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(formatUrl, "formatUrl");
var runFunc = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((functionName, ...params)=>{
    const arrPaths = functionName.split(".");
    const len = arrPaths.length - 1;
    const fnName = arrPaths[len];
    let obj = window;
    for(let i = 0; i < len; i++){
        obj = obj[arrPaths[i]];
        if (!obj) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error(`Function name: ${functionName} not found in window`);
            return;
        }
    }
    obj[fnName](...params);
}, "runFunc");
function distance(p1, p2) {
    if (!p1 || !p2) {
        return 0;
    }
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(distance, "distance");
function traverseEdge(points) {
    let prevPoint;
    let totalDistance = 0;
    points.forEach((point)=>{
        totalDistance += distance(point, prevPoint);
        prevPoint = point;
    });
    const remainingDistance = totalDistance / 2;
    return calculatePoint(points, remainingDistance);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(traverseEdge, "traverseEdge");
function calcLabelPosition(points) {
    if (points.length === 1) {
        return points[0];
    }
    return traverseEdge(points);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(calcLabelPosition, "calcLabelPosition");
var roundNumber = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((num, precision = 2)=>{
    const factor = Math.pow(10, precision);
    return Math.round(num * factor) / factor;
}, "roundNumber");
var calculatePoint = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((points, distanceToTraverse)=>{
    let prevPoint = void 0;
    let remainingDistance = distanceToTraverse;
    for (const point of points){
        if (prevPoint) {
            const vectorDistance = distance(point, prevPoint);
            if (vectorDistance < remainingDistance) {
                remainingDistance -= vectorDistance;
            } else {
                const distanceRatio = remainingDistance / vectorDistance;
                if (distanceRatio <= 0) {
                    return prevPoint;
                }
                if (distanceRatio >= 1) {
                    return {
                        x: point.x,
                        y: point.y
                    };
                }
                if (distanceRatio > 0 && distanceRatio < 1) {
                    return {
                        x: roundNumber((1 - distanceRatio) * prevPoint.x + distanceRatio * point.x, 5),
                        y: roundNumber((1 - distanceRatio) * prevPoint.y + distanceRatio * point.y, 5)
                    };
                }
            }
        }
        prevPoint = point;
    }
    throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint");
var calcCardinalityPosition = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((isRelationTypePresent, points, initialPosition)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info(`our points ${JSON.stringify(points)}`);
    if (points[0] !== initialPosition) {
        points = points.reverse();
    }
    const distanceToCardinalityPoint = 25;
    const center = calculatePoint(points, distanceToCardinalityPoint);
    const d = isRelationTypePresent ? 10 : 5;
    const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
    const cardinalityPosition = {
        x: 0,
        y: 0
    };
    cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
    cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
    return cardinalityPosition;
}, "calcCardinalityPosition");
function calcTerminalLabelPosition(terminalMarkerSize, position, _points) {
    const points = structuredClone(_points);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("our points", points);
    if (position !== "start_left" && position !== "start_right") {
        points.reverse();
    }
    const distanceToCardinalityPoint = 25 + terminalMarkerSize;
    const center = calculatePoint(points, distanceToCardinalityPoint);
    const d = 10 + terminalMarkerSize * 0.5;
    const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
    const cardinalityPosition = {
        x: 0,
        y: 0
    };
    if (position === "start_left") {
        cardinalityPosition.x = Math.sin(angle + Math.PI) * d + (points[0].x + center.x) / 2;
        cardinalityPosition.y = -Math.cos(angle + Math.PI) * d + (points[0].y + center.y) / 2;
    } else if (position === "end_right") {
        cardinalityPosition.x = Math.sin(angle - Math.PI) * d + (points[0].x + center.x) / 2 - 5;
        cardinalityPosition.y = -Math.cos(angle - Math.PI) * d + (points[0].y + center.y) / 2 - 5;
    } else if (position === "end_left") {
        cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2 - 5;
        cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2 - 5;
    } else {
        cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
        cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
    }
    return cardinalityPosition;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(calcTerminalLabelPosition, "calcTerminalLabelPosition");
function getStylesFromArray(arr) {
    let style = "";
    let labelStyle = "";
    for (const element of arr){
        if (element !== void 0) {
            if (element.startsWith("color:") || element.startsWith("text-align:")) {
                labelStyle = labelStyle + element + ";";
            } else {
                style = style + element + ";";
            }
        }
    }
    return {
        style,
        labelStyle
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(getStylesFromArray, "getStylesFromArray");
var cnt = 0;
var generateId = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
    cnt++;
    return "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt;
}, "generateId");
function makeRandomHex(length) {
    let result = "";
    const characters = "0123456789abcdef";
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(makeRandomHex, "makeRandomHex");
var random = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((options)=>{
    return makeRandomHex(options.length);
}, "random");
var getTextObj = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function() {
    return {
        x: 0,
        y: 0,
        fill: void 0,
        anchor: "start",
        style: "#666",
        width: 100,
        height: 100,
        textMargin: 0,
        rx: 0,
        ry: 0,
        valign: void 0,
        text: ""
    };
}, "getTextObj");
var drawSimpleText = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(elem, textData) {
    const nText = textData.text.replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["common_default"].lineBreakRegex, " ");
    const [, _fontSizePx] = parseFontSize(textData.fontSize);
    const textElem = elem.append("text");
    textElem.attr("x", textData.x);
    textElem.attr("y", textData.y);
    textElem.style("text-anchor", textData.anchor);
    textElem.style("font-family", textData.fontFamily);
    textElem.style("font-size", _fontSizePx);
    textElem.style("font-weight", textData.fontWeight);
    textElem.attr("fill", textData.fill);
    if (textData.class !== void 0) {
        textElem.attr("class", textData.class);
    }
    const span = textElem.append("tspan");
    span.attr("x", textData.x + textData.textMargin * 2);
    span.attr("fill", textData.fill);
    span.text(nText);
    return textElem;
}, "drawSimpleText");
var wrapLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((label, maxWidth, config)=>{
    if (!label) {
        return label;
    }
    config = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        joinWith: "<br/>"
    }, config);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["common_default"].lineBreakRegex.test(label)) {
        return label;
    }
    const words = label.split(" ").filter(Boolean);
    const completedLines = [];
    let nextLine = "";
    words.forEach((word, index)=>{
        const wordLength = calculateTextWidth(`${word} `, config);
        const nextLineLength = calculateTextWidth(nextLine, config);
        if (wordLength > maxWidth) {
            const { hyphenatedStrings, remainingWord } = breakString(word, maxWidth, "-", config);
            completedLines.push(nextLine, ...hyphenatedStrings);
            nextLine = remainingWord;
        } else if (nextLineLength + wordLength >= maxWidth) {
            completedLines.push(nextLine);
            nextLine = word;
        } else {
            nextLine = [
                nextLine,
                word
            ].filter(Boolean).join(" ");
        }
        const currentWord = index + 1;
        const isLastWord = currentWord === words.length;
        if (isLastWord) {
            completedLines.push(nextLine);
        }
    });
    return completedLines.filter((line)=>line !== "").join(config.joinWith);
}, (label, maxWidth, config)=>`${label}${maxWidth}${config.fontSize}${config.fontWeight}${config.fontFamily}${config.joinWith}`);
var breakString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((word, maxWidth, hyphenCharacter = "-", config)=>{
    config = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        margin: 0
    }, config);
    const characters = [
        ...word
    ];
    const lines = [];
    let currentLine = "";
    characters.forEach((character, index)=>{
        const nextLine = `${currentLine}${character}`;
        const lineWidth = calculateTextWidth(nextLine, config);
        if (lineWidth >= maxWidth) {
            const currentCharacter = index + 1;
            const isLastLine = characters.length === currentCharacter;
            const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
            lines.push(isLastLine ? nextLine : hyphenatedNextLine);
            currentLine = "";
        } else {
            currentLine = nextLine;
        }
    });
    return {
        hyphenatedStrings: lines,
        remainingWord: currentLine
    };
}, (word, maxWidth, hyphenCharacter = "-", config)=>`${word}${maxWidth}${hyphenCharacter}${config.fontSize}${config.fontWeight}${config.fontFamily}`);
function calculateTextHeight(text, config) {
    return calculateTextDimensions(text, config).height;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(calculateTextHeight, "calculateTextHeight");
function calculateTextWidth(text, config) {
    return calculateTextDimensions(text, config).width;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(calculateTextWidth, "calculateTextWidth");
var calculateTextDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((text, config)=>{
    const { fontSize = 12, fontFamily = "Arial", fontWeight = 400 } = config;
    if (!text) {
        return {
            width: 0,
            height: 0
        };
    }
    const [, _fontSizePx] = parseFontSize(fontSize);
    const fontFamilies = [
        "sans-serif",
        fontFamily
    ];
    const lines = text.split(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["common_default"].lineBreakRegex);
    const dims = [];
    const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])("body");
    if (!body.remove) {
        return {
            width: 0,
            height: 0,
            lineHeight: 0
        };
    }
    const g = body.append("svg");
    for (const fontFamily2 of fontFamilies){
        let cHeight = 0;
        const dim = {
            width: 0,
            height: 0,
            lineHeight: 0
        };
        for (const line of lines){
            const textObj = getTextObj();
            textObj.text = line || ZERO_WIDTH_SPACE;
            const textElem = drawSimpleText(g, textObj).style("font-size", _fontSizePx).style("font-weight", fontWeight).style("font-family", fontFamily2);
            const bBox = (textElem._groups || textElem)[0][0].getBBox();
            if (bBox.width === 0 && bBox.height === 0) {
                throw new Error("svg element not in render tree");
            }
            dim.width = Math.round(Math.max(dim.width, bBox.width));
            cHeight = Math.round(bBox.height);
            dim.height += cHeight;
            dim.lineHeight = Math.round(Math.max(dim.lineHeight, cHeight));
        }
        dims.push(dim);
    }
    g.remove();
    const index = isNaN(dims[1].height) || isNaN(dims[1].width) || isNaN(dims[1].lineHeight) || dims[0].height > dims[1].height && dims[0].width > dims[1].width && dims[0].lineHeight > dims[1].lineHeight ? 0 : 1;
    return dims[index];
}, (text, config)=>`${text}${config.fontSize}${config.fontWeight}${config.fontFamily}`);
var InitIDGenerator = class {
    constructor(deterministic = false, seed){
        this.count = 0;
        this.count = seed ? seed.length : 0;
        this.next = deterministic ? ()=>this.count++ : ()=>Date.now();
    }
    static{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(this, "InitIDGenerator");
    }
};
var decoder;
var entityDecode = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(html) {
    decoder = decoder || document.createElement("div");
    html = escape(html).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
    decoder.innerHTML = html;
    return unescape(decoder.textContent);
}, "entityDecode");
function isDetailedError(error) {
    return "str" in error;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isDetailedError, "isDetailedError");
var insertTitle = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((parent, cssClass, titleTopMargin, title)=>{
    if (!title) {
        return;
    }
    const bounds = parent.node()?.getBBox();
    if (!bounds) {
        return;
    }
    parent.append("text").text(title).attr("text-anchor", "middle").attr("x", bounds.x + bounds.width / 2).attr("y", -titleTopMargin).attr("class", cssClass);
}, "insertTitle");
var parseFontSize = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((fontSize)=>{
    if (typeof fontSize === "number") {
        return [
            fontSize,
            fontSize + "px"
        ];
    }
    const fontSizeNumber = parseInt(fontSize ?? "", 10);
    if (Number.isNaN(fontSizeNumber)) {
        return [
            void 0,
            void 0
        ];
    } else if (fontSize === String(fontSizeNumber)) {
        return [
            fontSizeNumber,
            fontSize + "px"
        ];
    } else {
        return [
            fontSizeNumber,
            fontSize
        ];
    }
}, "parseFontSize");
function cleanAndMerge(defaultData, data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, defaultData, data);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(cleanAndMerge, "cleanAndMerge");
var utils_default = {
    assignWithDepth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignWithDepth_default"],
    wrapLabel,
    calculateTextHeight,
    calculateTextWidth,
    calculateTextDimensions,
    cleanAndMerge,
    detectInit,
    detectDirective,
    isSubstringInArray,
    interpolateToCurve,
    calcLabelPosition,
    calcCardinalityPosition,
    calcTerminalLabelPosition,
    formatUrl,
    getStylesFromArray,
    generateId,
    random,
    runFunc,
    entityDecode,
    insertTitle,
    parseFontSize,
    InitIDGenerator
};
var encodeEntities = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(text) {
    let txt = text;
    txt = txt.replace(/style.*:\S*#.*;/g, function(s) {
        return s.substring(0, s.length - 1);
    });
    txt = txt.replace(/classDef.*:\S*#.*;/g, function(s) {
        return s.substring(0, s.length - 1);
    });
    txt = txt.replace(/#\w+;/g, function(s) {
        const innerTxt = s.substring(1, s.length - 1);
        const isInt = /^\+?\d+$/.test(innerTxt);
        if (isInt) {
            return "\uFB02\xB0\xB0" + innerTxt + "\xB6\xDF";
        } else {
            return "\uFB02\xB0" + innerTxt + "\xB6\xDF";
        }
    });
    return txt;
}, "encodeEntities");
var decodeEntities = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(text) {
    return text.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities");
var getEdgeId = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((from, to, { counter = 0, prefix, suffix })=>{
    return `${prefix ? `${prefix}_` : ""}${from}_${to}_${counter}${suffix ? `_${suffix}` : ""}`;
}, "getEdgeId");
function handleUndefinedAttr(attrValue) {
    return attrValue ?? null;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(handleUndefinedAttr, "handleUndefinedAttr");
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6JOS74DS.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "computeDimensionOfText": (()=>computeDimensionOfText),
    "createText": (()=>createText),
    "replaceIconSubstring": (()=>replaceIconSubstring)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-7DKRZKHE.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
// src/rendering-util/createText.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$40$7$2e$9$2e$0$2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js [app-ssr] (ecmascript) <module evaluation>");
// src/rendering-util/handle-markdown-text.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$marked$40$13$2e$0$2e$3$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/marked@13.0.3/node_modules/marked/lib/marked.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ts$2d$dedent$40$2$2e$2$2e$0$2f$node_modules$2f$ts$2d$dedent$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
;
;
;
;
;
function preprocessMarkdown(markdown, { markdownAutoWrap }) {
    const withoutBR = markdown.replace(/<br\/>/g, "\n");
    const withoutMultipleNewlines = withoutBR.replace(/\n{2,}/g, "\n");
    const withoutExtraSpaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ts$2d$dedent$40$2$2e$2$2e$0$2f$node_modules$2f$ts$2d$dedent$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dedent"])(withoutMultipleNewlines);
    if (markdownAutoWrap === false) {
        return withoutExtraSpaces.replace(/ /g, "&nbsp;");
    }
    return withoutExtraSpaces;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(preprocessMarkdown, "preprocessMarkdown");
function markdownToLines(markdown, config = {}) {
    const preprocessedMarkdown = preprocessMarkdown(markdown, config);
    const nodes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$marked$40$13$2e$0$2e$3$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marked"].lexer(preprocessedMarkdown);
    const lines = [
        []
    ];
    let currentLine = 0;
    function processNode(node, parentType = "normal") {
        if (node.type === "text") {
            const textLines = node.text.split("\n");
            textLines.forEach((textLine, index)=>{
                if (index !== 0) {
                    currentLine++;
                    lines.push([]);
                }
                textLine.split(" ").forEach((word)=>{
                    word = word.replace(/&#39;/g, `'`);
                    if (word) {
                        lines[currentLine].push({
                            content: word,
                            type: parentType
                        });
                    }
                });
            });
        } else if (node.type === "strong" || node.type === "em") {
            node.tokens.forEach((contentNode)=>{
                processNode(contentNode, node.type);
            });
        } else if (node.type === "html") {
            lines[currentLine].push({
                content: node.text,
                type: "normal"
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(processNode, "processNode");
    nodes.forEach((treeNode)=>{
        if (treeNode.type === "paragraph") {
            treeNode.tokens?.forEach((contentNode)=>{
                processNode(contentNode);
            });
        } else if (treeNode.type === "html") {
            lines[currentLine].push({
                content: treeNode.text,
                type: "normal"
            });
        }
    });
    return lines;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(markdownToLines, "markdownToLines");
function markdownToHTML(markdown, { markdownAutoWrap } = {}) {
    const nodes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$marked$40$13$2e$0$2e$3$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marked"].lexer(markdown);
    function output(node) {
        if (node.type === "text") {
            if (markdownAutoWrap === false) {
                return node.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;");
            }
            return node.text.replace(/\n */g, "<br/>");
        } else if (node.type === "strong") {
            return `<strong>${node.tokens?.map(output).join("")}</strong>`;
        } else if (node.type === "em") {
            return `<em>${node.tokens?.map(output).join("")}</em>`;
        } else if (node.type === "paragraph") {
            return `<p>${node.tokens?.map(output).join("")}</p>`;
        } else if (node.type === "space") {
            return "";
        } else if (node.type === "html") {
            return `${node.text}`;
        } else if (node.type === "escape") {
            return node.text;
        }
        return `Unsupported markdown: ${node.type}`;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(output, "output");
    return nodes.map(output).join("");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(markdownToHTML, "markdownToHTML");
// src/rendering-util/splitText.ts
function splitTextToChars(text) {
    if (Intl.Segmenter) {
        return [
            ...new Intl.Segmenter().segment(text)
        ].map((s)=>s.segment);
    }
    return [
        ...text
    ];
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(splitTextToChars, "splitTextToChars");
function splitWordToFitWidth(checkFit, word) {
    const characters = splitTextToChars(word.content);
    return splitWordToFitWidthRecursion(checkFit, [], characters, word.type);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(splitWordToFitWidth, "splitWordToFitWidth");
function splitWordToFitWidthRecursion(checkFit, usedChars, remainingChars, type) {
    if (remainingChars.length === 0) {
        return [
            {
                content: usedChars.join(""),
                type
            },
            {
                content: "",
                type
            }
        ];
    }
    const [nextChar, ...rest] = remainingChars;
    const newWord = [
        ...usedChars,
        nextChar
    ];
    if (checkFit([
        {
            content: newWord.join(""),
            type
        }
    ])) {
        return splitWordToFitWidthRecursion(checkFit, newWord, rest, type);
    }
    if (usedChars.length === 0 && nextChar) {
        usedChars.push(nextChar);
        remainingChars.shift();
    }
    return [
        {
            content: usedChars.join(""),
            type
        },
        {
            content: remainingChars.join(""),
            type
        }
    ];
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(splitWordToFitWidthRecursion, "splitWordToFitWidthRecursion");
function splitLineToFitWidth(line, checkFit) {
    if (line.some(({ content })=>content.includes("\n"))) {
        throw new Error("splitLineToFitWidth does not support newlines in the line");
    }
    return splitLineToFitWidthRecursion(line, checkFit);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(splitLineToFitWidth, "splitLineToFitWidth");
function splitLineToFitWidthRecursion(words, checkFit, lines = [], newLine = []) {
    if (words.length === 0) {
        if (newLine.length > 0) {
            lines.push(newLine);
        }
        return lines.length > 0 ? lines : [];
    }
    let joiner = "";
    if (words[0].content === " ") {
        joiner = " ";
        words.shift();
    }
    const nextWord = words.shift() ?? {
        content: " ",
        type: "normal"
    };
    const lineWithNextWord = [
        ...newLine
    ];
    if (joiner !== "") {
        lineWithNextWord.push({
            content: joiner,
            type: "normal"
        });
    }
    lineWithNextWord.push(nextWord);
    if (checkFit(lineWithNextWord)) {
        return splitLineToFitWidthRecursion(words, checkFit, lines, lineWithNextWord);
    }
    if (newLine.length > 0) {
        lines.push(newLine);
        words.unshift(nextWord);
    } else if (nextWord.content) {
        const [line, rest] = splitWordToFitWidth(checkFit, nextWord);
        lines.push([
            line
        ]);
        if (rest.content) {
            words.unshift(rest);
        }
    }
    return splitLineToFitWidthRecursion(words, checkFit, lines);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(splitLineToFitWidthRecursion, "splitLineToFitWidthRecursion");
// src/rendering-util/createText.ts
function applyStyle(dom, styleFn) {
    if (styleFn) {
        dom.attr("style", styleFn);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(applyStyle, "applyStyle");
async function addHtmlSpan(element, node, width, classes, addBackground = false) {
    const fo = element.append("foreignObject");
    fo.attr("width", `${10 * width}px`);
    fo.attr("height", `${10 * width}px`);
    const div = fo.append("xhtml:div");
    let label = node.label;
    if (node.label && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKatex"])(node.label)) {
        label = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderKatex"])(node.label.replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["common_default"].lineBreakRegex, "\n"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])());
    }
    const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
    const span = div.append("span");
    span.html(label);
    applyStyle(span, node.labelStyle);
    span.attr("class", `${labelClass} ${classes}`);
    applyStyle(div, node.labelStyle);
    div.style("display", "table-cell");
    div.style("white-space", "nowrap");
    div.style("line-height", "1.5");
    div.style("max-width", width + "px");
    div.style("text-align", "center");
    div.attr("xmlns", "http://www.w3.org/1999/xhtml");
    if (addBackground) {
        div.attr("class", "labelBkg");
    }
    let bbox = div.node().getBoundingClientRect();
    if (bbox.width === width) {
        div.style("display", "table");
        div.style("white-space", "break-spaces");
        div.style("width", width + "px");
        bbox = div.node().getBoundingClientRect();
    }
    return fo.node();
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(addHtmlSpan, "addHtmlSpan");
function createTspan(textElement, lineIndex, lineHeight) {
    return textElement.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", lineIndex * lineHeight - 0.1 + "em").attr("dy", lineHeight + "em");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(createTspan, "createTspan");
function computeWidthOfText(parentNode, lineHeight, line) {
    const testElement = parentNode.append("text");
    const testSpan = createTspan(testElement, 1, lineHeight);
    updateTextContentAndStyles(testSpan, line);
    const textLength = testSpan.node().getComputedTextLength();
    testElement.remove();
    return textLength;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(computeWidthOfText, "computeWidthOfText");
function computeDimensionOfText(parentNode, lineHeight, text) {
    const testElement = parentNode.append("text");
    const testSpan = createTspan(testElement, 1, lineHeight);
    updateTextContentAndStyles(testSpan, [
        {
            content: text,
            type: "normal"
        }
    ]);
    const textDimension = testSpan.node()?.getBoundingClientRect();
    if (textDimension) {
        testElement.remove();
    }
    return textDimension;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(computeDimensionOfText, "computeDimensionOfText");
function createFormattedText(width, g, structuredText, addBackground = false) {
    const lineHeight = 1.1;
    const labelGroup = g.append("g");
    const bkg = labelGroup.insert("rect").attr("class", "background").attr("style", "stroke: none");
    const textElement = labelGroup.append("text").attr("y", "-10.1");
    let lineIndex = 0;
    for (const line of structuredText){
        const checkWidth = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((line2)=>computeWidthOfText(labelGroup, lineHeight, line2) <= width, "checkWidth");
        const linesUnderWidth = checkWidth(line) ? [
            line
        ] : splitLineToFitWidth(line, checkWidth);
        for (const preparedLine of linesUnderWidth){
            const tspan = createTspan(textElement, lineIndex, lineHeight);
            updateTextContentAndStyles(tspan, preparedLine);
            lineIndex++;
        }
    }
    if (addBackground) {
        const bbox = textElement.node().getBBox();
        const padding = 2;
        bkg.attr("x", bbox.x - padding).attr("y", bbox.y - padding).attr("width", bbox.width + 2 * padding).attr("height", bbox.height + 2 * padding);
        return labelGroup.node();
    } else {
        return textElement.node();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(createFormattedText, "createFormattedText");
function updateTextContentAndStyles(tspan, wrappedLine) {
    tspan.text("");
    wrappedLine.forEach((word, index)=>{
        const innerTspan = tspan.append("tspan").attr("font-style", word.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", word.type === "strong" ? "bold" : "normal");
        if (index === 0) {
            innerTspan.text(word.content);
        } else {
            innerTspan.text(" " + word.content);
        }
    });
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(updateTextContentAndStyles, "updateTextContentAndStyles");
function replaceIconSubstring(text) {
    return text.replace(/fa[bklrs]?:fa-[\w-]+/g, // cspell: disable-line
    (s)=>`<i class='${s.replace(":", " ")}'></i>`);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(replaceIconSubstring, "replaceIconSubstring");
var createText = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (el, text = "", { style = "", isTitle = false, classes = "", useHtmlLabels = true, isNode = true, width = 200, addSvgBackground = false } = {}, config)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("XYZ createText", text, style, isTitle, classes, useHtmlLabels, isNode, "addSvgBackground: ", addSvgBackground);
    if (useHtmlLabels) {
        const htmlText = markdownToHTML(text, config);
        const decodedReplacedText = replaceIconSubstring((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeEntities"])(htmlText));
        const inputForKatex = text.replace(/\\\\/g, "\\");
        const node = {
            isNode,
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKatex"])(text) ? inputForKatex : decodedReplacedText,
            labelStyle: style.replace("fill:", "color:")
        };
        const vertexNode = await addHtmlSpan(el, node, width, classes, addSvgBackground);
        return vertexNode;
    } else {
        const sanitizeBR = text.replace(/<br\s*\/?>/g, "<br/>");
        const structuredText = markdownToLines(sanitizeBR.replace("<br>", "<br/>"), config);
        const svgLabel = createFormattedText(width, el, structuredText, text ? addSvgBackground : false);
        if (isNode) {
            if (/stroke:/.exec(style)) {
                style = style.replace("stroke:", "lineColor:");
            }
            const nodeLabelTextStyle = style.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(svgLabel).attr("style", nodeLabelTextStyle);
        } else {
            const edgeLabelRectStyle = style.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(svgLabel).select("rect").attr("style", edgeLabelRectStyle.replace(/background:/g, "fill:"));
            const edgeLabelTextStyle = style.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(svgLabel).select("text").attr("style", edgeLabelTextStyle);
        }
        return svgLabel;
    }
}, "createText");
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-7NZE2EM7.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clear": (()=>clear),
    "clear2": (()=>clear2),
    "createLabel_default": (()=>createLabel_default),
    "insertCluster": (()=>insertCluster),
    "insertNode": (()=>insertNode),
    "isValidShape": (()=>isValidShape),
    "labelHelper": (()=>labelHelper),
    "positionNode": (()=>positionNode),
    "setNodeElem": (()=>setNodeElem),
    "updateNodeBounds": (()=>updateNodeBounds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$OPO4IU42$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-OPO4IU42.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$3X56UNUX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-3X56UNUX.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6JOS74DS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6JOS74DS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-7DKRZKHE.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
// src/rendering-util/rendering-elements/shapes/util.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$40$7$2e$9$2e$0$2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bundled/rough.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
;
;
;
;
;
;
var labelHelper = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (parent, node, _classes)=>{
    let cssClasses;
    const useHtmlLabels = node.useHtmlLabels || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])()?.htmlLabels);
    if (!_classes) {
        cssClasses = "node default";
    } else {
        cssClasses = _classes;
    }
    const shapeSvg = parent.insert("g").attr("class", cssClasses).attr("id", node.domId || node.id);
    const labelEl = shapeSvg.insert("g").attr("class", "label").attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(node.labelStyle));
    let label;
    if (node.label === void 0) {
        label = "";
    } else {
        label = typeof node.label === "string" ? node.label : node.label[0];
    }
    const text2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6JOS74DS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createText"])(labelEl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeText"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeEntities"])(label), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])()), {
        useHtmlLabels,
        width: node.width || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])().flowchart?.wrappingWidth,
        // @ts-expect-error -- This is currently not used. Should this be `classes` instead?
        cssClasses: "markdown-node-label",
        style: node.labelStyle,
        addSvgBackground: !!node.icon || !!node.img
    });
    let bbox = text2.getBBox();
    const halfPadding = (node?.padding ?? 0) / 2;
    if (useHtmlLabels) {
        const div = text2.children[0];
        const dv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(text2);
        const images = div.getElementsByTagName("img");
        if (images) {
            const noImgText = label.replace(/<img[^>]*>/g, "").trim() === "";
            await Promise.all([
                ...images
            ].map((img)=>new Promise((res)=>{
                    function setupImage() {
                        img.style.display = "flex";
                        img.style.flexDirection = "column";
                        if (noImgText) {
                            const bodyFontSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])().fontSize ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])().fontSize : window.getComputedStyle(document.body).fontSize;
                            const enlargingFactor = 5;
                            const [parsedBodyFontSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig_default"].fontSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseFontSize"])(bodyFontSize);
                            const width = parsedBodyFontSize * enlargingFactor + "px";
                            img.style.minWidth = width;
                            img.style.maxWidth = width;
                        } else {
                            img.style.width = "100%";
                        }
                        res(img);
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(setupImage, "setupImage");
                    setTimeout(()=>{
                        if (img.complete) {
                            setupImage();
                        }
                    });
                    img.addEventListener("error", setupImage);
                    img.addEventListener("load", setupImage);
                })));
        }
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    if (useHtmlLabels) {
        labelEl.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    } else {
        labelEl.attr("transform", "translate(0, " + -bbox.height / 2 + ")");
    }
    if (node.centerLabel) {
        labelEl.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    }
    labelEl.insert("rect", ":first-child");
    return {
        shapeSvg,
        bbox,
        halfPadding,
        label: labelEl
    };
}, "labelHelper");
var insertLabel = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (parent, label, options)=>{
    const useHtmlLabels = options.useHtmlLabels || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])()?.flowchart?.htmlLabels);
    const labelEl = parent.insert("g").attr("class", "label").attr("style", options.labelStyle || "");
    const text2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6JOS74DS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createText"])(labelEl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeText"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeEntities"])(label), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])()), {
        useHtmlLabels,
        width: options.width || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])()?.flowchart?.wrappingWidth,
        style: options.labelStyle,
        addSvgBackground: !!options.icon || !!options.img
    });
    let bbox = text2.getBBox();
    const halfPadding = options.padding / 2;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])()?.flowchart?.htmlLabels)) {
        const div = text2.children[0];
        const dv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(text2);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    if (useHtmlLabels) {
        labelEl.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    } else {
        labelEl.attr("transform", "translate(0, " + -bbox.height / 2 + ")");
    }
    if (options.centerLabel) {
        labelEl.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    }
    labelEl.insert("rect", ":first-child");
    return {
        shapeSvg: parent,
        bbox,
        halfPadding,
        label: labelEl
    };
}, "insertLabel");
var updateNodeBounds = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((node, element)=>{
    const bbox = element.node().getBBox();
    node.width = bbox.width;
    node.height = bbox.height;
}, "updateNodeBounds");
var getNodeClasses = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((node, extra)=>(node.look === "handDrawn" ? "rough-node" : "node") + " " + node.cssClasses + " " + (extra || ""), "getNodeClasses");
function createPathFromPoints(points) {
    const pointStrings = points.map((p, i)=>`${i === 0 ? "M" : "L"}${p.x},${p.y}`);
    pointStrings.push("Z");
    return pointStrings.join(" ");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(createPathFromPoints, "createPathFromPoints");
function generateFullSineWavePoints(x1, y1, x2, y2, amplitude, numCycles) {
    const points = [];
    const steps = 50;
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const cycleLength = deltaX / numCycles;
    const frequency = 2 * Math.PI / cycleLength;
    const midY = y1 + deltaY / 2;
    for(let i = 0; i <= steps; i++){
        const t = i / steps;
        const x = x1 + t * deltaX;
        const y = midY + amplitude * Math.sin(frequency * (x - x1));
        points.push({
            x,
            y
        });
    }
    return points;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(generateFullSineWavePoints, "generateFullSineWavePoints");
function generateCirclePoints(centerX, centerY, radius, numPoints, startAngle, endAngle) {
    const points = [];
    const startAngleRad = startAngle * Math.PI / 180;
    const endAngleRad = endAngle * Math.PI / 180;
    const angleRange = endAngleRad - startAngleRad;
    const angleStep = angleRange / (numPoints - 1);
    for(let i = 0; i < numPoints; i++){
        const angle = startAngleRad + i * angleStep;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push({
            x: -x,
            y: -y
        });
    }
    return points;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(generateCirclePoints, "generateCirclePoints");
;
;
// src/rendering-util/rendering-elements/intersect/intersect-rect.js
var intersectRect = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((node, point)=>{
    var x = node.x;
    var y = node.y;
    var dx = point.x - x;
    var dy = point.y - y;
    var w = node.width / 2;
    var h = node.height / 2;
    var sx, sy;
    if (Math.abs(dy) * w > Math.abs(dx) * h) {
        if (dy < 0) {
            h = -h;
        }
        sx = dy === 0 ? 0 : h * dx / dy;
        sy = h;
    } else {
        if (dx < 0) {
            w = -w;
        }
        sx = w;
        sy = dx === 0 ? 0 : w * dy / dx;
    }
    return {
        x: x + sx,
        y: y + sy
    };
}, "intersectRect");
var intersect_rect_default = intersectRect;
;
function applyStyle(dom, styleFn) {
    if (styleFn) {
        dom.attr("style", styleFn);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(applyStyle, "applyStyle");
async function addHtmlLabel(node) {
    const fo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
    const div = fo.append("xhtml:div");
    let label = node.label;
    if (node.label && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKatex"])(node.label)) {
        label = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderKatex"])(node.label.replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["common_default"].lineBreakRegex, "\n"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])());
    }
    const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
    div.html('<span class="' + labelClass + '" ' + (node.labelStyle ? 'style="' + node.labelStyle + '"' : "") + // codeql [js/html-constructed-from-input] : false positive
    ">" + label + "</span>");
    applyStyle(div, node.labelStyle);
    div.style("display", "inline-block");
    div.style("padding-right", "1px");
    div.style("white-space", "nowrap");
    div.attr("xmlns", "http://www.w3.org/1999/xhtml");
    return fo.node();
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(addHtmlLabel, "addHtmlLabel");
var createLabel = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (_vertexText, style, isTitle, isNode)=>{
    let vertexText = _vertexText || "";
    if (typeof vertexText === "object") {
        vertexText = vertexText[0];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])().flowchart.htmlLabels)) {
        vertexText = vertexText.replace(/\\n|\n/g, "<br />");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("vertexText" + vertexText);
        const node = {
            isNode,
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeEntities"])(vertexText).replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`),
            labelStyle: style ? style.replace("fill:", "color:") : style
        };
        let vertexNode = await addHtmlLabel(node);
        return vertexNode;
    } else {
        const svgLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        svgLabel.setAttribute("style", style.replace("color:", "fill:"));
        let rows = [];
        if (typeof vertexText === "string") {
            rows = vertexText.split(/\\n|\n|<br\s*\/?>/gi);
        } else if (Array.isArray(vertexText)) {
            rows = vertexText;
        } else {
            rows = [];
        }
        for (const row of rows){
            const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
            tspan.setAttribute("dy", "1em");
            tspan.setAttribute("x", "0");
            if (isTitle) {
                tspan.setAttribute("class", "title-row");
            } else {
                tspan.setAttribute("class", "row");
            }
            tspan.textContent = row.trim();
            svgLabel.appendChild(tspan);
        }
        return svgLabel;
    }
}, "createLabel");
var createLabel_default = createLabel;
// src/rendering-util/rendering-elements/shapes/roundedRectPath.ts
var createRoundedRectPathD = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, totalWidth, totalHeight, radius)=>[
        "M",
        x + radius,
        y,
        // Move to the first point
        "H",
        x + totalWidth - radius,
        // Draw horizontal line to the beginning of the right corner
        "A",
        radius,
        radius,
        0,
        0,
        1,
        x + totalWidth,
        y + radius,
        // Draw arc to the right top corner
        "V",
        y + totalHeight - radius,
        // Draw vertical line down to the beginning of the right bottom corner
        "A",
        radius,
        radius,
        0,
        0,
        1,
        x + totalWidth - radius,
        y + totalHeight,
        // Draw arc to the right bottom corner
        "H",
        x + radius,
        // Draw horizontal line to the beginning of the left bottom corner
        "A",
        radius,
        radius,
        0,
        0,
        1,
        x,
        y + totalHeight - radius,
        // Draw arc to the left bottom corner
        "V",
        y + radius,
        // Draw vertical line up to the beginning of the left top corner
        "A",
        radius,
        radius,
        0,
        0,
        1,
        x + radius,
        y,
        // Draw arc to the left top corner
        "Z"
    ].join(" "), "createRoundedRectPathD");
// src/rendering-util/rendering-elements/shapes/handDrawnShapeStyles.ts
var solidStateFill = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((color)=>{
    const { handDrawnSeed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])();
    return {
        fill: color,
        hachureAngle: 120,
        // angle of hachure,
        hachureGap: 4,
        fillWeight: 2,
        roughness: 0.7,
        stroke: color,
        seed: handDrawnSeed
    };
}, "solidStateFill");
var compileStyles = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((node)=>{
    const stylesMap = styles2Map([
        ...node.cssCompiledStyles || [],
        ...node.cssStyles || []
    ]);
    return {
        stylesMap,
        stylesArray: [
            ...stylesMap
        ]
    };
}, "compileStyles");
var styles2Map = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((styles)=>{
    const styleMap = /* @__PURE__ */ new Map();
    styles.forEach((style)=>{
        const [key, value] = style.split(":");
        styleMap.set(key.trim(), value?.trim());
    });
    return styleMap;
}, "styles2Map");
var styles2String = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((node)=>{
    const { stylesArray } = compileStyles(node);
    const labelStyles = [];
    const nodeStyles = [];
    const borderStyles = [];
    const backgroundStyles = [];
    stylesArray.forEach((style)=>{
        const key = style[0];
        if (key === "color" || key === "font-size" || key === "font-family" || key === "font-weight" || key === "font-style" || key === "text-decoration" || key === "text-align" || key === "text-transform" || key === "line-height" || key === "letter-spacing" || key === "word-spacing" || key === "text-shadow" || key === "text-overflow" || key === "white-space" || key === "word-wrap" || key === "word-break" || key === "overflow-wrap" || key === "hyphens") {
            labelStyles.push(style.join(":") + " !important");
        } else {
            nodeStyles.push(style.join(":") + " !important");
            if (key.includes("stroke")) {
                borderStyles.push(style.join(":") + " !important");
            }
            if (key === "fill") {
                backgroundStyles.push(style.join(":") + " !important");
            }
        }
    });
    return {
        labelStyles: labelStyles.join(";"),
        nodeStyles: nodeStyles.join(";"),
        stylesArray,
        borderStyles,
        backgroundStyles
    };
}, "styles2String");
var userNodeOverrides = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((node, options)=>{
    const { themeVariables, handDrawnSeed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])();
    const { nodeBorder, mainBkg } = themeVariables;
    const { stylesMap } = compileStyles(node);
    const result = Object.assign({
        roughness: 0.7,
        fill: stylesMap.get("fill") || mainBkg,
        fillStyle: "hachure",
        // solid fill
        fillWeight: 4,
        hachureGap: 5.2,
        stroke: stylesMap.get("stroke") || nodeBorder,
        seed: handDrawnSeed,
        strokeWidth: stylesMap.get("stroke-width")?.replace("px", "") || 1.3,
        fillLineDash: [
            0,
            0
        ]
    }, options);
    return result;
}, "userNodeOverrides");
// src/rendering-util/rendering-elements/clusters.js
var rect = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (parent, node)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("Creating subgraph rect for ", node.id, node);
    const siteConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])();
    const { themeVariables, handDrawnSeed } = siteConfig;
    const { clusterBkg, clusterBorder } = themeVariables;
    const { labelStyles, nodeStyles, borderStyles, backgroundStyles } = styles2String(node);
    const shapeSvg = parent.insert("g").attr("class", "cluster " + node.cssClasses).attr("id", node.id).attr("data-look", node.look);
    const useHtmlLabels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(siteConfig.flowchart.htmlLabels);
    const labelEl = shapeSvg.insert("g").attr("class", "cluster-label ");
    const text2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6JOS74DS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createText"])(labelEl, node.label, {
        style: node.labelStyle,
        useHtmlLabels,
        isNode: true
    });
    let bbox = text2.getBBox();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(siteConfig.flowchart.htmlLabels)) {
        const div = text2.children[0];
        const dv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(text2);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    const width = node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width;
    if (node.width <= bbox.width + node.padding) {
        node.diff = (width - node.width) / 2 - node.padding;
    } else {
        node.diff = -node.padding;
    }
    const height = node.height;
    const x = node.x - width / 2;
    const y = node.y - height / 2;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].trace("Data ", node, JSON.stringify(node));
    let rect2;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {
            roughness: 0.7,
            fill: clusterBkg,
            // fill: 'red',
            stroke: clusterBorder,
            fillWeight: 3,
            seed: handDrawnSeed
        });
        const roughNode = rc.path(createRoundedRectPathD(x, y, width, height, 0), options);
        rect2 = shapeSvg.insert(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Rough node insert CXC", roughNode);
            return roughNode;
        }, ":first-child");
        rect2.select("path:nth-child(2)").attr("style", borderStyles.join(";"));
        rect2.select("path").attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
    } else {
        rect2 = shapeSvg.insert("rect", ":first-child");
        rect2.attr("style", nodeStyles).attr("rx", node.rx).attr("ry", node.ry).attr("x", x).attr("y", y).attr("width", width).attr("height", height);
    }
    const { subGraphTitleTopMargin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$3X56UNUX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubGraphTitleMargins"])(siteConfig);
    labelEl.attr("transform", // This puts the label on top of the box instead of inside it
    `translate(${node.x - bbox.width / 2}, ${node.y - node.height / 2 + subGraphTitleTopMargin})`);
    if (labelStyles) {
        const span = labelEl.select("span");
        if (span) {
            span.attr("style", labelStyles);
        }
    }
    const rectBox = rect2.node().getBBox();
    node.offsetX = 0;
    node.width = rectBox.width;
    node.height = rectBox.height;
    node.offsetY = bbox.height - node.padding / 2;
    node.intersect = function(point) {
        return intersect_rect_default(node, point);
    };
    return {
        cluster: shapeSvg,
        labelBBox: bbox
    };
}, "rect");
var noteGroup = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", "note-cluster").attr("id", node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const padding = 0 * node.padding;
    const halfPadding = padding / 2;
    rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", node.width + padding).attr("height", node.height + padding).attr("fill", "none");
    const rectBox = rect2.node().getBBox();
    node.width = rectBox.width;
    node.height = rectBox.height;
    node.intersect = function(point) {
        return intersect_rect_default(node, point);
    };
    return {
        cluster: shapeSvg,
        labelBBox: {
            width: 0,
            height: 0
        }
    };
}, "noteGroup");
var roundedWithTitle = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (parent, node)=>{
    const siteConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])();
    const { themeVariables, handDrawnSeed } = siteConfig;
    const { altBackground, compositeBackground, compositeTitleBackground, nodeBorder } = themeVariables;
    const shapeSvg = parent.insert("g").attr("class", node.cssClasses).attr("id", node.id).attr("data-id", node.id).attr("data-look", node.look);
    const outerRectG = shapeSvg.insert("g", ":first-child");
    const label = shapeSvg.insert("g").attr("class", "cluster-label");
    let innerRect = shapeSvg.append("rect");
    const text2 = label.node().appendChild(await createLabel_default(node.label, node.labelStyle, void 0, true));
    let bbox = text2.getBBox();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(siteConfig.flowchart.htmlLabels)) {
        const div = text2.children[0];
        const dv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(text2);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    const padding = 0 * node.padding;
    const halfPadding = padding / 2;
    const width = (node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width) + padding;
    if (node.width <= bbox.width + node.padding) {
        node.diff = (width - node.width) / 2 - node.padding;
    } else {
        node.diff = -node.padding;
    }
    const height = node.height + padding;
    const innerHeight = node.height + padding - bbox.height - 6;
    const x = node.x - width / 2;
    const y = node.y - height / 2;
    node.width = width;
    const innerY = node.y - node.height / 2 - halfPadding + bbox.height + 2;
    let rect2;
    if (node.look === "handDrawn") {
        const isAlt = node.cssClasses.includes("statediagram-cluster-alt");
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const roughOuterNode = node.rx || node.ry ? rc.path(createRoundedRectPathD(x, y, width, height, 10), {
            roughness: 0.7,
            fill: compositeTitleBackground,
            fillStyle: "solid",
            stroke: nodeBorder,
            seed: handDrawnSeed
        }) : rc.rectangle(x, y, width, height, {
            seed: handDrawnSeed
        });
        rect2 = shapeSvg.insert(()=>roughOuterNode, ":first-child");
        const roughInnerNode = rc.rectangle(x, innerY, width, innerHeight, {
            fill: isAlt ? altBackground : compositeBackground,
            fillStyle: isAlt ? "hachure" : "solid",
            stroke: nodeBorder,
            seed: handDrawnSeed
        });
        rect2 = shapeSvg.insert(()=>roughOuterNode, ":first-child");
        innerRect = shapeSvg.insert(()=>roughInnerNode);
    } else {
        rect2 = outerRectG.insert("rect", ":first-child");
        const outerRectClass = "outer";
        rect2.attr("class", outerRectClass).attr("x", x).attr("y", y).attr("width", width).attr("height", height).attr("data-look", node.look);
        innerRect.attr("class", "inner").attr("x", x).attr("y", innerY).attr("width", width).attr("height", innerHeight);
    }
    label.attr("transform", `translate(${node.x - bbox.width / 2}, ${y + 1 - ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(siteConfig.flowchart.htmlLabels) ? 0 : 3)})`);
    const rectBox = rect2.node().getBBox();
    node.height = rectBox.height;
    node.offsetX = 0;
    node.offsetY = bbox.height - node.padding / 2;
    node.labelBBox = bbox;
    node.intersect = function(point) {
        return intersect_rect_default(node, point);
    };
    return {
        cluster: shapeSvg,
        labelBBox: bbox
    };
}, "roundedWithTitle");
var kanbanSection = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (parent, node)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("Creating subgraph rect for ", node.id, node);
    const siteConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])();
    const { themeVariables, handDrawnSeed } = siteConfig;
    const { clusterBkg, clusterBorder } = themeVariables;
    const { labelStyles, nodeStyles, borderStyles, backgroundStyles } = styles2String(node);
    const shapeSvg = parent.insert("g").attr("class", "cluster " + node.cssClasses).attr("id", node.id).attr("data-look", node.look);
    const useHtmlLabels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(siteConfig.flowchart.htmlLabels);
    const labelEl = shapeSvg.insert("g").attr("class", "cluster-label ");
    const text2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6JOS74DS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createText"])(labelEl, node.label, {
        style: node.labelStyle,
        useHtmlLabels,
        isNode: true,
        width: node.width
    });
    let bbox = text2.getBBox();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(siteConfig.flowchart.htmlLabels)) {
        const div = text2.children[0];
        const dv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(text2);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    const width = node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width;
    if (node.width <= bbox.width + node.padding) {
        node.diff = (width - node.width) / 2 - node.padding;
    } else {
        node.diff = -node.padding;
    }
    const height = node.height;
    const x = node.x - width / 2;
    const y = node.y - height / 2;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].trace("Data ", node, JSON.stringify(node));
    let rect2;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {
            roughness: 0.7,
            fill: clusterBkg,
            // fill: 'red',
            stroke: clusterBorder,
            fillWeight: 4,
            seed: handDrawnSeed
        });
        const roughNode = rc.path(createRoundedRectPathD(x, y, width, height, node.rx), options);
        rect2 = shapeSvg.insert(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Rough node insert CXC", roughNode);
            return roughNode;
        }, ":first-child");
        rect2.select("path:nth-child(2)").attr("style", borderStyles.join(";"));
        rect2.select("path").attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
    } else {
        rect2 = shapeSvg.insert("rect", ":first-child");
        rect2.attr("style", nodeStyles).attr("rx", node.rx).attr("ry", node.ry).attr("x", x).attr("y", y).attr("width", width).attr("height", height);
    }
    const { subGraphTitleTopMargin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$3X56UNUX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubGraphTitleMargins"])(siteConfig);
    labelEl.attr("transform", // This puts the label on top of the box instead of inside it
    `translate(${node.x - bbox.width / 2}, ${node.y - node.height / 2 + subGraphTitleTopMargin})`);
    if (labelStyles) {
        const span = labelEl.select("span");
        if (span) {
            span.attr("style", labelStyles);
        }
    }
    const rectBox = rect2.node().getBBox();
    node.offsetX = 0;
    node.width = rectBox.width;
    node.height = rectBox.height;
    node.offsetY = bbox.height - node.padding / 2;
    node.intersect = function(point) {
        return intersect_rect_default(node, point);
    };
    return {
        cluster: shapeSvg,
        labelBBox: bbox
    };
}, "kanbanSection");
var divider = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((parent, node)=>{
    const siteConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])();
    const { themeVariables, handDrawnSeed } = siteConfig;
    const { nodeBorder } = themeVariables;
    const shapeSvg = parent.insert("g").attr("class", node.cssClasses).attr("id", node.id).attr("data-look", node.look);
    const outerRectG = shapeSvg.insert("g", ":first-child");
    const padding = 0 * node.padding;
    const width = node.width + padding;
    node.diff = -node.padding;
    const height = node.height + padding;
    const x = node.x - width / 2;
    const y = node.y - height / 2;
    node.width = width;
    let rect2;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const roughOuterNode = rc.rectangle(x, y, width, height, {
            fill: "lightgrey",
            roughness: 0.5,
            strokeLineDash: [
                5
            ],
            stroke: nodeBorder,
            seed: handDrawnSeed
        });
        rect2 = shapeSvg.insert(()=>roughOuterNode, ":first-child");
    } else {
        rect2 = outerRectG.insert("rect", ":first-child");
        const outerRectClass = "divider";
        rect2.attr("class", outerRectClass).attr("x", x).attr("y", y).attr("width", width).attr("height", height).attr("data-look", node.look);
    }
    const rectBox = rect2.node().getBBox();
    node.height = rectBox.height;
    node.offsetX = 0;
    node.offsetY = 0;
    node.intersect = function(point) {
        return intersect_rect_default(node, point);
    };
    return {
        cluster: shapeSvg,
        labelBBox: {}
    };
}, "divider");
var squareRect = rect;
var shapes = {
    rect,
    squareRect,
    roundedWithTitle,
    noteGroup,
    divider,
    kanbanSection
};
var clusterElems = /* @__PURE__ */ new Map();
var insertCluster = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (elem, node)=>{
    const shape = node.shape || "rect";
    const cluster = await shapes[shape](elem, node);
    clusterElems.set(node.id, cluster);
    return cluster;
}, "insertCluster");
var clear = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
    clusterElems = /* @__PURE__ */ new Map();
}, "clear");
// src/rendering-util/rendering-elements/intersect/intersect-node.js
function intersectNode(node, point) {
    return node.intersect(point);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(intersectNode, "intersectNode");
var intersect_node_default = intersectNode;
// src/rendering-util/rendering-elements/intersect/intersect-ellipse.js
function intersectEllipse(node, rx, ry, point) {
    var cx = node.x;
    var cy = node.y;
    var px = cx - point.x;
    var py = cy - point.y;
    var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
    var dx = Math.abs(rx * ry * px / det);
    if (point.x < cx) {
        dx = -dx;
    }
    var dy = Math.abs(rx * ry * py / det);
    if (point.y < cy) {
        dy = -dy;
    }
    return {
        x: cx + dx,
        y: cy + dy
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(intersectEllipse, "intersectEllipse");
var intersect_ellipse_default = intersectEllipse;
// src/rendering-util/rendering-elements/intersect/intersect-circle.js
function intersectCircle(node, rx, point) {
    return intersect_ellipse_default(node, rx, rx, point);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(intersectCircle, "intersectCircle");
var intersect_circle_default = intersectCircle;
// src/rendering-util/rendering-elements/intersect/intersect-line.js
function intersectLine(p1, p2, q1, q2) {
    var a1, a2, b1, b2, c1, c2;
    var r1, r2, r3, r4;
    var denom, offset, num;
    var x, y;
    a1 = p2.y - p1.y;
    b1 = p1.x - p2.x;
    c1 = p2.x * p1.y - p1.x * p2.y;
    r3 = a1 * q1.x + b1 * q1.y + c1;
    r4 = a1 * q2.x + b1 * q2.y + c1;
    if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
        return;
    }
    a2 = q2.y - q1.y;
    b2 = q1.x - q2.x;
    c2 = q2.x * q1.y - q1.x * q2.y;
    r1 = a2 * p1.x + b2 * p1.y + c2;
    r2 = a2 * p2.x + b2 * p2.y + c2;
    if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
        return;
    }
    denom = a1 * b2 - a2 * b1;
    if (denom === 0) {
        return;
    }
    offset = Math.abs(denom / 2);
    num = b1 * c2 - b2 * c1;
    x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    num = a2 * c1 - a1 * c2;
    y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    return {
        x,
        y
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(intersectLine, "intersectLine");
function sameSign(r1, r2) {
    return r1 * r2 > 0;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(sameSign, "sameSign");
var intersect_line_default = intersectLine;
// src/rendering-util/rendering-elements/intersect/intersect-polygon.js
function intersectPolygon(node, polyPoints, point) {
    let x1 = node.x;
    let y1 = node.y;
    let intersections = [];
    let minX = Number.POSITIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    if (typeof polyPoints.forEach === "function") {
        polyPoints.forEach(function(entry) {
            minX = Math.min(minX, entry.x);
            minY = Math.min(minY, entry.y);
        });
    } else {
        minX = Math.min(minX, polyPoints.x);
        minY = Math.min(minY, polyPoints.y);
    }
    let left = x1 - node.width / 2 - minX;
    let top = y1 - node.height / 2 - minY;
    for(let i = 0; i < polyPoints.length; i++){
        let p1 = polyPoints[i];
        let p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
        let intersect = intersect_line_default(node, point, {
            x: left + p1.x,
            y: top + p1.y
        }, {
            x: left + p2.x,
            y: top + p2.y
        });
        if (intersect) {
            intersections.push(intersect);
        }
    }
    if (!intersections.length) {
        return node;
    }
    if (intersections.length > 1) {
        intersections.sort(function(p, q) {
            let pdx = p.x - point.x;
            let pdy = p.y - point.y;
            let distp = Math.sqrt(pdx * pdx + pdy * pdy);
            let qdx = q.x - point.x;
            let qdy = q.y - point.y;
            let distq = Math.sqrt(qdx * qdx + qdy * qdy);
            return distp < distq ? -1 : distp === distq ? 0 : 1;
        });
    }
    return intersections[0];
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(intersectPolygon, "intersectPolygon");
var intersect_polygon_default = intersectPolygon;
// src/rendering-util/rendering-elements/intersect/index.js
var intersect_default = {
    node: intersect_node_default,
    circle: intersect_circle_default,
    ellipse: intersect_ellipse_default,
    polygon: intersect_polygon_default,
    rect: intersect_rect_default
};
;
function anchor(parent, node) {
    const { labelStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const classes = getNodeClasses(node);
    let cssClasses = classes;
    if (!classes) {
        cssClasses = "anchor";
    }
    const shapeSvg = parent.insert("g").attr("class", cssClasses).attr("id", node.domId || node.id);
    const radius = 1;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {
        fill: "black",
        stroke: "none",
        fillStyle: "solid"
    });
    if (node.look !== "handDrawn") {
        options.roughness = 0;
    }
    const roughNode = rc.circle(0, 0, radius * 2, options);
    const circleElem = shapeSvg.insert(()=>roughNode, ":first-child");
    circleElem.attr("class", "anchor").attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(cssStyles));
    updateNodeBounds(node, circleElem);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("Circle intersect", node, radius, point);
        return intersect_default.circle(node, radius, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(anchor, "anchor");
;
function generateArcPoints(x1, y1, x2, y2, rx, ry, clockwise) {
    const numPoints = 20;
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const dx = (x2 - x1) / 2;
    const dy = (y2 - y1) / 2;
    const transformedX = dx / rx;
    const transformedY = dy / ry;
    const distance = Math.sqrt(transformedX ** 2 + transformedY ** 2);
    if (distance > 1) {
        throw new Error("The given radii are too small to create an arc between the points.");
    }
    const scaledCenterDistance = Math.sqrt(1 - distance ** 2);
    const centerX = midX + scaledCenterDistance * ry * Math.sin(angle) * (clockwise ? -1 : 1);
    const centerY = midY - scaledCenterDistance * rx * Math.cos(angle) * (clockwise ? -1 : 1);
    const startAngle = Math.atan2((y1 - centerY) / ry, (x1 - centerX) / rx);
    const endAngle = Math.atan2((y2 - centerY) / ry, (x2 - centerX) / rx);
    let angleRange = endAngle - startAngle;
    if (clockwise && angleRange < 0) {
        angleRange += 2 * Math.PI;
    }
    if (!clockwise && angleRange > 0) {
        angleRange -= 2 * Math.PI;
    }
    const points = [];
    for(let i = 0; i < numPoints; i++){
        const t = i / (numPoints - 1);
        const angle2 = startAngle + t * angleRange;
        const x = centerX + rx * Math.cos(angle2);
        const y = centerY + ry * Math.sin(angle2);
        points.push({
            x,
            y
        });
    }
    return points;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(generateArcPoints, "generateArcPoints");
async function bowTieRect(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const w = bbox.width + node.padding + 20;
    const h = bbox.height + node.padding;
    const ry = h / 2;
    const rx = ry / (2.5 + h / 50);
    const { cssStyles } = node;
    const points = [
        {
            x: w / 2,
            y: -h / 2
        },
        {
            x: -w / 2,
            y: -h / 2
        },
        ...generateArcPoints(-w / 2, -h / 2, -w / 2, h / 2, rx, ry, false),
        {
            x: w / 2,
            y: h / 2
        },
        ...generateArcPoints(w / 2, h / 2, w / 2, -h / 2, rx, ry, true)
    ];
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const bowTieRectPath = createPathFromPoints(points);
    const bowTieRectShapePath = rc.path(bowTieRectPath, options);
    const bowTieRectShape = shapeSvg.insert(()=>bowTieRectShapePath, ":first-child");
    bowTieRectShape.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        bowTieRectShape.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        bowTieRectShape.selectAll("path").attr("style", nodeStyles);
    }
    bowTieRectShape.attr("transform", `translate(${rx / 2}, 0)`);
    updateNodeBounds(node, bowTieRectShape);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(bowTieRect, "bowTieRect");
;
// src/rendering-util/rendering-elements/shapes/insertPolygonShape.ts
function insertPolygonShape(parent, w, h, points) {
    return parent.insert("polygon", ":first-child").attr("points", points.map(function(d) {
        return d.x + "," + d.y;
    }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(insertPolygonShape, "insertPolygonShape");
// src/rendering-util/rendering-elements/shapes/card.ts
async function card(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const h = bbox.height + node.padding;
    const padding = 12;
    const w = bbox.width + node.padding + padding;
    const left = 0;
    const right = w;
    const top = -h;
    const bottom = 0;
    const points = [
        {
            x: left + padding,
            y: top
        },
        {
            x: right,
            y: top
        },
        {
            x: right,
            y: bottom
        },
        {
            x: left,
            y: bottom
        },
        {
            x: left,
            y: top + padding
        },
        {
            x: left + padding,
            y: top
        }
    ];
    let polygon;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const pathData = createPathFromPoints(points);
        const roughNode = rc.path(pathData, options);
        polygon = shapeSvg.insert(()=>roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
        if (cssStyles) {
            polygon.attr("style", cssStyles);
        }
    } else {
        polygon = insertPolygonShape(shapeSvg, w, h, points);
    }
    if (nodeStyles) {
        polygon.attr("style", nodeStyles);
    }
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(card, "card");
;
function choice(parent, node) {
    const { nodeStyles } = styles2String(node);
    node.label = "";
    const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId ?? node.id);
    const { cssStyles } = node;
    const s = Math.max(28, node.width ?? 0);
    const points = [
        {
            x: 0,
            y: s / 2
        },
        {
            x: s / 2,
            y: 0
        },
        {
            x: 0,
            y: -s / 2
        },
        {
            x: -s / 2,
            y: 0
        }
    ];
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const choicePath = createPathFromPoints(points);
    const roughNode = rc.path(choicePath, options);
    const choiceShape = shapeSvg.insert(()=>roughNode, ":first-child");
    if (cssStyles && node.look !== "handDrawn") {
        choiceShape.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        choiceShape.selectAll("path").attr("style", nodeStyles);
    }
    node.width = 28;
    node.height = 28;
    node.intersect = function(point) {
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(choice, "choice");
;
async function circle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, halfPadding } = await labelHelper(parent, node, getNodeClasses(node));
    const radius = bbox.width / 2 + halfPadding;
    let circleElem;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const roughNode = rc.circle(0, 0, radius * 2, options);
        circleElem = shapeSvg.insert(()=>roughNode, ":first-child");
        circleElem.attr("class", "basic label-container").attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(cssStyles));
    } else {
        circleElem = shapeSvg.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", nodeStyles).attr("r", radius).attr("cx", 0).attr("cy", 0);
    }
    updateNodeBounds(node, circleElem);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("Circle intersect", node, radius, point);
        return intersect_default.circle(node, radius, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(circle, "circle");
;
function createLine(r) {
    const xAxis45 = Math.cos(Math.PI / 4);
    const yAxis45 = Math.sin(Math.PI / 4);
    const lineLength = r * 2;
    const pointQ1 = {
        x: lineLength / 2 * xAxis45,
        y: lineLength / 2 * yAxis45
    };
    const pointQ2 = {
        x: -(lineLength / 2) * xAxis45,
        y: lineLength / 2 * yAxis45
    };
    const pointQ3 = {
        x: -(lineLength / 2) * xAxis45,
        y: -(lineLength / 2) * yAxis45
    };
    const pointQ4 = {
        x: lineLength / 2 * xAxis45,
        y: -(lineLength / 2) * yAxis45
    };
    return `M ${pointQ2.x},${pointQ2.y} L ${pointQ4.x},${pointQ4.y}
                   M ${pointQ1.x},${pointQ1.y} L ${pointQ3.x},${pointQ3.y}`;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(createLine, "createLine");
function crossedCircle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    node.label = "";
    const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId ?? node.id);
    const radius = Math.max(30, node?.width ?? 0);
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const circleNode = rc.circle(0, 0, radius * 2, options);
    const linePath = createLine(radius);
    const lineNode = rc.path(linePath, options);
    const crossedCircle2 = shapeSvg.insert(()=>circleNode, ":first-child");
    crossedCircle2.insert(()=>lineNode);
    if (cssStyles && node.look !== "handDrawn") {
        crossedCircle2.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        crossedCircle2.selectAll("path").attr("style", nodeStyles);
    }
    updateNodeBounds(node, crossedCircle2);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("crossedCircle intersect", node, {
            radius,
            point
        });
        const pos = intersect_default.circle(node, radius, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(crossedCircle, "crossedCircle");
;
function generateCirclePoints2(centerX, centerY, radius, numPoints = 100, startAngle = 0, endAngle = 180) {
    const points = [];
    const startAngleRad = startAngle * Math.PI / 180;
    const endAngleRad = endAngle * Math.PI / 180;
    const angleRange = endAngleRad - startAngleRad;
    const angleStep = angleRange / (numPoints - 1);
    for(let i = 0; i < numPoints; i++){
        const angle = startAngleRad + i * angleStep;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push({
            x: -x,
            y: -y
        });
    }
    return points;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(generateCirclePoints2, "generateCirclePoints");
async function curlyBraceLeft(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = bbox.width + (node.padding ?? 0);
    const h = bbox.height + (node.padding ?? 0);
    const radius = Math.max(5, h * 0.1);
    const { cssStyles } = node;
    const points = [
        ...generateCirclePoints2(w / 2, -h / 2, radius, 30, -90, 0),
        {
            x: -w / 2 - radius,
            y: radius
        },
        ...generateCirclePoints2(w / 2 + radius * 2, -radius, radius, 20, -180, -270),
        ...generateCirclePoints2(w / 2 + radius * 2, radius, radius, 20, -90, -180),
        {
            x: -w / 2 - radius,
            y: -h / 2
        },
        ...generateCirclePoints2(w / 2, h / 2, radius, 20, 0, 90)
    ];
    const rectPoints = [
        {
            x: w / 2,
            y: -h / 2 - radius
        },
        {
            x: -w / 2,
            y: -h / 2 - radius
        },
        ...generateCirclePoints2(w / 2, -h / 2, radius, 20, -90, 0),
        {
            x: -w / 2 - radius,
            y: -radius
        },
        ...generateCirclePoints2(w / 2 + w * 0.1, -radius, radius, 20, -180, -270),
        ...generateCirclePoints2(w / 2 + w * 0.1, radius, radius, 20, -90, -180),
        {
            x: -w / 2 - radius,
            y: h / 2
        },
        ...generateCirclePoints2(w / 2, h / 2, radius, 20, 0, 90),
        {
            x: -w / 2,
            y: h / 2 + radius
        },
        {
            x: w / 2,
            y: h / 2 + radius
        }
    ];
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {
        fill: "none"
    });
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const curlyBraceLeftPath = createPathFromPoints(points);
    const newCurlyBracePath = curlyBraceLeftPath.replace("Z", "");
    const curlyBraceLeftNode = rc.path(newCurlyBracePath, options);
    const rectPath = createPathFromPoints(rectPoints);
    const rectShape = rc.path(rectPath, {
        ...options
    });
    const curlyBraceLeftShape = shapeSvg.insert("g", ":first-child");
    curlyBraceLeftShape.insert(()=>rectShape, ":first-child").attr("stroke-opacity", 0);
    curlyBraceLeftShape.insert(()=>curlyBraceLeftNode, ":first-child");
    curlyBraceLeftShape.attr("class", "text");
    if (cssStyles && node.look !== "handDrawn") {
        curlyBraceLeftShape.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        curlyBraceLeftShape.selectAll("path").attr("style", nodeStyles);
    }
    curlyBraceLeftShape.attr("transform", `translate(${radius}, 0)`);
    label.attr("transform", `translate(${-w / 2 + radius - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, curlyBraceLeftShape);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, rectPoints, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(curlyBraceLeft, "curlyBraceLeft");
;
function generateCirclePoints3(centerX, centerY, radius, numPoints = 100, startAngle = 0, endAngle = 180) {
    const points = [];
    const startAngleRad = startAngle * Math.PI / 180;
    const endAngleRad = endAngle * Math.PI / 180;
    const angleRange = endAngleRad - startAngleRad;
    const angleStep = angleRange / (numPoints - 1);
    for(let i = 0; i < numPoints; i++){
        const angle = startAngleRad + i * angleStep;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push({
            x,
            y
        });
    }
    return points;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(generateCirclePoints3, "generateCirclePoints");
async function curlyBraceRight(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = bbox.width + (node.padding ?? 0);
    const h = bbox.height + (node.padding ?? 0);
    const radius = Math.max(5, h * 0.1);
    const { cssStyles } = node;
    const points = [
        ...generateCirclePoints3(w / 2, -h / 2, radius, 20, -90, 0),
        {
            x: w / 2 + radius,
            y: -radius
        },
        ...generateCirclePoints3(w / 2 + radius * 2, -radius, radius, 20, -180, -270),
        ...generateCirclePoints3(w / 2 + radius * 2, radius, radius, 20, -90, -180),
        {
            x: w / 2 + radius,
            y: h / 2
        },
        ...generateCirclePoints3(w / 2, h / 2, radius, 20, 0, 90)
    ];
    const rectPoints = [
        {
            x: -w / 2,
            y: -h / 2 - radius
        },
        {
            x: w / 2,
            y: -h / 2 - radius
        },
        ...generateCirclePoints3(w / 2, -h / 2, radius, 20, -90, 0),
        {
            x: w / 2 + radius,
            y: -radius
        },
        ...generateCirclePoints3(w / 2 + radius * 2, -radius, radius, 20, -180, -270),
        ...generateCirclePoints3(w / 2 + radius * 2, radius, radius, 20, -90, -180),
        {
            x: w / 2 + radius,
            y: h / 2
        },
        ...generateCirclePoints3(w / 2, h / 2, radius, 20, 0, 90),
        {
            x: w / 2,
            y: h / 2 + radius
        },
        {
            x: -w / 2,
            y: h / 2 + radius
        }
    ];
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {
        fill: "none"
    });
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const curlyBraceRightPath = createPathFromPoints(points);
    const newCurlyBracePath = curlyBraceRightPath.replace("Z", "");
    const curlyBraceRightNode = rc.path(newCurlyBracePath, options);
    const rectPath = createPathFromPoints(rectPoints);
    const rectShape = rc.path(rectPath, {
        ...options
    });
    const curlyBraceRightShape = shapeSvg.insert("g", ":first-child");
    curlyBraceRightShape.insert(()=>rectShape, ":first-child").attr("stroke-opacity", 0);
    curlyBraceRightShape.insert(()=>curlyBraceRightNode, ":first-child");
    curlyBraceRightShape.attr("class", "text");
    if (cssStyles && node.look !== "handDrawn") {
        curlyBraceRightShape.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        curlyBraceRightShape.selectAll("path").attr("style", nodeStyles);
    }
    curlyBraceRightShape.attr("transform", `translate(${-radius}, 0)`);
    label.attr("transform", `translate(${-w / 2 + (node.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, curlyBraceRightShape);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, rectPoints, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(curlyBraceRight, "curlyBraceRight");
;
function generateCirclePoints4(centerX, centerY, radius, numPoints = 100, startAngle = 0, endAngle = 180) {
    const points = [];
    const startAngleRad = startAngle * Math.PI / 180;
    const endAngleRad = endAngle * Math.PI / 180;
    const angleRange = endAngleRad - startAngleRad;
    const angleStep = angleRange / (numPoints - 1);
    for(let i = 0; i < numPoints; i++){
        const angle = startAngleRad + i * angleStep;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push({
            x: -x,
            y: -y
        });
    }
    return points;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(generateCirclePoints4, "generateCirclePoints");
async function curlyBraces(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = bbox.width + (node.padding ?? 0);
    const h = bbox.height + (node.padding ?? 0);
    const radius = Math.max(5, h * 0.1);
    const { cssStyles } = node;
    const leftCurlyBracePoints = [
        ...generateCirclePoints4(w / 2, -h / 2, radius, 30, -90, 0),
        {
            x: -w / 2 - radius,
            y: radius
        },
        ...generateCirclePoints4(w / 2 + radius * 2, -radius, radius, 20, -180, -270),
        ...generateCirclePoints4(w / 2 + radius * 2, radius, radius, 20, -90, -180),
        {
            x: -w / 2 - radius,
            y: -h / 2
        },
        ...generateCirclePoints4(w / 2, h / 2, radius, 20, 0, 90)
    ];
    const rightCurlyBracePoints = [
        ...generateCirclePoints4(-w / 2 + radius + radius / 2, -h / 2, radius, 20, -90, -180),
        {
            x: w / 2 - radius / 2,
            y: radius
        },
        ...generateCirclePoints4(-w / 2 - radius / 2, -radius, radius, 20, 0, 90),
        ...generateCirclePoints4(-w / 2 - radius / 2, radius, radius, 20, -90, 0),
        {
            x: w / 2 - radius / 2,
            y: -radius
        },
        ...generateCirclePoints4(-w / 2 + radius + radius / 2, h / 2, radius, 30, -180, -270)
    ];
    const rectPoints = [
        {
            x: w / 2,
            y: -h / 2 - radius
        },
        {
            x: -w / 2,
            y: -h / 2 - radius
        },
        ...generateCirclePoints4(w / 2, -h / 2, radius, 20, -90, 0),
        {
            x: -w / 2 - radius,
            y: -radius
        },
        ...generateCirclePoints4(w / 2 + radius * 2, -radius, radius, 20, -180, -270),
        ...generateCirclePoints4(w / 2 + radius * 2, radius, radius, 20, -90, -180),
        {
            x: -w / 2 - radius,
            y: h / 2
        },
        ...generateCirclePoints4(w / 2, h / 2, radius, 20, 0, 90),
        {
            x: -w / 2,
            y: h / 2 + radius
        },
        {
            x: w / 2 - radius - radius / 2,
            y: h / 2 + radius
        },
        ...generateCirclePoints4(-w / 2 + radius + radius / 2, -h / 2, radius, 20, -90, -180),
        {
            x: w / 2 - radius / 2,
            y: radius
        },
        ...generateCirclePoints4(-w / 2 - radius / 2, -radius, radius, 20, 0, 90),
        ...generateCirclePoints4(-w / 2 - radius / 2, radius, radius, 20, -90, 0),
        {
            x: w / 2 - radius / 2,
            y: -radius
        },
        ...generateCirclePoints4(-w / 2 + radius + radius / 2, h / 2, radius, 30, -180, -270)
    ];
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {
        fill: "none"
    });
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const leftCurlyBracePath = createPathFromPoints(leftCurlyBracePoints);
    const newLeftCurlyBracePath = leftCurlyBracePath.replace("Z", "");
    const leftCurlyBraceNode = rc.path(newLeftCurlyBracePath, options);
    const rightCurlyBracePath = createPathFromPoints(rightCurlyBracePoints);
    const newRightCurlyBracePath = rightCurlyBracePath.replace("Z", "");
    const rightCurlyBraceNode = rc.path(newRightCurlyBracePath, options);
    const rectPath = createPathFromPoints(rectPoints);
    const rectShape = rc.path(rectPath, {
        ...options
    });
    const curlyBracesShape = shapeSvg.insert("g", ":first-child");
    curlyBracesShape.insert(()=>rectShape, ":first-child").attr("stroke-opacity", 0);
    curlyBracesShape.insert(()=>leftCurlyBraceNode, ":first-child");
    curlyBracesShape.insert(()=>rightCurlyBraceNode, ":first-child");
    curlyBracesShape.attr("class", "text");
    if (cssStyles && node.look !== "handDrawn") {
        curlyBracesShape.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        curlyBracesShape.selectAll("path").attr("style", nodeStyles);
    }
    curlyBracesShape.attr("transform", `translate(${radius - radius / 4}, 0)`);
    label.attr("transform", `translate(${-w / 2 + (node.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, curlyBracesShape);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, rectPoints, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(curlyBraces, "curlyBraces");
;
async function curvedTrapezoid(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const minWidth = 80, minHeight = 20;
    const w = Math.max(minWidth, (bbox.width + (node.padding ?? 0) * 2) * 1.25, node?.width ?? 0);
    const h = Math.max(minHeight, bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const radius = h / 2;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const totalWidth = w, totalHeight = h;
    const rw = totalWidth - radius;
    const tw = totalHeight / 4;
    const points = [
        {
            x: rw,
            y: 0
        },
        {
            x: tw,
            y: 0
        },
        {
            x: 0,
            y: totalHeight / 2
        },
        {
            x: tw,
            y: totalHeight
        },
        {
            x: rw,
            y: totalHeight
        },
        ...generateCirclePoints(-rw, -totalHeight / 2, radius, 50, 270, 90)
    ];
    const pathData = createPathFromPoints(points);
    const shapeNode = rc.path(pathData, options);
    const polygon = shapeSvg.insert(()=>shapeNode, ":first-child");
    polygon.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", nodeStyles);
    }
    polygon.attr("transform", `translate(${-w / 2}, ${-h / 2})`);
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(curvedTrapezoid, "curvedTrapezoid");
;
var createCylinderPathD = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, width, height, rx, ry)=>{
    return [
        `M${x},${y + ry}`,
        `a${rx},${ry} 0,0,0 ${width},0`,
        `a${rx},${ry} 0,0,0 ${-width},0`,
        `l0,${height}`,
        `a${rx},${ry} 0,0,0 ${width},0`,
        `l0,${-height}`
    ].join(" ");
}, "createCylinderPathD");
var createOuterCylinderPathD = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, width, height, rx, ry)=>{
    return [
        `M${x},${y + ry}`,
        `M${x + width},${y + ry}`,
        `a${rx},${ry} 0,0,0 ${-width},0`,
        `l0,${height}`,
        `a${rx},${ry} 0,0,0 ${width},0`,
        `l0,${-height}`
    ].join(" ");
}, "createOuterCylinderPathD");
var createInnerCylinderPathD = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, width, height, rx, ry)=>{
    return [
        `M${x - width / 2},${-height / 2}`,
        `a${rx},${ry} 0,0,0 ${width},0`
    ].join(" ");
}, "createInnerCylinderPathD");
async function cylinder(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + node.padding, node.width ?? 0);
    const rx = w / 2;
    const ry = rx / (2.5 + w / 50);
    const h = Math.max(bbox.height + ry + node.padding, node.height ?? 0);
    let cylinder2;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const outerPathData = createOuterCylinderPathD(0, 0, w, h, rx, ry);
        const innerPathData = createInnerCylinderPathD(0, ry, w, h, rx, ry);
        const outerNode = rc.path(outerPathData, userNodeOverrides(node, {}));
        const innerLine = rc.path(innerPathData, userNodeOverrides(node, {
            fill: "none"
        }));
        cylinder2 = shapeSvg.insert(()=>innerLine, ":first-child");
        cylinder2 = shapeSvg.insert(()=>outerNode, ":first-child");
        cylinder2.attr("class", "basic label-container");
        if (cssStyles) {
            cylinder2.attr("style", cssStyles);
        }
    } else {
        const pathData = createCylinderPathD(0, 0, w, h, rx, ry);
        cylinder2 = shapeSvg.insert("path", ":first-child").attr("d", pathData).attr("class", "basic label-container").attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(cssStyles)).attr("style", nodeStyles);
    }
    cylinder2.attr("label-offset-y", ry);
    cylinder2.attr("transform", `translate(${-w / 2}, ${-(h / 2 + ry)})`);
    updateNodeBounds(node, cylinder2);
    label.attr("transform", `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + (node.padding ?? 0) / 1.5 - (bbox.y - (bbox.top ?? 0))})`);
    node.intersect = function(point) {
        const pos = intersect_default.rect(node, point);
        const x = pos.x - (node.x ?? 0);
        if (rx != 0 && (Math.abs(x) < (node.width ?? 0) / 2 || Math.abs(x) == (node.width ?? 0) / 2 && Math.abs(pos.y - (node.y ?? 0)) > (node.height ?? 0) / 2 - ry)) {
            let y = ry * ry * (1 - x * x / (rx * rx));
            if (y > 0) {
                y = Math.sqrt(y);
            }
            y = ry - y;
            if (point.y - (node.y ?? 0) > 0) {
                y = -y;
            }
            pos.y += y;
        }
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(cylinder, "cylinder");
;
async function dividedRectangle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const rectOffset = h * 0.2;
    const x = -w / 2;
    const y = -h / 2 - rectOffset / 2;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const pts = [
        {
            x,
            y: y + rectOffset
        },
        {
            x: -x,
            y: y + rectOffset
        },
        {
            x: -x,
            y: -y
        },
        {
            x,
            y: -y
        },
        {
            x,
            y
        },
        {
            x: -x,
            y
        },
        {
            x: -x,
            y: y + rectOffset
        }
    ];
    const poly = rc.polygon(pts.map((p)=>[
            p.x,
            p.y
        ]), options);
    const polygon = shapeSvg.insert(()=>poly, ":first-child");
    polygon.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        polygon.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        polygon.selectAll("path").attr("style", nodeStyles);
    }
    label.attr("transform", `translate(${x + (node.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))}, ${y + rectOffset + (node.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        const pos = intersect_default.rect(node, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(dividedRectangle, "dividedRectangle");
;
async function doublecircle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, halfPadding } = await labelHelper(parent, node, getNodeClasses(node));
    const gap = 5;
    const outerRadius = bbox.width / 2 + halfPadding + gap;
    const innerRadius = bbox.width / 2 + halfPadding;
    let circleGroup;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const outerOptions = userNodeOverrides(node, {
            roughness: 0.2,
            strokeWidth: 2.5
        });
        const innerOptions = userNodeOverrides(node, {
            roughness: 0.2,
            strokeWidth: 1.5
        });
        const outerRoughNode = rc.circle(0, 0, outerRadius * 2, outerOptions);
        const innerRoughNode = rc.circle(0, 0, innerRadius * 2, innerOptions);
        circleGroup = shapeSvg.insert("g", ":first-child");
        circleGroup.attr("class", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(node.cssClasses)).attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(cssStyles));
        circleGroup.node()?.appendChild(outerRoughNode);
        circleGroup.node()?.appendChild(innerRoughNode);
    } else {
        circleGroup = shapeSvg.insert("g", ":first-child");
        const outerCircle = circleGroup.insert("circle", ":first-child");
        const innerCircle = circleGroup.insert("circle");
        circleGroup.attr("class", "basic label-container").attr("style", nodeStyles);
        outerCircle.attr("class", "outer-circle").attr("style", nodeStyles).attr("r", outerRadius).attr("cx", 0).attr("cy", 0);
        innerCircle.attr("class", "inner-circle").attr("style", nodeStyles).attr("r", innerRadius).attr("cx", 0).attr("cy", 0);
    }
    updateNodeBounds(node, circleGroup);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("DoubleCircle intersect", node, outerRadius, point);
        return intersect_default.circle(node, outerRadius, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(doublecircle, "doublecircle");
;
function filledCircle(parent, node, { config: { themeVariables } }) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.label = "";
    node.labelStyle = labelStyles;
    const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId ?? node.id);
    const radius = 7;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const { nodeBorder } = themeVariables;
    const options = userNodeOverrides(node, {
        fillStyle: "solid"
    });
    if (node.look !== "handDrawn") {
        options.roughness = 0;
    }
    const circleNode = rc.circle(0, 0, radius * 2, options);
    const filledCircle2 = shapeSvg.insert(()=>circleNode, ":first-child");
    filledCircle2.selectAll("path").attr("style", `fill: ${nodeBorder} !important;`);
    if (cssStyles && cssStyles.length > 0 && node.look !== "handDrawn") {
        filledCircle2.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        filledCircle2.selectAll("path").attr("style", nodeStyles);
    }
    updateNodeBounds(node, filledCircle2);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("filledCircle intersect", node, {
            radius,
            point
        });
        const pos = intersect_default.circle(node, radius, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(filledCircle, "filledCircle");
;
async function flippedTriangle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = bbox.width + (node.padding ?? 0);
    const h = w + bbox.height;
    const tw = w + bbox.height;
    const points = [
        {
            x: 0,
            y: -h
        },
        {
            x: tw,
            y: -h
        },
        {
            x: tw / 2,
            y: 0
        }
    ];
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const pathData = createPathFromPoints(points);
    const roughNode = rc.path(pathData, options);
    const flippedTriangle2 = shapeSvg.insert(()=>roughNode, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`);
    if (cssStyles && node.look !== "handDrawn") {
        flippedTriangle2.selectChildren("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        flippedTriangle2.selectChildren("path").attr("style", nodeStyles);
    }
    node.width = w;
    node.height = h;
    updateNodeBounds(node, flippedTriangle2);
    label.attr("transform", `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-h / 2 + (node.padding ?? 0) / 2 + (bbox.y - (bbox.top ?? 0))})`);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("Triangle intersect", node, points, point);
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(flippedTriangle, "flippedTriangle");
;
function forkJoin(parent, node, { dir, config: { state: state2, themeVariables } }) {
    const { nodeStyles } = styles2String(node);
    node.label = "";
    const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId ?? node.id);
    const { cssStyles } = node;
    let width = Math.max(70, node?.width ?? 0);
    let height = Math.max(10, node?.height ?? 0);
    if (dir === "LR") {
        width = Math.max(10, node?.width ?? 0);
        height = Math.max(70, node?.height ?? 0);
    }
    const x = -1 * width / 2;
    const y = -1 * height / 2;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {
        stroke: themeVariables.lineColor,
        fill: themeVariables.lineColor
    });
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const roughNode = rc.rectangle(x, y, width, height, options);
    const shape = shapeSvg.insert(()=>roughNode, ":first-child");
    if (cssStyles && node.look !== "handDrawn") {
        shape.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        shape.selectAll("path").attr("style", nodeStyles);
    }
    updateNodeBounds(node, shape);
    const padding = state2?.padding ?? 0;
    if (node.width && node.height) {
        node.width += padding / 2 || 0;
        node.height += padding / 2 || 0;
    }
    node.intersect = function(point) {
        return intersect_default.rect(node, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(forkJoin, "forkJoin");
;
async function halfRoundedRectangle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const minWidth = 80, minHeight = 50;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(minWidth, bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(minHeight, bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const radius = h / 2;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const points = [
        {
            x: -w / 2,
            y: -h / 2
        },
        {
            x: w / 2 - radius,
            y: -h / 2
        },
        ...generateCirclePoints(-w / 2 + radius, 0, radius, 50, 90, 270),
        {
            x: w / 2 - radius,
            y: h / 2
        },
        {
            x: -w / 2,
            y: h / 2
        }
    ];
    const pathData = createPathFromPoints(points);
    const shapeNode = rc.path(pathData, options);
    const polygon = shapeSvg.insert(()=>shapeNode, ":first-child");
    polygon.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", nodeStyles);
    }
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("Pill intersect", node, {
            radius,
            point
        });
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(halfRoundedRectangle, "halfRoundedRectangle");
;
var createHexagonPathD = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, width, height, m)=>{
    return [
        `M${x + m},${y}`,
        `L${x + width - m},${y}`,
        `L${x + width},${y - height / 2}`,
        `L${x + width - m},${y - height}`,
        `L${x + m},${y - height}`,
        `L${x},${y - height / 2}`,
        "Z"
    ].join(" ");
}, "createHexagonPathD");
async function hexagon(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const f = 4;
    const h = bbox.height + node.padding;
    const m = h / f;
    const w = bbox.width + 2 * m + node.padding;
    const points = [
        {
            x: m,
            y: 0
        },
        {
            x: w - m,
            y: 0
        },
        {
            x: w,
            y: -h / 2
        },
        {
            x: w - m,
            y: -h
        },
        {
            x: m,
            y: -h
        },
        {
            x: 0,
            y: -h / 2
        }
    ];
    let polygon;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const pathData = createHexagonPathD(0, 0, w, h, m);
        const roughNode = rc.path(pathData, options);
        polygon = shapeSvg.insert(()=>roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
        if (cssStyles) {
            polygon.attr("style", cssStyles);
        }
    } else {
        polygon = insertPolygonShape(shapeSvg, w, h, points);
    }
    if (nodeStyles) {
        polygon.attr("style", nodeStyles);
    }
    node.width = w;
    node.height = h;
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(hexagon, "hexagon");
;
async function hourglass(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.label = "";
    node.labelStyle = labelStyles;
    const { shapeSvg } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(30, node?.width ?? 0);
    const h = Math.max(30, node?.height ?? 0);
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const points = [
        {
            x: 0,
            y: 0
        },
        {
            x: w,
            y: 0
        },
        {
            x: 0,
            y: h
        },
        {
            x: w,
            y: h
        }
    ];
    const pathData = createPathFromPoints(points);
    const shapeNode = rc.path(pathData, options);
    const polygon = shapeSvg.insert(()=>shapeNode, ":first-child");
    polygon.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", nodeStyles);
    }
    polygon.attr("transform", `translate(${-w / 2}, ${-h / 2})`);
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("Pill intersect", node, {
            points
        });
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(hourglass, "hourglass");
;
async function icon(parent, node, { config: { themeVariables, flowchart } }) {
    const { labelStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const assetHeight = node.assetHeight ?? 48;
    const assetWidth = node.assetWidth ?? 48;
    const iconSize = Math.max(assetHeight, assetWidth);
    const defaultWidth = flowchart?.wrappingWidth;
    node.width = Math.max(iconSize, defaultWidth ?? 0);
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, "icon-shape default");
    const topLabel = node.pos === "t";
    const height = iconSize;
    const width = iconSize;
    const { nodeBorder } = themeVariables;
    const { stylesMap } = compileStyles(node);
    const x = -width / 2;
    const y = -height / 2;
    const labelPadding = node.label ? 8 : 0;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {
        stroke: "none",
        fill: "none"
    });
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const iconNode = rc.rectangle(x, y, width, height, options);
    const outerWidth = Math.max(width, bbox.width);
    const outerHeight = height + bbox.height + labelPadding;
    const outerNode = rc.rectangle(-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight, {
        ...options,
        fill: "transparent",
        stroke: "none"
    });
    const iconShape = shapeSvg.insert(()=>iconNode, ":first-child");
    const outerShape = shapeSvg.insert(()=>outerNode);
    if (node.icon) {
        const iconElem = shapeSvg.append("g");
        iconElem.html(`<g>${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$OPO4IU42$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIconSVG"])(node.icon, {
            height: iconSize,
            width: iconSize,
            fallbackPrefix: ""
        })}</g>`);
        const iconBBox = iconElem.node().getBBox();
        const iconWidth = iconBBox.width;
        const iconHeight = iconBBox.height;
        const iconX = iconBBox.x;
        const iconY = iconBBox.y;
        iconElem.attr("transform", `translate(${-iconWidth / 2 - iconX},${topLabel ? bbox.height / 2 + labelPadding / 2 - iconHeight / 2 - iconY : -bbox.height / 2 - labelPadding / 2 - iconHeight / 2 - iconY})`);
        iconElem.attr("style", `color: ${stylesMap.get("stroke") ?? nodeBorder};`);
    }
    label.attr("transform", `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${topLabel ? -outerHeight / 2 : outerHeight / 2 - bbox.height})`);
    iconShape.attr("transform", `translate(${0},${topLabel ? bbox.height / 2 + labelPadding / 2 : -bbox.height / 2 - labelPadding / 2})`);
    updateNodeBounds(node, outerShape);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("iconSquare intersect", node, point);
        if (!node.label) {
            return intersect_default.rect(node, point);
        }
        const dx = node.x ?? 0;
        const dy = node.y ?? 0;
        const nodeHeight = node.height ?? 0;
        let points = [];
        if (topLabel) {
            points = [
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx + width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx + width / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - width / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                }
            ];
        } else {
            points = [
                {
                    x: dx - width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + width / 2,
                    y: dy - nodeHeight / 2 + height
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2 + height
                },
                {
                    x: dx + bbox.width / 2 / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2 + height
                },
                {
                    x: dx - width / 2,
                    y: dy - nodeHeight / 2 + height
                }
            ];
        }
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(icon, "icon");
;
async function iconCircle(parent, node, { config: { themeVariables, flowchart } }) {
    const { labelStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const assetHeight = node.assetHeight ?? 48;
    const assetWidth = node.assetWidth ?? 48;
    const iconSize = Math.max(assetHeight, assetWidth);
    const defaultWidth = flowchart?.wrappingWidth;
    node.width = Math.max(iconSize, defaultWidth ?? 0);
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, "icon-shape default");
    const padding = 20;
    const labelPadding = node.label ? 8 : 0;
    const topLabel = node.pos === "t";
    const { nodeBorder, mainBkg } = themeVariables;
    const { stylesMap } = compileStyles(node);
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const fill = stylesMap.get("fill");
    options.stroke = fill ?? mainBkg;
    const iconElem = shapeSvg.append("g");
    if (node.icon) {
        iconElem.html(`<g>${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$OPO4IU42$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIconSVG"])(node.icon, {
            height: iconSize,
            width: iconSize,
            fallbackPrefix: ""
        })}</g>`);
    }
    const iconBBox = iconElem.node().getBBox();
    const iconWidth = iconBBox.width;
    const iconHeight = iconBBox.height;
    const iconX = iconBBox.x;
    const iconY = iconBBox.y;
    const diameter = Math.max(iconWidth, iconHeight) * Math.SQRT2 + padding * 2;
    const iconNode = rc.circle(0, 0, diameter, options);
    const outerWidth = Math.max(diameter, bbox.width);
    const outerHeight = diameter + bbox.height + labelPadding;
    const outerNode = rc.rectangle(-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight, {
        ...options,
        fill: "transparent",
        stroke: "none"
    });
    const iconShape = shapeSvg.insert(()=>iconNode, ":first-child");
    const outerShape = shapeSvg.insert(()=>outerNode);
    iconElem.attr("transform", `translate(${-iconWidth / 2 - iconX},${topLabel ? bbox.height / 2 + labelPadding / 2 - iconHeight / 2 - iconY : -bbox.height / 2 - labelPadding / 2 - iconHeight / 2 - iconY})`);
    iconElem.attr("style", `color: ${stylesMap.get("stroke") ?? nodeBorder};`);
    label.attr("transform", `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${topLabel ? -outerHeight / 2 : outerHeight / 2 - bbox.height})`);
    iconShape.attr("transform", `translate(${0},${topLabel ? bbox.height / 2 + labelPadding / 2 : -bbox.height / 2 - labelPadding / 2})`);
    updateNodeBounds(node, outerShape);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("iconSquare intersect", node, point);
        const pos = intersect_default.rect(node, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(iconCircle, "iconCircle");
;
async function iconRounded(parent, node, { config: { themeVariables, flowchart } }) {
    const { labelStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const assetHeight = node.assetHeight ?? 48;
    const assetWidth = node.assetWidth ?? 48;
    const iconSize = Math.max(assetHeight, assetWidth);
    const defaultWidth = flowchart?.wrappingWidth;
    node.width = Math.max(iconSize, defaultWidth ?? 0);
    const { shapeSvg, bbox, halfPadding, label } = await labelHelper(parent, node, "icon-shape default");
    const topLabel = node.pos === "t";
    const height = iconSize + halfPadding * 2;
    const width = iconSize + halfPadding * 2;
    const { nodeBorder, mainBkg } = themeVariables;
    const { stylesMap } = compileStyles(node);
    const x = -width / 2;
    const y = -height / 2;
    const labelPadding = node.label ? 8 : 0;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const fill = stylesMap.get("fill");
    options.stroke = fill ?? mainBkg;
    const iconNode = rc.path(createRoundedRectPathD(x, y, width, height, 5), options);
    const outerWidth = Math.max(width, bbox.width);
    const outerHeight = height + bbox.height + labelPadding;
    const outerNode = rc.rectangle(-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight, {
        ...options,
        fill: "transparent",
        stroke: "none"
    });
    const iconShape = shapeSvg.insert(()=>iconNode, ":first-child").attr("class", "icon-shape2");
    const outerShape = shapeSvg.insert(()=>outerNode);
    if (node.icon) {
        const iconElem = shapeSvg.append("g");
        iconElem.html(`<g>${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$OPO4IU42$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIconSVG"])(node.icon, {
            height: iconSize,
            width: iconSize,
            fallbackPrefix: ""
        })}</g>`);
        const iconBBox = iconElem.node().getBBox();
        const iconWidth = iconBBox.width;
        const iconHeight = iconBBox.height;
        const iconX = iconBBox.x;
        const iconY = iconBBox.y;
        iconElem.attr("transform", `translate(${-iconWidth / 2 - iconX},${topLabel ? bbox.height / 2 + labelPadding / 2 - iconHeight / 2 - iconY : -bbox.height / 2 - labelPadding / 2 - iconHeight / 2 - iconY})`);
        iconElem.attr("style", `color: ${stylesMap.get("stroke") ?? nodeBorder};`);
    }
    label.attr("transform", `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${topLabel ? -outerHeight / 2 : outerHeight / 2 - bbox.height})`);
    iconShape.attr("transform", `translate(${0},${topLabel ? bbox.height / 2 + labelPadding / 2 : -bbox.height / 2 - labelPadding / 2})`);
    updateNodeBounds(node, outerShape);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("iconSquare intersect", node, point);
        if (!node.label) {
            return intersect_default.rect(node, point);
        }
        const dx = node.x ?? 0;
        const dy = node.y ?? 0;
        const nodeHeight = node.height ?? 0;
        let points = [];
        if (topLabel) {
            points = [
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx + width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx + width / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - width / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                }
            ];
        } else {
            points = [
                {
                    x: dx - width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + width / 2,
                    y: dy - nodeHeight / 2 + height
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2 + height
                },
                {
                    x: dx + bbox.width / 2 / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2 + height
                },
                {
                    x: dx - width / 2,
                    y: dy - nodeHeight / 2 + height
                }
            ];
        }
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(iconRounded, "iconRounded");
;
async function iconSquare(parent, node, { config: { themeVariables, flowchart } }) {
    const { labelStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const assetHeight = node.assetHeight ?? 48;
    const assetWidth = node.assetWidth ?? 48;
    const iconSize = Math.max(assetHeight, assetWidth);
    const defaultWidth = flowchart?.wrappingWidth;
    node.width = Math.max(iconSize, defaultWidth ?? 0);
    const { shapeSvg, bbox, halfPadding, label } = await labelHelper(parent, node, "icon-shape default");
    const topLabel = node.pos === "t";
    const height = iconSize + halfPadding * 2;
    const width = iconSize + halfPadding * 2;
    const { nodeBorder, mainBkg } = themeVariables;
    const { stylesMap } = compileStyles(node);
    const x = -width / 2;
    const y = -height / 2;
    const labelPadding = node.label ? 8 : 0;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const fill = stylesMap.get("fill");
    options.stroke = fill ?? mainBkg;
    const iconNode = rc.path(createRoundedRectPathD(x, y, width, height, 0.1), options);
    const outerWidth = Math.max(width, bbox.width);
    const outerHeight = height + bbox.height + labelPadding;
    const outerNode = rc.rectangle(-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight, {
        ...options,
        fill: "transparent",
        stroke: "none"
    });
    const iconShape = shapeSvg.insert(()=>iconNode, ":first-child");
    const outerShape = shapeSvg.insert(()=>outerNode);
    if (node.icon) {
        const iconElem = shapeSvg.append("g");
        iconElem.html(`<g>${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$OPO4IU42$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIconSVG"])(node.icon, {
            height: iconSize,
            width: iconSize,
            fallbackPrefix: ""
        })}</g>`);
        const iconBBox = iconElem.node().getBBox();
        const iconWidth = iconBBox.width;
        const iconHeight = iconBBox.height;
        const iconX = iconBBox.x;
        const iconY = iconBBox.y;
        iconElem.attr("transform", `translate(${-iconWidth / 2 - iconX},${topLabel ? bbox.height / 2 + labelPadding / 2 - iconHeight / 2 - iconY : -bbox.height / 2 - labelPadding / 2 - iconHeight / 2 - iconY})`);
        iconElem.attr("style", `color: ${stylesMap.get("stroke") ?? nodeBorder};`);
    }
    label.attr("transform", `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${topLabel ? -outerHeight / 2 : outerHeight / 2 - bbox.height})`);
    iconShape.attr("transform", `translate(${0},${topLabel ? bbox.height / 2 + labelPadding / 2 : -bbox.height / 2 - labelPadding / 2})`);
    updateNodeBounds(node, outerShape);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("iconSquare intersect", node, point);
        if (!node.label) {
            return intersect_default.rect(node, point);
        }
        const dx = node.x ?? 0;
        const dy = node.y ?? 0;
        const nodeHeight = node.height ?? 0;
        let points = [];
        if (topLabel) {
            points = [
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx + width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx + width / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - width / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                }
            ];
        } else {
            points = [
                {
                    x: dx - width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + width / 2,
                    y: dy - nodeHeight / 2 + height
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2 + height
                },
                {
                    x: dx + bbox.width / 2 / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2 + height
                },
                {
                    x: dx - width / 2,
                    y: dy - nodeHeight / 2 + height
                }
            ];
        }
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(iconSquare, "iconSquare");
;
async function imageSquare(parent, node, { config: { flowchart } }) {
    const img = new Image();
    img.src = node?.img ?? "";
    await img.decode();
    const imageNaturalWidth = Number(img.naturalWidth.toString().replace("px", ""));
    const imageNaturalHeight = Number(img.naturalHeight.toString().replace("px", ""));
    node.imageAspectRatio = imageNaturalWidth / imageNaturalHeight;
    const { labelStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const defaultWidth = flowchart?.wrappingWidth;
    node.defaultWidth = flowchart?.wrappingWidth;
    const imageRawWidth = Math.max(node.label ? defaultWidth ?? 0 : 0, node?.assetWidth ?? imageNaturalWidth);
    const imageWidth = node.constraint === "on" ? node?.assetHeight ? node.assetHeight * node.imageAspectRatio : imageRawWidth : imageRawWidth;
    const imageHeight = node.constraint === "on" ? imageWidth / node.imageAspectRatio : node?.assetHeight ?? imageNaturalHeight;
    node.width = Math.max(imageWidth, defaultWidth ?? 0);
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, "image-shape default");
    const topLabel = node.pos === "t";
    const x = -imageWidth / 2;
    const y = -imageHeight / 2;
    const labelPadding = node.label ? 8 : 0;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const imageNode = rc.rectangle(x, y, imageWidth, imageHeight, options);
    const outerWidth = Math.max(imageWidth, bbox.width);
    const outerHeight = imageHeight + bbox.height + labelPadding;
    const outerNode = rc.rectangle(-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight, {
        ...options,
        fill: "none",
        stroke: "none"
    });
    const iconShape = shapeSvg.insert(()=>imageNode, ":first-child");
    const outerShape = shapeSvg.insert(()=>outerNode);
    if (node.img) {
        const image = shapeSvg.append("image");
        image.attr("href", node.img);
        image.attr("width", imageWidth);
        image.attr("height", imageHeight);
        image.attr("preserveAspectRatio", "none");
        image.attr("transform", `translate(${-imageWidth / 2},${topLabel ? outerHeight / 2 - imageHeight : -outerHeight / 2})`);
    }
    label.attr("transform", `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${topLabel ? -imageHeight / 2 - bbox.height / 2 - labelPadding / 2 : imageHeight / 2 - bbox.height / 2 + labelPadding / 2})`);
    iconShape.attr("transform", `translate(${0},${topLabel ? bbox.height / 2 + labelPadding / 2 : -bbox.height / 2 - labelPadding / 2})`);
    updateNodeBounds(node, outerShape);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("iconSquare intersect", node, point);
        if (!node.label) {
            return intersect_default.rect(node, point);
        }
        const dx = node.x ?? 0;
        const dy = node.y ?? 0;
        const nodeHeight = node.height ?? 0;
        let points = [];
        if (topLabel) {
            points = [
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx + imageWidth / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx + imageWidth / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - imageWidth / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - imageWidth / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2 + bbox.height + labelPadding
                }
            ];
        } else {
            points = [
                {
                    x: dx - imageWidth / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + imageWidth / 2,
                    y: dy - nodeHeight / 2
                },
                {
                    x: dx + imageWidth / 2,
                    y: dy - nodeHeight / 2 + imageHeight
                },
                {
                    x: dx + bbox.width / 2,
                    y: dy - nodeHeight / 2 + imageHeight
                },
                {
                    x: dx + bbox.width / 2 / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy + nodeHeight / 2
                },
                {
                    x: dx - bbox.width / 2,
                    y: dy - nodeHeight / 2 + imageHeight
                },
                {
                    x: dx - imageWidth / 2,
                    y: dy - nodeHeight / 2 + imageHeight
                }
            ];
        }
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(imageSquare, "imageSquare");
;
async function inv_trapezoid(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const points = [
        {
            x: 0,
            y: 0
        },
        {
            x: w,
            y: 0
        },
        {
            x: w + 3 * h / 6,
            y: -h
        },
        {
            x: -3 * h / 6,
            y: -h
        }
    ];
    let polygon;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const pathData = createPathFromPoints(points);
        const roughNode = rc.path(pathData, options);
        polygon = shapeSvg.insert(()=>roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
        if (cssStyles) {
            polygon.attr("style", cssStyles);
        }
    } else {
        polygon = insertPolygonShape(shapeSvg, w, h, points);
    }
    if (nodeStyles) {
        polygon.attr("style", nodeStyles);
    }
    node.width = w;
    node.height = h;
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(inv_trapezoid, "inv_trapezoid");
;
async function drawRect(parent, node, options) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const totalWidth = Math.max(bbox.width + options.labelPaddingX * 2, node?.width || 0);
    const totalHeight = Math.max(bbox.height + options.labelPaddingY * 2, node?.height || 0);
    const x = -totalWidth / 2;
    const y = -totalHeight / 2;
    let rect2;
    let { rx, ry } = node;
    const { cssStyles } = node;
    if (options?.rx && options.ry) {
        rx = options.rx;
        ry = options.ry;
    }
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options2 = userNodeOverrides(node, {});
        const roughNode = rx || ry ? rc.path(createRoundedRectPathD(x, y, totalWidth, totalHeight, rx || 0), options2) : rc.rectangle(x, y, totalWidth, totalHeight, options2);
        rect2 = shapeSvg.insert(()=>roughNode, ":first-child");
        rect2.attr("class", "basic label-container").attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(cssStyles));
    } else {
        rect2 = shapeSvg.insert("rect", ":first-child");
        rect2.attr("class", "basic label-container").attr("style", nodeStyles).attr("rx", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(rx)).attr("ry", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(ry)).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
    }
    updateNodeBounds(node, rect2);
    node.intersect = function(point) {
        return intersect_default.rect(node, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(drawRect, "drawRect");
// src/rendering-util/rendering-elements/shapes/labelRect.ts
async function labelRect(parent, node) {
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, "label");
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const totalWidth = 0.1;
    const totalHeight = 0.1;
    rect2.attr("width", totalWidth).attr("height", totalHeight);
    shapeSvg.attr("class", "label edgeLabel");
    label.attr("transform", `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, rect2);
    node.intersect = function(point) {
        return intersect_default.rect(node, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(labelRect, "labelRect");
;
async function lean_left(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0), node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0), node?.height ?? 0);
    const points = [
        {
            x: 0,
            y: 0
        },
        {
            x: w + 3 * h / 6,
            y: 0
        },
        {
            x: w,
            y: -h
        },
        {
            x: -(3 * h) / 6,
            y: -h
        }
    ];
    let polygon;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const pathData = createPathFromPoints(points);
        const roughNode = rc.path(pathData, options);
        polygon = shapeSvg.insert(()=>roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
        if (cssStyles) {
            polygon.attr("style", cssStyles);
        }
    } else {
        polygon = insertPolygonShape(shapeSvg, w, h, points);
    }
    if (nodeStyles) {
        polygon.attr("style", nodeStyles);
    }
    node.width = w;
    node.height = h;
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(lean_left, "lean_left");
;
async function lean_right(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0), node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0), node?.height ?? 0);
    const points = [
        {
            x: -3 * h / 6,
            y: 0
        },
        {
            x: w,
            y: 0
        },
        {
            x: w + 3 * h / 6,
            y: -h
        },
        {
            x: 0,
            y: -h
        }
    ];
    let polygon;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const pathData = createPathFromPoints(points);
        const roughNode = rc.path(pathData, options);
        polygon = shapeSvg.insert(()=>roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
        if (cssStyles) {
            polygon.attr("style", cssStyles);
        }
    } else {
        polygon = insertPolygonShape(shapeSvg, w, h, points);
    }
    if (nodeStyles) {
        polygon.attr("style", nodeStyles);
    }
    node.width = w;
    node.height = h;
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(lean_right, "lean_right");
;
function lightningBolt(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.label = "";
    node.labelStyle = labelStyles;
    const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId ?? node.id);
    const { cssStyles } = node;
    const width = Math.max(35, node?.width ?? 0);
    const height = Math.max(35, node?.height ?? 0);
    const gap = 7;
    const points = [
        {
            x: width,
            y: 0
        },
        {
            x: 0,
            y: height + gap / 2
        },
        {
            x: width - 2 * gap,
            y: height + gap / 2
        },
        {
            x: 0,
            y: 2 * height
        },
        {
            x: width,
            y: height - gap / 2
        },
        {
            x: 2 * gap,
            y: height - gap / 2
        }
    ];
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const linePath = createPathFromPoints(points);
    const lineNode = rc.path(linePath, options);
    const lightningBolt2 = shapeSvg.insert(()=>lineNode, ":first-child");
    if (cssStyles && node.look !== "handDrawn") {
        lightningBolt2.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        lightningBolt2.selectAll("path").attr("style", nodeStyles);
    }
    lightningBolt2.attr("transform", `translate(-${width / 2},${-height})`);
    updateNodeBounds(node, lightningBolt2);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("lightningBolt intersect", node, point);
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(lightningBolt, "lightningBolt");
;
var createCylinderPathD2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, width, height, rx, ry, outerOffset)=>{
    return [
        `M${x},${y + ry}`,
        `a${rx},${ry} 0,0,0 ${width},0`,
        `a${rx},${ry} 0,0,0 ${-width},0`,
        `l0,${height}`,
        `a${rx},${ry} 0,0,0 ${width},0`,
        `l0,${-height}`,
        `M${x},${y + ry + outerOffset}`,
        `a${rx},${ry} 0,0,0 ${width},0`
    ].join(" ");
}, "createCylinderPathD");
var createOuterCylinderPathD2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, width, height, rx, ry, outerOffset)=>{
    return [
        `M${x},${y + ry}`,
        `M${x + width},${y + ry}`,
        `a${rx},${ry} 0,0,0 ${-width},0`,
        `l0,${height}`,
        `a${rx},${ry} 0,0,0 ${width},0`,
        `l0,${-height}`,
        `M${x},${y + ry + outerOffset}`,
        `a${rx},${ry} 0,0,0 ${width},0`
    ].join(" ");
}, "createOuterCylinderPathD");
var createInnerCylinderPathD2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, width, height, rx, ry)=>{
    return [
        `M${x - width / 2},${-height / 2}`,
        `a${rx},${ry} 0,0,0 ${width},0`
    ].join(" ");
}, "createInnerCylinderPathD");
async function linedCylinder(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0), node.width ?? 0);
    const rx = w / 2;
    const ry = rx / (2.5 + w / 50);
    const h = Math.max(bbox.height + ry + (node.padding ?? 0), node.height ?? 0);
    const outerOffset = h * 0.1;
    let cylinder2;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const outerPathData = createOuterCylinderPathD2(0, 0, w, h, rx, ry, outerOffset);
        const innerPathData = createInnerCylinderPathD2(0, ry, w, h, rx, ry);
        const options = userNodeOverrides(node, {});
        const outerNode = rc.path(outerPathData, options);
        const innerLine = rc.path(innerPathData, options);
        const innerLineEl = shapeSvg.insert(()=>innerLine, ":first-child");
        innerLineEl.attr("class", "line");
        cylinder2 = shapeSvg.insert(()=>outerNode, ":first-child");
        cylinder2.attr("class", "basic label-container");
        if (cssStyles) {
            cylinder2.attr("style", cssStyles);
        }
    } else {
        const pathData = createCylinderPathD2(0, 0, w, h, rx, ry, outerOffset);
        cylinder2 = shapeSvg.insert("path", ":first-child").attr("d", pathData).attr("class", "basic label-container").attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(cssStyles)).attr("style", nodeStyles);
    }
    cylinder2.attr("label-offset-y", ry);
    cylinder2.attr("transform", `translate(${-w / 2}, ${-(h / 2 + ry)})`);
    updateNodeBounds(node, cylinder2);
    label.attr("transform", `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + ry - (bbox.y - (bbox.top ?? 0))})`);
    node.intersect = function(point) {
        const pos = intersect_default.rect(node, point);
        const x = pos.x - (node.x ?? 0);
        if (rx != 0 && (Math.abs(x) < (node.width ?? 0) / 2 || Math.abs(x) == (node.width ?? 0) / 2 && Math.abs(pos.y - (node.y ?? 0)) > (node.height ?? 0) / 2 - ry)) {
            let y = ry * ry * (1 - x * x / (rx * rx));
            if (y > 0) {
                y = Math.sqrt(y);
            }
            y = ry - y;
            if (point.y - (node.y ?? 0) > 0) {
                y = -y;
            }
            pos.y += y;
        }
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(linedCylinder, "linedCylinder");
;
async function linedWaveEdgedRect(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const waveAmplitude = h / 4;
    const finalH = h + waveAmplitude;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const points = [
        {
            x: -w / 2 - w / 2 * 0.1,
            y: -finalH / 2
        },
        {
            x: -w / 2 - w / 2 * 0.1,
            y: finalH / 2
        },
        ...generateFullSineWavePoints(-w / 2 - w / 2 * 0.1, finalH / 2, w / 2 + w / 2 * 0.1, finalH / 2, waveAmplitude, 0.8),
        {
            x: w / 2 + w / 2 * 0.1,
            y: -finalH / 2
        },
        {
            x: -w / 2 - w / 2 * 0.1,
            y: -finalH / 2
        },
        {
            x: -w / 2,
            y: -finalH / 2
        },
        {
            x: -w / 2,
            y: finalH / 2 * 1.1
        },
        {
            x: -w / 2,
            y: -finalH / 2
        }
    ];
    const poly = rc.polygon(points.map((p)=>[
            p.x,
            p.y
        ]), options);
    const waveEdgeRect = shapeSvg.insert(()=>poly, ":first-child");
    waveEdgeRect.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        waveEdgeRect.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        waveEdgeRect.selectAll("path").attr("style", nodeStyles);
    }
    waveEdgeRect.attr("transform", `translate(0,${-waveAmplitude / 2})`);
    label.attr("transform", `translate(${-w / 2 + (node.padding ?? 0) + w / 2 * 0.1 / 2 - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) - waveAmplitude / 2 - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, waveEdgeRect);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(linedWaveEdgedRect, "linedWaveEdgedRect");
;
async function multiRect(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const rectOffset = 5;
    const x = -w / 2;
    const y = -h / 2;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    const outerPathPoints = [
        {
            x: x - rectOffset,
            y: y + rectOffset
        },
        {
            x: x - rectOffset,
            y: y + h + rectOffset
        },
        {
            x: x + w - rectOffset,
            y: y + h + rectOffset
        },
        {
            x: x + w - rectOffset,
            y: y + h
        },
        {
            x: x + w,
            y: y + h
        },
        {
            x: x + w,
            y: y + h - rectOffset
        },
        {
            x: x + w + rectOffset,
            y: y + h - rectOffset
        },
        {
            x: x + w + rectOffset,
            y: y - rectOffset
        },
        {
            x: x + rectOffset,
            y: y - rectOffset
        },
        {
            x: x + rectOffset,
            y
        },
        {
            x,
            y
        },
        {
            x,
            y: y + rectOffset
        }
    ];
    const innerPathPoints = [
        {
            x,
            y: y + rectOffset
        },
        {
            x: x + w - rectOffset,
            y: y + rectOffset
        },
        {
            x: x + w - rectOffset,
            y: y + h
        },
        {
            x: x + w,
            y: y + h
        },
        {
            x: x + w,
            y
        },
        {
            x,
            y
        }
    ];
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const outerPath = createPathFromPoints(outerPathPoints);
    const outerNode = rc.path(outerPath, options);
    const innerPath = createPathFromPoints(innerPathPoints);
    const innerNode = rc.path(innerPath, {
        ...options,
        fill: "none"
    });
    const multiRect2 = shapeSvg.insert(()=>innerNode, ":first-child");
    multiRect2.insert(()=>outerNode, ":first-child");
    multiRect2.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        multiRect2.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        multiRect2.selectAll("path").attr("style", nodeStyles);
    }
    label.attr("transform", `translate(${-(bbox.width / 2) - rectOffset - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + rectOffset - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, multiRect2);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, outerPathPoints, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(multiRect, "multiRect");
;
async function multiWaveEdgedRectangle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const waveAmplitude = h / 4;
    const finalH = h + waveAmplitude;
    const x = -w / 2;
    const y = -finalH / 2;
    const rectOffset = 5;
    const { cssStyles } = node;
    const wavePoints = generateFullSineWavePoints(x - rectOffset, y + finalH + rectOffset, x + w - rectOffset, y + finalH + rectOffset, waveAmplitude, 0.8);
    const lastWavePoint = wavePoints?.[wavePoints.length - 1];
    const outerPathPoints = [
        {
            x: x - rectOffset,
            y: y + rectOffset
        },
        {
            x: x - rectOffset,
            y: y + finalH + rectOffset
        },
        ...wavePoints,
        {
            x: x + w - rectOffset,
            y: lastWavePoint.y - rectOffset
        },
        {
            x: x + w,
            y: lastWavePoint.y - rectOffset
        },
        {
            x: x + w,
            y: lastWavePoint.y - 2 * rectOffset
        },
        {
            x: x + w + rectOffset,
            y: lastWavePoint.y - 2 * rectOffset
        },
        {
            x: x + w + rectOffset,
            y: y - rectOffset
        },
        {
            x: x + rectOffset,
            y: y - rectOffset
        },
        {
            x: x + rectOffset,
            y
        },
        {
            x,
            y
        },
        {
            x,
            y: y + rectOffset
        }
    ];
    const innerPathPoints = [
        {
            x,
            y: y + rectOffset
        },
        {
            x: x + w - rectOffset,
            y: y + rectOffset
        },
        {
            x: x + w - rectOffset,
            y: lastWavePoint.y - rectOffset
        },
        {
            x: x + w,
            y: lastWavePoint.y - rectOffset
        },
        {
            x: x + w,
            y
        },
        {
            x,
            y
        }
    ];
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const outerPath = createPathFromPoints(outerPathPoints);
    const outerNode = rc.path(outerPath, options);
    const innerPath = createPathFromPoints(innerPathPoints);
    const innerNode = rc.path(innerPath, options);
    const shape = shapeSvg.insert(()=>outerNode, ":first-child");
    shape.insert(()=>innerNode);
    shape.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        shape.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        shape.selectAll("path").attr("style", nodeStyles);
    }
    shape.attr("transform", `translate(0,${-waveAmplitude / 2})`);
    label.attr("transform", `translate(${-(bbox.width / 2) - rectOffset - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + rectOffset - waveAmplitude / 2 - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, shape);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, outerPathPoints, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(multiWaveEdgedRectangle, "multiWaveEdgedRectangle");
;
async function note(parent, node, { config: { themeVariables } }) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const useHtmlLabels = node.useHtmlLabels || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig"])().flowchart?.htmlLabels !== false;
    if (!useHtmlLabels) {
        node.centerLabel = true;
    }
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const totalWidth = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const totalHeight = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const x = -totalWidth / 2;
    const y = -totalHeight / 2;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {
        fill: themeVariables.noteBkgColor,
        stroke: themeVariables.noteBorderColor
    });
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const noteShapeNode = rc.rectangle(x, y, totalWidth, totalHeight, options);
    const rect2 = shapeSvg.insert(()=>noteShapeNode, ":first-child");
    rect2.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        rect2.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        rect2.selectAll("path").attr("style", nodeStyles);
    }
    updateNodeBounds(node, rect2);
    node.intersect = function(point) {
        return intersect_default.rect(node, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(note, "note");
;
var createDecisionBoxPathD = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, size)=>{
    return [
        `M${x + size / 2},${y}`,
        `L${x + size},${y - size / 2}`,
        `L${x + size / 2},${y - size}`,
        `L${x},${y - size / 2}`,
        "Z"
    ].join(" ");
}, "createDecisionBoxPathD");
async function question(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const s = w + h;
    const points = [
        {
            x: s / 2,
            y: 0
        },
        {
            x: s,
            y: -s / 2
        },
        {
            x: s / 2,
            y: -s
        },
        {
            x: 0,
            y: -s / 2
        }
    ];
    let polygon;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const pathData = createDecisionBoxPathD(0, 0, s);
        const roughNode = rc.path(pathData, options);
        polygon = shapeSvg.insert(()=>roughNode, ":first-child").attr("transform", `translate(${-s / 2}, ${s / 2})`);
        if (cssStyles) {
            polygon.attr("style", cssStyles);
        }
    } else {
        polygon = insertPolygonShape(shapeSvg, s, s, points);
    }
    if (nodeStyles) {
        polygon.attr("style", nodeStyles);
    }
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("APA12 Intersect called SPLIT\npoint:", point, "\nnode:\n", node, "\nres:", intersect_default.polygon(node, points, point));
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(question, "question");
;
async function rect_left_inv_arrow(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0), node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0), node?.height ?? 0);
    const x = -w / 2;
    const y = -h / 2;
    const notch = y / 2;
    const points = [
        {
            x: x + notch,
            y
        },
        {
            x,
            y: 0
        },
        {
            x: x + notch,
            y: -y
        },
        {
            x: -x,
            y: -y
        },
        {
            x: -x,
            y
        }
    ];
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const pathData = createPathFromPoints(points);
    const roughNode = rc.path(pathData, options);
    const polygon = shapeSvg.insert(()=>roughNode, ":first-child");
    polygon.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        polygon.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        polygon.selectAll("path").attr("style", nodeStyles);
    }
    polygon.attr("transform", `translate(${-notch / 2},0)`);
    label.attr("transform", `translate(${-notch / 2 - bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(rect_left_inv_arrow, "rect_left_inv_arrow");
;
;
async function rectWithTitle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    let classes;
    if (!node.cssClasses) {
        classes = "node default";
    } else {
        classes = "node " + node.cssClasses;
    }
    const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
    const g = shapeSvg.insert("g");
    const label = shapeSvg.insert("g").attr("class", "label").attr("style", nodeStyles);
    const description = node.description;
    const title = node.label;
    const text2 = label.node().appendChild(await createLabel_default(title, node.labelStyle, true, true));
    let bbox = {
        width: 0,
        height: 0
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])()?.flowchart?.htmlLabels)) {
        const div2 = text2.children[0];
        const dv2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(text2);
        bbox = div2.getBoundingClientRect();
        dv2.attr("width", bbox.width);
        dv2.attr("height", bbox.height);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("Text 2", description);
    const textRows = description || [];
    const titleBox = text2.getBBox();
    const descr = label.node().appendChild(await createLabel_default(textRows.join ? textRows.join("<br/>") : textRows, node.labelStyle, true, true));
    const div = descr.children[0];
    const dv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(descr);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
    const halfPadding = (node.padding || 0) / 2;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(descr).attr("transform", "translate( " + (bbox.width > titleBox.width ? 0 : (titleBox.width - bbox.width) / 2) + ", " + (titleBox.height + halfPadding + 5) + ")");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(text2).attr("transform", "translate( " + (bbox.width < titleBox.width ? 0 : -(titleBox.width - bbox.width) / 2) + ", 0)");
    bbox = label.node().getBBox();
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + (-bbox.height / 2 - halfPadding + 3) + ")");
    const totalWidth = bbox.width + (node.padding || 0);
    const totalHeight = bbox.height + (node.padding || 0);
    const x = -bbox.width / 2 - halfPadding;
    const y = -bbox.height / 2 - halfPadding;
    let rect2;
    let innerLine;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const roughNode = rc.path(createRoundedRectPathD(x, y, totalWidth, totalHeight, node.rx || 0), options);
        const roughLine = rc.line(-bbox.width / 2 - halfPadding, -bbox.height / 2 - halfPadding + titleBox.height + halfPadding, bbox.width / 2 + halfPadding, -bbox.height / 2 - halfPadding + titleBox.height + halfPadding, options);
        innerLine = shapeSvg.insert(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Rough node insert CXC", roughNode);
            return roughLine;
        }, ":first-child");
        rect2 = shapeSvg.insert(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Rough node insert CXC", roughNode);
            return roughNode;
        }, ":first-child");
    } else {
        rect2 = g.insert("rect", ":first-child");
        innerLine = g.insert("line");
        rect2.attr("class", "outer title-state").attr("style", nodeStyles).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + (node.padding || 0)).attr("height", bbox.height + (node.padding || 0));
        innerLine.attr("class", "divider").attr("x1", -bbox.width / 2 - halfPadding).attr("x2", bbox.width / 2 + halfPadding).attr("y1", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding).attr("y2", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding);
    }
    updateNodeBounds(node, rect2);
    node.intersect = function(point) {
        return intersect_default.rect(node, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(rectWithTitle, "rectWithTitle");
// src/rendering-util/rendering-elements/shapes/roundedRect.ts
async function roundedRect(parent, node) {
    const options = {
        rx: 5,
        ry: 5,
        classes: "",
        labelPaddingX: (node?.padding || 0) * 1,
        labelPaddingY: (node?.padding || 0) * 1
    };
    return drawRect(parent, node, options);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(roundedRect, "roundedRect");
;
async function shadedProcess(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const halfPadding = node?.padding ?? 0;
    const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const x = -bbox.width / 2 - halfPadding;
    const y = -bbox.height / 2 - halfPadding;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const points = [
        {
            x,
            y
        },
        {
            x: x + w + 8,
            y
        },
        {
            x: x + w + 8,
            y: y + h
        },
        {
            x: x - 8,
            y: y + h
        },
        {
            x: x - 8,
            y
        },
        {
            x,
            y
        },
        {
            x,
            y: y + h
        }
    ];
    const roughNode = rc.polygon(points.map((p)=>[
            p.x,
            p.y
        ]), options);
    const rect2 = shapeSvg.insert(()=>roughNode, ":first-child");
    rect2.attr("class", "basic label-container").attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(cssStyles));
    if (nodeStyles && node.look !== "handDrawn") {
        rect2.selectAll("path").attr("style", nodeStyles);
    }
    if (cssStyles && node.look !== "handDrawn") {
        rect2.selectAll("path").attr("style", nodeStyles);
    }
    label.attr("transform", `translate(${-w / 2 + 4 + (node.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, rect2);
    node.intersect = function(point) {
        return intersect_default.rect(node, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(shadedProcess, "shadedProcess");
;
async function slopedRect(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const x = -w / 2;
    const y = -h / 2;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const points = [
        {
            x,
            y
        },
        {
            x,
            y: y + h
        },
        {
            x: x + w,
            y: y + h
        },
        {
            x: x + w,
            y: y - h / 2
        }
    ];
    const pathData = createPathFromPoints(points);
    const shapeNode = rc.path(pathData, options);
    const polygon = shapeSvg.insert(()=>shapeNode, ":first-child");
    polygon.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", nodeStyles);
    }
    polygon.attr("transform", `translate(0, ${h / 4})`);
    label.attr("transform", `translate(${-w / 2 + (node.padding ?? 0) - (bbox.x - (bbox.left ?? 0))}, ${-h / 4 + (node.padding ?? 0) - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(slopedRect, "slopedRect");
// src/rendering-util/rendering-elements/shapes/squareRect.ts
async function squareRect2(parent, node) {
    const options = {
        rx: 0,
        ry: 0,
        classes: "",
        labelPaddingX: (node?.padding || 0) * 2,
        labelPaddingY: (node?.padding || 0) * 1
    };
    return drawRect(parent, node, options);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(squareRect2, "squareRect");
;
async function stadium(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const h = bbox.height + node.padding;
    const w = bbox.width + h / 4 + node.padding;
    let rect2;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const pathData = createRoundedRectPathD(-w / 2, -h / 2, w, h, h / 2);
        const roughNode = rc.path(pathData, options);
        rect2 = shapeSvg.insert(()=>roughNode, ":first-child");
        rect2.attr("class", "basic label-container").attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(cssStyles));
    } else {
        rect2 = shapeSvg.insert("rect", ":first-child");
        rect2.attr("class", "basic label-container").attr("style", nodeStyles).attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
    }
    updateNodeBounds(node, rect2);
    node.intersect = function(point) {
        return intersect_default.rect(node, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(stadium, "stadium");
// src/rendering-util/rendering-elements/shapes/state.ts
async function state(parent, node) {
    const options = {
        rx: 5,
        ry: 5,
        classes: "flowchart-node"
    };
    return drawRect(parent, node, options);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(state, "state");
;
function stateEnd(parent, node, { config: { themeVariables } }) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { cssStyles } = node;
    const { lineColor, stateBorder, nodeBorder } = themeVariables;
    const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const roughNode = rc.circle(0, 0, 14, {
        ...options,
        stroke: lineColor,
        strokeWidth: 2
    });
    const innerFill = stateBorder ?? nodeBorder;
    const roughInnerNode = rc.circle(0, 0, 5, {
        ...options,
        fill: innerFill,
        stroke: innerFill,
        strokeWidth: 2,
        fillStyle: "solid"
    });
    const circle2 = shapeSvg.insert(()=>roughNode, ":first-child");
    circle2.insert(()=>roughInnerNode);
    if (cssStyles) {
        circle2.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles) {
        circle2.selectAll("path").attr("style", nodeStyles);
    }
    updateNodeBounds(node, circle2);
    node.intersect = function(point) {
        return intersect_default.circle(node, 7, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(stateEnd, "stateEnd");
;
function stateStart(parent, node, { config: { themeVariables } }) {
    const { lineColor } = themeVariables;
    const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
    let circle2;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const roughNode = rc.circle(0, 0, 14, solidStateFill(lineColor));
        circle2 = shapeSvg.insert(()=>roughNode);
        circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    } else {
        circle2 = shapeSvg.insert("circle", ":first-child");
        circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    }
    updateNodeBounds(node, circle2);
    node.intersect = function(point) {
        return intersect_default.circle(node, 7, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(stateStart, "stateStart");
;
async function subroutine(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const halfPadding = (node?.padding || 0) / 2;
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const x = -bbox.width / 2 - halfPadding;
    const y = -bbox.height / 2 - halfPadding;
    const points = [
        {
            x: 0,
            y: 0
        },
        {
            x: w,
            y: 0
        },
        {
            x: w,
            y: -h
        },
        {
            x: 0,
            y: -h
        },
        {
            x: 0,
            y: 0
        },
        {
            x: -8,
            y: 0
        },
        {
            x: w + 8,
            y: 0
        },
        {
            x: w + 8,
            y: -h
        },
        {
            x: -8,
            y: -h
        },
        {
            x: -8,
            y: 0
        }
    ];
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const roughNode = rc.rectangle(x - 8, y, w + 16, h, options);
        const l1 = rc.line(x, y, x, y + h, options);
        const l2 = rc.line(x + w, y, x + w, y + h, options);
        shapeSvg.insert(()=>l1, ":first-child");
        shapeSvg.insert(()=>l2, ":first-child");
        const rect2 = shapeSvg.insert(()=>roughNode, ":first-child");
        const { cssStyles } = node;
        rect2.attr("class", "basic label-container").attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(cssStyles));
        updateNodeBounds(node, rect2);
    } else {
        const el = insertPolygonShape(shapeSvg, w, h, points);
        if (nodeStyles) {
            el.attr("style", nodeStyles);
        }
        updateNodeBounds(node, el);
    }
    node.intersect = function(point) {
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(subroutine, "subroutine");
;
async function taggedRect(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const x = -w / 2;
    const y = -h / 2;
    const tagWidth = 0.2 * h;
    const tagHeight = 0.2 * h;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    const rectPoints = [
        {
            x: x - tagWidth / 2,
            y
        },
        {
            x: x + w + tagWidth / 2,
            y
        },
        {
            x: x + w + tagWidth / 2,
            y: y + h
        },
        {
            x: x - tagWidth / 2,
            y: y + h
        }
    ];
    const tagPoints = [
        {
            x: x + w - tagWidth / 2,
            y: y + h
        },
        {
            x: x + w + tagWidth / 2,
            y: y + h
        },
        {
            x: x + w + tagWidth / 2,
            y: y + h - tagHeight
        }
    ];
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const rectPath = createPathFromPoints(rectPoints);
    const rectNode = rc.path(rectPath, options);
    const tagPath = createPathFromPoints(tagPoints);
    const tagNode = rc.path(tagPath, {
        ...options,
        fillStyle: "solid"
    });
    const taggedRect2 = shapeSvg.insert(()=>tagNode, ":first-child");
    taggedRect2.insert(()=>rectNode, ":first-child");
    taggedRect2.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        taggedRect2.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        taggedRect2.selectAll("path").attr("style", nodeStyles);
    }
    updateNodeBounds(node, taggedRect2);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, rectPoints, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(taggedRect, "taggedRect");
;
async function taggedWaveEdgedRectangle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const waveAmplitude = h / 4;
    const tagWidth = 0.2 * w;
    const tagHeight = 0.2 * h;
    const finalH = h + waveAmplitude;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const points = [
        {
            x: -w / 2 - w / 2 * 0.1,
            y: finalH / 2
        },
        ...generateFullSineWavePoints(-w / 2 - w / 2 * 0.1, finalH / 2, w / 2 + w / 2 * 0.1, finalH / 2, waveAmplitude, 0.8),
        {
            x: w / 2 + w / 2 * 0.1,
            y: -finalH / 2
        },
        {
            x: -w / 2 - w / 2 * 0.1,
            y: -finalH / 2
        }
    ];
    const x = -w / 2 + w / 2 * 0.1;
    const y = -finalH / 2 - tagHeight * 0.4;
    const tagPoints = [
        {
            x: x + w - tagWidth,
            y: (y + h) * 1.4
        },
        {
            x: x + w,
            y: y + h - tagHeight
        },
        {
            x: x + w,
            y: (y + h) * 0.9
        },
        ...generateFullSineWavePoints(x + w, (y + h) * 1.3, x + w - tagWidth, (y + h) * 1.5, -h * 0.03, 0.5)
    ];
    const waveEdgeRectPath = createPathFromPoints(points);
    const waveEdgeRectNode = rc.path(waveEdgeRectPath, options);
    const taggedWaveEdgeRectPath = createPathFromPoints(tagPoints);
    const taggedWaveEdgeRectNode = rc.path(taggedWaveEdgeRectPath, {
        ...options,
        fillStyle: "solid"
    });
    const waveEdgeRect = shapeSvg.insert(()=>taggedWaveEdgeRectNode, ":first-child");
    waveEdgeRect.insert(()=>waveEdgeRectNode, ":first-child");
    waveEdgeRect.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        waveEdgeRect.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        waveEdgeRect.selectAll("path").attr("style", nodeStyles);
    }
    waveEdgeRect.attr("transform", `translate(0,${-waveAmplitude / 2})`);
    label.attr("transform", `translate(${-w / 2 + (node.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) - waveAmplitude / 2 - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, waveEdgeRect);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(taggedWaveEdgedRectangle, "taggedWaveEdgedRectangle");
// src/rendering-util/rendering-elements/shapes/text.ts
async function text(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const totalWidth = Math.max(bbox.width + node.padding, node?.width || 0);
    const totalHeight = Math.max(bbox.height + node.padding, node?.height || 0);
    const x = -totalWidth / 2;
    const y = -totalHeight / 2;
    const rect2 = shapeSvg.insert("rect", ":first-child");
    rect2.attr("class", "text").attr("style", nodeStyles).attr("rx", 0).attr("ry", 0).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
    updateNodeBounds(node, rect2);
    node.intersect = function(point) {
        return intersect_default.rect(node, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(text, "text");
;
var createCylinderPathD3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, width, height, rx, ry)=>{
    return `M${x},${y}
    a${rx},${ry} 0,0,1 ${0},${-height}
    l${width},${0}
    a${rx},${ry} 0,0,1 ${0},${height}
    M${width},${-height}
    a${rx},${ry} 0,0,0 ${0},${height}
    l${-width},${0}`;
}, "createCylinderPathD");
var createOuterCylinderPathD3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, width, height, rx, ry)=>{
    return [
        `M${x},${y}`,
        `M${x + width},${y}`,
        `a${rx},${ry} 0,0,0 ${0},${-height}`,
        `l${-width},0`,
        `a${rx},${ry} 0,0,0 ${0},${height}`,
        `l${width},0`
    ].join(" ");
}, "createOuterCylinderPathD");
var createInnerCylinderPathD3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((x, y, width, height, rx, ry)=>{
    return [
        `M${x + width / 2},${-height / 2}`,
        `a${rx},${ry} 0,0,0 0,${height}`
    ].join(" ");
}, "createInnerCylinderPathD");
async function tiltedCylinder(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label, halfPadding } = await labelHelper(parent, node, getNodeClasses(node));
    const labelPadding = node.look === "neo" ? halfPadding * 2 : halfPadding;
    const h = bbox.height + labelPadding;
    const ry = h / 2;
    const rx = ry / (2.5 + h / 50);
    const w = bbox.width + rx + labelPadding;
    const { cssStyles } = node;
    let cylinder2;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const outerPathData = createOuterCylinderPathD3(0, 0, w, h, rx, ry);
        const innerPathData = createInnerCylinderPathD3(0, 0, w, h, rx, ry);
        const outerNode = rc.path(outerPathData, userNodeOverrides(node, {}));
        const innerLine = rc.path(innerPathData, userNodeOverrides(node, {
            fill: "none"
        }));
        cylinder2 = shapeSvg.insert(()=>innerLine, ":first-child");
        cylinder2 = shapeSvg.insert(()=>outerNode, ":first-child");
        cylinder2.attr("class", "basic label-container");
        if (cssStyles) {
            cylinder2.attr("style", cssStyles);
        }
    } else {
        const pathData = createCylinderPathD3(0, 0, w, h, rx, ry);
        cylinder2 = shapeSvg.insert("path", ":first-child").attr("d", pathData).attr("class", "basic label-container").attr("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUndefinedAttr"])(cssStyles)).attr("style", nodeStyles);
        cylinder2.attr("class", "basic label-container");
        if (cssStyles) {
            cylinder2.selectAll("path").attr("style", cssStyles);
        }
        if (nodeStyles) {
            cylinder2.selectAll("path").attr("style", nodeStyles);
        }
    }
    cylinder2.attr("label-offset-x", rx);
    cylinder2.attr("transform", `translate(${-w / 2}, ${h / 2} )`);
    label.attr("transform", `translate(${-(bbox.width / 2) - rx - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, cylinder2);
    node.intersect = function(point) {
        const pos = intersect_default.rect(node, point);
        const y = pos.y - (node.y ?? 0);
        if (ry != 0 && (Math.abs(y) < (node.height ?? 0) / 2 || Math.abs(y) == (node.height ?? 0) / 2 && Math.abs(pos.x - (node.x ?? 0)) > (node.width ?? 0) / 2 - rx)) {
            let x = rx * rx * (1 - y * y / (ry * ry));
            if (x != 0) {
                x = Math.sqrt(Math.abs(x));
            }
            x = rx - x;
            if (point.x - (node.x ?? 0) > 0) {
                x = -x;
            }
            pos.x += x;
        }
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(tiltedCylinder, "tiltedCylinder");
;
async function trapezoid(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: -3 * h / 6,
            y: 0
        },
        {
            x: w + 3 * h / 6,
            y: 0
        },
        {
            x: w,
            y: -h
        },
        {
            x: 0,
            y: -h
        }
    ];
    let polygon;
    const { cssStyles } = node;
    if (node.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options = userNodeOverrides(node, {});
        const pathData = createPathFromPoints(points);
        const roughNode = rc.path(pathData, options);
        polygon = shapeSvg.insert(()=>roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
        if (cssStyles) {
            polygon.attr("style", cssStyles);
        }
    } else {
        polygon = insertPolygonShape(shapeSvg, w, h, points);
    }
    if (nodeStyles) {
        polygon.attr("style", nodeStyles);
    }
    node.width = w;
    node.height = h;
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(trapezoid, "trapezoid");
;
async function trapezoidalPentagon(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const minWidth = 60, minHeight = 20;
    const w = Math.max(minWidth, bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(minHeight, bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const points = [
        {
            x: -w / 2 * 0.8,
            y: -h / 2
        },
        {
            x: w / 2 * 0.8,
            y: -h / 2
        },
        {
            x: w / 2,
            y: -h / 2 * 0.6
        },
        {
            x: w / 2,
            y: h / 2
        },
        {
            x: -w / 2,
            y: h / 2
        },
        {
            x: -w / 2,
            y: -h / 2 * 0.6
        }
    ];
    const pathData = createPathFromPoints(points);
    const shapeNode = rc.path(pathData, options);
    const polygon = shapeSvg.insert(()=>shapeNode, ":first-child");
    polygon.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", nodeStyles);
    }
    updateNodeBounds(node, polygon);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(trapezoidalPentagon, "trapezoidalPentagon");
;
async function triangle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const useHtmlLabels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])().flowchart?.htmlLabels);
    const w = bbox.width + (node.padding ?? 0);
    const h = w + bbox.height;
    const tw = w + bbox.height;
    const points = [
        {
            x: 0,
            y: 0
        },
        {
            x: tw,
            y: 0
        },
        {
            x: tw / 2,
            y: -h
        }
    ];
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const pathData = createPathFromPoints(points);
    const roughNode = rc.path(pathData, options);
    const polygon = shapeSvg.insert(()=>roughNode, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`);
    if (cssStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        polygon.selectChildren("path").attr("style", nodeStyles);
    }
    node.width = w;
    node.height = h;
    updateNodeBounds(node, polygon);
    label.attr("transform", `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${h / 2 - (bbox.height + (node.padding ?? 0) / (useHtmlLabels ? 2 : 1) - (bbox.y - (bbox.top ?? 0)))})`);
    node.intersect = function(point) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("Triangle intersect", node, points, point);
        return intersect_default.polygon(node, points, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(triangle, "triangle");
;
async function waveEdgedRectangle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const waveAmplitude = h / 8;
    const finalH = h + waveAmplitude;
    const { cssStyles } = node;
    const minWidth = 70;
    const widthDif = minWidth - w;
    const extraW = widthDif > 0 ? widthDif / 2 : 0;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const points = [
        {
            x: -w / 2 - extraW,
            y: finalH / 2
        },
        ...generateFullSineWavePoints(-w / 2 - extraW, finalH / 2, w / 2 + extraW, finalH / 2, waveAmplitude, 0.8),
        {
            x: w / 2 + extraW,
            y: -finalH / 2
        },
        {
            x: -w / 2 - extraW,
            y: -finalH / 2
        }
    ];
    const waveEdgeRectPath = createPathFromPoints(points);
    const waveEdgeRectNode = rc.path(waveEdgeRectPath, options);
    const waveEdgeRect = shapeSvg.insert(()=>waveEdgeRectNode, ":first-child");
    waveEdgeRect.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        waveEdgeRect.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        waveEdgeRect.selectAll("path").attr("style", nodeStyles);
    }
    waveEdgeRect.attr("transform", `translate(0,${-waveAmplitude / 2})`);
    label.attr("transform", `translate(${-w / 2 + (node.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) - waveAmplitude - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, waveEdgeRect);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(waveEdgedRectangle, "waveEdgedRectangle");
;
async function waveRectangle(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
    const minWidth = 100;
    const minHeight = 50;
    const baseWidth = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const baseHeight = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const aspectRatio = baseWidth / baseHeight;
    let w = baseWidth;
    let h = baseHeight;
    if (w > h * aspectRatio) {
        h = w / aspectRatio;
    } else {
        w = h * aspectRatio;
    }
    w = Math.max(w, minWidth);
    h = Math.max(h, minHeight);
    const waveAmplitude = Math.min(h * 0.2, h / 4);
    const finalH = h + waveAmplitude * 2;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const points = [
        {
            x: -w / 2,
            y: finalH / 2
        },
        ...generateFullSineWavePoints(-w / 2, finalH / 2, w / 2, finalH / 2, waveAmplitude, 1),
        {
            x: w / 2,
            y: -finalH / 2
        },
        ...generateFullSineWavePoints(w / 2, -finalH / 2, -w / 2, -finalH / 2, waveAmplitude, -1)
    ];
    const waveRectPath = createPathFromPoints(points);
    const waveRectNode = rc.path(waveRectPath, options);
    const waveRect = shapeSvg.insert(()=>waveRectNode, ":first-child");
    waveRect.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        waveRect.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        waveRect.selectAll("path").attr("style", nodeStyles);
    }
    updateNodeBounds(node, waveRect);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, points, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(waveRectangle, "waveRectangle");
;
async function windowPane(parent, node) {
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
    const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
    const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
    const rectOffset = 5;
    const x = -w / 2;
    const y = -h / 2;
    const { cssStyles } = node;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    const outerPathPoints = [
        {
            x: x - rectOffset,
            y: y - rectOffset
        },
        {
            x: x - rectOffset,
            y: y + h
        },
        {
            x: x + w,
            y: y + h
        },
        {
            x: x + w,
            y: y - rectOffset
        }
    ];
    const path = `M${x - rectOffset},${y - rectOffset} L${x + w},${y - rectOffset} L${x + w},${y + h} L${x - rectOffset},${y + h} L${x - rectOffset},${y - rectOffset}
                M${x - rectOffset},${y} L${x + w},${y}
                M${x},${y - rectOffset} L${x},${y + h}`;
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const no = rc.path(path, options);
    const windowPane2 = shapeSvg.insert(()=>no, ":first-child");
    windowPane2.attr("transform", `translate(${rectOffset / 2}, ${rectOffset / 2})`);
    windowPane2.attr("class", "basic label-container");
    if (cssStyles && node.look !== "handDrawn") {
        windowPane2.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles && node.look !== "handDrawn") {
        windowPane2.selectAll("path").attr("style", nodeStyles);
    }
    label.attr("transform", `translate(${-(bbox.width / 2) + rectOffset / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + rectOffset / 2 - (bbox.y - (bbox.top ?? 0))})`);
    updateNodeBounds(node, windowPane2);
    node.intersect = function(point) {
        const pos = intersect_default.polygon(node, outerPathPoints, point);
        return pos;
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(windowPane, "windowPane");
;
;
;
async function textHelper(parent, node, config, useHtmlLabels, GAP = config.class.padding ?? 12) {
    const TEXT_PADDING = !useHtmlLabels ? 3 : 0;
    const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId || node.id);
    let annotationGroup = null;
    let labelGroup = null;
    let membersGroup = null;
    let methodsGroup = null;
    let annotationGroupHeight = 0;
    let labelGroupHeight = 0;
    let membersGroupHeight = 0;
    annotationGroup = shapeSvg.insert("g").attr("class", "annotation-group text");
    if (node.annotations.length > 0) {
        const annotation = node.annotations[0];
        await addText(annotationGroup, {
            text: `\xAB${annotation}\xBB`
        }, 0);
        const annotationGroupBBox = annotationGroup.node().getBBox();
        annotationGroupHeight = annotationGroupBBox.height;
    }
    labelGroup = shapeSvg.insert("g").attr("class", "label-group text");
    await addText(labelGroup, node, 0, [
        "font-weight: bolder"
    ]);
    const labelGroupBBox = labelGroup.node().getBBox();
    labelGroupHeight = labelGroupBBox.height;
    membersGroup = shapeSvg.insert("g").attr("class", "members-group text");
    let yOffset = 0;
    for (const member of node.members){
        const height = await addText(membersGroup, member, yOffset, [
            member.parseClassifier()
        ]);
        yOffset += height + TEXT_PADDING;
    }
    membersGroupHeight = membersGroup.node().getBBox().height;
    if (membersGroupHeight <= 0) {
        membersGroupHeight = GAP / 2;
    }
    methodsGroup = shapeSvg.insert("g").attr("class", "methods-group text");
    let methodsYOffset = 0;
    for (const method of node.methods){
        const height = await addText(methodsGroup, method, methodsYOffset, [
            method.parseClassifier()
        ]);
        methodsYOffset += height + TEXT_PADDING;
    }
    let bbox = shapeSvg.node().getBBox();
    if (annotationGroup !== null) {
        const annotationGroupBBox = annotationGroup.node().getBBox();
        annotationGroup.attr("transform", `translate(${-annotationGroupBBox.width / 2})`);
    }
    labelGroup.attr("transform", `translate(${-labelGroupBBox.width / 2}, ${annotationGroupHeight})`);
    bbox = shapeSvg.node().getBBox();
    membersGroup.attr("transform", `translate(${0}, ${annotationGroupHeight + labelGroupHeight + GAP * 2})`);
    bbox = shapeSvg.node().getBBox();
    methodsGroup.attr("transform", `translate(${0}, ${annotationGroupHeight + labelGroupHeight + (membersGroupHeight ? membersGroupHeight + GAP * 4 : GAP * 2)})`);
    bbox = shapeSvg.node().getBBox();
    return {
        shapeSvg,
        bbox
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(textHelper, "textHelper");
async function addText(parentGroup, node, yOffset, styles = []) {
    const textEl = parentGroup.insert("g").attr("class", "label").attr("style", styles.join("; "));
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig"])();
    let useHtmlLabels = "useHtmlLabels" in node ? node.useHtmlLabels : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(config.htmlLabels) ?? true;
    let textContent = "";
    if ("text" in node) {
        textContent = node.text;
    } else {
        textContent = node.label;
    }
    if (!useHtmlLabels && textContent.startsWith("\\")) {
        textContent = textContent.substring(1);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKatex"])(textContent)) {
        useHtmlLabels = true;
    }
    const text2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6JOS74DS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createText"])(textEl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeText2"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeEntities"])(textContent)), {
        width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateTextWidth"])(textContent, config) + 50,
        // Add room for error when splitting text into multiple lines
        classes: "markdown-node-label",
        useHtmlLabels
    }, config);
    let bbox;
    let numberOfLines = 1;
    if (!useHtmlLabels) {
        if (styles.includes("font-weight: bolder")) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(text2).selectAll("tspan").attr("font-weight", "");
        }
        numberOfLines = text2.children.length;
        const textChild = text2.children[0];
        if (text2.textContent === "" || text2.textContent.includes("&gt")) {
            textChild.textContent = textContent[0] + textContent.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim();
            const preserveSpace = textContent[1] === " ";
            if (preserveSpace) {
                textChild.textContent = textChild.textContent[0] + " " + textChild.textContent.substring(1);
            }
        }
        if (textChild.textContent === "undefined") {
            textChild.textContent = "";
        }
        bbox = text2.getBBox();
    } else {
        const div = text2.children[0];
        const dv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(text2);
        numberOfLines = div.innerHTML.split("<br>").length;
        if (div.innerHTML.includes("</math>")) {
            numberOfLines += div.innerHTML.split("<mrow>").length - 1;
        }
        const images = div.getElementsByTagName("img");
        if (images) {
            const noImgText = textContent.replace(/<img[^>]*>/g, "").trim() === "";
            await Promise.all([
                ...images
            ].map((img)=>new Promise((res)=>{
                    function setupImage() {
                        img.style.display = "flex";
                        img.style.flexDirection = "column";
                        if (noImgText) {
                            const bodyFontSize = config.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize;
                            const enlargingFactor = 5;
                            const width = parseInt(bodyFontSize, 10) * enlargingFactor + "px";
                            img.style.minWidth = width;
                            img.style.maxWidth = width;
                        } else {
                            img.style.width = "100%";
                        }
                        res(img);
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(setupImage, "setupImage");
                    setTimeout(()=>{
                        if (img.complete) {
                            setupImage();
                        }
                    });
                    img.addEventListener("error", setupImage);
                    img.addEventListener("load", setupImage);
                })));
        }
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    textEl.attr("transform", "translate(0," + (-bbox.height / (2 * numberOfLines) + yOffset) + ")");
    return bbox.height;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(addText, "addText");
// src/rendering-util/rendering-elements/shapes/classBox.ts
async function classBox(parent, node) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])();
    const PADDING = config.class.padding ?? 12;
    const GAP = PADDING;
    const useHtmlLabels = node.useHtmlLabels ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(config.htmlLabels) ?? true;
    const classNode = node;
    classNode.annotations = classNode.annotations ?? [];
    classNode.members = classNode.members ?? [];
    classNode.methods = classNode.methods ?? [];
    const { shapeSvg, bbox } = await textHelper(parent, node, config, useHtmlLabels, GAP);
    const { labelStyles, nodeStyles } = styles2String(node);
    node.labelStyle = labelStyles;
    node.cssStyles = classNode.styles || "";
    const styles = classNode.styles?.join(";") || nodeStyles || "";
    if (!node.cssStyles) {
        node.cssStyles = styles.replaceAll("!important", "").split(";");
    }
    const renderExtraBox = classNode.members.length === 0 && classNode.methods.length === 0 && !config.class?.hideEmptyMembersBox;
    const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
    const options = userNodeOverrides(node, {});
    if (node.look !== "handDrawn") {
        options.roughness = 0;
        options.fillStyle = "solid";
    }
    const w = bbox.width;
    let h = bbox.height;
    if (classNode.members.length === 0 && classNode.methods.length === 0) {
        h += GAP;
    } else if (classNode.members.length > 0 && classNode.methods.length === 0) {
        h += GAP * 2;
    }
    const x = -w / 2;
    const y = -h / 2;
    const roughRect = rc.rectangle(x - PADDING, y - PADDING - (renderExtraBox ? PADDING : classNode.members.length === 0 && classNode.methods.length === 0 ? -PADDING / 2 : 0), w + 2 * PADDING, h + 2 * PADDING + (renderExtraBox ? PADDING * 2 : classNode.members.length === 0 && classNode.methods.length === 0 ? -PADDING : 0), options);
    const rect2 = shapeSvg.insert(()=>roughRect, ":first-child");
    rect2.attr("class", "basic label-container");
    const rectBBox = rect2.node().getBBox();
    shapeSvg.selectAll(".text").each((_, i, nodes)=>{
        const text2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(nodes[i]);
        const transform = text2.attr("transform");
        let translateY = 0;
        if (transform) {
            const regex = RegExp(/translate\(([^,]+),([^)]+)\)/);
            const translate = regex.exec(transform);
            if (translate) {
                translateY = parseFloat(translate[2]);
            }
        }
        let newTranslateY = translateY + y + PADDING - (renderExtraBox ? PADDING : classNode.members.length === 0 && classNode.methods.length === 0 ? -PADDING / 2 : 0);
        if (!useHtmlLabels) {
            newTranslateY -= 4;
        }
        let newTranslateX = x;
        if (text2.attr("class").includes("label-group") || text2.attr("class").includes("annotation-group")) {
            newTranslateX = -text2.node()?.getBBox().width / 2 || 0;
            shapeSvg.selectAll("text").each(function(_2, i2, nodes2) {
                if (window.getComputedStyle(nodes2[i2]).textAnchor === "middle") {
                    newTranslateX = 0;
                }
            });
        }
        text2.attr("transform", `translate(${newTranslateX}, ${newTranslateY})`);
    });
    const annotationGroupHeight = shapeSvg.select(".annotation-group").node().getBBox().height - (renderExtraBox ? PADDING / 2 : 0) || 0;
    const labelGroupHeight = shapeSvg.select(".label-group").node().getBBox().height - (renderExtraBox ? PADDING / 2 : 0) || 0;
    const membersGroupHeight = shapeSvg.select(".members-group").node().getBBox().height - (renderExtraBox ? PADDING / 2 : 0) || 0;
    if (classNode.members.length > 0 || classNode.methods.length > 0 || renderExtraBox) {
        const roughLine = rc.line(rectBBox.x, annotationGroupHeight + labelGroupHeight + y + PADDING, rectBBox.x + rectBBox.width, annotationGroupHeight + labelGroupHeight + y + PADDING, options);
        const line = shapeSvg.insert(()=>roughLine);
        line.attr("class", "divider").attr("style", styles);
    }
    if (renderExtraBox || classNode.members.length > 0 || classNode.methods.length > 0) {
        const roughLine = rc.line(rectBBox.x, annotationGroupHeight + labelGroupHeight + membersGroupHeight + y + GAP * 2 + PADDING, rectBBox.x + rectBBox.width, annotationGroupHeight + labelGroupHeight + membersGroupHeight + y + PADDING + GAP * 2, options);
        const line = shapeSvg.insert(()=>roughLine);
        line.attr("class", "divider").attr("style", styles);
    }
    if (classNode.look !== "handDrawn") {
        shapeSvg.selectAll("path").attr("style", styles);
    }
    rect2.select(":nth-child(2)").attr("style", styles);
    shapeSvg.selectAll(".divider").select("path").attr("style", styles);
    if (node.labelStyle) {
        shapeSvg.selectAll("span").attr("style", node.labelStyle);
    } else {
        shapeSvg.selectAll("span").attr("style", styles);
    }
    if (!useHtmlLabels) {
        const colorRegex = RegExp(/color\s*:\s*([^;]*)/);
        const match = colorRegex.exec(styles);
        if (match) {
            const colorStyle = match[0].replace("color", "fill");
            shapeSvg.selectAll("tspan").attr("style", colorStyle);
        } else if (labelStyles) {
            const match2 = colorRegex.exec(labelStyles);
            if (match2) {
                const colorStyle = match2[0].replace("color", "fill");
                shapeSvg.selectAll("tspan").attr("style", colorStyle);
            }
        }
    }
    updateNodeBounds(node, rect2);
    node.intersect = function(point) {
        return intersect_default.rect(node, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(classBox, "classBox");
;
var colorFromPriority = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((priority)=>{
    switch(priority){
        case "Very High":
            return "red";
        case "High":
            return "orange";
        case "Medium":
            return null;
        case "Low":
            return "blue";
        case "Very Low":
            return "lightblue";
    }
}, "colorFromPriority");
async function kanbanItem(parent, kanbanNode, { config }) {
    const { labelStyles, nodeStyles } = styles2String(kanbanNode);
    kanbanNode.labelStyle = labelStyles || "";
    const labelPaddingX = 10;
    const orgWidth = kanbanNode.width;
    kanbanNode.width = (kanbanNode.width ?? 200) - 10;
    const { shapeSvg, bbox, label: labelElTitle } = await labelHelper(parent, kanbanNode, getNodeClasses(kanbanNode));
    const padding = kanbanNode.padding || 10;
    let ticketUrl = "";
    let link;
    if ("ticket" in kanbanNode && kanbanNode.ticket && config?.kanban?.ticketBaseUrl) {
        ticketUrl = config?.kanban?.ticketBaseUrl.replace("#TICKET#", kanbanNode.ticket);
        link = shapeSvg.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", ticketUrl).attr("target", "_blank");
    }
    const options = {
        useHtmlLabels: kanbanNode.useHtmlLabels,
        labelStyle: kanbanNode.labelStyle || "",
        width: kanbanNode.width,
        img: kanbanNode.img,
        padding: kanbanNode.padding || 8,
        centerLabel: false
    };
    let labelEl, bbox2;
    if (link) {
        ({ label: labelEl, bbox: bbox2 } = await insertLabel(link, "ticket" in kanbanNode && kanbanNode.ticket || "", options));
    } else {
        ({ label: labelEl, bbox: bbox2 } = await insertLabel(shapeSvg, "ticket" in kanbanNode && kanbanNode.ticket || "", options));
    }
    const { label: labelElAssigned, bbox: bboxAssigned } = await insertLabel(shapeSvg, "assigned" in kanbanNode && kanbanNode.assigned || "", options);
    kanbanNode.width = orgWidth;
    const labelPaddingY = 10;
    const totalWidth = kanbanNode?.width || 0;
    const heightAdj = Math.max(bbox2.height, bboxAssigned.height) / 2;
    const totalHeight = Math.max(bbox.height + labelPaddingY * 2, kanbanNode?.height || 0) + heightAdj;
    const x = -totalWidth / 2;
    const y = -totalHeight / 2;
    labelElTitle.attr("transform", "translate(" + (padding - totalWidth / 2) + ", " + (-heightAdj - bbox.height / 2) + ")");
    labelEl.attr("transform", "translate(" + (padding - totalWidth / 2) + ", " + (-heightAdj + bbox.height / 2) + ")");
    labelElAssigned.attr("transform", "translate(" + (padding + totalWidth / 2 - bboxAssigned.width - 2 * labelPaddingX) + ", " + (-heightAdj + bbox.height / 2) + ")");
    let rect2;
    const { rx, ry } = kanbanNode;
    const { cssStyles } = kanbanNode;
    if (kanbanNode.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(shapeSvg);
        const options2 = userNodeOverrides(kanbanNode, {});
        const roughNode = rx || ry ? rc.path(createRoundedRectPathD(x, y, totalWidth, totalHeight, rx || 0), options2) : rc.rectangle(x, y, totalWidth, totalHeight, options2);
        rect2 = shapeSvg.insert(()=>roughNode, ":first-child");
        rect2.attr("class", "basic label-container").attr("style", cssStyles ? cssStyles : null);
    } else {
        rect2 = shapeSvg.insert("rect", ":first-child");
        rect2.attr("class", "basic label-container __APA__").attr("style", nodeStyles).attr("rx", rx ?? 5).attr("ry", ry ?? 5).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
        const priority = "priority" in kanbanNode && kanbanNode.priority;
        if (priority) {
            const line = shapeSvg.append("line");
            const lineX = x + 2;
            const y1 = y + Math.floor((rx ?? 0) / 2);
            const y2 = y + totalHeight - Math.floor((rx ?? 0) / 2);
            line.attr("x1", lineX).attr("y1", y1).attr("x2", lineX).attr("y2", y2).attr("stroke-width", "4").attr("stroke", colorFromPriority(priority));
        }
    }
    updateNodeBounds(kanbanNode, rect2);
    kanbanNode.height = totalHeight;
    kanbanNode.intersect = function(point) {
        return intersect_default.rect(kanbanNode, point);
    };
    return shapeSvg;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(kanbanItem, "kanbanItem");
// src/rendering-util/rendering-elements/shapes.ts
var shapesDefs = [
    {
        semanticName: "Process",
        name: "Rectangle",
        shortName: "rect",
        description: "Standard process shape",
        aliases: [
            "proc",
            "process",
            "rectangle"
        ],
        internalAliases: [
            "squareRect"
        ],
        handler: squareRect2
    },
    {
        semanticName: "Event",
        name: "Rounded Rectangle",
        shortName: "rounded",
        description: "Represents an event",
        aliases: [
            "event"
        ],
        internalAliases: [
            "roundedRect"
        ],
        handler: roundedRect
    },
    {
        semanticName: "Terminal Point",
        name: "Stadium",
        shortName: "stadium",
        description: "Terminal point",
        aliases: [
            "terminal",
            "pill"
        ],
        handler: stadium
    },
    {
        semanticName: "Subprocess",
        name: "Framed Rectangle",
        shortName: "fr-rect",
        description: "Subprocess",
        aliases: [
            "subprocess",
            "subproc",
            "framed-rectangle",
            "subroutine"
        ],
        handler: subroutine
    },
    {
        semanticName: "Database",
        name: "Cylinder",
        shortName: "cyl",
        description: "Database storage",
        aliases: [
            "db",
            "database",
            "cylinder"
        ],
        handler: cylinder
    },
    {
        semanticName: "Start",
        name: "Circle",
        shortName: "circle",
        description: "Starting point",
        aliases: [
            "circ"
        ],
        handler: circle
    },
    {
        semanticName: "Decision",
        name: "Diamond",
        shortName: "diam",
        description: "Decision-making step",
        aliases: [
            "decision",
            "diamond",
            "question"
        ],
        handler: question
    },
    {
        semanticName: "Prepare Conditional",
        name: "Hexagon",
        shortName: "hex",
        description: "Preparation or condition step",
        aliases: [
            "hexagon",
            "prepare"
        ],
        handler: hexagon
    },
    {
        semanticName: "Data Input/Output",
        name: "Lean Right",
        shortName: "lean-r",
        description: "Represents input or output",
        aliases: [
            "lean-right",
            "in-out"
        ],
        internalAliases: [
            "lean_right"
        ],
        handler: lean_right
    },
    {
        semanticName: "Data Input/Output",
        name: "Lean Left",
        shortName: "lean-l",
        description: "Represents output or input",
        aliases: [
            "lean-left",
            "out-in"
        ],
        internalAliases: [
            "lean_left"
        ],
        handler: lean_left
    },
    {
        semanticName: "Priority Action",
        name: "Trapezoid Base Bottom",
        shortName: "trap-b",
        description: "Priority action",
        aliases: [
            "priority",
            "trapezoid-bottom",
            "trapezoid"
        ],
        handler: trapezoid
    },
    {
        semanticName: "Manual Operation",
        name: "Trapezoid Base Top",
        shortName: "trap-t",
        description: "Represents a manual task",
        aliases: [
            "manual",
            "trapezoid-top",
            "inv-trapezoid"
        ],
        internalAliases: [
            "inv_trapezoid"
        ],
        handler: inv_trapezoid
    },
    {
        semanticName: "Stop",
        name: "Double Circle",
        shortName: "dbl-circ",
        description: "Represents a stop point",
        aliases: [
            "double-circle"
        ],
        internalAliases: [
            "doublecircle"
        ],
        handler: doublecircle
    },
    {
        semanticName: "Text Block",
        name: "Text Block",
        shortName: "text",
        description: "Text block",
        handler: text
    },
    {
        semanticName: "Card",
        name: "Notched Rectangle",
        shortName: "notch-rect",
        description: "Represents a card",
        aliases: [
            "card",
            "notched-rectangle"
        ],
        handler: card
    },
    {
        semanticName: "Lined/Shaded Process",
        name: "Lined Rectangle",
        shortName: "lin-rect",
        description: "Lined process shape",
        aliases: [
            "lined-rectangle",
            "lined-process",
            "lin-proc",
            "shaded-process"
        ],
        handler: shadedProcess
    },
    {
        semanticName: "Start",
        name: "Small Circle",
        shortName: "sm-circ",
        description: "Small starting point",
        aliases: [
            "start",
            "small-circle"
        ],
        internalAliases: [
            "stateStart"
        ],
        handler: stateStart
    },
    {
        semanticName: "Stop",
        name: "Framed Circle",
        shortName: "fr-circ",
        description: "Stop point",
        aliases: [
            "stop",
            "framed-circle"
        ],
        internalAliases: [
            "stateEnd"
        ],
        handler: stateEnd
    },
    {
        semanticName: "Fork/Join",
        name: "Filled Rectangle",
        shortName: "fork",
        description: "Fork or join in process flow",
        aliases: [
            "join"
        ],
        internalAliases: [
            "forkJoin"
        ],
        handler: forkJoin
    },
    {
        semanticName: "Collate",
        name: "Hourglass",
        shortName: "hourglass",
        description: "Represents a collate operation",
        aliases: [
            "hourglass",
            "collate"
        ],
        handler: hourglass
    },
    {
        semanticName: "Comment",
        name: "Curly Brace",
        shortName: "brace",
        description: "Adds a comment",
        aliases: [
            "comment",
            "brace-l"
        ],
        handler: curlyBraceLeft
    },
    {
        semanticName: "Comment Right",
        name: "Curly Brace",
        shortName: "brace-r",
        description: "Adds a comment",
        handler: curlyBraceRight
    },
    {
        semanticName: "Comment with braces on both sides",
        name: "Curly Braces",
        shortName: "braces",
        description: "Adds a comment",
        handler: curlyBraces
    },
    {
        semanticName: "Com Link",
        name: "Lightning Bolt",
        shortName: "bolt",
        description: "Communication link",
        aliases: [
            "com-link",
            "lightning-bolt"
        ],
        handler: lightningBolt
    },
    {
        semanticName: "Document",
        name: "Document",
        shortName: "doc",
        description: "Represents a document",
        aliases: [
            "doc",
            "document"
        ],
        handler: waveEdgedRectangle
    },
    {
        semanticName: "Delay",
        name: "Half-Rounded Rectangle",
        shortName: "delay",
        description: "Represents a delay",
        aliases: [
            "half-rounded-rectangle"
        ],
        handler: halfRoundedRectangle
    },
    {
        semanticName: "Direct Access Storage",
        name: "Horizontal Cylinder",
        shortName: "h-cyl",
        description: "Direct access storage",
        aliases: [
            "das",
            "horizontal-cylinder"
        ],
        handler: tiltedCylinder
    },
    {
        semanticName: "Disk Storage",
        name: "Lined Cylinder",
        shortName: "lin-cyl",
        description: "Disk storage",
        aliases: [
            "disk",
            "lined-cylinder"
        ],
        handler: linedCylinder
    },
    {
        semanticName: "Display",
        name: "Curved Trapezoid",
        shortName: "curv-trap",
        description: "Represents a display",
        aliases: [
            "curved-trapezoid",
            "display"
        ],
        handler: curvedTrapezoid
    },
    {
        semanticName: "Divided Process",
        name: "Divided Rectangle",
        shortName: "div-rect",
        description: "Divided process shape",
        aliases: [
            "div-proc",
            "divided-rectangle",
            "divided-process"
        ],
        handler: dividedRectangle
    },
    {
        semanticName: "Extract",
        name: "Triangle",
        shortName: "tri",
        description: "Extraction process",
        aliases: [
            "extract",
            "triangle"
        ],
        handler: triangle
    },
    {
        semanticName: "Internal Storage",
        name: "Window Pane",
        shortName: "win-pane",
        description: "Internal storage",
        aliases: [
            "internal-storage",
            "window-pane"
        ],
        handler: windowPane
    },
    {
        semanticName: "Junction",
        name: "Filled Circle",
        shortName: "f-circ",
        description: "Junction point",
        aliases: [
            "junction",
            "filled-circle"
        ],
        handler: filledCircle
    },
    {
        semanticName: "Loop Limit",
        name: "Trapezoidal Pentagon",
        shortName: "notch-pent",
        description: "Loop limit step",
        aliases: [
            "loop-limit",
            "notched-pentagon"
        ],
        handler: trapezoidalPentagon
    },
    {
        semanticName: "Manual File",
        name: "Flipped Triangle",
        shortName: "flip-tri",
        description: "Manual file operation",
        aliases: [
            "manual-file",
            "flipped-triangle"
        ],
        handler: flippedTriangle
    },
    {
        semanticName: "Manual Input",
        name: "Sloped Rectangle",
        shortName: "sl-rect",
        description: "Manual input step",
        aliases: [
            "manual-input",
            "sloped-rectangle"
        ],
        handler: slopedRect
    },
    {
        semanticName: "Multi-Document",
        name: "Stacked Document",
        shortName: "docs",
        description: "Multiple documents",
        aliases: [
            "documents",
            "st-doc",
            "stacked-document"
        ],
        handler: multiWaveEdgedRectangle
    },
    {
        semanticName: "Multi-Process",
        name: "Stacked Rectangle",
        shortName: "st-rect",
        description: "Multiple processes",
        aliases: [
            "procs",
            "processes",
            "stacked-rectangle"
        ],
        handler: multiRect
    },
    {
        semanticName: "Stored Data",
        name: "Bow Tie Rectangle",
        shortName: "bow-rect",
        description: "Stored data",
        aliases: [
            "stored-data",
            "bow-tie-rectangle"
        ],
        handler: bowTieRect
    },
    {
        semanticName: "Summary",
        name: "Crossed Circle",
        shortName: "cross-circ",
        description: "Summary",
        aliases: [
            "summary",
            "crossed-circle"
        ],
        handler: crossedCircle
    },
    {
        semanticName: "Tagged Document",
        name: "Tagged Document",
        shortName: "tag-doc",
        description: "Tagged document",
        aliases: [
            "tag-doc",
            "tagged-document"
        ],
        handler: taggedWaveEdgedRectangle
    },
    {
        semanticName: "Tagged Process",
        name: "Tagged Rectangle",
        shortName: "tag-rect",
        description: "Tagged process",
        aliases: [
            "tagged-rectangle",
            "tag-proc",
            "tagged-process"
        ],
        handler: taggedRect
    },
    {
        semanticName: "Paper Tape",
        name: "Flag",
        shortName: "flag",
        description: "Paper tape",
        aliases: [
            "paper-tape"
        ],
        handler: waveRectangle
    },
    {
        semanticName: "Odd",
        name: "Odd",
        shortName: "odd",
        description: "Odd shape",
        internalAliases: [
            "rect_left_inv_arrow"
        ],
        handler: rect_left_inv_arrow
    },
    {
        semanticName: "Lined Document",
        name: "Lined Document",
        shortName: "lin-doc",
        description: "Lined document",
        aliases: [
            "lined-document"
        ],
        handler: linedWaveEdgedRect
    }
];
var generateShapeMap = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
    const undocumentedShapes = {
        // States
        state,
        choice,
        note,
        // Rectangles
        rectWithTitle,
        labelRect,
        // Icons
        iconSquare,
        iconCircle,
        icon,
        iconRounded,
        imageSquare,
        anchor,
        // Kanban diagram
        kanbanItem,
        // class diagram
        classBox
    };
    const entries = [
        ...Object.entries(undocumentedShapes),
        ...shapesDefs.flatMap((shape)=>{
            const aliases = [
                shape.shortName,
                ..."aliases" in shape ? shape.aliases : [],
                ..."internalAliases" in shape ? shape.internalAliases : []
            ];
            return aliases.map((alias)=>[
                    alias,
                    shape.handler
                ]);
        })
    ];
    return Object.fromEntries(entries);
}, "generateShapeMap");
var shapes2 = generateShapeMap();
function isValidShape(shape) {
    return shape in shapes2;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(isValidShape, "isValidShape");
// src/rendering-util/rendering-elements/nodes.ts
var nodeElems = /* @__PURE__ */ new Map();
async function insertNode(elem, node, renderOptions) {
    let newEl;
    let el;
    if (node.shape === "rect") {
        if (node.rx && node.ry) {
            node.shape = "roundedRect";
        } else {
            node.shape = "squareRect";
        }
    }
    const shapeHandler = node.shape ? shapes2[node.shape] : void 0;
    if (!shapeHandler) {
        throw new Error(`No such shape: ${node.shape}. Please check your syntax.`);
    }
    if (node.link) {
        let target;
        if (renderOptions.config.securityLevel === "sandbox") {
            target = "_top";
        } else if (node.linkTarget) {
            target = node.linkTarget || "_blank";
        }
        newEl = elem.insert("svg:a").attr("xlink:href", node.link).attr("target", target ?? null);
        el = await shapeHandler(newEl, node, renderOptions);
    } else {
        el = await shapeHandler(elem, node, renderOptions);
        newEl = el;
    }
    if (node.tooltip) {
        el.attr("title", node.tooltip);
    }
    nodeElems.set(node.id, newEl);
    if (node.haveCallback) {
        newEl.attr("class", newEl.attr("class") + " clickable");
    }
    return newEl;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(insertNode, "insertNode");
var setNodeElem = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, node)=>{
    nodeElems.set(node.id, elem);
}, "setNodeElem");
var clear2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
    nodeElems.clear();
}, "clear");
var positionNode = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((node)=>{
    const el = nodeElems.get(node.id);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].trace("Transforming node", node.diff, node, "translate(" + (node.x - node.width / 2 - 5) + ", " + node.width / 2 + ")");
    const padding = 8;
    const diff = node.diff || 0;
    if (node.clusterNode) {
        el.attr("transform", "translate(" + (node.x + diff - node.width / 2) + ", " + (node.y - node.height / 2 - padding) + ")");
    } else {
        el.attr("transform", "translate(" + node.x + ", " + node.y + ")");
    }
    return diff;
}, "positionNode");
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-3JNJP5BE.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getLineFunctionsWithOffset": (()=>getLineFunctionsWithOffset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
;
// src/utils/lineWithOffset.ts
var markerOffsets = {
    aggregation: 18,
    extension: 18,
    composition: 18,
    dependency: 6,
    lollipop: 13.5,
    arrow_point: 4
};
function calculateDeltaAndAngle(point1, point2) {
    if (point1 === void 0 || point2 === void 0) {
        return {
            angle: 0,
            deltaX: 0,
            deltaY: 0
        };
    }
    point1 = pointTransformer(point1);
    point2 = pointTransformer(point2);
    const [x1, y1] = [
        point1.x,
        point1.y
    ];
    const [x2, y2] = [
        point2.x,
        point2.y
    ];
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return {
        angle: Math.atan(deltaY / deltaX),
        deltaX,
        deltaY
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(calculateDeltaAndAngle, "calculateDeltaAndAngle");
var pointTransformer = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((data)=>{
    if (Array.isArray(data)) {
        return {
            x: data[0],
            y: data[1]
        };
    }
    return data;
}, "pointTransformer");
var getLineFunctionsWithOffset = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((edge)=>{
    return {
        x: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(d, i, data) {
            let offset = 0;
            const DIRECTION = pointTransformer(data[0]).x < pointTransformer(data[data.length - 1]).x ? "left" : "right";
            if (i === 0 && Object.hasOwn(markerOffsets, edge.arrowTypeStart)) {
                const { angle, deltaX } = calculateDeltaAndAngle(data[0], data[1]);
                offset = markerOffsets[edge.arrowTypeStart] * Math.cos(angle) * (deltaX >= 0 ? 1 : -1);
            } else if (i === data.length - 1 && Object.hasOwn(markerOffsets, edge.arrowTypeEnd)) {
                const { angle, deltaX } = calculateDeltaAndAngle(data[data.length - 1], data[data.length - 2]);
                offset = markerOffsets[edge.arrowTypeEnd] * Math.cos(angle) * (deltaX >= 0 ? 1 : -1);
            }
            const differenceToEnd = Math.abs(pointTransformer(d).x - pointTransformer(data[data.length - 1]).x);
            const differenceInYEnd = Math.abs(pointTransformer(d).y - pointTransformer(data[data.length - 1]).y);
            const differenceToStart = Math.abs(pointTransformer(d).x - pointTransformer(data[0]).x);
            const differenceInYStart = Math.abs(pointTransformer(d).y - pointTransformer(data[0]).y);
            const startMarkerHeight = markerOffsets[edge.arrowTypeStart];
            const endMarkerHeight = markerOffsets[edge.arrowTypeEnd];
            const extraRoom = 1;
            if (differenceToEnd < endMarkerHeight && differenceToEnd > 0 && differenceInYEnd < endMarkerHeight) {
                let adjustment = endMarkerHeight + extraRoom - differenceToEnd;
                adjustment *= DIRECTION === "right" ? -1 : 1;
                offset -= adjustment;
            }
            if (differenceToStart < startMarkerHeight && differenceToStart > 0 && differenceInYStart < startMarkerHeight) {
                let adjustment = startMarkerHeight + extraRoom - differenceToStart;
                adjustment *= DIRECTION === "right" ? -1 : 1;
                offset += adjustment;
            }
            return pointTransformer(d).x + offset;
        }, "x"),
        y: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(d, i, data) {
            let offset = 0;
            const DIRECTION = pointTransformer(data[0]).y < pointTransformer(data[data.length - 1]).y ? "down" : "up";
            if (i === 0 && Object.hasOwn(markerOffsets, edge.arrowTypeStart)) {
                const { angle, deltaY } = calculateDeltaAndAngle(data[0], data[1]);
                offset = markerOffsets[edge.arrowTypeStart] * Math.abs(Math.sin(angle)) * (deltaY >= 0 ? 1 : -1);
            } else if (i === data.length - 1 && Object.hasOwn(markerOffsets, edge.arrowTypeEnd)) {
                const { angle, deltaY } = calculateDeltaAndAngle(data[data.length - 1], data[data.length - 2]);
                offset = markerOffsets[edge.arrowTypeEnd] * Math.abs(Math.sin(angle)) * (deltaY >= 0 ? 1 : -1);
            }
            const differenceToEnd = Math.abs(pointTransformer(d).y - pointTransformer(data[data.length - 1]).y);
            const differenceInXEnd = Math.abs(pointTransformer(d).x - pointTransformer(data[data.length - 1]).x);
            const differenceToStart = Math.abs(pointTransformer(d).y - pointTransformer(data[0]).y);
            const differenceInXStart = Math.abs(pointTransformer(d).x - pointTransformer(data[0]).x);
            const startMarkerHeight = markerOffsets[edge.arrowTypeStart];
            const endMarkerHeight = markerOffsets[edge.arrowTypeEnd];
            const extraRoom = 1;
            if (differenceToEnd < endMarkerHeight && differenceToEnd > 0 && differenceInXEnd < endMarkerHeight) {
                let adjustment = endMarkerHeight + extraRoom - differenceToEnd;
                adjustment *= DIRECTION === "up" ? -1 : 1;
                offset -= adjustment;
            }
            if (differenceToStart < startMarkerHeight && differenceToStart > 0 && differenceInXStart < startMarkerHeight) {
                let adjustment = startMarkerHeight + extraRoom - differenceToStart;
                adjustment *= DIRECTION === "up" ? -1 : 1;
                offset += adjustment;
            }
            return pointTransformer(d).y + offset;
        }, "y")
    };
}, "getLineFunctionsWithOffset");
if (void 0) {
    const { it, expect, describe } = void 0;
    describe("calculateDeltaAndAngle", ()=>{
        it("should calculate the angle and deltas between two points", ()=>{
            expect(calculateDeltaAndAngle([
                0,
                0
            ], [
                0,
                1
            ])).toStrictEqual({
                angle: 1.5707963267948966,
                deltaX: 0,
                deltaY: 1
            });
            expect(calculateDeltaAndAngle([
                1,
                0
            ], [
                0,
                -1
            ])).toStrictEqual({
                angle: 0.7853981633974483,
                deltaX: -1,
                deltaY: -1
            });
            expect(calculateDeltaAndAngle({
                x: 1,
                y: 0
            }, [
                0,
                -1
            ])).toStrictEqual({
                angle: 0.7853981633974483,
                deltaX: -1,
                deltaY: -1
            });
            expect(calculateDeltaAndAngle({
                x: 1,
                y: 0
            }, {
                x: 1,
                y: 0
            })).toStrictEqual({
                angle: NaN,
                deltaX: 0,
                deltaY: 0
            });
        });
        it("should calculate the angle and deltas if one point in undefined", ()=>{
            expect(calculateDeltaAndAngle(void 0, [
                0,
                1
            ])).toStrictEqual({
                angle: 0,
                deltaX: 0,
                deltaY: 0
            });
            expect(calculateDeltaAndAngle([
                0,
                1
            ], void 0)).toStrictEqual({
                angle: 0,
                deltaX: 0,
                deltaY: 0
            });
        });
    });
}
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-66SQ7PYY.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clear": (()=>clear),
    "insertEdge": (()=>insertEdge),
    "insertEdgeLabel": (()=>insertEdgeLabel),
    "markers_default": (()=>markers_default),
    "positionEdgeLabel": (()=>positionEdgeLabel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7NZE2EM7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-7NZE2EM7.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$3JNJP5BE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-3JNJP5BE.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$3X56UNUX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-3X56UNUX.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6JOS74DS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6JOS74DS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-7DKRZKHE.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
// src/rendering-util/rendering-elements/edges.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$40$7$2e$9$2e$0$2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bundled/rough.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasis$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basis.js [app-ssr] (ecmascript) <export default as curveBasis>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/line.js [app-ssr] (ecmascript) <export default as line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
;
;
;
;
;
;
;
;
// src/rendering-util/rendering-elements/edgeMarker.ts
var addEdgeMarkers = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((svgPath, edge, url, id, diagramType)=>{
    if (edge.arrowTypeStart) {
        addEdgeMarker(svgPath, "start", edge.arrowTypeStart, url, id, diagramType);
    }
    if (edge.arrowTypeEnd) {
        addEdgeMarker(svgPath, "end", edge.arrowTypeEnd, url, id, diagramType);
    }
}, "addEdgeMarkers");
var arrowTypesMap = {
    arrow_cross: "cross",
    arrow_point: "point",
    arrow_barb: "barb",
    arrow_circle: "circle",
    aggregation: "aggregation",
    extension: "extension",
    composition: "composition",
    dependency: "dependency",
    lollipop: "lollipop"
};
var addEdgeMarker = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((svgPath, position, arrowType, url, id, diagramType)=>{
    const endMarkerType = arrowTypesMap[arrowType];
    if (!endMarkerType) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].warn(`Unknown arrow type: ${arrowType}`);
        return;
    }
    const suffix = position === "start" ? "Start" : "End";
    svgPath.attr(`marker-${position}`, `url(${url}#${id}_${diagramType}-${endMarkerType}${suffix})`);
}, "addEdgeMarker");
// src/rendering-util/rendering-elements/edges.js
var edgeLabels = /* @__PURE__ */ new Map();
var terminalLabels = /* @__PURE__ */ new Map();
var clear = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
    edgeLabels.clear();
    terminalLabels.clear();
}, "clear");
var getLabelStyles = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((styleArray)=>{
    let styles = styleArray ? styleArray.reduce((acc, style)=>acc + ";" + style, "") : "";
    return styles;
}, "getLabelStyles");
var insertEdgeLabel = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (elem, edge)=>{
    let useHtmlLabels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])().flowchart.htmlLabels);
    const labelElement = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6JOS74DS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createText"])(elem, edge.label, {
        style: getLabelStyles(edge.labelStyle),
        useHtmlLabels,
        addSvgBackground: true,
        isNode: false
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("abc82", edge, edge.labelType);
    const edgeLabel = elem.insert("g").attr("class", "edgeLabel");
    const label = edgeLabel.insert("g").attr("class", "label");
    label.node().appendChild(labelElement);
    let bbox = labelElement.getBBox();
    if (useHtmlLabels) {
        const div = labelElement.children[0];
        const dv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(labelElement);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    edgeLabels.set(edge.id, edgeLabel);
    edge.width = bbox.width;
    edge.height = bbox.height;
    let fo;
    if (edge.startLabelLeft) {
        const startLabelElement = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7NZE2EM7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLabel_default"])(edge.startLabelLeft, getLabelStyles(edge.labelStyle));
        const startEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
        const inner = startEdgeLabelLeft.insert("g").attr("class", "inner");
        fo = inner.node().appendChild(startLabelElement);
        const slBox = startLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        if (!terminalLabels.get(edge.id)) {
            terminalLabels.set(edge.id, {});
        }
        terminalLabels.get(edge.id).startLeft = startEdgeLabelLeft;
        setTerminalWidth(fo, edge.startLabelLeft);
    }
    if (edge.startLabelRight) {
        const startLabelElement = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7NZE2EM7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLabel_default"])(edge.startLabelRight, getLabelStyles(edge.labelStyle));
        const startEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
        const inner = startEdgeLabelRight.insert("g").attr("class", "inner");
        fo = startEdgeLabelRight.node().appendChild(startLabelElement);
        inner.node().appendChild(startLabelElement);
        const slBox = startLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        if (!terminalLabels.get(edge.id)) {
            terminalLabels.set(edge.id, {});
        }
        terminalLabels.get(edge.id).startRight = startEdgeLabelRight;
        setTerminalWidth(fo, edge.startLabelRight);
    }
    if (edge.endLabelLeft) {
        const endLabelElement = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7NZE2EM7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLabel_default"])(edge.endLabelLeft, getLabelStyles(edge.labelStyle));
        const endEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
        const inner = endEdgeLabelLeft.insert("g").attr("class", "inner");
        fo = inner.node().appendChild(endLabelElement);
        const slBox = endLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        endEdgeLabelLeft.node().appendChild(endLabelElement);
        if (!terminalLabels.get(edge.id)) {
            terminalLabels.set(edge.id, {});
        }
        terminalLabels.get(edge.id).endLeft = endEdgeLabelLeft;
        setTerminalWidth(fo, edge.endLabelLeft);
    }
    if (edge.endLabelRight) {
        const endLabelElement = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7NZE2EM7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLabel_default"])(edge.endLabelRight, getLabelStyles(edge.labelStyle));
        const endEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
        const inner = endEdgeLabelRight.insert("g").attr("class", "inner");
        fo = inner.node().appendChild(endLabelElement);
        const slBox = endLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        endEdgeLabelRight.node().appendChild(endLabelElement);
        if (!terminalLabels.get(edge.id)) {
            terminalLabels.set(edge.id, {});
        }
        terminalLabels.get(edge.id).endRight = endEdgeLabelRight;
        setTerminalWidth(fo, edge.endLabelRight);
    }
    return labelElement;
}, "insertEdgeLabel");
function setTerminalWidth(fo, value) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])().flowchart.htmlLabels && fo) {
        fo.style.width = value.length * 9 + "px";
        fo.style.height = "12px";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(setTerminalWidth, "setTerminalWidth");
var positionEdgeLabel = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((edge, paths)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Moving label abc88 ", edge.id, edge.label, edgeLabels.get(edge.id), paths);
    let path = paths.updatedPath ? paths.updatedPath : paths.originalPath;
    const siteConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])();
    const { subGraphTitleTotalMargin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$3X56UNUX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubGraphTitleMargins"])(siteConfig);
    if (edge.label) {
        const el = edgeLabels.get(edge.id);
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils_default"].calcLabelPosition(path);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Moving label " + edge.label + " from (", x, ",", y, ") to (", pos.x, ",", pos.y, ") abc88");
            if (paths.updatedPath) {
                x = pos.x;
                y = pos.y;
            }
        }
        el.attr("transform", `translate(${x}, ${y + subGraphTitleTotalMargin / 2})`);
    }
    if (edge.startLabelLeft) {
        const el = terminalLabels.get(edge.id).startLeft;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils_default"].calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_left", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", `translate(${x}, ${y})`);
    }
    if (edge.startLabelRight) {
        const el = terminalLabels.get(edge.id).startRight;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils_default"].calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_right", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", `translate(${x}, ${y})`);
    }
    if (edge.endLabelLeft) {
        const el = terminalLabels.get(edge.id).endLeft;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils_default"].calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_left", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", `translate(${x}, ${y})`);
    }
    if (edge.endLabelRight) {
        const el = terminalLabels.get(edge.id).endRight;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils_default"].calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_right", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", `translate(${x}, ${y})`);
    }
}, "positionEdgeLabel");
var outsideNode = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((node, point2)=>{
    const x = node.x;
    const y = node.y;
    const dx = Math.abs(point2.x - x);
    const dy = Math.abs(point2.y - y);
    const w = node.width / 2;
    const h = node.height / 2;
    return dx >= w || dy >= h;
}, "outsideNode");
var intersection = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((node, outsidePoint, insidePoint)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(outsidePoint)}
  insidePoint : ${JSON.stringify(insidePoint)}
  node        : x:${node.x} y:${node.y} w:${node.width} h:${node.height}`);
    const x = node.x;
    const y = node.y;
    const dx = Math.abs(x - insidePoint.x);
    const w = node.width / 2;
    let r = insidePoint.x < outsidePoint.x ? w - dx : w + dx;
    const h = node.height / 2;
    const Q = Math.abs(outsidePoint.y - insidePoint.y);
    const R = Math.abs(outsidePoint.x - insidePoint.x);
    if (Math.abs(y - outsidePoint.y) * w > Math.abs(x - outsidePoint.x) * h) {
        let q = insidePoint.y < outsidePoint.y ? outsidePoint.y - h - y : y - h - outsidePoint.y;
        r = R * q / Q;
        const res = {
            x: insidePoint.x < outsidePoint.x ? insidePoint.x + r : insidePoint.x - R + r,
            y: insidePoint.y < outsidePoint.y ? insidePoint.y + Q - q : insidePoint.y - Q + q
        };
        if (r === 0) {
            res.x = outsidePoint.x;
            res.y = outsidePoint.y;
        }
        if (R === 0) {
            res.x = outsidePoint.x;
        }
        if (Q === 0) {
            res.y = outsidePoint.y;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug(`abc89 top/bottom calc, Q ${Q}, q ${q}, R ${R}, r ${r}`, res);
        return res;
    } else {
        if (insidePoint.x < outsidePoint.x) {
            r = outsidePoint.x - w - x;
        } else {
            r = x - w - outsidePoint.x;
        }
        let q = Q * r / R;
        let _x = insidePoint.x < outsidePoint.x ? insidePoint.x + R - r : insidePoint.x - R + r;
        let _y = insidePoint.y < outsidePoint.y ? insidePoint.y + q : insidePoint.y - q;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug(`sides calc abc89, Q ${Q}, q ${q}, R ${R}, r ${r}`, {
            _x,
            _y
        });
        if (r === 0) {
            _x = outsidePoint.x;
            _y = outsidePoint.y;
        }
        if (R === 0) {
            _x = outsidePoint.x;
        }
        if (Q === 0) {
            _y = outsidePoint.y;
        }
        return {
            x: _x,
            y: _y
        };
    }
}, "intersection");
var cutPathAtIntersect = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((_points, boundaryNode)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].warn("abc88 cutPathAtIntersect", _points, boundaryNode);
    let points = [];
    let lastPointOutside = _points[0];
    let isInside = false;
    _points.forEach((point2)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("abc88 checking point", point2, boundaryNode);
        if (!outsideNode(boundaryNode, point2) && !isInside) {
            const inter = intersection(boundaryNode, lastPointOutside, point2);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("abc88 inside", point2, lastPointOutside, inter);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("abc88 intersection", inter, boundaryNode);
            let pointPresent = false;
            points.forEach((p)=>{
                pointPresent = pointPresent || p.x === inter.x && p.y === inter.y;
            });
            if (!points.some((e)=>e.x === inter.x && e.y === inter.y)) {
                points.push(inter);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].warn("abc88 no intersect", inter, points);
            }
            isInside = true;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].warn("abc88 outside", point2, lastPointOutside);
            lastPointOutside = point2;
            if (!isInside) {
                points.push(point2);
            }
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("returning points", points);
    return points;
}, "cutPathAtIntersect");
function extractCornerPoints(points) {
    const cornerPoints = [];
    const cornerPointPositions = [];
    for(let i = 1; i < points.length - 1; i++){
        const prev = points[i - 1];
        const curr = points[i];
        const next = points[i + 1];
        if (prev.x === curr.x && curr.y === next.y && Math.abs(curr.x - next.x) > 5 && Math.abs(curr.y - prev.y) > 5) {
            cornerPoints.push(curr);
            cornerPointPositions.push(i);
        } else if (prev.y === curr.y && curr.x === next.x && Math.abs(curr.x - prev.x) > 5 && Math.abs(curr.y - next.y) > 5) {
            cornerPoints.push(curr);
            cornerPointPositions.push(i);
        }
    }
    return {
        cornerPoints,
        cornerPointPositions
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(extractCornerPoints, "extractCornerPoints");
var findAdjacentPoint = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(pointA, pointB, distance) {
    const xDiff = pointB.x - pointA.x;
    const yDiff = pointB.y - pointA.y;
    const length = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    const ratio = distance / length;
    return {
        x: pointB.x - ratio * xDiff,
        y: pointB.y - ratio * yDiff
    };
}, "findAdjacentPoint");
var fixCorners = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(lineData) {
    const { cornerPointPositions } = extractCornerPoints(lineData);
    const newLineData = [];
    for(let i = 0; i < lineData.length; i++){
        if (cornerPointPositions.includes(i)) {
            const prevPoint = lineData[i - 1];
            const nextPoint = lineData[i + 1];
            const cornerPoint = lineData[i];
            const newPrevPoint = findAdjacentPoint(prevPoint, cornerPoint, 5);
            const newNextPoint = findAdjacentPoint(nextPoint, cornerPoint, 5);
            const xDiff = newNextPoint.x - newPrevPoint.x;
            const yDiff = newNextPoint.y - newPrevPoint.y;
            newLineData.push(newPrevPoint);
            const a = Math.sqrt(2) * 2;
            let newCornerPoint = {
                x: cornerPoint.x,
                y: cornerPoint.y
            };
            if (Math.abs(nextPoint.x - prevPoint.x) > 10 && Math.abs(nextPoint.y - prevPoint.y) >= 10) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Corner point fixing", Math.abs(nextPoint.x - prevPoint.x), Math.abs(nextPoint.y - prevPoint.y));
                const r = 5;
                if (cornerPoint.x === newPrevPoint.x) {
                    newCornerPoint = {
                        x: xDiff < 0 ? newPrevPoint.x - r + a : newPrevPoint.x + r - a,
                        y: yDiff < 0 ? newPrevPoint.y - a : newPrevPoint.y + a
                    };
                } else {
                    newCornerPoint = {
                        x: xDiff < 0 ? newPrevPoint.x - a : newPrevPoint.x + a,
                        y: yDiff < 0 ? newPrevPoint.y - r + a : newPrevPoint.y + r - a
                    };
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Corner point skipping fixing", Math.abs(nextPoint.x - prevPoint.x), Math.abs(nextPoint.y - prevPoint.y));
            }
            newLineData.push(newCornerPoint, newNextPoint);
        } else {
            newLineData.push(lineData[i]);
        }
    }
    return newLineData;
}, "fixCorners");
var insertEdge = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(elem, edge, clusterDb, diagramType, startNode, endNode, id) {
    const { handDrawnSeed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])();
    let points = edge.points;
    let pointsHasChanged = false;
    const tail = startNode;
    var head = endNode;
    if (head.intersect && tail.intersect) {
        points = points.slice(1, edge.points.length - 1);
        points.unshift(tail.intersect(points[0]));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Last point APA12", edge.start, "-->", edge.end, points[points.length - 1], head, head.intersect(points[points.length - 1]));
        points.push(head.intersect(points[points.length - 1]));
    }
    if (edge.toCluster) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("to cluster abc88", clusterDb.get(edge.toCluster));
        points = cutPathAtIntersect(edge.points, clusterDb.get(edge.toCluster).node);
        pointsHasChanged = true;
    }
    if (edge.fromCluster) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("from cluster abc88", clusterDb.get(edge.fromCluster), JSON.stringify(points, null, 2));
        points = cutPathAtIntersect(points.reverse(), clusterDb.get(edge.fromCluster).node).reverse();
        pointsHasChanged = true;
    }
    let lineData = points.filter((p)=>!Number.isNaN(p.y));
    lineData = fixCorners(lineData);
    let curve = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasis$3e$__["curveBasis"];
    if (edge.curve) {
        curve = edge.curve;
    }
    const { x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$3JNJP5BE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLineFunctionsWithOffset"])(edge);
    const lineFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__["line"])().x(x).y(y).curve(curve);
    let strokeClasses;
    switch(edge.thickness){
        case "normal":
            strokeClasses = "edge-thickness-normal";
            break;
        case "thick":
            strokeClasses = "edge-thickness-thick";
            break;
        case "invisible":
            strokeClasses = "edge-thickness-invisible";
            break;
        default:
            strokeClasses = "edge-thickness-normal";
    }
    switch(edge.pattern){
        case "solid":
            strokeClasses += " edge-pattern-solid";
            break;
        case "dotted":
            strokeClasses += " edge-pattern-dotted";
            break;
        case "dashed":
            strokeClasses += " edge-pattern-dashed";
            break;
        default:
            strokeClasses += " edge-pattern-solid";
    }
    let svgPath;
    let linePath = lineFunction(lineData);
    const edgeStyles = Array.isArray(edge.style) ? edge.style : [
        edge.style
    ];
    if (edge.look === "handDrawn") {
        const rc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bundled$2f$rough$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg(elem);
        Object.assign([], lineData);
        const svgPathNode = rc.path(linePath, {
            roughness: 0.3,
            seed: handDrawnSeed
        });
        strokeClasses += " transition";
        svgPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(svgPathNode).select("path").attr("id", edge.id).attr("class", " " + strokeClasses + (edge.classes ? " " + edge.classes : "")).attr("style", edgeStyles ? edgeStyles.reduce((acc, style)=>acc + ";" + style, "") : "");
        let d = svgPath.attr("d");
        svgPath.attr("d", d);
        elem.node().appendChild(svgPath.node());
    } else {
        svgPath = elem.append("path").attr("d", linePath).attr("id", edge.id).attr("class", " " + strokeClasses + (edge.classes ? " " + edge.classes : "")).attr("style", edgeStyles ? edgeStyles.reduce((acc, style)=>acc + ";" + style, "") : "");
    }
    let url = "";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])().flowchart.arrowMarkerAbsolute || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])().state.arrowMarkerAbsolute) {
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        url = url.replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("arrowTypeStart", edge.arrowTypeStart);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("arrowTypeEnd", edge.arrowTypeEnd);
    addEdgeMarkers(svgPath, edge, url, id, diagramType);
    let paths = {};
    if (pointsHasChanged) {
        paths.updatedPath = points;
    }
    paths.originalPath = edge.points;
    return paths;
}, "insertEdge");
// src/rendering-util/rendering-elements/markers.js
var insertMarkers = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, markerArray, type, id)=>{
    markerArray.forEach((markerName)=>{
        markers[markerName](elem, type, id);
    });
}, "insertMarkers");
var extension = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, type, id)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].trace("Making markers for ", id);
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-extensionStart").attr("class", "marker extension " + type).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-extensionEnd").attr("class", "marker extension " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension");
var composition = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, type, id)=>{
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-compositionStart").attr("class", "marker composition " + type).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-compositionEnd").attr("class", "marker composition " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition");
var aggregation = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, type, id)=>{
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-aggregationStart").attr("class", "marker aggregation " + type).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-aggregationEnd").attr("class", "marker aggregation " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation");
var dependency = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, type, id)=>{
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-dependencyStart").attr("class", "marker dependency " + type).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-dependencyEnd").attr("class", "marker dependency " + type).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency");
var lollipop = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, type, id)=>{
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-lollipopStart").attr("class", "marker lollipop " + type).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-lollipopEnd").attr("class", "marker lollipop " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop");
var point = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, type, id)=>{
    elem.append("marker").attr("id", id + "_" + type + "-pointEnd").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    elem.append("marker").attr("id", id + "_" + type + "-pointStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point");
var circle = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, type, id)=>{
    elem.append("marker").attr("id", id + "_" + type + "-circleEnd").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    elem.append("marker").attr("id", id + "_" + type + "-circleStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle");
var cross = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, type, id)=>{
    elem.append("marker").attr("id", id + "_" + type + "-crossEnd").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
    elem.append("marker").attr("id", id + "_" + type + "-crossStart").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross");
var barb = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((elem, type, id)=>{
    elem.append("defs").append("marker").attr("id", id + "_" + type + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb");
var markers = {
    extension,
    composition,
    aggregation,
    dependency,
    lollipop,
    point,
    circle,
    cross,
    barb
};
var markers_default = insertMarkers;
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-BO7VGL7K.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getRegisteredLayoutAlgorithm": (()=>getRegisteredLayoutAlgorithm),
    "registerLayoutLoaders": (()=>registerLayoutLoaders),
    "render": (()=>render)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$66SQ7PYY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-66SQ7PYY.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7NZE2EM7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-7NZE2EM7.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-7DKRZKHE.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
;
;
;
;
// src/internals.ts
var internalHelpers = {
    common: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["common_default"],
    getConfig: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig"],
    insertCluster: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7NZE2EM7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertCluster"],
    insertEdge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$66SQ7PYY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertEdge"],
    insertEdgeLabel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$66SQ7PYY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertEdgeLabel"],
    insertMarkers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$66SQ7PYY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markers_default"],
    insertNode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7NZE2EM7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertNode"],
    interpolateToCurve: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolateToCurve"],
    labelHelper: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7NZE2EM7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelHelper"],
    log: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"],
    positionEdgeLabel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$66SQ7PYY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["positionEdgeLabel"]
};
// src/rendering-util/render.ts
var layoutAlgorithms = {};
var registerLayoutLoaders = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((loaders)=>{
    for (const loader of loaders){
        layoutAlgorithms[loader.name] = loader;
    }
}, "registerLayoutLoaders");
var registerDefaultLayoutLoaders = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
    registerLayoutLoaders([
        {
            name: "dagre",
            loader: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/dagre-4EVJKHTY.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__), "loader")
        }
    ]);
}, "registerDefaultLayoutLoaders");
registerDefaultLayoutLoaders();
var render = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (data4Layout, svg)=>{
    if (!(data4Layout.layoutAlgorithm in layoutAlgorithms)) {
        throw new Error(`Unknown layout algorithm: ${data4Layout.layoutAlgorithm}`);
    }
    const layoutDefinition = layoutAlgorithms[data4Layout.layoutAlgorithm];
    const layoutRenderer = await layoutDefinition.loader();
    return layoutRenderer.render(data4Layout, svg, internalHelpers, {
        algorithm: layoutDefinition.algorithm
    });
}, "render");
var getRegisteredLayoutAlgorithm = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((algorithm = "", { fallback = "dagre" } = {})=>{
    if (algorithm in layoutAlgorithms) {
        return algorithm;
    }
    if (fallback in layoutAlgorithms) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].warn(`Layout algorithm ${algorithm} is not registered. Using ${fallback} as fallback.`);
        return fallback;
    }
    throw new Error(`Both layout algorithms ${algorithm} and ${fallback} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-K6PMAZHR.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// package.json
__turbopack_esm__({
    "version": (()=>version)
});
var version = "11.4.1";
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-EJ4ZWXGL.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "selectSvgElement": (()=>selectSvgElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
// src/rendering-util/selectSvgElement.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$40$7$2e$9$2e$0$2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
;
;
var selectSvgElement = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((id)=>{
    const { securityLevel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig2"])();
    let root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])("body");
    if (securityLevel === "sandbox") {
        const sandboxElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(`#i${id}`);
        const doc = sandboxElement.node()?.contentDocument ?? document;
        root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(doc.body);
    }
    const svg = root.select(`#${id}`);
    return svg;
}, "selectSvgElement");
;
}}),
"[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/mermaid.core.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>mermaid_default)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$S3SWNSAA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-S3SWNSAA.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$BO7VGL7K$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-BO7VGL7K.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$66SQ7PYY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-66SQ7PYY.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7NZE2EM7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-7NZE2EM7.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$OPO4IU42$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-OPO4IU42.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$3JNJP5BE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-3JNJP5BE.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$3X56UNUX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-3X56UNUX.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6JOS74DS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6JOS74DS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-7DKRZKHE.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$K6PMAZHR$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-K6PMAZHR.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$EJ4ZWXGL$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-EJ4ZWXGL.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs [app-ssr] (ecmascript)");
// src/mermaid.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ts$2d$dedent$40$2$2e$2$2e$0$2f$node_modules$2f$ts$2d$dedent$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js [app-ssr] (ecmascript)");
// src/mermaidAPI.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$40$7$2e$9$2e$0$2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dompurify$40$3$2e$2$2e$3$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dompurify@3.2.3/node_modules/dompurify/dist/purify.es.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$4$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stylis@4.3.4/node_modules/stylis/src/Serializer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$4$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stylis@4.3.4/node_modules/stylis/src/Parser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
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
// src/diagrams/c4/c4Detector.ts
var id = "c4";
var detector = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(txt);
}, "detector");
var loader = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/c4Diagram-6F5ED5ID.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id,
        diagram: diagram2
    };
}, "loader");
var plugin = {
    id,
    detector,
    loader
};
var c4Detector_default = plugin;
// src/diagrams/flowchart/flowDetector.ts
var id2 = "flowchart";
var detector2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt, config)=>{
    if (config?.flowchart?.defaultRenderer === "dagre-wrapper" || config?.flowchart?.defaultRenderer === "elk") {
        return false;
    }
    return /^\s*graph/.test(txt);
}, "detector");
var loader2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/flowDiagram-7ASYPVHJ.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id2,
        diagram: diagram2
    };
}, "loader");
var plugin2 = {
    id: id2,
    detector: detector2,
    loader: loader2
};
var flowDetector_default = plugin2;
// src/diagrams/flowchart/flowDetector-v2.ts
var id3 = "flowchart-v2";
var detector3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt, config)=>{
    if (config?.flowchart?.defaultRenderer === "dagre-d3") {
        return false;
    }
    if (config?.flowchart?.defaultRenderer === "elk") {
        config.layout = "elk";
    }
    if (/^\s*graph/.test(txt) && config?.flowchart?.defaultRenderer === "dagre-wrapper") {
        return true;
    }
    return /^\s*flowchart/.test(txt);
}, "detector");
var loader3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/flowDiagram-7ASYPVHJ.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id3,
        diagram: diagram2
    };
}, "loader");
var plugin3 = {
    id: id3,
    detector: detector3,
    loader: loader3
};
var flowDetector_v2_default = plugin3;
// src/diagrams/er/erDetector.ts
var id4 = "er";
var detector4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*erDiagram/.test(txt);
}, "detector");
var loader4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/erDiagram-6RL3IURR.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id4,
        diagram: diagram2
    };
}, "loader");
var plugin4 = {
    id: id4,
    detector: detector4,
    loader: loader4
};
var erDetector_default = plugin4;
// src/diagrams/git/gitGraphDetector.ts
var id5 = "gitGraph";
var detector5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*gitGraph/.test(txt);
}, "detector");
var loader5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/gitGraphDiagram-NRZ2UAAF.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id5,
        diagram: diagram2
    };
}, "loader");
var plugin5 = {
    id: id5,
    detector: detector5,
    loader: loader5
};
var gitGraphDetector_default = plugin5;
// src/diagrams/gantt/ganttDetector.ts
var id6 = "gantt";
var detector6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*gantt/.test(txt);
}, "detector");
var loader6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/ganttDiagram-NTVNEXSI.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id6,
        diagram: diagram2
    };
}, "loader");
var plugin6 = {
    id: id6,
    detector: detector6,
    loader: loader6
};
var ganttDetector_default = plugin6;
// src/diagrams/info/infoDetector.ts
var id7 = "info";
var detector7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*info/.test(txt);
}, "detector");
var loader7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-A4XQUW5V.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id7,
        diagram: diagram2
    };
}, "loader");
var info = {
    id: id7,
    detector: detector7,
    loader: loader7
};
// src/diagrams/pie/pieDetector.ts
var id8 = "pie";
var detector8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*pie/.test(txt);
}, "detector");
var loader8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/pieDiagram-YF2LJOPJ.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id8,
        diagram: diagram2
    };
}, "loader");
var pie = {
    id: id8,
    detector: detector8,
    loader: loader8
};
// src/diagrams/quadrant-chart/quadrantDetector.ts
var id9 = "quadrantChart";
var detector9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*quadrantChart/.test(txt);
}, "detector");
var loader9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/quadrantDiagram-OS5C2QUG.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id9,
        diagram: diagram2
    };
}, "loader");
var plugin7 = {
    id: id9,
    detector: detector9,
    loader: loader9
};
var quadrantDetector_default = plugin7;
// src/diagrams/xychart/xychartDetector.ts
var id10 = "xychart";
var detector10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*xychart-beta/.test(txt);
}, "detector");
var loader10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/xychartDiagram-6QU3TZC5.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id10,
        diagram: diagram2
    };
}, "loader");
var plugin8 = {
    id: id10,
    detector: detector10,
    loader: loader10
};
var xychartDetector_default = plugin8;
// src/diagrams/requirement/requirementDetector.ts
var id11 = "requirement";
var detector11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*requirement(Diagram)?/.test(txt);
}, "detector");
var loader11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/requirementDiagram-MIRIMTAZ.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id11,
        diagram: diagram2
    };
}, "loader");
var plugin9 = {
    id: id11,
    detector: detector11,
    loader: loader11
};
var requirementDetector_default = plugin9;
// src/diagrams/sequence/sequenceDetector.ts
var id12 = "sequence";
var detector12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*sequenceDiagram/.test(txt);
}, "detector");
var loader12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/sequenceDiagram-G6AWOVSC.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id12,
        diagram: diagram2
    };
}, "loader");
var plugin10 = {
    id: id12,
    detector: detector12,
    loader: loader12
};
var sequenceDetector_default = plugin10;
// src/diagrams/class/classDetector.ts
var id13 = "class";
var detector13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt, config)=>{
    if (config?.class?.defaultRenderer === "dagre-wrapper") {
        return false;
    }
    return /^\s*classDiagram/.test(txt);
}, "detector");
var loader13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/classDiagram-LNE6IOMH.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id13,
        diagram: diagram2
    };
}, "loader");
var plugin11 = {
    id: id13,
    detector: detector13,
    loader: loader13
};
var classDetector_default = plugin11;
// src/diagrams/class/classDetector-V2.ts
var id14 = "classDiagram";
var detector14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt, config)=>{
    if (/^\s*classDiagram/.test(txt) && config?.class?.defaultRenderer === "dagre-wrapper") {
        return true;
    }
    return /^\s*classDiagram-v2/.test(txt);
}, "detector");
var loader14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/classDiagram-v2-MQ7JQ4JX.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id14,
        diagram: diagram2
    };
}, "loader");
var plugin12 = {
    id: id14,
    detector: detector14,
    loader: loader14
};
var classDetector_V2_default = plugin12;
// src/diagrams/state/stateDetector.ts
var id15 = "state";
var detector15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt, config)=>{
    if (config?.state?.defaultRenderer === "dagre-wrapper") {
        return false;
    }
    return /^\s*stateDiagram/.test(txt);
}, "detector");
var loader15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/stateDiagram-MAYHULR4.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id15,
        diagram: diagram2
    };
}, "loader");
var plugin13 = {
    id: id15,
    detector: detector15,
    loader: loader15
};
var stateDetector_default = plugin13;
// src/diagrams/state/stateDetector-V2.ts
var id16 = "stateDiagram";
var detector16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt, config)=>{
    if (/^\s*stateDiagram-v2/.test(txt)) {
        return true;
    }
    if (/^\s*stateDiagram/.test(txt) && config?.state?.defaultRenderer === "dagre-wrapper") {
        return true;
    }
    return false;
}, "detector");
var loader16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/stateDiagram-v2-4JROLMXI.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id16,
        diagram: diagram2
    };
}, "loader");
var plugin14 = {
    id: id16,
    detector: detector16,
    loader: loader16
};
var stateDetector_V2_default = plugin14;
// src/diagrams/user-journey/journeyDetector.ts
var id17 = "journey";
var detector17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*journey/.test(txt);
}, "detector");
var loader17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/journeyDiagram-G5WM74LC.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id17,
        diagram: diagram2
    };
}, "loader");
var plugin15 = {
    id: id17,
    detector: detector17,
    loader: loader17
};
var journeyDetector_default = plugin15;
// src/diagrams/error/errorRenderer.ts
var draw = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((_text, id26, version2)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("rendering svg for syntax error\n");
    const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$EJ4ZWXGL$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectSvgElement"])(id26);
    const g = svg.append("g");
    svg.attr("viewBox", "0 0 2412 512");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configureSvgSize"])(svg, 100, 512, true);
    g.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z");
    g.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z");
    g.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z");
    g.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z");
    g.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z");
    g.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z");
    g.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text");
    g.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${version2}`);
}, "draw");
var renderer = {
    draw
};
var errorRenderer_default = renderer;
// src/diagrams/error/errorDiagram.ts
var diagram = {
    db: {},
    renderer,
    parser: {
        parse: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
            return;
        }, "parse")
    }
};
var errorDiagram_default = diagram;
// src/diagrams/flowchart/elk/detector.ts
var id18 = "flowchart-elk";
var detector18 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt, config = {})=>{
    if (// If diagram explicitly states flowchart-elk
    /^\s*flowchart-elk/.test(txt) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(txt) && config?.flowchart?.defaultRenderer === "elk") {
        config.layout = "elk";
        return true;
    }
    return false;
}, "detector");
var loader18 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/flowDiagram-7ASYPVHJ.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id18,
        diagram: diagram2
    };
}, "loader");
var plugin16 = {
    id: id18,
    detector: detector18,
    loader: loader18
};
var detector_default = plugin16;
// src/diagrams/timeline/detector.ts
var id19 = "timeline";
var detector19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*timeline/.test(txt);
}, "detector");
var loader19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/timeline-definition-U7ZMHBDA.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id19,
        diagram: diagram2
    };
}, "loader");
var plugin17 = {
    id: id19,
    detector: detector19,
    loader: loader19
};
var detector_default2 = plugin17;
// src/diagrams/mindmap/detector.ts
var id20 = "mindmap";
var detector20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*mindmap/.test(txt);
}, "detector");
var loader20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/mindmap-definition-GWI6TPTV.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id20,
        diagram: diagram2
    };
}, "loader");
var plugin18 = {
    id: id20,
    detector: detector20,
    loader: loader20
};
var detector_default3 = plugin18;
// src/diagrams/kanban/detector.ts
var id21 = "kanban";
var detector21 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*kanban/.test(txt);
}, "detector");
var loader21 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/kanban-definition-QRCXZQQD.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id21,
        diagram: diagram2
    };
}, "loader");
var plugin19 = {
    id: id21,
    detector: detector21,
    loader: loader21
};
var detector_default4 = plugin19;
// src/diagrams/sankey/sankeyDetector.ts
var id22 = "sankey";
var detector22 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*sankey-beta/.test(txt);
}, "detector");
var loader22 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/sankeyDiagram-Y46BX6SQ.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id22,
        diagram: diagram2
    };
}, "loader");
var plugin20 = {
    id: id22,
    detector: detector22,
    loader: loader22
};
var sankeyDetector_default = plugin20;
// src/diagrams/packet/detector.ts
var id23 = "packet";
var detector23 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*packet-beta/.test(txt);
}, "detector");
var loader23 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/diagram-QW4FP2JN.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id23,
        diagram: diagram2
    };
}, "loader");
var packet = {
    id: id23,
    detector: detector23,
    loader: loader23
};
// src/diagrams/block/blockDetector.ts
var id24 = "block";
var detector24 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*block-beta/.test(txt);
}, "detector");
var loader24 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/blockDiagram-ZHA2E4KO.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id24,
        diagram: diagram2
    };
}, "loader");
var plugin21 = {
    id: id24,
    detector: detector24,
    loader: loader24
};
var blockDetector_default = plugin21;
// src/diagrams/architecture/architectureDetector.ts
var id25 = "architecture";
var detector25 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((txt)=>{
    return /^\s*architecture/.test(txt);
}, "detector");
var loader25 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    const { diagram: diagram2 } = await __turbopack_require__("[project]/node_modules/.pnpm/mermaid@11.4.1/node_modules/mermaid/dist/chunks/mermaid.core/architectureDiagram-UYN6MBPD.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    return {
        id: id25,
        diagram: diagram2
    };
}, "loader");
var architecture = {
    id: id25,
    detector: detector25,
    loader: loader25
};
var architectureDetector_default = architecture;
// src/diagram-api/diagram-orchestration.ts
var hasLoadedDiagrams = false;
var addDiagrams = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
    if (hasLoadedDiagrams) {
        return;
    }
    hasLoadedDiagrams = true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerDiagram"])("error", errorDiagram_default, (text)=>{
        return text.toLowerCase().trim() === "error";
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerDiagram"])("---", // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
        db: {
            clear: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{}, "clear")
        },
        styles: {},
        // should never be used
        renderer: {
            draw: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{}, "draw")
        },
        parser: {
            parse: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
                throw new Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
            }, "parse")
        },
        init: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>null, "init")
    }, (text)=>{
        return text.toLowerCase().trimStart().startsWith("---");
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerLazyLoadedDiagrams"])(c4Detector_default, detector_default4, classDetector_V2_default, classDetector_default, erDetector_default, ganttDetector_default, info, pie, requirementDetector_default, sequenceDetector_default, detector_default, flowDetector_v2_default, flowDetector_default, detector_default3, detector_default2, gitGraphDetector_default, stateDetector_V2_default, stateDetector_default, journeyDetector_default, quadrantDetector_default, sankeyDetector_default, packet, xychartDetector_default, blockDetector_default, architectureDetector_default);
}, "addDiagrams");
// src/diagram-api/loadDiagram.ts
var loadRegisteredDiagrams = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug(`Loading registered diagrams`);
    const results = await Promise.allSettled(Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectors"]).map(async ([key, { detector: detector26, loader: loader26 }])=>{
        if (loader26) {
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDiagram"])(key);
            } catch  {
                try {
                    const { diagram: diagram2, id: id26 } = await loader26();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerDiagram"])(id26, diagram2, detector26);
                } catch (err) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error(`Failed to load external diagram with key ${key}. Removing from detectors.`);
                    delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectors"][key];
                    throw err;
                }
            }
        }
    }));
    const failed = results.filter((result)=>result.status === "rejected");
    if (failed.length > 0) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error(`Failed to load ${failed.length} external diagrams`);
        for (const res of failed){
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error(res);
        }
        throw new Error(`Failed to load ${failed.length} external diagrams`);
    }
}, "loadRegisteredDiagrams");
;
;
;
;
// src/accessibility.ts
var SVG_ROLE = "graphics-document document";
function setA11yDiagramInfo(svg, diagramType) {
    svg.attr("role", SVG_ROLE);
    if (diagramType !== "") {
        svg.attr("aria-roledescription", diagramType);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(setA11yDiagramInfo, "setA11yDiagramInfo");
function addSVGa11yTitleDescription(svg, a11yTitle, a11yDesc, baseId) {
    if (svg.insert === void 0) {
        return;
    }
    if (a11yDesc) {
        const descId = `chart-desc-${baseId}`;
        svg.attr("aria-describedby", descId);
        svg.insert("desc", ":first-child").attr("id", descId).text(a11yDesc);
    }
    if (a11yTitle) {
        const titleId = `chart-title-${baseId}`;
        svg.attr("aria-labelledby", titleId);
        svg.insert("title", ":first-child").attr("id", titleId).text(a11yTitle);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(addSVGa11yTitleDescription, "addSVGa11yTitleDescription");
// src/Diagram.ts
var Diagram = class _Diagram {
    constructor(type, text, db, parser, renderer2){
        this.type = type;
        this.text = text;
        this.db = db;
        this.parser = parser;
        this.renderer = renderer2;
    }
    static{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(this, "Diagram");
    }
    static async fromText(text, metadata = {}) {
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig"])();
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectType"])(text, config);
        text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeEntities"])(text) + "\n";
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDiagram"])(type);
        } catch  {
            const loader26 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDiagramLoader"])(type);
            if (!loader26) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownDiagramError"](`Diagram ${type} not found.`);
            }
            const { id: id26, diagram: diagram2 } = await loader26();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerDiagram"])(id26, diagram2);
        }
        const { db, parser, renderer: renderer2, init: init2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDiagram"])(type);
        if (parser.parser) {
            parser.parser.yy = db;
        }
        db.clear?.();
        init2?.(config);
        if (metadata.title) {
            db.setDiagramTitle?.(metadata.title);
        }
        await parser.parse(text);
        return new _Diagram(type, text, db, parser, renderer2);
    }
    async render(id26, version2) {
        await this.renderer.draw(this.text, id26, version2, this);
    }
    getParser() {
        return this.parser;
    }
    getType() {
        return this.type;
    }
};
// src/interactionDb.ts
var interactionFunctions = [];
var attachFunctions = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
    interactionFunctions.forEach((f)=>{
        f();
    });
    interactionFunctions = [];
}, "attachFunctions");
// src/diagram-api/comments.ts
var cleanupComments = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((text)=>{
    return text.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
}, "cleanupComments");
// src/diagram-api/frontmatter.ts
function extractFrontMatter(text) {
    const matches = text.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frontMatterRegex"]);
    if (!matches) {
        return {
            text,
            metadata: {}
        };
    }
    let parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$S3SWNSAA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["load"])(matches[1], {
        // To support config, we need JSON schema.
        // https://www.yaml.org/spec/1.2/spec.html#id2803231
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$S3SWNSAA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSON_SCHEMA"]
    }) ?? {};
    parsed = typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    const metadata = {};
    if (parsed.displayMode) {
        metadata.displayMode = parsed.displayMode.toString();
    }
    if (parsed.title) {
        metadata.title = parsed.title.toString();
    }
    if (parsed.config) {
        metadata.config = parsed.config;
    }
    return {
        text: text.slice(matches[0].length),
        metadata
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(extractFrontMatter, "extractFrontMatter");
// src/preprocess.ts
var cleanupText = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((code)=>{
    return code.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (match, tag, attributes)=>"<" + tag + attributes.replace(/="([^"]*)"/g, "='$1'") + ">");
}, "cleanupText");
var processFrontmatter = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((code)=>{
    const { text, metadata } = extractFrontMatter(code);
    const { displayMode, title, config = {} } = metadata;
    if (displayMode) {
        if (!config.gantt) {
            config.gantt = {};
        }
        config.gantt.displayMode = displayMode;
    }
    return {
        title,
        config,
        text
    };
}, "processFrontmatter");
var processDirectives = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((code)=>{
    const initDirective = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils_default"].detectInit(code) ?? {};
    const wrapDirectives = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils_default"].detectDirective(code, "wrap");
    if (Array.isArray(wrapDirectives)) {
        initDirective.wrap = wrapDirectives.some(({ type })=>type === "wrap");
    } else if (wrapDirectives?.type === "wrap") {
        initDirective.wrap = true;
    }
    return {
        text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeDirectives"])(code),
        directive: initDirective
    };
}, "processDirectives");
function preprocessDiagram(code) {
    const cleanedCode = cleanupText(code);
    const frontMatterResult = processFrontmatter(cleanedCode);
    const directiveResult = processDirectives(frontMatterResult.text);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cleanAndMerge"])(frontMatterResult.config, directiveResult.directive);
    code = cleanupComments(directiveResult.text);
    return {
        code,
        title: frontMatterResult.title,
        config
    };
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(preprocessDiagram, "preprocessDiagram");
// src/utils/base64.ts
function toBase64(str) {
    const utf8Bytes = new TextEncoder().encode(str);
    const utf8Str = Array.from(utf8Bytes, (byte)=>String.fromCodePoint(byte)).join("");
    return btoa(utf8Str);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(toBase64, "toBase64");
// src/mermaidAPI.ts
var MAX_TEXTLENGTH = 5e4;
var MAX_TEXTLENGTH_EXCEEDED_MSG = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var SECURITY_LVL_SANDBOX = "sandbox";
var SECURITY_LVL_LOOSE = "loose";
var XMLNS_SVG_STD = "http://www.w3.org/2000/svg";
var XMLNS_XLINK_STD = "http://www.w3.org/1999/xlink";
var XMLNS_XHTML_STD = "http://www.w3.org/1999/xhtml";
var IFRAME_WIDTH = "100%";
var IFRAME_HEIGHT = "100%";
var IFRAME_STYLES = "border:0;margin:0;";
var IFRAME_BODY_STYLE = "margin:0";
var IFRAME_SANDBOX_OPTS = "allow-top-navigation-by-user-activation allow-popups";
var IFRAME_NOT_SUPPORTED_MSG = 'The "iframe" tag is not supported by your browser.';
var DOMPURIFY_TAGS = [
    "foreignobject"
];
var DOMPURIFY_ATTR = [
    "dominant-baseline"
];
function processAndSetConfigs(text) {
    const processed = preprocessDiagram(text);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reset"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDirective"])(processed.config ?? {});
    return processed;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(processAndSetConfigs, "processAndSetConfigs");
async function parse(text, parseOptions) {
    addDiagrams();
    try {
        const { code, config } = processAndSetConfigs(text);
        const diagram2 = await getDiagramFromText(code);
        return {
            diagramType: diagram2.type,
            config
        };
    } catch (error) {
        if (parseOptions?.suppressErrors) {
            return false;
        }
        throw error;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(parse, "parse");
var cssImportantStyles = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((cssClass, element, cssClasses = [])=>{
    return `
.${cssClass} ${element} { ${cssClasses.join(" !important; ")} !important; }`;
}, "cssImportantStyles");
var createCssStyles = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((config, classDefs = /* @__PURE__ */ new Map())=>{
    let cssStyles = "";
    if (config.themeCSS !== void 0) {
        cssStyles += `
${config.themeCSS}`;
    }
    if (config.fontFamily !== void 0) {
        cssStyles += `
:root { --mermaid-font-family: ${config.fontFamily}}`;
    }
    if (config.altFontFamily !== void 0) {
        cssStyles += `
:root { --mermaid-alt-font-family: ${config.altFontFamily}}`;
    }
    if (classDefs instanceof Map) {
        const htmlLabels = config.htmlLabels ?? config.flowchart?.htmlLabels;
        const cssHtmlElements = [
            "> *",
            "span"
        ];
        const cssShapeElements = [
            "rect",
            "polygon",
            "ellipse",
            "circle",
            "path"
        ];
        const cssElements = htmlLabels ? cssHtmlElements : cssShapeElements;
        classDefs.forEach((styleClassDef)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(styleClassDef.styles)) {
                cssElements.forEach((cssElement)=>{
                    cssStyles += cssImportantStyles(styleClassDef.id, cssElement, styleClassDef.styles);
                });
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2d$es$2f$isEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(styleClassDef.textStyles)) {
                cssStyles += cssImportantStyles(styleClassDef.id, "tspan", (styleClassDef?.textStyles || []).map((s)=>s.replace("color", "fill")));
            }
        });
    }
    return cssStyles;
}, "createCssStyles");
var createUserStyles = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((config, graphType, classDefs, svgId)=>{
    const userCSSstyles = createCssStyles(config, classDefs);
    const allStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles_default"])(graphType, userCSSstyles, config.themeVariables);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$4$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$4$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compile"])(`${svgId}{${allStyles}}`), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$4$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"]);
}, "createUserStyles");
var cleanUpSvgCode = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((svgCode = "", inSandboxMode, useArrowMarkerUrls)=>{
    let cleanedUpSvg = svgCode;
    if (!useArrowMarkerUrls && !inSandboxMode) {
        cleanedUpSvg = cleanedUpSvg.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, 'marker-end="url(#');
    }
    cleanedUpSvg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeEntities"])(cleanedUpSvg);
    cleanedUpSvg = cleanedUpSvg.replace(/<br>/g, "<br/>");
    return cleanedUpSvg;
}, "cleanUpSvgCode");
var putIntoIFrame = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((svgCode = "", svgElement)=>{
    const height = svgElement?.viewBox?.baseVal?.height ? svgElement.viewBox.baseVal.height + "px" : IFRAME_HEIGHT;
    const base64encodedSrc = toBase64(`<body style="${IFRAME_BODY_STYLE}">${svgCode}</body>`);
    return `<iframe style="width:${IFRAME_WIDTH};height:${height};${IFRAME_STYLES}" src="data:text/html;charset=UTF-8;base64,${base64encodedSrc}" sandbox="${IFRAME_SANDBOX_OPTS}">
  ${IFRAME_NOT_SUPPORTED_MSG}
</iframe>`;
}, "putIntoIFrame");
var appendDivSvgG = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((parentRoot, id26, enclosingDivId, divStyle, svgXlink)=>{
    const enclosingDiv = parentRoot.append("div");
    enclosingDiv.attr("id", enclosingDivId);
    if (divStyle) {
        enclosingDiv.attr("style", divStyle);
    }
    const svgNode = enclosingDiv.append("svg").attr("id", id26).attr("width", "100%").attr("xmlns", XMLNS_SVG_STD);
    if (svgXlink) {
        svgNode.attr("xmlns:xlink", svgXlink);
    }
    svgNode.append("g");
    return parentRoot;
}, "appendDivSvgG");
function sandboxedIframe(parentNode, iFrameId) {
    return parentNode.append("iframe").attr("id", iFrameId).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(sandboxedIframe, "sandboxedIframe");
var removeExistingElements = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((doc, id26, divId, iFrameId)=>{
    doc.getElementById(id26)?.remove();
    doc.getElementById(divId)?.remove();
    doc.getElementById(iFrameId)?.remove();
}, "removeExistingElements");
var render = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async function(id26, text, svgContainingElement) {
    addDiagrams();
    const processed = processAndSetConfigs(text);
    text = processed.code;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug(config);
    if (text.length > (config?.maxTextSize ?? MAX_TEXTLENGTH)) {
        text = MAX_TEXTLENGTH_EXCEEDED_MSG;
    }
    const idSelector = "#" + id26;
    const iFrameID = "i" + id26;
    const iFrameID_selector = "#" + iFrameID;
    const enclosingDivID = "d" + id26;
    const enclosingDivID_selector = "#" + enclosingDivID;
    const removeTempElements = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
        const tmpElementSelector = isSandboxed ? iFrameID_selector : enclosingDivID_selector;
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(tmpElementSelector).node();
        if (node && "remove" in node) {
            node.remove();
        }
    }, "removeTempElements");
    let root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])("body");
    const isSandboxed = config.securityLevel === SECURITY_LVL_SANDBOX;
    const isLooseSecurityLevel = config.securityLevel === SECURITY_LVL_LOOSE;
    const fontFamily = config.fontFamily;
    if (svgContainingElement !== void 0) {
        if (svgContainingElement) {
            svgContainingElement.innerHTML = "";
        }
        if (isSandboxed) {
            const iframe = sandboxedIframe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(svgContainingElement), iFrameID);
            root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(iframe.nodes()[0].contentDocument.body);
            root.node().style.margin = 0;
        } else {
            root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(svgContainingElement);
        }
        appendDivSvgG(root, id26, enclosingDivID, `font-family: ${fontFamily}`, XMLNS_XLINK_STD);
    } else {
        removeExistingElements(document, id26, enclosingDivID, iFrameID);
        if (isSandboxed) {
            const iframe = sandboxedIframe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])("body"), iFrameID);
            root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(iframe.nodes()[0].contentDocument.body);
            root.node().style.margin = 0;
        } else {
            root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])("body");
        }
        appendDivSvgG(root, id26, enclosingDivID);
    }
    let diag;
    let parseEncounteredException;
    try {
        diag = await Diagram.fromText(text, {
            title: processed.title
        });
    } catch (error) {
        if (config.suppressErrorRendering) {
            removeTempElements();
            throw error;
        }
        diag = await Diagram.fromText("error");
        parseEncounteredException = error;
    }
    const element = root.select(enclosingDivID_selector).node();
    const diagramType = diag.type;
    const svg = element.firstChild;
    const firstChild = svg.firstChild;
    const diagramClassDefs = diag.renderer.getClasses?.(text, diag);
    const rules = createUserStyles(config, diagramType, diagramClassDefs, idSelector);
    const style1 = document.createElement("style");
    style1.innerHTML = rules;
    svg.insertBefore(style1, firstChild);
    try {
        await diag.renderer.draw(text, id26, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$K6PMAZHR$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"], diag);
    } catch (e) {
        if (config.suppressErrorRendering) {
            removeTempElements();
        } else {
            errorRenderer_default.draw(text, id26, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$K6PMAZHR$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]);
        }
        throw e;
    }
    const svgNode = root.select(`${enclosingDivID_selector} svg`);
    const a11yTitle = diag.db.getAccTitle?.();
    const a11yDescr = diag.db.getAccDescription?.();
    addA11yInfo(diagramType, svgNode, a11yTitle, a11yDescr);
    root.select(`[id="${id26}"]`).selectAll("foreignobject > *").attr("xmlns", XMLNS_XHTML_STD);
    let svgCode = root.select(enclosingDivID_selector).node().innerHTML;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("config.arrowMarkerAbsolute", config.arrowMarkerAbsolute);
    svgCode = cleanUpSvgCode(svgCode, isSandboxed, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluate"])(config.arrowMarkerAbsolute));
    if (isSandboxed) {
        const svgEl = root.select(enclosingDivID_selector + " svg").node();
        svgCode = putIntoIFrame(svgCode, svgEl);
    } else if (!isLooseSecurityLevel) {
        svgCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dompurify$40$3$2e$2$2e$3$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(svgCode, {
            ADD_TAGS: DOMPURIFY_TAGS,
            ADD_ATTR: DOMPURIFY_ATTR,
            HTML_INTEGRATION_POINTS: {
                foreignobject: true
            }
        });
    }
    attachFunctions();
    if (parseEncounteredException) {
        throw parseEncounteredException;
    }
    removeTempElements();
    return {
        diagramType,
        svg: svgCode,
        bindFunctions: diag.db.bindFunctions
    };
}, "render");
function initialize(userOptions = {}) {
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignWithDepth_default"])({}, userOptions);
    if (options?.fontFamily && !options.themeVariables?.fontFamily) {
        if (!options.themeVariables) {
            options.themeVariables = {};
        }
        options.themeVariables.fontFamily = options.fontFamily;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveConfigFromInitialize"])(options);
    if (options?.theme && options.theme in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes_default"]) {
        options.themeVariables = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes_default"][options.theme].getThemeVariables(options.themeVariables);
    } else if (options) {
        options.themeVariables = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes_default"].default.getThemeVariables(options.themeVariables);
    }
    const config = typeof options === "object" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSiteConfig"])(options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSiteConfig"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLogLevel"])(config.logLevel);
    addDiagrams();
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(initialize, "initialize");
var getDiagramFromText = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((text, metadata = {})=>{
    const { code } = preprocessDiagram(text);
    return Diagram.fromText(code, metadata);
}, "getDiagramFromText");
function addA11yInfo(diagramType, svgNode, a11yTitle, a11yDescr) {
    setA11yDiagramInfo(svgNode, diagramType);
    addSVGa11yTitleDescription(svgNode, a11yTitle, a11yDescr, svgNode.attr("id"));
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(addA11yInfo, "addA11yInfo");
var mermaidAPI = Object.freeze({
    render,
    parse,
    getDiagramFromText,
    initialize,
    getConfig: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig"],
    setConfig: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setConfig"],
    getSiteConfig: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSiteConfig"],
    updateSiteConfig: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSiteConfig"],
    reset: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reset"])();
    }, "reset"),
    globalReset: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reset"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"]);
    }, "globalReset"),
    defaultConfig: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"]
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLogLevel"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig"])().logLevel);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reset"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfig"])());
// src/mermaid.ts
var handleError = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((error, errors, parseError)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].warn(error);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDetailedError"])(error)) {
        if (parseError) {
            parseError(error.str, error.hash);
        }
        errors.push({
            ...error,
            message: error.str,
            error
        });
    } else {
        if (parseError) {
            parseError(error);
        }
        if (error instanceof Error) {
            errors.push({
                str: error.message,
                message: error.message,
                hash: error.name,
                error
            });
        }
    }
}, "handleError");
var run = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async function(options = {
    querySelector: ".mermaid"
}) {
    try {
        await runThrowsErrors(options);
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDetailedError"])(e)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error(e.str);
        }
        if (mermaid.parseError) {
            mermaid.parseError(e);
        }
        if (!options.suppressErrors) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error("Use the suppressErrors option to suppress these errors");
            throw e;
        }
    }
}, "run");
var runThrowsErrors = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async function({ postRenderCallback, querySelector, nodes } = {
    querySelector: ".mermaid"
}) {
    const conf = mermaidAPI.getConfig();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug(`${!postRenderCallback ? "No " : ""}Callback function found`);
    let nodesToProcess;
    if (nodes) {
        nodesToProcess = nodes;
    } else if (querySelector) {
        nodesToProcess = document.querySelectorAll(querySelector);
    } else {
        throw new Error("Nodes and querySelector are both undefined");
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug(`Found ${nodesToProcess.length} diagrams`);
    if (conf?.startOnLoad !== void 0) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Start On Load: " + conf?.startOnLoad);
        mermaidAPI.updateSiteConfig({
            startOnLoad: conf?.startOnLoad
        });
    }
    const idGenerator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils_default"].InitIDGenerator(conf.deterministicIds, conf.deterministicIDSeed);
    let txt;
    const errors = [];
    for (const element of Array.from(nodesToProcess)){
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].info("Rendering diagram: " + element.id);
        if (element.getAttribute("data-processed")) {
            continue;
        }
        element.setAttribute("data-processed", "true");
        const id26 = `mermaid-${idGenerator.next()}`;
        txt = element.innerHTML;
        txt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ts$2d$dedent$40$2$2e$2$2e$0$2f$node_modules$2f$ts$2d$dedent$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dedent"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils_default"].entityDecode(txt)).trim().replace(/<br\s*\/?>/gi, "<br/>");
        const init2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$7DKRZKHE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils_default"].detectInit(txt);
        if (init2) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].debug("Detected early reinit: ", init2);
        }
        try {
            const { svg, bindFunctions } = await render2(id26, txt, element);
            element.innerHTML = svg;
            if (postRenderCallback) {
                await postRenderCallback(id26);
            }
            if (bindFunctions) {
                bindFunctions(element);
            }
        } catch (error) {
            handleError(error, errors, mermaid.parseError);
        }
    }
    if (errors.length > 0) {
        throw errors[0];
    }
}, "runThrowsErrors");
var initialize2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(config) {
    mermaidAPI.initialize(config);
}, "initialize");
var init = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async function(config, nodes, callback) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].warn("mermaid.init is deprecated. Please use run instead.");
    if (config) {
        initialize2(config);
    }
    const runOptions = {
        postRenderCallback: callback,
        querySelector: ".mermaid"
    };
    if (typeof nodes === "string") {
        runOptions.querySelector = nodes;
    } else if (nodes) {
        if (nodes instanceof HTMLElement) {
            runOptions.nodes = [
                nodes
            ];
        } else {
            runOptions.nodes = nodes;
        }
    }
    await run(runOptions);
}, "init");
var registerExternalDiagrams = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (diagrams, { lazyLoad = true } = {})=>{
    addDiagrams();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerLazyLoadedDiagrams"])(...diagrams);
    if (lazyLoad === false) {
        await loadRegisteredDiagrams();
    }
}, "registerExternalDiagrams");
var contentLoaded = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function() {
    if (mermaid.startOnLoad) {
        const { startOnLoad } = mermaidAPI.getConfig();
        if (startOnLoad) {
            mermaid.run().catch((err)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error("Mermaid failed to initialize", err));
        }
    }
}, "contentLoaded");
if (typeof document !== "undefined") {
    window.addEventListener("load", contentLoaded, false);
}
var setParseErrorHandler = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(function(parseErrorHandler) {
    mermaid.parseError = parseErrorHandler;
}, "setParseErrorHandler");
var executionQueue = [];
var executionQueueRunning = false;
var executeQueue = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async ()=>{
    if (executionQueueRunning) {
        return;
    }
    executionQueueRunning = true;
    while(executionQueue.length > 0){
        const f = executionQueue.shift();
        if (f) {
            try {
                await f();
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error("Error executing queue", e);
            }
        }
    }
    executionQueueRunning = false;
}, "executeQueue");
var parse2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(async (text, parseOptions)=>{
    return new Promise((resolve, reject)=>{
        const performCall = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>new Promise((res, rej)=>{
                mermaidAPI.parse(text, parseOptions).then((r)=>{
                    res(r);
                    resolve(r);
                }, (e)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error("Error parsing", e);
                    mermaid.parseError?.(e);
                    rej(e);
                    reject(e);
                });
            }), "performCall");
        executionQueue.push(performCall);
        executeQueue().catch(reject);
    });
}, "parse");
var render2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])((id26, text, container)=>{
    return new Promise((resolve, reject)=>{
        const performCall = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__name"])(()=>new Promise((res, rej)=>{
                mermaidAPI.render(id26, text, container).then((r)=>{
                    res(r);
                    resolve(r);
                }, (e)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"].error("Error parsing", e);
                    mermaid.parseError?.(e);
                    rej(e);
                    reject(e);
                });
            }), "performCall");
        executionQueue.push(performCall);
        executeQueue().catch(reject);
    });
}, "render");
var mermaid = {
    startOnLoad: true,
    mermaidAPI,
    parse: parse2,
    render: render2,
    init,
    run,
    registerExternalDiagrams,
    registerLayoutLoaders: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$BO7VGL7K$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerLayoutLoaders"],
    initialize: initialize2,
    parseError: void 0,
    contentLoaded,
    setParseErrorHandler,
    detectType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$6DBFFHIP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectType"],
    registerIconPacks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mermaid$40$11$2e$4$2e$1$2f$node_modules$2f$mermaid$2f$dist$2f$chunks$2f$mermaid$2e$core$2f$chunk$2d$OPO4IU42$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerIconPacks"]
};
var mermaid_default = mermaid;
;
 /*! Check if previously processed */  /*!
 * Wait for document loaded before starting the execution
 */ }}),

};

//# sourceMappingURL=a945f_mermaid_dist_175e2d._.js.map