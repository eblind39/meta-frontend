const h2 = document.createElement('h2');
h2.innerText = 'Ernesto';
document.body.appendChild(h2);
h2.setAttribute('id', 'myname');
h2.addEventListener('click', function() { alert('h2 clicked'); });