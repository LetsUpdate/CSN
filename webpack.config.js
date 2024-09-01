const path = require('path');
const { UserscriptPlugin } = require('webpack-userscript');
const TerserPlugin = require('terser-webpack-plugin');


const dev = process.env.NODE_ENV === 'development';

module.exports = {
    mode: dev ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.js'), // Your entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'CSN.user.js', // Output file
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        client: false, // Disable client injection
        hot: false, // Disable hot reloading


    },
    optimization: {
        minimize: dev ? false : true,
        minimizer: [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: dev ? false : true,
                },
              },
            }),
          ],
      },
    plugins: [
        new UserscriptPlugin({
                        headers(original) {
                            const baseHeaders = {
                                name: 'Captcha Solver For Neptun',
                                namespace: 'https://github.com/LetsUpdate/CSN',
                                description: 'No captcha 4 u',
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
                                require: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",
                                updateURL: "https://github.com/LetsUpdate/CSN/releases/latest/download/CSN.meta.js",
                                downloadURL:"https://github.com/LetsUpdate/CSN/releases/latest/download/CSN.user.js",
                                supportURL:"https://github.com/LetsUpdate/CSN",
                                icon64: "https://raw.githubusercontent.com/LetsUpdate/CSN/main/.github/icon.png",
                                license: "MIT",

                            };
                        
                            if (dev) {
                                return {
                                    ...original,
                                    ...baseHeaders,
                                    version: `${original.version}-build.[buildNo]`,
                                };
                            }
                        
                            return {
                                ...original,
                                ...baseHeaders,
                            };
                        },

        }),
        
    ],
};