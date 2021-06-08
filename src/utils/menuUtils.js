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

export const randomColorGen = (number) => {
  let color;
  if (number) {
    color = randomColorClass(number);
  } else {
    color = randomColorClass((Math.random() * 8).toFixed(0));
  }
  return color;
};

export const extractSubTotal = (orders, name) => {
  let subTotal = 0;
  if (orders) {
    Object.values(orders[name]).map((item) => {
      subTotal += parseInt(10, item.price);
      return true;
    });
  }
  return `£${subTotal.toFixed(2)}`;
};
