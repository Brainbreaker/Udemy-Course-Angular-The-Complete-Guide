import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CounterService {

    countAcToIn: number = 0;
    countInToAc: number = 0;

    fromActiveToInactiveEvent = new EventEmitter<void>();
    fromInactiveToActiveEvent = new EventEmitter<void>();

    constructor(){
        this.fromActiveToInactiveEvent.subscribe(
            ()=> new alert("From Active to Inactive: " + ++this.countAcToIn)
        )

        this.fromInactiveToActiveEvent.subscribe(
            ()=> new alert("From Inactive to Active: " + ++this.countInToAc)
        )
    }
}