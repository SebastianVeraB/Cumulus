({
    navigateTo : function(component, event, helper) {
        
        var indexOptionSelected = event.target.id; // index of the option selected

        var OptionSelected = component.get('v.SObjectMapIterable')[indexOptionSelected]  // the list of objects selected

        console.log(OptionSelected['key'] + ' Pressed')
        console.log(OptionSelected['value'])

        var navService = component.find("navService");
        var pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__relatedLandingPage'
            }
            // How to pass parameters??
        };

        navService.navigate(pageReference);
    }
})