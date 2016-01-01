/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var name = "Phap Dinh";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%","web developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name":"Phap Dinh",
	"role":"web developer",
	"contacts":{
		"mobile": "678-521-2978",
		"email":"centralparkloop@yahoo.com",
		"github":"www.github.com/phapdinh",
		"location": "Atlanta"
	},
	"welcomeMessage":"Nice to meet you and thanks for dropping by.",
	"skills":["Javascript","Python","Linux","HTML","CSS"],
	"biopic":"https://scontent-atl3-1.xx.fbcdn.net/hprofile-xfp1/v/t1.0-1/p160x160/10544381_10152714453108115_2266025225592810459_n.jpg?oh=d673df7e1acc263b4a33e329883a76ca&oe=56E79C1B",
	"display": function() {
		var formattedBioPic = HTMLbioPic.replace("%data%",this.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",this.welcomeMessage);
		var formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);

		if(this.skills.length != 0) {
			$("#header").append(HTMLskillsStart); 
			for(var i = 0; i < this.skills.length; i = i + 1) {
				$("#skills").append(HTMLskills.replace("%data%",this.skills[i]));
			}
		}
	}
};

bio.display();

var work = {
	"jobs": [
		{
			"employer": "Dish Network",
			"title": "intern",
			"location": "Atlanta",
			"dates": "August 2009 - July 2010",
			"description": "Helped the mobile development team on mobile development project"
		},
		{
			"employer": "Pacific Gas and Electric",
			"title": "intern",
			"location": "San Francisco",
			"dates": "January 2011 - April 2011",
			"description": "Helped perform system impact study reports"
		}
	],
	"display": function() {
		$("#workExperience").append(HTMLworkStart);
		for (index in this.jobs){
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[index].title);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedDate = HTMLworkDates.replace("%data%",work.jobs[index].dates);
			$(".work-entry:last").append(formattedDate);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[index].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[index].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

work.display();

var education = {
	"schools": [
		{
			"name": "Morrow High School",
			"location": "Morrow",
			"degree": "High School Diploma",
			"majors": "AP",
			"dates": 2008
		},
		{
			"name": "Georgia Institute of Technology",
			"location": "Atlanta",
			"degree": "Some College",
			"majors": "Electrical Engineering",
			"dates": 2011
		}
	],
	"onlineCourses": [
		{
			"title": "",
			"school": "",
			"date": "",
			"url": ""
		}
	],
	"display": function() {
		$("#education").append(HTMLschoolStart);
		for(index in this.schools){
			var formattedName = HTMLschoolName.replace("%data%",education.schools[index].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[index].degree);
			$(".education-entry:last").append(formattedName + formattedDegree);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[index].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[index].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[index].majors);
			$(".education-entry:last").append(formattedMajor);
		}
		$("#education").append(HTMLonlineClasses);
		for(index in this.onlineCourses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[index].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[index].school);
			$("#education").append(formattedTitle + formattedSchool);
			var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[index].date);
			$("#education").append(formattedDate);
			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[index].url);
			$("#education").append(formattedURL);
		}
	}
};

education.display();

var projects = {
	"projects": [
		{
			"title": "Catalog",
			"dates": 2015,
			"description": "Developed a content management system using the Flask framework in Python. \
				Authentication is provided via OAuth and all data is stored within a PostgreSQL database. The system allows you \
				to create categories and put items in those categories with a description of that item.",
			"images": ['images/catalogPic.GIF'] 
		}
	],
	"display": function() {
		$("#projects").append(HTMLprojectStart);
		for(index in this.projects) {
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",this.projects[index].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",this.projects[index].dates));	
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",this.projects[index].description));
			if(this.projects[index].images.length > 0) {
				for( image in this.projects[index].images) {
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%",this.projects[index].images[image]));
				}
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);