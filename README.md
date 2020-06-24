# Stock-Tracker

A Javascript app that web scrapes the Market Beat Stock Market News and Research Tool for information regarding price, P/E ratio and experts' consensus.

## Dependencies

Node v12.14.1
MySQL v.8.020
npm

## Installation

To run this app, you must install a few packages with npm package manager.

```bash
npm install express
```

```bash
npm install body-parser
```

```bash
npm install puppeteer
```

```bash
npm install mysql
```

```bash
npm install typeorm
```

You must also create a MySQL database.
```bash
/usr/local/mysql/bin/mysql -u root -p
```
```bash
mysql> CREATE DATABASE Stock_Tracker;
```
## Usage

Once everything is set up correctly, you can use Stock Tracker to keep track of a specific stock's price, P/E ratio and expert opinion thanks to its web scraping capabilities. The data is taken from Market Beat and kept in the MySQL database for future loading.



## License
[MIT](https://choosealicense.com/licenses/mit/)
