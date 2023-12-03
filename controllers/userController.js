const { User } = require("../db");

const getAllUser = async (req, res) => {
    try {
        const query1 = User.find();

        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * pageSize;
        const total = await User.countDocuments();

        const pages = Math.ceil(total / pageSize);

        const query = await query1.skip(skip).limit(pageSize);
        console.log(query)
         
        const result = await query;

        res.status(200).json({
        status: "success",
        count: result.length,
        page,
        pages,
        data: result,
        });

    } catch(error){
        console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });



    }




}


module.exports={ getAllUser }
