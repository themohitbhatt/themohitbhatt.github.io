var a1 = [1,2,3,4,5];
var a2 = [6,7,8,6,10];
var a3 = [11,12,13,14,15];
var a4 = [16,17,18,19,20];
var a5 = [21,22,23,24,25];
var a6 = [26,27,28,29,30];
var a7 = [31,32,33,34,35];
var a8 = [36,37,38,39,40];
var x = document.getElementsById("leave").value;
var z = document.getElementsById("reach").value;
var y;
if(x==="tb") y=a1.pop();
else if(x==="mg") y=a2.pop();
else if(x==="cg") y=a3.pop();
else if(x==="gb") y=a4.pop();
else if(x==="rb") y=a5.pop();
else if(x==="rjb") y=a6.pop();
else if(x==="jb") y=a7.pop();
else if(x==="kb") y=a8.pop();

document.write(x);
if(z==="tb") a1.push(y);
else if(z==="mg") a2.push(y);
else if(z==="cg") a3.push(y);
else if(z==="gb") a4.push(y);
else if(z==="rb") a5.push(y);
else if(z==="rjb") a6.push(y);
else if(z==="jb") a7.push(y);
else  if (z==="kb") a8.push(y);


<style>
h1{color:dodgerblue;
  font-family:verdana;
  font-size:500%;
   margin-top:20px;}

body{background-color:white;}

  button{color:dodgerblue;
         background-color:white;
         font-size:200%;
         margin-top:100px;
         }

         select
         {font-size:300%;}
         h2{color:dodgerblue;
            text-align: left;
            margin-left:250px;
            margin-top:100px;
            font-size:200%;}
         h3{color:dodgerblue;
             text-align:right;
             margin-right:500px;
              margin-top:-60px;
              font-size:200%;}
      #leftfield{margin-left:-500px;}
      #righttfield{margin-right:-600px;
                     margin-top:-60px;}


                     .button {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: white;
  background-color:black;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  align-items: center;
}

.button:hover {background-color: dodgerblue;}

.button:active {
  background-color: dodgerblue;
  box-shadow: grey;
  transform: translateY(4px);
}
</style>