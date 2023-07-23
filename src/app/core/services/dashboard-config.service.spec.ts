import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DashboardConfigService } from './dashboard-config.service';
import { dashboardConfigData } from '../utils/dashboard-config';
import { DashboardConfig } from '../models/dashboard-config.model';

describe('DashboardConfigService', () => {
  let service: DashboardConfigService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardConfigService],
    });
    service = TestBed.inject(DashboardConfigService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return dashboard configuration', (done: DoneFn) => {
    const mockResponse = dashboardConfigData as DashboardConfig;
    service.getConfig().subscribe((result: DashboardConfig) => {
      expect(result).toEqual(mockResponse);
      done();
    });

    const req = httpMock.expectOne(`${service.ROOT_URL}/data`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
