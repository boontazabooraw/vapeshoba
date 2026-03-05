// import shopsJson from '../mock_data.json' with {type: 'json'}
import supabase from '../config/supabase.js';

export const getShops = async (req, res) => {

    try {
        const { municipality, minRating, sortby = "municipality", order, page = 1, limit = 100 } = req.query;

        //Pagination
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        if (isNaN(pageNum) || pageNum < 1) {
            return res.status(400).json({ error: "Invalid Page Number" });
        }
        if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
            return res.status(400).json({ error: "Limit must be between 1 and 100 only" })
        }

        //Sorting validation
        const allowedSorts = ['rating', 'name', 'municipality', 'id'];
        if (!allowedSorts.includes(sortby)) {
            return res.status(400).json({ error: "Invalid sorting variable" });
        }

        let query = supabase.from('shops').select('*');

        //Municipality filter
        if (municipality) {
            const formatted = municipality.replace(/_/g, " ");
            query = query.ilike('municipality', formatted);
        }

        //Rating filter
        if (minRating) {
            const ratingNum = parseFloat(minRating);
            if (isNaN(ratingNum)) {
                return res.status(400).json({ error: "minRating must be a number" })
            }
            query = query.gte('rating', parseFloat(ratingNum));
        }

        //Pagination
        const start = (pageNum - 1) * limitNum;
        const end = start + limitNum - 1;
        query = query.range(start, end);

        // Sorting
        const ascending = order ? order.toLowerCase() === "asc" : true;
        query = query.order(sortby, { ascending })

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