 var Matrix = 
 [
 	{
 		idObj:"BG", firstMove : 1350, SecondMove : 1350, ResetMove : 2700   
 	}, 

 	{
 		idObj:"Slogans", firstMove : 1350, SecondMove : 1350, ResetMove : 2700   
 	}, 

 	{
 		idObj:"CricketBall", firstMove : 210, SecondMove : 690, ResetMove : 900   
 	},

 	{
 		idObj:"BacketBall", firstMove : 325, SecondMove : 340, ResetMove : 665 
 	},

 	{
 		idObj:"SmallBall1", firstMove : 1350, SecondMove : 1350, ResetMove : 2700 
 	},

 	{
 		idObj:"SmallBall2", firstMove : 1350, SecondMove : 1350, ResetMove : 2700 
 	},

 	{
 		idObj:"SmallBall3", firstMove : 1750, SecondMove : 50, ResetMove : 1800 
 	},

 	{
 		idObj:"SmallBall4", firstMove : 1750, SecondMove : 50, ResetMove : 1800
 	},

 	{
 		idObj:"BloorBall", firstMove : 251, SecondMove : 459, ResetMove : 710
 	},

 	{
 		idObj:"Volan", firstMove : 1130, SecondMove : 800, ResetMove : 1930
 	},

 	{
 		idObj:"Cherry", firstMove : 1755, SecondMove : 800, ResetMove : 2555
 	},

 	{
 		idObj:"Box", firstMove : 1068, SecondMove : 1275, ResetMove : 2343
 	},

 	{
 		idObj:"SmallBall5", firstMove : 605, SecondMove : 688, ResetMove : 1293
 	},

 	{
 		idObj:"FootBall", firstMove : 1250, SecondMove : 700, ResetMove : 1950
 	},
 	
 	{
 		idObj:"BacketBall2", firstMove : 1350, SecondMove : 250, ResetMove : 1600
 	}
 ];


     function PlayMove(Id,Move1,Move2,Reset)  {

     	var Obj = $("#" + Id);
     	
     	$(Obj).animate({ 'top': "-=" + 0},2500);

     	$(Obj).animate({ 'left': "-=" + Move1},2500);

     	$(Obj).animate({ 'top': "-=" + 0},2500);
     	
     	$(Obj).animate({ 'left': "-=" + Move2},2500); 

     	$(Obj).animate({ 'top': "-=" + 0},2500);
    
     	$(Obj).animate({ 'left': "+="+ Reset},1); 
     
     }   

     function  Infplay(){

     	for (var i = 0; i<Matrix.length;i++){
     	 	 
     	 	PlayMove( Matrix[i].idObj, Matrix[i].firstMove, Matrix[i].SecondMove, Matrix[i].ResetMove ); 

     	 }
     }  

 $(document).ready(function(){
     
  	setInterval(function(){Infplay()}, 1000);  

 });         