// Event listener for form submission
document.getElementById('predictForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const brand = document.getElementById('brand').value;
    const screenSize = parseInt(document.getElementById('screenSize').value);
    const processor = document.getElementById('processor').value;
    const hardDrive = parseInt(document.getElementById('hardDrive').value);
    const cpu = document.getElementById('cpu').value;
    const touchScreen = document.getElementById('touchScreen').value;

    // Initialize base price
    let basePrice = 300; // Base price for a laptop in USD

    // Adjust price based on screen size
    basePrice += calculateScreenSizePrice(screenSize);

    // Adjust price based on hard drive size
    basePrice += calculateHardDrivePrice(hardDrive);

    // Adjust price based on processor type
    basePrice += calculateProcessorPrice(processor);

    // Adjust price based on selected CPU type
    basePrice += calculateCpuPrice(cpu);

    // Adjust price based on touch screen option
    if (touchScreen === "Yes") {
        basePrice += 100; // Additional cost for touch screen
    }

    // Convert price to rupees
    const conversionRate = 82; // Conversion rate from USD to INR
    const priceInRupees = (basePrice * conversionRate).toFixed(2); // Convert and format to two decimal places

    // Display the result
    displayResult(priceInRupees);
});

// Function to calculate price based on screen size
function calculateScreenSizePrice(size) {
    switch (size) {
        case 17:
            return 100;
        case 15:
            return 50;
        default:
            return 0; // For 13" or if no size is selected
    }
}

// Function to calculate price based on hard drive size
function calculateHardDrivePrice(size) {
    if (size >= 512) {
        return 150;
    } else if (size >= 256) {
        return 75;
    }
    return 0; // For smaller sizes or if no size is selected
}

// Function to calculate price based on processor
function calculateProcessorPrice(processor) {
    if (processor.toLowerCase().includes('i7')) {
        return 200;
    } else if (processor.toLowerCase().includes('i5')) {
        return 100;
    }
    return 0; // No additional cost for other processors
}

// Function to calculate price based on selected CPU type
function calculateCpuPrice(cpu) {
    switch (cpu) {
        case "Intel i7":
            return 200;
        case "Intel i5":
            return 100;
        case "AMD Ryzen 5":
            return 150;
        case "AMD Ryzen 7":
            return 200;
        default:
            return 0; // For other CPU types or if none is selected
    }
}

// Function to display the result
function displayResult(price) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Predicted Price: ₹${price}`; // Display in rupees
    resultDiv.classList.remove('hidden');
}
