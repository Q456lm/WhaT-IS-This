// Problem 1
function introduce(name) {
    console.log(this.name);
  }

  this.name = "Alex";
  introduce("Alex");
 
// Task:
// Replace the name reference inside the function with this.name. 
// Then assign this.name = "Alex" in the global scope before calling the function (ignore the parameter when testing this).

// Q: What is printed? Why does this.name work (or not) in this context?
  //Alex is printed, it works because it was defined

// Problem 2

function runArrow(greeting) {
    const arrowFunc = () => {
      console.log(this.greeting);
    };
    arrowFunc();
  }
  this.greeting = "Hello"
  runArrow("Hello!");

  
//   Task:
//   Replace greeting with this.greeting and assign this.greeting = "Hello!"; before calling the outer function.
  
//   Q: What does this.greeting refer to here? Why doesn't it refer to the parameter anymore?
// Hello, it isn't defined as the paramater.

// Problem 3

const display = {
    message: "This is from the object",
    show: function (param) {
      console.log(this.message);
    }
  };
  display.show("Passed argument");

//   Task:
// Replace param with this.message inside the function.

// Q: What is printed now? Why does this refer to the object? What happened to the argument?
// "This is from the object", because it is defined with the colon? It is not used.

// Problem 4

  function handleClick(text) {
    const arrowgobrr = () => {
      console.log(this.text);
    };
    arrowgobrr();
  }

  document.getElementById("myBtn").onclick = function() {
    this.text = "Clicked";
    handleClick("Me");
  };

// Task:
// Instead of passing "Clicked!", change handleClick() to use this.text, and assign this.text = "Clicked!"; inside the event function. Also try the same with an arrow function.

// Q: What does this.text refer to in each case? Why does the arrow function behave differently?
// It returns undefined in each way, I tried the arrow function in many diffrent ways and none of them work.