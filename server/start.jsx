if (Meteor.isClient) {
  Meteor.startup(function() {
    ReactDOM.render(<App />, document.getElementById('container'));
  });
}

Meteor.methods({

});

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
  });
}
