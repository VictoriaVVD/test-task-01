$(document).ready(function() {
    let form = $("#form");
    form.submit(submitForm);
    function submitForm(e) {
        e.preventDefault();
        let data = JSON.stringify($.extend(dataFromFields, dataFromDropdown));
        $.ajax({
            method: "GET",
            async : true,
            contentType: "application/json",
            url: "server.js",
            success: function() {
                $(".info__block").html("Введенные данные: " + data);
                alert("Данные успешно отправлены!");
                $("#sendForm").removeClass("btn-primary").addClass("btn-success");
            },
            error: function (jqXHR, exception) {
                if (jqXHR.status === 0) {
                    alert("Not connect. Verify Network.");
                } else if (jqXHR.status == 404) {
                    alert("Requested page not found (404).");
                } else if (jqXHR.status == 500) {
                    alert("Internal Server Error (500).");
                } else if (exception === "parsererror") {
                    alert("Requested JSON parse failed.");
                } else if (exception === "timeout") {
                    alert("Time out error.");
                } else if (exception === "abort") {
                    alert("Ajax request aborted.");
                } else {
                    alert("Uncaught Error. " + jqXHR.responseText);
                }
                $("#sendForm").removeClass("btn-primary").addClass("btn-warning");
            }
        });
    }
    let dataFromFields = {};
    let dataFromDropdown = {};
    let id;
    form.on("click", getDropdownData);
    function getDropdownData(e) {
        id = e.target.id;
        $(".dropdown-menu").on("click", function getValue(e) {
            $.extend(dataFromDropdown, {[id]: e.target.innerText});
        });
        return dataFromDropdown;
    }
    form.on("change", getFieldData);
    function getFieldData(e) {
        id = e.target.id;
        $.extend(dataFromFields, {[id]: e.target.value});
        return dataFromFields;
    }
})
