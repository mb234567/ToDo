Template.CM.helpers({
    theTasks(){
        return ToDodb.find({"trashBin": false});
    }
}) 