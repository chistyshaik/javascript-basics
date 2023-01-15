// A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. 

const a = [1,2,3,4,5];
Object.freeze(a); // The array cannot be modified now.

a[0] = 1; // fails silently




// shallow freeze 
/* The result of calling Object.freeze(object) only applies to the immediate properties of object itself and will prevent future property addition, removal or value re-assignment operations only on object. If the value of those properties are objects themselves, those objects are not frozen and may be the target of property addition, removal or value re-assignment operations. */

const employee = {
    name: "chisty",
    designation: "frontend-Developer",
    address: {
      street: "brodipet",
      city: "guntur"
    }
  };
  
  Object.freeze(employee);
  
  employee.name = "Dummy"; // fails silently in non-strict mode
  employee.address.city = "Hyderabad"; // attributes of child object can be modified
  
  console.log(employee.address.city); // "Hyderabad"



  