const helper = require("../helpers/response");
const authModel = require("../models/auth");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../configs");

module.exports = {
  register: async (req, res) => {
    const setData = req.body;
    const salt = genSaltSync(10);
    setData.password = hashSync(setData.password, salt);
    try {
      const result = await authModel.registerModel(setData);
      return helper.response(res, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
  login: async (req, res) => {
    try {
      const username = req.body.username;
      const result = await authModel.getUserByUsername(username);
      if (result[0]) {
        const user = result[0];
        const checkPass = compareSync(req.body.password, user.password);
        if (checkPass) {
          delete user.password;
          const token = jwt.sign({ user: user }, config.secretKey, {
            expiresIn: "1h",
          });
          result[0].token = token;
          return helper.response(res, "success", result, 200);
        }
        return helper.response(
          res,
          "fail",
          "Username Or Password Is Wrong!",
          403
        );
      }
      console.log(result);
      return helper.response(res, "fail", "Data Not Found", 404);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
};
