import { SlashCommandBuilder } from 'discord.js'

    const command = new SlashCommandBuilder()
        .setName("p")
        .setDescription("Put in some letters and I'll guess the song")
        .addStringOption( option => 
            option.setName("letters")
                .setDescription("The musical letters")
                .setRequired(true)
        )

export default { command, }