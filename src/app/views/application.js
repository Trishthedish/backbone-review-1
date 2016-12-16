import Backbone from 'backbone';
import TripListView from 'app/views/trip_list_view';


const ApplicationView = Backbone.View.extend({
  initialize: function() {
    console.log(">>> BREADCRUMBDS 1");
    this.render();
  },

  events: {
    'click #submit-trip': 'saveTrip',
    'click #clear-data': 'clearForm'
  },

  saveTrip: function(e){
    e.preventDefault();
    var tripAttrs = {
      name: this.$('#trip-form input[name="name"]').val(),
      continent: this.$('#trip-form input[name="continent"]').val(),
      spots: this.$('#trip-form input[name="spots"]').val(),
      cost: this.$('#trip-form input[name="cost"]').val()
    };

    this.model.tripsList.add(tripAttrs);
    this.clearForm();
  },

  onCancel: function(e) {
    this.clearForm();
  },

  clearForm: function() {
    this.$('#trip-form input').val('');
  },

  render: function() {
    console.log("Breadcrumbs TRUE #2");
    const tripsView = new TripListView({
      //check that .tripList is right
      model: this.model.tripsList,
      el: this.$('main')

    });
    tripsView.render();

    return this;
  }
});

export default ApplicationView;
