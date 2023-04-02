export default async function handler(req, res) {
  const networkAPIURL = process.env.NETWORKAPIURL;
  let request = {
    url: `http://${networkAPIURL}/network/scan`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };
  const axios = require("axios");
  try {
    const response = await axios(request);
    res.status(response.status).json(response.data);
  } catch {
    res
      .status(400)
      .json({ message: "Could not retrieve devices from netowrk-api" });
  }
}
