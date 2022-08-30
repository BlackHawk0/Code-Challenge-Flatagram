// write your code here

// Adding images informaiton from the json file
fetch("http://localhost:3000/images")
.then(res => res.json())
.then(data => {
    // iterating over the response and updating the data
    data.forEach((element) => {
        let title = document.querySelector('.title')
        let likes = document.querySelector('.likes')
        let imageUrl = document.querySelector('.image')

        
        title.innerHTML = element.title
        imageUrl.src = element.image
        likes =element.likes

    })
}
)

// updating comments
let comments = document.querySelector('.comments')
fetch('http://localhost:3000/comments')
.then(res => res.json())
.then(data =>{
    comments.innerHTML = ''
    // mapping over every element of the array
    data.map(element => {
        let list =  document.createElement('li')
        list.textContent = element.content
        comments.append(list)
    })  
})


//adding likes
let likeB = document.querySelector('.like-button')
let likeCount =  document.querySelector('.likes')
counter = 0

likeB.addEventListener('click',()=>{
    // increase the number of likes by 1
    counter+=1
    return likeCount.textContent = `${counter} likes`
})

// Adding a comment
let commentB = document.querySelector('.comment-button')
commentB.addEventListener('click', event =>{{
    // prevent page from refreshing
    event.preventDefault()
    // getting the input
    let commentInput = document.querySelector('.comment-input').value
    // creat a list
    let li = document.createElement('li')
    //assigning the html element a value
    li.textContent = commentInput
    // appending the new html list to the dom
    comments.append(li)

 

}})

// delete a comment on click
// let element = document.querySelector('#comments-list').value
// element.addEventListener('click', event =>{
//     event.preventDefault()
//     return element.innerHTML = ""

// })