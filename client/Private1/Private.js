Template.AddProf.events({
  'click .js-add4' () {
    $("#AddM4").modal("show"); 
    console.log("Broo")
  }
})

Template.AddProf.events({
    'click .js-delete4' () {
      $("#AddM4").modal("hide");
    }
  })