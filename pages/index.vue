<template>
  <div class="row">
    <!-- Big Chart -->
    <div class="col-12">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
              <h5 class="card-category">{{ $t('pages.dashboard.totalParSecteur') }}</h5>
              <h2 class="card-title">{{ $t('pages.dashboard.collectes') }}</h2>
            </div>
            <!-- <div class="col-sm-6 d-flex d-sm-block">
              <div
                class="btn-group btn-group-toggle"
                :class="isRTL ? 'float-left' : 'float-right'"
                data-toggle="buttons"
              >
                <label
                  v-for="(option, index) in bigLineChartCategories"
                  :key="option.name"
                  class="btn btn-sm btn-primary btn-simple"
                  :class="{ active: bigLineChart.activeIndex.includes(index) }"              
                  :id="index"
                >
                  <input
                    type="radio"
                    @click="() => {initCharts(index);} "
                    name="options"
                    autocomplete="off"
                    :checked="bigLineChart.activeIndex.includes(index)"
                  />
                  <span class="d-none d-sm-block">{{ option.name }}</span>
                  <span class="d-block d-sm-none">
                    <i :class="option.icon"></i>
                  </span>
                </label>
              </div>
            </div> -->
          </div>
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
            ref="bigChart"
            :chart-data="bigLineChart.chartData"
            :gradient-colors="bigLineChart.gradientColors"
            :gradient-stops="bigLineChart.gradientStops"
            :extra-options="bigLineChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div>


    <!-- Small charts -->
    <div class="col-lg-6" :class="{ 'text-right': isRTL }">
      <card type="chart">
        <template slot="header">
          <h5 class="card-category">{{ $t('pages.dashboard.effectifNecessairesMois') }}</h5>
          <h3 class="card-title">
            <i class="text-primary "></i> {{ $t('pages.dashboard.nombreSalaries') }}
          </h3>
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
            ref="SalarieChart"
            :chart-data="purpleLineChart.chartData"
            :gradient-colors="purpleLineChart.gradientColors"
            :gradient-stops="purpleLineChart.gradientStops"
            :extra-options="purpleLineChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div>
    <div class="col-lg-6" :class="{ 'text-right': isRTL }">
      <card type="chart">
        <template slot="header">
          <h5 class="card-category">{{ $t('pages.dashboard.predictions') }}</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-delivery-fast text-info "></i> {{ $t('pages.dashboard.collectePrevueMois') }}
          </h3>
        </template>
        <div class="chart-area">
          <bar-chart
            style="height: 100%"
            :chart-data="blueBarChart.chartData"
            :gradient-stops="blueBarChart.gradientStops"
            :extra-options="blueBarChart.extraOptions"
          >
          </bar-chart>
        </div>
      </card>
    </div>
    <!-- <div class="col-lg-4" :class="{ 'text-right': isRTL }">
      <card type="chart">
        <template slot="header">
          <h5 class="card-category">Completed tasks</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-send text-success "></i> 12,100K
          </h3>
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
            :chart-data="greenLineChart.chartData"
            :gradient-stops="greenLineChart.gradientStops"
            :extra-options="greenLineChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div> -->
    <!-- <div class="col-lg-5">
      <card type="tasks" :header-classes="{ 'text-right': isRTL }">
        <template slot="header" class="d-inline">
          <h6 class="title d-inline">Tasks (5)</h6>
          <p class="card-category d-inline">Today</p>

          <base-dropdown
            menu-on-right=""
            tag="div"
            title-classes="btn btn-link btn-icon"
            class="float-right"
          >
            <i slot="title" class="tim-icons icon-settings-gear-63"></i>
            <a class="dropdown-item" href="#pablo"> Action </a>
            <a class="dropdown-item" href="#pablo"> Another action </a>
            <a class="dropdown-item" href="#pablo"> Something else </a>
          </base-dropdown>
        </template>
        <div class="table-full-width table-responsive">
          <task-list></task-list>
        </div>
      </card>
    </div> -->
    <div class="col-lg-7">
      <card card-body-classes="table-full-width">
        <template slot="header">
        <h4 class="card-title ml-n3 col-lg-12">{{ $t('pages.dashboard.tourneesPrevoirPeriode') }}</h4>
        <div class="d-flex ">
              <div
                class="btn-group btn-group-toggle"
                :class="isRTL ? 'float-left' : 'float-right'"
                data-toggle="buttons"
              >
                <label
                  v-for="(option, index) in bigLineChartCategories"
                  :key="option.name"
                  class="btn btn-sm btn-success btn-simple"
                  :class="{ active: activePeriode === index}"              
                  :id="index"
                >
                  <input
                    type="radio"
                    @click="() => { loadTable(index)} "
                    name="options"
                    autocomplete="off"
                    :checked="activePeriode === index"
                  />
                  <span class="d-none d-sm-block">{{ option.name }}</span>
                  <span class="d-block d-sm-none">
                    <i :class="option.icon"></i>
                  </span>
                </label>
              </div>
            </div>
        </template>
        <el-table  ref="TableMouvements" 
                  :data="dataMvt">
          <el-table-column
            min-width="150"
            sortable
            :label="$t('pages.dashboard.tourneesPrevoirPeriodeLabels.secteurOrigine')"
            property="secteurO"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            :label="$t('pages.dashboard.tourneesPrevoirPeriodeLabels.secteurDestination')"
            property="secteurD"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            :label="$t('pages.dashboard.tourneesPrevoirPeriodeLabels.type')"
            property="type"
          ></el-table-column>       
          <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            :label="$t('pages.dashboard.tourneesPrevoirPeriodeLabels.nombre')"
            property="nb"
          ></el-table-column>
        </el-table>
      </card>
    </div>
    <div class="col-lg-5">
      <card card-body-classes="table-full-width">
        <h4 slot="header" class="card-title">{{ $t('pages.dashboard.variationEffectifs') }}</h4>
        <el-table :data="events">
          <el-table-column
            sortable
            :label="$t('pages.dashboard.variationEffectifsLabels.dateDebut')"
            property="dateStart"
          ></el-table-column>
          <el-table-column
            sortable
            :label="$t('pages.dashboard.variationEffectifsLabels.dateFin')"
            property="dateEnd"
          ></el-table-column>
          <el-table-column
            sortable
            :label="$t('pages.dashboard.variationEffectifsLabels.effectifs')"
            property="effectifs"
          ></el-table-column>
        </el-table>
      </card>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import * as chartConfigs from '@/components/Charts/config';
import TaskList from '@/components/Dashboard/TaskList';
import config from '@/config';
import { Table, TableColumn } from 'element-ui';

let bigChartData = [
  [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
  [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
  [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
]

let SalarieChartData = [[],[],[]]

bigChartData.forEach((set, index) => {
  set.forEach((valueSet, indexSet) => {
    if(indexSet > 5){
      let newValue = Math.trunc(valueSet / 10)
      SalarieChartData[index].push(newValue)
  }
  }) 
})

// let SalarieChartData = [
//   [5, 4, 9, 16, 12, 10],
//   [6, 5, 8, 14, 13, 7],
//   [7, 8, 5, 13, 12, 9]
// ]

//let bigChartLabels = ['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOUT', 'SEP', 'OCT', 'NOV', 'DEC']

let bigChartDatasetOptions0 = {
  label: "1",
  fill: false,
  borderColor: config.colors.orange,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: config.colors.orange,
  pointBorderColor: 'rgba(255,255,255,0)',
  pointHoverBackgroundColor: config.colors.primary,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4,
}


let bigChartDatasetOptions1 = {
  label: "2",
  fill: false,
  borderColor: config.colors.info,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: config.colors.info,
  pointBorderColor: 'rgba(255,255,255,0)',
  pointHoverBackgroundColor: config.colors.primary,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4,
}


let bigChartDatasetOptions2 = {
  label: "3",
  fill: false,
  borderColor: config.colors.primary,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: config.colors.primary,
  pointBorderColor: 'rgba(255,255,255,0)',
  pointHoverBackgroundColor: config.colors.primary,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4,
}

let tableData = [
        [
        {
          id: 1,
          secteurO: '1',
          secteurD: '3',
          type: 'effectif',
          nb: '1'
        }
      ],
        [
        {
          id: 1,
          secteurO: '2',
          secteurD: '3',
          type: 'benne_40t',
          nb: '1'
        },
        {
          id: 2,
          secteurO: '3',
          secteurD: '1',
          type: 'effectif',
          nb: '2'
        },
        {
          id: 3,
          secteurO: '2',
          secteurD: '3',
          type: 'benne_30t',
          nb: '1'
        },
        {
          id: 4,
          secteurO: '3',
          secteurD: '1',
          type: 'benne_40t',
          nb: '1'
        },
        {
          id: 5,
          secteurO: '3',
          secteurD: '2',
          type: 'effectif',
          nb: '3'
        }  
      ],
       [
        {
          id: 1,
          secteurO: '2',
          secteurD: '3',
          type: 'effectif',
          nb: '4'
        },
        {
          id: 2,
          secteurO: '2',
          secteurD: '3',
          type: 'benne_40t',
          nb: '1'
        },
        {
          id: 3,
          secteurO: '1',
          secteurD: '2',
          type: 'effectif',
          nb: '1'
        }     
      ],
       [
        {
          id: 1,
          secteurO: '1',
          secteurD: '3',
          type: 'effectif',
          nb: '1'
        },
        {
          id: 2,
          secteurO: '2',
          secteurD: '3',
          type: 'benne_40t',
          nb: '1'
        },
        {
          id: 3,
          secteurO: '2',
          secteurD: '1',
          type: 'benne_30t',
          nb: '1'
        },
        {
          id: 4,
          secteurO: '2',
          secteurD: '3',
          type: 'effectif',
          nb: '2'
        }
      ]      
      ]


export default {
  name: 'dashboard',
  components: {
    LineChart,
    BarChart,
    TaskList,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data () {
    return {

      events: [
        {
          name: 'Toussaint',
          dateStart: '17/10/2020',
          dateEnd: '02/11/2020',
          effectifs: '+2',
        },
        {
          name: 'Halloween',
          dateStart: '31/10/2020',
          dateEnd: '01/11/2020',
          effectifs: '+0',
        },
        {
          name: 'Black Friday',
          dateStart: '29/11/2020',
          dateEnd: '01/12/2020',
          effectifs: '+4',
        },
        {
          name: 'Cyber Monday',
          dateStart: '02/12/2020',
          dateEnd: '03/12/2020',
          effectifs: '+2',
        },
        {
          name: 'Noel',
          dateStart: '24/12/2020',
          dateEnd: '26/12/2020',
          effectifs: '+4',
        },
        {
          name: 'Nouvel An',
          dateStart: '30/12/2020',
          dateEnd: '02/01/2021',
          effectifs: '+5',
        }
      ],

    dataMvt: null,

    activePeriode: 0,

      bigLineChart: {
        activeIndex: [0,1,2],
        chartData: {
          datasets: [{
            ...bigChartDatasetOptions0,
            data: bigChartData[0]
          },
          { ...bigChartDatasetOptions1,
            data: bigChartData[1]},
          { ...bigChartDatasetOptions2,
            data: bigChartData[2]}],
          labels: this.$t('pages.dashboard.months')
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      },
      purpleLineChart: {
        extraOptions: chartConfigs.SalarieChartOptions,
        chartData: {
          labels: this.$t('pages.dashboard.months2'),
          datasets: [
            {
              label: '1',
              fill: false,
              borderColor: config.colors.orange,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.orange,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.orange,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: SalarieChartData[0]
            },
            {
              label: '2',
              fill: false,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.info,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.info,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: SalarieChartData[1]
            },
            {
              label: '3',
              fill: false,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: SalarieChartData[2]
            }
          ]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0]
      },
      greenLineChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: ['JUIL', 'AOUT', 'SEP', 'OCT', 'NOV'],
          datasets: [
            {
              label: 'My First dataset',
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [90, 27, 60, 12, 80]
            }
          ]
        },
        gradientColors: [
          'rgba(66,134,121,0.15)',
          'rgba(66,134,121,0.0)',
          'rgba(66,134,121,0)'
        ],
        gradientStops: [1, 0.4, 0]
      },
      blueBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: ['1', '2', '3'],
          datasets: [
            {
              label: 'Quantité à collecter',
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [120, 135, 110]
            }
          ]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0]
      }
    };
  },
  computed: {
    enableRTL () {
      return this.$route.query.enableRTL;
    },
    isRTL () {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories () {
      return [{
        name: this.$t('pages.dashboard.tourneesPrevoirPeriodeTabsLabels.jour'),
        icon: 'tim-icons icon-single-02'
      },
      {
        name: this.$t('pages.dashboard.tourneesPrevoirPeriodeTabsLabels.semaine'),
        icon: 'tim-icons icon-gift-2'
      }, {
        name: this.$t('pages.dashboard.tourneesPrevoirPeriodeTabsLabels.mois'),
        icon: 'tim-icons icon-tap-02'
      },
      {
        name: this.$t('pages.dashboard.tourneesPrevoirPeriodeTabsLabels.trimestre'),
        icon: 'tim-icons icon-tap-02'
      }];
    }
  },
  methods: {
    loadTable(index){
      this.dataMvt = tableData[index]
      this.activePeriode = index;
    }
  },
  created() {
    tableData = tableData.map(datas => {
      return datas.map(data => {
        if (data.secteurO) {
          let secteur = data.secteurO.split(' ')
          data.secteurO = this.$t('pages.dashboard.secteur', {secteur: secteur[secteur.length - 1]})
        }
        if (data.secteurD) {
          let secteur = data.secteurD.split(' ')
          data.secteurD = this.$t('pages.dashboard.secteur', {secteur: secteur[secteur.length - 1]})
        }
         data.type = this.$t('pages.dashboard.tourneesPrevoirPeriodeLabels.tournee_var.'+data.type)
        return data
      })
    })
    let secteur = bigChartDatasetOptions0.label.split(' ')
    bigChartDatasetOptions0.label = this.$t('pages.dashboard.secteur', {secteur: secteur[secteur.length - 1]})
    secteur = bigChartDatasetOptions1.label.split(' ')
    bigChartDatasetOptions1.label = this.$t('pages.dashboard.secteur', {secteur: secteur[secteur.length - 1]})
    secteur = bigChartDatasetOptions2.label.split(' ')
    bigChartDatasetOptions2.label = this.$t('pages.dashboard.secteur', {secteur: secteur[secteur.length - 1]})
    this.purpleLineChart.chartData.datasets = this.purpleLineChart.chartData.datasets.map(data => {
      let secteur = data.label.split(' ')
      data.label = this.$t('pages.dashboard.secteur', {secteur: secteur[secteur.length - 1]})
      return data
    })
    console.log('SECTEUR :', secteur)
    this.blueBarChart.chartData.labels = this.blueBarChart.chartData.labels.map(label => {
      let secteur = label.split(' ')
      return this.$t('pages.dashboard.secteur', { secteur: secteur[secteur.length - 1] })
    })
    secteur = this.blueBarChart.chartData.datasets[0].label.split(' ')
    this.blueBarChart.chartData.datasets[0].label = this.$t('pages.dashboard.quandCollecter', {secteur: secteur[secteur.length - 1]})
    this.greenLineChart.chartData.labels = this.greenLineChart.chartData.labels.map(label => {
      let secteur = label.split(' ')
      return this.$t('pages.dashboard.secteur', { secteur: secteur[secteur.length - 1] })
    })
    this.dataMvt = tableData[0]
    this.bigLineChart = {
        activeIndex: [0,1,2],
        chartData: {
          datasets: [{
            ...bigChartDatasetOptions0,
            data: bigChartData[0]
          },
          { ...bigChartDatasetOptions1,
            data: bigChartData[1]},
          { ...bigChartDatasetOptions2,
            data: bigChartData[2]}],
          labels: this.$t('pages.dashboard.months')
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      }
  },
  mounted () {
    this.loadTable(0);
  }
}
</script>
