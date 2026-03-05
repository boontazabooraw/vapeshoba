// import shopsJson from '../mock_data.json' with {type: 'json'}
import supabase from '../config/supabase.js';

export const getShops = async (req, res) => {

    try {
        const { municipality, minRating } = req.query;

        let query = supabase.from('shops').select('*');

        if (municipality) {
            const formatted = municipality.replace(/_/g, " ");
            query = query.ilike('municipality', formatted);
        }

        if (minRating) {
            const ratingNum = parseFloat(minRating);
            if (isNaN(ratingNum)) {
                return res.status(400).json({ error: "minRating must be a number" })
            }
            query = query.gte('rating', parseFloat(ratingNum));
        }

        const { data, error } = await query;

        if (error) {
            return res.status(500).json({ Error: error.message });
        }

        res.json({
            success: true,
            data,
        });
    } catch (err) {
        res.status(500).json({
            error: "Server error",
            details: err.message,
        });
    }



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