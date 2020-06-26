({

    doInit: function (component, event, helper) {

        helper.handleViewAll(component);
    },

    handleViewAll: function (component, event, helper) {

        var key = event.getParam("key");
        if (key == 'viewAll') {
            var viewAll = event.getParam("viewAll");
            component.set('v.viewAll', viewAll);


            console.log(viewAll);
        }

        helper.handleViewAll(component);
    }
})