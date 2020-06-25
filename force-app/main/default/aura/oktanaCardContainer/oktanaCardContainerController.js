({
    doInit : function(component, event, helper) {
        console.log('init: ');
        var items = component.get('v.items');

        var item = items[0];

        if (item) {
            var a = item.title;
            console.log(a);
        }

        var title = component.get('v.title');
        console.log(title);
        console.log(items);

    }
})
