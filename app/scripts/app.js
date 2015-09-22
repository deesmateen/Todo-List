$(document).ready(function() {

  var list = [];

  $('#newTaskForm').fadeToggle('slow');

  var Task = function(task) {
    this.task = task;
    this.id = 'new';
  };

  var addTask = function(task) {
    if(task) {
      task = new Task(task);
      list.push(task);

      $('#newItemInput').val('');
      $('#newList').append('<a href="#" class="" id="item"><br><li class="list-group-item">' + task.task + '</li></a>');
    }
    $('#newTaskForm, #newListItem').fadeToggle('slow', 'linear');
  };

  $('#saveNewItem').on('click', function(e) {
    e.preventDefault();
    var task = $('#newItemInput').val().trim();
    addTask(task);
  });

  $('#newListItem').on('click', function() {
    $('#newTaskForm, #newListItem').fadeToggle('slow', 'linear');
  });

  $('#cancel').on('click', function(e) {
    e.preventDefault();
    $('#newTaskForm, #newListItem').fadeToggle('slow', 'linear');
  });

  var advanceTask = function(task) {
    $(task).remove();
  };

  $(document).on('click', '#item', function(e) {
    e.preventDefault();
    var task =this;
    advanceTask(task);
    this.id = 'inProgress';
    $('#currentList').append(this.outerHTML);
  });

  $(document).on('click', '#inProgress', function(e) {
    e.preventDefault();
    var task = this;
    task.id = "archived";
    var changeIcon = task.outerHTML.replace();
    advanceTask(task);
    $('#archivedList').append(changeIcon);
  });

  $(document).on('click', '#archived', function(e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
  });
});

  // $(document).mouseleave(function(e) {
  //   e.preventDefault();
  //   var task = this;
  //   task.id = "newList";
  //   var changeIcon = task.outerHTML.replace();
  //   advanceTask(task);
  //   $('#newList').append(changeIcon);
  // });
