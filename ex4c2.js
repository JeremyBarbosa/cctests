if (!Components.OutputTerminal.hasOutput(/(?=.*\b2022-07-03\b)(?=.*\b2022-07-04\b)(?=.*\b2022-07-05\b)(?=.*\b2022-07-06\b)(?=.*\b2022-07-07\b)(?=.*\b2022-07-08\b)(?=.*\b2022-07-09\b)/)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your command print the total sales for each day of the week starting with 2022-07-03?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };
