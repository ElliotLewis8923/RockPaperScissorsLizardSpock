function Game(player1, player2) {
	this.player1 = player1
	this.player2 = player2
}

Game.prototype.PAIRS = {
	rock: {crushes: 'scissors', smashes: 'lizard'},
	paper: {covers: 'rock', disproves: 'spock'},
	scissors: {cuts: 'paper', decapitates: 'lizard'},
	lizard: {eats: 'paper', poisons: 'spock'},
	spock: {bends: 'scissors', vapourises: 'rock'}
}

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick
}

Game.prototype._checkVerb = ['bends','crushes','covers','disproves','cuts','decapitates','eats','poisons','smashes','vapourises']



Game.prototype.winner = function() {
	var game = this;
	if(this._isSamePick()) return null;

	var p1Wins = false

	this._checkVerb.forEach(function(verb) {
		if(game.PAIRS[game.player1.pick][verb] === game.player2.pick) {
			p1Wins = game.player1;
		} 
	})
	return p1Wins || this.player2;
};


function Player(name) {
	this.name = name
}

Player.prototype.picks = function(pick) {
	this.pick = pick
}

