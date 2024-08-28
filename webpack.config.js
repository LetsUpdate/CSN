const path = require('path');
const { UserscriptPlugin } = require('webpack-userscript');


const dev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: dev ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.js'), // Your entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.user.js', // Output file
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        client: false, // Disable client injection
        hot: false, // Disable hot reloading


    },
    optimization: {
        minimize: false,
      },
    plugins: [
        new UserscriptPlugin({
                        headers(original) {
                            const baseHeaders = {
                                name: 'CSN2',
                                namespace: 'http://tampermonkey.net/',
                                version: '1.0.0',
                                description: 'A Tampermonkey script bundled with Webpack',
                                author: 'RED',
                                include: [
                                    'https://*neptun*/*hallgato*/*',
                                    'https://*neptun*/*Hallgatoi*/*',
                                    'https://*hallgato*.*neptun*/*',
                                    'https://netw*.nnet.sze.hu/hallgato',
                                    'https://nappw.dfad.duf.hu/hallgato/*',
                                ],
                                grant: 'GM_xmlhttpRequest',
                                "run-at": "document-end",
                                require: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
                            };
                        
                            if (dev) {
                                return {
                                    ...baseHeaders,
                                    ...original,
                                    version: `${original.version}-build.[buildNo]`,
                                };
                            }
                        
                            return {
                                ...baseHeaders,
                                ...original,
                            };
                        },

        }),
        
    ],
};