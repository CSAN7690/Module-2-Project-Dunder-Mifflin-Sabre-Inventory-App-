# Dunder Mifflin/Sabre Project 🏢📝

Welcome to the Dunder Mifflin/Sabre project! This application allows you to manage a list of items, perform actions like creating, deleting, and updating items, and even simulate a shopping cart functionality. Below, you will find the setup instructions and a guide/cheatsheet to help you navigate the application.

## Setup Instructions 🦺

1. **Clone the Repository:** Start by cloning this repository to your local machine using the following command:

   git clone <repository-url>
   

2. **Install Dependencies:** Navigate to the project directory and install the required dependencies by running the following command:
   
   npm install
   

3. **Configure Data File:** Open the `data.json` file located in the project directory. This file will store the item data. You can pre-populate it with some sample data or leave it empty initially.

4. **Run the Application:** To start the application, use the following command:
   
   npm start


## Application Usage 💻

Once the application is up and running, you can use the following commands to interact with it:

- **Create a New Item:** To create a new item, use the command:
  npm run create

- **List all Items:** To see a list of all items, use the command:
  npm run list

- **View Item Details:** To view the details of a specific item, use the command:
  npm run view <item-id>

- **Delete an Item:** To delete an item, use the command:
  npm run delete <item-id>

- **Update an Item:** To update an item, use the command:
  npm run update <item-id>

- **Add Items to Cart:** To add items to the shopping cart, use the command:
  npm run add-to-cart <item-id> <quantity>

- **Cancel the Cart:** To empty the shopping cart, use the command:
  npm run cancel-cart

Please note that `<item-id>` represents the unique ID of an item, and `<quantity>` represents the desired quantity of items to be added to the cart.

Feel free to explore and test out the different features and commands to manage your items effectively.

## Additional Notes 📝 🙋

- If you encounter any issues or have questions, please don't hesitate to reach out.
- Make sure to keep the `data.json` file intact to preserve the item data between sessions.
- Remember to save any changes you make to the data using the appropriate commands to update the `data.json` file.

That's it! You're all set to start using the Dunder Mifflin/Sabre application. Enjoy managing your items and happy coding!
```

Make sure to replace `<repository-url>` with the actual URL of your GitHub repository.