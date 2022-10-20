const { SlashCommandBuilder } = require('discord.js')
const User = require('../../schemas/User')
const Studying = require('../../schemas/Studying')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('start')
    .setDescription('공부 시작하기')
    .addStringOption((option) => 
      option.setName('subject')
        .setDescription('공부 주제')
        // .setRequired(true)
    ),
  async execute(interaction, client) {
    const { options, user: { id: discordId } } = interaction
    const subject = options.getString('subject')
    // 주제 비어있을때 처리
    let content = ''

    // console.log(subject) // null
    const user = await User.findOne({ discordId }, { name: 1 })
    if (!user) {
      content = '먼저 이름을 등록해! (๑•̀ㅁ•́ฅ) /setmyname'
      ephemeral = true
    }

    const studying = await Studying.findOne({ discordId, onAir: true })
    if (studying) {
      content = '이미 공부를 시작했어! (๑•̀ㅁ•́ฅ)'
      ephemeral = true
    }

    if (user && !studying) {
      const { name } = user
      await new Studying({
        name,
        subject,
        discordId,
        onAir: true,
        createdAt: new Date().toISOString(),
      }).save()
  
      content = '공부 시작! ฅ(๑˙o˙๑)ฅ'
      ephemeral = false
    }


    await interaction.deferReply({
      fetchReply: true,
      ephemeral,
    })

    await interaction.editReply({ 
      content,
      ephemeral,
    })
  }
}