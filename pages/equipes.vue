<template>
  <div>
    <div class="row">

    </div>
    <div class="row">
      <div class="">
        <card>
          <h4 slot="header" class="card-title">Personnel affecté au travail</h4>
          <h1>19</h1>
        </card>
      </div>
      <div class="col-2">
        <card>
          <h4 slot="header" class="card-title">Equipes en déploiement</h4>
          <h1>7</h1>
        </card>
      </div>
      <div class="">
        <card>
          <h4 slot="header" class="card-title">Personnel non affecté</h4>
          <h1>6</h1>
        </card>
      </div>
      <div class="col-6">
        <card>
          <h4 slot="header" class="card-title">Actu Equipes</h4>
          <base-alert type="success">
            <span>
              <b>Info - </b> Equipe 04 à terminé sa tournée.
            </span>
          </base-alert>
          <base-alert type="info">
            <span>
              <b>Info - </b> Equipe 01 à commencé sa tournée.
            </span>
          </base-alert>
        </card>
      </div>
    </div>

    <div class="row">
    <div class="col-4">
      <div class="col">
        <card card-body-classes="table-fonction-width">
          <h4 slot="header" class="card-title">Equipes à disposition</h4>
          <el-table :data="tableData">
            <el-table-column
              sortable
              label="Nom"
              property="name"
            ></el-table-column>
            <el-table-column
              sortable
              label="Fonction"
              property="fonction"
            ></el-table-column>
          </el-table>
        </card>
      </div>
    </div>
    <div class="col-7">
      <div class="col">
        <card card-body-classes="table-fonction-width">
          <h4 slot="header" class="card-title">Equipes affectées</h4>
          <el-table :data="tableData2">
            <el-table-column
              sortable
              label="Equipe"
              property="equipe"
            ></el-table-column>
            <el-table-column
              sortable
              label="Nom"
              property="name"
            ></el-table-column>
            <el-table-column
              sortable
              label="fonction"
              property="fonction"
            ></el-table-column>
            <el-table-column
              sortable
              label="Véhicule"
              property="done"
            ></el-table-column>
            <el-table-column
              sortable
              label="Itinéraire"
              property="address"
            ></el-table-column>
          </el-table>
        </card>
      </div>
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
          name: 'Jean',
          address: '103 rue John Doe - 69005',
          fonction: 'Chauffeur',
          done: 'Vidé'
        },
        {
          name: 'Gavino Toscano',
          address: '20 rue Dufrène - 69005',
          fonction: 'Agent de terrain',
          done: 'Vidé'
        },
        {
          name: 'Anastasie Sevier',
          address: '1 rue du Caire - 69005',
          fonction: 'Chauffeur',
          done: 'Vidé'
        },
        {
          name: 'Agate Grandpré',
          address: '3 rue St. Pierre - 69005',
          fonction: 'Agent de terrain',
          done: 'CB'
        },
        {
          name: 'Jamal E. Ford',
          address: '12 rue Juliot - 69005',
          fonction: 'Agent de terrain',
          done: 'Planifiée'
        },
        {
          name: 'Julien Blanchard',
          address: '3 rue St. Pierre - 69005',
          fonction: 'Agent de terrain',
          done: 'CB'
        },
      ],
      tableData2: [
        {
          equipe: '12',
          name: 'Arlette Descoteaux',
          address: 'A0F',
          fonction: 'Chauffeur',
          done: 'CL 34'
        },
        {
          equipe : '20',
          name: 'José Correia',
          address: '00F',
          fonction: 'Agent de terrain',
          done: 'CB 02'
        },
        {
          equipe: '12',
          name: 'Luca Saenger',
          address: 'A0F',
          fonction: 'Chauffeur',
          done: 'CL 34'
        },
        {equipe : '01',
          name: 'Ulrich Frueh',
          address: '04B',
          fonction: 'Chauffeur%',
          done: 'CL 12'
        },
        {
          equipe: '13',
          name: 'Adrienne Norbert',
          address: '12A',
          fonction: 'Agent de terrain',
          done: 'CB'
        },
        {
          equipe: '13',
          name: 'Jiao Chang',
          address: '12A',
          fonction: 'Agent de terrain',
          done: 'CB'
        },
        {
          equipe: '13',
          name: 'Farhah Hajjar',
          address: '12A',
          fonction: 'Agent de terrain',
          done: 'CB'
        },
      ]
    };
  },
};
</script>
<style>
.table-transparent {
  background-color: transparent !important;
}
</style>
