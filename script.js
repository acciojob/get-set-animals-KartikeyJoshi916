//complete this code
class Animal {
	
	get species(){
		return this._species;
	} 
	makeSound(sound){
		console.log(sound);
	}
}

class Dog extends Animal {
	
	bark(){
		this.makeSound("woof");
	}
}

class Cat extends Animal {
	constructor(){
		super("Cat");
	}
	purr(){
		this.makeSound("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
