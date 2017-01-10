/*
D. Warner
A. Finch
S. Smith
G. Bailey
M. Marsh
T. Head
S. Wade
J. Faulkner
M. Starc
P. Cummins
J. Hazlewood
*/

var team_Australia = new Object();
	team_Australia.teamName = "Australia",
	team_Australia.team = ["D. Warner", "A. Finch", "S. Smith", "G. Bailey", "M. Marsh", "T. Head",
						        "S. Wade", "J. Faulkner", "M. Starc", "P. Cummins", "J. Hazlewood"];

    //Name , Runs , Eligible to bat , Not Out
    //Once a player leaves the pavillion and enters the ground, it should show false, meaning they aren't eligible to bat next
    team_Australia.teamStatus = [
    ["D. Warner","0",false, true],
    ["A. Finch","0",false, true],
    ["S. Smith","0",true, true],
    ["G. Bailey","0",true, true],
    ["M. Marsh","0",true, true],
    ["T. Head","0",true, true],
    ["S. Wade","0",true, true],
    ["J. Faulkner","0",true, true],
    ["M. Starc","0",true, true],
    ["P. Cummins","0",true, true],
    ["J. Hazlewood","0",true, true]
    ];
