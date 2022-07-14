import date, { addDays } from "date-and-time";
Session.set("dateOrder", 1); 

Template.ListT.helpers({
    theTasks(){
        if (Meteor.userId()){
            return ToDodb.find({"trashBin": false }, 
            { 
                sort: {
                        "DT": Session.get("dateOrder") 
                }
            });
        }
    
        return ToDodb.find({"trashBin": false, "private":false});
    }, 
    sortOrder(){
        if(Session.equals("dateOrder", 1)) { 
        return true;
        } 
        return false;
      }, 
         dueDays() { 
        let days = date.subtract(this.DT, new Date()).toDays();
         if (days = parseInt(days, 10) + "days") {
            return days;
         } 
           }
}); 


Template.ListT.events({
    'click .js-delete5'() {
        $("#LModal").modal("hide");
        
    }, 

    'click .js-trash' () { 
        console.log(this)
       let taskId = this._id; 
       ToDodb.update({ _id: taskId},  { 
        $set: {
            "trashBin": true
        } 
         
       });  
      
       
       }, 
       
       'click .js-sortDate'(){
        if (Session.equals("dateOrder", 1)) {
          Session.set("dateOrder", -1); 
          $(".js-sortDate").removeClass("fa-arrow-down-1-9");
          $(".js-sortDate").addClass("fa-arrow-up-9-1");
        } 
        else {
            Session.set("dateOrder", 1); 
            $(".js-sortDate").removeClass("fa-arrow-up-9-1");
            $(".js-sortDate").addClass("fa-arrow-down-1-9");
        }  
    } 
});

