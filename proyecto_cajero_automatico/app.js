const account = {
    name: "Mary",
    password: "123",
    balance: 1000
};

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    if (account.name === name && account.password === password ) {
        loginForm.style.display = "none";
        document.getElementById("options").style.display = "block";
    } else {
        alert("a usted no lo conozco >:V, por favor intente de nuevo.");
    }
});

function deposit() {
    const amount = parseFloat(prompt("Introduce el monto a depositar:"));

    if (amount > 1000) {
        alert("no puedes depositar mas de 1000Bs.");
    } else {
        account.balance += amount;
        alert("Deposito exitoso uwu: Tu nuevo saldo es Bs" + account.balance);
    }
}

function withdraw() {
    const amount = parseFloat(prompt("Ingrese la cantidad a retirar:"));
    if (amount > account.balance) {
        alert("Fondos insuficientes");
    } else {
        account.balance -= amount;
        alert("Retiro bien hecho, Su nuevo saldo es: Bs" + account.balance);
    }
}

function checkBalance() {
    alert("tu saldo actual es: Bs" + account.balance);
}

function exit() {
    alert("Adiós bay bay, " + account.name + "!");
    location.reload();
}

