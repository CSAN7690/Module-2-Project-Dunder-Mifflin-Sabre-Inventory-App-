//  Import necessary modules and dependencies
const readline = require('readline');
const fs = require('fs');

// Read the JSON data from the file
const data = require('./data.json');
const { stringify } = require('querystring');

// Function to save data back to the file
const saveDataToFile = () => {
    fs.writeFileSync('./data.json', JSON, stringify(data, null, 2));
};

//Function for creating a new item.
const createItem = async () => {
    const name = await promptUserInput('Enter the name of the item:');

    const newItem = {
        id: generateUniqueId(),
        name,
        priceInCents
    };

    data.push(newItem);
    saveDataToFile();
    console.log('Item created successfully.');
};

//
const listItems = () => { };

//
const viewItem = (itemID) => { };

//
const updateItem = (itemID) => { };

//
const addToCart = (itemID, quantity) => { };

//
const cancelCart = () => { };