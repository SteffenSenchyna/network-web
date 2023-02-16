export default async function handler(req, res) {
  const formData = req.body;
  const body = JSON.stringify(formData);
  let request = {
    url: `http://0.0.0.0:8000/api/dcim/devices/`,
    method: "GET",
    body: body,
    headers: {
      "content-type": "application/json",
      Authorization: "Token 0123456789abcdef0123456789abcdef01234567",
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
