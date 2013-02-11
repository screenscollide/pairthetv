/*
 * name: sockets.io
 * Desc: Socket bridges the Social Remote view (remote.jade) with the TV view (tv.jade)
 * Date Modified: 02/11/13
 * 
 */

var thisObj = this;
var socket = require('socket.io');
var io = {};

exports.init = function( server ){
	io = socket.listen( server );	
	io.sockets.on( 'connection', function( socket ) {
		//2nd screen to TV
		socket.on("disconnect",    thisObj.onDisconnect );
	});
}

////////////////////////////////////////////////////////////
//2nd screen to TV
////////////////////////////////////////////////////////////
exports.onDisconnect = function(  ){
	io.sockets.emit("onDisconnect", "user disconnected" );
}