let x:string = "this function will show the length of this string";

console.log(x);

x = change(x);

console.log(x);

  function change(x:string){
    let y;
    y = x.length;

    return y;
  }

function string_length(value:string):number{
    return value.length;
}

console.log("\nThe number of characters is: " + string_length("test 1"));


//---------------------------------------------------------------------------------------------------------------


function string_length_noSpace(value:string):number{
    return value.replace(" ", "").length;
}

console.log("\nThe number of characters (excluding spaces) is: " + string_length_noSpace("test 2"));


//---------------------------------------------------------------------------------------------------------------


function string_combined_functions(value:string, spaces?:boolean):number{
    let count:number = 0;
    if(spaces){
        count = value.length;
    } else{
        count = value.replace(" ", "").length;
    }
    return count;
}

console.log(string_combined_functions("test 3", true));
console.log(string_combined_functions("test 4", false));
console.log(string_combined_functions("test 5"));