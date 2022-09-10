import { transform } from '@swc/core';
import { createFilter } from '@rollup/pluginutils';
const swc = (pluginOptions = {}) => {
    const { rollup, ...options } = pluginOptions;
    const filter = createFilter(rollup?.include, rollup?.exclude);
    return {
        name: 'swc',
        transform(code, filename) {
            if (!filter(filename)) {
                return null;
            }
            options.filename = filename;
            return transform(code, options);
        },
    };
};
export default swc;
