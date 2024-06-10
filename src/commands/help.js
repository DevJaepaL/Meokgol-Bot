module.exports = {
  name: "help",
  description: "사용 가능한 명령어 목록을 표시합니다.",
  execute(message, args) {
    message.channel.send(
      "**:: 사용 가능한 명령어 목록 ::**\n" +
        "1. `/먹골특 안녕`\n" +
        "2. `/먹골특 잘쟈`\n" +
        "3. `/먹골특 야스`\n"
    );
  },
};
