/**
 * Created by ustcck on 2016/7/19.
 */
var MyTodoList = (function () {
    var defaults = {
            todoTask: 'todo-task',
            todoHeader: 'task-header',
            todoDate: 'task-date',
            todoDescription: 'task-description',
            taskId: 'task-',
            formId: 'todo-form',
            dataAttribute: 'data',
            deleteDiv: 'delete-div'
        },
        codes = {
            '1': '#pending',
            '2': '#inProgress',
            '3': '#completed'

        };
    var MyTodoList = function () {

    };
    MyTodoList.prototype.generateElement = function (params) {
        var parent = $(codes[params.code]),
            wrapper;
        if (!parent) {
            return;
        }
        wrapper = $('<div/>', {
            'class': defaults.todoTask,
            'id': defaults.taskId + params.id,
            'data': params.id
        });

        $('<div/>', {
            'class': defaults.todoHeader,
            'text': params.title
        }).appendTo(wrapper);

        $('<div/>', {
            'class': defaults.todoDate,
            'text': params.date
        }).appendTo(wrapper);

        $('<div/>', {
            'class': defaults.todoDescription,
            'text': params.description
        }).appendTo(wrapper);

        wrapper.appendTo(parent);
    };

    MyTodoList.prototype.removeElement = function (params) {
        $('#' + defaults.taskId + params.id).remove();
    };
    return MyTodoList;
})();