import { Client, GatewayIntentBits, Collection } from 'discord.js';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { logger } from './utils/logger';

dotenv.config();

logger.info('Starting bot...');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter((file: string) => file.endsWith('.ts'));

logger.info(`Loading ${eventFiles.length} events...`);

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
    logger.info(`Event loaded: ${event.name}`);
}

logger.info('Try to connect to Discord...');

client.login(process.env.TOKEN)
    .then(() => {
        logger.info('Connection to Discord server established');
    })
    .catch((error) => {
        logger.error('Error connecting to Discord server:', error);
    });