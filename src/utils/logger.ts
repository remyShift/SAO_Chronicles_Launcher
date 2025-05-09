const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m'
};

export const logger = {
    info: (message: string) => console.log(`${colors.cyan}[INFO]${colors.reset} ${message}`),
    error: (message: string, error?: Error) => console.error(`${colors.red}[ERROR]${colors.reset} ${message}`, error || ''),
    warn: (message: string) => console.warn(`${colors.yellow}[WARN]${colors.reset} ${message}`)
};