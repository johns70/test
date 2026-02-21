import { getUUID } from '../../src/plugins/get-id.plugin';

describe("pligins/get-id.plugin",()=> {
    test("should be return length id", () => {
        const uuid = getUUID()
        // console.log(uuid)
        expect(typeof uuid).toBe("string")
        expect(uuid.length).toBe(36)
    })
})