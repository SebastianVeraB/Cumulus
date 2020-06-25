({

    doInit: function (component, event, helper) {

        helper.handleViewAll(component);
    },

    handleViewAll: function (component, event, helper) {
        
        var viewAll = event.getParam("viewAll");
        component.set('v.viewAll', viewAll);

        helper.handleViewAll(component);
    }
})