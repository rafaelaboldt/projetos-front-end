$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // pegando itens do html
    const sections = $('section'); // cria uma var para pegar todas as sections do html
    const navItems = $('.nav-item') // var para pegar a classe .nav-item

    // sombra nanavbar
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight(); // para saber a posição precisa fazer o tamanho da tela menos tamanho do header
        
        let activeSectionIndex = 0; // index da seção

        // ver se a página está no topo ou não
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        // loop pra pegar cada section
        sections.each(function(i) {
            const section = $(this); // pega a seção específica
            const sectionTop = section.offset().top - 96; // saber quando a seção chegou no topo
            const sectionBottom = sectionTop + section.outerHeight(); // saber quando chegou no final da seção

            // verificar se a posição da rolagem está dentro da seção específica
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i; // se estiver atualiza o index passando a posição da da seção atual
                return false; // para sair do loop
            }
        })

        // remover a classe active 
        navItems.removeClass('active');
        // adicionar a classe active dependendo do indice que está o item
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // usando a biblioteca ScrollReveal para fazer as animações
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_cef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});