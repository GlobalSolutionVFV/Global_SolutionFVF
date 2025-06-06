const hamb_menu = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu")

hamb_menu.addEventListener("click", () => {
nav.classList.toggle("ativo")})

// Função para os botões do banner

function mostrarSessao(sectionId) {
    document.getElementById('sessao-sabia').classList.add('hidden');
    document.getElementById('sessao-dica').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}

// Função para botões de dicas e alternar

function mostrarTab(tabId) {
    // Aplica "hidden" em todas os cards informativos
    document.getElementById('conteudo-quente').classList.add('hidden');
    document.getElementById('conteudo-chuvoso').classList.add('hidden');
    document.getElementById('conteudo-frio').classList.add('hidden');
    document.getElementById('conteudo-geral').classList.add('hidden');
    
    // Remove classe de Tab selecionado dos Tab / Reset de formatação
    document.getElementById('tab-quente').classList.remove('tab-ativo');
    document.getElementById('tab-chuvoso').classList.remove('tab-ativo');
    document.getElementById('tab-frio').classList.remove('tab-ativo');
    document.getElementById('tab-geral').classList.remove('tab-ativo');
    
    // Aplica classe de Tab Selecionado e remove o "hidden" do card selecionado
    document.getElementById('conteudo-' + tabId).classList.remove('hidden');
    document.getElementById('tab-' + tabId).classList.add('tab-ativo');
}

//Função do ChatBot

  window.watsonAssistantChatOptions = {
    integrationID: "7d42327a-0447-474a-8216-50a66f8fec5b", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "c2f9b927-119b-4d46-b61a-ecf3966bb6b8", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

// Propriedade de mascara de celular

document.getElementById('telephone').addEventListener('input', function (e) {
  let x = e.target.value.replace(/\D/g, '').slice(0, 11);
  x = x.replace(/^(\d{2})(\d)/g, '($1) $2');
  x = x.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
  e.target.value = x;
});


// Função para o formulario

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('ctt-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telephone").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !telefone || !assunto || !mensagem) {
      alert("Preencha todos os campos!");
      return;
    }

    const dados_json = {
        nome: nome,
        email: email,
        telefone: telefone,
        assunto: assunto,
        mensagem: mensagem
    }

    console.log('Dados enviados:', JSON.stringify(dados_json, null, 2));

    alert("Mensagem enviado com sucesso")
    form.reset();
  });

});

//Função para verificar se campo está vazio

const campos = ['name', 'email', 'telephone', 'assunto', 'mensagem'];

campos.forEach(id => {
  const campo = document.getElementById(id);
  campo.addEventListener('blur', () => {
    if (!campo.value.trim()) {
      campo.classList.add('erro');
    } else {
      campo.classList.remove('erro');
    }
  });

  campo.addEventListener('input', () => {
    if (campo.value.trim()) {
      campo.classList.remove('erro');
    }
  });
});