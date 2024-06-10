require('dotenv').config(); // .env 파일 로드

const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN; // INPUT_REQUIRED {Discord bot token}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('먹골 디스코드 봇이 준비되었습니다!');
});

client.on('messageCreate', message => {
  if (!message.content.startsWith('/먹골특') || message.author.bot) return;

  const args = message.content.slice('/먹골특'.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(`${commandName} 명령어 실행 중 오류 발생:`, error);
    message.reply('명령어 실행 중 오류가 발생했습니다.');
  }
});

client.login(DISCORD_BOT_TOKEN).catch(error => {
  console.error('디스코드 봇 로그인 중 오류 발생:', error);
});