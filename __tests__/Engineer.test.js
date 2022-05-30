const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer("Bruce", 333, "test@test.com", "pandagood123");

    expect(engineer.github).toEqual(expect.any(String));
})

test("get engineer's github username", () => {
    const engineer = new Engineer("Bruce", 333, "test@test.com", "pandagood123");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test("get engineer's role", () => {
    const engineer = new Engineer("Bruce", 333, "test@test.com", "pandagood123");

    expect(engineer.getRole()).toEqual("Engineer");
})