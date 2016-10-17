$(document).on('turbolinks:load', function(){
	messages = $('#messages');
	if(messages.length > 0) {
		App.messages = App.cable.subscriptions.create({
				channel: 'MessagesChannel',
				chatroom_id: $("#messages").data('chatroom-id')
			},{
			received: function(data){
				$('#messages').removeClass('hidden')
				return $('#messages').append(this.renderMessage(data));
			},
			renderMessage: function(data){
				return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
			}
		});
	}
});
