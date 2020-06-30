({

    doInit: function (component, event, helper) {
        console.log('items 1');
        console.log(component.get("v.itemsList1"));
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