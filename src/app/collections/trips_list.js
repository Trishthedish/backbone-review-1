import Backbone from 'backbone';
import Trip from 'app/models/trip';

const TripList = Backbone.Collection.extend({
  model: Trip
});

export default TripList;
