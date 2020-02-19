let questions = [
    {
        id:1,
        ques : 'What does Bangladesh\'s flag look like?',
        op1 : 'Blue background with yellow star in centre',
        op2 : 'Green background with red circle in centre',
        op3 : 'Red background with white circle in centre',
        ans : 2,
    },
    {
        id:2,
        ques : 'What year did Bangladesh finally become independent and gain the name it has today?',
        op1 : '1947',
        op2 : '1971',
        op3 : '1952',
        ans : 2,
    },
    {
        id:3,
        ques : 'What is the national flower of Bangladesh?',
        op1 : 'Water lily',
        op2 : 'Rose',
        op3 : 'Tulip',
        ans : 1,
    },
    {
        id:4,
        ques : 'What did Bangladesh become known as after its first session of Independence in 1947?',
        op1 : 'East Pakistan',
        op2 : 'West Pakistan',
        op3 : 'East India',
        ans : 1,
    },
    {
        id:5,
        ques : 'What is the main religion practiced in Bangladesh?',
        op1 : 'Buddism',
        op2 : 'Islam',
        op3 : 'Hinduism',
        ans : 2,
    },
    {
        id:6,
        ques : 'On which continent is Bangladesh located?',
        op1 : 'Africa',
        op2 : 'Asia',
        op3 : 'Europe',
        ans : 2,
    },
    {
        id:7,
        ques : 'Which district of Bangladesh was part of Assam?',
        op1 : 'Chittagong',
        op2 : 'Khulna',
        op3 : 'Sylhet',
        ans : 3,
    },
    {
        id:8,
        ques : 'To which Indian Lieutenant General did Pakistani Lieutenant General Niazi surrendered ?',
        op1 : 'Sheikh Mujibur Rahman',
        op2 : 'Zia-ur-Rahman',
        op3 : 'J. S. Aurora',
        ans : 3,
    },
    {
        id:9,
        ques : 'Which river of Bangladesh originates in Tibet?',
        op1 : 'Brahmaputra',
        op2 : 'Padma',
        op3 : 'Surma',
        ans : 2,
    },
    {
        id:10,
        ques : 'Which party won the elections in Pakistan in 1970 and was not allowed to form government?',
        op1 : 'Muslim League',
        op2 : 'Awami League',
        op3 : 'Pakistan People\'s Party',
        ans : 1,
    },
    {
        id:11,
        ques : 'What was the major event of 1971?',
        op1 : 'Nawaz Sharif became Prime Minister',
        op2 : 'Bangladesh broke away from Pakistan',
        op3 : 'Tashkent Agreement',
        ans : 2,
    },
    {
        id:12,
        ques : 'What is the Time Zone of Bangladesh ?',
        op1 : 'Utc + 5',
        op2 : 'Utc + 6',
        op3 : 'Utc + 4',
        ans : 2,
    },
    {
        id:13,
        ques : 'What is the name of national parliament of Bangladesh ?',
        op1 : 'Dhaka Sangshad',
        op2 : 'Bangladesh Sangshad',
        op3 : 'Jatiyo Shangshad',
        ans : 3,
    },
    {
        id:14,
        ques : 'The world\'s largest river delta found in Bangladesh is the delta of which river ?',
        op1 : 'Ganga',
        op2 : 'Brahmaputra',
        op3 : 'Padma',
        ans : 2,
    },
    {
        id:15,
        ques : 'Which area of sea lies to the south of Bangladesh ?',
        op1 : 'South China Sea',
        op2 : 'Indian Sea',
        op3 : 'Bay of Bengal',
        ans : 3,
    },
    {
        id:16,
        ques : 'question16',
        op1 : 'option1',
        op2 : 'option2',
        op3 : 'option3',
        ans : 2,
    },
    {
        id:17,
        ques : 'question17',
        op1 : 'option1',
        op2 : 'option2',
        op3 : 'option3',
        ans : 2,
    },
    {
        id:18,
        ques : 'question18',
        op1 : 'option1',
        op2 : 'option2',
        op3 : 'option3',
        ans : 1,
    },
    {
        id:19,
        ques : 'question19',
        op1 : 'option1',
        op2 : 'option2',
        op3 : 'option3',
        ans : 3,
    },
    {
        id:20,
        ques : 'question20',
        op1 : 'option1',
        op2 : 'option2',
        op3 : 'option3',
        ans : 2,
    },
];
let result = [];
let selected=[],num;
// selected.push(123);
// console.log(questions[0]);
let currentQ=-1,score=0;
function generateQuiz() {
    num = document.getElementById('qnum').value;
    if(num>20 || num<1){
        alert("select Question Number Between 1 to 20")
        return;
    }
    document.getElementById('quizs').classList.remove("hid");
    
    document.getElementById('totalQuestions').innerHTML = "Total Questions : "+num;
    document.getElementById('qzStartBtn').classList.add("hid");
    for (let i=0; i<num; i++)
    {
        let elem = Math.random()*20;
        elem = Math.ceil(elem)-1;
        if( selected.includes(elem))
        {
            i--;
            continue;
        }
        selected.push(elem);
    }
    selected.sort()

    generateQuestions();
}
function generateQuestions(){
    if(currentQ > -1)
        matchAnswer()
    currentQ++;
    if(currentQ == num)
    {
        getResult();
    }
    document.getElementById('qNO').innerHTML='Question'+(currentQ+1);
    document.getElementById('op1').innerHTML=questions[selected[currentQ]].op1;
    document.getElementById('op2').innerHTML=questions[selected[currentQ]].op2;
    document.getElementById('op3').innerHTML=questions[selected[currentQ]].op3;
    console.log(selected[currentQ])
    console.log(questions[selected[currentQ]].ans)
    let qname=questions[selected[currentQ]].ques;
    document.getElementById('question').innerHTML=qname;
    if(currentQ == (num-1))
    {
        document.getElementById('nextQs').innerHTML="Show Result";
    }
}


function matchAnswer(){
    let obj = questions[selected[currentQ]]
    let rans = obj.ans
    let rightans = (rans === 1 ? 'A . ' + obj.op1 : (rans === 2 ? 'B . ' + obj.op2 : 'C . ' + obj.op3))
    if (document.getElementById('rb1').checked) {
        if(rans === 1)
        {
            score++;
            result.push({
                question:questions[selected[currentQ]].ques,
                sol:rightans,
                yourAns:rightans
            });
        }
        else{
            result.push({
                question:questions[selected[currentQ]].ques,
                sol:rightans,
                yourAns:'A . ' + obj.op1
            });
            document.getElementById('rb1').checked = false;
        }
    }
    else if (document.getElementById('rb2').checked) {
        answer=2

        if(rans === 2)
        {
            score++;
            result.push({
                question:questions[selected[currentQ]].ques,
                sol:rightans,
                yourAns:rightans
            });
        }
        else{
            result.push({
                question:questions[selected[currentQ]].ques,
                sol:rightans,
                yourAns:'B . '+ obj.op2
            });
        }
        document.getElementById('rb2').checked = false;
    }
    else if (document.getElementById('rb3').checked) {
        answer=3;
        if(rans === 3)
        {
            score++;
            result.push({
                question:questions[selected[currentQ]].ques,
                sol: rightans,
                yourAns: rightans
            });
        }
        else{
            result.push({
                question:questions[selected[currentQ]].ques,
                sol:rightans,
                yourAns:'C . '+ obj.op3
            });
        }
        document.getElementById('rb3').checked = false;
    }
}
function getResult(){
    document.getElementById('quizs').classList.add("hid");
    document.getElementById('totalQuestions').innerHTML = "Correct Answers : "+score;
    console.log(result);
    viewResult();
}
function viewResult() {
    document.getElementById('finalResult').classList.remove("hid");
    for(let j=0; j<num; j++)
    {
        var para = document.createElement("h2");
        para.innerHTML = (j+1)+" . " + result[j].question;
        document.getElementById("result").appendChild(para);



        var para = document.createElement("p");
        para.innerHTML = "Correct Answer"+" . " + result[j].sol;
        document.getElementById("result").appendChild(para);


        var para = document.createElement("p");
        para.innerHTML ="Your Answer"+" . " + result[j].yourAns;
        document.getElementById("result").appendChild(para);
    }
    var c = document.getElementById('result').children;
    var i;
    for (i = 0; i < c.length; i++) {
        c[i].classList.add('mt3');
    }
}
