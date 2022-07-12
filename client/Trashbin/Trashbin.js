Template.TB.helpers({
    theTasks(){
        return ToDodb.find({"trashBin": true});  
         } 
});

// Template.TB.events({
//     'click .js-TB'() {
//         console.log("WTP")
//     }
// }) 

Template.TB.events ({
'click .js-restore' () { 
  let taskId = this._id; 
   console.log(this)
   ToDodb.update({ _id: taskId},  { 
    $set: {
        "trashBin": false
    } 
     });  
  } 
})