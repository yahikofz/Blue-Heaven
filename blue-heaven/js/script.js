import ScrollAnimate from "./modules/scroll-animate.js"

import MobileMenu from "./modules/mobile-menu.js"

import FormMessage from "./modules/form-message.js"

const scrollAnimate = new ScrollAnimate('[data-animate="scroll"]') // Seletor das seções que vão animar

scrollAnimate.init()

const mobileMenu = new MobileMenu('[data-menu="hamburguer"]' , '[data-menu="lista"]') // Seletores do botão do menu hambúrguer e da lista (ul) dele, respectivamente

mobileMenu.init()

const formMessage = new FormMessage({
    form: ".formjs", // Seletor do formulário
    button: "#enviar", // Seletor do botão
    error: "<div id='form-error'><h2>Ops! ocorreu um erro.</h2><p>Tente de novo ou envie um e-mail para contato@blueheaven.com.br</p></div>", // Mensagem de erro
    success: "<div id='form-success'><h2>Mensagem enviada com sucesso.</h2><p>Agradecemos o seu contato. Retornaremos o mais breve possível.</p></div>", // Mensagem de sucesso
})

formMessage.init()