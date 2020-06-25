({
    handleOpenClose : function(component, event, helper) {
        console.log('called open')
        if(! component.get("v.isDeleted")) {
          
            if(component.get("v.isOpen")) {
               
                component.set("v.isOpen", false);
             
            }
            else
            {
                console.log('else')
                component.set("v.isOpen", true);
            }
        }
    },
  
    delete : function( component,event,helper ) {

        component.set("v.isDeleted", true);
        component.set("v.isOpen", false);

        let oktanaCard = component.find("card");

        $A.util.addClass(oktanaCard, 'oktana-delete');
        setTimeout(function(){
            $A.util.addClass(oktanaCard, 'slds-hide');

        }, 500);

    },
    handleSlide : function( component, event) {
        component.set("v.isActionsDisplayed", !component.get("v.isActionsDisplayed"));
        event.stopPropagation();
        component.find("chevron").blur();
    },

    handleSelect : function ( component ) {
        component.set("v.isSelected", !component.get("v.isSelected"));
    },

    
})