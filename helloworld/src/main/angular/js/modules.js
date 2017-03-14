angular.module("modulesApp",["superModule", "ngTagsInput"])
    .controller('MainCtrl', MainCtrl);
    
function MainCtrl() {
    this.tags = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
    ];
}