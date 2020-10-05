import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public totalCountProcessing: number;
  public totalCountAdvance: number;
  public totalCountWaitingPayment:number;
  public totalCountWaitingPaymentTrasport:number;
  constructor(
    private router: Router, private service: HomeService,
  ) { }

  ngOnInit() {
    this.getBuyChart();//Đơn hàng mua hộ
    this.getShipChart();//Đơn hàng vận chuyển
    this.getFluctuationChart();//Thống kê biến động
    this.getAdvancePayChart();//Chờ tạm ứng
    this.getWaitFinalizationChart();//Chờ tất toán
    this.getQuoteChart();//Chờ báo giá
    this.getRoseChart();//Hoa hồng
    this.onLoadTotalCountProcessing();//Đơn MH chờ xử lý
    this.onLoadTotalCountAdvance();//ĐƠN MH CHỜ TẠM ỨNG
    this.onLoadTotalCountWaitingPayment();
    this.onLoadTotalCountWaitingPaymentTransport();

  }

  b_single: any[];
  b_view: any[];
  b_showXAxis: boolean;
  b_showYAxis: boolean;
  b_showYAxisLabel: boolean;
  b_yAxisLabel: string;
  getBuyChart() {
    this.b_single = [
      {
        "name": "Tiền xử lý",
        "value": 8940000
      },
      {
        "name": "Chờ tạm ứng",
        "value": 5000000
      },
      {
        "name": "Chờ mua",
        "value": 7200000
      },
      {
        "name": "Đã mua",
        "value": 7200000
      },
      {
        "name": "Chờ v.chuyển nội địa",
        "value": 8200000
      },
      {
        "name": "Chờ báo giá",
        "value": 9200000
      },
      {
        "name": "Chờ giao",
        "value": 6200000
      },
      {
        "name": "Đơn hàng hủy",
        "value": 3200000
      },
      {
        "name": "Chờ tất toán",
        "value": 9200000
      }
    ];
    this.b_view = [350, 300];
    this.b_showXAxis = true;
    this.b_showYAxis = true;
    this.b_showYAxisLabel = true;
    this.b_yAxisLabel = 'Tổng số đơn hàng';
  }

  s_single: any[];
  s_view: any[];
  s_showXAxis: boolean;
  s_showYAxis: boolean;
  s_showYAxisLabel: boolean;
  s_yAxisLabel: string;
  getShipChart() {
    this.s_single = [
      {
        "name": "Đơn hàng mới",
        "value": 8940000
      },
      {
        "name": "Đã nhận hàng",
        "value": 5000000
      },
      {
        "name": "Chờ thanh toán",
        "value": 7200000
      },
      {
        "name": "Đang giao hàng",
        "value": 2200000
      },
      {
        "name": "Đã giao hàng",
        "value": 7200000
      },
      {
        "name": "Đã hủy",
        "value": 8200000
      }
    ];
    this.s_view = [350, 300];
    this.s_showXAxis = true;
    this.s_showYAxis = true;
    this.s_showYAxisLabel = true;
    this.s_yAxisLabel = 'Tổng số đơn hàng';
  }

  f_multi: any[];
  f_view: any[];
  f_showLabels: boolean;
  f_animations: boolean;
  f_xAxis: boolean;
  f_yAxis: boolean;
  f_showYAxisLabel: boolean;
  f_showXAxisLabel: boolean;
  f_xAxisLabel: string;
  f_yAxisLabel: string;
  f_timeline: boolean;
  getFluctuationChart() {
    this.f_multi = [
      {
        "name": "Đơn hàng",
        "series": [
          {
            "name": "T1",
            "value": 620
          },
          {
            "name": "T2",
            "value": 730
          },
          {
            "name": "T3",
            "value": 894
          },
          {
            "name": "T4",
            "value": 220
          },
          {
            "name": "T5",
            "value": 630
          },
          {
            "name": "T6",
            "value": 194
          },
          {
            "name": "T7",
            "value": 930
          },
          {
            "name": "T8",
            "value": 114
          },
          {
            "name": "T9",
            "value": 320
          },
          {
            "name": "T10",
            "value": 600
          },
          {
            "name": "T11",
            "value": 294
          },
          {
            "name": "T12",
            "value": 294
          }
        ]
      },
      {
        "name": "Khách hàng",
        "series": [
          {
            "name": "T1",
            "value": 250
          },
          {
            "name": "T2",
            "value": 168
          },
          {
            "name": "T3",
            "value": 200
          },
          {
            "name": "T4",
            "value": 690
          },
          {
            "name": "T5",
            "value": 112
          },
          {
            "name": "T6",
            "value": 222
          },
          {
            "name": "T7",
            "value": 342
          },
          {
            "name": "T8",
            "value": 169
          },
          {
            "name": "T9",
            "value": 690
          },
          {
            "name": "T10",
            "value": 100
          },
          {
            "name": "T11",
            "value": 69
          },
          {
            "name": "T12",
            "value": 120
          }
        ]
      }
    ];
    this.f_view = [800, 300];
    this.f_showLabels = true;
    this.f_animations = true;
    this.f_xAxis = true;
    this.f_yAxis = true;
    this.f_showYAxisLabel = true;
    this.f_showXAxisLabel = true;
    this.f_xAxisLabel = 'Tháng trong năm';
    this.f_yAxisLabel = 'Tổng số';
    this.f_timeline = true;
  }

  ap_single: any[];
  ap_view: any[];
  ap_label: string;
  getAdvancePayChart() {
    this.ap_single = [
      {
        "name": "AUC",
        "value": 120
      },
      {
        "name": "DG",
        "value": 110
      },
      {
        "name": "MERCARI",
        "value": 169
      },
      {
        "name": "MH",
        "value": 230
      },
      {
        "name": "AMAZON",
        "value": 69
      },
      {
        "name": "EBAY",
        "value": 166
      },
      {
        "name": "AMAZONUS",
        "value": 192
      }
    ];
    this.ap_view = [400, 143];
    this.ap_label = "Chờ tạm ứng";
  }

  wf_single: any[];
  wf_view: any[];
  wf_label: string;
  getWaitFinalizationChart() {
    this.wf_single = [
      {
        "name": "AUC",
        "value": 120
      },
      {
        "name": "DG",
        "value": 110
      },
      {
        "name": "MERCARI",
        "value": 169
      },
      {
        "name": "MH",
        "value": 230
      },
      {
        "name": "AMAZON",
        "value": 69
      },
      {
        "name": "EBAY",
        "value": 166
      },
      {
        "name": "AMAZONUS",
        "value": 192
      }
    ];
    this.wf_view = [400, 143];
    this.wf_label = "Chờ tất toán";
  }

  wq_single: any[];
  wq_view: any[];
  wq_label: string;
  getQuoteChart() {
    this.wq_single = [
      {
        "name": "Y!Auctions",
        "value": 120
      },
      {
        "name": "Mercari",
        "value": 110
      },
      {
        "name": "Mua hộ",
        "value": 169
      }
    ];
    this.wq_view = [400, 143];
    this.wq_label = "Chờ báo giá";
  }

  r_single: any[];
  r_view: any[];
  r_showLabels: boolean;
  r_label: string;
  getRoseChart() {
    this.r_single = [
      {
        "name": "Mua hộ",
        "value": 8940000
      },
      {
        "name": "Vận chuyển",
        "value": 5000000
      }
    ];
    this.r_view = [400, 143];
    this.r_showLabels = true;
    this.r_label = "Hoa hồng";
  }

  onLoadTotalCountProcessing(): void {
    this.service.GetTotalCountProcessing()
      .subscribe(response => {
        this.totalCountProcessing = response;
      });
  }

  onLoadTotalCountAdvance(): void {
    this.service.GetTotalCountAdvance()
      .subscribe(response => {
        this.totalCountAdvance = response;
      });
  }

  onLoadTotalCountWaitingPayment(): void {
    this.service.GetTotalCountWaitingPayment()
      .subscribe(response => {
        this.totalCountWaitingPayment = response;
      });
  }

  onLoadTotalCountWaitingPaymentTransport(): void {
    this.service.GetTotalCountWaitingPaymentTRANSPORT()
      .subscribe(response => {
        this.totalCountWaitingPaymentTrasport = response;
      });
  }

}
