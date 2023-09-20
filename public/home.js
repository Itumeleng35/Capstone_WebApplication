// document.addEventListener("alpine:init", () => {
//     Alpine.data("HomepageData", () => {
//         return {
//             title: "Decison support system",
//             version: 'api-1.0',
//             selectedFile: null,
//             isDatasetLoaded: false,
//             dataset: [],
//             marketingAvenue: '',
//             budgetAmount: '',
//             predictionResult: '',
//             isPredictionSuccess: false,
//             isTryAgainVisible: false,

            // const authData = {
            //     isLoggedIn: false,
            //     loginUsername: '',
            //     loginPassword: '',
            //     registerUsername: '',
            //     registerPassword: '',
                // login() {
                    // Implement login logic here
                    // Set authData.isLoggedIn to true on successful login
                // },
                // register() {
                    // Implement registration logic here
                    // Set authData.isLoggedIn to true on successful registration
                // },
                // logout() {
                    // Implement logout logic here
                    // Set authData.isLoggedIn to false
            //     },
            // };






            // Function to handle file upload
            // loadDataset() {
            //     const fileInput = document.getElementById('dataset-file');

            //     // Check if a file is selected
            //     if (fileInput.files.length === 0) {
            //         alert('Please select a dataset file.');
            //         return;
            //     }

            //     this.selectedFile = fileInput.files[0];

                // Simulate loading (replace with actual dataset loading logic)
//                 setTimeout(() => {
//                     // Assuming dataset loading was successful
//                     this.isDatasetLoaded = true;
//                 }, 2000); // Simulating a 2-second loading time
//             },

//             // Function to handle viewing dataset properties
//             viewProperties() {
//                 // Implement code to view dataset properties here
//                 // Example: Display a modal or alert with dataset properties
//                 const reader = new FileReader();
//                 reader.onload = function (e) {
//                     // Get the file content (e.target.result)
//                     const fileContent = e.target.result;

//                     // Now, you can parse and process the dataset
//                     // For example, if it's a CSV or Excel file, you may use a library like Papaparse or XLSX.js

//                     // Here, you can add your code to process and visualize the dataset
//                     // e.g., call a function to display data or create charts
//                     function viewProperties(fileContent) {
//                         // Parse the CSV file using Papaparse
//                         Papa.parse(fileContent, {
//                             header: true, // Assumes the first row contains column headers
//                             dynamicTyping: true, // Automatically convert numeric values to numbers
//                             complete: function (results) {
//                                 const data = results.data;

//                                 // Assuming you have a 'Marketing_Avenue' and 'Sales' column in your CSV
//                                 const marketingAvenues = data.map((row) => row.Marketing_Avenue);
//                                 const sales = data.map((row) => row.Sales);

//                                 // Create a bar chart using Plotly.js
//                                 const trace = {
//                                     x: marketingAvenues,
//                                     y: sales,
//                                     type: 'bar',
//                                 };

//                                 const layout = {
//                                     title: 'Sales by Marketing Avenue',
//                                 };

//                                 Plotly.newPlot('visualization', [trace], layout);
//                             },
//                             error: function (error) {
//                                 console.error('Error parsing CSV:', error);
//                             },
//                         });
//                     }

//                     viewProperties(fileContent);
//                 };
//             },

//             // Function to handle Data Trend Analysis
//             dataAnalysisPrediction() {
//                 // Implement code to perform Data Trend Analysis and display results here
//                 // Example: You can use charting libraries like Chart.js for visualization
//                 const selectedDataset = this.selectedDataset;
//                 // Check if a dataset is selected
//                 if (!selectedDataset) {
//                     alert('Please select a dataset.');
//                     return;
//                 }
//                 // Implement code to fetch data (replace with your data retrieval logic)
//                 // Example: You can fetch data from a server or load it from a local source
//                 // Once you have the data, call the performDataTrendAnalysis function
//                 // Pass the data and selected dataset to performDataTrendAnalysis
//                 // Replace 'data' with your actual data source
                


//                 // For demonstration purposes, let's assume a simple prediction result
//                 // this.predictionResult = Math.random() * 100000; // Replace this with actual prediction result

//                 // Set flags for success and visibility of "Try Again" button
//                 this.isPredictionSuccess = true;
//                 this.isTryAgainVisible = true;
//             },
//             DataAnalysis() {
//                 const selectedDataset = this.selectedDataset;
    
//                 // Check if a dataset is selected
//                 if (!selectedDataset) {
//                     alert('Please select a dataset.');
//                     return;
//                 }
    
//                 // Implement code to fetch data (replace with your data retrieval logic)
//                 // Example: You can fetch data from a server or load it from a local source
//                 // Once you have the data, call the performDataTrendAnalysis function
//                 // Pass the data and selected dataset to performDataTrendAnalysis
//                 // Replace 'data' with your actual data source
//                 performDataTrendAnalysis(data, selectedDataset);
//             },
//             // Function to retry loading
//             retryLoad() {
//                 // Reset the input and flags
//                 this.selectedFile = null;
//                 this.isDatasetLoaded = false;
//                 this.isTryAgainVisible = false;
//             },

//             // Function to cancel loading
//             cancelLoad() {
//                 // Reset the input and flags
//                 this.selectedFile = null;
//                 this.isDatasetLoaded = false;
//             },


//             performDataTrendAnalysis(data, selectedDataset) {
//                 // Filter data for the selected dataset
//                 const filteredData = data.filter((row) => row.Dataset === selectedDataset);

//                 // Extract relevant columns (e.g., Marketing_Avenue and Sales)
//                 const marketingAvenues = filteredData.map((row) => row.Marketing_Avenue);
//                 const sales = filteredData.map((row) => row.Sales);

//                 // Create a chart using Chart.js
//                 const ctx = document.getElementById('data-trend-chart').getContext('2d');

//                 new Chart(ctx, {
//                     type: 'bar',
//                     data: {
//                         labels: marketingAvenues,
//                         datasets: [{
//                             label: 'Sales',
//                             data: sales,
//                             backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize the color
//                             borderColor: 'rgba(75, 192, 192, 1)', // Customize the border color
//                             borderWidth: 1,
//                         }],
//                     },
//                     options: {
//                         responsive: true,
//                         scales: {
//                             x: {
//                                 beginAtZero: true,
//                             },
//                             y: {
//                                 beginAtZero: true,
//                             },
//                         },
//                     },
//                 });
//             },
//         }
//     });
// });



