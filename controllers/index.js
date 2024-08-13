// controllers/index.js
const fs = require('fs');
const path = require('path');

// Load the products data from the JSON file
const productsFilePath = path.join(__dirname, '../products.json');
const productsData = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const getProducts= async (req,res)=>{
    res.status(200).json({ msg:"geeting products"})
}

const getProductTesting= async (req,res)=>{
    res.status(200).json({msg:"geeting testing  products"})
}
console.log("product data loaded",productsData)
const searchProducts = async (req, res) => {
    const searchTerm = req.query.q; // Extract the query parameter 'q' from the request
    
    if (!searchTerm) {
        // Return a bad request response if the search term is missing
        return res.status(400).json({ error: 'Missing search term. Please provide a search term in the query parameter.' });
    }
    
    // Filter products by checking if the product title includes the search term
    const results = productsData.products.filter(product =>
        product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Respond with the filtered results
    res.status(200).json({ results });
};


module.exports={getProducts,getProductTesting,searchProducts}