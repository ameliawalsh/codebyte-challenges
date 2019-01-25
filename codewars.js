
function factorial() {

    var input = document.getElementById('number');
    var facnum = parseInt(input.value);

    var result = facnum * (facnum - 1);

    for(var i = (facnum - 2); i > 1; i-- ){


        var process = result *  i;


        result = process;

        
    }
console.log(result);
    
}
