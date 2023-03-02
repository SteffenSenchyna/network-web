import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

export default async function handler(req, res) {
  const AWS = require("aws-sdk");
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_DEFAULT_REGION,
  });
  //Function for listing the buckets in S3
  const listBuckets = async (s3) => {
    s3.listBuckets(function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Buckets);
      }
    });
  };
  //Function for listing the objects in a bucket in S3
  const listObjectsInBucket = async (bucketName, folderName) => {
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
        return res.status(200);
      }
    });
  };
  const id = req.query.id + "/";
  await listObjectsInBucket("network-conf", id);
  return res.status(200); // For unit tests.
}
