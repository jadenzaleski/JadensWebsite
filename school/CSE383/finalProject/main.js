// import {01d, 01n, 02d, 02n, 03d, 03n, 04d, 04n, 09d, 09n, 10d, 10n, 11d, 11n, 13d, 13n, 50d, 50n} from 'iconVars.js';

function populateDisplay(data) {

	const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const d1 = new Date(data.list[2].dt_txt);
	let month1 = months[d1.getMonth()];
	let day1 = weekday[d1.getDay()];
	const d2 = new Date(data.list[10].dt_txt);
	let month2 = months[d2.getMonth()];
	let day2 = weekday[d2.getDay()];
	const d3 = new Date(data.list[18].dt_txt);
	let month3 = months[d3.getMonth()];
	let day3 = weekday[d3.getDay()];
	const d4 = new Date(data.list[26].dt_txt);
	let month4 = months[d4.getMonth()];
	let day4 = weekday[d4.getDay()];
	const d5 = new Date(data.list[34].dt_txt);
	let month5 = months[d5.getMonth()];
	let day5 = weekday[d5.getDay()];

	$(".weatherBox").html('');	
	$(".weatherBox").html('<div class="col-md-12"><p class="fs-5 mb-2" id="weatherHeader">Weather at ' + $("#weatherSearch").val() + '</p></div><div class="col-md-12 card-group mb-3"><div class="card text-center"><div class="card-header">' + day1 + '</div><h6 class="card-title mt-1">' + month1 + ', ' + d1.getDate() + ' ' + d1.getFullYear() + '</h6>' + iconDict['x' + data.list[2].weather[0].icon] + '<p class="card-text me-1">' + data.list[2].weather[0].description + '</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"></path><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"></path></svg>' + Math.round(data.list[2].main.temp_min) + '° | ' + Math.round(data.list[2].main.temp_max) + '°</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg> ' + Math.round(data.list[2].visibility * 0.000621371192) + 'mi</p><p class="card-text mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moisture me-1" viewBox="0 0 16 16"><path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path></svg> ' + data.list[2].main.humidity + '%</p></div><div class="card text-center"><div class="card-header">' + day2 + '</div><h6 class="card-title mt-1">' + month2 + ', ' + d2.getDate() + ' ' + d2.getFullYear() + '</h6>' + iconDict['x' + data.list[10].weather[0].icon] + '<p class="card-text me-1">' + data.list[10].weather[0].description + '</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"></path><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"></path></svg>' + Math.round(data.list[10].main.temp_min) + '° | ' + Math.round(data.list[10].main.temp_max) + '°</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg> ' + Math.round(data.list[10].visibility * 0.000621371192) + 'mi</p><p class="card-text mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moisture me-1" viewBox="0 0 16 16"><path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path></svg> ' + data.list[10].main.humidity + '%</p></div><div class="card text-center"><div class="card-header">' + day3 + '</div><h6 class="card-title mt-1">' + month3 + ', ' + d3.getDate() + ' ' + d3.getFullYear() + '</h6>' + iconDict['x' + data.list[18].weather[0].icon] + '<p class="card-text me-1">' + data.list[18].weather[0].description + '</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"></path><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"></path></svg>' + Math.round(data.list[18].main.temp_min) + '° | ' + Math.round(data.list[18].main.temp_max) + '°</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg> ' + Math.round(data.list[18].visibility * 0.000621371192) + 'mi</p><p class="card-text mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moisture me-1" viewBox="0 0 16 16"><path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path></svg> ' + data.list[18].main.humidity + '%</p></div><div class="card text-center"><div class="card-header">' + day4 + '</div><h6 class="card-title mt-1">' + month4 + ', ' + d4.getDate() + ' ' + d4.getFullYear() + '</h6>' + iconDict['x' + data.list[26].weather[0].icon] + '<p class="card-text me-1">' + data.list[26].weather[0].description + '</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"></path><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"></path></svg>' + Math.round(data.list[26].main.temp_min) + '° | ' + Math.round(data.list[26].main.temp_max) + '°</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg> ' + Math.round(data.list[26].visibility * 0.000621371192) + 'mi</p><p class="card-text mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moisture me-1" viewBox="0 0 16 16"><path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path></svg> ' + data.list[34].main.humidity + '%</p></div><div class="card text-center"><div class="card-header">' + day5 + '</div><h6 class="card-title mt-1">' + month5 + ', ' + d5.getDate() + ' ' + d5.getFullYear() + '</h6>' + iconDict['x' + data.list[34].weather[0].icon] + '<p class="card-text me-1">' + data.list[34].weather[0].description + '</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"></path><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"></path></svg>' + Math.round(data.list[34].main.temp_min) + '° | ' + Math.round(data.list[34].main.temp_max) + '°</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg> ' + Math.round(data.list[34].visibility * 0.000621371192) + 'mi</p><p class="card-text mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moisture me-1" viewBox="0 0 16 16"><path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path></svg> ' + data.list[34].main.humidity + '%</p></div></div></div>');
}

	function populateModal(i) {
		a = $.ajax ({
			url: "../final.php?method=getWeather&date=" + $("#historySearch").val(),
			method: "GET"
		}).done(function(x) {
			console.log(x);
			data = JSON.parse(x.result[i].WeatherJson);
			console.log(data);
			data.list.unshift(null);
			data.list.unshift(null);
			console.log(data);


			const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
			const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			const d1 = new Date(data.list[2].dt_txt);
			let month1 = months[d1.getMonth()];
			let day1 = weekday[d1.getDay()];
			const d2 = new Date(data.list[10].dt_txt);
			let month2 = months[d2.getMonth()];
			let day2 = weekday[d2.getDay()];
			const d3 = new Date(data.list[18].dt_txt);
			let month3 = months[d3.getMonth()];
			let day3 = weekday[d3.getDay()];
			const d4 = new Date(data.list[26].dt_txt);
			let month4 = months[d4.getMonth()];
			let day4 = weekday[d4.getDay()];
			const d5 = new Date(data.list[34].dt_txt);
			let month5 = months[d5.getMonth()];
			let day5 = weekday[d5.getDay()];

			$(".modal-title").html(x.result[i].DateTime);
			$(".weatherBox").html('');	
			$(".weatherBox").html('<div class="col-md-12"><p class="fs-5 mb-2" id="weatherHeader">Weather at ' + x.result[i].Location + '</p></div><div class="col-md-12 card-group mb-3"><div class="card text-center"><div class="card-header">' + day1 + '</div><h6 class="card-title mt-1">' + month1 + ', ' + d1.getDate() + ' ' + d1.getFullYear() + '</h6>' + iconDict['x' + data.list[2].weather[0].icon] + '<p class="card-text me-1">' + data.list[2].weather[0].description + '</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"></path><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"></path></svg>' + Math.round(data.list[2].main.temp_min) + '° | ' + Math.round(data.list[2].main.temp_max) + '°</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg> ' + Math.round(data.list[2].visibility * 0.000621371192) + 'mi</p><p class="card-text mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moisture me-1" viewBox="0 0 16 16"><path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path></svg> ' + data.list[2].main.humidity + '%</p></div><div class="card text-center"><div class="card-header">' + day2 + '</div><h6 class="card-title mt-1">' + month2 + ', ' + d2.getDate() + ' ' + d2.getFullYear() + '</h6>' + iconDict['x' + data.list[10].weather[0].icon] + '<p class="card-text me-1">' + data.list[10].weather[0].description + '</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"></path><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"></path></svg>' + Math.round(data.list[10].main.temp_min) + '° | ' + Math.round(data.list[10].main.temp_max) + '°</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg> ' + Math.round(data.list[10].visibility * 0.000621371192) + 'mi</p><p class="card-text mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moisture me-1" viewBox="0 0 16 16"><path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path></svg> ' + data.list[10].main.humidity + '%</p></div><div class="card text-center"><div class="card-header">' + day3 + '</div><h6 class="card-title mt-1">' + month3 + ', ' + d3.getDate() + ' ' + d3.getFullYear() + '</h6>' + iconDict['x' + data.list[18].weather[0].icon] + '<p class="card-text me-1">' + data.list[18].weather[0].description + '</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"></path><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"></path></svg>' + Math.round(data.list[18].main.temp_min) + '° | ' + Math.round(data.list[18].main.temp_max) + '°</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg> ' + Math.round(data.list[18].visibility * 0.000621371192) + 'mi</p><p class="card-text mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moisture me-1" viewBox="0 0 16 16"><path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path></svg> ' + data.list[18].main.humidity + '%</p></div><div class="card text-center"><div class="card-header">' + day4 + '</div><h6 class="card-title mt-1">' + month4 + ', ' + d4.getDate() + ' ' + d4.getFullYear() + '</h6>' + iconDict['x' + data.list[26].weather[0].icon] + '<p class="card-text me-1">' + data.list[26].weather[0].description + '</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"></path><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"></path></svg>' + Math.round(data.list[26].main.temp_min) + '° | ' + Math.round(data.list[26].main.temp_max) + '°</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg> ' + Math.round(data.list[26].visibility * 0.000621371192) + 'mi</p><p class="card-text mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moisture me-1" viewBox="0 0 16 16"><path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path></svg> ' + data.list[34].main.humidity + '%</p></div><div class="card text-center"><div class="card-header">' + day5 + '</div><h6 class="card-title mt-1">' + month5 + ', ' + d5.getDate() + ' ' + d5.getFullYear() + '</h6>' + iconDict['x' + data.list[34].weather[0].icon] + '<p class="card-text me-1">' + data.list[34].weather[0].description + '</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"></path><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"></path></svg>' + Math.round(data.list[34].main.temp_min) + '° | ' + Math.round(data.list[34].main.temp_max) + '°</p><p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg> ' + Math.round(data.list[34].visibility * 0.000621371192) + 'mi</p><p class="card-text mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moisture me-1" viewBox="0 0 16 16"><path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path></svg> ' + data.list[34].main.humidity + '%</p></div></div></div>');


		}).fail(function(error) {
			console.log(error);
		});
}

$(document).ready(function() {
	$('.carousel').carousel({
		interval: 3500
	})

	$("#weatherSearchBtn").click(function() {
		$(".weatherBox").html('<div class="d-flex justify-content-center p-3"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>')

		console.log("search");

		if ($("#weatherSearch").val().length <= 0) {
			alert("Search input must be greater then zero.");
			return 1;
		} else {
			$("#weatherHeader").html("Weather at " + $("#weatherSearch").val());
		}

		var entry = $("#weatherSearch").val().split(" ").join('%20');
		mapURL = "https://api.tomtom.com/search/2/search/" + entry + ".json?limit=1&key=GjZuDrUH8vAZSOEWKvQ2AF6MNiQU51D0";

		console.log(mapURL);

		var mapJson = "";
		var weatherJson = "";


		a = $.ajax({
			url: mapURL,
			method: "GET"
		}).done(function(data) {
			mapJson = JSON.stringify(data);
			console.log(data);

			var lat = data.results[0].position.lat;
			var lon = data.results[0].position.lon;

			b = $.ajax ({
				url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&cnt=40&appid=9948efc13165ac52f99080d8682b7e45&units=imperial",
				method: "GET"
			}).done(function(data) {
				for (var i = 0; i < 41; i++) {
					if (i != 2 && i != 10 && i != 18 && i != 26 && i != 34) {
						delete data.list[i];
					}
				}

				console.log(data);
				weatherJson = JSON.stringify(data);

				c = $.ajax ({
					url: "../final.php?method=setWeather&location=" + entry + "&mapJson=" + mapJson + "&weatherJson=" + weatherJson,
					method: "POST"
				}).done(function(x) {
					console.log(x);
					populateDisplay(data);	
				}).fail(function(error) {
					console.log(error);
				});
			}).fail(function(error) {
				$("#weatherHeader").html(error);
				console.log(error);
			});

		}).fail(function(error) {
			$("#weatherHeader").html(error);
			console.log(error);
		});


	});

	$("#historySearchBtn").click(function() {
		console.log("recall");

		var mn = $("#maxNum").val();

		if (mn <= 0) {
			alert("Number must be greater than or equal to one.");
			return 1;
		}

		a = $.ajax ({
			url: "../final.php?method=getWeather&date=" + $("#historySearch").val(),
			method: "GET"
		}).done(function(data) {
			console.log(data);

			$(".table").html('<thead><tr><th scope="col">Date</th><th scope="col">Search</th><th scope="col">Latitude</th><th scope="col">Longitude</th><th scope="col"> </th></tr></thead><tbody>');
			for (var i = 0; i < mn && data.result.length > i; i++) {
				WeatherJson = JSON.parse(data.result[i].WeatherJson);
				console.log(WeatherJson);
				$(".table").append('<tr><th scope="row">' + data.result[i].DateTime + '</th><td>' + data.result[i].Location  + '</td><td>' + WeatherJson.city.coord.lat + '</td><td>' + WeatherJson.city.coord.lon + '</td><td><button type="button" class="btn btn-link m-0 px-1 py-0" onclick="populateModal(' + i +')" data-bs-toggle="modal" data-bs-target="#tableInfoModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg></button></td></tr>');
			}
			$(".table").append('</tbody>');

		}).fail(function(error) {
			console.log(error);
		});

	});

});
