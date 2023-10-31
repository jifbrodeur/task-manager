// __tests__/task-manager.test.js

const taskManager = require("../task-manager");

test("ajouterTache devrait ajouter une tache a la liste", () => {
  taskManager.ajouterTache("Faire épicerie");
  expect(taskManager.listerTaches()).toEqual([
    { tache: "Faire épicerie", complete: false },
  ]);
});

test("completerTache devrait changer l'état à complété", () => {
  taskManager.completerTache(0);
  expect(taskManager.listerTaches()[0].complete).toBe(true);
});

test("listerTaches devrait retourner la liste des taches", () => {
  expect(taskManager.listerTaches()).toEqual([
    { tache: "Faire épicerie", complete: true },
  ]);
});
