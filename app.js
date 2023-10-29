// app.js

const taskManager = require("./task-manager");

taskManager.addTask("Faire épicerie");
taskManager.addTask("Finir devoir");
taskManager.addTask("Aller au collège");
taskManager.completeTask(0);
taskManager.completeTask(1);
taskManager.listerTaches().forEach((tache, index) => {
  console.log(
    `Task ${index + 1}: ${tache.tache} (Completed: ${tache.complete})`
  );
});
