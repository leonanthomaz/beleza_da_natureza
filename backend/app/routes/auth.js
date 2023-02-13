const router = require('express').Router()
const User = require("../models/User");
const bcrypt = require("bcrypt");
require('dotenv').config()

//Cadastro
router.post("/register", async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    const telephone = req.body.telephone
    const address = req.body.address

    if(!name){
        return res.status(403).json({ msg: "Nome obrigatório!"})
    }
    if(!email){
        return res.status(403).json({ msg: "E-mail obrigatório!"})
    }
    if(!telephone){
        return res.status(403).json({ msg: "Telefone obrigatório!"})
    }
    if(!address){
        return res.status(403).json({ msg: "Endereço obrigatório!"})
    }
    if(!password){
        return res.status(403).json({ msg: "Campo senha requerido!"})
    }
    if(password !== confirmPassword){
        return res.status(403).json({ msg: "Senhas não conferem"})
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            telephone: req.body.telephone,
            address: req.body.address,
            password: hashedPassword
        });
        await newUser.save();
        res.status(200).json({msg: 'Usuário inserido com sucesso!'});
        } catch (err) {
        res.status(500).json({msg: 'Erro ao cadastrar.. Tente novamente...'});
        }
});

//Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user){
            return res.status(404).json({ msg: "Usuário não encontrado"})
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword){
            return res.status(404).json({ msg: "Erro ao logar. Tente novamente"})
        }
        // const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({msg: 'Erro ao logar.. Tente novamente...'});
    }
});

module.exports = router