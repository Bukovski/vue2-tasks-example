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
      (this.playerHealth <= 90) ? this.playerHealth += 10 : this.playerHealth = 100;
      
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
    confimAndAction(message) {
      (confirm('You won! Play again?')) ? this.runGame() : this.gameIsRunning = false;
    },
    checkWinner() {
      if (this.monsterHealth <= 0) {
        this.messageTemplate(true, "PLAYER WON");
        this.messageTemplate(false, "MONSTER IS DEATH");
        
        this.confimAndAction('You won! Play again?');
      }
  
      if (this.playerHealth <= 0) {
        this.messageTemplate(true, "PLAYER IS DEATH");
        this.messageTemplate(false, "MONSTER WON");
  
        this.confimAndAction('You lose! Play again?');
      }
    }
  }
});
