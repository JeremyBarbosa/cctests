if (!Components.OutputTerminal.hasOutput(/(?=.*\bJohn Doe\b)(?=.*\bEmily Johnson\b)(?=.*\bAhmed Khan\b)(?=.*\bMei Ling\b)(?=.*\bAlejandro Ramirez\b)/)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your command print each of the customers with at least three orders?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };

// Starting Workspace
n/a

// Expected Final Workspace
n/a
