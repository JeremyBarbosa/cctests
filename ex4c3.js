if (!Components.OutputTerminal.hasOutput(/(?=.*\bWidget X\b)(?=.*\bGadget Y\b)(?=.*\bGizmo Z\b)(?=.*\bThingamajig A\b)(?=.*\bWhatchamacallit B\b)/
)) {
  return {
    pass: false,
    errors: {
      friendly: "Does your command print the total sales for each day of the week starting with 2022-07-03?",
      component: "PersistentCodeEditor",
    },
  };
}
return { pass: true };
