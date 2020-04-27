/// disable-shortcut.js
/// alias ds.js
(function() {
    let needle1 = '{{1}}'
    console.log('needle 1', needle1);
    let keyCodes = Array.from(needle1.split('\,').map(e => e.trim()).filter(e => e !== '').map(e => parseInt(e)));
    console.log('kc', keyCodes);
    document.addEventListener("keydown", function(e) {
        if(keyCodes.indexOf(e.keyCode) !== -1) {
            console.log("EEE", e);
            e.preventDefault();
            e.stopPropagation();
        }        
    })
})();
