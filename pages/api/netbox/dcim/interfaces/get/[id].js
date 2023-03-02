export default async function handler(req, res) {
  const id = req.query.id;
  const env = process.env.ENV;
  const token = process.env.NETBOXTOKEN;
  var url = "";
  if (env == "local") {
    url = "0.0.0.0:8000";
  } else {
    url = "netbox-docker-netbox-1:8080";
  }
  let request = {
    url: `http://${url}/api/dcim/interfaces/?device_id=${id}&embed=interfaces`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  };
  let requestIP = {
    url: `http://${url}/api/ipam/ip-addresses/?device_id=${id}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  };
  const axios = require("axios");
  const respInt = await axios(request);
  const respIP = await axios(requestIP);
  await Promise.all([respInt, respIP]).then(function (responses) {
    const ints = responses[0].data.results;
    const ips = responses[1].data.results;
    for (let x in ints) {
      for (let i in ips) {
        if (ints[x]["id"] == ips[i]["assigned_object_id"]) {
          if (ips[i]["family"]["value"] == 4) {
            const IP = ips[i];
            ints[x].ip4 = IP;
          } else {
            const IP = ips[i];
            ints[x].ip6 = IP;
          }
        }
      }
    }
    return res.status(200).json(ints);
  });
}
