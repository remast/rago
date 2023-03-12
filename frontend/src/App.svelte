<script lang="ts">
  import { Start, Stop, SetVolume, GetVolume } from "../wailsjs/go/main/App.js";
  import { Icon, Stop as StopIcon, Play } from "svelte-hero-icons";
  import { onMount } from "svelte";

  let resultText: string = "Please enter your name below 👇";
  let name: string;

  let playing = false;

  let volume = 100;

  function play(): void {
    Start().then(() => (playing = true));
  }

  function stop(): void {
    Stop().then(() => (playing = false));
  }

  function onVolumeChanged() {
    SetVolume(volume / 100);
  }

  onMount(async () => {
    GetVolume().then(() => (this.volume = volume));
  });
</script>

<main>
  {#if playing}
    <button class="btn btn-primary animate-pulse" on:click={stop}>
      <Icon src={StopIcon} mini solid />
    </button>
  {:else}
    <button class="btn btn-primary" on:click={play}>
      <Icon src={Play} mini solid />
    </button>
  {/if}

  <input
    bind:value={volume}
    on:change={onVolumeChanged}
    type="range"
    min="0"
    max="100"
    class="range"
  />
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
