import { Injectable } from "@angular/core";
import { Questions } from "./first-aptitute-test.model";

@Injectable({
  providedIn: 'root'
})
export class FirstAptitudeTestService{
  first_questions: Questions[] = [{
    Id: "0",
    Key: "First",
    Question: "Tenho entre 16 e 69 anos de idade:",
    Value: null,
  },{
    Id: "1",
    Key: "Third",
    Question: "Peso 50 Kg ou mais:",
    Value: null,
  },{
    Id: "2",
    Key: "Fourth",
    Question: "Estou descansado e dormi pelo menos 6 horas nas últimas 24 horas:",
    Value: null,
  },{
    Id: "3",
    Key: "Fifth",
    Question: "Estou alimentado e não ingeri comidas gordurosas nas últimas 4 horas:",
    Value: null,
  },{
    Id: "4",
    Key: "Sixth",
    Question: "Fumei nas últimas 2 horas:",
    Value: null,
  },{
    Id: "5",
    Key: "Seventh",
    Question: "Ingeri bebidas alcólicas nas últimas 2 horas:",
    Value: null,
  }];

  second_questions: Questions[] = [{
    Id: "0",
    Key: "First",
    Question: "Tenho asma brônquica grave ou antecedente de choque anafilático:",
    Value: null,
  },{
    Id: "1",
    Key: "Third",
    Question: "Tive infecções ou uso de antibióticos, nas últimas 2 semanas:",
    Value: null,
  },{
    Id: "2",
    Key: "Fourth",
    Question: "Realizei procedimento endoscópico nos últimos 6 meses:",
    Value: null,
  },{
    Id: "3",
    Key: "Fifth",
    Question: "Tenho antecedentes de infecções trans- missíveis pelo sangue:",
    Value: null,
  }]

  getAllFirstQuestions(): Array<Questions> {
    return this.first_questions;
  }

  getAllSecondQuestions(): Array<Questions> {
    return this.second_questions;
  }
}
