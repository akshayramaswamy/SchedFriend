if(Meteor.isClient){
	Template.settings.rendered = function(){
		if(Session.get("animateChild")){
			$(".settings-page").addClass("ng-enter");
			setTimeout(function(){
				$(".settings-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".settings-page").removeClass("ng-enter");
				$(".settings-page").removeClass("ng-enter-active");
			}, 600);
		}
	
	};
  	Template.settings.events({
    		'click #updateProfile': function () {
			//var selectValue = $("#clientsSelect").val()
			if ($("#firstName").val() != ""){
				Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": $("#firstName").val()}});
    			}			
			if ($("#lastName").val() != ""){
				Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.lastName": $("#lastName").val()}});
    			}
    		if ($("#university").val() != ""){
				Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.university": $("#university").val()}});
    			}	
     		if ($("#dorm").val() != ""){
				Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.dorm": $("#dorm").val()}});
    			}
    		if ($("#year").val() != ""){
				Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.year": $("#year").val()}});
    			}
    		if ($("#major").val() != ""){
				Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.major": $("#major").val()}});
    			}
		}
  		
	});
  	Template.settings.events({
    		'click #updateFirstName': function () {
			//var selectValue = $("#clientsSelect").val()
			Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": $("#firstName").val()}});
    		}
  		
	});


}

