const sendBtn = document.querySelector("#sendForm");
const output = document.querySelector("#result");
const form = document.querySelector("#myForm");
function serializeForm(formNode) {
    return new FormData(formNode);
}
function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "handler.php", true);
    xhr.onload = function () {
        if (xhr.status = 200) {
            alert("Данные отправлены!");
            output.innerHTML = "<h2 class='info__block'>Отправленные данные: </h2>";
            output.append(JSON.stringify(Array.from(data)));
        } else {
            alert("Ошибка!");
        }
    };
    xhr.send(data);
}
form.addEventListener("submit", handleFormSubmit);