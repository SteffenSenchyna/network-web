export default async function handler(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const mongoURL = process.env.MONGOURL;
  const client = new MongoClient(`mongodb://${mongoURL}/snmp`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db();
  const collectionsCursor = db.listCollections();
  const collections = [];
  while (await collectionsCursor.hasNext()) {
    const collection = await collectionsCursor.next();
    const collectionName = collection.name;
    const collectionEntries = await db
      .collection(collectionName)
      .find()
      .toArray();
    console.log(collectionEntries);
    collections.push({
      name: collectionName,
      entries: collectionEntries.reverse(),
      entriesCount: collectionEntries.length,
    });
  }

  res.status(200).json({ collections });
}
