$(document).ready(function(){

	var data = JSON.parse(persons);

	for(var i = 0; i < data.length; i++){
		div1 = document.createElement("div");
		$(div1).addClass("profile");
		$("#wrapper").append(div1);

		//image
		innerdiv1 = document.createElement("div");
		$(innerdiv1).addClass("profilepic");
		$(div1).append(innerdiv1);
		img1 = document.createElement("img");
        img1.src = data[i].myPhoto;
        $(innerdiv1).append(img1);

        //profiledata
        innerdiv2 = document.createElement("div");
        $(innerdiv2).addClass("profiledata");
        $(div1).append(innerdiv2);
        var profile_name_p = document.createElement("p");
        var profile_name_text = document.createTextNode("Name: " + data[i].name); 
        $(innerdiv2).append(profile_name_p);
        $(profile_name_p).append(profile_name_text);
        var profile_surname_p = document.createElement("p");
        var profile_surname_text = document.createTextNode("Surame: " + data[i].surname);
        $(innerdiv2).append(profile_surname_p);
        $(profile_surname_p).append(profile_surname_text);
        var profile_age_p = document.createElement("p");
        var profile_age_text = document.createTextNode("Age: " + data[i].age); 
        $(innerdiv2).append(profile_age_p);
        $(profile_age_p).append(profile_age_text);

        //button
        innerdiv3 = document.createElement("div");
        $(innerdiv3).addClass("gridbutton");
        $(div1).append(innerdiv3);
        var newbutton = document.createElement("button");
     	newbutton.id= i;
        $(innerdiv3).append(newbutton);
        var text= document.createTextNode("Like");
       $(newbutton).append(text);

       //like + heart
       var likecounter_p = document.createElement("p");
       likecounter_p.id="p"+i;
       var likecounter = document.createTextNode(data[i].likes);
       $(innerdiv3).append(likecounter_p);
       $(likecounter_p).append(likecounter);
       var innerdiv4 = document.createElement("div");
      $(innerdiv4).addClass("heart");
      innerdiv3.append(innerdiv4);
      var img2 = document.createElement("img");
      img2.src = "img/like.png";
      innerdiv4.append(img2);
  };




// function to add likes via button 

$("button").on("click",function(){
	var i = $(this).attr("id");
	data[i].likes++;
	$("#p"+i).empty();
	$("#p"+i)[0].append(document.createTextNode(data[i].likes))
});


	});





