function check_name(name){
	if(name == "gabriel"){
		return "Win!";
	}else if (name =="Clement"){
		return "We find Clement !";
	}else{
		var res = "Truth !" + name + "is different from gabriel and clement";
		return res;
	}
}

$(document).ready(function(){
	alert(check_name("gabriel"));
			$("#useless").remove()
		});

});