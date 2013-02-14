/** -----------------------------------------------------------
* Pairing
* -----------------------------------------------------------
* Description: 
* - ---------------------------------------------------------
* Created by: mail@chrisaiv.com
* Modified by: 
* Date Modified: Jan 20, 2013
* - ---------------------------------------------------------
* Copyright 2013
* - ---------------------------------------------------------
*
*/

//Create a QR code
$('#qrcode').qrcode( window.location.href );

//Create a Link below the QR code
var a = $("<a>").attr( { href: window.location.href } ).html( window.location.href );
var qrLink = $("<div>").append( a );
$("#qrcode").append( qrLink );
