public with sharing class THOR_NotificationsRetrieverController {
    
    @AuraEnabled
    public static List<THOR_ObjectCardDto> RetrieveNotifications(){
        return THOR_ObjectCardMapper.MapFromNotifications([SELECT Id, Name, Title__c, TitleLabel__c, DropableBody__c, IsDeletable__c, Notification_Status__c FROM Notification__c]);
    }
}
