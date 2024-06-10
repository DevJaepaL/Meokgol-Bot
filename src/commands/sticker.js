module.exports = {
  name: "잘쟈",
  description: "잘 쟈",
  async execute(message, args) {
    try {
      // 스티커 ID 가져오기
      const stickerId = "1207947952526467142"; // INPUT_REQUIRED {Sticker ID}

      // 스티커 보내기
      await message.channel.send({ stickers: [stickerId] });
    } catch (error) {
      console.error("스티커 전송 중 오류 발생:", error);
      message.reply("스티커 전송 중 오류가 발생했습니다.");
    }
  },
};
