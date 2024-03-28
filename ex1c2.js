// Matches any string as long as it contains the words "hello" followed by additional words, regardless of capitalization
if (!Components.OutputTerminal.hasOutput(/hello,?\s*\w+[.,!?]?/i)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your program print the word `Hello,` followed by a name?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };
