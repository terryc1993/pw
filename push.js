var push = require("web-push")

let vapidkeys = {
    publicKey: 'BIA6Lxa0_HTysFNLdoYG_XkL3Xpb-ULBIWt9vM-myCeOx-Am5MyUtho-nw0jPtjfYu4hmTJ79RXF2uwrFtGJY44',
    privateKey: 'eYeF8TuUKy5qtLGvjwkWWZ6kDuXf82z3XTIaPg8guDk'
  }

push.setVapidDetails("mailto:terence-calitz@outlook.com", vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fokJUt7az08:APA91bGMC9IL74wwZxPECswr2xLd7HW_JZvqq8wUeVi0M6pFMS9iVaGPiOo4LEuFxtBsjJ9Obmm4NIecfEUaBh1LAiIN2yYTiWWIdaJzGV9i8LQBBo4gTsV0FvQbQid5ZNKCr-ygBEdE","expirationTime":null,"keys":{"p256dh":"BD4wa_gQIC6zrz5KVLQXhgBUU61QUIfQzv-hGvLLI-iPjlMOwguoqYoDHRAmc_HVRatlBNg2B83RegvTxjn3nnI","auth":"QwHclFVQKHTVo5pB1e28uw"}}

push.sendNotification(sub, "Test Message")