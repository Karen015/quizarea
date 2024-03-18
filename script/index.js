import { defaulteLanguage, translates } from "./constants.js";
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





// function foo() {
//  const warrningText = translates[defaulteLanguage].warningText;
//  const warningContainer = document.getElementById('warning')
//   let i = 0;

//   let typeWriter = () =>{
  
//     if(i < warrningText.length){
//       warningContainer.innerHTML += warrningText.charAt(i);
//       i++
//     }
//     setTimeout(typeWriter, 100)
// }

// setTimeout(typeWriter, 100)
// }


// foo()