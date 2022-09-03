/*
    es5 does not have classes or the super function so we have to write a functional based class
    es5 is a lot more verbose 
*/

//Person constructor
function Person(name){
    this.name = name
}

const p1 = new Person("peter")
console.log(p1)


function Student(name, studentId){
    Person.call(this, name)
    this.studentId = studentId
}

Student.prototype = Object.create(Person.prototype)
/*
    student prototype will look exactly like person prototype
*/
Student.prototype.constructor = Student
/*
    set constructor function equal to student function
*/

const myStudent = new Student("rob", 1122)

/*
    When student gets instantiated 
    Student function will execute 
    setting 
    this.name = "rob" and this.studentId = 1122

*/
