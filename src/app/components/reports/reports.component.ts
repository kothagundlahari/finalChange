import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ReportsService } from './reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ReportsService]
})
export class ReportsComponent implements OnInit {

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer,
    private reportsService: ReportsService) {
  }
  @ViewChild('mySelect')
  selectedPrjData: any;
  spinner = true;

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [8, 38], label: 'Test passed' }
  ];

  chartLabels = ['Test Passed', 'Test failed'];

  view: any[] = [400, 400];
  // options
  showLegend = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  reportsData = [
    {
      projectName: 'ERS',
      projectCode: 'ers',
      summary: [
        {
          title: 'iTAF-Duration',
          value: '1H:03M:09S'
        },
        {
          title: 'iTAF-Duration',
          value: '1H:03M:09S'
        },
        {
          title: 'Test-PassCount',
          value: '38'
        },
        {
          title: 'Test-FailCount',
          value: '8'
        },
        {
          title: ' Test-PassPercentage',
          value: '82.61'
        },
        {
          title: 'Device URl',
          value: '192.168.1.107'
        },
        {
          title: ' Device OS',
          value: 'Rancher'
        },
        {
          title: 'SRC Tag',
          value: 'NA'
        },
        {
          title: 'Device Inventory Branch',
          value: 'master'
        },
        {
          title: 'Device Core Branch',
          value: 'master'
        },
        {
          title: 'Sim MQTT URL',
          value: '192.168.1.107'
        },
        {
          title: ' Device Inventory GIT docker-compose version',
          value: 'e795c4fb71f1134112bfffea60112d7c1c56bfa5'
        },
        {
          title: 'Device Core GIT docker-compose version',
          value: '802004be31d9f6d519e4f146feb928657e2befea'
        },
        {
          title: ' Version of context-broker',
          value: '93111ed5f1141b23f1c1f20a02911081bff5321e386e381d21e122284445ba49'
        },
        {
          title: ' Version of rrs-rfid-provider',
          value: '51bf80b87a64b0fc95b72745157d7bab95749ad7f580770db9dd24362ba26577'
        },
        {
          title: '  Version of inventory-service',
          value: 'b359a50abc49cbd0bbb656c6f25d1c95202590cd87e2adfdba32ac78633d2367'
        },
        {
          title: 'Version of mapping-sku-service',
          value: 'ee627e5bdf5e314dd81c793ed5b22b8d7a307dd180d06f1a4621d36422d12c40'
        },
        {
          title: ' Version of eventfilter',
          value: '5cc33682b6aa3e46bbf635f35e40ef2c9451748a957894cf0f6b8b9afa7fa7ec'
        },
        {
          title: 'Version of eventfilter',
          value: '5cc33682b6aa3e46bbf635f35e40ef2c9451748a957894cf0f6b8b9afa7fa7ec'
        },
        {
          title: 'Version of location-service',
          value: '63ceecb65fde02dad193358a309eda7efc14c85987b619a7c84132d3063982f8'
        },
        {
          title: 'Version of cloud-connector-service',
          value: '88b41c0391c6b21bcc3532a24a5b69f7179281ea00b80c6b0526fb29465c20e7'
        },
        {
          title: 'Version of rules-service',
          value: '06af39fd27a73981abad291c5483ae1bbebfdf717f8e1f5cf58528920d666994'
        },
        {
          title: 'Version of product-data-provider',
          value: '42a37d43d9ee6dd12b7623f5c87f830a6b17b251e7632353a7aacb447b311e0e'
        },
        {
          title: ' Version of rfid-gateway',
          value: '3.x-beta-25'
        },
        {
          title: 'Version of rfid-alert-service',
          value: 'b340a4d16f95dae48789325e55db3cc88531d918eb722af2fed510c5ee3c72f1'
        },
        {
          title: 'Secure connection status of broker-in',
          value: 'true'
        },
        {
          title: 'Secure connection status of broker-out',
          value: 'true'
        },
        {
          title: 'Secure connection status of broker-out',
          value: 'true'
        },
        {
          title: '  ROBOT_STOP_ONFAIL',
          value: ' False'
        }
      ],
      data: [
        {
          name: 'Test-PassCount',
          value: 38
        },
        {
          name: 'Test-FailCount',
          value: 8
        }
      ],
      reportsList: [
        {
          title: 'Reports',
          value: 'src/assets/data/rrp/5143147-160/mailText.html'
        },
        {
          title: 'Tab2',
          value: ''
        }
      ]
    },
    {
      projectName: 'RRS',
      projectCode: 'rrs',
      summary: [
        {
          title: 'iTAF-Duration',
          value: '1H:03M:09S'
        },
        {
          title: 'iTAF-Duration',
          value: '1H:03M:09S'
        },
        {
          title: 'Test-PassCount',
          value: '38'
        },
        {
          title: 'Test-FailCount',
          value: '8'
        },
        {
          title: ' Test-PassPercentage',
          value: '82.61'
        },
        {
          title: 'Device URl',
          value: '192.168.1.107'
        },
        {
          title: ' Device OS',
          value: 'Rancher'
        },
        {
          title: 'SRC Tag',
          value: 'NA'
        },
        {
          title: 'Device Inventory Branch',
          value: 'master'
        },
        {
          title: 'Device Core Branch',
          value: 'master'
        },
        {
          title: 'Sim MQTT URL',
          value: '192.168.1.107'
        },
        {
          title: ' Device Inventory GIT docker-compose version',
          value: 'e795c4fb71f1134112bfffea60112d7c1c56bfa5'
        },
        {
          title: 'Device Core GIT docker-compose version',
          value: '802004be31d9f6d519e4f146feb928657e2befea'
        },
        {
          title: ' Version of context-broker',
          value: '93111ed5f1141b23f1c1f20a02911081bff5321e386e381d21e122284445ba49'
        },
        {
          title: ' Version of rrs-rfid-provider',
          value: '51bf80b87a64b0fc95b72745157d7bab95749ad7f580770db9dd24362ba26577'
        },
        {
          title: '  Version of inventory-service',
          value: 'b359a50abc49cbd0bbb656c6f25d1c95202590cd87e2adfdba32ac78633d2367'
        },
        {
          title: 'Version of mapping-sku-service',
          value: 'ee627e5bdf5e314dd81c793ed5b22b8d7a307dd180d06f1a4621d36422d12c40'
        },
        {
          title: ' Version of eventfilter',
          value: '5cc33682b6aa3e46bbf635f35e40ef2c9451748a957894cf0f6b8b9afa7fa7ec'
        },
        {
          title: 'Version of eventfilter',
          value: '5cc33682b6aa3e46bbf635f35e40ef2c9451748a957894cf0f6b8b9afa7fa7ec'
        },
        {
          title: 'Version of location-service',
          value: '63ceecb65fde02dad193358a309eda7efc14c85987b619a7c84132d3063982f8'
        },
        {
          title: 'Version of cloud-connector-service',
          value: '88b41c0391c6b21bcc3532a24a5b69f7179281ea00b80c6b0526fb29465c20e7'
        },
        {
          title: 'Version of rules-service',
          value: '06af39fd27a73981abad291c5483ae1bbebfdf717f8e1f5cf58528920d666994'
        },
        {
          title: 'Version of product-data-provider',
          value: '42a37d43d9ee6dd12b7623f5c87f830a6b17b251e7632353a7aacb447b311e0e'
        },
        {
          title: ' Version of rfid-gateway',
          value: '3.x-beta-25'
        },
        {
          title: 'Version of rfid-alert-service',
          value: 'b340a4d16f95dae48789325e55db3cc88531d918eb722af2fed510c5ee3c72f1'
        },
        {
          title: 'Secure connection status of broker-in',
          value: 'true'
        },
        {
          title: 'Secure connection status of broker-out',
          value: 'true'
        },
        {
          title: 'Secure connection status of broker-out',
          value: 'true'
        },
        {
          title: '  ROBOT_STOP_ONFAIL',
          value: ' False'
        }
      ],
      data: [
        {
          name: 'Test-PassCount',
          value: 38
        },
        {
          name: 'Test-FailCount',
          value: 8
        }
      ],
      reportsList: [
        {
          title: 'Reports',
          value: 'src/assets/data/rrp/5143147-160/mailText.html'
        },
        {
          title: 'Tab2',
          value: ''
        }
      ]
    }
  ];
  prjList = [];
  reportsForm = this.fb.group({
    selectedPrj: ['ers', Validators.required]
  });
  displayedColumns: string[] = ['title', 'value'];
  reportsTab = [];
  reportsTabTitle = [];

  onChartClick (event) {
    console.log(event);
  }

  getPrj() {
    console.log(this.reportsForm.value);
    this.selectedPrjData = this.reportsData.slice(0);
    this.selectedPrjData = this.selectedPrjData.filter(obj => {
      return obj.projectCode === this.reportsForm.value['selectedPrj'];
    })[0];
    console.log(this.selectedPrjData);
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
  }

  getSampleData() {
    this.reportsService.getSampleData()
      .subscribe((data) => {
        console.log(data);
        this.reportsTabTitle = Object.keys(data);
        this.reportsTab.push(data['profile'][0]);
        this.reportsTab.push(data['status']);
        this.reportsTab.push(data['testScenario'][0]);
        this.reportsTab.push(data['testScenarioConfig'][0]);
        this.reportsTab.push(data['useCase'][0]);
        this.reportsTab.push(data['wwBuildId'][0]);
    });
  }
  loadReportTabsData(data) {
    console.log(this.selectedPrjData.reportsList);
    data.forEach(element => {
      if (element.value) {
        element.isArray = false;
      } else {
        element.value = this.reportsTab;
        element.isArray = true;
      }
    });
    this.selectedPrjData.reportsList = data;
    setTimeout(() => {
      console.log(this.selectedPrjData.reportsList);
    }, 4000);
  }

  ngOnInit() {
    console.log(localStorage.getItem('prjList'));
    this.prjList = JSON.parse(localStorage.getItem('prjList'));
    this.getPrj();
    this.getSampleData();
  }

  sanitize(url: string) {
    url = (url) ? url = '../../' + url : '../../src/assets/404.html';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

