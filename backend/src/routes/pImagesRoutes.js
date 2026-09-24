import express from 'express'
import { deletePimageController, getPImageController, getPImagesControllers, postPimageController, updatePimageController } from '../controllers/pImagesController.js'
const router = express.Router()
router.get('/', getPImagesControllers)
router.get("/:id", getPImageController)
router.post("/", postPimageController)
router.patch("/:id", updatePimageController)
router.delete("/:id", deletePimageController)
export default router