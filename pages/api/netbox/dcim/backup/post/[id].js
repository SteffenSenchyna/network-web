export default async function handler(req, res) {
  const formData = req.body;
  const id = req.query.id;
  const body = JSON.stringify(formData);
  const env = process.env.ENV;
  var url = "";
  if (env == "local") {
    url = "0.0.0.0:8000";
  } else {
    url = "netbox-docker-netbox-1:8080";
  }
  let request = {
    url: `http://${url}/api/dcim/devices/${id}`,
    method: "POST",
    body: body,
    headers: {
      "content-type": "application/json",
      Authorization: process.env.NETBOXTOKEN,
    },
  };
  const axios = require("axios");
  await axios(request)
    .then(function (response) {
      if (response.status == 200) {
        const deviceJSON = response.data;
        res.status(200).json(response.data);
      }
    })
    .catch(function (response) {
      console.log("Failed to scan network");
      res.status(response.response.status).json(response.response.data);
    });
}
