
/*
 * GET home page.
 */

var QRCode = require('../lib/qrcode');
var randGen = require('mersenne');

function createQR( data ){	
  var qr = QRCode.qrcode(4, 'L'); 
	  qr.addData(data);
	  qr.make(); 

  var img = qr.createImgTag(4);
  return img
}

function getQRURL( image ){
	  var img = image
	  var idx = img.indexOf("base64,") + 7;
	      img = img.substring(idx);
	      idx = img.indexOf("\""); 
	  var newData = img.substring(0, idx )
	  return newData;
}

exports.index = function(req, res){
  //Generate a random number
  var randomNumber = randGen.rand( Math.floor( Math.random() ) )
  //Construct a mobile URL path for paring
  var url = "http://" + req.headers.host + req.originalUrl + "pairing/" + randomNumber
  //Create a QR Tag
  var qrTag = createQR( url );
  //Strip the QR tag data and only keep the imageURL
  var qrURL = getQRURL( qrTag );

  res.render('index', {
	title: 'Paring | Required', 
	url: url,
	imageTag: qrTag,
	imageURL: qrURL
  });
};

exports.pairing = function(req, res){
  var id = req.params.id;
  console.log( "Pairing ID:", id );
  res.render('index', { 
	title: 'Pairing | Success', 
	url: "",
	imageTag: "", 
	imageURL: ""
  });	
}