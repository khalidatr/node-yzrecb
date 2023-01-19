

let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
    // total:186
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
    //  total:171
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
    //  total:191
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
    //  total:171
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
    //  total:109
  },
];
testCase1.sort(function(s1 , s2){
return ((s2.biology+s2.chemistry)-(s1.biology+s1.chemistry));
} );
console.log(testCase1);
// ans = [virat, leo, cristiano, rohit, viswanath anand]

let testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
    total:180
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
    
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
      
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
      
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
      
  },
];

testCase2.sort(function(s1 , s2){
    if((s2.biology+s2.chemistry)-(s1.biology+s1.chemistry))
    
    {
        
        return ((s2.biology+s2.chemistry)-(s1.biology+s1.chemistry));
    }
    else if(((s1.biology+s1.chemistry)==(s2.biology+s2.chemistry))){
        return (s2.biology-s1.biology);
    }

   
} );
console.log(testCase2);

// ans = [leo, cristiano, viswanath, rohit, virat]