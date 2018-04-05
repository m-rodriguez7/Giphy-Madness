var topic = ["fill", "this", "array", "with", "anything"];

// need to create buttons for everything in this array

for (var i=0; i < topic.length; i++) {
	var newButton = $("<button>");
	newButton.attr("data-title", topic[i]);
	newButton.attr("class", "button");
	newButton.text(topic[i]);
	$("#gifButtons").append(newButton);
};

$('body').on("click", "#addButton", function () {
	event.preventDefault();
	var newButton = $("<button>");
	newButton.attr("data-title", $("#searchInput").val());
	newButton.attr("class", "button");
	newButton.text($("#searchInput").val());
	$("#gifButtons").append(newButton);
})


$('body').on("click", ".button", function () { // using a button class instead of all buttons
	// the page should fill with still images from the giphy api
	// these still images should be based on a search from the button
	// every gif on the page should load with data embedded in the giv div. the data should be a url for the 'animated' gif, as well as a url for the "still" shot.
	// when the gif is clicked, the src for the gif should switch from the still shot to animated shot, and vice versa
	// the gif should start with the "still" shot as its source.
	// the still shot has essentially the same url as the actual gif, with a "_s" at the end of it "yaddayadda_s.gif" would be a still shot
	var q = $(this).attr("data-title");
	console.log(q);
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=a19C7JNrKpMJFEiHkfo7O7E6VOmYfAx4&q="+q+"&lang=en&limit=10"
	$.ajax({
		url: queryURL, //insert giphy api url here
		method: "GET"
	}).then(function(response){
		var results = response.data // this is an array to loop through to pull gifs from!
		for (var i=0; i<results.length; i++) {
			newGif = $("<img>");
			newGif.attr("data-animate", results[i].images.downsized.url);
			// add attr for data-still
			newGif.attr("data-still", results[i].images.downsized_still.url);
			// set src to data still
			newGif.attr("src", results[i].images.downsized_still.url);
			// add attr for current state, still or animated
			newGif.attr("data-state", "still");
			// append gif to page
			newGif.attr("class", "gif");
			$("#gifs").append(newGif);
			console.log("gifs should be appearing");
		};
	})
});

$('body').on("click", ".gif", function () {
	// The attr jQuery method allows us to get or set the value of any attribute on our HTML element
	var state = $(this).attr("data-state");
	// If the clicked image's state is still, update its src attribute to what its data-animate value is.
	// Then, set the image's data-state to animate
	// Else set src to the data-still value
	console.log("function activated")
	if (state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");
	} else {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
	}
});
