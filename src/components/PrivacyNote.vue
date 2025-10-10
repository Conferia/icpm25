<template>
  <ion-modal :is-open="isOpen" @ionModalDidClose="closeModal">
    <ion-header>
      <ion-toolbar>
        <ion-title>Privacy Note</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

     <p>COAL-FING-UDELAR, who is the organizer of ICPM 2025, as data
controller, collects and processes information about you in connection
with your registration and the participation to the conference.</p>
<p>We process your information in compliance with Law No. 18,331 of
República Oriental del Uruguay, regarding the Protection of Personal
Data and Habeas Data (<a href="https://www.impo.com.uy/bases/leyes/18331-2008" target="_blank" rel="noopener noreferrer">
        https://www.impo.com.uy/bases/leyes/18331-2008</a>).</p>
<p><strong>Type of data</strong></p>
<p>By registering for ICPM 2025, you are added to the participant
(delegates) list, which is shown in this application.</p>
<p>We collect and process the following data:</p>
<ul>
<li><p>Name: Visible to all the participants using this
application.</p></li>
<li><p>Messages and pictures that you voluntarily upload to the
application: Visible to all the participants using this
application.</p></li>
<li><p>Affiliation, country, e-mail, and profile picture: Visible to all
the participants using this application only if you actively decide to
share them.</p></li>
</ul>
<p>We do not process sensitive personal data in this application. Please
do not share sensitive data via this application.</p>
<p>Your data will not be disclosed by COAL-FING-UDELAR to third parties
unless we are obliged to provide the data because of a legal obligation
or in order to perform a task in the public interest. COAL-FING-UDELAR
does not transfer your data to countries outside Uruguay.</p>
<p><strong>Storage and disclosure</strong></p>
<p>The data is stored in ANTEL's Data Centers within Uruguay's borders.
We store your data for as long as necessary for the purpose for which
the data is processed. When it is no longer relevant to store your data
in order to fulfill its purpose, the data will be deleted or archived.
This will happen no later than one year after the conference.</p>
<p><strong>Your rights</strong></p>
<p>When we process data about you, as the data subject, you have a
number of rights:</p>
<ul>
<li><p>You have the right to request access, rectification, or erasure
of your personal data.</p></li>
<li><p>You also have the right to oppose the processing of your personal
data and, in some cases, to have the processing of your personal data
limited.</p></li>
<li><p>Particularly, you have an unconditional right to oppose the
processing of your personal data for direct marketing.</p></li>
<li><p>If the processing of your personal data is based on your consent,
you have the right to withdraw your consent at any time. Your withdrawal
will not have any impact on the lawfulness of the processing carried out
prior to your withdrawal of your consent.</p></li>
<li><p>You are entitled to receive the personal data that you have
submitted in a structured, commonly used, and machine-readable format
(data portability).</p></li>
<li><p>You can always file a complaint with a data protection
supervisory authority.</p></li>
</ul>
<p>There may be conditions for or restrictions to these rights. It is,
therefore, not certain that you, for example, have the right to data
portability in some cases –this depends on the specific circumstances
surrounding the processing activities.</p>
<p>If you have any questions or concerns about this Privacy Policy,
please contact us at:</p>
<p>coal@fing.edu.uy</p>
    </ion-content>
  </ion-modal>
 </template>

<script setup lang="ts">
import {IonButtons, IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar} from "@ionic/vue";
import {ref, toRefs} from "vue";

const props = defineProps({
  isOpen: Boolean
});
const emit = defineEmits(['update:isOpen']);

const { isOpen } = toRefs(props);
const closeModal = (open: boolean) => (emit('update:isOpen', false));
</script>
