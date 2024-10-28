<script setup>

</script>

<template>
  <main>
    <img src="../assets/Map First Draft.png" alt="map of Roshar">
    <div class="player-area">
      <form id="die-test">
        <button type="submit">Click Here</button>
        <div>Attacker</div>
        <select id="attacker" name="attacker">
          <option value=1>1</option>
          <option value=2>2</option>
          <option value=3>3</option>
        </select>
        <div>Defender</div>
        <select id="defender" name="defender">
          <option value=1>1</option>
          <option value=2>2</option>
        </select>
      </form>
      <!-- Okay, here I need the output. So it should default saying 0, and then when I submit the form above the output should be displayed here. -->
    </div>
  </main>
</template>

<style>
main {
  max-width: 100vw;
  max-height: 100vh;
}

img {
  max-width: 90vw;
  max-height: 90vh;
}
</style>
