// Tests for the `Account Balance: $500` output
if (!Components.OutputTerminal.hasOutput(/Account Balance: \$/)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your command print example transactions and include the balance in this format: `Account Balance: $500`?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };

// Starting Workspace

// Final Workspace
class BankAccount:
  def __init__(self, balance=0):
    self.balance = balance

  def deposit(self, amount):
    self.balance += amount
    print("Deposited: $", amount)
    self.print_balance()

  def withdraw(self, amount):
    if amount <= self.balance:
      self.balance -= amount
      print("Withdrawn: $", amount)
    else:
      print("Insufficient funds")
    self.print_balance()

  def print_balance(self):
    print("Account Balance: $", self.balance)


# Example usage:
account = BankAccount()
account.print_balance() # Initial balance
account.deposit(100) # Deposit $100
account.withdraw(50) # Withdraw $50
account.withdraw(70) # Withdraw $70 (insufficient funds)
