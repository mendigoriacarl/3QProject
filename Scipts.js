var score = 0;
var mikelock = 0;
var yoshilock = 0;
var finnlock = 0;
var shaggylock = 0;
var jimmylock = 0;
var waldolock = 0;

function CheckFind(event) {
	var x = event.clientX;
	var y = event.clientY;
	if (x >= 1004 && y >= 1 && x <= 1037 && y <= 46) {
		if (mikelock == 0) {
			alert("You found Mike Wazowski!");
			score++;
			document.getElementById('ScoreNum').innerHTML = score;
			document.getElementById('mike').innerHTML = "&nbsp; <strike>Mike Wazowski</strike>";
			mikelock++;
			if (score == 5) {
		alert("congratualations you found all the characters! Press OK to restart");
		location.reload();
	}
		} else {
			alert("You've already found this character");
		}
	} else if (x >= 541 && y >= 102 && x <= 604 && y <= 142) {
		if (yoshilock == 0) {
			alert("You found Yoshi!");
			score++;
			document.getElementById('ScoreNum').innerHTML = score;
			document.getElementById('yoshi').innerHTML = "&nbsp; <strike>Yoshi</strike>";
			yoshilock++;
			if (score == 5) {
		alert("congratualations you found all the characters! Press OK to restart");
		location.reload();
	}
		} else {
			alert("You've already found this character");
		}
	} else if (x >= 452 && y >= 333 && x <= 492 && y <= 372) {
		if (finnlock == 0) {
			alert("You found Finn!");
			score++;
			document.getElementById('ScoreNum').innerHTML = score;
			document.getElementById('finn').innerHTML = "&nbsp; <strike>Finn the Human</strike>";
			finnlock++;
			if (score == 5) {
		alert("congratualations you found all the characters! Press OK to restart");
		location.reload();
	}
		} else {
			alert("You've already found this character");
		}
	} else if (x >= 810 && y >= 435 && x <= 839 && y <= 489) {
		if (shaggylock == 0) {
			alert("You found Shaggy!");
			score++;
			document.getElementById('ScoreNum').innerHTML = score;
			document.getElementById('shaggy').innerHTML = "&nbsp; <strike>Norville 'Shaggy' Rogers</strike>";
			shaggylock++;
			if (score == 5) {
		alert("congratualations you found all the characters! Press OK to restart");
		location.reload();
	}
		} else {
			alert("You've already found this character");
		}
	} else if (x >= 528 && y >= 472 && x <= 543 && y <= 527) {
		if (jimmylock == 0) {
			alert("You found Jimmy Neutron!");
			score++;
			document.getElementById('ScoreNum').innerHTML = score;
			document.getElementById('jimmy').innerHTML = "&nbsp; <strike>Jimmy Neutron</strike>";
			jimmylock++;
			if (score == 5) {
		alert("congratualations you found all the characters! Press OK to restart");
		location.reload();
	}
		} else {
			alert("You've already found this character");
		}
	} else if (x >= 532 && y >= 374 && x <= 549 && y <= 421) {
		if (waldolock == 0) {
			alert("You found Secret Character, Waldo!");
			document.getElementById('ScoreNum').innerHTML = score;
			document.getElementById('waldo').innerHTML = "&nbsp; <strike>Waldo</strike>";
			waldolock++;
		} else {
			alert("You've already found this character");
		}
	}
	
}
