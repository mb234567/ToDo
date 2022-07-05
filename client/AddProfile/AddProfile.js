
const alertMsg = (message, type) => {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder'); 
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper); 
  }
    



Template.AddProf.helpers({
    userData(){
        return Meteor.users.find({_id:Meteor.userId()});
    }
    
});

Template.AddProf.events({
    'click #liveAlertBtn'(){
        console.log("follow");
        alertMsg('Following', 'success');
    }, 

    
    'click .js-saveInfo'() {
      // grad data from fields
      let sex = $("#FSex").val();
      let fname = $("#FN").val();
      let lname = $("#LN").val(); 
      let WEbDesign = $("#WebD").val(); 
      let WebMakeup = $("#WebM").val();  
      let FEnd = $("#FE").val(); 
      let BEnd = $("#BE").val(); 
      let NTask = $("NT").val(); 
      let DateT = $("DT").val();
      //  prompt("Your Info Has been saved"); 


      if (validateAddForm(fname, lname)) { 
        Meteor.users.update({_id:Meteor.userId()}, 
            {$set: {
                "profile.FSex": sex,
                "profile.FN": fname, 
                "profile.LN": lname, 
                // "profile.WebD": WebDesign,  
                // "profile.WebM": Webmakeup, 
                // "profile.FE": FEnd,
                // "profile.BE": BEnd,
                "profile.createdOn": new Date().getTime()
            } 
         
           
            
        }); 
        addNewTask();
       
    } //end IF 
    
}, 
  'click  .js-add5'() {
    $("#LModal").modal("show"); 
  }
});


  let validateAddForm = (fn, ln) => {
    let valid = true;
    $("#FN").removeClass("errorBox");
    $("#LN").removeClass("errorBox");
  
    if (fn=="") {
      $("#FN").addClass("errorBox");
      valid = false;
    }
    if (ln=="") {
      $("#LN").addClass("errorBox");
      valid = false;
    }
    return valid;
  }  


  Template.AddProf.events({
    'click .js-add4' () {
      $("#AddM4").modal("show"); 
      console.log("Broo")
    },
  
  'click .js-delete4' () {
        $("#AddM4").modal("hide");
      } ,
      'click #js-add'() {
              addNewTask();
          },
        'keypress #NT'(event){
          if(event.keyCode == 13) {
                  addNewTask();
              }
          },
        'click .privateTask'() {
          if ($(".fa-xmark").hasClass("d-none")) {
              $(".fa-check").addClass("d-none");
              $(".fa-xmark").removeClass("d-none");
          }
          else {
              $(".fa-check").removeClass("d-none");
              $(".fa-xmark").addClass("d-none");
          }
      }
  });
  
  let validateTask = (task) => {
      let valid = true;
      $("#js-addTaskGroup1").removeClass("errorBox");
      if(task == ""){
          //console.log("Cannot be empty")
          $("#js-addTaskGroup1").addClass("errorBox");
          valid = false;
      }
      return valid;
  }
  
  let addNewTask = () => {
      let newTask = $("#NT").val();
      if (validateTask(newTask)) {
          ToDodb.insert({
              "task": newTask,
              "private" : $(".fa-xmark").hasClass("d-none")
          });
          $("#NT").val("");
          $("#LModal").modal("show"); 
      }
      
  }

  