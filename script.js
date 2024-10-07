document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskTable = document.getElementById('taskTable');
    const tasks = []; // Initialize the tasks array

    // Function to handle form submissions
    function handleSubmission(event) {
        event.preventDefault();
        // Corrected `id`s to match HTML
        const taskName = document.getElementById('taskname').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const taskDeadline = document.getElementById('taskDeadline').value;
        // Validate input fields
        if (!taskName || !taskDeadline) {
            alert('Task name and deadline are required!');
            return;
        }
        // Update the tasks array
        tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });
        // Call the render function
        render();
    }

    // Function to render tasks in the table
    function render() {
        // Use array methods to create a new table row of data for each item in the arr
        taskTable.innerHTML = tasks.map(task => `
            <tr>
                <td>${task.name}</td>
                <td>${task.description}</td>
                <td>${task.deadline}</td>
                <td><button onclick="markTaskComplete(this)">Complete</button></td>
                <td><button onclick="removeTask(this)">Remove</button></td>
            </tr>
        `).join('');
    }

    // Function to initialize the table
    function init() {
        taskTable.innerHTML = ''; // Clear the table
        render(); // Call the render function
    }

    // Event listener for form submission
    taskForm.addEventListener('submit', handleSubmission);
    // Call the init function to set up the initial state of the app
    init();
});
