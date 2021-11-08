import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCutingConcems/logging/logger.js"
import User from "../models/user.js"
import { UserServices } from "../services/userServices.js"

console.log("user companent yüklendi")

let logger1=new MongoLogger()
let userService = new UserServices(logger1)

let user1 = new User(1,"bestami","tabaş","hatay")
let user2 = new User(2,"bestami","tabaş","hatay")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))
userService.getById()
userService.list()


