Rubyconby = Ember.Application.create({
  rootElement: '.ember-job'
});

Rubyconby.Router.map(function() {
  this.resource('frontEndDeveloper');
  this.resource('rubyProgrammer');
  this.resource('jsProgrammer');
});

Rubyconby.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('frontEndDeveloper');
  }
});