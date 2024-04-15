// Tests for the included example
if (!Components.OutputTerminal.hasOutput(/\[\d+\s\d+\]/)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your code preserve and print the original example sum?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };

// Starting Workspace
package main
import "fmt"
func twoSum(nums []int, target int) []int {
    m := make(map[int]int);
    for i, k := range nums {
        key := target - k
        v, ok := m[k]
        if ok {
            return []int {v, i}
        }
        m[key] = i
    }
    return []int {0,0}
}
func main() {
    a := []int{2, 7, 11, 15}
    b := 9
    c := twoSum(a, b)
    fmt.Println(c)
}

// Final Workspace
package main
import "fmt"

func twoSum(nums []int, target int) []int {
    numMap := make(map[int]int)
    for i, num := range nums {
        complement := target - num
        if index, ok := numMap[num]; ok {
            return []int{index, i}
        }
        numMap[complement] = i
    }
    return []int{0, 0}
}

func main() {
    nums := []int{2, 7, 11, 15}
    target := 9
    result := twoSum(nums, target)
    fmt.Println(result)
}
