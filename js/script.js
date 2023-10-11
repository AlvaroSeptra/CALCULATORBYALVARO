function convertTemperature() {
    // mendapatkan inputan
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const scale = document.getElementById('scale').value;

    // pengecekan jika input adalah angka
    if (isNaN(temperatureInput)) {
        alert('Masukkan suhu yang valid.');
        return;
    }

    // menunjukan konversi temperatur
    let result;
    let resultExplanation;
    let formulaExplanation;

    if (scale === 'celsius') {
        result = (temperatureInput - 32) * (5/9);
        resultExplanation = `${temperatureInput} Fahrenheit sama dengan ${result.toFixed(2)} Celsius.`;
        formulaExplanation = 'Rumus: (Fahrenheit - 32) * (5/9)';
    } else {
        result = (temperatureInput * 9/5) + 32;
        resultExplanation = `${temperatureInput} Celsius sama dengan ${result.toFixed(2)} Fahrenheit.`;
        formulaExplanation = 'Rumus: (Celsius * 9/5) + 32';
    }

    //  menampilkan hasil dan formula
    document.getElementById('resultExplanation').textContent = resultExplanation;
    document.getElementById('formulaExplanation').textContent = formulaExplanation;
    document.getElementById('resultContainer').classList.remove('hidden');
}
