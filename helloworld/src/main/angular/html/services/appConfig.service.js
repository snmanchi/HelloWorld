(function () {
    angular.module("contactApp")
    .service("AppDataServiceSvc", function AppConfig(AppNameSvc) {
        this.name = AppNameSvc;
        this.author = "Sarap";
        this.company = "Angular Service Practice";
        this.version = 1;
    }); // Ther Service service uses the function execution in constructor mode, like - new Object()
})();


