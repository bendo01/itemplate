+function ($) {
    "use strict";

    var CalendarApp = function() {
        this.$body = $("body");
        this.$modal = $('#event-modal');
        this.$event = ('#external-events div.external-event');
        this.$calendar = $('#calendar');
        this.$saveCategoryBtn = $('#save-category-button');
        this.$categoryForm = $('#add-category form');
        this.$extEvents = $('#external-events');
        this.$calendarObj = null;
    };


    /* on drop */
    CalendarApp.prototype.onDrop = function (eventObj, date) {
        var $this = this;
            // retrieve the dropped element's stored Event Object
            var originalEventObject = eventObj.data('eventObject');
            var $categoryClass = eventObj.attr('data-class');
            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);
            // assign it the date that was reported
            copiedEventObject.start = date;
            if ($categoryClass) {
              copiedEventObject.className = [$categoryClass];
            }
            // render the event on the calendar
            $this.$calendar.fullCalendar('renderEvent', copiedEventObject, true);
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                eventObj.remove();
            }
    },
    /* on click on event */
    CalendarApp.prototype.onEventClick =  function (calEvent, jsEvent, view) {
      var $this = this;
      var form = $("<form></form>");
      var formTemplate = [
        '<div class="content">',
          '<div class="columns">',
            '<div class="column">',
              '<label class="label">Change An Event Name</label>',
              '<div class="control has-addons">',
                '<input class="input is-expanded" type="text" placeholder="Input A Category" type=text value="'+ calEvent.title +'">',
                '<button class="button is-success" type="submit"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;Save</button>',
              '</div>',
            '</div>',
          '</div>',
        '</div>'
      ].join('');
      form.append(formTemplate);
      $('html').addClass('is-clipped');
      $this.$modal.addClass('is-active');

      $this.$modal.find('.delete-event')
      .show()
      .end()
      .find('.save-event')
      .hide()
      .end()
      .find('.modal-card-body')
      .empty()
      .prepend(form)
      .end()
      .find('.delete-event')
      .unbind('click')
      .click(function () {
          $this.$calendarObj.fullCalendar('removeEvents', function (ev) {
              return (ev._id == calEvent._id);
          });
          $('html').removeClass('is-clipped');
          $this.$modal.removeClass('is-active');
      });
      $this.$modal.find('form').on('submit', function () {
          calEvent.title = form.find("input[type=text]").val();
          $this.$calendarObj.fullCalendar('updateEvent', calEvent);
          $('html').removeClass('is-clipped');
          $this.$modal.removeClass('is-active');
          return false;
      });
    },
    /* on select */
    CalendarApp.prototype.onSelect = function (start, end, allDay) {
      var $this = this;
      var form = $("<form></form>");
      var formTemplate = [
        '<div class="content">',
          '<div class="columns">',
            '<div class="column">',
              '<label class="label">Event Name</label>',
              '<div class="control">',
                '<input class="input" type="text" placeholder="Insert Event Name" name="title">',
              '</div>',
            '</div>',
            '<div class="column">',
              '<label class="label">Category</label>',
              '<div class="control">',
                '<span class="select is-fullwidth">',
                  '<select name="category">',
                    '<option value="blue">Blue</option>',
                    '<option value="green">Green</option>',
                    '<option value="orange">Orange</option>',
                    '<option value="yellow">Yellow</option>',
                    '<option value="purple">Purple</option>',
                    '<option value="red">Red</option>',
                  '</select>',
                '</span>',
              '</div>',
            '</div>',
          '</div>',
        '</div>'
      ].join('');
      form.append(formTemplate);
      $('html').addClass('is-clipped');
      $this.$modal.addClass('is-active');
      $this.$modal.find('.delete-event')
      .hide()
      .end()
      .find('.save-event')
      .show()
      .end()
      .find('.modal-card-body')
      .empty()
      .prepend(form)
      .end()
      .find('.save-event')
      .unbind('click')
      .click(function () {
        form.submit();
      });
      $this.$modal.find('form').on('submit', function () {
          var title = form.find("input[name='title']").val();
          var beginning = form.find("input[name='beginning']").val();
          var ending = form.find("input[name='ending']").val();
          var categoryClass = form.find("select[name='category'] option:checked").val();
          if (title !== null && title.length !== 0) {
              $this.$calendarObj.fullCalendar('renderEvent', {
                  title: title,
                  start:start,
                  end: end,
                  allDay: false,
                  className: 'background-is-'+categoryClass
              }, true);
              $('html').removeClass('is-clipped');
              $this.$modal.removeClass('is-active');
          }
          else{
              alert('You have to give a title to your event');
          }
          return false;
      });
      $this.$calendarObj.fullCalendar('unselect');

    },
    CalendarApp.prototype.enableDrag = function() {
        //init events
        $(this.$event).each(function () {
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title

            };
            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);
            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });
        });
    },
    /* Initializing */
    CalendarApp.prototype.init = function() {
        this.enableDrag();
        /*  Initialize the calendar  */
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var form = '';
        var today = new Date($.now());

        var defaultEvents =  [{
                title: 'Hey!',
                start: new Date($.now() + 158000000),
                className: 'background-is-purple'
            }, {
                title: 'See John Deo',
                start: today,
                end: today,
                className: 'background-is-red'
            }, {
                title: 'Buy a Theme',
                start: new Date($.now() + 338000000),
                className: 'background-is-blue'
            }];

        var $this = this;
        $this.$calendarObj = $this.$calendar.fullCalendar({
            slotDuration: '00:15:00', /* If we want to split day time each 15minutes */
            minTime: '08:00:00',
            maxTime: '19:00:00',
            defaultView: 'month',
            handleWindowResize: true,
            height: $(window).height() - 200,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            events: defaultEvents,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            eventLimit: true, // allow "more" link when too many events
            selectable: true,
            drop: function(date) { $this.onDrop($(this), date); },
            select: function (start, end, allDay) { $this.onSelect(start, end, allDay); },
            eventClick: function(calEvent, jsEvent, view) { $this.onEventClick(calEvent, jsEvent, view); }

        });

        //on new event
        this.$saveCategoryBtn.on('click', function(){
            var categoryName = $('#input-category-name').val();
            var categoryColor = $('#input-category-color').val();
            if (categoryName !== null && categoryName.length !== 0) {
                $this.$extEvents.append('<div class="external-event notification is-' + categoryColor + '" data-class="background-is-' + categoryColor + '" style="position: relative;"><i class="fa fa-move"></i>' + categoryName + '</div>');
                $this.enableDrag();
            }
        });
    },

   //init CalendarApp
    $.CalendarApp = new CalendarApp;
    $.CalendarApp.Constructor = CalendarApp;

}(jQuery);
