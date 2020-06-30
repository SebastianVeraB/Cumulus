({
    handleViewAll: function (component) {
        var handleViewEvent = component.getEvent("viewAllEvent");
        handleViewEvent.setParams({
            "viewAll": !component.get('v.viewingAll'),
            "key": "viewAll"
        });
        handleViewEvent.fire();
    }
})