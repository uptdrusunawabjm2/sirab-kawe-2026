export default function handler(req, res) {
  const { password } = req.query;

  // GANTI PASSWORD DISINI
  const PASSWORD = "rusun2026";

  if (password === PASSWORD) {
    res.status(200).json({status:true});
  } else {
    res.status(401).json({status:false});
  }
}
