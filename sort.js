
function PlayersList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}


function Player(name, jerseyNumber, pointsScored) {
    this.name = name;
    this.jerseyNumber = jerseyNumber;
    this.pointsScored = pointsScored;
    this.next = null
}


PlayersList.prototype.swapSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (var k = i + 1; k < arr.length; k++) {

            if (arr[k] < arr[minIndex]) {
                minIndex = k
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}

PlayersList.prototype.insert = function (name, jerseyNumber, pointsScored) {
    const player = new Player(name, jerseyNumber, pointsScored, this.tail);
   
    if (!this.head && !this.tail) {
        this.head = player;
        this.tail = player;
    }
    else {
        this.tail.next = player;
        this.tail = player;
    }

    this.length++;
}



PlayersList.prototype.search = function (jerseyNumber) {
    var currentPlayer = this.head
    while (currentPlayer) {
        console.log(currentPlayer)
        if (currentPlayer.jerseyNumber === jerseyNumber) return "i found " + player + "!";

    }
    return "I did not find " + jerseyNumber; + "..."
}

PlayersList.prototype.nameSorted = function () {
    var currentPlayer = this.head
    var names = []
    while (currentPlayer) {
        names.push(currentPlayer)
        currentPlayer = currentPlayer.next
    }
    GSW.swapSort(names)
    return names
}

PlayersList.prototype.sortedTopTen = function () {
    var currentPlayer = this.head
    var scoresArr = []
    while (currentPlayer) {
        scoresArr.push(currentPlayer.pointsScored)
        currentPlayer = currentPlayer.next
    }
   for (var i = 0; i < scoresArr.length; i++) {
        var sortedScores = GSW.swapSort(scoresArr).slice(3).reverse();

    }
    
    return sortedScores
}







var GSW = new PlayersList();
GSW.insert("Draymond Green", 23, 11)
GSW.insert("Damian Jones", 15, 2)
GSW.insert("Stephen Curry", 30, 26)
GSW.insert("David West", 3, 7)
GSW.insert("Klay Thompson", 11, 20)
GSW.insert("Nick Young", 6, 7)
GSW.insert("JaVale McGee", 7, 5)
GSW.insert("Shaun Livingston", 34, 6)
GSW.insert("Quinn Cook", 4, 10)
GSW.insert("Patrick McCaw", 0, 4)
GSW.insert("Jordan Bell", 2, 4)
GSW.insert("Andre Iguodala", 9, 6)
GSW.insert("Kevin Durant", 35, 26)

