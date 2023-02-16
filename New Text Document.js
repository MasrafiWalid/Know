// Chatbot messages
let messages = [
	"Hi there! How can I help you?",
	"What can I do for you today?",
	"How can I assist you?",
	"Is there anything I can help you with?",
	"Please let me know how I can help you."
];

// Get the chatbot dialogue container
let dialogueContainer = document.getElementById("chatbot-dialogue");

// Function to add chatbot message to dialogue container
function addChatbotMessage(message) {
	let chatbotMessage = document.createElement("p");
	chatbotMessage.innerHTML = message;
	chatbotMessage.classList.add("chatbot-message");
	dialogueContainer.appendChild(chatbotMessage);
}

// Function to add user message to dialogue container
function addUserMessage(message) {
	let userMessage = document.createElement("p");
	userMessage.innerHTML = message;
	userMessage.classList.add("user-message");
	dialogueContainer.appendChild(userMessage);
}

// Function to handle user input
function sendUserInput() {
	let userInput = document.getElementById("user-input").value;

	if (userInput) {
		addUserMessage(userInput);
		setTimeout(function() {
			let randomMessage = messages[Math.floor(Math.random() * messages.length)];
			addChatbotMessage(randomMessage);
		}, 1000);
	}

	document.getElementById("user-input").value = "";
}
