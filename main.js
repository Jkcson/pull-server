// Define variables for the container element and the input field
const container = document.getElementById("prompt");
const inputField = document.getElementById("command-input");

// Define an array to store the user's commands
let commands = [];

// Add an event listener for the form submission
document.getElementById("command-form").addEventListener("submit", handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the user's command from the input field
    const command = inputField.value.trim();

    if (command === "") {
        // If the user enters an empty command, do nothing
        return;
    }

    // Add the command to the array of commands
    commands.push(command);

    if (command === "//clear") {
        // If the user types "//clear", clear the container and the commands array
        container.innerHTML = "";
        commands = [];
    } else {
        // If the user enters a regular command, add it to the container as a new line
        const commandLine = document.createElement("div");
        commandLine.textContent = "> " + command;
        container.appendChild(commandLine);

        // Clear the input field
        inputField.value = "";

        // Scroll to the bottom of the container
        container.scrollTop = container.scrollHeight;
    }
}

// Function to retrieve the most recent command
function getMostRecentCommand() {
    return commands[commands.length - 1];
}

