// This function takes rest parameters and puts them into the array fixed parameter.
function push(array, ...items){
	items.forEach(function(item){
					array.push(item);
					console.log(item);
				}
			);
}

// 1 fixed + 4 variable parameters
var planets = [];
console.log("Inner planets of our Solar system are: ");
push(planets, "Mercury", "Venus", "Earth", "Mars");


// Spread operator ...weblink splits 'weblink' array for five separate arguments.
function createURL(comment, path, protocol, subdomain, domain, tld){
	var shoutout = comment
		+ ": "
		+ protocol
		+ "://"
		+ subdomain
		+ "."
		+ domain
		+ "."
		+ tld
		+ "/"
		+ path;
		
	console.log(shoutout);
}

var weblink = ["hypertext/WWW/TheProject.html", "http", "info", "cern", "ch"];
comment = "World's first Website";

createURL(comment, ...weblink);
