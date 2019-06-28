/*global $ */
$(document).ready(function () {
    $("#backonButton").click(function() {
        $.ajax({
            url: "https://baconipsum.com/api/?callback=?",
            data: {
                "type": "meat-and-filler",
                "start-with-lorem": "1",
                "paras": "3"
            },
            dataType: "json",
            jsonpCallback: "bulki"
        });
    });
});

function bulki(baconGoodness) {
    if(baconGoodness && baconGoodness.length > 0) {
        $("#baconIpsumOutput").html("");
        for(var i = 0; i < baconGoodness.length; i++)
            $("#baconIpsumOutput").append("<p>" + baconGoodness[i] + "</p>");
    }
}
