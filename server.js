const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Parse request body
app.use(express.urlencoded({ extended: true }));

// Serve the frontend
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/calculate', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.send('Input harus berupa angka!');
    }

    if (num1 > 100 || num2 > 100) {
        return res.send('Masukkan angka antara 1-100!');
    }

    const result = num1 + num2;
    res.send(`Hasil penjumlahan: ${result}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
