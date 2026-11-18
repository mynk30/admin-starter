
const fs = require('fs');
const path = require('path');

// Helper to parse .env files directly into an object
function loadEnv(filename) {
    const filePath = path.resolve(__dirname, filename);

    if (!fs.existsSync(filePath)) return {};

    const content = fs.readFileSync(filePath, 'utf-8');
    const env = {};

    for (const line of content.split(/\r?\n/)) {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith('#')) continue;

        const idx = trimmed.indexOf('=');

        if (idx > -1) {
            const key = trimmed.slice(0, idx).trim();
            let val = trimmed.slice(idx + 1).trim();

            if (
                (val.startsWith('"') && val.endsWith('"')) ||
                (val.startsWith("'") && val.endsWith("'"))
            ) {
                val = val.slice(1, -1);
            }

            env[key] = val;
        }
    }

    return env;
}

const isProduction = process.argv.includes('production');

const devEnv = loadEnv('.env.development');
const prodEnv = loadEnv('.env.production');

// Disable terminal colors in development processes
const noColorEnv = {
    FORCE_COLOR: '0',
    NO_COLOR: '1',
};

module.exports = {
    apps: [
        {
            name: 'admin',

            // Application entry point
            script: isProduction
                ? 'serve'
                : 'node_modules/vite/bin/vite.js',

            args: '',

            // Process management
            watch: false,
            autorestart: true,
            merge_logs: true,

            // Log configuration
            log_file: isProduction
                ? './logs/prod.log'
                : './logs/dev.log',

            time: isProduction,

            // Default environment
            env: {
                NODE_ENV: 'development',
                PORT: Number(devEnv.VITE_PORT) || 3001,
                ...noColorEnv,
                ...devEnv,
            },

            // Development environment
            env_development: {
                NODE_ENV: 'development',
                PORT: Number(devEnv.VITE_PORT) || 3001,
                ...noColorEnv,
                ...devEnv,
            },

            // Production environment
            env_production: {
                NODE_ENV: 'production',
                PM2_SERVE_PATH: './dist',
                PM2_SERVE_PORT: Number(prodEnv.VITE_PORT) || 3001,
                PM2_SERVE_SPA: 'true',
                PM2_SERVE_HOMEPAGE: './index.html',
                ...prodEnv,
            },
        },
    ],
};
