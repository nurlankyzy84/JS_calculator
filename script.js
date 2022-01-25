let outputBlock = $("#output_block");
let history = $(".history")
let buttonsBlock = $("#buttons_block");

let buttonsArray = [7, 8, 9, "C", 4, 5, 6, "*", 1, 2, 3, "/", 0, "00", "000", "-", ".", "√", "+", "="];
let buttonsArray1 = ["="];

buttonsArray.map(item => {
    buttonsBlock.append(`
    <div class="buttons">
        ${item}
    </div>
    `)
});





let buttons = document.querySelectorAll(".buttons");


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', (event) => {
        let buttonValue = event.currentTarget.innerText;

        if(buttonValue === "="){
            let outputBlockValue = outputBlock.text();
            let result = eval(outputBlockValue);
            outputBlock.empty();
            outputBlock.append(result);
            history.append(`
                <h1>${outputBlockValue} = ${result}<h1>
            `)
        } else if(buttonValue === "C"){
            outputBlock.empty();
            
        } else if(buttonValue === "√"){
            let outputBlockValue = outputBlock.text();
            let result = eval(Math.sqrt(outputBlockValue))
            outputBlock.empty();
            outputBlock.append(result);
            history.append(`
                <h1>√(${outputBlockValue}) = ${result}<h1>
            `)
        }
         else{
            outputBlock.append(buttonValue);
        }
        

    })
}