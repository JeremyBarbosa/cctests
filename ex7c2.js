// Tests for the included example
if (!Components.OutputTerminal.hasOutput(/(\d+\s)+\d+/)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your code preserve and print the original example?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };

// Starting Workspace
def fibonacci(limit):
  num1, num2 = 0, 1
  print(num1, end=" ")
  while num2 <= limit:
    print(num2, end=" ")
    num1, num2 = num2, num1 + num2
fibonacci(100)

// Final Workspace
package main
import "fmt"

func fibonacci(limit int) {
  num1, num2 := 0, 1
  fmt.Print(num1, " ")
  for num2 <= limit {
    fmt.Print(num2, " ")
    num1, num2 = num2, num1 + num2
  }
}

func main() {
  fibonacci(100)
}
