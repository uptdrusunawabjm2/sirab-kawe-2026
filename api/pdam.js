export default async function handler(req, res){
  try{
    const action = String(req.query.action || "summary");

    const GAS_PDAM_URL = "https://script.google.com/macros/s/AKfycbwXA1ikAoEsxJgvGVF9KD823rOw2TKokLe3Qyxw5JYl9iSGFGpS1zGCMsdI8bCg1JU0og/exec";

    const url = GAS_PDAM_URL + "?action=" + action;
    const r = await fetch(url);
    const data = await r.json();

    res.status(200).json(data);
  }catch(e){
    res.status(500).json({status:false, message:e.toString()});
  }
}

