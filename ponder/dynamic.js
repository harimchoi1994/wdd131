const student  = [
  {
    last:'Smith',
    first:'John'
  },


  {
    last:'Jackson',
    first:'Daniel'
  },

  {
    last:'McClure',
    first:'Eldon'
}

];


let container = document.querySelector('#student_container');

// template literal
student .forEach(function(item){
    let name = document.createElement('div');
    name.className = 'format';


    let html =  `
      <p class = 'detail'>${item.first}</p>
      <p class = 'details'>${item.first}</p>
      <hr>
    `;
    name.innerHTML = html;

    container.appendChild(name);

})