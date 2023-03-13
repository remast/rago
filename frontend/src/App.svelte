<script lang="ts">
  import {
    Start,
    Stop,
    SetVolume,
    GetVolume,
    ChangeStation,
    GetStations,
  } from "../wailsjs/go/main/App.js";
  import { Icon, Stop as StopIcon, Play } from "svelte-hero-icons";
  import { onMount } from "svelte";
  import type { main } from "wailsjs/go/models";

  let playing = false;
  let volume = 100;
  export let stations: main.Station[] = [];

  function play(): void {
    Start().then(() => (playing = true));
  }

  function stop(): void {
    Stop().then(() => (playing = false));
  }

  function changeStation(): void {
    ChangeStation();
  }

  function onVolumeChanged() {
    SetVolume(volume / 100);
  }

  onMount(async () => {
    GetVolume().then((v) => (volume = v * 100));
    GetStations().then((s) => (stations = s));
  });
</script>

<main>
  <div>{{ volume }}</div>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {#each stations as station}
        <div>
          <div class="card w-96 bg-primary text-primary-content">
            <div class="card-body">
              <h2 class="card-title">{{ station }}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="container mx-auto mt-4">
    <div class="grid grid-cols-2 gap-3 ml-9 mr-9 content-center">
      <div>
        {#if playing}
          <button class="btn btn-primary animate-pulse" on:click={stop}>
            <Icon src={StopIcon} mini solid />
          </button>
        {:else}
          <button class="btn btn-primary" on:click={play}>
            <Icon src={Play} mini solid />
          </button>
        {/if}
      </div>
      <div class="m-auto text-xl">111</div>
      <div class="col-span-2">
        <input
          bind:value={volume}
          on:change={onVolumeChanged}
          type="range"
          min="0"
          max="100"
          class="range"
        />
      </div>
    </div>
  </div>
</main>

<style>
</style>
