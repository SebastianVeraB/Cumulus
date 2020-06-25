({
    handleViewAll: function (component) {
        var itemsToShow1 = component.get('v.itemsList1');
        var itemsToShow2 = component.get('v.itemsList2');

        var viewMoreLess = 'View less';

        if (!component.get('v.viewAll')) {
            itemsToShow1 = itemsToShow1.slice(0, 3);
            itemsToShow2 = itemsToShow2.slice(0, 3);

            viewMoreLess = component.get('v.viewAllTitle');
        }

        component.set('v.itemsToShow1', itemsToShow1);
        component.set('v.itemsToShow2', itemsToShow2);
        component.set('v.viewMoreLess', viewMoreLess);
    }
})