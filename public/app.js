$(document).ready(function(){
    $.getJSON("/api/todos")
        .then(addTodos)

    $('#todoInput').keypress(function(event){
        if(event.which==13){
            createTodo();
        }
    })
    $('.list').on('click','span',function(){
        var clickedId=$(this).parent().data('id');
        var deleteUrl='/api/todos/'+clickedId;
        $(this).parent().remove();
        $.ajax({
            method:'DELETE',
            url:deleteUrl
        })
            .then(function(data){
                console.log(data);
            })
    })
});


function addTodos(todos){
    todos.forEach(function(todo){

addTodo(todo);
    })
}
function createTodo(){
    var usrInput=$('#todoInput').val();
   $.post("/api/todos",{name:usrInput})
       .then(function(newTodo){
           $('#todoInput').val('')
    addTodo(newTodo);
       })
       .catch(function(err){
           console.log(err)
       })
}
function addTodo(todo){
    var newTodo=$("<li class='task'>"+todo.name+"<span>X</span></li>");
    newTodo.data('id',todo._id);
    if(todo.completed){
        newTodo.addClass("done")
    }

    $(".list").append(newTodo);
};