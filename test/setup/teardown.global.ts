export default async function teardown() {
    try {
        await global.databaseServer.stop();
        process.exit(0);
    } catch (err) {
        console.log(err)
    }
}
