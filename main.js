
const allTasks = document.querySelector('#all');
const oneTask = document.querySelector('#oneTask');
const postBtn = document.querySelector('#postBtn');
const ajaxBtn = document.querySelector('#ajaxBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const allAlbums = document.querySelector('#allAlbums');
const onePhoto = document.querySelector('#onePhoto');
const oneComment = document.querySelector('#oneComments');
const user3Todos = document.querySelector('#user3Todos');
const postPost = document.querySelector('#postPost');
const putPost = document.querySelector('#putPost');
const deletePhoto = document.querySelector('#deletePhoto');
const mainDiv = document.querySelector('.main')


allTasks.addEventListener('click', () => {
  fetch('http://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      const todoList = todos.map(task => `<p> ${task.title} </p>`)
      return mainDiv.innerHTML = todoList
    })
})



allAlbums.addEventListener('click', () => {
  fetch('http://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(todos => {
      const todoList = todos.map(task => `<p> ${task.title} </p>`)
      return mainDiv.innerHTML = todoList
    })
})




//--------------------------------------------------------------


oneTask.addEventListener('click', () => {
  const userId = 1;
  const taskId = 1;
  fetch(`http://jsonplaceholder.typicode.com/users/${userId}/todos?id=${taskId}`)
    .then(response => response.json())
    .then(task => mainDiv.innerHTML = `<p> Task: ${task[0].title} </p>`);
})

onePhoto.addEventListener('click', () => {
  const photoId = 72 ;
  fetch(`http://jsonplaceholder.typicode.com/photos/${photoId}/photos?id=${photoId}`)
    .then(response => response.json())
    .then(photo => mainDiv.innerHTML = `<p> Photo: ${photo[0].title} </p>`);
})

oneComment.addEventListener('click', () => {
  const  postId = 10;
  /*fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(comment => mainDiv.innerHTML = `<p> Comment: ${comment[0].title} </p>`);
   return mainDiv.innerHTML = commentList
}) */
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
   .then(response => response.json())
   .then(comments => {
     const commentList = comments.map(comment => `<p> ${comment.body} </p>`)
     return mainDiv.innerHTML = commentList
   })
})

/*

user3ToDos.addEventListener('click', () => {
  const userId =3;
  fetch(`http://jsonplaceholder.typicode.com/todos?userId=${userId}`)
  .then(response => response.json())
  .then(todos => {
    const todoList = todos.map(todo => `<p> ${todo.title}</p>`)
    return mainDiv.innerHTML = todoList
  })
})

*/

/*

user3Todos.addEventListener(‘click’, () => {
 const userId = 3;
   fetch(`http://jsonplaceholder.typicode.com/todos?userId=${userId}`)
   .then(response => response.json())
   .then(todos => {
     const todoList = todos.map(todo => `<p> ${todo.title} </p>`)
     return mainDiv.innerHTML = todoList
   })
})

/*
allToDosBy3.addEventListener(‘click’, () => {
 const userId = 3;
   fetch(`http://jsonplaceholder.typicode.com/todos?userId=${userId}`)
   .then(response => response.json())
   .then(todos => {
     const todoList = todos.map(todo => `<p> ${todo.title} </p>`)
     return mainDiv.innerHTML = todoList
   })
})
8?
*/
/////////// Have to get back to this ////////////////


postBtn.addEventListener('click', () => {
  fetch(`http://jsonplaceholder.typicode.com/todos`, {
    method: 'post',
    data: {
       completed: false,
        title: "ABC",
        userId: 6
    }
  })
  .then(response => response.json())
  .then(res => mainDiv.innerHTML = `<p> Task Added! </p>`)
})

postPost.addEventListener('click', () => {
  fetch(`http://jsonplaceholder.typicode.com/posts`, {
    method: 'post',
    data: {
        body: false,
        title: "Pick up lightbulbs",
        userId: 1
    }
  })
  .then(response => response.json())
  .then(res => mainDiv.innerHTML = `<p> Post Updated! </p>`)
})








ajaxBtn.addEventListener('click', () => {
  fetch(`http://jsonplaceholder.typicode.com/todos/7`, {
    method: 'put',
    data: {
      completed: true,
      title: "Master Fetch",
      userId: 1
    }
  })
  .then(response => response.json())
  .then(task => mainDiv.innerHTML = `<p> Task Updated! </p>`)
})


putPost.addEventListener('click', () => {
  const postId = 9;
  fetch(`http://jsonplaceholder.typicode.com/post/${postId}`, {
    method: 'put',
    data: {
      title: "Master Fetch"
    }
  })
  .then(response => response.json())
  .then(task => mainDiv.innerHTML = `<p> Post Updated! </p>`)
})





///////////////////////////////////////////////

deleteBtn.addEventListener('click', () => {
  fetch(`http://jsonplaceholder.typicode.com/todos/7`, {
    method: 'delete',
    data: {
      completed: true,
      title: "Master Fetch",
      userId: 1
    }
  })
  .then(response => response.json())
  .then(task => {
    console.log(task)
    return mainDiv.innerHTML = `<p> Task Deleted </p>`
  })
})


deletePhoto.addEventListener('click', () => {
  fetch(`http://jsonplaceholder.typicode.com/photos/11`, {
    method: 'delete',
    data: {
      userId: 11
    }
  })
  .then(response => response.json())
  .then(task => {
    console.log(task)
    return mainDiv.innerHTML = `<p> Photo Deleted </p>`
  })
})
