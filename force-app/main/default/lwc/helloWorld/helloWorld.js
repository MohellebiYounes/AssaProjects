import { LightningElement, track } from 'lwc';

export default class CreateUserWizard extends LightningElement {
    @track selectedType = '';

    // Define picklist options
    get options() {
        return [
            { label: 'Utilisateur BO', value: 'BO' },
            { label: 'Animateur', value: 'Animateur' },
            { label: 'Livreur', value: 'Livreur' }
        ];
    }

    // Handle type change event
    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }
}
