new Vue({
  el: "#monster-game",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    actions: []
  },
  methods: {
    runGame() {
      this.gameIsRunning = true;
    },
    attack() {
      const playerDamage = this.playerAttack();
      this.messageTemplate(true, "PLAYER HITS MONSTER FOR " + playerDamage);
  
      const monsterDamage = this.monsterAttack();
      this.messageTemplate(false, "MONSTER HITS PLAYER FOR " + monsterDamage);
    },
    damageTemplate(min, max) {
      return Math.max(
        Math.floor(Math.random() * max) + 1
        , min);
    },
    playerAttack() {
      const damage = this.damageTemplate(3, 10);
      this.monsterHealth -= damage;
      
      return damage;
    },
    monsterAttack() {
      const damage = this.damageTemplate(5, 12);
      this.playerHealth -= damage;
      
      return damage;
    },
    messageTemplate(isUser, message) {
      const id = this.damageTemplate(1, 99999);
      this.actions = [ { id, isUser, message }, ...this.actions ];
    }
  }
});
