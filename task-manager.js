// task-manager.js
const taches = [];

function ajouterTache(tache) {
  taches.push({
    tache,
    complete: false,
  });
}

function listerTaches() {
  return taches;
}

function completerTache(index) {
  if (index >= 0 && index < taches.length) {
    taches[index].complete = true;
  }
}

module.exports = { ajouterTache, listerTaches, completerTache };
