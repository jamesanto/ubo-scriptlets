/// disable-shortcut.js
/// alias ds.js
(function() {
    document.addEventListener("keydown", function(e) {
        console.log("EEE", e);
        e.preventDefault();
    })
})();
