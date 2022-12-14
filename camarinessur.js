
function getAllCityByProvinceCodeList(callback) {
	fetchData("https://phaddress.onrender.com/api/v1/ph/citymuns?regCode=05&provCode=0517", (data) => {
		callback(data)
	})
}




function getAllBarangayByCityDescList(desc, callback) {
	fetchData("https://phaddress.onrender.com/api/v1/ph/barangays?provCode=0517&citymunDesc=" + `${desc}`, (data) => {
		callback(data)
	})
}

function getAllBarangayByCityCodeList(code, callback) {
	fetchData("https://phaddress.onrender.com/api/v1/ph/barangays?provCode=0517&citymunCode=" + `${code}`, (data) => {
		callback(data)
	})
}


function getAllCityByProvinceCode(callback) {
	fetchData("https://phaddress.onrender.com/api/v1/ph/citymuns?regCode=05&provCode=0517", (data) => {
		for (var d of data) {
			callback(d)
		}
	})
}
function getAllBarangayByCityCode(code, callback) {
	fetchData("https://phaddress.onrender.com/api/v1/ph/barangays?provCode=0517&citymunCode=" + `${code}`, (data) => {
		for (var d of data) {
			callback(d)
		}
	})
}

function getAllBarangayByCityCode(code, callback) {
	fetchData("https://ph-address.onrender.com/ph/barangays?provCode=0517&citymunCode=" + `${code}`, (data) => {
		for (var d of data) {
			callback(d)
		}
	})
}

function fetchData(url, callback) {
	let options = {
		method: "GET"
	}
	fetch(url, options)
		.then(response => response.json())
		.then(response => callback(response))
		.catch(err => console.error(err));

}


