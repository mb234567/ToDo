import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'; 
import '../lib/collection.js';
import bootstrap from 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './main.html'; 
import './AddProfile/AddProfile.html'; 
import './AddProfile/AddProfile.js'; 
import './AddTask/AddTask.html'; 
import './Motivation/Motivation.html'; 
import './Navbar/Navbar.html';



Template.nav.events({
  'click .js-add'() {
    $("#addModal").modal("show");
  }
}); 

Template.nav.events({
  'click .js-add2'() { 
    $("#addModal2").modal("show");
  }
});

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// }); 


// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// const alert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     alert('Thank You for the Follow!', 'success')
//   })
// }
