async function entry() {
    try {
        await $.getScript('js/controller.js');
        window.CONTROLLER.init();
    } catch (e) {
        //
    }
}

$(document).ready(function () {
    entry();
});
