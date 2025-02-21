document.addEventListener('DOMContentLoaded', () => {
    if (typeof ymaps3 !== 'undefined') {
        initMap();
    } else {
        console.error('Библиотека Яндекс.Карт 3.0 не загружена');
    }
});

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [35.915704,56.858275],

                // Уровень масштабирования
                zoom: 10
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());

    // Добавляем слой для отображения функций по умолчанию
    map.addChild(new YMapDefaultFeaturesLayer());

    // Создаем маркер
    const marker = new YMapMarker({
        coordinates: [35.915704, 56.858275], // Координаты маркера
        // Дополнительные опции, такие как внешний вид (например, иконка) можно добавить здесь
    });

    // Добавляем маркер на карту
    map.addChild(marker);
}