document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "admin123") {
       
        localStorage.setItem("authenticated", "true");
        window.location.href = "tabla.html";
    } else {
        alert("Credenciales incorrectas, intente nuevamente.");
    }
});
