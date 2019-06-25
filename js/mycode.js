
$(document).ready(function(){
	showStudents(); 
	$("#students").on('click','.studentID',function(){
		var studentID=$(this).attr('data-id'); 
		showSelectedStudent(studentID);  
	});
});

function showStudents(){
	var textToShow='';	
	$.get("liststudent.json",function(data){
		$.each(data.students, function(key,student){
			textToShow=textToShow+'<li class="list-group-item">';
			textToShow=textToShow+student.id+' ';
			textToShow=textToShow+student.firstName+' '+student.lastName;
			textToShow=textToShow+'<ul class="list-group">';
			$.each(student.training,function(key,training){
				textToShow=textToShow+'<li class="list-group-item">'+'From'+' '+training.start+' to '+training.end+'</li>';
				textToShow=textToShow+'<li class="list-group-item">'+'Place:'+' '+training.place+'</li>';
				textToShow=textToShow+'<li class="list-group-item">'+'Supervisor:'+' '+training.supervisor+'</li>';
			});
			textToShow=textToShow+'</ul>';
			//show button to "edit" the selected student
			textToShow=textToShow+'<button type="button" class="btn studentID" data-id="'+student.id;
			textToShow=textToShow+'" data-toggle="modal" data-target="#myModal">Edit</button>';
			textToShow=textToShow+'</li>';
		});
		$("#students").html(textToShow);
	});
}
function showSelectedStudent(studentID){
	//For example here, you can read the same "persons.json" and display only the selected person
	//Display only if person.id==personID
	$("#mymodalbody").html('<p>You selected student with ID:'+studentID+'</p>');
}