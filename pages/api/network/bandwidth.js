export default async function handler(req, res) {
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
}
