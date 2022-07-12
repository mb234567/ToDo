Template.ListT.helpers({
    theTasks(){
        return ToDodb.find({"trashBin": false});
    }
}) 

Template.ListT.events({
    'click .js-delete5'() {
        $("#LModal").modal("hide");
        console.log("nigger")
    }, 

    'click .js-trash' () { 
        console.log(this)
       let taskId = this._id; 
       ToDodb.update({ _id: taskId},  { 
        $set: {
            "trashBin": true
        } 
         
       });  
      
       
       }

});

