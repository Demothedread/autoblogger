import express from 'express';
import { 
    listCollections, 
    getCollection, 
    createCollectionWithFields, 
    deleteCollection 
} from '../controllers/collectionController.js';

const router = express.Router();

router.get("/:siteId", listCollections);
router.get("/:collectionId/details", getCollection);
router.post("/:siteId", createCollectionWithFields);
router.delete("/:collectionId", deleteCollection);

export default router;
