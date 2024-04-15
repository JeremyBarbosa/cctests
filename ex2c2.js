// Generic test for if they included the right directory name
if (Components.OutputTerminal.hasError(/No such file/) {
  return {
    pass: false,
    errors: {
      friendly: 'Did you change name of the directory to `tps_reports` in the supplied ChatGPT command',
      component: 'PersistentCodeEditor'
    }
  };
}
if (!Components.OutputTerminal.hasOutput(/.*null_report1\.csv\n.*null_report2\.csv\n.*null_report4\.csv/)) {
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
