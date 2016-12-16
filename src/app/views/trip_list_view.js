import _ from 'underscore';
import Backbone from 'backbone';
import TripView from 'app/views/trip_view';

const TripListView = Backbone.View.extend({
  initialize: function(){
    console.log(">>> BREADCRUMBDS 2");

    this.detailsTemplate = _.template(Backbone.$('#tmpl-trip-details').html());
    this.detailsModal = this.$('#trip-details');
    this.detailsModal.hide(); // Modal starts hidden

    this.listenTo(this.model, 'update', this.render);
  },

  showDetails: function(card){

    const cardDetails = this.detailsTemplate(card.model.attributes);
    this.detailsModal.html(cardDetails);
    this.detailsModal.show();
  },

  render: function() {
    const cardList = Backbone.$('#trip-cards');
    cardList.empty();
    console.log(">>> BREADCRUMBDS 3");

    const self = this;
    this.model.forEach(function(trip) {
      const card = new TripView({
        model: trip
        // trip view doesnt have el. Default > div 
      });
      self.listenTo(card, 'select', self.showDetails);

      cardList.append(card.render().$el);
    });
  }

});

export default TripListView;
