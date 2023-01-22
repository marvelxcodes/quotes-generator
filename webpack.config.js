module.exports = [
    {
        name: 'server',
        entry: './index.ts',
        target: 'node',
        output: {
            path: __dirname + '/dist',
            filename: 'server.js',
        },
        resolve: {
            modules: [
            "node_modules"
            ],
            extensions: [".ts", ".js"]
        },
        mode: 'production',
        module: {
            rules: [
              { test: /\.ts?$/, loader: "ts-loader" }
            ]
        }
    }
]