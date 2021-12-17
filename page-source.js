var string = document.characterSet;

window.onload = function() {
	if(!string) {
	alert(document.all);
}
else {
	alert("");
}
}

var sop = document.createElement('button');
sop.id = "sources";
sop.textContent = "Page Source";
document.body.appendChild(sop);
stylbutton(sop);


var op = document.createElement('div');
var oks = document.createAttribute('spellcheck');
oks.value = "false";
op.id = "status";
document.body.appendChild(op);
op.setAttributeNode(oks);
stylbuttons(op);


function stylbutton(ids) {
	ids.style.display = "inline-block";
	ids.style.backgroundColor = "blue";
	ids.style.color = "white";
	ids.style.fontWeight = "bolder";
	ids.style.position = "fixed";
	ids.style.padding = "10px 12px";
	ids.style.border = "none";
	ids.style.outline = "none";
	ids.style.top = "-6px";
	ids.style.left = "8px";
	ids.style.zIndex = "10000000000000000000000000000";
}

function stylbuttons(idss) {
idss.style.border =  "5px solid black";
idss.style.backgroundColor =  "black";
idss.style.width =  "95%";
idss.style.display =  "none";
idss.style.height =  "400px";
idss.style.overflowY =  "scroll";
idss.style.overflowX =  "hidden";
idss.style.padding =  "20px";
idss.style.fontSize = "16px";
idss.style.color = "white";
idss.style.fontFamily =  "system-ui";
idss.style.fontWeight =  "bolder";
idss.style.position =  "fixed";
idss.style.top = "30px";
idss.style.zIndex = "10";
}


var getty = document.getElementById("sources");
var sources = document.all;

getty.onclick = function() {
	checkformeta(sources);
	stylesheetnotwork();
	showandhide();
}



function showandhide() {
  var show = document.getElementById("status");
  if (show.style.display === "none") {
    show.style.display = "block";
    sop.textContent = "Page Source - " + document.all.length + " lines of codes";
  } else {
    show.style.display = "none";
    sop.textContent = "Page Source";
  }
}


function checkformeta(source) {
for(var i = 0; i < source.length; i++) {
     var get = source[i].innerHTML;
     document.getElementById("status").innerText =  get;
     break;
 }
}


function stylesheetnotwork() {
	if(document.styleSheets.length > 1) {
     	console.log("style sheet working");
     }
     else if (document.styleSheets.length == 0) {
     	console.log("style sheet not working");
     }
    else {
     	console.log("style sheet not working");
     }
}

function mody() {
	if(document.readyState == "complete") {
	alert("everything loaded perfectly");
}
else {
	alert("wait for few minutes to load a web page");
}
}

mody();
