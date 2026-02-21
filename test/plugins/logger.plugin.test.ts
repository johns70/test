import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';

describe("plugins/logger.plugin", () => {
    test("buidLogger should return type of function", () => {
        // const logger = buildLogger("Test")
        // const error = buildLogger("Error")

        // expect(typeof logger.log).toBe("function")

    })

    test("logger.log should log a message", () => {
        const spyLogger = jest.spyOn(winstonLogger, 'log')

        const message = 'Test message'
        const service = 'test service'

        const loggerInf = buildLogger(service)
        loggerInf.log(message)

        expect(spyLogger).toHaveBeenCalledWith(
            "info",
            expect.objectContaining({
                level:"info",
                message,
                service,
            }),
        )
    })
})