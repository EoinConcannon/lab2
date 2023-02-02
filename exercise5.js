var x = "this function will show the length of this string";
console.log(x);
x = change(x);
console.log(x);
function change(x) {
    var y;
    y = x.length;
    return y;
}
function string_length(value) {
    return value.length;
}
console.log("\nThe number of characters is: " + string_length("test 1"));
//---------------------------------------------------------------------------------------------------------------
function string_length_noSpace(value) {
    return value.replace(" ", "").length;
}
console.log("\nThe number of characters (excluding spaces) is: " + string_length_noSpace("test 2"));
//---------------------------------------------------------------------------------------------------------------
function string_combined_functions(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", "").length;
    }
    return count;
}
console.log(string_combined_functions("test 3", true));
console.log(string_combined_functions("test 4", false));
console.log(string_combined_functions("test 5"));
