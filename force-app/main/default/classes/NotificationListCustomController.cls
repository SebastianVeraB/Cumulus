public with sharing class NotificationListCustomController {
    @AuraEnabled
    public static Account getRelatedObjects(String notificationIdentifier){
        List<Account> notification = [SELECT Id, (SELECT Id, Name FROM Opportunities), (SELECT Id, Name FROM Contacts), (SELECT Id FROM Cases) FROM Account WHERE Id = :notificationIdentifier];
        return notification[0];
    }
}