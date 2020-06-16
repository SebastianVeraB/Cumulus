({
    handleOpenClose : function(component, event, helper) {
        if(! component.get("v.isDeleted")) {
            if(component.get("v.isOpen")) {
                component.set("v.isOpen", true);
            }
            else
            {
                component.set("v.isOpen", false);
            }
        }
    },
  
    delete : function( component,event,helper ) {

        component.set("v.isDeleted", true);
        helper.close(component);

        let oktanaCard = component.find("card");

        $A.util.addClass(oktanaCard, 'oktana-delete');
        setTimeout(function(){
            $A.util.addClass(oktanaCard, 'slds-hide');

        }, 500);

    },
    
})