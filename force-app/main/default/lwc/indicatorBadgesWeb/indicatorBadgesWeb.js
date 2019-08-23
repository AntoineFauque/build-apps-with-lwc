/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { LightningElement, api, wire, track } from "lwc";
import { getObjectInfo } from "lightning/uiObjectInfoApi";

import getIndicators from "@salesforce/apex/INDICATOR_Controller.getIndicators";

export default class indicatorBadgesWeb extends LightningElement {
  @api recordId;
  @api objectApiName;

  @track objTitle;
  @track badgeList;

  @wire(getObjectInfo, { objectApiName: "$objectApiName" })
  getobjInfo({ error, data }) {
    if (error) {
      console.log("error1: ", JSON.parse(JSON.stringify(error)));
    } else if (data) {
      console.log("data : ", data);
      this.objTitle = data.label + " Indicators";
    }
  }

  @wire(getIndicators, { recId: "$recordId", objectName: "$objectApiName" })
  getBadges({ error, data }) {
    if (error) {
      console.log("error2: ", JSON.parse(JSON.stringify(error)));
    } else if (data) {
      console.log("badges : ", data);
      this.badgeList = data;
    }
  }
}
