export default async function handler(req, res) {
  const { action, unit } = req.query;
  const GAS_URL = "https://script.google.com/macros/s/AKfycbzjABRVgRaoMj3Y1gCU_DRJpnZIvkGwxRRxmPW6buV1POsQ87GQCLAeEBG5j9jJZux7iQ/exec";

  try {
    const url = `${GAS_URL}?action=${action||"summary"}${unit ? "&unit="+unit : ""}`;
    const r = await fetch(url);
    const j = await r.json();
    res.status(200).json(j);
  } catch (e) {
    res.status(500).json({status:false, message:"API Error"});
  }
}






