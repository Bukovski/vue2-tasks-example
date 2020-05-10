new Vue({
  el: "#monster-game",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    actions: []
  },
  methods: {
    damageTemplate(min, max) {
      return Math.max(
        Math.floor(Math.random() * max) + 1
        , min);
    },
    runGame() {
      this.gameIsRunning = true;
    },
    attack() {
      this.playerAttack();
      this.monsterAttack();
    },
    playerAttack() {
      const damage = this.damageTemplate(3, 10);
      
      this.monsterHealth -= damage;
    },
    monsterAttack() {
      const damage = this.damageTemplate(5, 12);
    
      this.playerHealth -= damage;
    }
  }
});
