var head1 = document.querySelector('#one')
var head2 = document.querySelector("#two")
var head3 = document.querySelector("#three")

head1.addEventListener('mouseover', function() {
  head1.textContent = "Mouse currently over";
  head1.style.color = "red";
})

head1.addEventListener('mouseout', function() {
  head1.textContent = "Hover over me";
  head1.style.color = "black";
})

head2.addEventListener('click', function() {
  head2.textContent = "Clicked on";
  head2.style.color = "blue";
})

head3.addEventListener('dblclick', function() {
  head3.textContent = "I was double clicked!";
  head3.style.color = "red";
})
