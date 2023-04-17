export default async function handler(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const mongoURL = process.env.MONGOURL;
  const client = new MongoClient(`mongodb://${mongoURL}/syslogs`, {
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
    // Count severity levels
    let emergency = 0;
    let alert = 0;
    let critical = 0;
    let error = 0;
    let warning = 0;
    let notice = 0;
    let informational = 0;

    collectionEntries.forEach((entry) => {
      switch (entry.severity) {
        case 0:
          emergency++;
          break;
        case 1:
          alert++;
          break;
        case 2:
          critical++;
          break;
        case 3:
          error++;
          break;
        case 4:
          warning++;
          break;
        case 5:
          notice++;
          break;
        case 6:
          informational++;
          break;
        default:
          break;
      }
    });
    let severityLevels = {
      emergency: emergency,
      alert: alert,
      critical: critical,
      error: error,
      warning: warning,
      notice: notice,
      informational: informational,
    };
    collections.push({
      name: collectionName,
      entries: collectionEntries.reverse(),
      severityLevels: severityLevels,
    });
  }

  res.status(200).json({ collections });
}
