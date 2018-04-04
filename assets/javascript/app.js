var topic = ["fill", "this", "array", "with", "anything"];

// need to create buttons for everything in this array

for (var i=0; i < topic.length; i++) {
	newButton = $("<button>");
	newButton.attr("dataTitle", topic[i]);
	newButton.attr("class", "button");
	newButton.text(topic[i]);
	$("#gifButtons").append(newButton);
};

$("$addButton").on("click, function () {
	newButton = $("<button>");
	newButton.attr("dataTitle", $("#searchInput").val());
	newButton.attr("class", "button");
	newButton.text($("#searchInput").val());
	$("#gifButtons").append(newButton);
})


$(".button").on("click", function () { // using a button class instead of all buttons
	// when you click a button
	// the page should fill with still images from the giphy api
	// these still images should be based on a search from the button
})

