<script setup lang="ts">
import { EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="card card-border border-primary border-2 rounded-2xl bg-neutral shadow-2xl/50 px-8">
    <figure class="h-[150px]">
      <img
        alt="Logo iPeps"
        class="scale-50"
        src="/images/logo.png"
      />
    </figure>
    <div class="card-body pt-0">
      <h1 class="card-title text-6xl font-primary text-secondary-content justify-center">
        iPeps
      </h1>
      <h2 class="text-2xl font-logo-secondary text-center">
        Engagée pour votre Entreprise...
      </h2>
      <p class="text-xl p-4">
        Conseil pour les affaires et autres conseils de gestion
      </p>
      <div class="flex justify-between">
        <div class="flex flex-col justify-between">
          <span class="font-primary text-primary-content text-2xl">
            Isabelle Martinez
          </span>
          <a class="flex gap-2 text-secondary-content font-bold" href="tel:0613628421">
            <abbr title="Téléphone"><DevicePhoneMobileIcon class="size-6" /></abbr>+33 6 13 62 84 21
          </a>
          <a class="flex gap-2 text-secondary-content font-bold" href="mailto:pepsconseils@gmail.com">
            <abbr title="Email"><EnvelopeIcon class="size-6" /></abbr>pepsconseils@gmail.com
          </a>
        </div>
        <div class="flex flex-col items-end">
          <p>
            SIRET : 98242825200018
          </p>
          <p>
            Code APE : 7022Z
          </p>
          <p>
            TVA Intracommunautaire : FR05982428252
          </p>
          <p>
            Numéro RCS : Beauvais B 982428252
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
