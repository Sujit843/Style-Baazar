// multer :- jisme ham ak api banayege , jaha admin products ko add kr sakega 
// use cloudnary setup 

import multer from "multer";

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "./public") // jo image upload hogi wo public me aakar store hogi or cloudnary waha se lega us img ko
    },
    filename:(req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const upload = multer({storage})

export default upload;