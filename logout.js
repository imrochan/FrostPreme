const button = document.querySelector("button");

// This is just the functionality for the logout button. You can get rid of it if you want
button.addEventListener("click", () => {
	chrome.runtime.sendMessage({ message: "logout" }, function (response) {
		if (response === "success") window.location.replace("./login.html");
	});
});
