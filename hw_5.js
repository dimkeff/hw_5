//task 1 

let UAH = 8;
function convert (USD) {

	let convert = USD * UAH;
	return `В розрахунку ${convert} UAH`;
}
console.log (convert (100));


//task 2 
function reverse(str) {

	let rezultat = str.split(``).reverse().join(``);
	return `rezultat: ${rezultat}`;
}
console.log (reverse ( "amiD" ) );

//task 3 
function printStairs(n) {

	let string = "";

	for (i = 1; i < n + 1; i++) {
    	string += '*';
    	console.log(string);
	}
}

console.log("".toLocaleUpperCase());
printStairs(10);

//task 4 
function sumTotal (start, end) {

	let sumTotal = null;
	for (let i = start; i <= end; i++) {
    	sumTotal += i;
	}
    	return sumTotal;

 
  	console.log (sumTotal (2, 4) );
  	console.log (sumTotal (-1, 3) );

//task 5 
 function minimum (A, B, C) {
   
  	let minimum = A;
  	for (let i = 0; i < arguments.length; i++) {

    	if (minimum > arguments[i]) {
        	minimum = arguments[i];
     	} else {}
	}

  return console.log (minimum);
} 	 
  minimum (-10, 5, -11);
  minimum (-3, 8, 4);

//task 6 
function printPyramid(n) {

   let  icon = "";
   for (let i = 0; i < n; i++){

  	let x=((n * 2) - (i * 2)) / 2;
  	let a = ' ';
 	 
     	console.log (a.repeat(x), icon += '#' );
	}
 
        	printPyramid(20);

//task 7 
function FirstAndLastToUpperCase(str){

    	let A = str.length - 1;
    	let rez = str[0].toUpperCase() + str.slice(1,A) + str[A].toUpperCase();
              	console.log (rez);
    	}
              	FirstAndLastToUpperCase(`abcd`);








//task 9 
 let name = 'dima’;
 let nameUpperCased = name.toUpperCase(); //метод функція
console.log (nameUpperCased);


//task 11 
function f(n) {
  if (n < 2) return 1;
  return f (n - 2) + f (n - 2);
}

function fl(n){
  let f1 = 0, f2 = 1, cf = 1;
  for (let i = 1; i <= n; i++) {
	cf = f1 + f2;
	f1 = f2;
	f2 = cf;
	}

return cf;
}

console.log (f(3));
console.log (f(5));
console.log (f(13));



