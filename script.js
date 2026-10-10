/* ==========================================================
   Opportunity Engenharia e Segurança do Trabalho
   Menu responsivo, ano do rodapé e formulário -> WhatsApp.
   Sem bibliotecas, sem rastreadores, sem envio a servidores.
   ========================================================== */
(function () {
  "use strict";

  var WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5511997291959&text=";

  /* ---------- Ano no rodapé ---------- */
  var ano = document.getElementById("ano");
  if (ano) {
    ano.textContent = String(new Date().getFullYear());
  }

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu-principal");

  function setMenu(aberto) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", aberto ? "true" : "false");
    toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    menu.classList.toggle("is-open", aberto);
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (evento) {
      if (evento.target.closest("a")) {
        setMenu(false);
      }
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });

    // Ao voltar para a tela larga, garante o estado padrão do menu.
    var larga = window.matchMedia("(min-width: 1000px)");
    var aoMudar = function () {
      if (larga.matches) setMenu(false);
    };
    if (larga.addEventListener) {
      larga.addEventListener("change", aoMudar);
    } else if (larga.addListener) {
      larga.addListener(aoMudar);
    }
  }

  /* ---------- Formulário -> WhatsApp ---------- */
  var form = document.getElementById("form-contato");
  if (!form) return;

  var status = document.getElementById("form-status");

  var campos = {
    nome: { el: document.getElementById("nome"), erro: document.getElementById("erro-nome") },
    telefone: { el: document.getElementById("telefone"), erro: document.getElementById("erro-telefone") },
    servico: { el: document.getElementById("servico"), erro: document.getElementById("erro-servico") },
    consentimento: { el: document.getElementById("consentimento"), erro: document.getElementById("erro-consentimento") }
  };

  function soDigitos(texto) {
    return String(texto || "").replace(/\D+/g, "");
  }

  function valido(nome) {
    var el = campos[nome].el;
    switch (nome) {
      case "nome":
        return el.value.trim().length >= 2;
      case "telefone":
        // DDD + número: 10 ou 11 dígitos (aceita +55 na frente).
        var d = soDigitos(el.value);
        if (d.indexOf("55") === 0 && d.length > 11) d = d.slice(2);
        return d.length === 10 || d.length === 11;
      case "servico":
        return el.value !== "";
      case "consentimento":
        return el.checked;
      default:
        return true;
    }
  }

  function marcar(nome, ok) {
    var campo = campos[nome];
    campo.erro.classList.toggle("is-visible", !ok);
    if (campo.el.type === "checkbox") {
      campo.el.setAttribute("aria-invalid", ok ? "false" : "true");
    } else {
      campo.el.setAttribute("aria-invalid", ok ? "false" : "true");
    }
  }

  // Limpa o erro assim que o campo volta a ser válido.
  Object.keys(campos).forEach(function (nome) {
    var el = campos[nome].el;
    var evento = el.type === "checkbox" || el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(evento, function () {
      if (el.getAttribute("aria-invalid") === "true" && valido(nome)) {
        marcar(nome, true);
      }
    });
  });

  function valorOuTraco(texto) {
    var t = String(texto || "").trim();
    return t ? t : "Não informado";
  }

  function montarMensagem(dados) {
    return [
      "Olá, vim do site da Opportunity e gostaria de mais informações.",
      "",
      "Nome: " + dados.nome,
      "Empresa: " + dados.empresa,
      "WhatsApp: " + dados.telefone,
      "Serviço de interesse: " + dados.servico,
      "Mensagem: " + dados.mensagem
    ].join("\n");
  }

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (status) status.textContent = "";

    var primeiroInvalido = null;
    Object.keys(campos).forEach(function (nome) {
      var ok = valido(nome);
      marcar(nome, ok);
      if (!ok && !primeiroInvalido) primeiroInvalido = campos[nome].el;
    });

    if (primeiroInvalido) {
      primeiroInvalido.focus();
      if (status) status.textContent = "Revise os campos destacados para continuar.";
      return;
    }

    var dados = {
      nome: form.elements["nome"].value.trim(),
      empresa: valorOuTraco(form.elements["empresa"].value),
      telefone: form.elements["telefone"].value.trim(),
      servico: form.elements["servico"].value,
      mensagem: valorOuTraco(form.elements["mensagem"].value)
    };

    var url = WHATSAPP_URL + encodeURIComponent(montarMensagem(dados));
    var janela = window.open(url, "_blank", "noopener,noreferrer");

    if (janela) {
      if (status) status.textContent = "Abrimos o WhatsApp com a sua mensagem. Confira e envie por lá.";
    } else {
      // Navegador bloqueou a nova aba: abre na mesma aba.
      if (status) status.textContent = "Abrindo o WhatsApp…";
      window.location.href = url;
    }
  });
})();
