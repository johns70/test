import { getAge } from '../../src/plugins/get-age.plugin';

describe("plugins/get-age.plugin",() => {
    test("Should be retur type age", () => {

        const birthdate = '1999-02-17'
        const age = getAge(birthdate)

        expect(typeof age).toBe("number")
    })

    test("getAge should  return current age", () => {
        const birthdate = '1999-02-17'
        const age = getAge(birthdate)

         const calulateAge = new Date().getFullYear() - new Date(birthdate).getFullYear() ;

         expect(age).toBe(calulateAge)
    })

    test("getAge Should return 0 value on getFullYear", () => {
        const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1999)

        const birthdate = '1999-02-17'
        const age = getAge(birthdate)

        // console.log(spy)

        expect(age).toBe(0)
        expect(spy).toHaveBeenCalledWith()
        // expect(spy).toHaveBeenCalledWith({ a:1 })
    })
})