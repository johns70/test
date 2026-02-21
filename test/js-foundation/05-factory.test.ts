import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe("js-foundation/05-factory", () => {
    const getUUID = () => "123"
    const getAge = () => 27

    test("makebuildPerson should be type a function",() => {
        const makebuildPerson = buildMakePerson({ getUUID, getAge })
        expect(typeof makebuildPerson).toBe('function')
    })

    test("makeBuildPerson should be return person", () => {
       const makebuildPerson = buildMakePerson({ getUUID, getAge })
       const john = makebuildPerson({ name: "John Doe", birthdate: "1999-02-17"})
       expect(john).toEqual({
        id: getUUID(),
        name: "John Doe",
        birthdate: "1999-02-17",
        age: getAge(),
       })
    })
})