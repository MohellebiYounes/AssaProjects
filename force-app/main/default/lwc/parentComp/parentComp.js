import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import createUser from '@salesforce/apex/UserController.createUser';
import assignPermissionSetLicenses from '@salesforce/apex/UserController.assignPermissionSetLicenses';
export default class ParentComponent extends LightningElement {
    @track selectedType = '';
    @track distributorId = '';
    @track showHelloWorld = true;
    @track showDistributeur = false;
    @track showSection3 = false;
    @track helloWorldValidated = false;
    @track distributeurValidated = false;
    @track Error = ''
    @track selectedAgenceId ;
    @track selectedAgenceName ;
    @track nom = '';
    @track prenom = '';
    @track civilite = '';
    @track email = '';
    @track username = '';
    @track produit = '';
    // @track showForm = false;

    handleTypeChange(event) {
        this.selectedType = event.detail; // Récupère le type d'utilisateur sélectionné
        this.Error = '' ;
        this.helloWorldValidated ;
    }

    lookupUpdatehandler(event) {
        this.distributorId = event.detail; // recuperer l'id du distributeur 
        this.Error = '' ;
    }

    lookupUpdatehandler (event) {
        this.selectedAgenceId = event.detail ;
        this.selectedAgenceName = event.detail ;
    }
    // afficher le formulaire
    // handleNew() {
    //     this.showForm = true;
    // }
    //annuler la creation 
    handleCancel() {
        this.showForm = false; // on ajoutera une logique revenir a la page de creation ou....
    }
    handleSave() {
        // Implémenter la logique pour sauvegarder le formulaire
        this.showForm = false; // Masquer le formulaire après avoir sauvegardé

        //logique de sauvegarde
         // Appelez la méthode Apex pour créer un nouvel utilisateur
        createUser({ 
            username : this.username,
            firstName : this.nom,
            lastName : this.prenom,
            email: this.email,
            profileName: 'End User'
         })
            .then(result => {
                 // Affichez un message de succès à l'utilisateur
                 this.showToast('Success', result, 'success');
                 // Appel de la méthode pour attribuer les permissions
                //  assignPermissionSetLicenses({ userId: result });
                })
            .catch(error => {
                 // Affichez un message d'erreur à l'utilisateur
                 this.showToast('Error', error, 'error');
                 console.error('Erreur lors de la création de l\'utilisateur : ', error);
                });
    } 
     // Méthode pour afficher une notification à l'utilisateur
        showToast(title, message, variant) {
         const evt = new ShowToastEvent({
             title: title,
             message: message,
             variant: variant,
         });
         this.dispatchEvent(evt);
        }
    handleNomUpdate(event) {
        this.nom = event.detail    }

    // Gestionnaire pour l'événement d'update du champ prénom
    handlePrenomUpdate(event) {
        this.prenom = event.detail    }

    // Gestionnaire pour l'événement d'update du champ civilité
    handleCiviliteUpdate(event) {
        this.civilite = event.detail    }

    // Gestionnaire pour l'événement d'update du champ email
    handleEmailUpdate(event) {
        this.email = event.detail    }

    // Gestionnaire pour l'événement d'update du champ username
    handleUsernameUpdate(event) {
        this.username = event.detail    }

    // Gestionnaire pour l'événement d'update du champ produit
    handleProduitUpdate(event) {
        this.produit = event.detail    }

        
    ///////////////////////////// condition d'affichage des composant/////////////////////////////////////
    // validateHelloWorld() {
    //     if (this.selectedType) {
    //         this.helloWorldValidated = true;
    //     } else {
    //         this.helloWorldValidated = false;
    //         this.Error = 'Veuillez sélectionner un type d\'utilisateur.';
    //     }
    // }   

    // validateDistributeur() {
    //     if (this.distributorId) {
    //         this.distributeurValidated = true;
    //     } else {
    //         this.distributeurValidated = false;
    //         this.Error = 'Veuillez sélectionner un distributeur.';
    //     }
    // }

    // nextSection() {
    //     if (this.showHelloWorld) {
    //         this.validateHelloWorld();
    //         if (this.helloWorldValidated) {
    //             this.showHelloWorld = false;
    //             this.showDistributeur = true;
    //         } else {
    //             // Affichez un message d'erreur ou effectuez d'autres actions en cas d'échec de validation
    //         }
    //     } else if (this.showDistributeur) {
    //         this.validateDistributeur();
    //         if (this.distributeurValidated) {
    //             this.showDistributeur = false;
    //             this.showSection3 = true;
    //         } else {
    //             // Affichez un message d'erreur ou effectuez d'autres actions en cas d'échec de validation
    //         }
    //     }
    // }

    // previousSection() {
    //     if (this.showDistributeur) {
    //         this.showDistributeur = false;
    //         this.showHelloWorld = true;
    //         this.helloWorldValidated = false; // Réinitialisez la validation lorsque vous revenez à la section précédente
    //         this.Error = ''; // Effacez l'erreur lorsque vous revenez à la section précédente
            
    //     } else if (this.showSection3) {
    //         this.showSection3 = false;
    //         this.showDistributeur = true;
    //         this.distributeurValidated = false; // Réinitialisez la validation lorsque vous revenez à la section précédente
    //         this.Error = ''; // Effacez l'erreur lorsque vous revenez à la section précédente
    //         this.distributorId = '' ;
    //     }
    // }
}

