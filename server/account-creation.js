Accounts.onCreateUser(function(options, user) {
   // Use provided profile in options, or create an empty object
   user.profile = options.profile || {};
   // Assigns first and last names to the newly created user object
   user.profile.firstName = options.firstName;
   user.profile.lastName = options.lastName;

   user.profile.university = options.university;
   user.profile.year = null;
   //user.currentCourses = options.currentCourses;
   //user.profPicture = options.profPicture;
   user.profile.currentCourses = [];
   user.profile.activities = [];
   user.profile.profilePicture = null;
   // Returns the user object
   return user;
});
