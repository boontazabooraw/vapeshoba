import shopsJson from '../mock_data.json' with {type: 'json'}
import supabase from '../config/supabase.js';

export const getShops = async (req, res) => {

    const { municipality, minRating } = req.query;

    let query = supabase.from('shops').select('*');

    if (municipality) {
        query = query.eq('municipality', municipality);
    }

    if (minRating) {
        query = query.gte('rating', parseFloat(minRating));
    }

    const { data, error } = await query;

    if (error) {
        return res.status(500).json({ Error: error.message });
    }

    res.json(data);

    /*
    DEV ENVIRONMENT TESTING - LOCAL JSON FILE

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
    */
}