const Discord = require("discord.js");
const RichEmbed = require("discord.js");
client.user.setGame(Rules Only 🚫 , "https://www.twitch.tv/Amr");
client.on('message', message => {
            if (message.content.startsWith("/rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     اولا ' ,' ممنوع السب ')
.addField('     ثانيا ' ,' ممنوع سبام  ')
.addField('     ثالثا ' ,' لا تزعج الاخرين ')
.addField('    رابعا' ,' ممنوع الاعلانات ')
.addField('    خامسا' ,' احترم الاخرين ')
.addField('    سادسا' ,' لا تنشر في الشات او بل خاص ')//Codes Server
.addField('    سابعا' ,' لا تنشر روابط! ')
.addField('    ثامنا' ,' ممنوع سبام ايموجي ')
.addField('    تاسعا' ,' لا تطلب رتبه الاداره ! ')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);//Codes Server
    }
});



client.login("NTI3NTQ3MTk3NTIxMzk1NzEy.DwVU6A.kPO9-vQYPIodaqfiWxoAmFI4wmw");
