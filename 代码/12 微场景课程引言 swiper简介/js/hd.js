//页面自带的js文件
var swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
//页面自带的js文件结束

//音乐控制
var music=document.getElementById('music');
var music_bg=music.getElementsByClassName('music_bg')[0];
var music_pic=music.getElementsByClassName('music_pic')[0];
var aud=music.getElementsByClassName('aud')[0];

//定义音乐的状态变量
var music_sta=1;
music.onclick=function(){
	if(music_sta==1){
		//让背景gif隐藏
		music_bg.style.display='none';
		//停止音乐图标的旋转
		music_pic.style.animation='none';
		//停掉音乐
		aud.pause();
		music_sta=2;
	}
	else if(music_sta==2){
		//让gif开始显示
		music_bg.style.display='block';
		music_pic.style.animation='music 2s linear infinite';
		//音乐继续
		aud.play();
		music_sta=1;
	}
}

//音乐控制结束


