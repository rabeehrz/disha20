var results = []

for(var i = 0; i < events.length; i++) {
    var day = events[i]
    for(var j = 0; j < day.events.length; j++) {
        var event = day.events
        results.push({name: event[j].name, winners: event[j].winners})
    }
}


results.sort(function(a, b) {
    return (b.name > a.name) ? -1 : 1;
});

var resultContainer = document.getElementById("result-container")

for(var i = 0; i < results.length; i++) {
    if(results[i].winners.length < 1) {
        continue;
    }
    var eventContainer = document.createElement('DIV');
    eventContainer.className = "event-container";

    var eventName = document.createElement('H3')
    eventName.className = "event-name";
    eventName.appendChild(document.createTextNode(results[i].name));
    eventContainer.appendChild(eventName);

    var winnersList = document.createElement('UL');
    winnersList.className = "winners";

    for(var j = 0; j < results[i].winners.length; j++) {
        var winner  = document.createElement('LI');

        var winnerSpan = document.createElement('SPAN');
        winnerSpan.className = "winner-name";
        winnerSpan.appendChild(document.createTextNode((j + 1) + ". " + results[i].winners[j].name));
        winner.appendChild(winnerSpan);

        var scoreSpan = document.createElement('SPAN');
        scoreSpan.className = "winner-points";
        scoreSpan.appendChild(document.createTextNode(results[i].winners[j].points + " pts."));
        winner.appendChild(scoreSpan);

        winnersList.appendChild(winner)
    }

    eventContainer.appendChild(winnersList)

    resultContainer.appendChild(eventContainer)

}