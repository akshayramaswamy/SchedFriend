Template.login.events({
  'click #login-button': function(e, t) {
     e.preventDefault();
     // Getting values from fields on page
     var email = $('#login-email').val(),
         password = $('#login-password').val();
     // Calling the loginWithPassword function on the user
     Meteor.loginWithPassword(email, password, function(error) {
         if (error) {
          // Returning a sweetAlert
          return swal({
                title: "Email or password incorrect",
                text: "Please try again",
                timer: 1700,
                showConfirmButton: false,
                type: "error"
            });
         } else {
           Router.go('home');
         }
     });
     return false;
   }
});


Template.login.events({
  'click #register-redirect': function(e, t) {
     e.preventDefault();
     Router.go('register');
   }   
});

