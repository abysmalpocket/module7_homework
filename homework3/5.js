class ElectroAplience {
	constructor(name, electricity){
	  this.name = name;
	  this.electricity = electricity;
	  this.turned = false;
	}
  
  turnOn() {
	console.log(this.name + " is turned ON!")
	this.turned = true;
  }
  
  electricityUsed() {
	return this.turned ? this.electricity : 0;
  }
  }  
  
  const deskLamp = new ElectroAplience('Desk Lamp', 30);
  const hairDryer = new ElectroAplience('Hair Dryer', 500);
  
  console.log(deskLamp.electricityUsed() + hairDryer.electricityUsed());
  
  deskLamp.turnOn();
  console.log(deskLamp.electricityUsed() + hairDryer.electricityUsed());
  
  hairDryer.turnOn();
  console.log(deskLamp.electricityUsed() + hairDryer.electricityUsed());