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
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = true;
      this.actions = [];
    },
    attack() {
      const playerDamage = this.damageTemplate(3, 10);
      this.monsterHealth -= playerDamage;
      
      this.messageTemplate(true, "PLAYER HITS MONSTER FOR " + playerDamage);
  
      this.monsterAttack();
  
      this.checkWinner();
    },
    specialAttack() {
      const playerDamage = this.damageTemplate(10, 20);
      this.monsterHealth -= playerDamage;
  
      this.messageTemplate(true, "PLAYER HITS MONSTER HARD FOR " + playerDamage);
  
      this.monsterAttack();
      
      this.checkWinner();
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
    giveUp () {
      this.gameIsRunning = false;
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
    },
    checkWinner() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! Play again?')) {
          this.runGame();
        } else {
          this.gameIsRunning = false;
        }
      }
  
      if (this.playerHealth <= 0) {
        if (confirm('You lose! Play again?')) {
          this.runGame();
        } else {
          this.gameIsRunning = false;
        }
      }
    }
  }
});
