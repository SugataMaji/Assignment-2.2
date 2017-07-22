  class Mydetails {

   private Name: string;
   Age: number;
    // Parameterized constructor
    constructor(Name : string, Age: number) { 
      this.Name = Name
      this.Age = Age
   
    }
  
}
  

   let getdetails = new Mydetails("Sugata Maji" , 23);

   console.log(`My Name is ${getdetails.Name}`);
   console.log(`My Name is ${getdetails.Age}`);
