export default async function handler(req, res) {
  try {
    const action = String(req.query.action || "public");
    const key = String(req.query.key || "");

    const GAS_URL = "https://script.google.com/macros/s/AKfycbzjABRVgRaoMj3Y1gCU_DRJpnZIvkGwxRRxmPW6buV1POsQ87GQCLAeEBG5j9jJZux7iQ/exec";

    let url = GAS_URL + "?action=" + action;
    if (key) url += "&key=" + key;

    const r = await fetch(url);
    const data = await r.json();

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({
      status: false,
      message: e.toString()
    });
  }
}
