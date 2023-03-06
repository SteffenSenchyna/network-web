import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
export default async function handler(req, res) {
  const s3Client = new S3Client({
    region: process.env.AWS_DEFAULT_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    },
  });

  // Set up bucket name and optional prefix
  const bucketName = process.env.AWS_S3_BUCKET_NAME;
  const prefix = req.query.id + "/";

  try {
    // Use the AWS SDK v3 to list objects in the bucket
    const command = new ListObjectsCommand({
      Bucket: bucketName,
      Prefix: prefix,
    });
    const response = await s3Client.send(command);
    // Extract the object keys and return as response
    if (response.Contents != null) {
      const objectKeys = response.Contents.map((object) => object.Key);
      const keys = objectKeys
        .slice(1)
        .map((fileName) => fileName.replace(".txt", ""));
      res.status(200).json(keys);
    } else {
      res
        .status(200)
        .json({ message: "No backups for the device are available" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error listing objects in S3 bucket" });
  }
}
