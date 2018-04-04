function TabInput(){
    this.idInput = [];
    this.nameInput = [];
    this.regexInput = [];
}

TabInput.prototype = {
    addInput: function(idInput, nameInput, regexInput){
        this.idInput.push(idInput);
        this.nameInput.push(nameInput);
        this.regexInput.push(regexInput);
    }
};