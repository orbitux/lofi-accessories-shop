import express from 'express'
import { deleteAddressController, getAddressesController, getAllAddressesController, postAddressController, updateAddressController } from '../controllers/addressesController.js'
const router = express.Router()
router.get('/', getAllAddressesController)
router.get('/:id', getAddressesController)
router.post('/', postAddressController)
router.patch('/:id', updateAddressController)
router.delete('/:id', deleteAddressController)
export default router