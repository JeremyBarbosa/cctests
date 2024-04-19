// Tests for the `I will destroy you!` output
if (!Components.OutputTerminal.hasOutput(/I will destroy you!/i)) {
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
class Enemy:
  def __init__(self, name, hit_points):
    self.name = name
    self.hit_points = hit_points

  def shout(self):
    return "I will destroy you!"

  def take_damage(self, damage):
    self.hit_points -= damage
    if self.hit_points <= 0:
      return f"{self.name} has been defeated!"
    else:
      return f"{self.name} takes {damage} damage. {self.name} has {self.hit_points} hit points left."


# Example usage:
enemy = Enemy("Evil Goblin", 50)
print(enemy.shout())
print(enemy.take_damage(20))
print(enemy.take_damage(35))

