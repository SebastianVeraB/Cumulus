({
    doInit : function(component, event, helper) {
        
        var action = component.get("c.getRelatedObjects");
        //var id = component.get("v.recordId");
        //console.log(id);
        
        action.setParams({ notificationIdentifier : component.get("v.recordId") });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var response = response.getReturnValue();
                component.set("v.ItemsRelated", response.Opportunities);
                component.set("v.SubOrdersRelated", response.Contacts);
                component.set("v.FilesRelated", response.Cases);
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        
        $A.enqueueAction(action);
    },
    
    showRelatedItem : function(component, event, helper) {
        var optionclicked = event.target.id; // which related list was clicked
        console.log(optionclicked + ' clicked');
        switch(optionclicked) {
            case 'Items':
                component.set("v.pageState", 'showItems');
                break;
            case 'SubOrders':
                component.set("v.pageState", 'showSubOrders');
                break;
            case 'Files':
                component.set("v.pageState", 'showFiles');
                break;
            default:
                component.set("v.pageState", 'fatherBody');
        }
    }
})