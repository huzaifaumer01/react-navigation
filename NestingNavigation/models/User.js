export default class User {
    static instance = User.instance || new User()
    email = ''
    name = ''
    phoneNumber=''
    isUserLogin = false
}