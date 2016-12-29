HomeController = RouteController.extend({
  onBeforeAction: function () {
    this.redirect('/dashboard/overview');
  }
});

LoginController = RouteController.extend({
  onBeforeAction: function () {
    this.next();
  },
  onAfterAction: function(){
    
  }
});

OverviewController = RouteController.extend({
  onBeforeAction: function () {
    this.next();
  }
});

ReportsController = RouteController.extend({
  onBeforeAction: function () {
    this.next();
  }
});

Router.route('home', {
  path: '/'
});

Router.route('dashboard', {
  path: '/dashboard'
});

Router.route('overview', {
  layoutTemplate: 'dashboard',
  path: '/dashboard/overview',
  waitOn: function() {
      return Meteor.subscribe('userList');
  },
  data: function() {
      return Meteor.users.find({});       
  }
});

Router.route('reports', {
  layoutTemplate: 'dashboard',
  path: '/dashboard/reports'
});

Router.route('login', {
  path: '/login'
});

Router.route('register', {
  path: '/register'
});
//New routes
