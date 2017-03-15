(function () {
    angular.module("contactApp")
        .controller("ContactCtrl", function ContactCtrl(ContactDataSvc) {
            this.contacts = ContactDataSvc.contacts;

            this.selectedContact = this.contacts[0];

            this.selectContact = function (index) {
                this.selectedContact = this.contacts[index];
            }

        })
})();
