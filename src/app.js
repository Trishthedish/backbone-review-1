import Application from 'app/models/application';
import ApplicationView from 'app/views/application';

var application = new Application({
  trips: [
    {
      name: "Trip One",
      continent: "Europe",
      cost: 1000,
      spots: 10
    },
    {
      name: "Trip Two",
      continent: "Asia",
      cost: 1500,
      spots: 35
    },
    {
      name: "Trip Three",
      continent: "Asia",
      cost: 3000,
      spots: 15
    },
    {
      name: "Trip Four",
      continent: "South America",
      cost: 900,
      spots: 20
    },
    {
      name: "Trip Five",
      continent: "Africa",
      cost: 2000,
      spots: 10
    }
  ]
});

var appView = new ApplicationView({
  // specifing what el is and saying it is now in charge of all the things. 
  el: '#application',
  model: application
});
