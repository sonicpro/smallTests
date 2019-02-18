/*global $, setInterval */

(function (window, jQuery) {
    jQuery(function () {
        // As per https://learn.javascript.ru/memory-leaks-jquery.
        function leak() {
            jQuery("<div/>")
                .html(new Array(1000).join("text"))
                .click(function () { console.log("bla-bla-bla"); })
                .appendTo("#data");

            document.getElementById("data").innerHTML = ""; // We left click handler in jQuery cache (either dataPriv or dataUser as of jQuery2+).
        }

        window.interval = setInterval(leak, 10);
    });}(this, $));
