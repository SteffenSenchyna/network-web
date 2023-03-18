export default async function handler(req, res) {
  const formData = req.body;
  const body = JSON.stringify(formData);
  const env = process.env.ENV;
  const token = process.env.NETBOXTOKEN;
  var url = "";
  if (env == "local") {
    url = "0.0.0.0:8081";
  } else {
    url = "netbox-docker-netbox-1:8080";
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
    res.status(response.status).json(response.data);
  }
}
