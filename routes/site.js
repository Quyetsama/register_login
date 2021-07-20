const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();

const siteController = require("../controllers/SiteController");
const permisstionController = require("../controllers/PermisstionController");



router.get("/register", siteController.register);
router.post("/register", siteController.registerSubmit);
router.get("/login", siteController.login);
router.post("/login", siteController.loginSubmit);
router.post("/edit", permisstionController.checkLogin, permisstionController.checkPermisstionAdmin, siteController.edit);
router.get("/logout", (req, res, next) => {
    req.session.destroy();
    // res.clearCookie("key");
    cookie = req.cookies;
    for (var prop in cookie) {
        if (!cookie.hasOwnProperty(prop)) {
            continue;
        }    
        res.cookie(prop, '', {expires: new Date(0)});
    }
    res.redirect('/');
});
router.get("/", permisstionController.checkLogin, siteController.home);

// router.get("/", (req, res, next) =>{
//     try{
//         var token = req.cookies.token;
//         var kq = jwt.verify(token, 'quyetdaica')
//         if(kq){
//             next();
//         }
//     }
//     catch(error){
//         res.redirect("/login");
//     }
// }, siteController.home);



module.exports = router;