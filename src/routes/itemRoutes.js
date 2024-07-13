import express from 'express';
import { 
    listItems, 
    createItem, 
    deleteItem 
} from '../controllers/itemsController.js';

const router = express.Router();

router.get("/:collectionId/items", listItems);
router.post("/:collectionId/items", createItem);
router.delete("/:collectionId/items/:itemId", deleteItem);

export default router;
