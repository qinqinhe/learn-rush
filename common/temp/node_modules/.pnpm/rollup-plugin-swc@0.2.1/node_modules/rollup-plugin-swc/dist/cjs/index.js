"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@swc/core");
const pluginutils_1 = require("@rollup/pluginutils");
const swc = (pluginOptions = {}) => {
    const { rollup, ...options } = pluginOptions;
    const filter = (0, pluginutils_1.createFilter)(rollup?.include, rollup?.exclude);
    return {
        name: 'swc',
        transform(code, filename) {
            if (!filter(filename)) {
                return null;
            }
            options.filename = filename;
            return (0, core_1.transform)(code, options);
        },
    };
};
exports.default = swc;
