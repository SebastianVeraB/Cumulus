({
    show : function(component, event, helper) {
       component.set("v.isOpen", !component.get("v.isOpen"));
       helper.show(component);
    },
    selected : function(component) {

        component.set("v.isSelected", !component.get("v.isSelected"));
    },
    

})