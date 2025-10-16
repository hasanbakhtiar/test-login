const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {

        const user = await User.findOne({ where: { email: req.body.email } });
        if (user) {
            const isSuccess = await bcrypt.compare(req.body.password, user.password);
            const userId = user.id;
            if (isSuccess) {
                const user = await User.update({
                    refreshToken: jwt.sign({ id: userId }, "secret", {
                        expiresIn: "7d",
                    })
                }, {
                    where: { id: userId },
                });;
                res.status(200).json({
                    message: "Login is successfully",
                    data: {
                        fullname: user.fullname,
                        email: user.email,
                    },
                });
            } else {
                res
                    .status(403)
                    .send("Email or password is worng!");
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.register = async (req, res) => {
    try {

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const dataBody = {
            ...req.body,
            password: hashPassword,
            role: "user",
        };
        const user = await User.create(dataBody);
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}