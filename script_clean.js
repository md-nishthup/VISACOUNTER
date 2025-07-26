// Global data storage
let monthlyData = [
    { month: 'October 2024', visas: 6151 },
    { month: 'November 2024', visas: 5002 },
    { month: 'December 2024', visas: 4629 },
    { month: 'January 2025', visas: 3365 },
    { month: 'February 2025', visas: 3320 },
    { month: 'March 2025', visas: 2735 },
    { month: 'April 2025', visas: 2593 },
    { month: 'May 2025', visas: 3320 }
];

// Country data organized by month
let countryDataByMonth = {
    'October 2024': [
        { country: 'Pakistan', visas: 958 },
        { country: 'Vietnam', visas: 876 },
        { country: 'Bangladesh', visas: 621 },
        { country: 'Dominican Republic', visas: 463 },
        { country: 'China - mainland born', visas: 399 },
        { country: 'Mexico', visas: 326 },
        { country: 'Philippines', visas: 324 },
        { country: 'Peru', visas: 202 },
        { country: 'Nigeria', visas: 201 },
        { country: 'India', visas: 158 },
        { country: 'Ecuador', visas: 118 },
        { country: 'El Salvador', visas: 108 },
        { country: 'Egypt', visas: 90 },
        { country: 'Iran', visas: 88 },
        { country: 'Yemen', visas: 80 },
        { country: 'Guatemala', visas: 73 },
        { country: 'Jordan', visas: 70 },
        { country: 'Albania', visas: 69 },
        { country: 'Ghana', visas: 68 },
        { country: 'Jamaica', visas: 67 },
        { country: 'Burma', visas: 63 },
        { country: 'Colombia', visas: 59 },
        { country: 'Morocco', visas: 38 },
        { country: 'Guyana', visas: 33 },
        { country: 'Honduras', visas: 33 },
        { country: 'Cambodia', visas: 32 },
        { country: 'Lebanon', visas: 32 },
        { country: 'Ethiopia', visas: 30 },
        { country: 'Syria', visas: 28 }
    ],
    'November 2024': [
        { country: 'Bangladesh', visas: 924 },
        { country: 'India', visas: 785 },
        { country: 'Pakistan', visas: 706 },
        { country: 'Mexico', visas: 449 },
        { country: 'Vietnam', visas: 270 },
        { country: 'Nigeria', visas: 243 },
        { country: 'Philippines', visas: 217 },
        { country: 'China - mainland born', visas: 214 },
        { country: 'Dominican Republic', visas: 135 },
        { country: 'Peru', visas: 105 },
        { country: 'Iran', visas: 89 },
        { country: 'Ecuador', visas: 82 },
        { country: 'El Salvador', visas: 78 },
        { country: 'Nepal', visas: 70 },
        { country: 'Guatemala', visas: 56 },
        { country: 'Colombia', visas: 54 },
        { country: 'Egypt', visas: 52 },
        { country: 'Jamaica', visas: 48 },
        { country: 'Lebanon', visas: 40 },
        { country: 'Jordan', visas: 34 }
    ],
    'December 2024': [
        { country: 'Bangladesh', visas: 1048 },
        { country: 'Pakistan', visas: 766 },
        { country: 'India', visas: 441 },
        { country: 'Mexico', visas: 368 },
        { country: 'Philippines', visas: 314 },
        { country: 'Nigeria', visas: 267 },
        { country: 'Dominican Republic', visas: 114 },
        { country: 'El Salvador', visas: 89 },
        { country: 'Ecuador', visas: 84 },
        { country: 'China - mainland born', visas: 83 },
        { country: 'Peru', visas: 82 },
        { country: 'Egypt', visas: 76 },
        { country: 'Iran', visas: 64 },
        { country: 'Jordan', visas: 39 },
        { country: 'Honduras', visas: 37 }
    ],
    'January 2025': [
        { country: 'Bangladesh', visas: 981 },
        { country: 'Philippines', visas: 418 },
        { country: 'Pakistan', visas: 356 },
        { country: 'Mexico', visas: 348 },
        { country: 'India', visas: 209 },
        { country: 'Nigeria', visas: 159 },
        { country: 'Peru', visas: 113 },
        { country: 'Burma', visas: 58 },
        { country: 'Iran', visas: 55 },
        { country: 'Ecuador', visas: 52 },
        { country: 'China - mainland born', visas: 50 },
        { country: 'El Salvador', visas: 46 },
        { country: 'Dominican Republic', visas: 42 },
        { country: 'Lebanon', visas: 36 },
        { country: 'Egypt', visas: 32 }
    ],
    'February 2025': [
        { country: 'Bangladesh', visas: 870 },
        { country: 'India', visas: 737 },
        { country: 'Philippines', visas: 395 },
        { country: 'Pakistan', visas: 358 },
        { country: 'Nigeria', visas: 215 },
        { country: 'Mexico', visas: 156 },
        { country: 'Dominican Republic', visas: 65 },
        { country: 'China - mainland born', visas: 63 },
        { country: 'Peru', visas: 56 },
        { country: 'Jordan', visas: 45 },
        { country: 'Iran', visas: 44 },
        { country: 'Ecuador', visas: 42 },
        { country: 'El Salvador', visas: 26 },
        { country: 'Egypt', visas: 24 },
        { country: 'Ghana', visas: 23 }
    ],
    'March 2025': [
        { country: 'Philippines', visas: 545 },
        { country: 'Bangladesh', visas: 506 },
        { country: 'India', visas: 451 },
        { country: 'Mexico', visas: 363 },
        { country: 'Pakistan', visas: 217 },
        { country: 'Nigeria', visas: 149 },
        { country: 'China - mainland born', visas: 107 },
        { country: 'Dominican Republic', visas: 96 },
        { country: 'Ecuador', visas: 42 },
        { country: 'Iran', visas: 42 },
        { country: 'Peru', visas: 40 },
        { country: 'El Salvador', visas: 35 },
        { country: 'Ghana', visas: 28 },
        { country: 'Jordan', visas: 21 },
        { country: 'Guatemala', visas: 21 }
    ],
    'April 2025': [
        { country: 'Bangladesh', visas: 564 },
        { country: 'Mexico', visas: 374 },
        { country: 'Philippines', visas: 274 },
        { country: 'Pakistan', visas: 259 },
        { country: 'India', visas: 172 },
        { country: 'China - mainland born', visas: 120 },
        { country: 'Nigeria', visas: 92 },
        { country: 'Dominican Republic', visas: 89 },
        { country: 'Peru', visas: 62 },
        { country: 'Iran', visas: 40 },
        { country: 'Ghana', visas: 37 },
        { country: 'Egypt', visas: 32 },
        { country: 'Haiti', visas: 31 },
        { country: 'El Salvador', visas: 28 },
        { country: 'Burma', visas: 26 }
    ],
    'May 2025': [
        { country: 'Mexico', visas: 955 },
        { country: 'India', visas: 714 },
        { country: 'Bangladesh', visas: 510 },
        { country: 'Philippines', visas: 435 },
        { country: 'Pakistan', visas: 149 },
        { country: 'Nigeria', visas: 125 },
        { country: 'China - mainland born', visas: 87 },
        { country: 'Dominican Republic', visas: 63 },
        { country: 'Egypt', visas: 48 },
        { country: 'Iran', visas: 29 },
        { country: 'El Salvador', visas: 25 },
        { country: 'Ethiopia', visas: 22 },
        { country: 'Peru', visas: 19 },
        { country: 'Jordan', visas: 19 },
        { country: 'Hong Kong S.A.R.', visas: 15 }
    ]
};

// Current selected month for country data
let selectedMonth = 'October 2024';

// Constants
const ANNUAL_VISA_LIMIT = 65000;

// DOM elements
let monthSelector;
let countryTableBody;
let totalVisasElement;
let progressBar;
let progressText;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    populateMonthSelector();
    updateDisplay();
});

function initializeElements() {
    monthSelector = document.getElementById('monthSelector');
    countryTableBody = document.getElementById('countryTableBody');
    totalVisasElement = document.getElementById('totalVisas');
    progressBar = document.getElementById('progressBar');
    progressText = document.getElementById('progressText');
    
    if (monthSelector) {
        monthSelector.addEventListener('change', function() {
            selectedMonth = this.value;
            updateDisplay();
        });
    }
}

function populateMonthSelector() {
    if (!monthSelector) return;
    
    monthSelector.innerHTML = '';
    monthlyData.forEach(data => {
        const option = document.createElement('option');
        option.value = data.month;
        option.textContent = data.month;
        if (data.month === selectedMonth) {
            option.selected = true;
        }
        monthSelector.appendChild(option);
    });
}

function updateDisplay() {
    updateCountryTable();
    updateTotalVisas();
    updateProgressBar();
}

function updateCountryTable() {
    if (!countryTableBody) return;
    
    const currentData = countryDataByMonth[selectedMonth] || [];
    countryTableBody.innerHTML = '';
    
    currentData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.country}</td>
            <td>${item.visas.toLocaleString()}</td>
        `;
        countryTableBody.appendChild(row);
    });
}

function updateTotalVisas() {
    const currentData = monthlyData.find(data => data.month === selectedMonth);
    const totalVisas = currentData ? currentData.visas : 0;
    
    if (totalVisasElement) {
        totalVisasElement.textContent = totalVisas.toLocaleString();
    }
}

function updateProgressBar() {
    const totalIssued = monthlyData.reduce((sum, data) => sum + data.visas, 0);
    const percentage = Math.min((totalIssued / ANNUAL_VISA_LIMIT) * 100, 100);
    
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
    
    if (progressText) {
        progressText.textContent = `${totalIssued.toLocaleString()} / ${ANNUAL_VISA_LIMIT.toLocaleString()} (${percentage.toFixed(1)}%)`;
    }
}
