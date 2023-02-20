function addingEventListener() {
  const input_button = document.querySelector('input#button');
  input_button .addEventListener('click', function () {
    alert('I was clicked!');
  });
}


addingEventListener();
