document.addEventListener('DOMContentLoaded', function () {
    var maps = {
        'saturn': [43, 43],
        'earth': [44, 44],
        'jupiter': [45, 45]
    };

    var activeMap = null;

    function showMap(planet) {
        if (activeMap) {
            activeMap.style.display = 'none';
        }

        activeMap = document.getElementById(planet + '-map');
        activeMap.style.display = 'block';

        // Инициализация карты 2GIS
        DG.then(function () {
            if (!activeMap.dataset.mapInitialized) {
                var map = DG.map(activeMap, {
                    center: maps[planet],
                    zoom: 13
                });

                DG.marker(maps[planet]).addTo(map);
                activeMap.dataset.mapInitialized = 'true';
            }
        });
    }

    var planetLinks = document.getElementsByClassName('planet-link');

    for (var i = 0; i < planetLinks.length; i++) {
        planetLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            var planet = this.getAttribute('data-planet');
            showMap(planet);
        });
    }
});
