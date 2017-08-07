'use strict';
 
(function () {
  window.onload = function(evt) {
    document.getElementById("submit-btn").addEventListener('click', onSubmit);
  };

  function onSubmit (evt) {
    evt.preventDefault(); // I will explain it on next lesson :)
    var mainSection = document.querySelector('main');

    hideForm(mainSection);
    addSummarySection(mainSection);
  }

  function hideForm(mainSection) {
    var form = mainSection.querySelector('form');
    form.style.display = 'none';
  }

  function addSummarySection(mainSection) {
    var summarySection = document.createElement('div');
    summarySection.innerHTML = '<h2>Hello summary section</h2>';
    mainSection.appendChild(summarySection);
  }

  function Person () {
    this.town = document.querySelector("[name=town]").value;
    this.country = document.querySelector("[name=country]").value;
  }
})();