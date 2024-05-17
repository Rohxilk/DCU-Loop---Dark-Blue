document.addEventListener("DOMContentLoaded", function () {
    var toggleSwitch = document.getElementById("togBtn");
    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            console.log("Extension enabled");
            chrome.runtime.sendMessage({message: "toggle_css", data: "on"});
        } else {
            console.log("Extension disabled");
            chrome.runtime.sendMessage({message: "toggle_css", data: "off"});
        }
    });
});
