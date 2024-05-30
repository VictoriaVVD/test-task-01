const form = document.querySelector("#myForm");
const output = document.querySelector("#result");

function serializeForm(formNode) {
    return new FormData(formNode);
}
function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target);
    sendRequest("GET", "handler.js", data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    form.reset();
}
form.addEventListener("submit", handleFormSubmit);

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response)
                onSuccess(body)
                alert("Отправлено!");
            } else {
                reject(xhr.response)
                alert("Ошибка!");
            }
        };
        xhr.onerror = () => {
            reject(xhr.response)
            alert("Ошибка!");
        }
        xhr.send(JSON.stringify(body));
    })
}
function onSuccess(data) {
    output.innerHTML = "<h2 class='info__block'>Отправленные данные: </h2>";
    output.append(JSON.stringify(Object.fromEntries(data.entries())));
}