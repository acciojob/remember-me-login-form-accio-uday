const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

window.addEventListener("DOMContentLoaded", () => {
	const savedUser = localstorage.getItem("username");
	const savedPass = localstorage.getItem("password");

	if (savedUser && savedPass) {
		existingBtn.style.display = "inline";
	}
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
	e.preventDefault();
	const username = usernameInput.value;
	const password = passwordInput.value;

	alert(`Logged in as ${username}`);

	if (checkbox.checked) {
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		existingBtn.style.display = "inline";
	} else {
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		existingBtn.style.display = "none";
	}

	usernameInput.value = "";
	passwordInput.value = "";
	checkbox.checked = false;
});

existingBtn.addEventListener("click", () => {
	const savedUser = localStorage.getItem("username");
	if(savedUser) {
		alert(`Logged in as ${savedUser}`);
	}
});
