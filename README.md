# menubuilder
node api to build weekly menu

## Start server
``` 
npm start
``` 

## test
```
npm test
```

## cli
* `npm run help`: list cli commands
* `npm run generate`: generates the menu for the current week
* `npm run add --category <category> --name <name>`: adds a dish to the database

## API Endpoints

* POST `/menu`: generates menu for the current week
* GET `/menu`: returns current week menu
* PUT `/menu/replace/{slot}`: replaces the dish for the specified slot (weekdays for now)
* POST `/dish`: creates a dish to be included in the menu
