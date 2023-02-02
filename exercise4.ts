let example1: boolean = true;
console.log("Example1 value is " + example1);

let example2: number = 0x1a7;
let example2_1: number = 23;
let example_2: number = 0b1101;

console.log("Example2 value is " + example2);
console.log("Example2_1 value is " + example2_1);
console.log("Example2_2 value is " + example_2);

let example3: string = "yellow";
example3 = "green";
console.log("Example3 value is " + example3);

let example4: number[] = [2, 4, 6];
for(let i = 0; i < 3; i++)
{
    console.log("Array " + i + " value is " + example4[i]);
}

let example5: any = 9;
console.log("Example5 value is " + example5);
example5 = true;
console.log("Example5 value is " + example5);
example5 = "any";
console.log("Example5 value is " + example5);