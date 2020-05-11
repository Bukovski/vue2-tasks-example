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
      const playerDamage = this.damageTemplate(3, 10);
      this.monsterHealth -= playerDamage;
      
      this.messageTemplate(true, "PLAYER HITS MONSTER FOR " + playerDamage);
  
      this.monsterAttack();
    },
    specialAttack() {
      const playerDamage = this.damageTemplate(10, 20);
      this.monsterHealth -= playerDamage;
  
      this.messageTemplate(true, "PLAYER HITS MONSTER HARD FOR " + playerDamage);
  
      this.monsterAttack();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.messageTemplate(true, "PLAYER HEALS FOR 10");
  
      this.monsterAttack();
    },
    damageTemplate(min, max) {
      return Math.max(
        Math.floor(Math.random() * max) + 1
        , min);
    },
    monsterAttack() {
      const damage = this.damageTemplate(5, 12);
      this.playerHealth -= damage;
  
      this.messageTemplate(false, "MONSTER HITS PLAYER FOR " + damage);
    },
    messageTemplate(isUser, message) {
      const id = this.damageTemplate(1, 99999);
      this.actions = [ { id, isUser, message }, ...this.actions ];
    }
  }
});
