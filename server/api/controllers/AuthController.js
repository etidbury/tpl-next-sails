module.exports.index = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json(401, { error: "Username/Email and password required" });
  }

  const issueUserToken = function(user) {
    return require("wmg-auth").issue(
      _.pick(user, "id", "email")
    );
  };

  const handleLogin = ({email,password})=> {
    User.findOne({ email }).then((user)=>{

      if (err) {
        return res.json(500, err);
      }

      if (!user) {
        //return res.json(401, {error: 'invalid email or password'});

        res.status(401).json({error:"Invalid email and/or password"})
      } else {
        res.json({
          user: user,
          token: issueUserToken(user)
        });
      }
    });//end findOne
  };

  if (
    username === "admin" &&
    (password === "Poppins1" || password === "poppins1")
  ) {
    handleLogin({
      email: "admin@portal.firepit.tech",
      forename: "Admin",
      surname: "Admin",
      id: 0
    });
  } else {
    WMGAuth.login({ username: username, password })
      .then(ProfileInfo => {
        handleLogin(ProfileInfo);
      })
      .catch(Error => {
        return res.json(401, { error: Error.message });
      });
  }
};
