export const listCollections = async (req, res) => {
    try {
        const collections = await req.webflow.collections.list(req.params.siteId);
        res.json({ collections });
    } catch (error) {
        console.error('Error fetching collections:', error);
        res.status(500).send('Failed to fetch collections');
    }
};

export const getCollection = async (req, res) => {
    try {
        const collection = await req.webflow.collections.get(req.params.collectionId);
        res.json(collection);
    } catch (error) {
        console.error('Error fetching collection:', error);
        res.status(500).send('Failed to fetch collection');
    }
};

export const createCollectionWithFields = async (req, res) => {
    // Your logic to create a collection with fields
};

export const deleteCollection = async (req, res) => {
    try {
        const result = await req.webflow.collections.delete(req.params.collectionId);
        res.json(result);
    } catch (error) {
        console.error('Error deleting collection:', error);
        res.status(500).send('Failed to delete collection');
    }
};
