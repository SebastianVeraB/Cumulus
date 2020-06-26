public class NotificationController {
    
    public List<wrapNotification> wrapNotificationList {get; set;}
    public id currentUserId;
    
    public NotificationController(){
        currentUserId = UserInfo.getUserId();
    }
        
    public List<wrapNotification> getCurrentUserNotifications(){
        if(wrapNotificationList == null){
            wrapNotificationList = new List<wrapNotification>();
            for(Notification__c n : [Select id,Name,Notification_Status__c, User_Status__c From Notification__c
                Where BelongsTo__c =: currentUserId]){
                wrapNotification w = new wrapNotification(n);
                wrapNotificationList.add(w);
                System.debug(w);
            }
        }
        
        return wrapNotificationList;
    }
    
    public class wrapNotification {
        Notification__c notification;
        String title {get; set;}
        String titleLabel {get; set;}
        String dropableBody {get; set;}

        public wrapNotification(Notification__c n){
            notification = n;
            title = notification.id;
            titleLabel = notification.Name;
            dropableBody = 'Notification Status: ' + notification.Notification_Status__c + 
            ' / ' + 'User Status: ' + notification.User_Status__c;
        }
    }
}