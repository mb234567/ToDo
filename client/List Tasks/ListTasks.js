Template.ListT.helpers({
    theTasks(){
        return ToDodb.find();
    }
}) 

Template.ListT.events({
    'click .js-delete5'() {
        $("#LModal").modal("hide");
        console.log("nigger")
    }, 

    'click .js-trash' () {
       let taskId = this._id; 
       console.log(this) ;
       ToDo.update({ _id: taskId },{
        $set: {
            "trashbin" : true 
        }
    })
    }

}) 

