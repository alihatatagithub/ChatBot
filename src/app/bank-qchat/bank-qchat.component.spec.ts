import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankQChatComponent } from './bank-qchat.component';

describe('BankQChatComponent', () => {
  let component: BankQChatComponent;
  let fixture: ComponentFixture<BankQChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankQChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankQChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
