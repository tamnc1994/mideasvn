import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup, Validators
} from '@angular/forms';

@Component({
  selector: 'app-agent-mgr',
  templateUrl: './agent-mgr.component.html',
  styleUrls: ['./agent-mgr.component.css']
})
export class AgentMgrComponent implements OnInit{
  mess_text = 'Trợ lý phải được tạo trước khi chuyển sang thu thập yêu cầu hoặc Entity.';
  title_form = 'Thêm trợ lý';
  name_text = 'Nhập tên trợ lý thông minh...';
  description_text = 'Mô tả trợ lý thông minh...';
  language_text = 'Ngôn ngữ';
  filed_text = 'Lĩnh vực';
  timezone_text = 'Khu vực';
  
  createAgentForm: FormGroup;
  name: FormControl;
  description: FormControl;
  country: FormControl;
  language: FormControl;
  timezone: FormControl;
  
  constructor(builder: FormBuilder) {
    this.builderForm(builder);
  }

  ngOnInit() {

  }
  
  login () {
    if (!this.name.hasError('required')) {

    }
  }

  builderForm (builder: FormBuilder) {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]);
    this.description = new FormControl('', []);
    this.country = new FormControl('', []);
    this.language = new FormControl('', []);
    this.timezone = new FormControl('', []);
    this.createAgentForm = builder.group({
      name: this.name,
      description: this.description,
      country: this.country,
      language: this.language,
      timezone: this.timezone
    });
  }
  
}
