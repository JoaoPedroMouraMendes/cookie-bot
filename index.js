import { Client, IntentsBitField } from "discord.js";
import * as dotenv from "dotenv";

// Configurações

const prefix = "/";

dotenv.config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

// Eventos

// Inicialização
client.on("ready", () => {
    console.log(`Bot inicializado`);
    client.user.setActivity
    (`Como ser Bot em ${client.guilds.cache.size} ${client.guilds.cache.size > 1?"servidores":"servidor"}`);
});

client.on("messageCreate", async (message) => {
    // Só exucuta comandos caso comece com o prefixo e não seja um bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const { args, command } = parseCommand(message);

    if (command === "ping") {
        await message.channel.send(`pong`);
        return;
    }

});

function parseCommand(message) {
    // Argumentos do comandos
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    // Comando
    const command = args.shift().toLowerCase();

    return { args, command };
}

client.login(process.env.TOKEN);