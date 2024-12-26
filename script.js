//complete this code
class Animal {
	constructor (species){
		this.species=species;
	}
	get species(){
		return this.species;
	} 
	makeSound(sound){
		console.log(this.sound);
	}
}

class Dog extends Animal {
	bark(){
		makeSound(woof);
	}
}

class Cat extends Animal {
	purr(){
		makeSound(purr);
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
