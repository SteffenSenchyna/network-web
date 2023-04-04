export default async function handler(req, res) {
  const device_ip = req.query.id;
  const MongoClient = require("mongodb").MongoClient;
  const mongoURL = process.env.MONGOURL;
  const dbName = "snmp-bandwidth";
  const collectionName = device_ip;
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
  const groupedInterfaces = [];

  for (const object of query) {
    for (const [index, int] of object.interfaces.entries()) {
      if (!groupedInterfaces[index]) {
        groupedInterfaces[index] = [];
      }
      groupedInterfaces[index].push(int);
    }
  }

  console.log(groupedInterfaces.length);

  const util = require("util");
  // console.log(util.inspect(query, false, null, true /* enable colors */));
  res.status(200).json(groupedInterfaces);
}
