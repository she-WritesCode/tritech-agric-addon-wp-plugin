import { toCurrency } from "./Helpers";

export class ProjectModel {
    id;
    title;
    slug;
    description;
    location;
    fee;
    duration;
    roi;
    totalSlots;
    availableSlots;
    slotsCapacity;
    insuredBy;
    shortDescription;
    categories=[];
    investments=[];
    updates=[];
    status='pending';
    image='';
    startDate='';

    constructor(data) {
        Object.assign(this, data);
    }

    get investmentFee() {
        return toCurrency(this.fee);
    }
}

/*
export enum ProjectStatus {
    PENDING = 'pending',
        INPROGRESS = 'in progress',
        COMPLETED = 'completed',
}

export interface ProjectCategory {
    id:
    title:
    description:
    parent:
    children:    string[];
    projects:    string[];
}


 */