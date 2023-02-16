export default async function handler(req, res) {
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
