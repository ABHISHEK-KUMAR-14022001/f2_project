// Function to get the menu
async function getMenu() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    );
    const menu = await response.json();
    console.log("Menu:", menu);
    // Show the menu to the user
  } catch (error) {
    console.log("Error retrieving menu:", error);
    // Handle error fetching the menu
  }
}

// Function to take an order
function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const burgers = ["Cheeseburger", "Chicken Burger", "Veggie Burger"];
      const order = {
        burgers: [],
      };
      // Select 3 random burgers
      for (let i = 0; i < 3; i++) {
        const randomBurger =
          burgers[Math.floor(Math.random() * burgers.length)];
        order.burgers.push(randomBurger);
      }
      resolve(order);
    }, 2500);
  });
}

// Function for order preparation
function orderPrep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orderStatus = true;
      const paid = false;
      resolve({ orderStatus, paid });
    }, 1500);
  });
}

// Function for payment
function payOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orderStatus = true;
      const paid = true;
      resolve({ orderStatus, paid });
    }, 1000);
  });
}

// Function to display thank you message
function thankYouFn() {
  alert("Thank you for eating with us today!");
}

async function handlePromises() {
  try {
    await getMenu();
    const order = await takeOrder();
    console.log("Order:", order);
    const prepStatus = await orderPrep();
    console.log("Preparation Status:", prepStatus);
    const paymentStatus = await payOrder();
    console.log("Payment Status:", paymentStatus);
    if (paymentStatus.paid) {
      thankYouFn();
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

handlePromises();
