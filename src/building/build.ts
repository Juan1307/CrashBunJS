const { log, error, table } = console;
/* Bun build debe ejecutar con el contexto de bun como: "bun run src/building/build.ts" */
const buildResponse = await Bun.build({
    entrypoints: ['./src/index.ts'],
    // outdir: './build',
    minify: true
});

/* puedo entrar al flujo del "building" */
const { success, logs, outputs } = buildResponse;
table(logs);
(success ? log('=== Success ===') : error(' === Error: check the logs ==='));

/* hacer guardado manual de escritura del blob  */
for (const artifact of outputs) {

    let result = await artifact.text();
    new Response(result);

    Bun.write(`${process.cwd()}/build/${artifact.path}`, result); // direccion de salida
    // log('../build/' + artifact.path);
}

export { }