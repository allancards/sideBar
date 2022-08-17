var a =1
function menu(){
    
    var element = document.querySelector('.sideBar')
    var text = document.querySelector('.titles')
    var image = document.querySelector('#logo')
    var logout = document.querySelector('.logout')
    var user = document.querySelector('#user')
    var imageUser = document.querySelector('#per')


    element.classList.toggle('h')
    text.classList.add('new')
    


    //// contador de sideBar
    a = a +  1

    if(a%2 == 0){
        /// fechar
        text.classList.add('new')
        image.style.display = "none"
        image.style.transition = "2s"
        logout.style.transition = "2s"
        logout.style.width = "60px"
        user.style.display = "none"
        imageUser.style.display = "none"

    }
    console.log(a)
    if(a%2 == 1){
        // abrir
        text.classList.remove('new')
        image.style.display = 'flex'
        logout.style.width = "200px"
        user.style.display = 'inline'
        imageUser.style.display = 'inline'

    }

    
}
