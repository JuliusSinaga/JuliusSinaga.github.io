AOS.init()

lightbox.option({
	'alwaysShowNavOnTouchDevices': true,
	'wrapAround': true
})


function mulai() 
{
	window.scrollTo(0,0);
	var mail_section = $('#mail-section')
	$('#mail').attr('src', 'assets/img/mail.gif')
	setTimeout(function() {
		mail_section.css('opacity', 0)
		$('body').removeClass('overflow-hidden')
	}, 2000)
	setTimeout(function() {
		mail_section.removeClass('d-flex')
		mail_section.addClass('d-none')
	}, 4000)
}

function wa(isi) 
{
	open("https://wa.me/6281270490706?text=Makasih ya udah inget hari ulang tahun aku, di hari spesial ini aku mau " + isi)
}

var audio = document.getElementById('background-audio');

if (audio.paused) {
    console.log('Audio is paused.');
} else {
    console.log('Audio is playing.');
}