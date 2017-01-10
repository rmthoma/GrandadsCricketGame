//Declares all global variables
var diceX, diceY, result, totalScore;
var balls = 0, ballsRemaining = 6, ballsThatOver = 0, dot = 0, wickets = 0, lbw = 0, caught = 0, totalWickets = 0, 
	run1 = 0, run2 = 0, run3 = 0, run4 = 0, run6 = 0, nb = 0, wd = 0, partnership = 0, partnershipCounter = 0;
var partnerships = [];

		//Rolls the dice
		function RollDice() {
			console.log(ballsRemaining + " balls remaining");
			diceX = Math.floor((Math.random() * 12));
			diceY = Math.floor((Math.random() * 12));
			console.log(diceX+1, diceY+1);
			balls++;
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
				console.log("OUT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
				console.log(partnership);
				partnerships[partnershipCounter] = partnership;
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
				ballsRemaining = 6;
				ballsThatOver = 0;
			}
		}

		//THE MAIN FUNCTION.
		//Calls RollDice and EachBall methods and adds the result to their respective variables (runs and outs).
		function TestBalls() {
			while (totalWickets < 11) {
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
		
		TestBalls();
		CalculateScore();

		console.log('\n');
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

		for (var i = 0; i < 11; i++)
			console.log(partnerships[i]);
