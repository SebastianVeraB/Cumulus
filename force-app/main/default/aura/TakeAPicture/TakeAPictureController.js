({
    handleUploadFinished : function(component, event, helper) {
       
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "File "+" Uploaded successfully."
        });
        toastEvent.fire();
        
      
        
    }
})