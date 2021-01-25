var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
};

// FUNCTION RETURNING THE LIST LENGTH ARRAY
function listLength(){
	return listItems.length;
};

// FUNCTION CREATING NEW LIST ITEM AND APPENDING TO SHOPPING LIST, AS WELL AS ADDING A DELETE BUTTON TO NEW L.I
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var del = document.createElement("button");
	del.appendChild(document.createTextNode("Delete!"));
	li.appendChild(del);
	del.onclick = removeParent;
};

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	
	}
};

// CALLBACK FUNCTION ALLOWING FOR KEYPRESS TO WORK FOR INPUT FIELD
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	
	}
};

ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}

// DELETE BUTTON APPENDING TO LIST ITEMS
function deleteButton(){
	var del = document.createElement("button");
	del.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(del);
	del.onclick = removeParent;
};

for(i = 0; i < listLength(); i++){
	deleteButton();
};

function removeParent(e){
	e.target.parentNode.remove();
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress)

