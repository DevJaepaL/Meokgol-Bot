module.exports = {
  name: 'stop',
  description: '현재 재생 중인 음악을 중지하고 음성 채널에서 봇을 나가게 합니다.',
  execute(message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.reply('음성 채널에 먼저 들어가주세요!');
    }

    const connection = message.guild.me.voice.connection;
    if (!connection) {
      return message.reply('현재 재생 중인 음악이 없습니다.');
    }

    connection.disconnect();
    message.reply('음악 재생을 중지하고 음성 채널에서 나갑니다.');
  },
};