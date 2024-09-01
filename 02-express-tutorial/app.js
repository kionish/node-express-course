console.log('Express Tutorial');

// Importing the express module and creating app by calling express()
const express = require('express');

// Import products from data.js
const { products, people } = require('./data');

const app = express();
const peopleRouter = require('./routes/people');

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().getFullYear()}`);
  next();
};

// Use logger middleware for all routes
app.use(logger);

// Use the people router for /api/v1/people routes
app.use('/api/v1/people', peopleRouter);

app.use(express.static('./methods-public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use(express.static('./public'));

// Adding an app.get statement to handle /api/v1/test
app.get('/api/v1/test', (req, res) => {
  res.json({ message: 'It worked!' });
});

// Adding an app.get statement to handle /api/v1/products
app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

// Adding an app.get statement to handle /api/v1/products/:productID
app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID, 10);

  // Check if idToFind is a valid number
  if (isNaN(idToFind)) {
    return res.status(404).json({ message: 'That product was not found.' });
  }

  const product = products.find((p) => p.id === idToFind);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Adding an app.get statement to handle /api/v1/query
app.get('/api/v1/query', (req, res) => {
    const { maxPrice, limit } = req.query;
    let filteredProducts = [...products];
  
  // Filter by maximum price (maxPrice)
  if (maxPrice) {
    const maxPriceValue = parseFloat(maxPrice);
    if (!isNaN(maxPriceValue)) {
      filteredProducts = filteredProducts.filter((product) => 
        product.price <= maxPriceValue
      );
    }
  }

  // Filter by products costing more than $10
  filteredProducts = filteredProducts.filter((product) => 
    product.price > 10
  );
  
    if (limit) {
      filteredProducts = filteredProducts.slice(0, parseInt(limit, 10));
    }
  
    res.json(filteredProducts);
  });

app.get('/', (req, res) => {
  console.log('User hit the resource');
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// Handle page not found conditions
app.all('*', (req, res) => {
  res.status(404).send('Page not found');
});


// Tell the server to listen for requests on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});