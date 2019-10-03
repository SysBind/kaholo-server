export default async function teardown() {
    await global.app.close();
    await global.databaseServer.stop();
}
