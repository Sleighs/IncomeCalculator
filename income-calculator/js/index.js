$(document).ready(function() {
  income.init();
});

var income = {
  wage: 15,
  hours: 30,
  
  init: function() {
    this.calcWeeklyI();
  },
  wageUp: function() {
    this.wage++;
    $("#wage").html(this.wage);
    this.init();
  },
  wageDown: function() {
    this.wage--;
    if (this.wage < 0) {
      this.wage = 0;
    }
    $("#wage").html(this.wage);
    this.init();
  },
  hoursUp: function() {
    this.hours++;
    $("#hours").html(this.hours);
    this.init();
  },
  hoursDown: function() {
    this.hours--;
    if (this.hours < 1) {
      this.hours = 0;
    }
    $("#hours").html(this.hours);
    this.init();
  },
  calcWeeklyI: function() {
    this.weekly = this.hours * this.wage;
    $("#stat1").html(this.weekly);
    $("#stat2").html(this.weekly * 2);
    $("#stat3").html(this.weekly * 4);
    $("#stat4").html(this.weekly * 52);
  }
};