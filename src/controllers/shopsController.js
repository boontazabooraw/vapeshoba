export const getShops = async (req, res) => {

    const { city, minRating } = req.query;

    const shops = [
        {
            id: 1,
            name: "Mr. Bubusuk Vape Shop",
            city: "Orani",
            province: "Bataan",
            address: "162 National Rd",
            contact: "+63 936 227 5097",
            rating: 4.0
        },
        {
            id: 2,
            name: "Boss Ringo's Vape Shop",
            city: "Orani",
            province: "Bataan",
            address: "16 Earth St",
            contact: "+63 916 437 8030",
            rating: 5.0
        },
        {
            id: 3,
            name: "Iceman Vape Shop",
            city: "Orani",
            province: "Bataan",
            address: "Orani Town Center",
            contact: null,
            rating: 5.0
        },
        {
            id: 4,
            name: "Chill Vape Grind",
            city: "Orani",
            province: "Bataan",
            address: "362 Mulawin Rd",
            contact: null,
            rating: 4.0
        },
        {
            id: 5,
            name: "Just Vape",
            city: "Samal",
            province: "Bataan",
            address: "Brgy East Calaguiman",
            contact: "+63 921 272 4522",
            rating: 4.5
        },
        {
            id: 6,
            name: "Vape Like A Boss",
            city: "Mariveles",
            province: "Bataan",
            address: "P. Zamora St",
            contact: null,
            rating: 4.5
        },
        {
            id: 7,
            name: "Thrash Vape",
            city: "Hermosa",
            province: "Bataan",
            address: "Purok 2",
            contact: "+63 956 557 1809",
            rating: 5.0
        },
        {
            id: 8,
            name: "Clouds Of Vape",
            city: "Abucay",
            province: "Bataan",
            address: "Omboy Proper",
            contact: "+63 995 573 9059",
            rating: 4.0
        },
        {
            id: 9,
            name: "Devan Hog Farm (listed as vape/tobacco shop)",
            city: "Orani",
            province: "Bataan",
            address: "Service Road",
            contact: "+63 998 996 3305",
            rating: 5.0
        },
        {
            id: 10,
            name: "Just Vape (alternate listing)",
            city: "Samal",
            province: "Bataan",
            address: "East Calaguiman",
            contact: "+63 909 794 6639",
            rating: 4.5
        }
    ];

    let filtered = shops;

    if (city) {
        filtered = filtered.filter(shop => shop.city.toLowerCase() === city.toLowerCase());
    }

    if (minRating) {
        filtered = filtered.filter(shop => shop.rating >= parseFloat(minRating));
    }

    res.json(filtered);
}