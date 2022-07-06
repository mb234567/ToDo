Template.ListT.helpers({
    theTasks(){
        return ToDodb.find();
    }
}) 

Template.ListT.events({
    'click .js-delete5'() {
        $("#LModal").modal("hide");
        console.log("nigger")
    } 
    

})