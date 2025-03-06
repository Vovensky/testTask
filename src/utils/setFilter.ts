import { SetStateAction } from "react";

export const setFilter = (value: string, Callback: SetStateAction<any>) => {
    switch(value) {
        case "All":
            Callback({key: 'All', value: "Все"})
            break;
        case "Finished":
            Callback({ key: 'Finished', value: 'Законченные'})
            break;
        case 'Ongoing': 
            Callback({key: 'Ongoing', value: "Идущие"})
            break;
        case 'Scheduled': {
            Callback({key: 'Scheduled', value: 'Запланирован'});
            break;
        }
        default:
            Callback({key: 'All', value: "Все"})
    }
}