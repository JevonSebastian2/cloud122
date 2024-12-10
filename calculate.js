export default function handler(req, res) {
    const { upperLimit } = req.query;
    const limit = parseInt(upperLimit, 10);

    if (!limit || limit <= 0) {
        return res.status(400).json({ error: 'Batas atas tidak valid!' });
    }

    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum += i;
    }

    res.status(200).json({ result: sum });
}
