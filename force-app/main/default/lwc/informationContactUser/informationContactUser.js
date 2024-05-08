import { LightningElement, track, api } from 'lwc';

export default class InformationContactUser extends LightningElement {
    @api selectedType = ''; //  importer le typeuser saisie dans le premier composant
    
    @track nom = '';
    @track prenom = '';
    @track civilite = '';
    @track email = '';
    @track username = '';
    @track produit = '';
    @track afficherProduit = false;
    
    // Définir les options pour la civilité
    get civiliteOptions() {
        return [
            { label: 'M', value: 'M' },
            { label: 'Mlle', value: 'Mlle' },
            { label: 'Mr', value: 'Mr' }
        ];
    }
    // Définir les options pour le champs produit
     get produitOptions() {
        return [
            { label: 'FTTH', value: 'FTTH' },
            { label: 'ADSL', value: 'ADSL' } 
            
        ];
    }

     handleCiviliteChange(event) {
        this.civilite = event.target.value;
    }

    handleNomChange(event) {
        this.nom = event.target.value;
    }

    handlePrenomChange(event) {
        this.prenom = event.target.value;
    }

   
    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleUsernameChange(event) {
        this.username = event.target.value;
    }

    handleProduitChange(event) {
        this.produit = event.target.value;
    }

    // Gérer les changements de sélection de la civilité
    handleCivilityChange(event) {
        this.civilite = event.detail.value;
    }
    get showProduitField() {
        return this.selectedType === 'Animateur';
    }

}