import { config } from '../../config/config';
import { logger } from '../utils/logger';
import { Message } from 'discord.js';

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(message: Message) {
        if (message.author.bot) return;

        const content = message.content.toLowerCase();
        const hasTriggerWord = config.responses.triggers.some((trigger: string) => 
            content.includes(trigger)
        );

        if (hasTriggerWord) {
            const response = config.responses.replies[
                Math.floor(Math.random() * config.responses.replies.length)
            ];

            message.reply(response)
                .then(() => logger.info(`Responded "${response}" to "${message.content}"`))
                .catch(error => logger.error('Error sending response:', error));
        }
    }
};