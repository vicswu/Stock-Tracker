const typeorm = require('typeorm');

class Stock {
    constructor(id, name, price, ratio, opinion) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.ratio = ratio;
        this.opinion = opinion;
    }
}

const EntitySchema = require("typeorm").EntitySchema;

const StockSchema = new EntitySchema({
    name: "Stock",
    target: Stock,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        price: {
            type: "varchar"
        },
        ratio: {
            type: "varchar"
        },
        opinion: {
            type: "varchar"
        }
    }
});

async function getConnection() {
    return await typeorm.createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "822533VictorWu$",
        database: "Stock_Tracker",
        synchronize: false,
        logging: false,
        entities: [
            StockSchema
        ]
    })
}

async function getAllStocks() {
    const connection = await getConnection();
    const stockRepo = connection.getRepository(Stock);
    const stocks = await stockRepo.find();
    connection.close();
    return stocks;
}


async function insertStock(name, price, ratio, opinion) {
    const connection = await getConnection();

    // create
    const stock = new Stock();
    stock.name = name;
    stock.price = price;
    stock.ratio = ratio;
    stock.opinion = opinion;

    // save
    const stockRepo = connection.getRepository(Stock);
    const res = await stockRepo.save(stock);
    console.log('saved', res);

    // return new list
    const allStocks = await stockRepo.find();
    connection.close();
    return allStocks;

}

module.exports = {
    getAllStocks,
    insertStock
}