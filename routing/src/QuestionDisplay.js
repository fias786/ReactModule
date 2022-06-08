import React from 'react';
const data = require('./questionlist.json');
const QuestionDisplay = () =>{
    return (
        <center>
            <div id="question-list">
                {data.map((ques)=>(<div><div>Q{ques.id}.{ques.question}</div><div>A.{ques.answer}</div></div>))}
            </div>
        </center>
    )
}

export default QuestionDisplay;