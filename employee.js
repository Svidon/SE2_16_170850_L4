//Creo una classe per gestire gli impiegati
class Employee {
	//Costruttore della classe con parametri id, name, surname, level, salary
	constructor(id, name, surname, level, salary){
		this.id = id;
		this. name = name;
		this. surname = surname;
		this.level = level;
		this.salary = salary;
	}

	//Aggiungo employee al dict
	add(dict){
		dict[this.id] = this;
	}
};

module.exports = {
	//funzione per ottenere l'employee corrispondente ad un dato id
	getId: function getEmployee(id, dict){
			return dict[id];
	},

	//Elimino employee con quell'id
	delete: function deleteEmployee(id){
		dict[id] = null;
	},

	//Aggiungo o modifico employee
	update: function UpdateEmployee(id, name, surname, level, salary, dict){
		var e = new Employee(id, name, surname, level, salary);
		e.add(dict);
		return dict[id];
	}
}