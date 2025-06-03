let name = {
    firstname: "Aswin",
    lastname: "M A",
    fullname : function() {
        return this.firstname+" " + this.lastname
}
}
console.log("full name =",name.fullname())