const User = require("../models/user.js");
const passport = require("passport"); 

module.exports.signup = async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        birthdate,
        number,
        hometown,
        city,
        documentType,
        documentNumber
      } = req.body;

      // Validate documentType BEFORE saving
      if (!documentType || !['Aadhar Card', 'PAN Card', 'Voter ID'].includes(documentType)) {
        return res.status(400).json({
          success: false,
          message: "Invalid document type"
        });
      }

      const newUser = new User({
        username: email,
        email,
        fullName: name,
        birthDate: birthdate,
        currentResidence: city,
        localAddress: hometown,
        mobileNumber: number,
        documents: [{
          type: documentType,
          documentNumber: documentNumber
        }]
      });

      const registeredUser = await User.register(newUser, password);
      const token = registeredUser.generateAuthToken();

      return res.status(201).json({
        success: true,
        token: token,
        user: {
          id: registeredUser._id,
          email: registeredUser.email,
          name: registeredUser.fullName
        }
      });

    } catch (e) {
      return res.status(400).json({
        success: false,
        message: e.message
      });
    }
};

module.exports.login = (req, res, next) => {
        passport.authenticate("local", { session: false }, (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(401).json({ 
                    success: false, 
                    message: info.message || 'Login failed' 
                });
            }
            
            // Generate JWT token
            const token = user.generateAuthToken();
            console.log("you are loged in......");
            return res.json({
                success: true,
                token: token,
                user: {
                    id: user._id,
                    email: user.email,
                    name: user.fullName
                }
            });
            console.log(token);
        })(req, res, next);
    };

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if(err) {
      return res.status(500).json({
        success: false,
        message: "Logout failed"
      });
    }
    res.json({
      success: true,
      message: "Logged out successfully"
    });
  });
};