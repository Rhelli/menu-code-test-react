const initialStateGen = (menuData, stockCount, lowStockItem) => {
  const initialState = {
    starters: {},
    mains: {},
    desserts: {}
  };

  menuData.starters.map((start) => {
    initialState.starers[start.name] = stockCount;
    return true;
  });

  menuData.mains.map((main) => {
    initialState.mains[main.name] = stockCount;
    return true;
  });

  menuData.desserts.map((dessert) => {
    if (dessert.name === lowStockItem) {
      initialState.desserts[dessert.name] = 1;
      return true;
    }
    initialState.desserts[dessert.name] = stockCount;
    return true;
  });

  return initialState;
};

export default initialStateGen;
