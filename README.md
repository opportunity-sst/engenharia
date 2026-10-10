# Opportunity Engenharia e Segurança do Trabalho — Site institucional

Site estático (HTML, CSS e JavaScript puros) para apresentar os serviços da Opportunity e gerar contatos pelo WhatsApp. Não usa framework, banco de dados, backend, bibliotecas externas, fontes de terceiros, Analytics ou pixels.

Abra o `index.html` no navegador para ver o site localmente. Não precisa de servidor.

## Estrutura

```
opportunity-engenharia-sst/
├── index.html
├── styles.css
├── script.js
├── politica-de-privacidade.html
├── sitemap.xml
├── robots.txt
├── README.md
├── .gitignore
└── assets/
    ├── logo.png
    ├── socios.jpg
    ├── treinamento.jpg      (a adicionar)
    ├── obra.jpg             (a adicionar)
    └── consultoria.jpg      (a adicionar)
```

## Imagens

| Arquivo | Uso | Situação |
|---|---|---|
| `logo.png` | Logo oficial da empresa (cabeçalho, hero, rodapé, favicon e compartilhamento) | Incluído, recortado do arquivo enviado |
| `socios.jpg` | Foto autorizada dos sócios (seção "A Opportunity") | Incluído, a partir da foto enviada (baixa resolução: 265 × 252 px) |
| `treinamento.jpg` | Imagem de treinamento (seção "Treinamentos NR") | **A adicionar** |
| `obra.jpg` | Imagem relacionada a obras (destaque "Fiscalização de Obras") | **A adicionar** |
| `consultoria.jpg` | Imagem relacionada à consultoria (seção "Programas e documentos") | **A adicionar** |

O flyer enviado (com a arte de divulgação) **não** foi usado como imagem do site, apenas como fonte de contatos.

### Como adicionar as fotos que faltam

1. Copie a foto para a pasta `assets/` com o nome exato da tabela (por exemplo, `assets/obra.jpg`).
2. No `index.html`, localize o bloco `<div class="photo-slot" ...>` correspondente. Logo acima dele há um comentário com a tag `<img>` pronta.
3. Apague o bloco `photo-slot` e cole a tag `<img>` do comentário.
4. Troque `DESCREVA A FOTO` por uma descrição real do que a imagem mostra (texto alternativo).
5. Ajuste `width` e `height` para as dimensões reais do arquivo.

Recomendações: JPG com até cerca de 200 KB, 1200 px no lado maior. Use somente fotos reais da empresa ou imagens com licença de uso, sem apresentar fotos de banco como se fossem da Opportunity.

## O que precisa ser confirmado antes de publicar

| Item | Situação atual no site |
|---|---|
| Endereço | Exibido na seção Contato com a etiqueta **"A confirmar antes da publicação"**. Confirme e remova a etiqueta, ou apague o item. Não está no Schema.org. |
| E-mail | `engenhariaopportunity@gmail.com` foi extraído do flyer enviado. Confirme se é o oficial. |
| Segundo contato | `(11) 96445-2226` (Maria Aparecida Pacheco), também do flyer. Confirme ou remova. |
| Horário de atendimento | Não exibido. |
| Google Maps | Não exibido. |
| Redes sociais | Não exibidas. |
| Cargos e formação dos sócios | Não exibidos. Só os nomes aparecem. |
| Autorização da foto dos sócios | Confirme que os dois autorizaram o uso da imagem. Confirme também que a foto mostra mesmo os sócios. |
| NR12 e NR18 | Os cards trazem apenas o tema da norma e a nota "conteúdo, público e carga horária a confirmar". |
| Treinamentos | Disponibilidade, carga horária, público, formato e validade dos certificados não são informados. |

O site não contém clientes, depoimentos, números de resultados, anos de experiência, registros profissionais (CREA) nem certificações.

## Onde editar

- **Número do WhatsApp:** pesquise por `5511997291959` em `index.html`, `script.js` e `politica-de-privacidade.html`.
- **Mensagem dos botões:** o link principal usa o texto "vim do Google". Os botões de cada serviço usam "vim do site da Opportunity". Edite o texto codificado após `text=`.
- **Formulário:** a montagem da mensagem está em `script.js`, na função `montarMensagem`. Os dados vão apenas para o WhatsApp, sem backend.
- **Cores:** variáveis no início de `styles.css` (`:root`).
- **Domínio:** troque `SEU-USUARIO` em `index.html` (canonical, Open Graph e Schema.org), `politica-de-privacidade.html`, `sitemap.xml` e `robots.txt`.

## SEO

HTML semântico com um único H1, title de 54 caracteres, meta description, Open Graph, canonical (com placeholder), Schema.org do tipo `ProfessionalService` sem endereço nem dados inventados, `sitemap.xml` e `robots.txt`.

## Acessibilidade, performance e privacidade

- Link "Ir para o conteúdo", foco visível, menu acessível por teclado (Esc fecha), labels em todos os campos, mensagens de erro associadas aos campos, alvos de toque de pelo menos 44 px e `prefers-reduced-motion` respeitado.
- Sem bibliotecas nem fontes externas, `loading="lazy"` nas imagens abaixo da primeira dobra e dimensões declaradas.
- Nenhum rastreador. Se algum for adicionado (Analytics, pixel, mapa incorporado), atualize a Política de Privacidade e considere um aviso de cookies.
- A Política de Privacidade é informativa. **Peça revisão jurídica antes de publicar.**

## Publicar no GitHub Pages

1. Crie uma conta em github.com, se ainda não tiver.
2. Clique em **New repository**. Nome sugerido: `opportunity-engenharia-sst`. Deixe como **Public**.
3. Na página do repositório, clique em **uploading an existing file** e arraste todo o conteúdo da pasta (incluindo `assets/`). Confirme em **Commit changes**.
   Pelo terminal: `git init`, `git add .`, `git commit -m "Site institucional"`, `git branch -M main`, `git remote add origin https://github.com/SEU-USUARIO/opportunity-engenharia-sst.git`, `git push -u origin main`.
4. Vá em **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e clique em **Save**.
5. Aguarde alguns minutos. O endereço será `https://SEU-USUARIO.github.io/opportunity-engenharia-sst/`.
6. Troque `SEU-USUARIO` nos arquivos listados em "Domínio" acima e envie a atualização.
7. Opcional: para usar domínio próprio, informe-o em **Settings → Pages → Custom domain**, configure o DNS e atualize canonical, sitemap e robots.

Depois de publicar, envie o `sitemap.xml` no Google Search Console.

## Checklist final

- [ ] Endereço confirmado (etiqueta removida) ou item apagado
- [ ] E-mail e segundo telefone confirmados ou removidos
- [ ] Horário de atendimento, Google Maps e redes sociais incluídos, se houver confirmação
- [ ] Fotos `treinamento.jpg`, `obra.jpg` e `consultoria.jpg` adicionadas, com texto alternativo real
- [ ] Autorização de uso da foto dos sócios obtida
- [ ] Descrições de NR12 e NR18 revisadas pela empresa
- [ ] Disponibilidade e condições dos treinamentos conferidas
- [ ] `SEU-USUARIO` substituído em todos os arquivos
- [ ] Política de Privacidade revisada por profissional jurídico
- [ ] Formulário testado em celular e computador (a mensagem chega no WhatsApp correto)
- [ ] Todos os botões de WhatsApp testados
- [ ] Menu, FAQ e navegação por teclado testados
- [ ] Site conferido em celular, tablet e computador
- [ ] Sitemap enviado ao Google Search Console
