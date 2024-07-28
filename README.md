# Electricity Bill Calculator

The **Electricity Bill Calculator** is a web application designed to help users split their electricity bill based on individual meter readings. This tool is particularly useful for multi-unit buildings where separate electricity meters are present, such as in apartments or shared housing.

## Features

- **Floor Selection**: Users can select between the 1st and 3rd floors to input specific meter readings.
- **User-Friendly Interface**: The application provides a step-by-step input process, ensuring accurate data collection.
- **Dynamic Calculations**: The calculator dynamically computes the electricity usage for each meter and proportionally divides the total bill.
- **Clear Results Display**: After calculations, the application displays the bill for each meter unit, along with an option to restart the process for new calculations.

## How It Works

1. **Floor Selection**: 
   - Users choose their respective floor (1st or 3rd) to start the input process.

2. **Input Data**: 
   - The application prompts users to input the total electricity bill amount and the previous and current month's meter readings for each unit.

3. **Calculation Process**:
   - **Usage Calculation**: The app calculates the units used by each meter.
   - **Percentage Allocation**: It then determines the percentage of total usage attributed to each meter.
   - **Bill Distribution**: Finally, it calculates the individual bill amounts based on the total bill and the usage percentages.

4. **Result Display**:
   - The results are displayed clearly, showing the amount each unit needs to pay. A "Calculate Again" button allows for new calculations.

## Technologies Used

- **HTML**: Structure and layout of the web pages.
- **CSS**: Styling for a clean and user-friendly interface.
- **JavaScript**: Logic and dynamic content generation for the calculator functionality.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/electricity-bill-calculator.git
2. Navigate to the project directory:
  ```bash
   cd electricity-bill-calculator   
