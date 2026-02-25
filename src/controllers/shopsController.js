export const getShops = async (req, res) => {
    const shops = [
        {
            id: 1,
            name: "Testicle Shop",
            city: "Balanga City"
        },
    ]

    res.json(shops);
}