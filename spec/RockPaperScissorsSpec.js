describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player('Alex');
    player2 = new Player('Bob');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        game.outcome();
        expect(winner.name).toBe('Alex');
      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        game.outcome();
        expect(winner.name).toBe('Bob')
      });

      it('should smash lizard', function() {
        player1.picks('rock');
        player2.picks('lizard');
        game.outcome();
        expect(winner.name).toBe('Alex');
      });

      it('should be vapourised by spock', function() {
        player1.picks('rock');
        player2.picks('spock');
        game.outcome();
        expect(winner.name).toBe('Bob');
      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        game.outcome();
        expect(winner.name).toBe('Alex');

      });

      it('should lose to scissors', function() {
        player1.picks('paper');
        player2.picks('scissors');
        game.outcome();
        expect(loser.name).toBe('Alex');

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {
        player1.picks('scissors');
        player2.picks('paper');
        game.outcome();
        expect(winner.name).toBe('Alex');
      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        game.outcome();
        expect(winner.name).toBe('Bob');
      });

    });

  });

  describe('draws', function() {

    it('identical picks', function() {
        player1.picks('rock');
        player2.picks('rock');
        expect(game.winningMessage()).toEqual('Draw!')
      });

  });

  describe('victory messages', function() {

    it("should return the winner's name, the verb and the loser's name", function() {
      player1.picks('scissors');
      player2.picks('rock');
      expect(game.winningMessage()).toEqual('Bob crushes Alex');
      console.log(game.winningMessage());
    });

    it("should return the winner's name, the verb and the loser's name 2", function() {
      player1.picks('rock');
      player2.picks('scissors');
      expect(game.winningMessage()).toEqual('Alex crushes Bob');
      console.log(game.winningMessage());
    });

  });

});