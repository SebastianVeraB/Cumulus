({
    handleViewAll: function (component) {
        console.log('event fire i');
        var handleViewEvent = component.getEvent("viewAllEvent");
        handleViewEvent.setParams({
            "viewAll": !component.get('v.viewingAll')
        });
        handleViewEvent.fire();
        console.log('event fire f');
    }
})