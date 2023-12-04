// Función para activar el modo oscuro
function activateDarkMode() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
}

// Función para activar el modo claro
function activateLightMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
}

// Función para alternar entre modos oscuro y claro
function toggleMode(mode) {
    if (mode === 'dark') {
        activateDarkMode();
    } else if (mode === 'light') {
        activateLightMode();
    }
}


// Función para imprimir la longitud del número seleccionado
let numberLength = document.querySelector("#number-length");
let rangeValue = document.querySelector("#range");

rangeValue.addEventListener("input", () => {
    numberLength.textContent = rangeValue.value;
});
// Controlar los interruptores activados y desactivados
let activateToggles = document.querySelectorAll(".activate");
let deactivateToggles = document.querySelectorAll(".desactivate");
// Iterar sobre cada interruptor activo
activateToggles.forEach((activateToggle, index) => {
    deactivateToggles[index].style.display = "none"; // Oculta el interruptor desactivado correspondiente inicialmente

    activateToggle.addEventListener("click", () => {
        activateToggle.style.display = "none";
        deactivateToggles[index].style.display = "inline-block";
    });
});

// Iterar sobre cada interruptor desactivado
deactivateToggles.forEach((deactivateToggle, index) => {
    deactivateToggle.addEventListener("click", () => {
        deactivateToggle.style.display = "none";
        activateToggles[index].style.display = "inline-block";
    });
});

// Variables de configuración de la contraseña
let capitalize = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+=-[]{};:/<>?,.";
// Generar la contraseña según las configuraciones seleccionadas
let generatorButtonActivate = document.querySelector(".button-password");

generatorButtonActivate.addEventListener("click", () => {
    let passwordCharacters = "";

    // Comprobar qué interruptores están activados
    if (document.querySelector("#oncapitalize").style.display !== "none") {
        passwordCharacters += capitalize;
    }
    if (document.querySelector("#onlowercase").style.display !== "none") {
        passwordCharacters += lowercase;
    }
    if (document.querySelector("#onnumbers").style.display !== "none") {
        passwordCharacters += numbers;
    }
    if (document.querySelector("#onsymbols").style.display !== "none") {
        passwordCharacters += symbols;
    }

    let passwordLength = Number(rangeValue.value);
    let password = "";

    // Generar la contraseña aleatoria
    for (let i = 0; i < passwordLength; i++) {
        password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }

    // Mostrar el div de la contraseña generada
    document.querySelector(".showpassword").style.display = "block";

    // Mostrar la contraseña generada
    document.querySelector("#passwordcopy").textContent = password;

    // Mostrar el icono de copia
    document.querySelector("#copyIcon").style.display = "inline-block";
});

// Función para copiar la contraseña al portapapeles
let copyIcon = document.querySelector("#copyIcon");
let copyMessage = document.querySelector("#copyMessage");

copyIcon.addEventListener("click", () => {
    let password = document.querySelector("#passwordcopy").textContent;
    navigator.clipboard.writeText(password);

    // Mostrar el mensaje de "Copiado"
    copyMessage.style.display = "inline-block";

    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => {
        copyMessage.style.display = "none";
    }, 2000);
});