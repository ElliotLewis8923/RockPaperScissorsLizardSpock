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

Game.prototype.winner = function() {
	if (this.player1.pick === this.player2.pick) {
		return null;
	}
	if (this.PAIRS[this.player1.pick][this.player2.pick] !== undefined) 
		return this.player1;
	else
		return this.player2;
}

Game.prototype.loser = function() {
	return (this.winner === this.player1 ? this.player2 : this.player1);
}

Game.prototype.winningMessage = function() {
	if (this.winner !== null ) {
		return [this.winner().name, this.PAIRS[this.winner().pick][this.loser().pick], this.loser().name].join(' ');
	}
	else {
		return 'Draw!';
	}
}

function Player(name) {
	this.name = name;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
}