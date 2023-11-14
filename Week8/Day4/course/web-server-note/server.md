# HTTP Request

GET - get data
POST - new data
PUT - modify/update data
DELETE - delete data

# REST

http://www.example/send-me-customer-3804-file
http://www.example.com/delete-customer=3815

GET
http://www.example/api/products
http://www.example/api/products/search
POST
http://www.example/api/products
PUT
http://www.example/api/products
DELETE
http://www.example/api/products

GET
http://www.example/api/users
http://www.example/api/users/search
POST
http://www.example/api/users
PUT
http://www.example/api/users
DELETE
http://www.example/api/users

# CRUD

Create -POST
Read- GET
Update - PUT
Delete - DELETE

// semdin method with fetch

fetch("http://localhost:3001/api/products/", {
method: "POST",
headers: {
"Content-type": "appliction/json",
},
body: JSON.stringify({ name: "iCar", price: 888 }),
});
