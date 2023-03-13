export default async function handler(req, res) {
  const data = {
    upDevicesMain: 13,
    downDevicesMain: 5,
    totalDevicesMain: 18,
    upDevicesRemote: 7,
    downDevicesRemote: 5,
    totalDevicesRemote: 12,
  };
  res.status(200).json(data);
}
