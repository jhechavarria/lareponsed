<template>
  <div>
    <div class="row">

    </div>
    <div class="row">
      <div class="col-sm-6 col-md-3">
        <card>
          <h4 slot="header" class="card-title text-center">{{ $t('pages.feuilles.remplissage_de_la_benne')}}</h4>
          <h1 align="center">75%</h1>
        </card>
      </div>
      <div class="col-sm-6 col-md-3">
        <card>
          <h4 slot="header" class="card-title text-center">{{ $t('pages.feuilles.silos_recuperes')}}</h4>
          <h1 align="center">3/5</h1>
        </card>
      </div>
      <div class="col-sm-6 col-md-3">
        <card>
          <h4 slot="header" class="card-title text-center">{{ $t('pages.feuilles.trajet_restant')}}</h4>
          <h1 align="center">3 Km</h1>
        </card>
      </div>
      <div class="col-sm-6 col-md-3">
        <card>
          <h4 slot="header" class="card-title text-center">{{ $t('pages.feuilles.duree_estimee')}}</h4>
          <h1 align="center">30 min</h1>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <card>
          <h4 slot="header" class="card-title">{{ $t('pages.feuilles.itineraire')}}</h4>
          <div style="height: 350px" id="map"></div>
        </card>
      </div>
      <div class="col-md-6">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">{{ $t('pages.feuilles.silos')}}</h4>
          <el-table :data="tableData">
            <el-table-column
              sortable
              :label="$t('pages.feuilles.silos_labels.silo')"
              property="name"
            ></el-table-column>
            <el-table-column
              sortable
              :label="$t('pages.feuilles.silos_labels.remplissage')"
              property="full"
            ></el-table-column>
            <el-table-column
              sortable
              :label="$t('pages.feuilles.silos_labels.adresse')"
              property="address"
            ></el-table-column>
            <el-table-column
              sortable
              :label="$t('pages.feuilles.silos_labels.etat')"
              property="done"
            ></el-table-column>
          </el-table>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <card>
          <h4 slot="header" class="card-title">{{ $t('pages.feuilles.actu_tournée')}}</h4>
          <base-alert type="info">
            <span>
              <b>{{ $t('pages.feuilles.actu_tournée_var.info') }} - </b> {{ $t('pages.feuilles.actu_tournée_var.debut_tour') }} #2020111801
            </span>
          </base-alert>
          <base-alert type="info">
            <span>
              <b>{{ $t('pages.feuilles.actu_tournée_var.info') }} - </b> {{ $t('pages.feuilles.actu_tournée_var.maj_tour')}}
            </span>
          </base-alert>
          <base-alert type="success">
            <span>
              <b>{{ $t('pages.feuilles.actu_tournée_var.silo_vide') }} (Ar05#0015) - </b> 20 rue Dufrène - 69005
            </span>
          </base-alert>
          <base-alert type="warning">
            <span>
              <b>{{ $t('pages.feuilles.actu_tournée_var.route_baree') }} -</b> 3 rue St. Pierre - 69005
            </span>
          </base-alert>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { Table, TableColumn } from 'element-ui';
import tt from "@tomtom-international/web-sdk-maps";
import { BaseAlert } from '@/components';

export default {
  name: 'regular',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BaseAlert,
  },
  data() {
    return {
      key: "4NQ8LXRDKZxEifOocQ8QCj6okBGwXpTu",
      lyon: [4.834310, 45.767310],
      tableData: [
        {
          name: 'Ar05#0007',
          address: '103 rue John Doe - 69005',
          full: '80%',
          done: this.$t('pages.feuilles.feuilles_var.vide'),
        },
        {
          name: 'Ar05#0015',
          address: '20 rue Dufrène - 69005',
          full: '78%',
          done: this.$t('pages.feuilles.feuilles_var.vide'),
        },
        {
          name: 'Ar05#0031',
          address: '1 rue du Caire - 69005',
          full: '91%',
          done: this.$t('pages.feuilles.feuilles_var.vide'),
        },
        {
          name: 'Ar05#0001',
          address: '12 rue Juliot - 69005',
          full: '80%',
          done: this.$t('pages.feuilles.feuilles_var.planifie'),
        },
        {
          name: 'Ar05#0014',
          address: '3 rue St. Pierre - 69005',
          full: '71%',
          done: this.$t('pages.feuilles.feuilles_var.annule'),
        },
      ]
    };
  },
  mounted() {
    var firstMap = tt.map({
        key: this.key,
        container: 'map',
        style: 'tomtom://vector/1/basic-main',
        center: this.lyon,
        zoom: 15
    });
  },
};
</script>
<style>
.table-transparent {
  background-color: transparent !important;
}
</style>
