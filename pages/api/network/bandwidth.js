export default async function handler(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const mongoURL = process.env.MONGOURL;
  const dbName = "network";
  const collectionName = "bandwidth";
  // Connect to the database
  const client = await MongoClient.connect(`mongodb://${mongoURL}/`, {
    useNewUrlParser: true,
  });
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Query the collection
  const query = await collection
    .find()
    // .find({
    //   created_at: {
    //     $lt: new Date(),
    //     $gte: new Date(new Date().setDate(new Date().getDate() - 1)),
    //   },
    // })
    .toArray();
  client.close();
  const download_speed = [];
  const upload_speed = [];
  query.forEach((i) => {
    download_speed.push({
      created_at: i.created_at,
      download_speed: i.downloadSpeed,
    });
    upload_speed.push({
      created_at: i.created_at,
      upload_speed: i.uploadSpeed,
    });
  });

  // Save the data as a JSON variable
  const data = { download_speed: download_speed, upload_speed: upload_speed };
  res.status(200).json(data);
}
