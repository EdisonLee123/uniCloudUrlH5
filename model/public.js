import http from '../main.js'

// 请求 Sortable
const getSortable = (id) => {
	// let url = 'get_data?id=' + id; //原数据
		var CDb='get_data'
		let url = 'get?id='+id+'&CDb='+CDb;
	return http.$u.get(url).then(res => {
		return res;
	}).catch(err => {
		return err;
	})
}

// 获取页面主题
const getPageTheme = () => {
	// let url = '/get_theme';//原数据
	var CDb='get_theme'
	let url = 'get?CDb='+CDb;
	return http.$u.get(url).then(res => {
		return res;
	}).catch(err => {
		return err;
	})
}

const save_page=(id,sorts)=>{
	// uni.showToast({
	// 	title:"仅演示"
	// })
	uni.request({
		url: 'https://471f5ec1-0130-4793-a0e3-3368b91cc57a.bspapp.com/http/update',
		method: 'POST',
		data: {
			id: id,
			sortable: sorts,
			CDb:'get_data'
		},
		success(res) {
			if(res.statusCode == 200) {
				window.parent.postMessage({
					method: 'saveSuccess',
				}, '*');
			}
			else {
				window.parent.postMessage({
					method: 'saveFail',
				}, '*');
			}
		}
	})
}

export default {
	getSortable,
	getPageTheme,
	save_page
}