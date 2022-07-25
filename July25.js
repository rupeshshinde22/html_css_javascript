//Javascript task :-
//
//1.JavaScript Program to Find the Factorial of a Number
<html>
<head>
    <title>Factorial</title>
</head>
<body>
<script>
function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
}
let n = 4;
answer = factorial(n)
console.log(answer);

</script>
</body>
</html>
