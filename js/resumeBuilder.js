/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var name = "Phap Dinh";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%","web developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["javascript","python","Linux","HTML","CSS"];

var bio = {"name":"Phap Dinh",
"role":"web developer",
"contacts":{
	"email":"centralparkloop@yahoo.com",
	"github":"www.github.com/phapdinh"
},
"picture":"https://scontent-atl3-1.xx.fbcdn.net/hprofile-xfp1/v/t1.0-1/p160x160/10544381_10152714453108115_2266025225592810459_n.jpg?oh=d673df7e1acc263b4a33e329883a76ca&oe=56E79C1B",
"Welcome":"Nice to meet you and thanks for dropping by.",
"skills":skills};

var formattedBioPic = HTMLbioPic.replace("%data%",bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.Welcome);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);

if(bio.skills.length != 0) {
	$("#header").append(HTMLskillsStart); 
	for(var i = 0; i < bio.skills.length; i = i + 1) {
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
	}
}

var work = [{},{}];

work[0].position = "intern";
work[0].employer = "Dish Network";
work[0].years = 2;
work[0].city = "Atlanta";
work[0].description = "Helped the mobile development team to "

work[1].position = "intern";
work[1].employer = "Pacific Gas and Electric";
work[1].years = 0.3;
work[1].city = "San Francisco";
work[1].description = "Helped perform system impact study reports";

var projects = {"projects":[]};

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects[project].dates));	
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects[project].description));
		if(projects[project].images.length > 0) {
			for( image in projects[project].images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects[project].images[image]));
			}
		}
	}
}

function displayWork() {
	for (index in work){
		$("#workExperience").append(HTMLworkStart);
		var formattedTitle = HTMLworkTitle.replace("%data%",work[index].position);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work[index].employer);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDate = HTMLworkDates.replace("%data%",work[index].years);
		$(".work-entry:last").append(formattedDate);
		var formattedLocation = HTMLworkLocation.replace("%data%",work[index].city);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%",work[index].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

var education = {};

education["name"] = "Georgia Institute of Technology";
education["years"] = 3;
education["city"] = "Atlanta";

$("#main").append(internationalizeButton);

function inName(name) {
	var twoNames = name.trim().split(" ");
	var firstName = twoNames[0].slice(0,1).toUpperCase() + twoNames[0].slice(1).toLowerCase();
	twoNames[0] = firstName;
	var lastName = twoNames[1].toUpperCase();
	twoNames[1] = lastName;
	var internationalizedName = twoNames.join(" ");
	return internationalizedName;
}

$("#mapDiv").append(googleMap);
