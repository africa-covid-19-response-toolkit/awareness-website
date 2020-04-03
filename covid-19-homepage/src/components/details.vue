<template>
  <b-container>
    <router-link to="/">Back</router-link>
    <div>
      <slot name="Header"></slot>
      <slot name="Body"></slot>
    </div>
  </b-container>
</template>
