module.exports = {
  config: {
    name: "pp",
    aliases: ["pfp", "pp"],
    version: "1.1",
    author: "Nazrul",
    countDown: 5,
    role: 0,
    shortDescription: "No Prefix",
    longDescription: "No Prefix",
    category: "image",
    guide: {
      en: "   {pn} @tag"
    }
  },
  langs: {
    vi: {
      noTag: "Bạn phải tag người bạn muốn tát"
    },
    en: {
      noTag: "You must tag the person you want to get profile picture of"
    }
  },
  onStart: async function ({ event, message, usersData, args, getLang }) {
    let avt;
    const uid1 = event.senderID;
    const uid2 = Object.keys(event.mentions)[0];
    if(event.type == "message_reply"){
      avt = await usersData.getAvatarUrl(event.messageReply.senderID)
    } else{
      if (!uid2){avt =  await usersData.getAvatarUrl(uid1)
              } else{avt = await usersData.getAvatarUrl(uid2)}}
 
 
    message.reply({
      body:"",
      attachment: await global.utils.getStreamFromURL(avt)
  })
  }
};
 