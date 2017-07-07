var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var result = [];
for(var i = 0; i < people.length - 1; i++){
    result.push(people[i] + ":");

  for(var x = 0; x < alphabet.length; x++){
    if(alphabet[x] !=","){
      result.push(alphabet[x]);
  }
  }
}
console.log(result);