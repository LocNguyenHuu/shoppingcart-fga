var Product = require('../models/product');

var mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connect('mongodb://localhost/shoppingsite');


var products = [
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/sku/10633/1/10633182_1GG.jpg',
    title: 'Jogo Pes 2016 - Ps4',
    description: 'A',
    price: 269
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/21014/3/21014382_1SZ.jpg',
    title: 'Game Tom Clancys Ghost Recon Wildlands Ps4',
    description: 'B',
    price: 209
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/127373/6/127373656SZ.jpg',
    title: 'Game Lego Star Wars: O Despertar Da Força - PS4',
    description: 'C',
    price: 169
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/122163/8/122163887SZ.jpg',
    title: 'Game Mortal Kombat X - PS4',
    description: 'D',
    price: 79
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/124776/7/124776759_1GG.jpg',
    title: "Game - Uncharted 4: A Thief's End - PS4",
    description: "E",
    price: 108
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/126036/2/126036287SZ.jpg',
    title: "Game - The Witcher 3: Wild Hunt - PS4",
    description: "D",
    price: 99
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}