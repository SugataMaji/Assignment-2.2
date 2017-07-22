var Mydetails = (function () {
    // Parameterized constructor
    function Mydetails(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
    return Mydetails;
}());
var getdetails = new Mydetails("Sugata Maji", 23);
console.log("My Name is " + getdetails.Name);
console.log("My Name is " + getdetails.Age);
