function request(){
	var text = document.getElementById('account').value;
	
	if(text==''){
		alert('助教拜託給我滿分！');
	}else{
		alert(text);
	}
}

function request123(this_btn){
	var text = this_btn;
	
	alert(text);
	
}

// setTimeout(function(){
//    window.location.reload(1);
// }, 5000);