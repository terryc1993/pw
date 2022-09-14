var push = require("web-push")

let vapidkeys = {
    publicKey: 'BIA6Lxa0_HTysFNLdoYG_XkL3Xpb-ULBIWt9vM-myCeOx-Am5MyUtho-nw0jPtjfYu4hmTJ79RXF2uwrFtGJY44',
    privateKey: 'eYeF8TuUKy5qtLGvjwkWWZ6kDuXf82z3XTIaPg8guDk'
  }

push.setVapidDetails("mailto:terence-calitz@outlook.com", vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {}

push.sendNotification(sub, "Test Message")