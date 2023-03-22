export default async function handler(req, res) {
  const formData = req.body;
  const body = JSON.stringify(formData);
  const env = process.env.ENV;
  const token = process.env.NETBOXTOKEN;
  var url = "";
  if (env == "local") {
    url = "0.0.0.0:8000";
  } else {
    url = "netbox-docker-netbox-1:8080";
  }
  let request = {
    url: `http://${url}/api/dcim/devices/`,
    method: "GET",
    body: body,
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  };
  const axios = require("axios");
  await axios(request)
    .then(function (response) {
      if (response.status == 200) {
        console.log(response.data);
        res.status(200).json(response.data);
      }
    })
    .catch(function (response) {
      console.log("Failed to grab devices from Netbox SQL database");
      res.status(response.status).json(response.data);
    });
}
