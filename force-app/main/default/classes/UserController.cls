// public with sharing class UserController {

//     @AuraEnabled
//     public static String createUser(String username, String firstName, String lastName, String profileName, string email) {
//         try {
//             // Récupérer l'ID du profil en fonction de son nom
//             Id userProfileId = [SELECT Id FROM Profile WHERE Name = :profileName LIMIT 1].Id;

//             // Créer un nouvel utilisateur avec les informations fournies
//             User newUser = new User(
//                 Username = username,
//                 FirstName = firstName,
//                 LastName = lastName,
//                 Email = email,
//                 Alias = 'Default', // Exemple de valeur pour le champ Alias
//                 TimeZoneSidKey = 'America/New_York', // Exemple de valeur pour le champ Time Zone
//                 LocaleSidKey = 'en_US', // Exemple de valeur pour le champ Locale
//                 EmailEncodingKey = 'UTF-8', // Exemple de valeur pour le champ Email Encoding
//                 ProfileId = userProfileId, // Utiliser l'ID du profil récupéré
//                 LanguageLocaleKey = 'en_US' // Exemple de valeur pour le champ Language
//             );

//             // Insérer le nouvel utilisateur dans Salesforce
//             insert newUser;

//             // Retourner un message de succès
//             return 'Utilisateur créé avec succès.';
//         } catch (Exception e) {
//             // Retourner un message d'erreur en cas d'échec
//             return 'Erreur lors de la création de l\'utilisateur : ' + e.getMessage();
//         }
//     }
// }
public with sharing class UserController {

    @AuraEnabled
public static String createUser(String username, String firstName, String lastName, String profileName, String email) {
    try {
        // Récupérer l'ID du profil en fonction de son nom
        Id userProfileId = [SELECT Id FROM Profile WHERE Name = :profileName LIMIT 1].Id;

        // Créer un nouvel utilisateur avec les informations fournies
        User newUser = new User(
            Username = username,
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            Alias = 'Default', // Exemple de valeur pour le champ Alias
            TimeZoneSidKey = 'America/New_York', // Exemple de valeur pour le champ Time Zone
            LocaleSidKey = 'en_US', // Exemple de valeur pour le champ Locale
            EmailEncodingKey = 'UTF-8', // Exemple de valeur pour le champ Email Encoding
            ProfileId = userProfileId, // Utiliser l'ID du profil récupéré
            LanguageLocaleKey = 'en_US' // Exemple de valeur pour le champ Language
        );

        // Insérer le nouvel utilisateur dans Salesforce
        insert newUser;
        
        // Récupérer l'ID de l'utilisateur créé
        String userId = newUser.Id;

        // Retourner l'ID de l'utilisateur créé
        return userId;
    } catch (Exception e) {
        // Retourner un message d'erreur en cas d'échec
        return 'Erreur lors de la création de l\'utilisateur : ' + e.getMessage();
    }
}
    // Méthode pour attribuer les Permission Set License Assignments
//     @AuraEnabled
//     public static void assignPermissionSetLicenses(Id userId) {
//         // Liste des noms des Permission Sets License à attribuer
//         List<String> permissionSetLicenseNames = new List<String>{'Action Plans'};

//         // Récupérer les IDs des Permission Sets License en fonction de leur nom
//         List<PermissionSetLicense> permissionSetLicenses = [SELECT Id FROM PermissionSetLicense WHERE DeveloperName IN :permissionSetLicenseNames];

//         // Créer les enregistrements PermissionSetLicenseAssign
//         List<PermissionSetLicenseAssign> assignments = new List<PermissionSetLicenseAssign>();
//         for (PermissionSetLicense psl : permissionSetLicenses) {
//             PermissionSetLicenseAssign assignment = new PermissionSetLicenseAssign();
//             assignment.AssigneeId = userId;
//             assignment.PermissionSetLicenseId = psl.Id;
//             assignments.add(assignment);
//         }

//         // Insérer les PermissionSetLicenseAssign
//         insert assignments;
//     }
// }
