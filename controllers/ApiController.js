const AccountSchema = require("../models/account");

class SiteController{

    // [GET] /api/user
    getUser(req, res, next){
        var page = req.query.page;
        if(page){
            page = parseInt(page);

            if(!(page > 0)){
                page = 1;
            }

            var countPass = (page-1) * 2;
            AccountSchema.find({})
            .skip(countPass)
            .limit(2)
            .then(data => {
                AccountSchema.countDocuments({})
                .then(total => {
                    total = Math.ceil(total/2);
                    res.json({
                        total: total,
                        data: data
                    });
                })
            })
            .catch(next);
        }
        else{
            AccountSchema.find({})
            .then(data => {
                AccountSchema.countDocuments({})
                .then(total => {
                    total = Math.ceil(total/2);
                    res.json({
                        total: total,
                        data: data
                    });
                })
            })
            .catch(next);
        }
        

        
    }



    // [GET] /api/info
    getInfo(req, res, next){
        var page = req.query.page;
        page = parseInt(page);

        if(!(page > 0)){
            page = 1;
        }

        var countPass = (page-1) * 2;
        AccountSchema.find({})
        .skip(countPass)
        .limit(2)
        .then(data => {
            console.log(data);
            AccountSchema.countDocuments({})
            .then(total => {
                total = Math.ceil(total/2);
                res.render("info", {
                    total: total,
                    data: data
                });
            })
        })
        .catch(next);
    }
    

}

module.exports = new SiteController;