import { Client, ActivityType } from 'discord.js';
import { logger } from '../utils/logger';

module.exports = {
    name: 'ready',
    once: true,
    execute(client: Client) {
        client.user?.setPresence({
            activities: [{ name: 'feur 🤓', type: ActivityType.Playing }],
            status: 'online'
        });

        logger.info('====================================');
        logger.info(`🤖 Bot connected as ${client.user?.tag}`);
        logger.info('====================================');
    }
};