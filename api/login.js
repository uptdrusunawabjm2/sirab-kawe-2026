export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }

  try {
    const { username, password } = req.body || {};

    // =========================
    // GANTI USERNAME & PASSWORD
    // =========================
    const USERNAME = "admin";
    const PASSWORD = "Rusun#2026!";

    if (username === USERNAME && password === PASSWORD) {
      return res.status(200).json({ status: true });
    } else {
      return res.status(401).json({ status: false });
    }
  } catch (e) {
    return res.status(500).json({ status: false });
  }
}
