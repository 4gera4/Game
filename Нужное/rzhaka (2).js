var mult11;
var mult2;


function GetMults() {
	var numm1=document.getElementById("num1");
	var numm2=document.getElementById("num2");
	var a=0;
	var b=10;
	mult1=rand(a, b);
	if(mult1==0) {
		numm1.style.color="#2F4F4F";
	}
	if(mult1==1) {
		numm1.style.color="pink";
	}
	if(mult1==2) {
		numm1.style.color="#00CED1";
	}
	if(mult1==3) {
		numm1.style.color="#8B0000";
	}
	if(mult1==4) {
		numm1.style.color="#0000CD";
	}
	if(mult1==5) {
		numm1.style.color="#00FF7F";
	}
	if(mult1==6) {
		numm1.style.color="#FF1493";
	}
	if(mult1==7) {
		numm1.style.color="#9400D3";
	}
	if(mult1==8) {
		numm1.style.color="#D2691E";
	}
	if(mult1==9) {
		numm1.style.color="#FFFF00";
	}
	
	mult2=rand(a, b);
	if(mult2==0) {
		numm2.style.color="#2F4F4F";
	}
if(mult2==1) {
		numm2.style.color="pink";
	}
	if(mult2==2) {
		numm2.style.color="#00CED1";
	}
	if(mult2==3) {
		numm2.style.color="#8B0000";
	}
	if(mult2==4) {
		numm2.style.color="#0000CD";
	}
	if(mult2==5) {
		numm2.style.color="#00FF7F";
	}
	if(mult2==6) {
		numm2.style.color="#FF1493";
	}
	if(mult2==7) {
		numm2.style.color="#9400D3";
	}
	if(mult2==8) {
		numm2.style.color="#D2691E";
	}
	if(mult2==9) {
		numm2.style.color="#FFFF00";
	}
	numm1.innerHTML=mult1;
	numm2.innerHTML=mult2;
	console.log(mult1+' '+mult2);
}


function detector() {
	var result=0;
	var res1=document.getElementById("res1");
	var res2=document.getElementById("res2");
	var bannr=document.getElementById("bnnr");
	console.log("LET'S GO!!");
	document.onkeydown = function (e) {
  if(e.keyCode==13) {
	  console.log(result);
	  var product=mult1*mult2;
	  //Число на цифры:
var o = Math.floor(product/10); 
var t = product-o*10; 
	  if(result==product){
		console.log("Krasava"); 
	bannr.style.borderColor="#008500";
	  bannr.style.backgroundColor="#67E667";
	  bannr.innerHTML="Правильно!";
	  }
	  else {
	bannr.style.borderColor="#A60000";
	  bannr.style.backgroundColor="#FF7373";
	  bannr.innerHTML="Неправильно!"; 
	  }
	  bannr.style.display="block";
	  res1.innerHTML=o;
	  if(o==0) {
		  res1.innerHTML="";
	  }
	if(o==1) {
		res1.style.color="pink";
	}
	if(o==2) {
		res1.style.color="#00CED1";
	}
	if(o==3) {
		res1.style.color="#8B0000";
	}
	if(o==4) {
		res1.style.color="#0000CD";
	}
	if(o==5) {
		res1.style.color="#00FF7F";
	}
	if(o==6) {
		res1.style.color="#FF1493";
	}
	if(o==7) {
		res1.style.color="#9400D3";
	}
	if(o==8) {
		res1.style.color="#D2691E";
	}
	if(o==9) {
		res1.style.color="#FFFF00";
	}
	  res2.innerHTML=t;
	    if(t==0) {
		res1.style.color="#2F4F4F";
	}
	if(t==1) {
		res2.style.color="pink";
	}
	if(t==2) {
		res2.style.color="#00CED1";
	}
	if(t==3) {
		res2.style.color="#8B0000";
	}
	if(t==4) {
		res2.style.color="#0000CD";
	}
	if(t==5) {
		res2.style.color="#00FF7F";
	}
	if(t==6) {
		res2.style.color="#FF1493";
	}
	if(t==7) {
		res2.style.color="#9400D3";
	}
	if(t==8) {
		res2.style.color="#D2691E";
	}
	if(t==9) {
		res2.style.color="#FFFF00";
	}
	  result=0;
	  
  }
    else if((e.keyCode>47)&&(e.keyCode<58)) {
		if(result==0) {
			result=e.keyCode-48;
		}
		else {
			var Ilya=result*10;
			result=Ilya+e.keyCode-48;
		}
	}		  
};
}

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


