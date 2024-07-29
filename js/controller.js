window.CONTROLLER = {
    views: [
        "pages/home.html",
        "pages/about.html",
        "pages/code.html"
    ],
    setCurrentView: function (view) {
        this.setCookie("currentView", view);
        this.changeView(view);
    },
    changeView: function (view) {
        $('#content').load(view);
    },
    generateDate: function () {
        const today = new Date();
        const nextYear = new Date(today.setFullYear(today.getFullYear() + 1));
        return nextYear.toUTCString();
    },
    setCookie: function (name, value) {
        document.cookie = name + "=" + value + "; expires=" + this.generateDate() + "; path=/";
    },
    getCookie: function (name) {
        const cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return cookie ? cookie[2] : null;
    },
    events: {
        onNavClick: function () {
            $('nav a').click(function (e) {
                e.preventDefault();
                window.CONTROLLER.setCurrentView($(this).data('page'));
            });
        }
    },
    init: function () {
        // Register events
        this.events.onNavClick();

        // Load current view
        const currentView = this.getCookie("currentView");
        if (currentView && this.views.includes(currentView)) {
            this.setCurrentView(currentView);
        } else {
            this.setCurrentView("pages/home.html");
        }
    }
};