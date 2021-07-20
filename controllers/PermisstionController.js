const AccountSchema = require("../models/account");
const jwt = require('jsonwebtoken');

class PermisstionController{


    // middleware check login
    checkLogin(req, res, next){
        try{
            // console.log(req.headers);
            var token = req.cookies.token;
            var idUser = jwt.verify(token, 'quyetdaica');
            AccountSchema.findOne({
                _id: idUser
            })
            .then(data => {
                // console.log(data);
                if(data){
                    req.data = data;
                    next();
                }
                else{
                    res.json('NOT PERMISSTION');
                }
            })
            .catch(error => {

            })
        }
        catch(error){
            res.redirect('/login');
        }
    }

    // middleware check permisstion
    checkPermisstionStudent(req, res, next){
        var role = req.data.role;
        if(role >= 1){
            next();
        }
        else{
            res.json('NOT PERMISSTION!');
        }
    }

    checkPermisstionTeacher(req, res, next){
        var role = req.data.role;
        if(role >= 2){
            next();
        }
        else{
            res.json('NOT PERMISSTION!');
        }
    }

    checkPermisstionAdmin(req, res, next){
        var role = req.data.role;
        if(role >= 3){
            next();
        }
        else{
            res.json('NOT PERMISSTION!');
        }
    }



    // [GET] /student
    student(req, res, next){
        res.send('student');
    }

    // [GET] /teacher
    teacher(req, res, next){
        res.send('teacher');
    }

    // [GET] /admin
    admin(req, res, next){
        res.send('admin');
    }



    

}

module.exports = new PermisstionController;