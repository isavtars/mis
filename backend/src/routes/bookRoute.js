 import { Router } from "express";
import bookmodel from "../../database/models/bookadd.models.js";
const router = Router();
import multer from "multer"
import  BookController from "../controller/bookController.js"


let imageName;

  //image sender to the data base and and it store locally
  //multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
      imageName =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "-" +
        file.originalname.trim();
      cb(null, imageName);
    },
  });
  
  
  const upload = multer({ storage: storage })    //storage: storage = storage destructuring

  const bookcontroller= new BookController();//make objects


  ///the routes shows thath http://localhost:8000/book
  //
router.get("/",bookcontroller.getbook)

//C
 ///the routes shows thath http://localhost:8000/book/add
router.post("/add",upload.single("image"),(req,res)=>{
    bookcontroller.addbook(req,res,imageName)
})


//R
router.get("/:id",bookcontroller.getbyId)

//U
router.patch("/update/:id",upload.single("image"),(req,res)=>{
  bookcontroller.updatebyId(req,res,imageName)
})
//D
router.delete("/delete/:id",bookcontroller.userdeleteById)


//search all by fillter  

router.get("/search/all",bookcontroller.searchall)


export default router;