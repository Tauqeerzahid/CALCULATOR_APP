function GetNumber(num){
    var result = document.getElementById("Result");
    result.value +=num;

}

function ResultClear()
{
    var result = document.getElementById("Result");
    result.value =""; 
}
function GetResult(){
    var result = document.getElementById("Result");
    result.value = eval(result.value);
    
    // console.log(result.value);
}