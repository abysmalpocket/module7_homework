const userInfo = {
	name: 'Eugen',
	lastname: 'Novikov',
	position: 'gamedev'
  }
  
  getUserInformation(userInfo);
  
  function getUserInformation (obj) {
	for(var key in obj) {
	  console.log(key + ' = ' + obj[key])
	}
  }