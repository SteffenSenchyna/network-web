import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

export default async function handler(req, res) {
  const AWS = require("aws-sdk");
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_DEFAULT_REGION,
  });
  // const s3 = new S3Client({
  // accessKeyId: process.env.AWS_ACCESS_KEY,
  // secretAccessKey: process.env.AWS_SECRET_KEY,
  // });
  const listBuckets = (s3) => {
    s3.listBuckets(function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Buckets);
      }
    });
  };
  const listObjectsInBucket = (bucketName, folderName) => {
    // Create the parameters for calling listObjects
    var bucketParams = {
      Bucket: bucketName,
      Prefix: folderName,
    };

    // Call S3 to obtain a list of the objects in the bucket
    s3.listObjects(bucketParams, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
  };
  listBuckets(s3);
  const id = req.query.id + "/";
  listObjectsInBucket("network-conf", id);
  return res.status(200); // For unit tests.
}
