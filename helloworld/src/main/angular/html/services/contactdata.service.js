(function () {
    angular.module("contactApp")
        .service("ContactDataSvc", function (AppNameSvc) {
            this.contacts = [
                {
                    "gender": "male",
                    "name":
                    {
                        "title": "mr",
                        "first": "joona",
                        "last": "huhtala"
                    },
                    "location":
                    {
                        "street": "1013 itsenäisyydenkatu",
                        "city": "savukoski",
                        "state": "kainuu",
                        "postcode": 82218
                    },
                    "email": "joona.huhtala@example.com",
                    "login":
                    {
                        "username": "ticklishsnake931",
                        "password": "water",
                        "salt": "otz9i9lx",
                        "md5": "ebfed8e608f6287727122a03f9809413",
                        "sha1": "e68e05c3e4d7fb8414f244484280bc516c85af69",
                        "sha256": "0fd630a583602ae3cbedd142b201a64cba00cf57ecceeefeb8795e782d4ab9eb"
                    },
                    "dob": "1953-07-0916:31:17",
                    "registered": "2007-04-1121:06:10",
                    "phone": "09-133-290",
                    "cell": "048-578-20-89",
                    "id":
                    {
                        "name": "HETU",
                        "value": "1053-951D"
                    },
                    "picture":
                    {
                        "large": "https://randomuser.me/api/portraits/men/30.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
                    },
                    "nat": "FI"
                },
                {
                    "gender": "female",
                    "name":
                    {
                        "title": "ms",
                        "first": "sophie",
                        "last": "ginnish"
                    },
                    "location":
                    {
                        "street": "7611 15th st",
                        "city": "shelbourne",
                        "state": "northwestterritories",
                        "postcode": 70504
                    },
                    "email": "sophie.ginnish@example.com",
                    "login":
                    {
                        "username": "goldensnake852",
                        "password": "hello",
                        "salt": "860uusC8",
                        "md5": "fd2c809b661a89a38f6de1a50856124d",
                        "sha1": "846bdd9f5522f0ce2a9b3d17bfae507127145d68",
                        "sha256": "8b144508b1200ac7129293e81aa2920b0f6274e6bb1a7a1aaf3153da37030492"
                    },
                    "dob": "1982-01-31 08:57:03",
                    "registered": "2003-02-0420:44:50",
                    "phone": "002-959-1000",
                    "cell": "317-264-2639",
                    "id":
                    {
                        "name": "",
                        "value": null
                    },
                    "picture":
                    {
                        "large": "https://randomuser.me/api/portraits/women/21.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
                    },
                    "nat": "CA"
                },

                { "gender": "male", "name": { "title": "mr", "first": "ramon", "last": "carter" }, "location": { "street": "3598 broadway", "city": "truro", "state": "essex", "postcode": "VJ56 5TB" }, "email": "ramon.carter@example.com", "login": { "username": "goldengoose907", "password": "mildred", "salt": "S0lgj6ZX", "md5": "2dd223b7f6779610ad7d25d30b1b3cd4", "sha1": "54a24e4c8e4b39ca6d3cd5cf378d976cacae3d7f", "sha256": "97751216f518205d0e400877176f4ada3e47871add4bca6f8ef296def29acf49" }, "dob": "1973-01-23 08:23:15", "registered": "2006-06-06 04:40:19", "phone": "016973 71390", "cell": "0720-590-745", "id": { "name": "NINO", "value": "AG 84 89 94 A" }, "picture": { "large": "https://randomuser.me/api/portraits/men/64.jpg", "medium": "https://randomuser.me/api/portraits/med/men/64.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/64.jpg" }, "nat": "GB" },
                { "gender": "female", "name": { "title": "miss", "first": "claire", "last": "gregory" }, "location": { "street": "1641 lakeview st", "city": "richardson", "state": "hawaii", "postcode": 76967 }, "email": "claire.gregory@example.com", "login": { "username": "heavygoose278", "password": "harpoon", "salt": "vtQQiJeA", "md5": "986a9eddb07f4aa1a43b81f7abb3356d", "sha1": "28b37a1d7b0b8294e6d1e80f88eb46ec827fc951", "sha256": "9ae850ea0752a832cd3fa03bbe95decc3ad08f41e754e94867a625e9a6bdb4c4" }, "dob": "1982-12-04 05:10:21", "registered": "2014-08-08 14:36:41", "phone": "(806)-971-8830", "cell": "(296)-055-9000", "id": { "name": "SSN", "value": "440-95-8574" }, "picture": { "large": "https://randomuser.me/api/portraits/women/87.jpg", "medium": "https://randomuser.me/api/portraits/med/women/87.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg" }, "nat": "US" },
                { "gender": "female", "name": { "title": "miss", "first": "alberte", "last": "andersen" }, "location": { "street": "6988 teglgårdsparken", "city": "sandved", "state": "hovedstaden", "postcode": 18161 }, "email": "alberte.andersen@example.com", "login": { "username": "tinyrabbit886", "password": "titty", "salt": "j1wLEow4", "md5": "41cd16af6817d9b31772d91f5d1e1a0b", "sha1": "718eb94ae63e87ac8c87d485a74c586b48a9bf34", "sha256": "7043f16e9d2963e118c1e98348380a39aa71e4158bae0e915cf21fb6b816fab1" }, "dob": "1950-06-26 20:41:50", "registered": "2015-09-19 04:21:13", "phone": "45643309", "cell": "19499646", "id": { "name": "CPR", "value": "078970-6258" }, "picture": { "large": "https://randomuser.me/api/portraits/women/24.jpg", "medium": "https://randomuser.me/api/portraits/med/women/24.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg" }, "nat": "DK" }

            ];
        }); // Ther Service service uses the function execution in constructor mode, like - new Object()
})();


