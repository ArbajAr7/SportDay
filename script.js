// Initialize the scores
let scores = { red: 0, blue: 0, green: 0, yellow: 0 };

// Opening Ceremony function
function OpeningCeremony(scores, callback) {
    console.log("Let the games begin");
    setTimeout(() => {
        document.getElementById("xyz").innerHTML += `<p>Scores at the start: ${JSON.stringify(scores)}</p>`
        console.log("Scores at the start: ", scores);
        callback(scores, Race100M);
    }, 1000);
}

// Race100M function
function Race100M(scores, callback) {
    setTimeout(() => {
        const times = {
            red: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10,
        };
        document.getElementById("xyz").innerHTML += `<p>Race 100M Random times: ${JSON.stringify(times)}</p>`
        console.log("Race 100M Random times: ", times);
        const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
        
        scores[sortedColors[0]] += 50;
        scores[sortedColors[1]] += 25;
        document.getElementById("xyz").innerHTML += `<p>Updated Scores after Race100M:  ${JSON.stringify(scores)}</p>`
        document.getElementById("xyz").innerHTML += `<p style="color:green">******************************************</p>`
        document.getElementById("xyz").innerHTML += `<p style="color:green">${sortedColors[0]} wins the Race100M</p>`
        document.getElementById("xyz").innerHTML += `<p style="color:green">******************************************</p>`
        console.log("Updated Scores after Race100M: ", scores);
        console.log(`${sortedColors[0]} wins the Race100M`);
        callback(scores, LongJump);
    }, 3000);
}

// LongJump function
function LongJump(scores, callback) {
    setTimeout(() => {
        const colors = ['red', 'blue', 'green', 'yellow'];
        const winner = colors[Math.floor(Math.random() * colors.length)];
        
        scores[winner] += 150;
        document.getElementById("xyz").innerHTML += `<p>Updated Scores after LongJump: ${JSON.stringify(scores)}</p>`
        document.getElementById("xyz").innerHTML += `<p style="color:green">******************************************</p>`
        document.getElementById("xyz").innerHTML += `<p style="color:green">${winner} wins the LongJump</p>`
        document.getElementById("xyz").innerHTML += `<p style="color:green">******************************************</p>`
        console.log("Updated Scores after LongJump: ", scores);
        console.log(`${winner} wins the LongJump`);
        callback(scores, HighJump);
    }, 2000);
}

// HighJump function
function HighJump(scores, callback) {
    setTimeout(() => {
        const color = prompt("What color secured the highest jump?");
        
        if (color in scores) {
            scores[color] += 100;
            document.getElementById("xyz").innerHTML += `<p>Updated Scores after HighJump: ${JSON.stringify(scores)}</p>`
            document.getElementById("xyz").innerHTML += `<p style="color:green">******************************************</p>`
            document.getElementById("xyz").innerHTML += `<p>${color} wins the HighJump</p>`
            document.getElementById("xyz").innerHTML += `<p style="color:green">******************************************</p>`
            console.log("Updated Scores after HighJump: ", scores);
            console.log(`${color} wins the HighJump`);
        } else {
            document.getElementById("xyz").innerHTML += `<p style="color:red">******************************************</p>`
            document.getElementById("xyz").innerHTML += `<p style="color:red">Event was cancelled</p>`
            document.getElementById("xyz").innerHTML += `<p style="color:red">******************************************</p>`
            console.log("Event was cancelled");
        }
        
        callback(scores, AwardCeremony);
    }, 1000);
}

// AwardCeremony function
function AwardCeremony(scores) {
    console.log("Final Scores: ", scores);
    const sortedScores = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

    document.getElementById("xyz").innerHTML += `<p style="color:green">******************************************</p>`
    document.getElementById("xyz").innerHTML += `<p style="color:green">${sortedScores[0]} came first with ${scores[sortedScores[0]]} points.</p>`
    document.getElementById("xyz").innerHTML += `<p style="color:green">${sortedScores[1]} came second with ${scores[sortedScores[1]]} points.</p>`
    document.getElementById("xyz").innerHTML += `<p style="color:green">${sortedScores[2]} came third with ${scores[sortedScores[2]]} points.</p>`

    document.getElementById("xyz").innerHTML += `<p style="color:green">******************************************</p>`



    console.log(`${sortedScores[0]} came first with ${scores[sortedScores[0]]} points.`);
    console.log(`${sortedScores[1]} came second with ${scores[sortedScores[1]]} points.`);
    console.log(`${sortedScores[2]} came third with ${scores[sortedScores[2]]} points.`);
}

// Start the Sports Day
OpeningCeremony(scores, (scores, nextCallback) => {
    Race100M(scores, (scores, nextCallback) => {
        LongJump(scores, (scores, nextCallback) => {
            HighJump(scores, AwardCeremony);
        });
    });
});
