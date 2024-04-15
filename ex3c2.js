// Generic test for if they included the right filename
if (Components.OutputTerminal.hasError(/No such file/) {
  return {
    pass: false,
    errors: {
      friendly: 'Did you change name of the file to `data.md` in the supplied ChatGPT command',
      component: 'PersistentCodeEditor'
    }
  };
}
if (!Components.OutputTerminal.hasOutput(/212-555-6398\n212-555-1012\n212-555-5431/)) {
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
