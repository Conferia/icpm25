<template>
  <ion-menu side="end" contentId="main-content" menuId="settings-menu">
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
          <div id="logo-large-settings" />
        <p>Welcome {{ name.firstname }} {{name.lastname}}</p>
      </div>
      <ion-list lines="full">
        <ion-item button :routerLink="'/profile/settings/'" @click="trackButtonClick('Profile page', 'Home', 'Navigation')">
          <ion-label>
            <ion-icon :icon="settingsOutline" slot="start" />
            Settings
          </ion-label>
        </ion-item>
        <ion-item button :routerLink="'/tabs/about/'" @click="trackButtonClick('About page', 'Home', 'Navigation')">
          <ion-label>
            <ion-icon :icon="informationCircleOutline" slot="start" />
            About the app
          </ion-label>
        </ion-item>
        <ion-item button @click="() => { trackButtonClick('Logout Button', 'Home', 'Feature'); logout(); }">
          <ion-label>
            <ion-icon :icon="logOutOutline" slot="start" />
            Logout
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script setup lang="ts">
import {informationCircleOutline, logOutOutline, settingsOutline} from "ionicons/icons";
import {IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar} from "@ionic/vue";
import {useRouter} from 'vue-router';
import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";
import backend from "../../backend.config";
import {googleanalytics} from "@/composables/googleanalytics";

const { trackButtonClick } = googleanalytics();

const router = useRouter();
const name = reactive({
  firstname:"",
  lastname:""
});
const token = localStorage.getItem("accessToken")
const isDarkMode = ref(
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
);

// Function to update CSS custom properties
const updateLogoImages = () => {
  document.documentElement.style.setProperty(
    '--logo-settings-light',
    `url(${backend.config.logoLight || '/icpm-logo-1.png'})`
  );
  document.documentElement.style.setProperty(
    '--logo-settings-dark',
    `url(${backend.config.logoDark || '/icpm-logo-2.png'})`
  );
};

if (window.matchMedia) {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', (event) => {
    isDarkMode.value = event.matches;
    updateLogoImages();
  });
}

onMounted(async () => {
  updateLogoImages();
  try {
    const response = await axios.get(backend.construct( 'account/getName'),{ headers: { Authorization: `Bearer ${token}` } });
    name.firstname = response.data.firstname;
    name.lastname = response.data.lastname;
  } catch (error) {
    console.error('Failed to fetch pages', error);
  }
});



const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userId');
  router.push('/auth/login');
}

</script>

<style scoped>
body:not(.dark) #logo-large-settings {
  background-image: var(--logo-settings-light);
}

body.dark #logo-large-settings {
  background-image: var(--logo-settings-dark);
}
	
#logo-large-settings {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  /* width: 100%; */
  margin-bottom: 10px;
}
</style>
