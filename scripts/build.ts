import { build } from "esbuild";

async function buildAll() {
    try {
        await build({
            entryPoints: ["src/main.ts"],
            bundle: true,
            outfile: "dist/index.mjs",
            minify: true,
            sourcemap: true,
            platform: "browser",
            format: "esm",
            target: "es2020",
        });

        await build({
            entryPoints: ["src/main.ts"],
            bundle: true,
            outfile: "dist/index.cjs",
            minify: true,
            sourcemap: true,
            platform: "node",
            format: "cjs",
            target: "es2020",
        });

        console.log("Build completed successfully.");
    } catch (e) {
        console.error("Build failed: F en el chat", e);
        process.exit(1);
    }
}

buildAll();
