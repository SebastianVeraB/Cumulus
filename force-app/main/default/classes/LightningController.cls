public class LightningController {
    @AuraEnabled
    public static Map <String, List<SObject>> fetchMapData() {
        Map <String, List<SObject>> mapCustomer = new Map <String, List<SObject>>();
        mapCustomer.put('Opportunity', [SELECT Id, Name FROM Opportunity LIMIT 10]);
        mapCustomer.put('Account', [SELECT Id, Name FROM Account LIMIT 10]);        
        return mapCustomer;
    }
}