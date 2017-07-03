(function(w,undefined) {
	w.Utils = {

		// 获取当前时间:年月日
		// @params(split:String),split为分隔符,默认'-'
		// @return(yyyy-mm-dd)
		getDateYMD : function(split){
			split = split == undefined ? '-' : split;
			var myDate = new Date();
			var m = myDate.getMonth() < 9 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1;
			var d = myDate.getDate() < 9 ? '0' + (myDate.getDate()) : myDate.getDate();
			return myDate.getFullYear() + split + m + split + d;
		},

		// 获取当前时间:时分秒
		// @params(split:String),split为分隔符,默认':'
		// @return(hh:mm:ss)
		getDateHMS : function(split){
			split = split == undefined ? ':' : split;
			var date = new Date();
			var hour = date.getHours();
			var min = date.getMinutes();
			var second = date.getSeconds();
			return  hour + split + (min < 10 ? "0" + min : min)+split+(second < 10 ? "0" + second : second);
		},

		// 查找val在数组的位置
		// @params(arr:Array,val:Number|String)
		// @return(index|-1),找到val则返回val对应index,否则返回-1
		getIndexOfValInArr : function(arr,val){
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === val) return i;
			}
			return -1;
		},

		// 从数组中删除第一个val
		// @params(arr:Array,val:Number|String)
		// @return(true|false),找到第一个val并删除然后返回true,未找到则返回false
		removeValFromArr : function(arr,val){
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === val){
					arr.splice(i, 1);
					return true
				}
			}
			return false
		},

		// 随机生成颜色值
		// @params()
		// @return('#fff000'),返回一个随机生成的颜色值
		getRandomColor : function(){
			return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6); 
		}


	}
})(window)