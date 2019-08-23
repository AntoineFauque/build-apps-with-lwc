import { LightningElement, api } from 'lwc';

export default class IndicatorBadgeWeb extends LightningElement {
    @api badge;

    get icon(){
        return this.badge.icon;
    }
    get label(){
        return this.badge.label;
    }
    get boxClass(){
        return 'slds-box slds-box_x-small slds-align_absolute-center slds-size__1-of-1 ' + this.badge.color;
    }
}