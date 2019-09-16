// Import stylesheets
import './style.css';

// external libraries
import $ from "jquery";
import Mustache from 'mustache';

/* 

  old code from https://stackblitz.com/edit/01-modular-js-jquery-need
 
var people = [];
var template = $('#people-template').html();

$('#peopleModule').find('button').on('click', function(){
  people.push($('#peopleModule').find('input').val());
  $('#peopleModule').find('input').val('');
  var data = {
    people = people
  };
  $('#peopleModule').find('ol').html(Mustache.render(template, data));
});

$('#peopleModule').find('ol').delegate('i.del', 'click', function(e){
  var $remove = $(e.target).closest('li');
  var i = $('#peopleModule').find('ol').find('li').index($remove);

  $remove.remove();
  people.splice(i, 1);
});

*/

var people = {
  people: ['Person 1', 'Person 2'],
  init: function () {
    this.cacheDom();
    this.bindEvents();
    this.render();
  },
  cacheDom: function () {
    this.$el = $('#peopleModule');
    this.$button = this.$el.find('button');
    this.$input = this.$el.find('input');
    this.$ol = this.$el.find('ul');
    this.template = this.$el.find('#people-template').html();
  },
  bindEvents: function () {
    this.$button.on('click', this.addPerson.bind(this));
    this.$ol.delegate('i.del', 'click', this.deletePerson.bind(this));
  },
  render: function () {
    var data = {
      people: this.people,
    };
    this.$ol.html(Mustache.render(this.template, data));
  },
  addPerson: function () {
    this.people.push(this.$input.val());
    this.render();
    this.$input.val('');
  },
  deletePerson: function (event) {
    var $remove = $(event.target).closest('li');
    var i = this.$ol.find('li').index($remove);

    this.people.splice(i, 1);
    this.render();
  }
};

people.init();