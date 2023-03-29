var container = document.getElementById("container");
//var userNumberOfSubjects = parseInt(document.getElementById("nsubj").value);
document.getElementById("ask").style.visibility = "hidden";

function getNumberOfGradeFields(){
			//Get the input from user
			var userNumberOfSubjects = parseInt(document.getElementById("nsubj").value);
			//var container = document.getElementById("container");

			if (userNumberOfSubjects==0) {
				document.getElementById("ask").style.visibility = "hidden";
				document.getElementById("form1").innerHTML ="<br></br><h1>You have no subjects, no need to calculate average grade</h1>";
				document.getElementById("form1").innerHTML +="<br></br><button onClick='window.location.reload()'>Go back</button>";

				
				
			}else if(userNumberOfSubjects<0) {
				document.getElementById("ask").style.visibility = "hidden";
				document.getElementById("form1").innerHTML ="<br></br><h1>Please enter a vaid number (0 or bigger).</h1>";
				document.getElementById("form1").innerHTML +="<br></br><button onClick='window.location.reload()'>Go back</button>";
				
			}else if (userNumberOfSubjects>0){
				document.getElementById("ask").style.visibility = "hidden";
				document.getElementById("form1").innerHTML ="<br></br><h1>Please enter your marks in each subject.</h1>";
				

				for (i=0;i<userNumberOfSubjects;i++){
					// Append a node with a random text
					container.appendChild(document.createTextNode("Subject " + (i+1)));
					// Create an <input> element, set its type and name attributes
					var input = document.createElement("input");
					input.type = "text";
					input.name = "Subject" + i;
					input.id = "Subject" + i;
					container.appendChild(input);
					// Append a line break 
					container.appendChild(document.createElement("br"));
				}
				var button = document.createElement('input');
				button.setAttribute('type', 'submit');
				button.setAttribute('ID', 'btnCalculateGrade');
				button.setAttribute('value', 'Calculate Grade');
				button.addEventListener('click', function() {
					btnCalcGrade_Click(userNumberOfSubjects);
				  });
				document.body.appendChild(button);
				//container.appendChild(button);

				//If you have time add as child
				//document.getElementById("form1").innerHTML +="<br></br><button onClick='window.location.reload()'>Go back</button>";

			}else{//all other options
				document.getElementById("ask").style.visibility = "hidden";
				document.getElementById("form1").innerHTML ="<br></br><h1>Please enter a vaid number (0 or bigger).</h1>";
				document.getElementById("form1").innerHTML +="<br></br><button onClick='window.location.reload()'>Go back</button>";
				
			}	
}



function btnCalcGrade_Click(userNumberOfSubjects){
	//var userNumberOfSubjects = parseInt(document.getElementById("nsubj").value);
	//var container = document.getElementById("form1");

	// Print statement to output when they put in
	document.getElementById("form2").innerHTML +="<br></br><h1>Your marks are:</h1>";

	for (i=0;i<userNumberOfSubjects;i++){
		var id = "Subject" + i;
		var temp_id = "Subject " + (Number(i)+ Number(1));
		var subjectGrade = parseFloat(document.getElementById(id).value);
		document.getElementById("form2").innerHTML += (temp_id) + ": " + subjectGrade;
		document.getElementById("form2").innerHTML +="<br></br>";

	}

	//Grade average
	var sum = 0.00;

	for (i=0;i<userNumberOfSubjects;i++){
		var id = "Subject" + i;
		var subjectGrade = parseFloat(document.getElementById(id).value);
		sum = sum + subjectGrade;
	}

	var average_grade = sum /userNumberOfSubjects;
	document.getElementById("form2").innerHTML +="<br></br>";
	document.getElementById("form2").innerHTML += "Your grade average result is " + average_grade;
	document.getElementById("form2").innerHTML +="<br></br>";

	// Get A-F grade
	document.getElementById("form2").innerHTML +="<br></br><h1>Your grades are:</h1>";

	for (i=0;i<userNumberOfSubjects;i++){
		var id = "Subject" + i;
		var temp_id = "Subject " + (Number(i)+ Number(1));
		var subjectGrade = parseFloat(document.getElementById(id).value);

		// Get A-F grade:
		if(subjectGrade>85){
			var letterGrade = "A";
		}else if(subjectGrade>70){
			var letterGrade = "B";
		}else if(subjectGrade>55){
			var letterGrade = "C";
		}else if(subjectGrade>40){
			var letterGrade = "D";
		}else if(subjectGrade<40){
			var letterGrade = "F";
		}


		document.getElementById("form2").innerHTML += (temp_id) + ": " + letterGrade;
		document.getElementById("form2").innerHTML +="<br></br>";

	}




	//container.appendChild(document.createTextNode("Your grade average result is " + String(average_grade)));
	//container.appendChild(document.createElement("p");

	//while (container.hasChildNodes()) {
	//container.removeChild(container.lastChild);
	//}

	

	//const para = document.createElement("p");
	//para.innerText = "Your grade average result is " + average_grade;
	//container.appendChild(para);


	document.getElementById("form1").style.visibility = "hidden";
	document.getElementById("container").style.visibility = "hidden";
	document.getElementById("btnCalculateGrade").style.visibility = "hidden";

	document.getElementById("form2").innerHTML +="<br></br><button onClick='window.location.reload()'>Go back</button>";

	
}
