import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from "../../shared/models/budget-item.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor() {
  }

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.item = new BudgetItem('', null);
      this.isNewItem = true;
    }
  }

  onSubmit(itemForm: NgForm) {
    this.formSubmit.emit(itemForm.value);
    itemForm.reset();
  }
}
