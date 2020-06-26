({
    handleViewAll: function (component) {
        console.log('event fire i');
        var handleViewEvent = component.getEvent("viewAllEvent");
        handleViewEvent.setParams({
            "viewAll": !component.get('v.viewingAll'),
            "key": "viewAll"
        });
        handleViewEvent.fire();
        console.log('event fire f');
    }
})