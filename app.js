// app.js

const taskManager = require("./task-manager.js");

taskManager.ajouterTache("Faire épicerie");
taskManager.ajouterTache("Finir devoir");
taskManager.ajouterTache("Aller au collège");
taskManager.completerTask(0);
taskManager.completerTask(1);
taskManager.listerTaches().forEach((tache, index) => {
  console.log(
    `Task ${index + 1}: ${tache.tache} (Completed: ${tache.complete})`
  );
});
