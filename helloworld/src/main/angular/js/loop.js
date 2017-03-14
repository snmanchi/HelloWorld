angular.module("ngRepeatApp",[])
    .controller("RepeatCtrl", RepeatCtrl);

function RepeatCtrl() {
    this.myList = [
        {'name': "Foo",'age' : 20},
        {'name': "Bar",'age' : 23},
        {'name': "Blah",'age' : 10},
        {'name': "Boo",'age' : 25}
    ];
}