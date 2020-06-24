({
    doInit : function(cmp, event, helper) {
        var navService = cmp.find("navService");
        var pageReference = {
            
            "type": "standard__navItemPage",
            "attributes": {
                "apiName": "Approvals"    
            }
        };
        
        navService.navigate(pageReference);
    }
})

