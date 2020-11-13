# Mean Stack App for BigCommerce

This is a basic BigCommerce app with two screens, a catalog summary view and list of orders that can be cancelled, built using Mean Stack technologies. 

It's meant to fast track your ability to take a concept for an app to something usable within the BigCommerce control panel. A live store can install this app while it runs locally.

A walkthrough going over the steps taken to produce this app, along with the steps required to create the app in BigCommerce, can be read [here](not_available_yet).

## Installation

Before jumping in, you'll want to make sure you have the system requirements met:
- Mongo ([Installation Guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/))
- Node ([Installation Guide](https://nodejs.org/es/download/))
- Express ([Installation Guide](https://expressjs.com/en/starter/installing.html))
- Angular ([Installation Guide](https://cli.angular.io/))

To install NodeJS/ Angular dependancies:

```bash
npm install
```
To test on a BigCommerce store, you can create a free trial on bigcommerce.com or request a free sandbox store by [signing up to be a tech partner](https://www.bigcommerce.com/partners/).

## Usage
To compile JS assets:
```bash
npm run dev
```
After compiling the app should be reachable at the site you are hosting the app on locally.

When running the app outside of BigCommerce, setting the follow environment variable will cause the app to use the local API credential (also in the .env file):
```
APP_ENV=local
``` 
Likewise, setting it to production will use only the credentials received during the OAuth handshake when the app is install on the BigCommerce store:
```
APP_ENV=production
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT


To run it: npm run build, then npm run serve