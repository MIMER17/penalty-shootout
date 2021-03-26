let score = [0, 1];
var turn;

var team1 =
{
    name: "MAN UTD",
    runs: [],
    score: 0
}

var team2 =
{
    name: "MAN CITY",
    runs: [],
    score: 0
}

window.onload = () => {
    selecttoss();
    updatescore();
    updatenames();
    updatebuttontext();
}

let selecttoss = () => {
    turn = Math.round(Math.random()) + 1;
}

let updatebuttontext = () => {
    var button = document.getElementById("button");
    
    var result = document.getElementById("result");
    result.style.visibility =  "";
    if(team1.runs.length==5 && team2.runs.length==5 )
    {
        button.remove();
    
   result.textContent = team1.score === team2.score?"Match Draw" :`${team1.score>team2.score?team1.name:team2.name} Wins`;
    }
    else
    {
        turn= turn==1 ?2: turn== 2?1:turn;
     button.textContent = `${turn === 1 ? team1.name : team2.name} Shooting`;
    }
}

let updatescore = () => {
    document.getElementById("team1-score").textContent = team1.score;
    document.getElementById("team2-score").textContent = team2.score;
    updateruns();
}

let updatenames = () => {
    document.getElementById("team1-name").textContent = team1.name;
    document.getElementById("team2-name").textContent = team2.name;
}

// adding behaviour to button 
var buttonclicked = () =>{
   var runs = score[Math.floor(Math.random()*score.length)]
   runs = runs ===5?"W":runs;
   if(turn==1)
   {
       team1.runs.push(runs);
       team1.score = calculatescore(team1.runs);
   }
   else
{
       team2.runs.push(runs);
       team2.score = calculatescore(team2.runs);
}
updatebuttontext();
updatescore();
}

var calculatescore = (runs) =>{
    return runs.map(num=>{
        return num=="W"?0:num;
    }).reduce((total,num)=>total+num)
}

var updateruns = () =>{
    var TeamOne = document.getElementById("team-1-score").children;
    var TeamTwo = document.getElementById("team-2-score").children;
    var color=["red","green"]
    team1.runs.forEach((runs,index) => {
        TeamOne[index].style.background=color[runs];
        
    })
    team2.runs.forEach((runs,index) => {
        TeamTwo[index].style.background=color[runs];
    })
}

updatescore().reload();