
var sessao = document.getElementById('section')

var logo = document.getElementById('icone')

var nome_input = document.getElementById('login-st')

var senha_input =  document.getElementById('senha-st')

var butn = document.getElementById('btn-log')

var goobtn = document.getElementById('btn-google')

var link_log = document.getElementById('a-link')

var gzinho = document.getElementById('G-svg')

var link_cad = document.getElementById('a-link2')

function ChangeColors(){
    document.querySelector('input[type=text]').style.setProperty("--c", "black");
    document.body.style.backgroundImage = "url('Imagens/topia paper.jpeg')";
    document.body.style.transition = '2s'

    sessao.style.background = 'white'
    sessao.style.transition = '2s'
    sessao.style.boxShadow = '0.1em 0.2em 0.3em rgb(36, 34, 34)'

    logo.style.fill = 'black'
    logo.style.transition = '2s'

    nome_input.style.border = '1px solid black'
    nome_input.placeholder='Crie um nome de usuário'
    nome_input.style.transition = '2s'
    nome_input.style.color = 'black'
    nome_input.style.placeholderColor = 'black'

    senha_input.style.border = '1px solid black'
    senha_input.placeholder='Crie uma senha'
    senha_input.style.transition = '2s'
    senha_input.style.color = 'black'
    senha_input.style.placeholderColor = 'black'

    goobtn.style.background = 'white'
    goobtn.style.color = 'black'
    goobtn.style.boxShadow = '0.1em 0.2em 0.3em rgba(0, 0, 0, 0.315) '
    goobtn.style.transition = '2s'
    

    gzinho.style.fill = 'black'
    gzinho.style.transition = '2s'

    link_log.style.visibility = 'hidden'
    
    
    link_cad.style.visibility = 'visible'

    butn.textContent = 'Cadastrar'
    butn.style.boxShadow = '0.1em 0.2em 0.3em rgba(0, 0, 0, 0.315)'
    butn.style.background = 'black'
    butn.style.color = 'white'
    butn.style.transition = '2s'
}
