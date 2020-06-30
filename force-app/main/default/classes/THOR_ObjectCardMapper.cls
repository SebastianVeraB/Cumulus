public with sharing class THOR_ObjectCardMapper{
	public THOR_ObjectCardMapper(){
	}

	public static List<THOR_ObjectCardDto> MapFromNotifications(List<Notification__c> notifications){
		List<THOR_ObjectCardDto> res = new List<THOR_ObjectCardDto>();
		for (Notification__c notification : notifications){
			res.add(new THOR_ObjectCardDto(notification.title__c, notification.titleLabel__c, notification.dropableBody__c, notification.isDeletable__c, true));
		}
		return res;
	}
}