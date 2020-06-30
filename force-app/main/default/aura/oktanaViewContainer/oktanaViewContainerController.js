({

    doInit: function (component, event, helper) {

        helper.handleViewAll(component);
        helper.getNotifications(component);
    },

    handleViewAll: function (component, event, helper) {

        var key = event.getParam("key");
        if (key == 'viewAll') {
            var viewAll = event.getParam("viewAll");
            component.set('v.viewAll', viewAll);
        }

        helper.handleViewAll(component);
    }
})