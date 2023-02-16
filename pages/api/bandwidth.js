export default async function handler(req, res) {
  if (process.env.ENV == "local") {
    const n = 50;
    // Generate random bandwidth speeds (in Mbps)
    const bandwidthSpeedsMain = Array.from({ length: n }, (_, i) => ({
      value: Math.floor(Math.random() * (1000 - 1 + 1) + 1),
      key: Math.random(),
    }));

    const bandwidthSpeedsRemote = Array.from({ length: n }, (_, i) => ({
      value: Math.floor(Math.random() * (1000 - 1 + 1) + 1),
      key: Math.random(),
    }));

    // Save the data as a JSON variable
    const data = { bandwidthSpeedsMain, bandwidthSpeedsRemote };
    res.status(200).json(data);
  } else {
    const formData = req.body;
    const body = JSON.stringify(formData);
    let request = {
      url: `http://127.0.0.1:8081/network/bandwidth`,
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
