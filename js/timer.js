// Событие DOMContentLoaded срабатывает, когда HTML-документ полностью загружен
document.addEventListener('DOMContentLoaded', () => {
    // Устанавливаем конечную дату таймера (например, 9 сентября 2025 года, 15:00:00)
    const deadline = new Date('2025-09-09T15:00:00');

    // Находим элементы DOM, в которые будем выводить значения таймера
    const elDays = document.querySelector('#days');       // Элемент для отображения дней
    const elHours = document.querySelector('#hours');     // Элемент для отображения часов
    const elMinutes = document.querySelector('#minutes'); // Элемент для отображения минут
    const elSeconds = document.querySelector('#seconds'); // Элемент для отображения секунд

    // Находим элементы DOM для отображения текста (например, "дней", "часов")
    const elDaysText = document.querySelector('#days-text');
    const elHoursText = document.querySelector('#hours-text');
    const elMinutesText = document.querySelector('#minutes-text');
    const elSecondsText = document.querySelector('#seconds-text');

    // Функция для склонения числительных (например, "1 день", "2 дня", "5 дней")
    const declensionNum = (num, words) => {
        // Логика склонения:
        // Если число оканчивается на 11-14, используем форму множественного числа ("дней")
        // Иначе выбираем форму в зависимости от последней цифры числа (1, 2, 5 и т.д.)
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    };

    // Функция для обновления таймера
    const updateTimer = () => {
        // Получаем текущее время
        const now = new Date();

        // Вычисляем разницу между конечной датой и текущим временем
        // Если таймер уже истек, устанавливаем разницу в 0
        const diff = Math.max(0, deadline - now);

        // Вычисляем количество полных дней, часов, минут и секунд в разнице
        const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Количество дней
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24); // Количество часов
        const minutes = Math.floor((diff / (1000 * 60)) % 60); // Количество минут
        const seconds = Math.floor((diff / 1000) % 60); // Количество секунд

        // Обновляем значения в DOM
        elDays.textContent = String(days).padStart(2, '0');      // Отображаем дни с ведущим нулем, если необходимо
        elHours.textContent = String(hours).padStart(2, '0');   // Отображаем часы с ведущим нулем
        elMinutes.textContent = String(minutes).padStart(2, '0'); // Отображаем минуты с ведущим нулем
        elSeconds.textContent = String(seconds).padStart(2, '0'); // Отображаем секунды с ведущим нулем

        // Обновляем текст для склонения числительных
        elDaysText.textContent = declensionNum(days, ['день', 'дня', 'дней']);
        elHoursText.textContent = declensionNum(hours, ['час', 'часа', 'часов']);
        elMinutesText.textContent = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        elSecondsText.textContent = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

        // Если разница равна 0, останавливаем таймер
        if (diff === 0) {
            clearInterval(timerId);
        }
    };

    // Первый запуск таймера
    updateTimer();

    // Запускаем таймер с интервалом 1 секунда (1000 миллисекунд)
    const timerId = setInterval(updateTimer, 1000);
});