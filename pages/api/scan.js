export default async function handler(req, res) {
  if (process.env.ENV == "local") {
    const data = {
      upDevicesMain: 13,
      downDevicesMain: 5,
      totalDevicesMain: 18,
      upDevicesRemote: 7,
      downDevicesRemote: 5,
      totalDevicesRemote: 12,
    };
    res.status(200).json(data);
  } else {
    const formData = req.body;
    const body = JSON.stringify(formData);
    let request = {
      url: `http://127.0.0.1:8081/network/scan`,
      method: "GET",
      data: formData,
      body: body,
      headers: {
        "content-type": "application/json",
      },
    };
    const axios = require("axios");
    await axios(request)
      .then(function (response) {
        if (response.status == 200) {
          console.log("Retrieved Up Devices on the Network");
          res.status(200).json(response.data);
        }
      })
      .catch(function (response) {
        console.log("Failed to scan network");
        res.status(response.response.status).json(response.response.data);
      });
  }
}
