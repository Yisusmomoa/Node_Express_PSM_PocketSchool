const express=require('express');
const router=express.Router();

const {
    getUsers,
    register,
    login,
    getUserById,
    updateUser,
    updatePic

}=require('../controllers/usuarios.js');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({ storage: storage });
v
router.get('/users/', getUsers)
router.post('/users/register', register);
router.post('/users/login', login);
router.get('/users/:userId', getUserById);
router.put('/users/profilePic/:userId', updatePic)
router.put('/users/:userId', updateUser)
module.exports=router;