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

<img width="1440" alt="Screen Shot 2020-06-24 at 1 32 35 PM" src="https://user-images.githubusercontent.com/59456972/85610603-23452280-b625-11ea-9d1d-9c0a8b798e54.png">

Now, you can go to any Market Beat page you want with the specific stock you want to follow.

<img width="1439" alt="Screen Shot 2020-06-24 at 1 34 35 PM" src="https://user-images.githubusercontent.com/59456972/85610991-86cf5000-b625-11ea-865c-f3d079a5b51f.png">
<img width="1440" alt="Screen Shot 2020-06-24 at 1 34 49 PM" src="https://user-images.githubusercontent.com/59456972/85611025-8df65e00-b625-11ea-83c1-11e7f92ae559.png">

The webscraper will access this link and retrieve the necessary information from the source code using the XPath.

<img width="1440" alt="Screen Shot 2020-06-24 at 1 35 07 PM" src="https://user-images.githubusercontent.com/59456972/85611260-c85ffb00-b625-11ea-82eb-fd972a2ffd42.png">

Once you click the submit you must refresh the page to load the newly added stock. These stock will be kept in the database and load when you open the app later on.

<img width="1440" alt="Screen Shot 2020-06-24 at 1 35 23 PM" src="https://user-images.githubusercontent.com/59456972/85611424-f04f5e80-b625-11ea-8879-1a79eef5f3a9.png">

## License
[MIT](https://choosealicense.com/licenses/mit/)
