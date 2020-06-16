document.addEventListener('DOMContentLoaded', function() {
  let disabled = document.querySelector('#submit').disabled;
  let disabledClass = document.querySelector('#submit').classList;

  // By deafault the buttons is disabled
  disabled = true;
  disabledClass.add('disabled');

  document.querySelector('#task').onkeyup = function() {
    if (document.querySelector('#task').value.length > 0) {
      disabled = false;
      disabledClass.remove('disabled');
    } else {
      disabled = true;
      disabledClass.add('disabled');
    }
  }


  document.querySelector('form').onsubmit = function() {
    const task = document.querySelector('#task').value;
    const li = document.createElement('li');
    li.innerHTML = task;


    disabled = true;
    disabledClass.add('disabled');
    document.querySelector('#tasks').append(li);
    document.querySelector('#task').value = '';

    return false;


  }

})