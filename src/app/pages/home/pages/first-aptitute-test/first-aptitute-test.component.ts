import { Component, OnInit } from '@angular/core';
import { Questions } from '../shared/first-aptitute/first-aptitute-test.model';
import { FirstAptitudeTestService } from '../shared/first-aptitute/first-aptitude-test.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-aptitute-test',
  templateUrl: './first-aptitute-test.component.html',
  styleUrls: ['./first-aptitute-test.component.scss']
})
export class FirstAptituteTestComponent implements OnInit{
  resourceForm!: FormGroup;
  first_questions = new Array<Questions>();
  showUnfitCard: boolean = false;
  showSucessCard: boolean = false;

  constructor(
    private readonly _questionsService: FirstAptitudeTestService,
    private _fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.buildResourceForm();
    this.first_questions = this.listAllQuestionsAboutFirstTest();
  }

  buildResourceForm():void{
    this.resourceForm = this._fb.group({
      first: [null, [Validators.required]],
      second: [null, [Validators.required]],
      third: [null, [Validators.required]],
      fourth: [null, [Validators.required]],
      fifth: [null, [Validators.required]],
      sixth: [null, [Validators.required]],
    })
  }

  listAllQuestionsAboutFirstTest(): Array<Questions> {
    return this._questionsService.getAllFirstQuestions();
  }

  validateQuestions(): void {
    const fifthValue = this.resourceForm.get('fifth')?.value;
    const sixthValue = this.resourceForm.get('sixth')?.value;

    if (fifthValue === false && sixthValue === false) {
      this.resourceForm.reset();
      this.showSucessCard = true;
    } else {
      this.resourceForm.reset();
      this.showUnfitCard = true;
    }
  }
}
