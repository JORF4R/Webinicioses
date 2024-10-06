document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "admin123") {
        window.location.href = "index.html";
    } else {
        alert("Credenciales incorrectas, intente nuevamente.");
    }
});
