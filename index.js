// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// VOTRE NOM ET PRENOM ICI ! Hamza EL GHAZY

function solutionExercice1(N) {
  var res = 'EXERCICE 1';
  //TAPE LE CODE DE L'EXERCICE 1 ICI!
  for (let i = N; i >= 1; i--) {
    const digits = String(i).split('').map(Number);

    let isRanged = true;
    for (let j = 0; j < digits.length - 1; j++) {
      if (digits[j] > digits[j + 1]) {
        isRanged = false;
        break;
      }
    }

    if (isRanged) {
      res = i;
      break;
    }
  }

  return res;
}

function solutionExercice2(L) {
  var res = 'EXERCICE 2';
  //TAPE LE CODE DE L'EXERCICE 2 ICI!
  L.sort((a, b) => a - b);

  let smallestPositive = 1;

  // Parcourez la liste triée pour trouver le plus petit entier positif manquant
  for (const num of L) {
    if (num === smallestPositive) {
      smallestPositive++;
    } else if (num > smallestPositive) {
      break;
    }
  }
  return smallestPositive;
}

function solutionExercice3(L) {
  var res = 'EXERCICE 3';
  //TAPE LE CODE DE L'EXERCICE 3 ICI!
  var occurrences = {};

  // Parcours de la liste pour compter les occurrences de chaque élément
  for (var i = 0; i < L.length; i++) {
    var currentElement = L[i];
    occurrences[currentElement] = (occurrences[currentElement] || 0) + 1;
  }
  for (var key in occurrences) {
    if (occurrences[key] === 1) {
      res = key;
      break;
    }
  }

  return res;
}

helper.displayOnHtml(solutionExercice1(1000), '1');
helper.displayOnHtml(solutionExercice2([1, 4, 7, 5, 3, 6, 3]), '2');
helper.displayOnHtml(solutionExercice3([1, 5, 3, 6, 4, 3, 1, 5, 4]), '3');
