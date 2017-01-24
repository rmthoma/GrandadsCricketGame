//Declares all global variables
var diceX, diceY, result, totalScore;
var balls = 0, ballsRemaining = 6, ballsThatOver = 0, dot = 0, wickets = 0, lbw = 0, caught = 0, totalWickets = 0, 
	run1 = 0, run2 = 0, run3 = 0, run4 = 0, run6 = 0, nb = 0, wd = 0, partnership = 0, partnershipCounter = 0, overs = 0;
var partnerships = [];
var wicketTable = []; //recording them but console.table won't show them. use wicketTable[number]
var batter1 = 0, batter2 = 1;
var team1 = team_Australia;
var team2 = team_NZ;
var currentBatter = batter1;

		//Displayed at the start of the game showing the teams and initial batsmen
		function FirstMessages() {
			console.log("The match is between " + team1.teamName + " and " + team2.teamName);
			console.log("The first batsmen out are " + team1.teamStatus[batter1][0] + " and " + team1.teamStatus[batter2][0]);
		}

		//Rolls the dice
		function RollDice() {
			console.log(ballsRemaining + " balls remaining");
			diceX = Math.floor((Math.random() * 12));
			diceY = Math.floor((Math.random() * 12));
			console.log(diceX+1, diceY+1);
			balls++;
		}

		function EndOfPartnership() {
			var randOut = Math.floor((Math.random() * 2));
			
			//If batsman 1 is dismissed
			if (randOut == 0) {
				console.log("Batter 1 " + team1.teamStatus[batter1][0] + " is out!");
				//Check dismissed batsmen and current batsman and bring in next batsman				
				team1.teamStatus[batter1][2] = false;
				team1.teamStatus[batter1][1] = team1.teamStatus[batter1][1] + 1;
				team1.teamStatus[batter1][3] = false;
				wicketTable[totalWickets - 1] = team1.teamStatus[batter1][0] + " is out " +  result;
				RecordPartnership();

				for (var i = 0; i < 11; i++) {
					if (team1.teamStatus[i][2] == true) {
						batter1 = i;
						team1.teamStatus[i][2] = false;
						break;
					}
				}

				console.log("The new batter is " + team1.teamStatus[batter1][0]);
			} 
			//If batsman 2 is dismissed
			else if (randOut == 1) {
				console.log("Batter 2 " + team1.teamStatus[batter2][0] + " is out!");
				//Check dismissed batsmen and current batsman and bring in next batsman
				team1.teamStatus[batter2][2] = false;
				team1.teamStatus[batter2][1] = team1.teamStatus[batter2][1] + 1;
				team1.teamStatus[batter2][3] = false;
				wicketTable[totalWickets - 1] = team1.teamStatus[batter2][0] + " is out " +  result;
				RecordPartnership();

				for (var i = 0; i < 11; i++) {
					if (team1.teamStatus[i][2] == true) {
						batter2 = i;
						team1.teamStatus[i][2] = false;
						break;
					}
				}
				if (totalWickets < 9) {
					console.log("The new batter is " + team1.teamStatus[batter2][0]);
				}
				else {
					console.log("All batters are out!");
				}
			}
		}

		//Add batters and partnership score to partership array
		function RecordPartnership() {
			team1.partnerships[partnershipCounter][0] = team1.teamStatus[batter1][0];
			team1.partnerships[partnershipCounter][1] = team1.teamStatus[batter2][0];
			team1.partnerships[partnershipCounter][2] = partnership;
		}

		function WhoIsBatting() {
			if (result == "1" || result == "3") {
				currentBatter = batter2;
			}
			else {
				currentBatter = batter1;
			}
			
		}

		function ChangeBatter() {
			if (currentBatter == batter1) {
				currentBatter = batter2;
			}
			else if (currentBatter == batter2) {
				currentBatter = batter1;
			}
		}

		//Each ball it calculates the result from the table. It also adds an extra ball for wides and no balls.
		//It also keeps track of how many balls have been bowled (total balls that over and balls remaining).
		//It also keeps track of partnerships and stores each partnership total in partnerships array after out.
		function EachBall() {
			if (resultTable[diceX][diceY] != null) {
				console.log(resultTable[diceX][diceY]);
				result = resultTable[diceX][diceY];
			} else {
				console.log("A value has not been entered yet");
			}

			if (resultTable[diceX][diceY] == "NB" || resultTable[diceX][diceY] == "WD") {
				ballsRemaining++;
			}

			if (resultTable[diceX][diceY] == "W" || resultTable[diceX][diceY] == "LBW" || resultTable[diceX][diceY] == "C") {
				//console.log("OUT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
				//console.log(partnership);
				partnerships[partnershipCounter] = partnership;
				EndOfPartnership();
				partnership = 0
				partnershipCounter++;
				
			}

			if (ballsRemaining > 1) {
				ballsRemaining--;
				ballsThatOver++;
			}
			else if (ballsRemaining == 1) {
				ballsThatOver++;
				console.log("--------------- " + ballsThatOver + " balls that over");
				overs++;
				if (result == "." || result == "2" || result == "4" || result == "6") {
					ChangeBatter();
				}
				ballsRemaining = 6;
				ballsThatOver = 0;
			}
		}

		//THE MAIN FUNCTION.
		//Calls RollDice and EachBall methods and adds the result to their respective variables (runs and outs).
		function TestBalls() {
			while (totalWickets < 10) {
				RollDice();
				EachBall();
				switch(result) {
				    case ".":
				        dot++;
				        break;
				    case "W":
				        wickets++;
				        totalWickets++;
				        break;
				    case "C":
				        caught++;
				        totalWickets++;
				        break;
				    case "LBW":
				        lbw++;
				        totalWickets++;
				        break;
				    case "1":
				        run1++;
				        partnership = partnership + 1;
				        break;
				    case "2":
				        run2++;
				        partnership = partnership + 2;
				        break;
				    case "3":
				        run3++;
				        partnership = partnership + 3;
				        break;
				    case "4":
				        run4++;
				        partnership = partnership + 4;
				        break;
				    case "6":
				        run6++;
				        partnership = partnership + 6;
				        break;
				    case "NB":
				        nb++;
				        partnership = partnership + 1;
				        break;
				    case "WD":
				        wd++;
				        partnership = partnership + 1;
				        break;
				    default:
				        console.log("default case. THIS SHOULDN'T HAPPEN!");
				}
			}
		}

		//Calculates the total score of all runs, wides, no balls etc.
		function CalculateScore() {
			totalScore = (1 * run1) + (2 * run2) + (3 * run3) + (4 * run4) + (6 * run6) + (1 * nb) + (1 * wd);
		}

		//RollDice();
		//EachBall();
		
		FirstMessages();
		console.log('\n');
		TestBalls();
		CalculateScore();

		console.log('\n');
		console.log(team1.teamName + " lasted " + overs + " overs.")
		console.log("Total Balls: " + balls)
		console.log("Dot balls: " + dot);
		console.log("Wickets: " + wickets);
		console.log("Caught: " + caught);
		console.log("LBW: " + lbw);
		console.log("1's: " + run1);
		console.log("2's: " + run2);
		console.log("3's: " + run3);
		console.log("4's: " + run4);
		console.log("6's: " + run6);
		console.log("Wides: " + wd);
		console.log("No Balls: " + nb);
		console.log("Total Score: " + totalScore);
		console.log('\n');

		for (var i = 0; i < 10; i++)
			console.log(partnerships[i]);
