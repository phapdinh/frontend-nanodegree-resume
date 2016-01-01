/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var name = "Phap Dinh";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%","web developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["javascript","python","Linux","HTML","CSS"];

var bio = {name:"Phap Dinh",
role:"web developer",
contacts:{
	mobile: "678-521-2978",
	email:"centralparkloop@yahoo.com",
	github:"www.github.com/phapdinh",
	location: "Atlanta"
},
picture:"https://scontent-atl3-1.xx.fbcdn.net/hprofile-xfp1/v/t1.0-1/p160x160/10544381_10152714453108115_2266025225592810459_n.jpg?oh=d673df7e1acc263b4a33e329883a76ca&oe=56E79C1B",
Welcome:"Nice to meet you and thanks for dropping by.",
skills:skills};

bio.display = function() {
	var formattedBioPic = HTMLbioPic.replace("%data%",this.picture);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",this.Welcome);
	var formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location)
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
};
bio.display();

var work = {jobs:[{},{}]};

work.jobs[0].title = "intern";
work.jobs[0].employer = "Dish Network";
work.jobs[0].years = 2;
work.jobs[0].city = "Atlanta";
work.jobs[0].description = "Helped the mobile development team to "

work.jobs[1].title = "intern";
work.jobs[1].employer = "Pacific Gas and Electric";
work.jobs[1].years = 0.3;
work.jobs[1].city = "San Francisco";
work.jobs[1].description = "Helped perform system impact study reports";

work.display = function() {
	for (index in this.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[index].title);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[index].years);
		$(".work-entry:last").append(formattedDate);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[index].city);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[index].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

var education = {schools:[{},{}],onlineCourses:[{}]};

education.schools[0].name = "Morrow High School";
education.schools[0].degree = "High School Diploma"
education.schools[0].years = 3;
education.schools[0].location = "Morrow";
education.schools[0].dates = "2005-2008";

education.schools[1].name = "Georgia Institute of Technology";
education.schools[1].degree = "Some College";
education.schools[1].years = 3;
education.schools[1].location = "Atlanta";
education.schools[1].dates = "2008-2011";

education.onlineCourses[0].school = "Udacity";
education.onlineCourses[0].date = 2015

education.display = function() {
	for(index in this.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[index].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[index].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[index].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[index].dates);
		$(".education-entry:last").append(formattedDates);
	}
	for(index in this.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
	}
}

education.display();

var projects = {projects:[{}]};

projects.projects[0].title = "Catalog";
projects.projects[0].dates = 2015;
projects.projects[0].description = "Developed a content management system using the Flask framework in Python. \
Authentication is provided via OAuth and all data is stored within a PostgreSQL database. The system allows you \
to create categories and put items in those categories with a description of that item.";
projects.projects[0].images = ['images/catalogPic.GIF'] 

projects.display = function() {
	for(index in this.projects) {
		$("#projects").append(HTMLprojectStart);
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

projects.display();

$("#mapDiv").append(googleMap);

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