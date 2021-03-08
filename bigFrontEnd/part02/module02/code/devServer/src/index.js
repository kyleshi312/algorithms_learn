import jpg from './tt.png.jpg'

const Img = new Image()
Img.src = jpg
document.body.append(Img)

const ul = document.createElement('ul')
document.body.append(ul)

fetch('/api/users')
    .then(res => res.json())
    .then(data => {
        console.log('data', data)
        data.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item.login
            ul.append(li)
        })
    })