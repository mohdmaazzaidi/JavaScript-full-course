
// let Product = {
//     company : 'Mango',
//     'item-name' : 'T-shirt',
//     price : 499,
// };
// console.log(Product);
// console.log(Product.company);
// console.log(Product.item_name);
// console.log(Product.price);
// Product.price = 599;
// console.log(Product);

// console.log(Product['company']);
// console.log(typeof Product);

// console.log(Product);
// console.log(Product['item-name']);
// delete Product['company'];
// Product.price = 599;
// Product.color = 'Black';
// Product.size = 'M';
// Product['categor of product'] = 'Clothing';
// console.log(Product);


// let Product = {
//     company : 'Mango',
//     'item-name' : 'T-shirt',
//     price : 499,
//     rating : {
//         stars : 4.5,
//         reviews : 57,
//     },
//     display : function(){
//         console.log(`The price of function is ₹${Product.price}`);

//     }
// };

// Product.display();
// console.log(Product);


// console.log('Hii My name is Maaz'.length);
// console.log('Hii My name is Maaz'.replace('Hii','Hello!'));

// OBJECT REFERENCES

// let a = 20;
// let b = a;

// b = 34;

// console.log(a);
// console.log(b);


// let product = {
//     company : 'Mango',
//     'item-name' : 'T-shirt',
//     price : 499,
// };

// let product2 = product;
// product2.price = 1000;

// console.log(product);
// console.log(product2);


// let product = {
//     company : 'Mango',
//     'item-name' : 'T-shirt',
//     price : 499,
// };

// let product2 = {
//     company : 'Mango',
//     'item-name' : 'T-shirt',
//     price : 499,
// };

// console.log(product == product2); //THIS WILL RETURN FLASE 


// 

// let product = {
//     company: 'Mango',
//     'item-name': 'T-shirt',
//     price: 499,
// };


// let { company, price } = product;
// console.log(company);
// console.log(price);

// CREATE A OBJECT TO REPRESENT A PRODUCT FROM MYNTRA 

// let product = {
//     company: 'Mango',
//     'item_name': 'T-shirt',
//     price: 499,
//     rating: {
//         Stars: 4.5,
//         reviews: 87,
//     },
// };

// let product2 = product;

// console.log(product.item_name);

// console.log(product['item_name']);

// product2.price = 1000;

// console.log(product);
// console.log(product2);


// let msgForYou = {
//     message : 'Good job',
//     Status : 'Completed',
// };

// console.log(msgForYou);
// let {message,Status} = msgForYou;
// console.log(message);
// console.log(Status);



// let product = {
//     company: 'Mango',
//     'item_name': 'T-shirt',
//     price: 499,
//     size : 'M',
//     rating: {
//         Stars: 4.5,
//         reviews: 87,
//     },
// }
// let product2 = {
//     company: 'Mango',
//     'item_name': 'T-shirt',
//     price: 499,
//     size : 'M',
//     rating: {
//         Stars: 4.5,
//         reviews: 87,
//     },
// }
// let product3 = {
//     company: 'Mango',
//     'item_name': 'T-shirt',
//     price: 499,
//     size : 'M',
//     rating: {
//         Stars: 4.5,
//         reviews: 87,
//     },
// }

// product.discount = 20;
// delete product.size;

// function isIdenticalProduct(product, product2) {
//     if (typeof product !== 'object' || typeof product2 !== 'object') {
//         console.warn('Parameter passed was not object');
//         return false;
//     } 
//     if (product == product2) {
//         return true;
//     }
//     if(product.company == product2.company && product.price == product2.price && product.size == product2.size && product.item_name == product2.item_name && product.rating.Stars == product2.rating.Stars && product.rating.reviews == product2.rating.reviews ){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isIdenticalProduct(product, ''))
// console.log(isIdenticalProduct(product, product2))
// console.log(isIdenticalProduct(product3, product2))

// console.log(product);




let product = {
    company: 'Mango',
    'item_name': 'T-shirt',
    price: 499,
    size: 'M',
    rating: {
        Stars: 4.5,
        reviews: 87,
    },
};

let product2 = {
    company: 'Mango',
    'item_name': 'T-shirt',
    price: 499,
    size: 'M',
    rating: {
        Stars: 4.5,
        reviews: 87,
    },
};

let { price } = product;
console.log(price);
console.log(product == product2);
console.log(product.company == product2.company);