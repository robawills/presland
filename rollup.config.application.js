// Rollup plugins
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
    entry : './cms/resources/assets/scripts/application/application.js',
    dest : './public/assets/scripts/application/application.min.js',
    format : 'iife',
    plugins: [
        babel({
            exclude : ['./node_modules/**'],
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