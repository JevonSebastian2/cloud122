function calculateSum() {
    // Ambil nilai input
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    
    // Periksa apakah input lebih dari 100
    if (num1 > 100 || num2 > 100) {
        document.getElementById('result').innerHTML = 'Masukkan angka yang tidak lebih dari 100. Coba lagi!';
    } else {
        // Hitung jumlah jika input valid
        const sum = num1 + num2;
        document.getElementById('result').innerHTML = 'Jumlah: ' + sum;
    }
}
