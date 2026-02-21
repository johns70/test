// este archivo de aqui todo significa suite, hay que crear una function para que no de error ( () => {})
import { emailTemplate } from '../../src/js-foundation/01-template'

describe ( "js-fundation/01-template", () => {
  test ("emailTemplate should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi, ")
   })
// 
   test("emailTemplate should be contain {{name}} and {{orderId}}",() => {
     expect(emailTemplate).toMatch('{{name}}')
     expect(emailTemplate).toMatch('{{orderId}}')
   })
})