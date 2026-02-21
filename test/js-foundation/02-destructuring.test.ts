import { characters} from '../../src/js-foundation/02-destructuring'


describe("js-foundation/02-destructuring", () => {
    test("character shold be flash and Superman",() => {
        expect(characters).toContain("Flash")
    })

        const [ superman, flash  ] = characters

    test("first character should be Flash, and second Supermandito",() => {
        expect(superman).toBe("Superman")
        expect(flash).toBe("Flash")
    })
})