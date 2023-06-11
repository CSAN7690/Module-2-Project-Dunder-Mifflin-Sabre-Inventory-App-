# Dunder Mifflin/Sabre Inventory 🏢📝

Welcome to the Dunder Mifflin/Sabre application! Regional Manager, Dwight Schrute is having me make this application which allows you to manage a list of items, perform actions like creating, deleting, and updating items, and even simulate a shopping cart functionality.

# Features ✨
📄. A user can create a new item. 
📄. A user can see a list of all the items.
📄. A user can see the details of one item.
📄. A user can delete an item.
📄. A user can update an item.
📄. When a user performs an action like creating or deleting an item, the data file is updated correctly. If the JSON is malformed, there is some logic to prevent writing to the file and thus corrupting the data file.
📄. When a user creates an item a unique id is assigned to the new item.
📄. User can add items to the shopping cart 🛒 and see the total price and total number of each item 
📄 User can emoty the shopping cart.

# Instructions 📝
1. Fork and clone this repository. 
2. Navigate to the cloned repository's directory on your command line.
3. Configure Data File: Open the data.json file located in the project directory. This file will store the item data. You can pre-populate it with some sample data or leave it empty initially.
4. Run the Application: npm start

# Application Usage 💻
⚪️ Create a New Item: npm run create
⚪️ List all Items: npm run list
⚪️ View All Item Details: npm run view <item-id>
⚪️ Delete an Item: npm run delete <item-id>
⚪️ Update an Item: npm run update <item-id>
⚪️ Add Items to Cart 🛒: npm run add-to-cart <item-id> <quantity>
⚪️ Cancel the Cart 😩🛒 : npm run cancel-cart
* <item-id> represents the unique ID of an item, <quantity> represents the desired quantity of items for the cart. 