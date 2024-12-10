const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());

// Route untuk menghitung penjumlahan
app.get('/calculate', (req, res) => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    res.json({ result: sum });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
