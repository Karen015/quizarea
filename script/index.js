import { defaulteLanguage, translates } from "./constants.js";
import { questions } from "./db.js";
import { valueSetter, tagCreator } from "./helpers.js";
const warrningText = translates[defaulteLanguage].warningText;
    const warningContainer = document.getElementById('warning');
    
(function foo() {
    const speed = 50;
    let i = 0;

    const typeWriter = () => {

        if (i < warrningText.length) {
          warningContainer.innerHTML += warrningText[i]
          i++
        }
    setTimeout(typeWriter, speed)
    }
    
 typeWriter()
 
})()




const quizGenerator = (quizlist) => {
    let quizStep = 0;
    const question = quizlist[quizStep];

    return () => {
      valueSetter('#quiz_title', question.quizTitle);
      valueSetter('#helpers', question.quiz);
      
      question.options.forEach(quiz => {
        tagCreator('li', document.getElementById('quiz_options'), quiz)
      });
    }
  
}


const quizConfig = quizGenerator(questions)


quizConfig()
