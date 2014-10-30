// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require moment
//= require_tree .
$(document).foundation();
$(function(){ $(document).foundation(); });

$.getJSON( "https://api.github.com/users/deedeelavinder", function( user ) {
	$(".avatar").html('<img src="'+ user.avatar_url + '">');
	$(".name").append(user.name);
	$(".username").append(user.login);
	$(".blog").append(user.blog);
	$(".location").append(user.location);
	$(".email").append(user.email);
	$(".member-since").append(moment(user.created_at).format("MMM Do YYYY"));


});

$.ajax({
	dataType: "json",
	url: "https://api.github.com/users/deedeelavinder/repos",
	data: {},
	success: function (data) {
		var links = $.map(data,
			function (result) {
				return "<li><a href='" + result.html_url + "'>" + result.name + "</a></li>";
			});

		$("#repo-links")
			.find(".results")
			.html("<ul></ul>")
			.children("ul")
			.append(links);
		console.log("completed request");
	}
});