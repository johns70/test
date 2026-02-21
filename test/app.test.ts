describe('Test in the App File', () => {
    test('should be 30', () => {
        // 1.Arranque
            const num1 = 10
            const num2 = 20
        //2.Act
            const result = num1 + num2

        //3.Asert
            expect(result).toBe(30 )
    })
})