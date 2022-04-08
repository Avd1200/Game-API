
const result = (min = 1,max = 3)=>{
    //1 for rock
    //2 for paper
    //3 for scissor
   var iteration  = {};
   var res = [];
   var res1 = [];

    // this res1 array  is to calculatet the total wins of each player against each other after 50 chances
    res1[0] = [0,0,0,0,0];
    res1[1] = [0,-1,0,0,0];
    res1[2] = [0,0,-1,0,0];
    res1[3] = [0,0,0,-1,0];
    res1[4] = [0,0,0,0,-1];
   
    for(let k =1;k<=50;k++){
    // for random number generating between from 1 and 3 (1,2,3) as already mentioned what each num means.
    let p1 = Math.floor(Math.random()*(max-min+1)) + min;
    let p2 = Math.floor(Math.random()*(max-min+1)) + min;
    let p3 = Math.floor(Math.random()*(max-min+1)) + min;
    let p4 = Math.floor(Math.random()*(max-min+1)) + min;
    
    // res 1 is for every iteration
    res[0] = [0,p1,p2,p3,p4];
    res[1] = [p1,-1,0,0,0];
    res[2] = [p2,0,-1,0,0];
    res[3] = [p3,0,0,-1,0];
    res[4] = [p4,0,0,0,-1];
 
    // obj to hold result of each player against each other in each iteration.
    // like player1 wins against : player2  player3
    // player3 wins gainst : ""
    // here empty string means no win;
    const obj = {};
    for(var  i = 1;i<5;i++){
       let arr = [];
        for(var j = 1;j<5;j++){
           if(res[i][0]-res[0][j]==-2 || res[i][0]-res[0][j]==1){
               res[i][j] = res[i][j]+1;
               res1[i][j] = res1[i][j]+res[i][j];
               arr.push(j); 
            }
        
        
        // s is used as value for object property 
        let s ="";
        for(let i = 0;i<arr.length;i++)
        { 
            
            s = s + ` player${arr[i]} `;
        }
        obj[`player${i} wins against`] = s;
    }

   }
   iteration[`iteration ${k}`] = obj;
}
return iteration;
}

module.exports = result;