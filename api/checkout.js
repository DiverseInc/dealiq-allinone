module.exports = async (req, res) => {
  try {
    const r = await fetch('https://broker-platform-khaki.vercel.app/api/checkout', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body || {}),
    });
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
