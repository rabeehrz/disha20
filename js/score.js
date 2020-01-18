//Techie: EC(30)
//Disha Idol: EC(25)
//RJ HUNT: EE(25)
var points = {
    "EC": 55,
    "CS": 0,
    "CE": 0,
    "ME": 0,
    "EE": 25,
    "Arch": 0
};
for(var i = 0; i < events.length; i++) {
    var date = events[i];
    for(var j = 0; j < date.events.length; j++) {
        var winners = date.events[j].winners
        for(var k = 0; k < winners.length; k++) {
            points[winners[k].name] += winners[k].points
        }
    }
}

var pointTable = [
    ["Electronics Dept.", points["EC"]],
    ["Computer Science Dept.", points["CS"]],
    ["Civil Dept.", points["CE"]],
    ["Mechanical Dept.", points["ME"]],
    ["Electrical Dept.", points["EE"]],
    ["Architecture Dept.", points["Arch"]],
]
pointTable.sort(function(a, b) {
    if(a[1] == b[1]) {
        console.log(a, b)
        return (b[0] > a[0]) ? -1 : 1;
    } else {
        return b[1] - a[1]
    }
});

var table = document.getElementById("score-table");
for(var i = 0; i < pointTable.length; i++) {
    let tr = document.createElement('TR');

    let position = document.createElement('TD');
    position.appendChild(document.createTextNode(i+1));
    tr.appendChild(position)

    var deptName = document.createElement('TD');
    deptName.appendChild(document.createTextNode(pointTable[i][0]));
    tr.appendChild(deptName)

    var score = document.createElement('TD');
    score.appendChild(document.createTextNode(pointTable[i][1]));
    tr.appendChild(score);

    table.appendChild(tr);
}