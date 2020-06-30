({
    handleViewAll: function (component) {

        var viewMoreLess = 'View less';

        if (!component.get('v.viewAll')) {
            viewMoreLess = component.get('v.viewAllTitle');
        }
        component.set('v.viewMoreLess', viewMoreLess);
    },

    getNotifications: function (component) {
        var action = component.get("c.RetrieveNotifications");

        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log(response);
                console.log(response.getReturnValue());
                //component.set("v.itemsList1", response.getReturnValue());
                
            } else if (state === "ERROR") {
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
    }
})