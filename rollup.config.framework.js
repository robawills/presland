// Rollup plugins
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
    entry : './cms/resources/assets/scripts/framework/framework.js',
    dest : './public/assets/scripts/framework/framework.min.js',
    format : 'iife',
    moduleName : 'UIKit',
    moduleContext : {
        './cms/resources/assets/scripts/framework/parties/promise.js' : 'window',
        './cms/resources/assets/scripts/framework/parties/fetch.js' : 'window'
    },
    plugins: [
        babel({
            exclude : ['./node_modules/**', './src/scripts/framework/parties/**'],
            presets : [[
                "env", {
                    "targets" : {
                        "browsers" : ["> 1%", "last 2 versions", "Firefox ESR", "not ie_mob <= 12"]
                    },
                    "modules" : false
                }
            ]],
            plugins : [
                "external-helpers"
            ]
        }),
        uglify({
            sourceMap : false
        }, minify)
    ]
};