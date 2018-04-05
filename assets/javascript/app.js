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
	// the page should fill with still images from the giphy api
	// these still images should be based on a search from the button
	// every gif on the page should load with data embedded in the giv div. the data should be a url for the 'animated' gif, as well as a url for the "still" shot.
	// when the gif is clicked, the src for the gif should switch from the still shot to animated shot, and vice versa
	// the gif should start with the "still" shot as its source.
	// the still shot has essentially the same url as the actual gif, with a "_s" at the end of it "yaddayadda_s.gif" would be a still shot
	$.ajax({
		url: "" //insert giphy api url here
		method: "GET"
	}).then(function(response){
		var results = response.data // this is an array to loop through to pull gifs from!
		for (var i=0; i<results.length; i++) {
			newGif = $("<img>");
			newGif.attr("dataAnimate", results[i].images.downsized.url);
			// add attr for dataStill
			// set src to data still
			// add attr for current state, still or animated
		};
	})
});

