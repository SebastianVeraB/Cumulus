({
    
    foo : function( component, event, helper ) {
        console.log('called');
        event.preventDefault();
        event.stopPropagation();
    } 
})