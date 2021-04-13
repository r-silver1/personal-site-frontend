import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPortfolioComponent } from './ai-portfolio.component';

describe('AiPortfolioComponent', () => {
  let component: AiPortfolioComponent;
  let fixture: ComponentFixture<AiPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
