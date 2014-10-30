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

Game.prototype.draw = function() {
	return this.player1.pick === this.player2.pick;
}

Game.prototype.winner = function() {
	if (this.draw()) { return null; }
	return (this.PAIRS[this.player1.pick][this.player2.pick] !== undefined ? 
		this.player1 : this.player2);
}

Game.prototype.loser = function() {
	if (this.draw()) { return null; }
	return (this.PAIRS[this.player2.pick][this.player1.pick] !== undefined ? 
		this.player1 : this.player2);
}
		

Game.prototype.winningMessage = function() {
 	if (this.draw()) { return 'Draw!'; }
 	return [this.winner().name, this.PAIRS[this.winner().pick][this.loser().pick], this.loser().name].join(' ');
}

function Player(name) {
	this.name = name;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
}