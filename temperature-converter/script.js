function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');

    // Validate input
    const temperature = parseFloat(tempInput);
    if (isNaN(temperature)) {
        resultDiv.innerHTML = 'Please enter a valid number.';
        return;
    }

    let convertedTemp;
    let resultUnit;

    // Conversion logic : this section converts the given number to degree Celcius, Fahrenheit or Kelvin. 
    //If the entererd input is not digit then it gives warning.
    switch (unitSelect) {
        case 'Celsius':
            convertedTemp = {
                Fahrenheit: (temperature * 9/5) + 32,
                Kelvin: temperature + 273.15
            };
            resultUnit = 'Celsius';
            break;
        case 'Fahrenheit':
            convertedTemp = {
                Celsius: (temperature - 32) * 5/9,
                Kelvin: (temperature - 32) * 5/9 + 273.15
            };
            resultUnit = 'Fahrenheit';
            break;
        case 'Kelvin':
            convertedTemp = {
                Celsius: temperature - 273.15,
                Fahrenheit: (temperature - 273.15) * 9/5 + 32
            };
            resultUnit = 'Kelvin';
            break;
        default:
            resultDiv.innerHTML = 'Please select a unit.';
            return;
    }

    // Display result
    let resultText = `Original: ${temperature} ${resultUnit}<br>`;
    for (const [unit, value] of Object.entries(convertedTemp)) {
        resultText += `${unit}: ${value.toFixed(2)}<br>`;
    }

    resultDiv.innerHTML = resultText.trim();
}
