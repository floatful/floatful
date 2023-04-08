import { Value } from "./PropertyTypes";

class Property {
    name:string;
    key:string;
    values: (string | Value)[];

    constructor(name:string, key:string, values?:(string|Value)[], value?:any) {
        this.name = name;
        this.key = key;
        this.values = values!==undefined ? values : this.getValues(name);
        this.value = 
    }

    getValues = (name:string) => {
        return [""];
    }
}