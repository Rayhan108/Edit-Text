document.getElementById('bold').addEventListener('click',function(){
    const textareaField = document.getElementById('textarea-field');
    // const textareaFieldValue = textareaField.value;
    if(textareaField.style.fontWeight === "bold"){
        textareaField.style.fontWeight ="normal";
    }else{
        textareaField.style.fontWeight = "bold";
    }

})
document.getElementById('italic').addEventListener('click',function(){
    const textareaField = document.getElementById('textarea-field');
    if(textareaField.style.fontStyle === "italic"){
        textareaField.style.fontStyle = "normal";
    }else{
        textareaField.style.fontStyle = "italic";
    }

})
document.getElementById('underline').addEventListener('click',function(){
    const textareaField = document.getElementById('textarea-field');
    
    if(textareaField.style.textDecoration === "underline"){
        textareaField.style.textDecoration = "none";
    }else{
        textareaField.style.textDecoration ="underline";
    }

})
// text-align----------------------------------------------------


document.getElementById('left-align').addEventListener('click',function(){
    const textareaField = document.getElementById('textarea-field');
   
    textareaField.style.textAlign = "left";
    })
document.getElementById('center-align').addEventListener('click',function(){
    const textareaField = document.getElementById('textarea-field');
    
    textareaField.style.textAlign = "center";
    })
document.getElementById('right-align').addEventListener('click',function(){
    const textareaField = document.getElementById('textarea-field');
    
    textareaField.style.textAlign = "right";
    })
    // font sizes----------------------------------------------------------------------------

  

    document.getElementById('font-large').addEventListener('click',function(event){
     
        const textareaField = document.getElementById('textarea-field');
        textareaField.style.fontSize = `${event.target.value}px`;
        
    })
    // color change--------------------------------
    document.getElementById('change-color').addEventListener('change',function(event){
        
        const textareaField = document.getElementById('textarea-field');
        textareaField.style.color= event.target.value;
    })
    // lowercase----------------------------------
    document.getElementById('lowercase-btn').addEventListener('click',function(){
        const textareaField = document.getElementById('textarea-field');
        const textareaFieldValue =textareaField.value;
        const changeCase = textareaFieldValue.toLowerCase();
        textareaField.value=changeCase;
    })
    
    // Uppercase---------------------------------
    document.getElementById('uppercase-btn').addEventListener('click',function(){
        const textareaField = document.getElementById('textarea-field');
        const textareaFieldValue =textareaField.value;
        const changeCase = textareaFieldValue.toUpperCase();
        textareaField.value=changeCase;
    })
// sentance case

document.getElementById('fontcase-btn').addEventListener('click',function(){
    const textElement = document.getElementById('textarea-field');
    const text = textElement.value;
    const newText = text.split('.');
    let newTextArr= [];
    newText.forEach((value)=>{
        newTextArr.push(value.trim().charAt(0).toUpperCase() + value.trim().slice(1));
    })
    const updatedText= newTextArr.join('. ');
    textElement.value = updatedText;
})