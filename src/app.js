import Vue from 'vue';

window.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      beers: [],
      selectedBeerIndex: '',
      selectedBeer: null,
      favouritedBeers: [],
      ingredients: []
    },
    mounted(){
      this.getBeers()
    },
    methods: {
      getBeers: function(){
        fetch("https://api.punkapi.com/v2/beers")
        .then(response => response.json())
        .then(beers => this.beers = beers)
      },
      beerSelect: function(){
        this.selectedBeer = this.beers[this.selectedBeerIndex]
      },
      addToFavourites: function(){
        this.favouritedBeers.push(this.selectedBeer)
      },
      removeBeer: function(index){
        this.favouritedBeers.splice(index, 1)
      }
    }
  })
})
