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
    //console.log('res test1');
    
    document.getElementById("reset").addEventListener('click', function(){
      evt.preventDefault();
      console.log('res test1');
      showForm(mainSection);
      
      });
  }


  function hideForm(mainSection) {
    var form = mainSection.querySelector('form');
    form.style.display = 'none';
  }

  function showForm(mainSection) {
    var form = mainSection.querySelector('form');
    form.style.display = 'flex';
  }

   function addSummarySection(mainSection) {
   	var person = new Person();
    var summarySection = document.createElement('div');
    var values = Object.values(person);
    var keys = Object.keys(person);

    for (var i = 0; i < Object.keys(person).length; i++) {
    	//console.log(keys[i]+'='+values[i]);
    	summarySection.innerHTML = summarySection.innerHTML+'<h5>'+keys[i]+': '+values[i]+'</h5>';
    }
	   summarySection.innerHTML = summarySection.innerHTML+'<button id="reset" class="action-btn">Reset</button>';
   	
    mainSection.appendChild(summarySection);
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

    if (this.password === this.retryPassword) {
    	console.log('Passowrd is correct');
    } else {
    	console.log('Passwords are not the same');
    }

    this.file = document.querySelector("[name=choose-file]").value;
    this.email = document.querySelector("[name=email]").value;
    this.summary = document.querySelector("[name=summary]").value;
    this.sport = document.querySelector("[name=sport]").value;
    this.gender = document.querySelector("[name=gender]").value;
	}
})();