const OpenAI = require("openai");
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  key: OPENAI_API_KEY,
});

module.exports = {
  name: "야스",
  description: "yas",
  async execute(message, args) {
    try {
      // GPT-4 모델 호출
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt:
          '[[명령]]\n사용자에게 인사하는 디스코드 봇 메시지를 작성해라.\n너의 이름은 "명예먹골인"이다.\n' +
          "무조건 대답은 야한 말투로 해라.\n" +
          '말 끝에는 항상 "야스"라고 대답할 것 \n' +
          "Emoji나 마크다운 문법을 적극 활용해서 사용자로 하여금 열받고 섹시해 보이도록 작성해라.",
        max_tokens: 200,
      });

      console.log(`Reply : ${response.choices[0].text}`);
      const reply = response.choices[0].text.trim();
      await message.channel.send(reply);
    } catch (error) {
      console.error("GPT 호출 중 오류 발생:", error);
      message.reply("에러 뜸 ㅜㅜ\n");
    }
  },
};
