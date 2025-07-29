function fazerlogin(event){
    event.preventDefault();
    const usuario = document.getElementById("username").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (usuario == "root" && senha == "admin"){
        window.location.href = "dashboard.html";
    }else{ 
        alert("credenciais inválidos. tente novamente.");
    }
}

document.getElementById("loginForm").addEventListener("submit", fazerlogin);
