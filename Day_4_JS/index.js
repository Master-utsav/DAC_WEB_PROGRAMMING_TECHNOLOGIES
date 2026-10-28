
// Q1. Calculator
function calculate(operator) {
    const num1 = parseFloat(document.getElementById('calcNum1').value);
    const num2 = parseFloat(document.getElementById('calcNum2').value);
    const resultDiv = document.getElementById('calcResult');

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Result: Please enter valid numbers!";
        return;
    }

    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            result = num2 !== 0 ? (num1 / num2) : "Cannot divide by zero";
            break;
        case '%': 
            result = num2 !== 0 ? (num1 % num2) : "Cannot modulus by zero";
            break;
        default: result = "Invalid Operation";
    }

    resultDiv.textContent = `Result: ${result}`;
}

// Q2. Friends List using DOM
const input = document.getElementById('friendNameInput');
function addFriend() {
    const name = input.value.trim();
    
    if (name === "") {
        alert("Please enter a friend's name.");
        return;
    }

    const ul = document.getElementById('friendsList');
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);

    input.value = "";
}
input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        addFriend();
    }
})


// Q3 Take 3 Movies Details & Show in Table
const secAMovies = [];

function addSecAMovie() {
    const nameInput = document.getElementById('secAMovieName');
    const priceInput = document.getElementById('secAMoviePrice');
    const seatInput = document.getElementById('secAMovieSeat');

    const name = nameInput.value.trim();
    const price = priceInput.value.trim();
    const seat = seatInput.value.trim();
   
    if (!(/^\d+(\.\d{1,2})?$/.test(price))) {
        alert("Price must be a valid number (e.g., 15 or 15.99)");
        return;
    }
    if (!name || !price || !seat) {
        alert("Please fill all movie fields.");
        return;
    }

    secAMovies.push({ name, price, seat });

    const tbody = document.querySelector('#secAMovieTable tbody');
    tbody.innerHTML = secAMovies.map(m => `
        <tr>
            <td>${m.name}</td>
            <td>${m.price}</td>
            <td>${m.seat}</td>
        </tr>
    `).join('');

    // Clear Inputs
    nameInput.value = "";
    priceInput.value = "";
    seatInput.value = "";

    if (secAMovies.length >= 3) {
        alert(`Recorded ${secAMovies.length} movies!`);
    }
}

// Q1 Movie Validation Form
function handleMovieValSubmit(event) {
    event.preventDefault();

    const movieName = document.getElementById('valMovieName').value.trim();
    const actor = document.getElementById('valActor').value.trim();
    const release = document.getElementById('valRelease').value;
    const showTime = document.getElementById('valShowTime').value;

    // Validation Movie Name must be at least 5 characters
    if (movieName.length < 5) {
        alert("Validation Error: Movie Name must be at least 5 characters long.");
        return;
    }

    // Validation Actor name must be at least 3 characters
    if (actor.length < 3) {
        alert("Validation Error: Actor name must be at least 3 characters long.");
        return;
    }

    // Checkbox values (Movie Type)
    const typeNodes = document.querySelectorAll('input[name="movieType"]:checked');
    const types = Array.from(typeNodes).map(cb => cb.value).join(', ');

    if (types.length === 0) {
        alert("Validation Error: Please select at least one Movie Type (2D, 3D, IMAX).");
        return;
    }

    const langNode = document.querySelector('input[name="language"]:checked');
    const language = langNode ? langNode.value : '';

    const tbody = document.querySelector('#validatedMovieTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${movieName}</td>
        <td>${actor}</td>
        <td>${release}</td>
        <td>${types}</td>
        <td>${language}</td>
        <td>${showTime}</td>
    `;
    tbody.appendChild(row);

    document.getElementById('movieValForm').reset();
}


// Q2 Pizza Shop Form Validation
function handleSauceChange() {
    const sauceSelect = document.getElementById('pizzaSauce');
    const supremeTopping = document.getElementById('toppingSupreme');

    // Validation If Tomato Pizza sauce is selected then the user cannot select Supreme Pizza toppings
    if (sauceSelect.value === "Tomato") {
        if (supremeTopping.checked) {
            supremeTopping.checked = false;
        }
        supremeTopping.disabled = true;
    } else {
        supremeTopping.disabled = false;
    }
}

function handlePizzaSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('pizzaName').value.trim();
    const sauce = document.getElementById('pizzaSauce').value;
    const instructions = document.getElementById('deliveryInstructions').value.trim();

    // Validation Name must be at least 5 characters
    if (name.length < 5) {
        alert("Validation Error: Name must be at least 5 characters long.");
        return;
    }

    // Validation Delivery Instruction must have at least 5 words
    const words = instructions.length > 0 ? instructions.split(/\s+/).filter(w => w.length > 0) : [];
    if (words.length < 5) {
        alert("Validation Error: Delivery Instructions must contain at least 5 words.");
        return;
    }

    // Topping selection
    const toppingNode = document.querySelector('input[name="pizzaTopping"]:checked');
    const topping = toppingNode ? toppingNode.value : 'None Selected';

    // Extras
    const extrasNodes = document.querySelectorAll('input[name="pizzaExtras"]:checked');
    const extras = Array.from(extrasNodes).map(e => e.value).join(', ') || 'None';

    // Output to table
    const tbody = document.querySelector('#pizzaOrdersTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${topping}</td>
        <td>${sauce}</td>
        <td>${extras}</td>
        <td>${instructions}</td>
    `;
    tbody.appendChild(row);

    document.getElementById('pizzaForm').reset();
    handleSauceChange(); 
}


// Q3  Country, State, City Dynamic Cascading Select
const locationData = {
    "India": {
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
        "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru"],
        "Delhi": ["New Delhi", "North Delhi", "South Delhi"]
    },
    "USA": {
        "California": ["Los Angeles", "San Francisco", "San Diego"],
        "Texas": ["Houston", "Austin", "Dallas"],
        "New York": ["New York City", "Buffalo", "Albany"]
    },
    "Australia": {
        "New South Wales": ["Sydney", "Newcastle"],
        "Victoria": ["Melbourne", "Geelong"]
    }
};

function initLocationDropdowns() {
    const countrySelect = document.getElementById('countrySelect');
    for (let country in locationData) {
        let opt = document.createElement('option');
        opt.value = country;
        opt.textContent = country;
        countrySelect.appendChild(opt);
    }
}

function onCountryChange() {
    const countrySelect = document.getElementById('countrySelect');
    const stateSelect = document.getElementById('stateSelect');
    const citySelect = document.getElementById('citySelect');

    const selectedCountry = countrySelect.value;
    
    // Reset state & city
    stateSelect.innerHTML = '<option value="">-- Select State --</option>';
    citySelect.innerHTML = '<option value="">-- Select City --</option>';
    citySelect.disabled = true;

    if (selectedCountry && locationData[selectedCountry]) {
        stateSelect.disabled = false;
        for (let state in locationData[selectedCountry]) {
            let opt = document.createElement('option');
            opt.value = state;
            opt.textContent = state;
            stateSelect.appendChild(opt);
        }
    } else {
        stateSelect.disabled = true;
    }
}

function onStateChange() {
    const countrySelect = document.getElementById('countrySelect');
    const stateSelect = document.getElementById('stateSelect');
    const citySelect = document.getElementById('citySelect');

    const selectedCountry = countrySelect.value;
    const selectedState = stateSelect.value;

    citySelect.innerHTML = '<option value="">-- Select City --</option>';

    if (selectedCountry && selectedState && locationData[selectedCountry][selectedState]) {
        citySelect.disabled = false;
        locationData[selectedCountry][selectedState].forEach(city => {
            let opt = document.createElement('option');
            opt.value = city;
            opt.textContent = city;
            citySelect.appendChild(opt);
        });
    } else {
        citySelect.disabled = true;
    }
}


// Q4 Employee Objects & Global Tax Function
function globalTaxFunction() {
    if (this && this.salary !== undefined) {
        const taxAmount = this.salary * 0.15; 
        return `${this.name} (ID: ${this.id}) with salary $${this.salary} pays tax: $${taxAmount.toFixed(2)}`;
    } else {
        return "Global Call: 'this' does not point to an employee object (salary is undefined). Default Tax: 0";
    }
}

function runEmployeeTaxTest() {
    // 1. Create four employee objects
    const emp1 = { id: 101, name: "Alice", salary: 50000 };
    const emp2 = { id: 102, name: "Bob", salary: 60000 };
    const emp3 = { id: 103, name: "Charlie", salary: 75000 };
    const emp4 = { id: 104, name: "Diana", salary: 90000 };

    // 2. Assign global tax function to each employee's getTax property
    emp1.getTax = globalTaxFunction;
    emp2.getTax = globalTaxFunction;
    emp3.getTax = globalTaxFunction;
    emp4.getTax = globalTaxFunction;

    let outputLog = "";

    // 3. Call tax function globally
    console.log("--- Global Call ---");
    const globalResult = globalTaxFunction();
    console.log(globalResult);
    outputLog += "1. Global Call Output:\n" + globalResult + "\n\n";

    // 4. Call tax function for each employee object
    console.log("--- Method Calls on Employee Objects ---");
    outputLog += "2. Method Calls on Employee Objects:\n";
    
    [emp1, emp2, emp3, emp4].forEach(emp => {
        const res = emp.getTax();
        console.log(res);
        outputLog += res + "\n";
    });

    const outputDiv = document.getElementById('taxTestOutput');
    if (outputDiv) {
        outputDiv.textContent = outputLog;
    }
}

// Initializations on script load
window.onload = function() {
    handleSauceChange();
    initLocationDropdowns();
    runEmployeeTaxTest();
};