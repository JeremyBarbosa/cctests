// Matches any string as long as it contains the words "hello" and "world", regardless of capitalization
if (!Components.OutputTerminal.hasOutput(/hello,?\s*world[.,!?]?/i)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your program print the phrase `Hello, World`?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };

// Starting Workspace
/// BLANK

// Expected Final Workspace
print('Hello, World!')
