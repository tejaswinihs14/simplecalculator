function onReset(id){
    document.form.textview.value = '';
}

function insert(num){
    document.form.textview.value = document.form.textview.value + num;
   
}


function onOperationClick(id){
    console.log(id);
}

function onModulus(id){
    console.log(id);
}

function onSignChange(id){
    console.log(id);
}

function onDot(id){
    console.log(id);
}

function onDelete(){
    document.form.textview.value = document.form.textview.value.slice(0,-1);
}

function onequalsClick(){
    document.form.textview.value = eval(document.form.textview.value)
  
}
