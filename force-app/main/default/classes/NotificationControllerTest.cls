@IsTest
public class NotificationControllerTest {
    @IsTest
    static void NotificationTest(){

        User u1 = [SELECT Id FROM User WHERE Alias='UUser'];
        User u2 = [SELECT Id FROM User WHERE Alias='sec'];
        
        Notification__c n1 = new Notification__c();
        n1.Name = 'Notif1';
        n1.BelongsTo__c = u1.Id;

        Notification__c n2 = new Notification__c();
        n2.Name = 'Notif2';
        n2.BelongsTo__c = u1.Id;


        insert n1; insert n2;

        Test.startTest();
        System.runAs(u1){
            NotificationController nc = new NotificationController();
            System.assertEquals(nc.getCurrentUserNotifications().size(), 2);
        }
        
        System.runAs(u2){
            NotificationController nc = new NotificationController();
            System.assertEquals(nc.getCurrentUserNotifications().size(), 0);
        }
        Test.stopTest();        
    }
}