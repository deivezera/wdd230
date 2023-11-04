const password = document.querySelector("#password");
const cfrmPassword = document.querySelector("#confirmPassword");

cfrmPassword.addEventListener("focusout", checkSame);

function checkSame() {
	if (password.value !== cfrmPassword.value) {
		cfrmPassword.style.backgroundColor = "#fff0f3";
		cfrmPassword.value = "";
	} else {
		cfrmPassword.style.backgroundColor = "#fff";
		cfrmPassword.style.color = "#000";
	}
}
