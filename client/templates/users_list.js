var usersData = [ {
    profile : {
      firstName: 'Chetan Rane',
      url: '/'
    }
    
  }
];
/*
  },
  {
    firstName: 'Chetan Rane',
      url: '/'
  }, 
  {
    firstName: 'Chetan Rane',
    url: '/'
  }
];
*/
Template.usersList.helpers({
  users: function() {
    return Meteor.users.find().fetch();
  }
});