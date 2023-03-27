export default async function handler(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const env = process.env.ENV;
  var uri = "";
  if (env == "local") {
    uri = "mongodb://0.0.0.0:27017/logs";
  } else {
    uri = "mongodb://mongodb:27017/logs";
  }

  const client = new MongoClient(uri, {
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
      switch (entry.level) {
        case "EMERGENCY":
          emergency++;
          break;
        case "ALERT":
          alert++;
          break;
        case "CRITICAL":
          critical++;
          break;
        case "ERROR":
          error++;
          break;
        case "WARNING":
          warning++;
          break;
        case "NOTICE":
          notice++;
          break;
        case "INFORMATIONAL":
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
      entries: collectionEntries,
      severityLevels: severityLevels,
    });
  }

  res.status(200).json({ collections });
}
