const { error } = require('console');
const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');

const dataPath = './data.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Read the JSON data from the file
/* let data = [];
try {
    data = JSON.parse(fs.readFileSync(dataPath));
} catch (error) {
    console.error('Error reading data from file:', error);
}
*/

// Function to save data back to the file
saveDataToFile = () => {
    fs.writeFileSync('./data.json', JSON, stringify(data, null, 2));
};

// Function to create a new item
function createNewItem() {
    // Prompt the user for input
    const name = prompt("Enter the name of the item:");
    const price = parseFloat(prompt("Enter the price of the item:"));
    const inStock = prompt("Is the item in stock? (yes/no):");

    // Generate a unique ID for the new item
    const newItemId = generateUniqueId();

    // Create the new item object
    const newItem = {
        id: newItemId,
        name: name,
        price: price,
        inStock: inStock === "yes",
    };

    // Add the new item to the data array
    data.push(newItem);

    console.log("New item created successfully!");
}

//// Function to delete an item `␡`
function deleteItem() {
    rl.question("Enter the ID of the item to delete: ", (itemID) => {
        // Handle deletion logic here using the provided itemID
        console.log(`Deleting item with ID: ${itemID}`);
        rl.close();
    });
}

deleteItem();

//Function to list all items 📝
function listAllItems() {
    console.log("List of all items:");

    // Iterate over the data array and log each item
    data.forEach((item) => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Price: ${item.price}, In Stock: ${item.inStock}`);
    });
}

// Function to update an item ✨
function updateItem() {
    // Prompt the user for the item ID to update
    const itemId = prompt("Enter the ID of the item to update:");

    // Find the item with the provided ID in the data array
    const itemToUpdate = data.find((item) => item.id === itemId);

    if (itemToUpdate) {
        // Prompt the user for the updated properties
        const newName = prompt("Enter the updated name of the item:");
        const newPrice = parseFloat(prompt("Enter the updated price of the item:"));
        const newInStock = prompt("Is the item in stock? (yes/no):");

        // Update the item properties
        itemToUpdate.name = newName;
        itemToUpdate.price = newPrice;
        itemToUpdate.inStock = newInStock === "yes";

        console.log("Item updated successfully!");
    } else {
        console.log("Item not found!");
    }
}

// Function that will handle saving the data to the file 🛟
function saveDataToFile(data) {
    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile("data.json", jsonData, (err) => {
        if (err) {
            console.error("Error saving data to file:", err);
        } else {
            console.log("Data saved to file successfully!");
        }
    });
}

// Function to handle adding items to cart 🛒
function addItemToCart() {
    const itemID = prompt("Enter the ID of the item to add to the cart:");
    const quantity = parseInt(prompt("Enter the quantity to add to the cart:"));

    const itemToAdd = data.find((item) => item.id === itemID);

    if (itemToAdd) {
        itemToAdd.shoppingcart += quantity;

        console.log(`Added ${quantity} ${itemToAdd.name}(s) to the cart.`);
    } else {
        console.log("Item not found!");
    }
}

// Function to calculate the total price & number of each item in the shopping cart 💯 🛒
function calculateCartTotal() {
    let totalPrice = 0;
    let totalItmes = 0;

    data.forEach((item) => {
        if (item.shoppingCart > 0) {
            totalPrice += item.price * item.shoppingCart;
            totalItmes += item.shoppingCart;
            console.log(
                `${item.name}: Quantity: ${item.shoppingCart}, Price: $${item.price.toFixed(2)}, Subtotal: $${(
                    item.price * item.shoppingCart
                ).toFixed(2)}`
            );
        }
    });
    console.log(`Total Price: $${totalPrice.toFixed(2)}`);
    console.log(`Total Items: ${totalItmes}`);
}

// Function to empty the shopping cart 🗑️ 🛒
function emptyCart() {
    // Set the data array to an empty array
    data = [];
    console.log("Shopping cart empted! 🗑️");
}

