// This function is triggered when a floor button is clicked
function selectFloor(floor) {
  // Store the selected floor globally
  window.selectedFloor = floor;
  
  // Prepare the HTML form based on the selected floor
  let formHtml = '';

  // Set up form for 1st Floor
  if (floor === '1st') {
      formHtml = `
          <div>
              <p>Total amount of electricity bill:</p>
              <input type="number" id="totalBill" step="0.01" required>
          </div>
          <div>
              <p>K-101's previous month unit:</p>
              <input type="number" id="k101Prev" step="0.01" required>
          </div>
          <div>
              <p>K-101's present month unit:</p>
              <input type="number" id="k101Pres" step="0.01" required>
          </div>
          <div>
              <p>K-102's previous month unit:</p>
              <input type="number" id="k102Prev" step="0.01" required>
          </div>
          <div>
              <p>K-102's present month unit:</p>
              <input type="number" id="k102Pres" step="0.01" required>
          </div>
          <button onclick="calculateBill()">Calculate</button>
      `;
  }

  // Set up form for 3rd Floor
  else if (floor === '3rd') {
      formHtml = `
          <div>
              <p>Total amount of electricity bill:</p>
              <input type="number" id="totalBill" step="0.01" required>
          </div>
          <div>
              <p>K-301's previous month unit:</p>
              <input type="number" id="k301Prev" step="0.01" required>
          </div>
          <div>
              <p>K-301's present month unit:</p>
              <input type="number" id="k301Pres" step="0.01" required>
          </div>
          <div>
              <p>K-302's previous month unit:</p>
              <input type="number" id="k302Prev" step="0.01" required>
          </div>
          <div>
              <p>K-302's present month unit:</p>
              <input type="number" id="k302Pres" step="0.01" required>
          </div>
          <div>
              <p>K-401's previous month unit:</p>
              <input type="number" id="k401Prev" step="0.01" required>
          </div>
          <div>
              <p>K-401's present month unit:</p>
              <input type="number" id="k401Pres" step="0.01" required>
          </div>
          <div>
              <p>K-402's previous month unit:</p>
              <input type="number" id="k402Prev" step="0.01" required>
          </div>
          <div>
              <p>K-402's present month unit:</p>
              <input type="number" id="k402Pres" step="0.01" required>
          </div>
          <button onclick="calculateBill()">Calculate</button>
      `;
  }

  // Inject the form HTML into the form container
  document.getElementById('form-container').innerHTML = formHtml;
}

// This function calculates the bill based on the inputs
function calculateBill() {
  const totalBill = parseFloat(document.getElementById('totalBill').value);

  let k101Used, k102Used, k101Percentage, k102Percentage;
  let k301Used, k302Used, k401Used, k402Used;
  let k301Percentage, k302Percentage, k401Percentage, k402Percentage;

  let k101Bill, k102Bill;
  let k301Bill, k302Bill, k401Bill, k402Bill;
  let sum, resultHtml = '';

  if (window.selectedFloor === '1st') {
      const k101Prev = parseFloat(document.getElementById('k101Prev').value);
      const k101Pres = parseFloat(document.getElementById('k101Pres').value);
      const k102Prev = parseFloat(document.getElementById('k102Prev').value);
      const k102Pres = parseFloat(document.getElementById('k102Pres').value);

      k101Used = k101Pres - k101Prev;
      k102Used = k102Pres - k102Prev;

      k101Percentage = k101Used / (k101Used + k102Used);
      k102Percentage = k102Used / (k101Used + k102Used);

      k101Bill = Math.round(k101Percentage * totalBill);
      k102Bill = Math.round(totalBill - k101Bill);

      resultHtml = `
          <p>K-101's Electricity Bill: ${k101Bill} Tk</p>
          <p>K-102's Electricity Bill: ${k102Bill} Tk</p>
      `;
  }

  else if (window.selectedFloor === '3rd') {
      const k301Prev = parseFloat(document.getElementById('k301Prev').value);
      const k301Pres = parseFloat(document.getElementById('k301Pres').value);
      const k302Prev = parseFloat(document.getElementById('k302Prev').value);
      const k302Pres = parseFloat(document.getElementById('k302Pres').value);
      const k401Prev = parseFloat(document.getElementById('k401Prev').value);
      const k401Pres = parseFloat(document.getElementById('k401Pres').value);
      const k402Prev = parseFloat(document.getElementById('k402Prev').value);
      const k402Pres = parseFloat(document.getElementById('k402Pres').value);

      k301Used = k301Pres - k301Prev;
      k302Used = k302Pres - k302Prev;
      k401Used = k401Pres - k401Prev;
      k402Used = k402Pres - k402Prev;

      const totalUnitsUsed = k301Used + k302Used + k401Used + k402Used;

      k301Percentage = k301Used / totalUnitsUsed;
      k302Percentage = k302Used / totalUnitsUsed;
      k401Percentage = k401Used / totalUnitsUsed;
      k402Percentage = k402Used / totalUnitsUsed;

      k401Bill = Math.round(k401Percentage * totalBill);
      k402Bill = Math.round(k402Percentage * totalBill);
      k302Bill = Math.round(k302Percentage * totalBill);

      sum = k302Bill + k401Bill + k402Bill;
      k301Bill = Math.round(totalBill - sum);

      resultHtml = `
          <p>K-301's Electricity Bill: ${k301Bill} Tk</p>
          <p>K-302's Electricity Bill: ${k302Bill} Tk</p>
          <p>K-401's Electricity Bill: ${k401Bill} Tk</p>
          <p>K-402's Electricity Bill: ${k402Bill} Tk</p>
      `;
  }

  // Display the results in the form container
  document.getElementById('form-container').innerHTML = resultHtml;

  // Add a button to restart the calculation
  document.getElementById('form-container').innerHTML += '<button onclick="location.reload()">Calculate Again</button>';
}
