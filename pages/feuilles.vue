<template>
  <div>
    <div class="row">
      <div class="col-4">
        <card>
          <h4 slot="header" class="card-title">Remplissage de la benne</h4>
          <h1>75%</h1>
        </card>
      </div>
      <div class="col-4">
        <card>
          <h4 slot="header" class="card-title">Silos récupérés</h4>
          <h1>3/5</h1>
        </card>
      </div>
      <div class="col-4">
        <card>
          <h4 slot="header" class="card-title">Durée de tournée</h4>
          <h1>45 Minutes</h1>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <card>
          <h4 slot="header" class="card-title">Itinéraire</h4>
          <div style="height: 350px" id="map"></div>
        </card>
      </div>
      <div class="col-md-6">
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Bennes</h4>
          <el-table :data="tableData">
            <el-table-column
              sortable
              label="Benne"
              property="name"
            ></el-table-column>
            <el-table-column
              sortable
              label="Remplissage"
              property="full"
            ></el-table-column>
            <el-table-column
              sortable
              label="Adresse"
              property="address"
            ></el-table-column>
          </el-table>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <card>
          <h4 slot="header" class="card-title">Actu Tournée</h4>
          <base-alert type="info">
            <span>
              <b>Info - </b> Début de la tournée #2020111801
            </span>
          </base-alert>
          <base-alert type="info">
            <span>
              <b>Info - </b> Mise à jour de l'itinéraire
            </span>
          </base-alert>
          <base-alert type="success">
            <span>
              <b>Benne vidée (Ar15) - </b> 20 rue Dufrène - 69005
            </span>
          </base-alert>
          <base-alert type="warning">
            <span>
              <b>Panne (1 heure) -</b> 3 rue St. Pierre - 69005
            </span>
          </base-alert>
          <base-alert type="danger">
            <span>
              <b>Bouchons (30 minutes) -</b> 3 rue St. Pierre - 69005
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
          name: 'Ar07',
          address: '103 rue John Doe - 69005',
          full: '80%',
          done: true
        },
        {
          name: 'Ar15',
          address: '20 rue Dufrène - 69005',
          full: '78%',
          done: true
        },
        {
          name: 'Ar31',
          address: '1 rue du Caire - 69005',
          full: '91%',
          done: true
        },
        {
          name: 'Ar01',
          address: '12 rue Juliot - 69005',
          full: '80%',
          done: false
        },
        {
          name: 'Ar14',
          address: '3 rue St. Pierre - 69005',
          full: '71%',
          done: false
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
