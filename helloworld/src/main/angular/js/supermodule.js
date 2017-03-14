angular.module("superModule", [])
    .controller("SuperCtrl", SuperCtrl);

function SuperCtrl() {
    this.helloMessage = "I am from Super Module";
}