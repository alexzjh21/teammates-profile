const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern("Dom", 111, "dom@test.com", "UCLA");

    expect(intern.school).toEqual(expect.any(String));
})

test("gets intern's school name", () => {
    const intern = new Intern("Dom", 111, "dom@test.com", "UCLA");

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("gets intern role", () => {
    const intern = new Intern("Dom", 111, "dom@test.com", "UCLA");

    expect(intern.getRole()).toEqual("Intern");
});