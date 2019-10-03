import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

export async function removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        await collection.deleteMany({});
    }
}

export async function dropAllCollections() {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        try {
            await collection.drop();
        } catch (error) {
            // Sometimes this error happens, but you can safely ignore it
            if (error.message === 'ns not found') { return; }
            if (
                error.message.includes('a background operation is currently running')
            ) {
                return;
            }
            // tslint:disable-next-line: no-console
            console.log(error.message);
        }
    }
}

export function setupDB() {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
        await dropAllCollections();
    });

    afterEach(async () => {
        await removeAllCollections();
    });

    afterAll(async () => {
        await dropAllCollections();
        await mongoose.disconnect();
    });
}
