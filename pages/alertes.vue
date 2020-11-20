<template>
  <div class="row">
    <div class="col-md-12">
      <card card-body-classes="table-full-width">
        <h4 slot="header" class="card-title">{{ $t('pages.alertes.pannes') }}</h4>
        <el-table :data="tableData">
          <el-table-column
            min-width="150"
            sortable
            :label="$t('pages.alertes.pannes_labels.ref_materielle')"
            property="name"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            :label="$t('pages.alertes.pannes_labels.type_materiel')"
            property="materiel"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            :label="$t('pages.alertes.pannes_labels.panne')"
            property="panne"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            :label="$t('pages.alertes.pannes_labels.etat')"
            property="etat"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            :label="$t('pages.alertes.pannes_labels.etat')"
            property="incident"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            :label="$t('pages.alertes.pannes_labels.etat')"
            property="cloture"
          ></el-table-column>
        </el-table>
      </card>
    </div>

    <div class="col-md-12">
      <card class="card-plain" body-classes="table-full-width">
        <template slot="header">
          <h4 class="card-title">{{ $t('pages.alertes.alertes_silos') }}</h4>
        </template>
        <el-table
          header-cell-class-name="table-transparent"
          header-row-class-name="table-transparent"
          row-class-name="table-transparent"
          :data="tableData2"
        >
          <el-table-column
            min-width="150"
            sortable
            :label="$t('pages.alertes.alertes_silos_labels.silo')"
            property="name"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            :label="$t('pages.alertes.alertes_silos_labels.seuil')"
            property="materiel"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            :label="$t('pages.alertes.alertes_silos_labels.prise_compte')"
            property="etat"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            :label="$t('pages.alertes.alertes_silos_labels.date_heure_incident')"
            property="incident"
          ></el-table-column>
        </el-table>
      </card>
    </div>
  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui';

export default {
  name: 'regular',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: 'CB E03',
          incident: '17/11/2020',
          materiel: 'Véhicule',
          etat: 'En dépannage',
          panne: 'Crevaison',
          cloture : ' '
        },
        {
          id: 2,
          name: 'Ar01#000001',
          incident: '16/11/2020',
          materiel: 'Silo',
          etat: 'Terminé',
          panne: 'Capteur',
          cloture : '16/11/2020'
        },
        {
          id: 3,
          name: 'CL Hooper16',
          incident: '15/11/2020',
          materiel: 'Véhicule',
          etat: 'HS',
          panne: 'Benne',
          cloture : ' '
        },
        {
          id: 4,
          name: 'Ar07#05301',
          incident: '15/11/2020',
          materiel: 'Silo',
          etat: 'En maintenance',
          panne: 'Alimentation',
          cloture : ' '
        },
        {
          id: 5,
          name: ' ',
          incident: '',
          materiel: '',
          etat: ''
        }
      ],
      tableData2: [
        {
          id: 1,
          name: 'Ar09#03525',
          incident: '17/11/2020  22:18',
          materiel: '88%',
          etat: 'Reportée'
        },
        {
          id: 2,
          name: 'Ar07#00666',
          incident: '17/11/2020 08:02',
          materiel: '85%',
          etat: 'effecuée'
        },
        {
          id: 3,
          name: 'Ar09#01825',
          incident: '17/11/2020 08:12',
          materiel: '92%',
          etat: 'en cours'
        },
        {
          id: 4,
          name: 'Ar09#04675',
          incident: '14/11/2020 17:47',
          materiel: '88%',
          etat: 'effecuée'
        },
        {
          id: 5,
          name: ' ',
          incident: '',
          materiel: '',
          etat: ''
        }
      ]
    };
  }
};
</script>
<style>
.table-transparent {
  background-color: transparent !important;
}
</style>
