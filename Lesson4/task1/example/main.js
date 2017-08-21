'use strict';
 
(function () {
  window.onload = function() {
    document.getElementById("submit-btn").addEventListener('click', onSubmit);
  };

  function onSubmit(evt) {
    evt.preventDefault(); // I will explain it on next lesson :)
    var mainSection = document.querySelector('main');

    hideForm(mainSection);
    addSummarySectionBetter(mainSection);
  }

  function hideForm(mainSection) {
    var form = mainSection.querySelector('form');
    form.style.display = 'none';
  }

  function addSummarySection(mainSection) {
    var summarySection = document.createElement('div');
    var newPerson = new Person();

    summarySection.innerHTML = '<h2>Person summary</h2><ul>';

    for(var key in newPerson) {
      if(newPerson.hasOwnProperty(key)) {
        summarySection.innerHTML = summarySection.innerHTML + '<li><label>'+ key +':</label> <strong>'+ newPerson[key]+'</strong></span></li>';
      }
    }
    summarySection.innerHTML = summarySection.innerHTML + '</ul>';

    mainSection.appendChild(summarySection);
  }

  function addSummarySectionBetter(mainSection) {
    var newPerson = new Person();
    var summarySection = document.createElement('div')
    var header = document.createElement('h2')
    header.innerText = "Person summary"; 
    var personDetailsList = document.createElement('ul');

    for (var key in newPerson) {
      if (newPerson.hasOwnProperty(key)) {
        var personDetail = createSingleDetail(key, newPerson[key]);
        personDetailsList.appendChild(personDetail);
      }
    }

    summarySection.appendChild(personDetailsList);
    mainSection.appendChild(summarySection);
  }

  function createSingleDetail(key, value) {
    var label = document.createElement('label');
    label.innerText = key + ": ";

    var detail = document.createElement('strong');
    detail.innerText = value;

    var personDetail = document.createElement('li');
    
    personDetail.appendChild(label);
    personDetail.appendChild(detail);
      
    return personDetail;
  }

  function Person () {
    this.name = document.querySelector("[name=name]").value;
    this.surname = document.querySelector("[name=surname]").value;
    this.date = document.querySelector("[name=date]").value;
    this.street = document.querySelector("[name=street]").value;
    this.town = document.querySelector("[name=town]").value;
    this.country = document.querySelector("[name=country]").value;
    this.age = document.querySelector("[name=age]").value;
    this.phone = document.querySelector("[name=phone]").value;
    this.password = document.querySelector("[name=password]").value;
    this.retryPassword = document.querySelector("[name=retry-password]").value;
    this.file = document.querySelector("[name=choose-file]").value;
    this.email = document.querySelector("[name=email]").value;
    this.summary = document.querySelector("[name=summary]").value;
    this.sport = document.querySelector("[name=sport]").value;
    this.gender = document.querySelector("[name=gender]").value;
  }
})();