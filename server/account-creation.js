Accounts.onCreateUser(function(options, user) {
   // Use provided profile in options, or create an empty object
   user.profile = options.profile || {};
   // Assigns first and last names to the newly created user object
   user.profile.firstName = options.firstName;
   user.profile.lastName = options.lastName;
   
   user.profile.university = options.university;
   user.profile.dorm = "";
   user.profile.year = options.year;
   user.profile.major = "";
      
   user.profile.FallCourses2016 = [];
   user.profile.WinterCourses2016 = [];
   user.profile.SpringCourses2016 = [];
   user.profile.FallCourses2015 = [];
   user.profile.WinterCourses2015 = [];
   user.profile.SpringCourses2015 = [];
   user.profile.FallCourses2014 = [];
   user.profile.WinterCourses2014 = [];
   user.profile.SpringCourses2014 = [];
   user.profile.FallCourses2013 = [];
   user.profile.WinterCourses2013 = [];
   user.profile.SpringCourses2013 = [];
   user.profile.activities = [];
   user.profile.profilePicture = null;
   // Returns the user object
   return user;
});
