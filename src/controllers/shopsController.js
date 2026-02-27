import shopsJson from '../mock_data.json' with {type: 'json'}

export const getShops = async (req, res) => {

    const { municipality, minRating } = req.query;

    const shops = shopsJson;

    let filtered = shops;

    if (municipality) {
        const query = municipality.replace(/_/g, ' ').trim().toLowerCase();
        filtered = filtered.filter(shop =>
            shop.municipality.trim().toLowerCase() === query
        );
    }

    if (minRating) {
        filtered = filtered.filter(shop => shop.rating >= parseFloat(minRating));
    }

    res.json(filtered);
}