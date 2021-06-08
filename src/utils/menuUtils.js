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
  return newPrice;
};
