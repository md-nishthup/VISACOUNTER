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

// Chart variables
let monthlyChart = null;
let countryChart = null;

// Country data organized by month (complete data from your text file)
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
let countrySearch;
let countryTotal;
let monthlyTableBody;
let monthlyTotal;
let monthlyPercentage;
let adminBtn;
let adminModal;
let adminLoginForm;
let adminDashboard;
let adminPasswordInput;
let logoutBtn;
let newTableBtn;
let newTableModal;
let newTableForm;
let newTableMonth;
let newCountryTableBody;
let addRowBtn;

// Admin state
let isAdminLoggedIn = false;
const ADMIN_PASSWORD = 'admin123';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    populateMonthSelector();
    updateDisplay();
    initializeAdmin();
    initializeCharts();
});

function initializeElements() {
    monthSelector = document.getElementById('monthSelect'); // Fixed to match HTML
    countryTableBody = document.getElementById('countryTableBody');
    totalVisasElement = document.getElementById('totalVisas');
    progressBar = document.getElementById('progressBar');
    progressText = document.getElementById('progressText');
    countrySearch = document.getElementById('countrySearch');
    countryTotal = document.getElementById('countryTotal');
    monthlyTableBody = document.getElementById('monthlyTableBody');
    monthlyTotal = document.getElementById('monthlyTotal');
    monthlyPercentage = document.getElementById('monthlyPercentage');
    
    if (monthSelector) {
        monthSelector.addEventListener('change', function() {
            selectedMonth = this.value;
            updateDisplay();
        });
    }
    
    if (countrySearch) {
        countrySearch.addEventListener('input', function() {
            filterCountries();
        });
    }
}

function initializeAdmin() {
    adminBtn = document.getElementById('adminBtn');
    adminModal = document.getElementById('adminModal');
    adminLoginForm = document.getElementById('adminLoginForm');
    adminDashboard = document.getElementById('adminDashboard');
    adminPasswordInput = document.getElementById('adminPassword');
    logoutBtn = document.getElementById('logoutBtn');
    newTableBtn = document.getElementById('newTableBtn');
    newTableModal = document.getElementById('newTableModal');
    newTableForm = document.getElementById('newTableForm');
    newTableMonth = document.getElementById('newTableMonth');
    newCountryTableBody = document.getElementById('newCountryTableBody');
    addRowBtn = document.getElementById('addRowBtn');

    // Event listeners
    if (adminBtn) {
        adminBtn.addEventListener('click', openAdminModal);
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleAdminLogout);
    }

    if (newTableBtn) {
        newTableBtn.addEventListener('click', openNewTableModal);
    }

    if (newTableForm) {
        newTableForm.addEventListener('submit', handleNewTableSubmit);
    }

    if (addRowBtn) {
        addRowBtn.addEventListener('click', addTableRow);
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === adminModal) {
            closeAdminModal();
        }
        if (event.target === newTableModal) {
            closeNewTableModal();
        }
    });

    // Check for saved admin session
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        isAdminLoggedIn = true;
        showAdminDashboard();
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
    updateMonthlyTable();
    updateCountryTable();
    updateTotalVisas();
    updateProgressBar();
    
    // Update charts
    setTimeout(() => {
        createCountryChart(); // Refresh country chart for new month
    }, 100);
}

function updateMonthlyTable() {
    if (!monthlyTableBody) return;
    
    monthlyTableBody.innerHTML = '';
    let totalIssued = 0;
    
    monthlyData.forEach(data => {
        const row = document.createElement('tr');
        const percentage = ((data.visas / ANNUAL_VISA_LIMIT) * 100).toFixed(1);
        
        row.innerHTML = `
            <td>${data.month}</td>
            <td>${data.visas.toLocaleString()}</td>
            <td>${percentage}%</td>
        `;
        monthlyTableBody.appendChild(row);
        totalIssued += data.visas;
    });
    
    // Update totals
    if (monthlyTotal) {
        monthlyTotal.textContent = totalIssued.toLocaleString();
    }
    if (monthlyPercentage) {
        const totalPercentage = ((totalIssued / ANNUAL_VISA_LIMIT) * 100).toFixed(1);
        monthlyPercentage.textContent = totalPercentage + '%';
    }
}

function updateCountryTable() {
    if (!countryTableBody) return;
    
    const currentData = countryDataByMonth[selectedMonth] || [];
    countryTableBody.innerHTML = '';
    
    let totalVisas = 0;
    
    currentData.forEach((item, index) => {
        const row = document.createElement('tr');
        const percentage = ((item.visas / currentData.reduce((sum, d) => sum + d.visas, 0)) * 100).toFixed(1);
        
        row.innerHTML = `
            <td>${item.country}</td>
            <td>${item.visas.toLocaleString()}</td>
            <td>${percentage}%</td>
        `;
        countryTableBody.appendChild(row);
        totalVisas += item.visas;
    });
    
    // Update country total
    if (countryTotal) {
        countryTotal.textContent = totalVisas.toLocaleString();
    }
}

function filterCountries() {
    if (!countrySearch || !countryTableBody) return;
    
    const searchTerm = countrySearch.value.toLowerCase().trim();
    const rows = countryTableBody.querySelectorAll('tr');
    
    // Show/hide quota box based on search
    const quotaInfo = document.getElementById('quota-info');
    
    if (searchTerm.length > 0) {
        // Check if search matches any country
        let matchedCountry = null;
        const allCountryData = [];
        
        // Collect all country data across all months
        Object.values(countryDataByMonth).forEach(monthData => {
            monthData.forEach(item => {
                const existingCountry = allCountryData.find(c => c.country.toLowerCase() === item.country.toLowerCase());
                if (existingCountry) {
                    existingCountry.totalVisas += item.visas;
                } else {
                    allCountryData.push({ country: item.country, totalVisas: item.visas });
                }
            });
        });
        
        // Find exact match
        matchedCountry = allCountryData.find(c => c.country.toLowerCase().includes(searchTerm));
        
        if (matchedCountry && quotaInfo) {
            showQuotaBox(matchedCountry);
            createCountryChart(searchTerm); // Update chart for searched country
        } else if (quotaInfo) {
            quotaInfo.innerHTML = `
                <div class="quota-default-message">
                    <i class="fas fa-info-circle"></i>
                    <h3>No data found for "${searchTerm}"</h3>
                    <p>Please check the country name spelling or try searching for another country.</p>
                </div>
            `;
            createCountryChart(); // Reset to default chart
        }
    } else if (quotaInfo) {
        quotaInfo.innerHTML = `
            <div class="quota-default-message">
                <i class="fas fa-search"></i>
                <p>Search country to see available quota</p>
            </div>
        `;
        createCountryChart(); // Reset to default chart
    }
    
    // Filter table rows
    rows.forEach(row => {
        const countryName = row.cells[0].textContent.toLowerCase();
        if (countryName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function showQuotaBox(countryData) {
    const quotaInfo = document.getElementById('quota-info');
    const annualQuotaLimit = Math.floor(65000 * 0.07); // 7% of 65,000 = 4,550
    const quotaIssuedThisYear = countryData.totalVisas;
    const remainingQuota = annualQuotaLimit - quotaIssuedThisYear;
    const percentUsed = ((quotaIssuedThisYear / annualQuotaLimit) * 100).toFixed(1);
    
    // Status and color logic
    let statusClass = 'green';
    let statusMessage = '✅ Good availability ';
    
    if (remainingQuota < 0) {
        // Exceeded quota
        const exceeded = Math.abs(remainingQuota);
        statusClass = 'red';
        statusMessage = `❌ Quota exceeded by ${exceeded.toLocaleString()} visas - Very low chance`;
    } else if (remainingQuota <= 100) {
        // Very limited
        statusClass = 'red';
        statusMessage = '🚨 Critical - Very few visas remaining';
    } else if (remainingQuota < 1000) {
        // Limited availability
        statusClass = 'yellow';
        statusMessage = '⚠️ Caution - Limited availability';
    }
    
    quotaInfo.innerHTML = `
        <div class="quota-boxes">
            <div class="stat-box quota-stat-box">
                <div class="stat-number">${quotaIssuedThisYear.toLocaleString()}</div>
                <div class="stat-label">Quota Issued This Year</div>
            </div>
            <div class="stat-box quota-stat-box">
                <div class="stat-number">${annualQuotaLimit.toLocaleString()}</div>
                <div class="stat-label">Annual Quota Limit (7%)</div>
            </div>
            <div class="stat-box quota-stat-box ${statusClass}">
                <div class="stat-number">${remainingQuota >= 0 ? remainingQuota.toLocaleString() : '0'}</div>
                <div class="stat-label">Remaining Quota</div>
            </div>
        </div>
        <div class="quota-status-message ${statusClass}">
            <strong>${countryData.country} F4 Visa Quota Status:</strong> ${statusMessage}
            <br><small>Used: ${percentUsed}% of annual country quota</small>
            ${remainingQuota < 0 ? `<br><small>⚠️ Exceeded by: ${Math.abs(remainingQuota).toLocaleString()} visas</small>` : ''}
        </div>
    `;
}

function updateTotalVisas() {
    // Calculate total from ALL months, not just current month
    const totalIssued = monthlyData.reduce((sum, data) => sum + data.visas, 0);
    
    if (totalVisasElement) {
        totalVisasElement.textContent = totalIssued.toLocaleString();
    }
    
    // Update remaining visas
    const remainingElement = document.getElementById('remainingVisas');
    if (remainingElement) {
        const remaining = ANNUAL_VISA_LIMIT - totalIssued;
        remainingElement.textContent = remaining.toLocaleString();
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

// Admin Functions
function openAdminModal() {
    if (adminModal) {
        adminModal.style.display = 'block';
        if (isAdminLoggedIn) {
            showAdminDashboard();
        } else {
            showAdminLogin();
        }
    }
}

function closeAdminModal() {
    if (adminModal) {
        adminModal.style.display = 'none';
    }
}

function showAdminLogin() {
    if (adminLoginForm && adminDashboard) {
        adminLoginForm.style.display = 'block';
        adminDashboard.style.display = 'none';
    }
}

function showAdminDashboard() {
    if (adminLoginForm && adminDashboard) {
        adminLoginForm.style.display = 'none';
        adminDashboard.style.display = 'block';
    }
}

function handleAdminLogin(event) {
    event.preventDefault();
    
    if (adminPasswordInput && adminPasswordInput.value === ADMIN_PASSWORD) {
        isAdminLoggedIn = true;
        localStorage.setItem('adminLoggedIn', 'true');
        showAdminDashboard();
        showNotification('Admin login successful!', 'success');
        if (adminPasswordInput) {
            adminPasswordInput.value = '';
        }
    } else {
        showNotification('Invalid password!', 'error');
    }
}

function handleAdminLogout() {
    isAdminLoggedIn = false;
    localStorage.removeItem('adminLoggedIn');
    showAdminLogin();
    closeAdminModal();
    showNotification('Logged out successfully!', 'success');
}

function openNewTableModal() {
    if (newTableModal) {
        newTableModal.style.display = 'block';
        initializeNewTable();
    }
}

function closeNewTableModal() {
    if (newTableModal) {
        newTableModal.style.display = 'none';
    }
}

function initializeNewTable() {
    if (newTableMonth) {
        newTableMonth.value = '';
    }
    if (newCountryTableBody) {
        newCountryTableBody.innerHTML = '';
        addTableRow(); // Add one empty row to start
    }
}

function addTableRow() {
    if (!newCountryTableBody) return;
    
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="text" placeholder="Country name" class="country-input" required></td>
        <td><input type="number" placeholder="Visa count" class="visa-input" min="0" required></td>
        <td><button type="button" class="delete-row-btn" onclick="deleteRow(this)">Delete</button></td>
    `;
    newCountryTableBody.appendChild(row);
}

function deleteRow(button) {
    const row = button.closest('tr');
    if (newCountryTableBody && newCountryTableBody.children.length > 1) {
        row.remove();
    } else {
        showNotification('At least one row is required.', 'error');
    }
}

function handleNewTableSubmit(event) {
    event.preventDefault();
    
    if (!newTableMonth || !newCountryTableBody) return;
    
    const month = newTableMonth.value.trim();
    if (!month) {
        showNotification('Please enter a month name.', 'error');
        return;
    }

    // Check if month already exists
    if (countryDataByMonth[month]) {
        if (!confirm(`Month "${month}" already exists. Do you want to replace it?`)) {
            return;
        }
    }

    // Collect data from table rows
    const rows = newCountryTableBody.querySelectorAll('tr');
    const countryData = [];
    let hasError = false;

    rows.forEach(row => {
        const countryInput = row.querySelector('.country-input');
        const visaInput = row.querySelector('.visa-input');
        
        if (countryInput && visaInput) {
            const country = countryInput.value.trim();
            const visas = parseInt(visaInput.value);

            if (country && !isNaN(visas) && visas >= 0) {
                countryData.push({ country, visas });
            } else if (country || visaInput.value) {
                hasError = true;
                row.style.backgroundColor = '#fed7d7';
                setTimeout(() => {
                    row.style.backgroundColor = '';
                }, 2000);
            }
        }
    });

    if (hasError) {
        showNotification('Please fill in all fields correctly.', 'error');
        return;
    }

    if (countryData.length === 0) {
        showNotification('Please add at least one country.', 'error');
        return;
    }

    // Calculate total visas for the month
    const totalVisas = countryData.reduce((sum, item) => sum + item.visas, 0);

    // Update the data structures
    countryDataByMonth[month] = countryData;
    
    // Update or add to monthly data
    const existingMonthIndex = monthlyData.findIndex(data => data.month === month);
    if (existingMonthIndex !== -1) {
        monthlyData[existingMonthIndex].visas = totalVisas;
    } else {
        monthlyData.push({ month, visas: totalVisas });
    }

    // Update the UI
    populateMonthSelector();
    selectedMonth = month;
    if (monthSelector) {
        monthSelector.value = month;
    }
    updateDisplay();

    // Close modal and show success
    closeNewTableModal();
    showNotification(`Month "${month}" added/updated successfully!`, 'success');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#e53e3e' : '#38a169'};
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 10000;
        font-family: Inter, sans-serif;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Chart Functions
function initializeCharts() {
    setTimeout(() => {
        createMonthlyChart();
        createCountryChart();
    }, 100);
}

function createMonthlyChart() {
    const ctx = document.getElementById('monthlyChart');
    if (!ctx) return;
    
    // Destroy existing chart if it exists
    if (monthlyChart) {
        monthlyChart.destroy();
    }
    
    const months = monthlyData.map(item => item.month);
    const visas = monthlyData.map(item => item.visas);
    
    monthlyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Visas Issued',
                data: visas,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Visas'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }
                }
            }
        }
    });
}

function createCountryChart(searchTerm = '') {
    const ctx = document.getElementById('countryChart');
    if (!ctx) return;
    
    // Destroy existing chart if it exists
    if (countryChart) {
        countryChart.destroy();
    }
    
    if (searchTerm) {
        // Show data for searched country across all months
        const allCountryData = [];
        Object.entries(countryDataByMonth).forEach(([month, monthData]) => {
            const countryData = monthData.find(item => 
                item.country.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (countryData) {
                allCountryData.push({
                    month: month,
                    visas: countryData.visas
                });
            }
        });
        
        if (allCountryData.length > 0) {
            const months = allCountryData.map(item => item.month);
            const visas = allCountryData.map(item => item.visas);
            
            countryChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: months,
                    datasets: [{
                        label: `${searchTerm} Monthly Visas`,
                        data: visas,
                        backgroundColor: 'rgba(102, 126, 234, 0.8)',
                        borderColor: '#667eea',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Number of Visas'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Month'
                            }
                        }
                    }
                }
            });
        }
    } else {
        // Show top countries for current selected month
        const selectedMonth = monthSelector?.value || 'October 2024';
        const currentData = countryDataByMonth[selectedMonth] || [];
        
        // Get top 8 countries
        const topCountries = currentData
            .sort((a, b) => b.visas - a.visas)
            .slice(0, 8);
        
        const countries = topCountries.map(item => item.country);
        const visas = topCountries.map(item => item.visas);
        const colors = [
            '#667eea', '#f093fb', '#f5576c', '#4facfe', '#43e97b',
            '#fa709a', '#feca57', '#48dbfb'
        ];
        
        countryChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: countries,
                datasets: [{
                    data: visas,
                    backgroundColor: colors,
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }
            }
        });
    }
}
