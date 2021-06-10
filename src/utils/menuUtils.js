// Generates the menu object for the initial state of the stockReducer.
// Maps the menuData and gives each food a stockCount. Gives one chosen item (lowStockItem) a stock of 1
export const menuGen = (menuData, stockCount, lowStockItem) => {
  const menu = {
    starters: {},
    mains: {},
    desserts: {}
  };

  menuData.starters.map((start) => {
    menu.starters[start.name] = stockCount;
    return true;
  });

  menuData.mains.map((main) => {
    menu.mains[main.name] = stockCount;
    return true;
  });

  menuData.desserts.map((dessert) => {
    if (dessert.name === lowStockItem) {
      menu.desserts[dessert.name] = 1;
      return true;
    }
    menu.desserts[dessert.name] = stockCount;
    return true;
  });

  return menu;
};

export const priceFormatter = (price) => {
  let newPrice = 0;
  newPrice = price.toFixed(2);
  return `£${newPrice}`;
};

const randomColorClass = (number) => {
  switch (number) {
    case '0': return {
      backgroundColor: '#42A5F5'
    };

    case '1': return {
      backgroundColor: '#58D68D'
    };

    case '2': return {
      backgroundColor: '#A569BD'
    };

    case '3': return {
      backgroundColor: '#28B463'
    };

    case '4': return {
      backgroundColor: '#F7DC6F'
    };

    case '5': return {
      backgroundColor: '#FFA726'
    };

    case '6': return {
      backgroundColor: '#D5DBDB'
    };

    case '7': return {
      backgroundColor: '#73C6B6'
    };

    case '8': return {
      backgroundColor: '#CD6155'
    };

    default: return {
      backgroundColor: '#37DACE'
    };
  }
};

// Random color gen for users on startup
export const randomColorGen = (number) => {
  let color;
  if (number) {
    color = randomColorClass(number);
  } else {
    color = randomColorClass((Math.random() * 8).toFixed(0));
  }
  return color;
};

// Extracts the total of all of the food items a user has in their order object
export const extractSubTotal = (orders, name) => {
  let subTotal = 0;
  if (orders) {
    Object.values(orders[name]).map((item) => {
      if (item.price) {
        subTotal += parseInt(item.price);
      }
      return true;
    });
  }
  return `£${subTotal.toFixed(2)}`;
};

// Extracts the total from all food items
export const extractGrandTotal = (orders) => {
  let grandTotal = 0;
  if (orders) {
    const names = Object.keys(orders);
    names.map((name) => {
      Object.values(orders[name]).map((item) => {
        if (item.price) {
          grandTotal += parseInt(item.price);
        }
        return true;
      });
      return true;
    });
  }
  return `£${grandTotal.toFixed(2)}`;
};

// Extracts a users selected foods and their prices, bundles them as an array
// along with the users name for reference.
export const extractOrderDetails = (orders, name) => {
  const foodItem = [];
  const keys = Object.keys(orders[name]);
  Object.values(orders[name]).map((item, i) => {
    if (i > 0) {
      if (item.food && item.price) {
        foodItem.push([item.food, `£${parseInt(item.price).toFixed(2)}`, keys[i]]);
      }
    }
    return true;
  });
  return foodItem;
};

// Checks users orders for a main and a starter/dessert
// Returns an array of users who don't comply.
export const checkFinalOrder = (orders) => {
  const blame = [];
  Object.keys(orders).map((name) => {
    let count = 2;
    if (!orders[name].starters.food) {
      count--;
    }
    if (!orders[name].mains.food) {
      count = -0;
      blame.push(name);
      return blame;
    }
    if (!orders[name].desserts.food) {
      count--;
    }
    if (count === 0) {
      blame.push(name);
    }
    return true;
  });
  return blame;
};

export const titlelise = string => {
  const first = string.charAt(0).toUpperCase();
  const last = string.slice(1);
  return first + last;
};
