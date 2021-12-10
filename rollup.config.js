const typescript = require("@rollup/plugin-typescript");

export default [
    {
        input: "./src/classic.ts",
        output: {
            dir: "./dist"
        },
        plugins: [typescript()]
    },
    {
        input: "./src/phaser.ts",
        output: {
            dir: "./dist"
        },
        plugins: [typescript()]
    }
]