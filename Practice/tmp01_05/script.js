const teacher = {
  $: 11,
  id: 1,
  name: "test",
  cnic: "35202-010028738209-01",
  discipline: "",
  age: 35,
  salary: 30000,
  designation: "",
  department: "",
  contactInfo: {
    contactNumber: "+9123136271",
    email: "test@gmail.com",
    address: "H#9, St#122 NYC",
  },
  setId: function (id) {
    this.id = id;
  },
  setName: function (name) {
    this.name = name;
  },
  setCnic: function (cnic) {
    this.cnic = cnic;
  },
  setDiscipline: function (discipline) {
    this.discipline = discipline;
  },
  setAge: function (age) {
    this.age = age;
  },
  setSalary: function (salary) {
    this.salary = salary;
  },
  setDesignation: function (designation) {
    this.designation = designation;
  },
  setDepartment: function (department) {
    this.department = department;
  },
  setContactInfo: function (contactInfo) {
    this.contactInfo = contactInfo;
  },
};

teacher.setAge(40);
console.log(teacher.$);
var cnic = "cnic";
console.log(teacher[cnic]);
