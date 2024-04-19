// Tests for the generated email example
if (!Components.OutputTerminal.hasOutput(/[^\s@]+@[^\s@]+\.[^\s@]+/g)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your code print example emails from the generated test data?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };

// Starting Workspace

// Final Workspace
import random
import string

def generate_valid_email():
  domains = ["gmail.com", "yahoo.com", "hotmail.com", "example.com"]
  username = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
  domain = random.choice(domains)
  return f"{username}@{domain}"

def generate_invalid_email():
  return ''.join(random.choices(string.ascii_letters + string.digits, k=10))

def generate_valid_password():
  return ''.join(random.choices(string.ascii_letters + string.digits + string.punctuation, k=12))

def generate_invalid_password():
  return ''.join(random.choices(string.ascii_letters + string.digits, k=6))

# Example usage:
print("Valid email:", generate_valid_email())
print("Invalid email:", generate_invalid_email())
print("Valid password:", generate_valid_password())
print("Invalid password:", generate_invalid_password())
