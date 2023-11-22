import { Component, OnInit } from '@angular/core';
import { FirstAptitudeTestService } from '../shared/first-aptitute/first-aptitude-test.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Questions } from '../shared/first-aptitute/first-aptitute-test.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-second-aptitude-test',
  templateUrl: './second-aptitude-test.component.html',
  styleUrls: ['./second-aptitude-test.component.scss']
})
export class SecondAptitudeTestComponent implements OnInit{
  resourceForm!: FormGroup;
  second_questions = new Array<Questions>();
  showUnfitCard: boolean = false;
  showSucessCard: boolean = false;

  constructor(
    private readonly _questionsService: FirstAptitudeTestService,
    private _cookieService: CookieService,
    private _fb: FormBuilder,
  ){}

  ngOnInit(): void {
    this.buildResourceForm();
    this.second_questions = this.listAllQuestionsAboutFirstTest();
  }

  buildResourceForm():void{
    this.resourceForm = this._fb.group({
      first: [null, [Validators.required]],
      second: [null, [Validators.required]],
      third: [null, [Validators.required]],
      fourth: [null, [Validators.required]],
    })
  }

  listAllQuestionsAboutFirstTest(): Array<Questions> {
    return this._questionsService.getAllSecondQuestions();
  }

  validateQuestions(): void {
    const existFalseAnswer = this.hasFalseValue();
    if(existFalseAnswer){
      this.resourceForm.reset();
      this.showUnfitCard = true;
    }else{
      this.resourceForm.reset();
      this._cookieService.set('aptitudeToDonate', 'true', 1/24)
      this.showSucessCard = true;
    }
  }

  hasFalseValue(): boolean {
    for (const controlName in this.resourceForm.controls) {
      if (this.resourceForm.controls.hasOwnProperty(controlName)) {
        const control: AbstractControl | null = this.resourceForm.get(controlName);
        if (control && control.value === false) {
          return true;
        }
      }
    }
    return false;
  }
}
