const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee("Mike", 777, "Mike@test.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("get employee's name", () => {
    const employee = new Employee("Mike", 777, "Mike@test.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

test("get employee ID", () => {
    const employee = new Employee("Mike", 777, "Mike@test.com");

    expect(employee.getId()).toEqual(expect.any(Number))
})

test("get employee's email", () => {
    const employee = new Employee("Mike", 777, "Mike@test.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
});

test("get employee's role", () => {
    const employee = new Employee("Mike", 777, "Mike@test.com");

    expect(employee.getRole()).toEqual("Employee");
})