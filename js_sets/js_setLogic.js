//Set Logic 

//1. Union() method. 

/*
The Union() Method 

The union method returns the union of two sets 
the Union() methods returns a new set containing the elements which are in this set, or in the argument set, or in both.

*/

const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
console.log(C)


/*
intersection() Method 
it returns the intersection of two sets. 

The intersection() method returns a nwe set containing the elements which are in this set and in the argument set:

*/ 

const D = new Set(['a','b','c']);
const E = new Set(['b','c','d']);
const F = D.intersection(E);

console.log(F);
/*
difference() Method 

The difference() method returns a new set containing elements which are in this set not in the argument set :
*/

const G = new Set(['a','b','c']);
const H = new Set(['a','b','c','e']);

const I = H.difference(G);

/* 
symmetricDifference() method returns a new set containing difference element in both set
*/

const J = G.symmetricDifference(H);
console.log(I);
console.log(J);

// isSubsetOf() Method - The isSubsetOf() method returns true if all elements in this set are also in the argument set :
const K = G.isSubsetOf(H);
console.log(K);


// isSupersetOf() Method - returns true if all elements in the argument set are also in this set 
const L = G.isSupersetOf(H);
console.log(L);

//is DisJoinFrom() Method - returns true if this set has no element in common with argument set 

const M = new Set(['a','b','c']);
const N = new Set(['e','f','d']);

let answer = M.isDisjointFrom(N);
console.log(answer)