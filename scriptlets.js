/// addEventListener-defuser-v3.js
/// alias aeldv3.js
(function() {
    let needle1 = '{{1}}';
    console.log('needle 1 :', needle1);
    if ( needle1 === '' || needle1 === '{{1}}' ) {
        needle1 = '.?';
    } else if ( /^\/.+\/$/.test(needle1) ) {
        needle1 = needle1.slice(1,-1);
    } else {
        needle1 = needle1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    needle1 = new RegExp(needle1);
    let needle2 = '{{2}}';
    console.log('needle 2 :', needle2);
    if ( needle2 === '' || needle2 === '{{2}}' ) {
        needle2 = '.?';
    } else if ( /^\/.+\/$/.test(needle2) ) {
        needle2 = needle2.slice(1,-1);
    } else {
        needle2 = needle2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    needle2 = new RegExp(needle2);
    self.EventTarget.prototype.addEventListener = new Proxy(
        self.EventTarget.prototype.addEventListener,
        {
            apply: function(target, thisArg, args) {
                console.log("HELLO", target, thisArg, args, arguments);
                const type = args[0].toString();
                const handler = String(args[1]);
                if (
                    needle1.test(type) === false ||
                    needle2.test(handler) === false
                ) {
                    return target.apply(thisArg, args);
                }
            }
        }
    );
})();
