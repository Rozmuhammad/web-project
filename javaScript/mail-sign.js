document.addEventListener('DOMContentLoaded', function () {

    const ordinaryButt = document.querySelector(".ordinary-mail");
    const kidsButt = document.querySelector(".kids-mail");

    $(ordinaryButt).on("click", function () {
        $(kidsButt).css("backgroundColor", "white");
        $(kidsButt).css("color", "rgb(94, 94, 94)");
        $(ordinaryButt).css("cursor", "default");
        $(kidsButt).css("cursor", "pointer");
        setTimeout(function () {
            $(ordinaryButt).css("backgroundColor", "rgba(94, 94, 94, 0.4)");
            $(ordinaryButt).css("color", "white");
        }, 150);
    });
    $(kidsButt).on("click", function () {
        $(ordinaryButt).css("backgroundColor", "white");
        $(ordinaryButt).css("color", "rgb(94, 94, 94)");
        $(kidsButt).css("cursor", "default");
        $(ordinaryButt).css("cursor", "pointer");
        setTimeout(function () {
            $(kidsButt).css("backgroundColor", "rgba(94, 94, 94, 0.4)");
            $(kidsButt).css("color", "white");
        }, 150);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Генерация выпадающего списка для дней
    var dayDropdown = document.getElementById("dayDropdown");
    var daySelect = document.createElement("select");
    daySelect.name = "day";
    daySelect.className = "main-day";

    // Placeholder
    var placeholderDay = document.createElement("option");
    placeholderDay.value = "";
    placeholderDay.text = "Day";
    placeholderDay.disabled = true; // Делаем placeholder недоступным
    placeholderDay.selected = true;
    daySelect.appendChild(placeholderDay);

    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;

        daySelect.appendChild(option);
    }
    dayDropdown.appendChild(daySelect);


    daySelect.addEventListener("focus", function () {
        this.style.backgroundColor = "#23272a";
        this.style.color = "rgb(158, 158, 158)";
    });

    // Генерация выпадающего списка для месяцев
    var monthDropdown = document.getElementById("monthDropdown");
    var monthSelect = document.createElement("select");
    monthSelect.name = "month";
    monthSelect.className = "main-month";

    // Placeholder
    var placeholderMonth = document.createElement("option");
    placeholderMonth.value = "";
    placeholderMonth.text = "Month";
    placeholderMonth.disabled = true; // Делаем placeholder недоступным
    placeholderMonth.selected = true;
    monthSelect.appendChild(placeholderMonth);

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (var j = 0; j < months.length; j++) {
        var optionMonth = document.createElement("option");
        optionMonth.value = j + 1;
        optionMonth.text = months[j];
        monthSelect.appendChild(optionMonth);
    }
    monthDropdown.appendChild(monthSelect);

    monthSelect.addEventListener("focus", function () {
        this.style.backgroundColor = "#23272a";
        this.style.color = "rgb(158, 158, 158)";
    });

    // Генерация выпадающего списка для годов
    var yearDropdown = document.getElementById("yearDropdown");
    var yearSelect = document.createElement("select");
    yearSelect.name = "year";
    yearSelect.className = "main-year";

    // Placeholder
    var placeholderYear = document.createElement("option");
    placeholderYear.value = "";
    placeholderYear.text = "Year";
    placeholderYear.disabled = true; // Делаем placeholder недоступным
    placeholderYear.selected = true;
    yearSelect.appendChild(placeholderYear);

    var currentYear = new Date().getFullYear(); // Получения активный год
    for (var k = currentYear; k >= currentYear - 100; k--) {
        var optionYear = document.createElement("option");
        optionYear.value = k;
        optionYear.text = k;
        yearSelect.appendChild(optionYear);
    }
    yearDropdown.appendChild(yearSelect);

    yearSelect.addEventListener("focus", function () {
        this.style.backgroundColor = "#23272a";
        this.style.color = "rgb(158, 158, 158)";
    });

    // Генерация выпадающего списка для домена почты
    var emailDomainDropdown = document.getElementById("emailDomainDropdown");
    var emailDomainSelect = document.createElement("select");
    emailDomainSelect.name = "emailDomain";
    emailDomainSelect.className = "main-email-domain";

    // Placeholder
    var placeholderEmailDomain = document.createElement("option");
    placeholderEmailDomain.value = "";
    placeholderEmailDomain.text = "Domain";
    placeholderEmailDomain.disabled = true;
    placeholderEmailDomain.selected = true;
    emailDomainSelect.appendChild(placeholderEmailDomain);

    // Значения для выпадающего списка
    var emailDomains = ['@zero.gp', '@gmail.com', '@mail.ru'];
    for (var i = 0; i < emailDomains.length; i++) {
        var optionDomain = document.createElement("option");
        optionDomain.value = emailDomains[i];
        optionDomain.text = emailDomains[i];
        emailDomainSelect.appendChild(optionDomain);
    }
    emailDomainDropdown.appendChild(emailDomainSelect);

    emailDomainSelect.addEventListener("focus", function () {
        this.style.backgroundColor = "#23272a";
        this.style.color = "rgb(158, 158, 158)";
    });





    // Обработчик изменения значений в выпадающих списках
    $('#dayDropdown, #monthDropdown, #yearDropdown, #emailDomain').change(function () {

        // Функция для обновления скрытого поля с выбранной датой
        function updateSelectedDate() {
            var day = $('.main-day').val();
            var month = $('.main-month').val();
            var year = $('.main-year').val();

            // Проверяем, что все значения выбраны
            if (day && month && year) {
                // Преобразуем значения в числа
                var dayNumber = parseInt(day, 10);
                var monthNumber = parseInt(month, 10);
                var yearNumber = parseInt(year, 10);

                // Проверяем, что значения являются корректными числами
                if (!isNaN(dayNumber) && !isNaN(monthNumber) && !isNaN(yearNumber)) {
                    // Создаем объект Date с использованием выбранных значений
                    var selectedDate = new Date(yearNumber, monthNumber - 1, dayNumber + 1);

                    // Получаем форматированную строку даты в виде "YYYY-MM-DD"
                    var formattedDate = selectedDate.toISOString().split('T')[0];

                    // Устанавливаем значение в скрытое поле
                    $('#selectedDate').val(formattedDate);
                }
            }
        }

        // Обновляем выбранную дату перед отправкой формы
        updateSelectedDate();


    });


    // видимость пароля 
    document.getElementById('showDataBtn').addEventListener('click', function () {
        togglePasswordVisibility('passwordInput');
        togglePasswordVisibility('confirmPasswordInput');
    });

    function togglePasswordVisibility(inputId) {
        var passwordInput = document.getElementById(inputId);
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }

    // количество символов
    var passwordInput = document.getElementById('passwordInput');
    var characterCounterPass = document.getElementById('characterCounterPass');

    var confirmPasswordInput = document.getElementById('confirmPasswordInput');
    var characterCounterReze = document.getElementById('characterCounterReze');

    passwordInput.addEventListener('input', function () {
        var characterCount = passwordInput.value.length;
        characterCounterPass.textContent = characterCount;
    });
    confirmPasswordInput.addEventListener('input', function () {
        var characterCount = confirmPasswordInput.value.length;
        characterCounterReze.textContent = characterCount;
    });


    // Добавляем обработчик для кнопки "Создать"
    document.getElementById("validateAndSubmit").addEventListener("click", function () {
        if (validateForm()) {
            document.getElementById("registrationForm").submit();
        } else {
            // alert("Пожалуйста, заполните форму корректно.");
        }
    });
});

function validateForm() {
    var firstName = document.getElementsByName("firstName")[0].value;
    var lastName = document.getElementsByName("lastName")[0].value;
    var selectedDate = document.getElementsByName("selectedDate")[0].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var emailName = document.getElementsByName("emailName")[0].value;
    var emailDomain = document.getElementsByName("emailDomain")[0].value;
    var passwordName = document.getElementsByName("passwordName")[0].value;
    var confirmPasswordInput = document.getElementsByName("confirmPasswordInput")[0].value;
    var rezervName = document.getElementsByName("rezervName")[0].value;

    if (firstName === "" || !/^[A-Za-zА-Яа-я]+$/.test(firstName)) {
        alert("Введите корректное имя.");
        return false;
    }

    if (lastName === "" || !/^[A-Za-zА-Яа-я]+$/.test(lastName)) {
        alert("Введите корректную фамилию.");
        return false;
    }

    if (selectedDate === "") {
        alert("Выберите дату рождения.");
        return false;
    }

    if (!gender) {
        alert("Выберите пол.");
        return false;
    }

    if (emailName === "" || !/^[A-Za-z0-9_.]+$/.test(emailName)) {
        alert("Введите корректное имя ящика.");
        return false;
    }

    if (emailDomain === "") {
        alert("Выберите домен для ящика.");
        return false;
    }

    if (passwordName.length < 8 || !/[A-Za-z0-9!@#$%^&*()_+]+/.test(passwordName)) {
        alert("Пароль должен содержать минимум 8 символов");
        return false;
    }

    if (passwordName !== confirmPasswordInput) {
        alert("Пароли не совпадают.");
        return false;
    }

    if (rezervName === "" || !/^[A-Za-z0-9_.]+@[A-Za-z0-9]+\.[A-Za-z]+$/.test(rezervName)) {
        alert("Введите корректную резервную почту.");
        return false;
    }

    return true;
}




