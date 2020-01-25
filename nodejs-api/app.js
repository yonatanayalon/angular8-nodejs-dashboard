const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
const bodyParser = require('body-parser');
const filePath = __dirname + "/" + "customers.json"
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
  next();
});

app.get('/customers', (req, res) => {
    fs.readFile( filePath, 'utf8', (err, data) => {
      res.end( data );
    });
})

app.get('/customers/:id', (req, res) => {
  fs.readFile( filePath, 'utf8', (err, data) => {
    let jsonData = JSON.parse(data);
    let customer = jsonData.filter((customer) => {
        return customer.id === req.params.id;
    })[0];
    res.end( JSON.stringify(customer) );
  });
})

app.post('/customers/newCustomer', (req, res) => {
  fs.readFile( filePath, 'utf8', (err, data) => {
    let customersData = JSON.parse(data);
    let newCustomer = req.body;
    newCustomer.id = customersData.length.toString();
    customersData.push(newCustomer);

    fs.writeFile(filePath, JSON.stringify(customersData), (err) => {
      if(err) {
          return console.log(err);
      }
      res.end( JSON.stringify({status: "Saved new customer"}) );
    }); 
  });
})

app.put('/customers/:id', (req, res) => {
  fs.readFile( filePath, 'utf8', (err, data) => {
    let customersData = JSON.parse(data);
    let newCustomersData = customersData.map((customer) => {
        if (customer.id === req.body.id) {
          customer = req.body;
        };
        return customer;
    });
    fs.writeFile(filePath, JSON.stringify(newCustomersData), (err) => {
      if(err) {
          return console.log(err);
      }
      res.end( JSON.stringify({status: "Updated existing customer"}) );
    }); 
  });
})

app.delete('/customers/:id', (req, res) => {
  fs.readFile( filePath, 'utf8', (err, data) => {
    let customersData = JSON.parse(data);
    let newCustomersData = customersData.filter((customer) => {
        if (customer.id !== req.params.id) {
          return true;  
        };
        return false;
    });
    fs.writeFile(filePath, JSON.stringify(newCustomersData), (err) => {
      if(err) {
          return console.log(err);
      }
      res.end( JSON.stringify({status: "Deleted customer"}) );
    }); 
  });
})

app.listen(port);
console.log('NodeJs  RESTful API server started on: ' + port);