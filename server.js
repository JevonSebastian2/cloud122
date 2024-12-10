const express = require("express");
const path = require("path");
const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Endpoint to handle addition
app.post("/calculate", (req, res) => {
  const { num1, num2 } = req.body;

  // Validate input values
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 1 || num1 > 100 ||
    num2 < 1 || num2 > 100
  ) {
    return res.status(400).json({ message: "Input angka harus di antara 1-100. Masukkan ulang." });
  }

  // Perform the addition
  const result = num1 + num2;
  res.json({ result });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
