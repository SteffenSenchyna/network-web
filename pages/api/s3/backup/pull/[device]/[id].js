import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "stream";

export default async function handler(req, res) {
  const query = req.query;
  const objectKey = query.device + "/" + query.id + ".txt";
  const s3Client = new S3Client({
    region: process.env.AWS_DEFAULT_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    },
  });

  // Set up bucket name and optional prefix
  const bucketName = process.env.AWS_S3_BUCKET_NAME;

  try {
    // Use the AWS SDK v3 to get the object data
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: objectKey,
    });
    const response = await s3Client.send(command);

    // Extract the object data and create a stream
    const objectData = response.Body;
    const stream = Readable.from(objectData);

    // Set response headers for file download
    res.setHeader("Content-Disposition", `attachment; filename="${objectKey}"`);
    res.setHeader("Content-Type", response.ContentType);

    // Pipe the object data stream to the response
    stream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error downloading file from S3 bucket" });
  }
}
