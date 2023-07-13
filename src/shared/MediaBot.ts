import { Client, SlashCommandBuilder } from "discord.js";

export class MediaBot<T>{

    bot: Client;
    mediaQueue: string[];
    mediaScraper: T;

    constructor(bot: Client, mediaScraper: T){
        this.bot = bot;
        this.mediaQueue = [];
        this.mediaScraper = mediaScraper;
    }

    init(command: SlashCommandBuilder): void{
        this.bot.
    }


}