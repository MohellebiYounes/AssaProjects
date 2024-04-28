public with sharing class DistributorController {
    public DistributorController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String actName){
        List<Account> accountList = new List<Account>();
        if(actName!=''){
            String accountName = '%' + actName + '%';
            accountList = [select id,name from Account where name like:accountName AND InwiB2C_Type_Paretenaire__c = 'Partenaire' AND InwiB2C_Record_Type__c = 'Distributeur' ];
            return accountList;  
        }
        return accountList;
              
    }
}
// public with sharing class DistributorController {
//     public DistributorController() {

//     }
    
//     @AuraEnabled(cacheable=true)
//     public static List<Account> getAccounts(String actName, String selectedType){
//         List<Account> accountList = new List<Account>();
//         if(actName != ''){
//             String accountName = '%' + actName + '%';
//             // Déclarez et initialisez la variable query
//             String query = 'SELECT id, name FROM Account WHERE name LIKE :accountName AND InwiB2C_Type_Paretenaire__c = \'Partenaire\' AND InwiB2C_Record_Type__c = \'Distributeur\'';            // Ajoutez le filtre en fonction du type d'utilisateur sélectionné
//             // if (selectedType == 'Utilisateur BO') {
//             //     query += ' AND InwiB2C_Is_BO_Agence__c = true';
//             // } else {
//             //     query += ' AND InwiB2C_Is_BO_Agence__c = false AND InwiB2C_Cellul_BO__c != null';
//             // }

//             // Exécutez la requête SOQL
//             accountList = Database.query(query);
//         }
//         return accountList;
//     }
// }