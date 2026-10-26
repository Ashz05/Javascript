//Javascript String indexof() 

/*
The indexOf() method returns index(position) of the first
occurance of a string in a string or it returns -1, if the 
string is not found. 
*/

//index  -  01234567890123456780123456789012345678 (after 0 add 10 with next corresponding number)
let text = "please locate where 'located' occures!";
let index = text.indexOf("locate");
console.log(index); // index position at 7

//Javascript counts position from zero; 

//lastindexOf()
//The lastindexOf() method returns the index of the last occurance 

index = text.lastIndexOf("locate");
console.log(index); // 21 

//Both indexOf() returns -1 if the element is not found! 

index = text.indexOf("Write")
console.log(index)
index = text.lastIndexOf("Write");
console.log(index)

//Both Method accept a second parameter as the starting position 

index = text.indexOf("locate",15);
console.log(index);

index = text.lastIndexOf("locate",15);
console.log(index);

//String search()

/*The search() method searches a string for a string(or a 
regular expression) and returns the positions of the match 
*/
text = "please locate where 'locate' occurs!";
console.log(text.search("locate"));


//indexOf() and search() both look equal, but they are not same!

/*
The search() method cannot take a second start position 

the indexOf() method cannot take powerful search values(regular expressions)
*/

