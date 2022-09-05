This is a Dynamic Rendering Project, where the data will be dynamically rendered on the UI using JSON file.

To run this file please clone the repository "https://github.com/HariKishore7/StoreInventory.git" from GitHub or else please un-Zip the folder.

Please follow the below steps to run the project in your system.

STEP 1: Please type in terminal by entering into the folder like: npm install

PS E:\StoreInventory> npm install

npm install will install all the dependencies which are present in the package.json to run the project in your system.

STEP 2: Once all the dependencies are installed, type "npm start" like below

PS E:\StoreInventory> npm start

npm start will run the project on the server, by default it will run on "http://localhost:3000/"



Project Expalnation:

On the page rendering it will render all the data from the JSON data.

We can search the product as per the name of the product, ex: black polo or polo.
If we search "Black polo" the products named black polo will render the cards which are only black polo.
If we search "polo" the products named polo will render all the cards which are having name as polo.

The checkboxes can be used to filter the prodct based on the colour, gender, price, type.

If we checkbox colour as black, it will show all the products which are black, if we check Men, it will render all Men products, likewise for price and type.


We can add the products to the "CART" by clicking on the "Add to cart". we can select the same product till the quantity level. 

Every product is having some quantity, for example "blue polo" is having a quantity of 3, so user can add the quantity till 3, after that if he tries to add for the 4th time, the alert will pop-up saying "Item is not available", as the quantity of items are sold. Likewise for each and every item there is a quantity, if the user selects more than that quantity it will pop-up an alert.

If the user deselects it the item count will reduce back to the quantity. If he clciks on "Remove" button the item will be reset to the previous quantity.

Whenever the user is clicking on "Add to cart" or "+" to add the item to cart, the navbar is having a cart logo, it will render how many items are there in the cart.

If we click on the cart logo, it will show all the items that are added in the quantity as well as the price of all the items in the cart.
