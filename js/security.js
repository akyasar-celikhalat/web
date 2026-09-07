/*
 * Global Security & Anti-Inspection Module
 * Prepared for Yaşar AK Projects
 */
(function() {
    'use strict';

    // Disable Right Click / Context Menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable Text Selection and Copy/Cut/Paste
    document.addEventListener('selectstart', function(e) { e.preventDefault(); }, false);
    document.addEventListener('copy', function(e) { e.preventDefault(); }, false);
    document.addEventListener('cut', function(e) { e.preventDefault(); }, false);
    document.addEventListener('paste', function(e) { e.preventDefault(); }, false);

    // Disable Key Combinations (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S)
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S (Save Page)
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
    }, false);

    // Extra Console Warning
    console.log("%cDUR!", "color: red; font-size: 40px; font-weight: bold;");
    console.log("%cBu alan geliştiriciler içindir. İzinsiz kopyalama ve kaynak kod inceleme engellenmiştir.", "font-size: 16px; color: #333;");
})();
