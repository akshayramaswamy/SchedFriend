var usersData = [ {
    name: 'Chetan Rane',
    url: '/'
  },
  {
    name: 'Akshay Ramaswamy',
    url: '/'
}, {
    name: 'Andrew Chang',
    url: '/'
  }
];
Template.usersList.helpers({
  users: usersData
});