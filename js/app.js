// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a reow and cells for each value in the row
    data.forEach((dataRow) => {
    // Append a row to the table body
        let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });

    });
}

// Create filter button
function handleClick() {
    // Grab the datetime value from the filter
    let data = d3.select("#datetime").property("value");
    // New variable to set default filter
    let filteredData = tableData;

    // Create filter to run on selected date else provide all data
    if (date) {
        // Apply 'filter' to the data to only keep the
        // rows where 'datetime; values matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the orgiginal tableData.
    buildTable(filteredData);
};

// Attach an event to listem for the form button
d3.selectAll("filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);