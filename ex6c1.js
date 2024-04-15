// Tests for the `assertEqual` from the unit tests
if (!Components.CodeEditor.contains(/assertEqual/g)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your code contain unit tests for the division function?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };

// Starting Workspace

// Final Workspace
import unittest

def divide(dividend, divisor):
    if divisor == 0:
        raise ValueError("Cannot divide by zero")
    return dividend / divisor

class DivisionTestCase(unittest.TestCase):
    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)
        self.assertAlmostEqual(divide(7, 3), 2.3333333333333335)
        self.assertEqual(divide(0, 5), 0)

    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            divide(10, 0)

if __name__ == "__main__":
    unittest.main()
