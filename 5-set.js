var engines = new Set();

engines.add("Gecko");
engines.add("Trident");
engines.add("Webkit");
// "Double" add - the second statement actually does nothing.
engines.add("Hippo");
engines.add("Hippo");

console.log("Browser engines include Gecko?" + engines.has("Gecko")); // true
console.log("Browser engines include Hippo?" + engines.has("Hippo")); // true
console.log("Browser engines include Indigo?" + engines.has("Indigo")); // false

engines.delete("Hippo");
console.log("Hippo is deleted. Browser engines include Hippo?" + engines.has("Hippo")); // false
