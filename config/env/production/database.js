// path: ./config/env/production/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
    const { host, port, database, user, password } = parse(env("DATABASE_URL"));

    return {
        connection: {
            client: 'postgres',
            connection: {
                host,
                port,
                database,
                user,
                password,
                ssl: {
                    rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
                },
            },
            options: {
                ssl: env.bool('DATABASE_SSL', false),
            },
            debug: false,
        },
    }
};
