import winston from 'winston';
export declare const logger: winston.Logger;
export declare const buildLogger: (service: string) => {
    log: (message: string) => void;
    msgError: (message: string) => void;
};
//# sourceMappingURL=logger.plugin.d.ts.map