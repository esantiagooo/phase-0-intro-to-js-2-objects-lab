// Write your solution in this file!
const employee = {}
employee.name = 'eric'
employee['streetAddress'] = 'New York'
console.log(employee)

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newobj = {...employee}
    newobj[key] = value
    return newobj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    employee[key]= value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newobj = {...employee}
    delete newobj[key]
    return newobj
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}