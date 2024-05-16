function updateRating() {
    var rating = document.getElementById("rating").value;
    document.getElementById("currentRating").textContent = rating;
}

document.getElementById("myForm").addEventListener("submit", function (event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        event.preventDefault();
        document.getElementById("passwordError").textContent = "Passwords do not match.";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("password").focus();
    }
});