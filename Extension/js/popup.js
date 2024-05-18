document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("togBtn");

    // Initialize the toggle switch state
    chrome.storage.sync.get('isCssEnabled', function (data) {
        toggleSwitch.checked = data.isCssEnabled || false;
    });

    toggleSwitch.addEventListener("change", function () {
        const isChecked = toggleSwitch.checked;
        chrome.storage.sync.set({ isCssEnabled: isChecked });
        const message = isChecked ? "on" : "off";
        chrome.runtime.sendMessage({ message: "toggle_css", data: message });
    });
});
