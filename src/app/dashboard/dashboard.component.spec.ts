import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { DashboardComponent } from './dashboard.component';
import { Store, StoreModule } from '@ngrx/store';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DashboardConfig } from '../core/models/dashboard-config.model';
import { of } from 'rxjs';
import { ChartComponent } from '../shared/components/chart/chart.component';
import { StatCardComponent } from '../shared/components/stat-card/stat-card.component';
import { MatCommonModule } from '@angular/material/core';

xdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: jasmine.SpyObj<
    Store<{ dashboardConfig: { data: DashboardConfig } }>
  >;
  let breakpointObserver: jasmine.SpyObj<BreakpointObserver>;

  beforeEach(waitForAsync(() => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
    const breakpointObserverSpy = jasmine.createSpyObj('BreakpointObserver', [
      'observe',
    ]);

    TestBed.configureTestingModule({
      declarations: [DashboardComponent, ChartComponent, StatCardComponent],
      imports: [
        MatCardModule,
        MatGridListModule,
        MatCommonModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: BreakpointObserver, useValue: breakpointObserverSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as jasmine.SpyObj<
      Store<{ dashboardConfig: { data: DashboardConfig } }>
    >;
    breakpointObserver = TestBed.inject(
      BreakpointObserver
    ) as jasmine.SpyObj<BreakpointObserver>;

    breakpointObserver.observe.and.returnValue(
      of({ matches: true, breakpoints: { XSmall: true } })
    );

    //@ts-ignore
    component.getCardsSize.and.returnValue({
      COLS: 1,
      ROW_HEIGHT: '100px',
      SM: { COLS: 1, ROWS: 2 },
      MD: { COLS: 1, ROWS: 4 },
      LG: { COLS: 1, ROWS: 3 },
    });
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  describe('getCardsSize(): ', () => {
    it('should return the grid config when matches is true', () => {
      //Ignoring ts error for private method
      //@ts-ignore
      const result = component.getCardsSize(true);

      expect(result).toEqual({
        COLS: 1,
        ROW_HEIGHT: '100px',
        SM: { COLS: 1, ROWS: 2 },
        MD: { COLS: 1, ROWS: 4 },
        LG: { COLS: 1, ROWS: 3 },
      });
    });

    it('should return the grid config when matches is false', () => {
      //Ignoring ts error for private method
      //@ts-ignore
      const result = component.getCardsSize(true);

      expect(result).toEqual({
        COLS: 10,
        ROW_HEIGHT: '200px',
        SM: { COLS: 2, ROWS: 1 },
        MD: { COLS: 5, ROWS: 2 },
        LG: { COLS: 10, ROWS: 2 },
      });
    });
  });
});
