import { httpClientPlugin } from '../../src/plugins/http-client.plugin';
import { buildLogger } from '../../src/plugins/logger.plugin'

describe("src/plugins/http-client.plugin",() => {
    test("Shoul be return url String", async() => {

        const logger = buildLogger('http-client.plugin.js')

       try {
         const data = await httpClientPlugin.get("https://jsonplaceholder.typicode.com/todos/1")

        expect( data).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
        })
       } catch (error) {
            logger.msgError('Ha ocurrido un error')
       }

    })

    // test(" httpClientPlugin her method POST should return value function ", async() => {

    //     const dataPOST = await httpClientPlugin.post("https://jsonplaceholder.typicode.com/posts", {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title: 'foo',
    //             body: 'bar',
    //             userId: 1,
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     }
    // })
    //     console.log(typeof dataPOST)        

    //     expect(typeof dataPOST).toBe("object")
    // })

    test("httpClientPlugin shold be include that methos POST,DELETE,PUT", () => {
        const objMethod = {
            get: httpClientPlugin.get,
            post: httpClientPlugin.post,
            put: httpClientPlugin.put,
            delete: httpClientPlugin.delete
        }

        console.log("Aqui..") 
        expect(httpClientPlugin).toEqual(objMethod)
    })
})