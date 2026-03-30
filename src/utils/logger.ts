/* 
elasticsearch
cd "C:\Users\carlo\Downloads\elasticsearch-9.3.2-windows-x86_64\elasticsearch-9.3.2"
bin/elasticsearch


logstash
cd "C:\Users\carlo\Downloads\elasticsearch-9.3.2-windows-x86_64\elasticsearch-9.3.2"
bin/elasticsearch
bin\logstash.bat -f "C:\Users\carlo\Documents\Meus arquivos\Faculdade\monitoramento-logging\logstash.conf"

kibana
cd "C:\Users\carlo\Downloads\kibana-9.3.2"
bin\kibana.bat

prometheus
cd "C:\Users\carlo\Downloads\prometheus-3.10.0.windows-amd64"
.\prometheus.exe --config.file=prometheus.yml */

import winston from "winston";

const { combine, timestamp, printf, colorize, json } = winston.format;

winston.addColors({
  error: "red bold",
  warn: "yellow bold",
  info: "green",
  debug: "blue"
});

const fileFormat = combine(
  timestamp(),
  json()
);

const consoleFormat = combine(
  timestamp({ format: "HH:mm:ss" }),
  colorize({ level: true }),
  printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
})
);

const logger = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.Console({
      format: consoleFormat
    }),

    new winston.transports.File({
      filename: "logs/errors/error.log",
      level: "error",
      format: fileFormat
    })
  ]
});
export {logger};