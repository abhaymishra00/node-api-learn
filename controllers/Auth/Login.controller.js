function LoginAsAdmin(req, res) {
  res.send("hello user as admin");
}

function LoginAsUser(req, res) {
  res.send("hello user as user");
}

module.exports = {
  LoginAsAdmin,
  LoginAsUser,
};
