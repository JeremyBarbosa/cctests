// Generic test for if they included the right filename
if (Components.OutputTerminal.hasError(/No such file/) {
  return {
    pass: false,
    errors: {
      friendly: 'Did you change name of the file to `numbers.txt` in the supplied ChatGPT command',
      component: 'PersistentCodeEditor'
    }
  };
}
if (!Components.OutputTerminal.hasOutput(/212-555-2101\n212-555-2105\n212-555-2100\n212-555-2106/)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your command print each phone number to separate line?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };

// Starting Workspace
n/a

// Expected Final Workspace
n/a
