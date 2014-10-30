$(document).ready(function(){ 
	var player1 = new Player('Player1');
	var player2 = new Player('Computer');
	var game = new Game(player1, player2);
	
	$('#name').on('submit', function(event) { 
 		event.preventDefault();
		
	
	 	player1.name = $('#username').val();
	 	
	 	console.log($('#username').val());
	 });
		
	$('.choices img').on('click', function(){
		var weapon = ['rock','paper','scissors','lizard','spock']
		player1.picks($(this).data('pick'));
		player2.picks(weapon[Math.floor(Math.random() * 5)]);

	$('<li>' + game.winningMessage() + '</li>').prependTo('#results').slideDown();


		$('#results li:gt(3)').fadeOut(function(){
		$(this).remove();
	});
	});
});