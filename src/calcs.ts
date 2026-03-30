import { logger } from "./utils/logger";

const divisao = (a: number, b: number): number => {
    if (b === 0) {
        logger.error("Divisão por zero não é permitida.");
        return 0;
    }
    logger.info(`Realizando divisão: ${a} / ${b}`);
    return a / b;
};


divisao(10, 0);
divisao(10, 2);























