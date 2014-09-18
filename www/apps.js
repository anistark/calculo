var oper = ""
var num = ""
 
function displaynum(n) {
document.form1.t1.value = document.form1.t1.value + n
}
 
function operator(op) {         
oper = op
 num= document.form1.t1.value
document.form1.t1.value = ""
}
 //code for equals starts here
function equals() {
doesthejob( eval(num) , eval(document.form1.t1.value ), oper)
}
 //a sub-function of equals 
function doesthejob(n1,n2, op) {
if (op == "+" ) 
document.form1.t1.value = n1 + n2
else if ( op == "-" )
document.form1.t1.value = n1- n2
else if (op == "*")
document.form1.t1.value = n1 * n2
else if (op =="/")
document.form1.t1.value = n1/n2 
}
 //code for equals ends here

function fact2(n) {    // fact2() for nCr & nPr
if (errorchecking(n) ==false)  
return

var answer = 1
for (i = n; i >=2; i--){
answer = answer*i
} 
return answer
}

function fact() {
n = Number(document.form1.t1.value)
if (errorchecking(n) ==false) 
return
var answer = 1
for (i = n; i >=2; i--){
answer = answer*i
} 
document.form1.t1.value = answer
}

function errorchecking(n) {
if ( n < 0) {
alert("Number shouldn't be negative" )
return false 
}
var mod = n%1
if (!mod ==0) {
alert("The number should be an integer" )
return false
}
} 

function pal(no) {
if (errorchecking(no) == false)
return
var no,rem,sum=0,temp
temp=no;
while(no>0)
{
rem=no%10;
sum=sum*10+rem;
no=no/10;
}
if(temp==sum)
document.form1.t1.value = "The given no. is palindrome"
else
document.form1.t1.value = "The given no. is not palindrome"
}

function arm(b) {
if (errorchecking(b) == false)
return
var e,x,d=0;
x=b;
while(x>0){
e=x%10;
x=parseInt(x/10);
d=d+(Math.pow(e,3));
}
if(b==d)
document.form1.t1.value = "given no. is amstrong number"
else
document.form1.t1.value = "given no. is not an amstrong number"
}

function prime(n) {
if (errorchecking(n) == false)
return
var b = true
for ( i = 2; i<= n/2; i ++ ) {
if (n % i == 0 ) {
document.form1.t1.value = "Not prime; its first divided by " + i
b = false
break
}
}
if (b)
document.form1.t1.value = "Is prime"
}

function cube(n) {
if (errorchecking(n) == false)
return
document.form1.t1.value = Math.pow(n, 3);
}

function sqrt(n) {
if (errorchecking(n) == false)
return
document.form1.t1.value = Math.sqrt(n);
}

function negation() {
document.form1.t1.value = document.form1.t1.value * -1
}
 
function reset() {
document.form1.t1.value = ""
num = ""
}