var [start, end] = ["earth", "moon"];
console.log(start + " calling " + end);
[start, end] = [end, start];
console.log(start + " calling " + end);


function equinox(){
    return [20, "March", 2013, 11, 02];
}
var [date, month, , ,] = equinox();
console.log("This year's equinox was on " + date + month);



function equinox2(){
	return {
			date: 20,
			month: "March",
			year: 2013,
			time: {
				hour: 11,
				minute: 2
			}
		}
}
var {date: d, month: m, time: {hour: h}} = equinox2();
console.log("This year this was on " + d + m + " at " + h);
