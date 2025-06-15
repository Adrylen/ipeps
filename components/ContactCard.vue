<script setup lang="ts">
import { EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div :class="[
    'card',
    'card-border',
    'bg-neutral',
    'border-primary',
    'border-2',
    'rounded-2xl',
    'shadow-2xl/50',
    'px-0', 'sm:px-8',
    'w-full',
  ]">
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
      <p :class="[
        'px-8', 'sm:px-4',
        'py-4',
        'text-center',
        'text-xl',
      ]">
        Conseil pour les affaires et autres conseils de gestion
      </p>
      <div :class="[
        'flex',
        'flex-col', 'md:flex-row',
        'gap-8',
        'justify-between',
        'py-4',
      ]">
        <div :class="[
          'flex',
          'flex-col',
          'gap-2',
          'items-center', 'md:items-start',
          'md:justify-between',
        ]">
          <span class="font-primary text-primary-content text-2xl">
            Isabelle Martinez
          </span>
          <a class="flex gap-2 text-secondary-content font-bold" href="tel:0613628421">
            <abbr title="Téléphone"><DevicePhoneMobileIcon class="size-6" /></abbr>+33 6 13 62 84 21
          </a>
          <a class="flex gap-2 text-secondary-content font-bold" href="mailto:pepsconseils@yahoo.com">
            <abbr title="Email"><EnvelopeIcon class="size-6" /></abbr>pepsconseils@yahoo.com
          </a>
        </div>
        <div :class="[
          'flex',
          'flex-col',
          'gap-2', 'md:gap-0',
          'items-start', 'md:items-end',
        ]">
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
