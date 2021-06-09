const timeOfDayGreeting = () => {
  const today = new Date();
  const currentHour = today.getHours();
  let message = '';
  if (currentHour < 12) {
    message = ['Good Morning,', 'morning'];
  } else if (currentHour < 18) {
    message = ['Good Afternoon,', 'afternoon'];
  } else {
    message = ['Good Evening,', 'evening'];
  }
  return message;
};

export const waiterStockErrorMessages = (item) => {
  let message = '';
  if (item) {
    message = `Terribly sorry sir, we're all out of the ${item}. Please make another selection.`;
  }
  return message;
};

export const waiterStartupMessage = () => {
  const message = [
    `${timeOfDayGreeting()[0]} my name is Pierre, and I'll be your waiter this ${timeOfDayGreeting()[1]}.`,
    `To order, select your name at the top of the menu and make your selections. The first guest's name
    is selected automatically.`
  ];
  return message;
};

export const snobbyRealityCheck = (orders, guest, selectedFood) => {
  let message = '';
  if (orders[guest].starters.food === 'Prawn cocktail' && selectedFood === 'Salmon fillet') {
    message = [`*snorts* Sir, I urge you to choose a better suited main course to complement
    your starters. Unless you're a pescatarian, I'd suggest selecting something else.`, true];
  }
  if (orders[guest].mains.food === 'Salmon fillet' && selectedFood === 'Prawn cocktail') {
    message = [`*sighs* Sir, if everyone of our guests stooped to making such derivative selections
    as you, we'd be a fast food chain. Please select a starter other than the Prawn cocktail to complement
    your ...tastes.`, true];
  }
  return message;
};

const randomColor = (number) => {
  switch (number) {
    case '0': return {
      backgroundColor: '#DA3743'
    };

    case '1': return {
      backgroundColor: '#DF505B'
    };

    case '2': return {
      backgroundColor: '#BF303B'
    };

    case '3': return {
      backgroundColor: '#A42932'
    };

    case '4': return {
      backgroundColor: '#C34952'
    };

    default: return {
      backgroundColor: 'green'
    };
  }
};

export const randomBackgroundColor = () => randomColor((Math.random() * 4).toFixed(0));
