player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn -  " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn -  " + player2_name;

question_turn="player1";
answer_turn="player2";
function send() {
    no1 = document.getElementById("1").value;
    no2 = document.getElementById("2").value;
    result = no1 * no2;
    question = "<h4 id='word_display'>Q." + no1 + " X " + no2 + "</h4>";
    input = "<br>answer:<input type='text' id='input_check_box'>";
    check1= "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";

    row = question + input + check1;
    document.getElementById("output").innerHTML = row;

    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == result) {
        if (answer_turn == "player1") { player1_score = player1_score + 1; document.getElementById("player1_score").innerHTML = player1_score; }
        else { player2_score = player2_score + 1; document.getElementById("player2_score").innerHTML = player2_score; }
    } if (question_turn == "player1") { question_turn = "player2";document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name; }
    else { question_turn = "player1";document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name; } if (answer_turn == "player1") { answer_turn = "player2"; document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name; }
    else { answer_turn = "player1";document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name; } document.getElementById("output").innerHTML;
}