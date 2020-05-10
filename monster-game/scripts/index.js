new Vue({
  el: "#monster-game",
  data: function () {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      actions: []
    }
  }
})