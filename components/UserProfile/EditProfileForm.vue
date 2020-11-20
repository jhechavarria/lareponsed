<template>
  <card>
    <h5 slot="header" class="title"> {{ $t('user_profile.edit_profile_form.edit_profile') }}</h5>
    <form @submit.prevent="updateProfile">
      <div class="row">
        <div class="col-md-5">
          <base-input
            type="text"
            :label="$t('user_profile.edit_profile_form.edit_profile_var.societe')"
            :disabled="false"
            placeholder="Company"
            v-model="user.company"
          >
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input
            type="text"
            :label="$t('user_profile.edit_profile_form.edit_profile_var.nom_d_utilisateur')"
            placeholder="Username"
            v-model="user.username"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            type="email"
            :label="$t('user_profile.edit_profile_form.edit_profile_var.email')"
            placeholder="mike@email.fr"
            v-model="user.email"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            :label="$t('user_profile.edit_profile_form.edit_profile_var.prenom')"
            placeholder="First Name"
            v-model="user.firstName"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            :label="$t('user_profile.edit_profile_form.edit_profile_var.nom')"
            placeholder="Last Name"
            v-model="user.lastName"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input
            type="text"
            :label="$t('user_profile.edit_profile_form.edit_profile_var.adresse')"
            placeholder="Home Address"
            v-model="user.address"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input
            type="text"
            :label="$t('user_profile.edit_profile_form.edit_profile_var.ville')"
            placeholder="City"
            v-model="user.city"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            type="text"
            label="Pays"
            placeholder="Country"
            v-model="user.country"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            :label="$t('user_profile.edit_profile_form.edit_profile_var.code_postal')"
            placeholder="ZIP Code"
            v-model="user.postalCode"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input :label="$t('user_profile.edit_profile_form.edit_profile_var.a_propos_de_moi')">
            <textarea
              class="form-control"
              placeholder="ZIP Code"
              v-model="user.aboutMe"
            >
            </textarea>
          </base-input>
        </div>
      </div>

      <base-button native-type="submit" type="primary" class="btn-fill">
        {{ $t('user_profile.edit_profile_form.enregistrer') }}
      </base-button>
    </form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: 'Glass Connect',
        username: 'alice26',
        email: 'alice.petit@vitrhone.fr',
        firstName: 'Alice',
        lastName: 'PETIT',
        address: '7 Rue Jean-Marie Leclair, 69009 Lyon',
        city: 'Lyon',
        country: 'France',
        postalCode: '69000',
        aboutMe: `Co-fondatrice & spécialiste IA`
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
