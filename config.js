module.exports = {
  // your community or team name to display on join page.
  community:  'Hackerlab',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: 'thehackerlab.slack.com',
  // access token of slack
  // see https://github.com/outsideris/slack-invite-automation#issue-token
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: 'xoxp-420229646870-422232492658-720718994833-64bff74c9fccfeb7833c2e52cec19265',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken:  null,
  // an optional security measure - if both are set, then recaptcha will be used.
  recaptchaSiteKey: null,
  recaptchaSecretKey:  null,
  // default locale
  locale: "en",
  subpath:  "/"
};
