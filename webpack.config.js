const path = require("path");

module.exports = {
    entry: {
        classic: "./src/classic.ts",
        phaserEngine: "./src/phaserEngine.js",
        GameScene: "./src/classicEngine/GameScene.ts",
        basic: "./src/basic.css",
        story: "./src/story.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            name: "StablerCharacterts",
            type: "umd",
            export: ["default", "subModule"]
        }
    }
}