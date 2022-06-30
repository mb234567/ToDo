
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
    //   let WEbDesign = $("#WebD").val(); 
    //   let WebMakeup = $("#WebM").val();  
    //   let FEnd = $("#FE").val(); 
    //   let BEnd = $("#BE").val(); 
    //   prompt("Your Info Has been saved");

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
    } //end IF
}   
});


  let validateAddForm = (fn, ln) => {
    let valid = true;
    $("#FN").removeClass("errorBox");
    $("#LN").removeClass("errorBox");
  
    if (!fn) {
      $("#FN").addClass("errorBox");
      valid = false;
    }
    if (!ln) {
      $("#LN").addClass("errorBox");
      valid = false;
    }
    return valid;
  }