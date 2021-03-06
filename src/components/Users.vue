<template>
  <v-card id="user-card">
    <v-toolbar color="light-blue lighten-1" dark>
      <v-toolbar-title>Github Users</v-toolbar-title>
    </v-toolbar>

    <v-alert
      id="invalidUser"
      :value="invalidUser"
      type="error"
    >
      {{invalidUser}} is not a valid Github user.
    </v-alert>

    <v-alert
      id="usernameBlank"
      :value="usernameBlank"
      type="error"
    >
      Username not entered
    </v-alert>

    <v-alert
      id="usernameDuplicate"
      :value="usernameDuplicate"
      type="error"
    >
      {{username}} already exists in the list
    </v-alert>

    <v-alert
      id="validUser"
      :value="validUser"
      type="success"
    >
      {{validUser}} was successfully added
    </v-alert>

    <v-list two-line>
      <template v-for="(user) in getUsers">
        <v-subheader :key="user">
          <a v-bind:href="`https://github.com/${user}`">{{ user }}</a>
        </v-subheader>
      </template>
    </v-list>

    <v-divider></v-divider>
    <v-card-actions>
    <v-text-field
      label="Username"
      v-model="username"
      @keyup.enter="submitInput"
    ></v-text-field>
    <v-btn v-on:click="submitInput" color="success" small fab>
      <v-icon>add</v-icon>
    </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Mutation, State, Getter } from 'vuex-class';
const TIMEOUT = 1_500;
@Component
export default class Users extends Vue {
    @Getter public getUsers!: string[];
    @Getter public invalidUser!: string;
    @Getter public validUser!: string;

    public username = '';
    public usernameBlank = false;
    public usernameDuplicate = false;
    public submitInput() {
        const username = this.username;

        if (!username) {
          this.usernameBlank = true;
          setTimeout(() => {
            this.usernameBlank = false;
          }, TIMEOUT);

          return;
        }

        if (this.getUsers.includes(username)) {
          this.usernameDuplicate = true;

          setTimeout(() => {
            this.usernameDuplicate = false;
            this.username = '';
          }, TIMEOUT);

          return;
        }

        this.username = '';

        this.$store.dispatch('getGithubData', {username, router: this.$router, firstRun: false});
    }
}
</script>
