<script lang="ts">
  import {
    Start,
    Stop,
    SetVolume,
    GetVolume,
    ChangeStation,
  } from "../wailsjs/go/main/App.js";
  import { Icon, Stop as StopIcon, Play } from "svelte-hero-icons";
  import { onMount } from "svelte";

  let playing = false;
  let volume = 100;

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
    GetVolume().then(() => (this.volume = volume));
  });
</script>

<main>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <div class="card w-96 bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
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
  #logo {
    display: block;
    width: 50%;
    height: 50%;
    margin: auto;
    padding: 10% 0 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-origin: content-box;
  }

  .result {
    height: 20px;
    line-height: 20px;
    margin: 1.5rem auto;
  }

  .input-box .btn {
    width: 60px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    border: none;
    margin: 0 0 0 20px;
    padding: 0 8px;
    cursor: pointer;
  }

  .input-box .btn:hover {
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    color: #333333;
  }

  .input-box .input {
    border: none;
    border-radius: 3px;
    outline: none;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background-color: rgba(240, 240, 240, 1);
    -webkit-font-smoothing: antialiased;
  }

  .input-box .input:hover {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }

  .input-box .input:focus {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }
</style>
