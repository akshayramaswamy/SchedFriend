if(Meteor.isClient){

	var courseList = ["All Courses", "Math 51", "CS 106A"];
	var activityList = ["All Activities", "Stanford Symphony Orchestra", "Raas", "BASES"];
	var majorList = ["All Majors", "Economics", "Computer Science", "Biology"];
	Template.overview.helpers({
		courseList : courseList,
		activityList : activityList,
		majorList : majorList
	});

	Template.overview.rendered = function(){
		if(Session.get("animateChild")){
			$(".overview-page").addClass("ng-enter");
			setTimeout(function(){
				$(".overview-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".overview-page").removeClass("ng-enter");
				$(".overview-page").removeClass("ng-enter-active");
			}, 600);
		}
	};

	Template.overview.events({
		'click #filter': function() {
			var course = $("#courseSelect option:selected").text();
			var activity = $("#activitySelect option:selected").text();
			//var course = document.getElementById("courseSelect").find("option:selected").text();
			console.log(course);
			console.log(activity);
		}
	});
}
