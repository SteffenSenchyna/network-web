export default async function handler(req, res) {
  const id = req.query.id;
  let request = {
    url: `http://0.0.0.0:8000/api/dcim/interfaces/?device_id=${id}&embed=interfaces`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Token 0123456789abcdef0123456789abcdef01234567",
    },
  };
  let requestIP = {
    url: `http://0.0.0.0:8000/api/ipam/ip-addresses/?device_id=${id}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Token 0123456789abcdef0123456789abcdef01234567",
    },
  };

  const axios = require("axios");
  const respInt = await axios(request);
  const respIP = await axios(requestIP);
  const util = require("util");
  await Promise.all([respInt, respIP]).then(function (responses) {
    const int = responses[0].data.results;
    const ips = responses[1].data.results;
    for (let x in int) {
      for (let i in ips) {
        if (int[x]["id"] == ips[i]["assigned_object_id"]) {
          if (ips[i]["family"]["value"] == 4) {
            const IP = ips[i];
            int[x].ip4 = IP;
          } else {
            const IP = ips[i];
            int[x].ip6 = IP;
          }
        }
      }
    }
    return res.status(200).json(int);
  });

  // await axios(request)
  //   .then(function (response) {
  //     if (response.status == 200) {
  //       res.status(200).json(response.data);
  //     }
  //   })
  //   .catch(function (response) {
  //     console.log("Failed to grab device interfaces");
  //     res.status(response.status).json(response.data);
  //   });
}
