// Rollup plugins

import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry : './cms/resources/assets/scripts/application/application.js',
    dest : './public/assets/scripts/application/application.min.js',
    format : 'iife',
    moduleName : 'PRESLAND',
    plugins: [
        resolve(),
        babel({
            exclude : ['./node_modules/**', './scripts/application/parties/**'],
            presets : [[
                "env", {
                    "modules" : false
                }
            ]],
            plugins : [
                "transform-object-rest-spread",
                "external-helpers"
            ]
        }),
        uglify({
            sourceMap : false
        }, minify)
    ]
};