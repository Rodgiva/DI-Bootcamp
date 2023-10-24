let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// 1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}

// displayGroceries()

// 2. Create another arrow function named cloneGroceries.
//         In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
//             Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
const cloneGroceries = () => {
    let user = client
    client = "Betty"
    console.log(user);
    console.log(client);
}
cloneGroceries()
// ==> here we pass by value: we assign to the variable user the value of the variable client

//         In the function, create a variable named shopping that is equal to the groceries variable.
//             Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
//             Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

const cloneGroceries2 = () => {
    let shopping = groceries
    groceries.totalPrice = "35$"
    console.log(shopping.totalPrice);

    groceries.other.paid = false
    console.log(shopping.other.paid);
}
cloneGroceries2()
// ==> here we pass by reference: the value of shopping reference to the same value of grocerie

// 3. Invoke the cloneGroceries function.
