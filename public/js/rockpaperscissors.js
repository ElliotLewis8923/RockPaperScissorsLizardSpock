function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.PAIRS = Game.prototype.PAIRS = {
	rock: {scissors: 'crushes', lizard: 'smashes'},
	paper: {rock: 'covers', spock: 'disproves'},
	scissors: {paper: 'cuts', lizard: 'decapitates'},
	lizard: {paper: 'eats', spock: 'poisons'},
	spock: {scissors: 'bends', rock: 'vapourises'}
}

var winner;
var loser;

Game.prototype.draw = function() {
	return this.player1.pick === this.player2.pick;
}

Game.prototype.outcome = function() {
	if (this.draw()) { return null; }
	return (this.PAIRS[this.player1.pick][this.player2.pick] !== undefined) ? 
		(winner = this.player1, loser = this.player2) : (winner = this.player2, loser = this.player1);
}

Game.prototype.winningMessage = function() {
 	if (this.draw()) { return 'Draw!'; }
 	this.outcome();
 	return [winner.name, this.PAIRS[winner.pick][loser.pick], loser.name].join(' ');
}

function Player(name) {
	this.name = name;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
}