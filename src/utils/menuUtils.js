const initialStateGen = (menuData) => {
  const initialState = {
    starters: {},
    mains: {},
    desserts: {}
  };

  menuData.starters.map((start) => {
    initialState.starers[start.name] = 30;
    return true;
  });

  menuData.mains.map((main) => {
    initialState.mains[main.name] = 30;
    return true;
  });

  menuData.desserts.map((dessert) => {
    if (dessert.name === 'Cheesecake') {
      initialState.desserts[dessert.name] = 1;
      return true;
    }
    initialState.desserts[dessert.name] = 30;
    return true;
  });

  return initialState;
};

export default initialStateGen;
