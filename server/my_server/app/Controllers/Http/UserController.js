const Mail = use("Mail");
class UserController {
  async store({ request }) {
    const data = request.only(["email", "username", "password"]);
    const user = await User.create(data);
    const Mail = use('Mail');
    await Mail.send('emails.welcome', {}, (message) => {
      message.from('nyera.a.e@gmail.com')
      message.to('nyera.a.e@gmail.com')
    })
    await Mail.raw('plain text email', (message) => {
        message.from('nyera.a.e@gmail.com')
        message.to('nyera.a.e@gmail.com')
      })
      
      await Mail.raw('<h1> HTML email </h1>', (message) => {
        message.from('nyera.a.e@gmail.com')
        message.to('nyera.a.e@gmail.com')
      })
    return "Registered successfully";
  }
}
module.exports = UserController