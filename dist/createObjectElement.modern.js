function e(n,o){if("number"==typeof o||"bigint"==typeof o||o instanceof Date||o instanceof RegExp)n.append(String(o));else if(Array.isArray(o))for(const t of o)e(n,t);else null!=o&&"boolean"!=typeof o&&n.append(o)}export default(n,o,...t)=>{const a={tagName:n=n.toLowerCase(),children:[],value:"",append:e=>{"string"!=typeof e&&"boolean"!=typeof e?a.children.push(e):a.value=e}};for(const e in o)a[e]=o[e];for(const n of t)e(a,n);return a};
//# sourceMappingURL=createObjectElement.modern.js.map