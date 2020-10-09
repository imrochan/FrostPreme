const button = document.querySelector("button");

button.addEventListener("click", () => {
	chrome.runtime.sendMessage({ message: "login" }, function (response) {
		// Replace logout.html with the view you want when the user IS in the guild
		if (response === "success") window.location.replace("./app.html");
		// Replace denied.html with the view you want when the user ISN'T in the guild
		if (response === "denied") window.location.replace("./denied.html");
	});
});
