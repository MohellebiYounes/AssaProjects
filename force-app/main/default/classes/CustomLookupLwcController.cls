/*
API : 50
Source : lwcFactory.com
*/
public class CustomLookupLwcController {
    // Method to fetch lookup search result   
     @AuraEnabled(cacheable=true)
     public static list<sObject> fetchLookupData(string searchKey , string sObjectApiName , string selectedType) {    
         List < sObject > returnList = new List < sObject > ();
         string sQuery ;
         string sWildCardText = '%' + searchKey + '%';
         if (selectedType == '') {
            sQuery = 'SELECT Id, Name FROM ' + sObjectApiName + ' WHERE Name LIKE :sWildCardText AND InwiB2C_Type_Paretenaire__c = \'Partenaire\' AND InwiB2C_Record_Type__c = \'Distributeur\' ORDER BY CreatedDate DESC LIMIT 5';
        } else if (selectedType == 'Utilisateur BO') {
            sQuery = 'SELECT Id, Name FROM ' + sObjectApiName + ' WHERE Name LIKE :sWildCardText AND InwiB2C_Type_Paretenaire__c = \'Partenaire\' AND InwiB2C_Record_Type__c = \'Distributeur\' AND InwiB2C_Is_Bo_Agence__c = true ORDER BY CreatedDate DESC LIMIT 5';
        } else if (selectedType == 'Animateur' || selectedType == 'Livreur') {
            sQuery = 'SELECT Id, Name FROM ' + sObjectApiName + ' WHERE Name LIKE :sWildCardText AND InwiB2C_Type_Paretenaire__c = \'Partenaire\' AND InwiB2C_Record_Type__c = \'Distributeur\' AND InwiB2C_Is_Bo_Agence__c = false AND InwiB2C_Cellul_Bo__c != null ORDER BY CreatedDate DESC LIMIT 5';
        }
        
        for (sObject obj: Database.query(sQuery)) {
            returnList.add(obj);
        }
        
        return returnList;
    }
         
     // Method to fetch lookup default value 
     @AuraEnabled
     public static sObject fetchDefaultRecord(string recordId , string sObjectApiName) {
         string sRecId = recordId;    
         string sQuery = 'Select Id,Name From ' + sObjectApiName + ' Where Id = : sRecId LIMIT 1';
         for (sObject obj: database.query(sQuery)) {
             return obj;
         }
         return null;
     }
     
 }