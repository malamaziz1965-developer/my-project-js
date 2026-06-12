<!DOCTYPE html><html>
<head>
<meta charset="UTF-8">
<title>Islamic Studies Examination</title><style>
body{
    font-family: Arial, sans-serif;
    margin: 20px;
    line-height: 1.8;
}

h1,h2,h3{
    text-align:center;
}

.question{
    margin-bottom:20px;
}

input[type=text]{
    width:300px;
    padding:5px;
}

button{
    padding:10px 20px;
    font-size:16px;
}

#result{
    margin-top:30px;
    border:1px solid #000;
    padding:15px;
}
</style></head>
<body><h1>DE-ELITE MUSLIM MONTESSORI SCHOOLS</h1>
<h2>3rd Term Examination</h2>
<h3>Subject: Islamic Studies</h3><form id="examForm"><p>
<strong>Pupil's Name:</strong><br>
<input type="text" id="name" required>
</p><p>
<strong>Class:</strong><br>
<input type="text" id="class" required>
</p><hr><div class="question">
<p><strong>1. What is the meaning of As-Sawm?</strong></p><label><input type="radio" name="q1" value="A. Prayer"> A. Prayer</label><br>
<label><input type="radio" name="q1" value="B. Fasting"> B. Fasting</label><br>
<label><input type="radio" name="q1" value="C. Charity"> C. Charity</label><br>
<label><input type="radio" name="q1" value="D. Hajj"> D. Hajj</label>

</div><div class="question">
<p><strong>2. Muslims fast during the month of __________.</strong></p><label><input type="radio" name="q2" value="A. Shawwal"> A. Shawwal</label><br>
<label><input type="radio" name="q2" value="B. Rajab"> B. Rajab</label><br>
<label><input type="radio" name="q2" value="C. Ramadan"> C. Ramadan</label><br>
<label><input type="radio" name="q2" value="D. Muharram"> D. Muharram</label>

</div><div class="question">
<p><strong>3. Fasting in Ramadan is the ______ pillar of Islam.</strong></p><label><input type="radio" name="q3" value="A. First"> A. First</label><br>
<label><input type="radio" name="q3" value="B. Second"> B. Second</label><br>
<label><input type="radio" name="q3" value="C. Third"> C. Third</label><br>
<label><input type="radio" name="q3" value="D. Fourth"> D. Fourth</label>

</div><button type="button" onclick="submitExam()">
Submit Examination
</button></form><div id="result"></div><script>

function submitExam(){

    const answers = {
        q1: "B. Fasting",
        q2: "C. Ramadan",
        q3: "D. Fourth"
    };

    let score = 0;

    let pupilName = document.getElementById("name").value;
    let pupilClass = document.getElementById("class").value;

    let report = "";

    for(let question in answers){

        let selected =
        document.querySelector(
        'input[name="' + question + '"]:checked'
        );

        if(selected){

            if(selected.value === answers[question]){
                score++;
            }

            report +=
            "<p><strong>" +
            question.toUpperCase() +
            ":</strong> " +
            selected.value +
            "</p>";

        }else{

            report +=
            "<p><strong>" +
            question.toUpperCase() +
            ":</strong> No Answer</p>";
        }
    }

    document.getElementById("result").innerHTML =
    "<h2>Examination Result</h2>" +
    "<p><strong>Name:</strong> " + pupilName + "</p>" +
    "<p><strong>Class:</strong> " + pupilClass + "</p>" +
    "<p><strong>Score:</strong> " + score + " / 3</p>" +
    "<h3>Your Answers</h3>" +
    report;
}

</script></body>
</html>

