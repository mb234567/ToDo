Template.ListT.helpers({
    theTasks(){
        if (Meteor.userId()){
            return ToDodb.find({"trashBin": false }, {sort:{"duedate": 1 }})
        } 
        return ToDodb.find({"trashBin": false, "private":false});
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

