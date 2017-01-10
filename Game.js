var diceX, diceY, result, totalScore;
var balls = 0, ballsRemaining = 6, ballsThatOver = 0, dot = 0, wickets = 0, lbw = 0, totalWickets = 0, run1 = 0, run2 = 0, run3 = 0, run4 = 0, run6 = 0, nb = 0;

		function RollDice() {
			console.log(ballsRemaining + " balls remaining");
			diceX = Math.floor((Math.random() * 12));
			diceY = Math.floor((Math.random() * 12));
			console.log(diceX+1, diceY+1);
			balls++;
		}

		function EachBall() {
			if (resultTable[diceX][diceY] != null) {
				console.log(resultTable[diceX][diceY]);
				result = resultTable[diceX][diceY];
			} else {
				console.log("A value has not been entered yet");
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
				    case "LBW":
				        lbw++;
				        totalWickets++;
				        break;
				    case "1":
				        run1++;
				        break;
				    case "2":
				        run2++;
				        break;
				    case "3":
				        run3++;
				        break;
				    case "4":
				        run4++;
				        break;
				    case "6":
				        run6++;
				        break;
				    case "NB":
				        nb++;
				        break;
				    default:
				        console.log("default case");
				}
			}
		}

		function CalculateScore() {
			totalScore = (1 * run1) + (2 * run2) + (3 * run3) + (4 * run4) + (6 * run6) + (1 * nb);
		}

		//RollDice();
		//EachBall();
		
		TestBalls();
		CalculateScore();

		console.log('\n');
		console.log("Total Balls: " + balls)
		console.log("Dot balls: " + dot);
		console.log("Wickets: " + wickets);
		console.log("LBW: " + lbw);
		console.log("1's: " + run1);
		console.log("2's: " + run2);
		console.log("3's: " + run3);
		console.log("4's: " + run4);
		console.log("6's: " + run6);
		console.log("No Balls: " + nb);
		console.log("Total Score: " + totalScore);
