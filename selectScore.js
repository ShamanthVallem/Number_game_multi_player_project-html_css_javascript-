var num_p;  
var maxScore;
var players;

var container = document.getElementById("numbers");
var displayButtons = document.getElementById("buttons");

function play(){
    // if(i > 0){
    //     window.location.reload()
    // }
    // window.location.href = "play.html";

    document.getElementById("total").style.display = "none";
    document.getElementById("inputs").style.display = "none";
    maxScore = document.getElementById("scoreSelector").value;
    console.log("max score is " + maxScore);
    
    players = document.getElementById("numOfPlayers").value;
    if(players == "select" || maxScore == "select"){
        alert("Please set target and select Number of Players");
        window.location.reload();
        exit();
    }
    console.log("Number of players are "+players);
    // var j;
    // for(var i = maxScore; i > 0; i--){
    //     console.log(i);
    //     var num_p = document.createElement("p");
    //     if(i == 10){
    //         var breakLine = document.createElement("p");
    //         document.body.appendChild(breakLine);
    //     }
    //     var num_value = document.createTextNode(i);
    //     num_p.appendChild(num_value);
        // num_p.style.margin = "2px";
        // num_p.style.backgroundColor = "yellow";
        // num_p.style.fontSize = "26px";
        // num_p.style.padding = "5px";
        // num_p.style.border= "2px solid white";
        // num_p.style.borderRadius= "5px";

    //     document.getElementById("numbers").appendChild(num_p);
    // }
    


    var line_number = 0;
    var k;
    var no_of_lines;
    if(maxScore == 100){
        k = 100;
        no_of_lines = 10;
    }
    if(maxScore == 90){
        k = 90;
        no_of_lines = 9;
    }
    if(maxScore == 80){
        k = 80;
        no_of_lines = 8;
    }
    if(maxScore == 70){
        k = 70;
        no_of_lines = 7;
    }
    if(maxScore == 60){
        k = 60;
        no_of_lines = 6;
    }
    if(maxScore == 50){
        k = 50;
        no_of_lines = 5;
    }
    for(var i = 0; i< no_of_lines; i++){
        
        if(line_number%2 == 0){
            var div_box = document.createElement("div");
            for(var j = k; j >= k-9; j--){
                // printf(j);
                num_p = document.createElement("p");
                if(j%10 == 0 && j != 100 && (maxScore == 100 || maxScore == 80 || maxScore == 60)){
                    var num_value = document.createTextNode("0" + j); 
                }
                else if((j >= 1 && j < 10) && (maxScore == 90 || maxScore == 70 || maxScore == 50)){
                    var num_value = document.createTextNode("0" + j);
                }
                else{
                    var num_value = document.createTextNode(j);
                }
                num_p.appendChild(num_value);
                div_box.appendChild(num_p);
                // document.body.appendChild(div_box);
                container.appendChild(div_box);

                num_p.setAttribute("id", "num" + j);

                num_p.style.margin = "4px";
                num_p.style.backgroundColor = "yellow";
                num_p.style.fontSize = "26px";
                num_p.style.padding = "5px";
                num_p.style.border= "2px solid white";
                num_p.style.borderRadius= "5px";
                div_box.style.display = "flex";

                console.log(j);
            }
            k = k-10;
        }
        else if(line_number%2 == 1){
            var div_box_2 = document.createElement("div");
            for(var j = k-9; j <= k; j++){
                // printf(j);
                console.log(j);
                var num_p = document.createElement("p");
                if((j%10 == 1 || (j > 1 && j < 10))  && (maxScore == 100 || maxScore == 80 || maxScore == 60)){
                    var num_value = document.createTextNode("0" + j); 
                }


                else{
                    var num_value = document.createTextNode(j);
                }
                if(j == 1){
                    var num_value = document.createTextNode("00" + j); 
                }   
                num_p.appendChild(num_value);
                div_box_2.appendChild(num_p);
                // document.body.appendChild(div_box_2);
                container.appendChild(div_box_2);

                num_p.setAttribute("id", "num" + j);

                num_p.style.margin = "4px";
                num_p.style.backgroundColor = "yellow";
                num_p.style.fontSize = "26px";
                num_p.style.padding = "5px";
                num_p.style.border= "2px solid white";
                num_p.style.borderRadius= "5px";
                div_box_2.style.display = "flex";
                container.style.marginLeft = " 100px";
                // div_box_2.style.flexDirection = "column";

            }
            k = k-10;
        }
        
            line_number++;
            
            // if(line_number < 10){
            //     // printf("\n");
            //     // document.write("<br>")
            //     // var breakLine = document.createElement("br");
            //     // document.body.appendChild(breakLine);
            //     console.log("\n");
            // }
        
    } 
    
    // var diceButton = document.createElement("button");
    // var diceImage = document.createElement("img");
    // diceImage.src = "dice.png";
    // diceButton.appendChild(diceImage);
    // document.body.appendChild(diceButton);
    // diceImage.style.width = " 40px";
    
    document.getElementById("dicePic").style.display = "block";


    // if(players == 2){
        for(var p = 0; p < players; p++){
            var button = document.createElement("button");
            var buttonValue = document.createTextNode("player" + (p+1));
            console.log("p is "+ p);
            button.appendChild(buttonValue);
            // document.body.appendChild(button);
            displayButtons.appendChild(button);

            button.style.width = "10%";
            button.style.height = "6vh";
            button.style.margin = "10px";
            button.style.fontSize = "26px";
            button.style.color = "white";
            button.style.border = "2px solid white  ";
            button.style.borderRadius = "15px";
            button.style.opacity = "0.5";

            if(p == 0){
                button.style.backgroundColor = "blue";
                button.style.opacity = "1";
                button.setAttribute("id", "b1");
                // $("#dicePic").animate({right: '300px'});
            }
            if(p == 1){
                button.style.backgroundColor = "green";
                button.setAttribute("id", "b2");
            }
            if(p == 2){
                button.style.backgroundColor = "brown";
                button.setAttribute("id", "b3");
            }
            if(p == 3){
                button.style.backgroundColor = "red";
                button.setAttribute("id", "b4");
            }
        }
    // }

    var modifyVal = document.createElement("button");
    var edit = document.createTextNode("Edit");
    modifyVal.appendChild(edit);
    document.body.appendChild(modifyVal);
    // modifyVal.style.width = "10%";
    modifyVal.setAttribute("id", "editValues");
    modifyVal.setAttribute("onclick", "modify()");


    
}



// var score = 0;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;

var player1 = true;
var player2 = false;
var player3 = false;
var player4 = false;
var diceCount1 = 0;
var diceCount2 = 0;
var diceCount3 = 0;
var diceCount4 = 0;


function rollDice(){

    var randNum = Math.floor(Math.random() * 6) + 1;
    console.log("Random number generated is: " + randNum);
    document.getElementById("randNumberGenerated").innerHTML = "Dice value is " + randNum;

    if((maxScore == 100 && score1 == 100) || (maxScore == 90 && score1 == 90) || (maxScore == 80 && score1 == 80) || (maxScore == 70 && score1 == 70) || (maxScore == 60 && score1 == 60) || (maxScore == 50 && score1 == 50)){
        alert("Congradulations, Player1, You won the game!");
        window.location.reload();
    }
    if((maxScore == 100 && score2 == 100) || (maxScore == 90 && score2 == 90) || (maxScore == 80 && score2 == 80) || (maxScore == 70 && score2 == 70) || (maxScore == 60 && score2 == 60) || (maxScore == 50 && score2 == 50)){
        alert("Congradulations, Player2, You won the game!")
        window.location.reload();
    }
    if((maxScore == 100 && score3 == 100) || (maxScore == 90 && score3 == 90) || (maxScore == 80 && score3 == 80) || (maxScore == 70 && score3 == 70) || (maxScore == 60 && score3 == 60) || (maxScore == 50 && score3 == 50)){
        alert("Congradulations, Player3, You won the game!");
        window.location.reload();
    }
    if((maxScore == 100 && score4 == 100) || (maxScore == 90 && score4 == 90) || (maxScore == 80 && score4 == 80) || (maxScore == 70 && score4 == 70) || (maxScore == 60 && score4 == 60) || (maxScore == 50 && score4 == 50)){
        alert("Congradulations, Player4, You won the game!")
        window.location.reload();
    }

    if(player1 == true){
        // var dScore = score1;
        if(score1 == maxScore-5 && randNum > 5 || score1 == maxScore-4 && randNum > 4 || score1 == maxScore-3 && randNum > 3 || score1 == maxScore-2 && randNum > 2 || score1 == maxScore-1 && randNum > 1){
            // alert("Next step not possible");
        }
        else{
            score1 += randNum;
        }

        if(score1 > 0 && diceCount1 > 0){
            if((score2 != score1-randNum) && (score3 != score1-randNum) && (score4 != score1-randNum)){
                document.getElementById("num" + (score1-randNum)).style.backgroundColor = "yellow";
            }
        }

        console.log("Score1 is " + score1);
        document.getElementById("num" + score1).style.backgroundColor= "blue";
        if(players == 2 || players == 3 || players == 4){
            player2 = true;
            player1 = false;
        }
        diceCount1++;
        // if(dScore > score1){
        //     document.getElementById("num" + score1).style.backgroundColor= "yellow";
        // }
        document.getElementById("b1").style.opacity = "0.5";
        document.getElementById("b2").style.opacity = "1";
        // button.style.opacity = "1";
    }


    else if(player2 == true){

        if(score2 == maxScore-5 && randNum > 5 || score2 == maxScore-4 && randNum > 4 || score2 == maxScore-3 && randNum > 3 || score2 == maxScore-2 && randNum > 2 || score2 == maxScore-1 && randNum > 1){
            alert("Next step not possible");
        }
        else{
            score2 += randNum;
        }

        if(score2 > 0 && diceCount2 > 0){
            if(score1 != score2-randNum && score3 != score2-randNum && score4 != score2-randNum){
                document.getElementById("num" + (score2-randNum)).style.backgroundColor = "yellow";
            }
        }

        console.log("Score2 is " + score2);
        document.getElementById("num" + score2).style.backgroundColor= "green";
        if(players == 2){
            player1 = true;
            player2 = false;    
            console.log("noooooooooooooomber of plaaaayers are " + player1);
        }
        else if(players == 3 || players == 4){
            player2 = false;
            player3 = true;
        }
        diceCount2++;
        // document.getElementById("num" + score1).style.backgroundColor= "yellow";
        document.getElementById("b2").style.opacity = "0.5";
        if(players == 2){
            document.getElementById("b1").style.opacity = "1";
        }
        else{
            document.getElementById("b3").style.opacity = "1";
        }
    }


    else if(player3 == true){

        if(score3 == maxScore-5 && randNum > 5 || score3 == maxScore-4 && randNum > 4 || score3 == maxScore-3 && randNum > 3 || score3 == maxScore-2 && randNum > 2 || score3 == maxScore-1 && randNum > 1){
            alert("Next step not possible");
        }
        else{
            score3 += randNum;
        }

        if(score3 > 0 && diceCount3 > 0){
            if(score3 != score3-randNum && score1 != score3-randNum && score4 != score3-randNum){
                document.getElementById("num" + (score3-randNum)).style.backgroundColor = "yellow";
            }
        }

        console.log("Score3 is " + score3);
        document.getElementById("num" + score3).style.backgroundColor= "brown";
        if(players == 3){
            player1 = true;
            player3 = false;
        }
        else if(players == 4){
            player3 = false;
            player4 = true;
        }
        diceCount3++;
        // document.getElementById("num" + score2).style.backgroundColor= "yellow";
        document.getElementById("b3").style.opacity = "0.5";
        if(players == 4){
            document.getElementById("b4").style.opacity = "1";
        }
        else if(players == 3){
            document.getElementById("b1").style.opacity = "1";
        }
    }


    else if(player4 == true){

        if(score4 == maxScore-5 && randNum > 5 || score4 == maxScore-4 && randNum > 4 || score4 == maxScore-3 && randNum > 3 || score4 == maxScore-2 && randNum > 2 || score4 == maxScore-1 && randNum > 1){
            alert("Next step not possible");
        }
        else{
            score4 += randNum;
        }
        if(score4 > 0 && diceCount4 > 0){
            if(score2 != score4-randNum && score3 != score4-randNum && score1 != score4-randNum){
                document.getElementById("num" + (score4-randNum)).style.backgroundColor = "yellow";
            }
        }
        console.log("Score4 is " + score4);
        document.getElementById("num" + score4).style.backgroundColor= "red";
        player4 = false;
        player1 = true;

        diceCount4++;
        document.getElementById("b4").style.opacity = "0.5";
        document.getElementById("b1").style.opacity = "1";
    }

}

function homeLink(){
    window.location.href = "index.html";
}

function modify(){
    if(confirm("Warning: All your progress will be lost.")){
        window.location.reload();
    }
    
}



// #include<stdio.h>

// int main(){
    

    // int line_number = 0;
    // int k = 100;
    // for(int i = 0; i< 10; i++){
        
    //     if(line_number%2 == 0){
    //         for(int j = k; j >= k-9; j--){
    //             printf("%d ", j);
    //         }
    //         k = k-10;
    //     }
    //     else if(line_number%2 == 1){
    //         for(int j = k-9; j <= k; j++){
    //             printf("%d ", j);
    //         }
    //         k = k-10;
    //     }
        
    //         line_number++;
            
    //         if(line_number < 10){
    //             printf("\n");
    //         }
        
    // }
    
    
// }