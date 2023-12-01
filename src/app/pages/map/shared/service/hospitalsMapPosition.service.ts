import { Injectable } from "@angular/core";
import { HospitalsMapPositions } from "../models/hospitals.model";

@Injectable({
    providedIn: 'root'
})
export class HospitalsMapPositionService{
    filePath = '../models/hospitals.json';

    // getAllHospitalsPosition(): HospitalsMapPositions[]{
    //     try{
    //         const jsonData = fs.readFileSync(this.filePath, 'utf-8');
    //         const hospitals: HospitalsMapPositions[] = JSON.parse(jsonData);
    //         return hospitals
    //     }catch (error) {
    //         console.error('Erro ao ler o arquivo JSON:', error);
    //         return []
    //     }
    // }
}