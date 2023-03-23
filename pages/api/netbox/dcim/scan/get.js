export default async function handler(req, res) {
  const formData = req.body;
  const body = JSON.stringify(formData);
  const env = process.env.ENV;
  var url = "";
  if (env == "local") {
    url = "0.0.0.0:8081";
  } else {
    url = "network-api:8081";
  }
  let request = {
    url: `http://${url}/network/scan`,
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
    res.status(400).json(response.data);
  }
}
