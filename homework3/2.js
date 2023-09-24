const userInfo = {
	name: 'Eugen',
	lastname: 'Novikov',
	position: 'gamedev'
  }
  
console.log(property(userInfo, 'lastname'));

function property (obj, property) {
  if(obj.hasOwnProperty(property)) {
    return true;
  } else {
    return false;
  }
}