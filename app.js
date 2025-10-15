const form = document.getElementById('post-form')
const postContainer = document.getElementById('post-section')


    form.addEventListener('submit', function(e){
        e.preventDefault()

        const titelEl = document.getElementById('title')
        const authorEl = document.getElementById('author')
        const contentEl = document.getElementById('post-content')

        const title = titelEl.value.trim()
        const author = authorEl.value.trim()
        const content = contentEl.value.trim()
        
        if(!title || !content){ 
            return
        }

        const date = new Date()
        const dateString = date.toLocaleDateString('sv-SE')

        const post = document.createElement('article')
        post.classList.add('post')

        const h3 = document.createElement('h3')
        h3.textContent = title || 'Untitled'
        post.appendChild(h3)

        const pAuthor = document.createElement('p')
        pAuthor.innerHTML = `<strong>Författare:</strong> ${author || 'Anonymous'}`
        post.appendChild(pAuthor)

        const pDate = document.createElement('p')
        pDate.innerHTML = `<strong>Datum:</strong> ${dateString}`
        post.appendChild(pDate)

        const pContent = document.createElement('p')
        pContent.textContent = content
        post.appendChild(pContent)

        // Skapa kommentarfältet

        const commentSection = document.createElement('div')
        commentSection.classList.add('comment-section')

        const commentTitle = document.createElement('h4')
        commentTitle.textContent = 'Comments'
        commentSection.appendChild(commentTitle)

        const commentList = document.createElement('div')
        commentList.classList.add('comment-list')
        commentSection.appendChild(commentList)

        const commentForm = document.createElement('form')
        commentForm.classList.add('comment-form')

        const commentInput = document.createElement('input')
        commentInput.type = 'text'
        commentInput.placeholder = 'Add a comment'
        commentForm.appendChild(commentInput)

        const commentButton = document.createElement('button')
        commentButton.type = 'submit'
        commentButton.textContent = 'Add'
        commentForm.appendChild(commentButton)

        commentSection.appendChild(commentForm)
        post.appendChild(commentSection)

        commentForm.addEventListener('submit', function (e){
            e.preventDefault()
            const text = commentInput.value.trim()
            

            if(!text) return

            const commentItem = document.createElement('div')
            commentItem.classList.add('comment-item')

            const commentText = document.createElement('p')
            commentText.textContent = text
            commentItem.appendChild(commentText)

            // Skapa knapparna för kommentarer

            const btnContainer = document.createElement('div')
            btnContainer.classList.add('comment-btns')

            const likeBtn = document.createElement('button')
            likeBtn.textContent = '👍'
            const dislikeBtn = document.createElement('button')
            dislikeBtn.textContent = '👎'
            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = '🗑️'

            btnContainer.appendChild(likeBtn)
            btnContainer.appendChild(dislikeBtn)
            btnContainer.appendChild(deleteBtn)

            commentItem.appendChild(btnContainer)
            commentList.appendChild(commentItem)

            commentInput.value = ""

            // Skapa räknaren för likes/dislikes och delete
            
            let likes = 0
            let dislikes = 0

            likeBtn.addEventListener('click', () =>{
                likes++
                likeBtn.textContent = `👍 ${likes}`
            })

            dislikeBtn.addEventListener('click', () =>{
                dislikes++
                dislikeBtn.textContent = `👎 ${dislikes}`
            })

            deleteBtn.addEventListener('click', () =>{
                commentList.removeChild(commentItem)
            })
        })

        const hr = document.createElement('hr')
        post.appendChild(hr)

        postContainer.appendChild(post)
  
        
        form.reset()
        
    })


