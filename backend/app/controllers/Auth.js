const jwt = require("jsonwebtoken");
const User = require("../database/schemas/users");
const bcrypt = require("bcrypt");

const generateToken = (payload) => {
  const secret = process.env.TOKEN_SECRET;
  const token = jwt.sign(payload, secret, {
    expiresIn: "1d",
  });

  return token;
};

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(12);
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const signup = async (req, res) => {
  const body = req.body;

  const existingUser = await User.findOne({ email: body.email });

  if (existingUser) {
    return res.status(400).json({
      data: null,
      message: "Email already exists.",
      status: false,
    });
  }
  const user = await User.create({
    fullName: body.fullName,
    email: body.email,
    password: hashPassword(body.password),
  });

  const token = generateToken({ id: user._id });

  return res.status(200).json({
    data: {
      user,
      token,
    },
    message: "User has been registered successfully",
    status: true,
  });
};

const signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({
      data: null,
      message: "Account doesn't exists.",
      status: false,
    });
  }
  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(400).json({
      data: null,
      message: "Password is invalid.",
      status: false,
    });
  }

  const token = generateToken({ id: user._id });

  return res.status(200).json({
    data: {
      user,
      token,
    },
    message: "User has been logged in successfully",
    status: true,
  });
};

module.exports = {
  signup,
  signin,
};
