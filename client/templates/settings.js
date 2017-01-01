if(Meteor.isClient){
	Template.reports.rendered = function(){
		if(Session.get("animateChild")){
			$(".reports-page").addClass("ng-enter");
			setTimeout(function(){
				$(".reports-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".reports-page").removeClass("ng-enter");
				$(".reports-page").removeClass("ng-enter-active");
			}, 600);
		}
	
	};
  	Template.settings.events({
    		'click #updateLastName': function () {
			//var selectValue = $("#clientsSelect").val()
			Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.lastName": $("#lastName").val()}});
    		}
  		
	});
  	Template.addCourse.events({
    		'click #Remove-Fall-2016': function () {
			var selectValue = $("#clientsSelect").val()
			Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.2016FallCourses2016": { $in: [$("#courseSelect").val()] }}});
    		}
	});


}

