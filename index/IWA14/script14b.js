// script.js

const add = (a, b) => {
	return a + b;
  };
  
  const multiply = (a, b) => {
	return a * b;
  };
  
  function internal() {
	const added = add(this.internal.a, this.internal.b);
	const multiplied = multiply(added, this.internal.c);
	return multiplied;
  }
  
  // Not allowed to change below this
  
  const example1 = {
	internal: {
	  a: 2,
	  b: 4,
	  c: 8,
	},
	add,
	multiply,
	calculate: internal,
  };
  
  const example2 = {
	internal: {
	  a: 2,
	  b: 2,
	  c: 3,
	},
	add,
	multiply,
	calculate: internal,
  };
  
  const result1 = example1.calculate();
  const result2 = example2.calculate();
  
  console.log(result1); // Output: 48
  console.log(result2); // Output: 12
  