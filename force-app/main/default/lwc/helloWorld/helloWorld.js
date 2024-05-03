import { LightningElement } from 'lwc';


export default class helloWorld extends LightningElement {
    selectedType = ''; // Ne pas définir comme @api

    // Définissez les options de la liste de sélection
    get options() {
        return [
            { label: 'Utilisateur BO', value: 'Utilisateur BO' },
            { label: 'Animateur', value: 'Animateur' },
            { label: 'Livreur', value: 'Livreur' }
        ];
    }

    // Gérez l'événement de changement de type
    handleTypeChange(event) {
        this.selectedType = event.target.value;
        const selectEvent = new CustomEvent('typechange', { detail: this.selectedType });
        this.dispatchEvent(selectEvent);
        console.log('UserType:' + this.selectedType);  
    }
}