export default async function handler(req, res) {
  const formData = req.body;
  const body = JSON.stringify(formData);
  const env = process.env.ENV;
  const token = process.env.NETBOXTOKEN;
  const url = req.query.id + "/";
  var urlAPI = "";
  if (env == "local") {
    urlAPI = "0.0.0.0:8000";
  } else {
    urlAPI = "netbox-docker-netbox-1:8080";
  }
  let request = {
    url: `http://${urlAPI}/api/dcim/devices/`,
    method: "GET",
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
        res.status(response.status).json(response.data);
      }
    })
    .catch(function (response) {
      console.log("Failed to grab sites from Netbox SQL database");
      console.log(response.data);
      res.status(response.status).json(response.data);
    });
}
