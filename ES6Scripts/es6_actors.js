
let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   

 // Who is the Academy Member whose ID is 187?
    
 let findMemId = academyMembers.find((arrayValue) => arrayValue.memID == 187);
    if (findMemId != undefined) {
        console.log("       ")
     console.log(" The member with ID 187  "+ findMemId.name);
    }
    

// Who has have been in at least 3 films?

let membersInMoreFlim = academyMembers.filter(a  => a.memID != 142  );

for (let i = 0; i < membersInMoreFlim.length; i++) {
 console.log("                            ")
 console.log("Members with more that 3 films "+ membersInMoreFlim[i].name);
}



// Who has a name that starts with "Bob"?




let findBobs = academyMembers.filter((arrayValue) => arrayValue.name.slice(0,3) == "Bob");
for( let i = 0; i < findBobs.length; i++) {
    console.log("    ")
    console.log("The name of people that start with Bob is  " + findBobs[i].name);
}





// HARDER: Which Academy Members have been in a film







// that starts with "A"
