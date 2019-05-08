function number(n) {
for (var i = 1; i <= n; i++) {
  alert(i);
}
}
number(15);  // q.no=1

function number(n) {
for (var i = n; i >= 1; i--) {
  alert(i);
}
}
number(10);    //(q.no=2)


for (var i = 1; i<=100; i++) {
  if (i%2==0) ;
console.log (i++);
}              // (q.n0=3)


for (var i = 1; i<=100; i++) {
  if (i%2==1) ;
console.log(i++);
}          //  (q.no=4)


function number(n) {
var sum = 0;
for (var i=1 ; i<=n ; i++) { 
sum = sum + i
}
console.log (sum)
}
number(10);  //(q.no=5)

function number(n) {
var sum=0
for (var i=1 ; i<=n ; i++) {
if (i%2==0) 
sum = sum + i ;
 

}             
console.log (sum);
}
number(8); //(q.no=6)