document.addEventListener('DOMContentLoaded', function () {
    var toggleSwitch = document.getElementById('togBtn');
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            console.log('Extension enabled');
        } else {
            console.log('Extension disabled');
        }
    });
});

