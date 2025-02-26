document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("#phone");
    const form = document.querySelector("#form");

    const iti = intlTelInput(input, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
        separateDialCode: true,
        initialCountry: "ru",
        autoPlaceholder: "aggressive"
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        if (iti.isValidNumber()) {
            const phoneNumber = iti.getNumber(); // Получаем номер в формате E.164
            const countryData = iti.getSelectedCountryData(); // Получаем данные о стране

            alert("Форма отправлена! (Демо)"); // Замените на реальную отправку формы
        } else {
            alert("Пожалуйста, введите корректный номер телефона.");
        }
    });

    input.addEventListener("input", function(event) {
        // Разрешаем только цифры, пробелы и специальные символы
        const validCharacters = /[\d\s\+()\-]/;
        if (!validCharacters.test(event.data)) {
            // Удаляем недопустимый символ
            input.value = input.value.slice(0, -1);
        }
    });
});