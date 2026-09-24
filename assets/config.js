/* =====================================================================
   Barbearia Seu-Barbex — configuração
   Único arquivo que precisa ser editado para o site sair do modo de
   demonstração e entrar no ar de verdade.
   ===================================================================== */

window.TV = {

  /* ---- Negócio ---------------------------------------------------- */
  nome:       'Seu-Barbex',
  slogan:     'Barba, Cabelo & Resenha',
  instagram:  'seubarbex',

  // WhatsApp da barbearia em formato internacional, só dígitos.
  // É o número da bio do Instagram, (71) 9110-4252. A CONFIRMAR se falta o 9.
  whatsapp:        '557191104252',
  whatsappVisivel: '(71) 9110-4252',

  endereco: {
    linha1: 'Rua Afonso Celso, 404',
    linha2: 'Barra, Salvador — BA',
    maps:   'https://www.google.com/maps/search/?api=1&query=Rua+Afonso+Celso+404+Barra+Salvador+BA',
    busca:  'Barbearia Seu-Barbex, Rua Afonso Celso, 404, Barra, Salvador - BA'
  },

  /* ---- Supabase ---------------------------------------------------
     Enquanto estes dois campos estiverem vazios, o site roda em MODO
     DEMONSTRAÇÃO: a agenda funciona de verdade na tela, mas os horários
     ficam guardados só no navegador de quem está olhando.

     Para ligar de verdade:
       1. supabase.com  ->  New project (região: South America / São Paulo)
       2. SQL Editor    ->  cole e rode db/schema.sql inteiro
       3. Settings > API -> copie "Project URL" e a chave "anon public"
       4. cole abaixo e suba pro GitHub

     A chave anon é pública por natureza — ela aparece no código do site.
     Quem protege os dados é o RLS + as funções do schema.sql, não ela.
  ------------------------------------------------------------------ */
  supabaseUrl: '',
  supabaseKey: '',

  /* ---- Regras da agenda (espelham o db/schema.sql) ----------------
     Mudou aqui? Mude no banco também — o banco é quem manda de verdade.
  ------------------------------------------------------------------ */
  regras: {
    passoMin:        30,   // grade de meia em meia hora, mesma grade da agenda atual
    antecedenciaMin: 30,   // não dá para marcar para daqui a 20 min
    janelaDias:      30,   // até 30 dias à frente
    cancelamentoH:   2     // cancela sozinho até 2h antes
  },

  /* ---- Expediente (0 = domingo) ------------------------------------
     Segunda a sábado, das 9h às 19h: é o que o Booksy mostra hoje
     (conferido em 23/09/2026).
  ------------------------------------------------------------------ */
  expediente: {
    0: { aberto: false },
    1: { aberto: true, abre: '09:00', fecha: '19:00' },
    2: { aberto: true, abre: '09:00', fecha: '19:00' },
    3: { aberto: true, abre: '09:00', fecha: '19:00' },
    4: { aberto: true, abre: '09:00', fecha: '19:00' },
    5: { aberto: true, abre: '09:00', fecha: '19:00' },
    6: { aberto: true, abre: '09:00', fecha: '19:00' }
  },

  /* ---- Dados usados no modo demonstração --------------------------
     No ar de verdade, barbeiros e serviços vêm do banco, não daqui.
     O Booksy lista um profissional só (Alax). Os outros barbeiros
     entram quando a casa passar os nomes.
  ------------------------------------------------------------------ */
  barbeirosDemo: [
    { id:'alax', slug:'alax', nome:'Alax', foto:'fotos/alax.jpg', instagram:'' }
  ],

  // Preços, durações e descrições copiados do Booksy do Seu-Barbex (23/09/2026).
  // preco_centavos 0 = "sob consulta" (no Booksy aparece "Varia").
  servicosDemo: [
    { id:'corte',               nome:'Corte de cabelo',                     descricao:'',                                                     preco_centavos:5500,  a_partir_de:false, duracao_min:30, categoria:'Cabelo' },
    { id:'pezinho',             nome:'Pezinho',                             descricao:'',                                                     preco_centavos:2500,  a_partir_de:false, duracao_min:20, categoria:'Cabelo' },
    { id:'tricolor',            nome:'Tricolor & pigmentação + hidratação', descricao:'Vários tons.',                                         preco_centavos:0,     a_partir_de:false, duracao_min:60, categoria:'Cabelo' },
    { id:'esporadico',          nome:'Esporádico',                          descricao:'',                                                     preco_centavos:6500,  a_partir_de:false, duracao_min:30, categoria:'Cabelo' },
    { id:'cabelo-barba',        nome:'Cabelo e barba básico',               descricao:'',                                                     preco_centavos:10500, a_partir_de:false, duracao_min:45, categoria:'Combos' },
    { id:'cabelo-barba-cafe',   nome:'Cabelo e barba + café ou água',       descricao:'Café expresso ou água mineral por nossa conta.',       preco_centavos:12000, a_partir_de:false, duracao_min:45, categoria:'Combos' },
    { id:'cabelo-barba-design', nome:'Cabelo + barba + design sombras',     descricao:'Café expresso ou água mineral por nossa conta.',       preco_centavos:12000, a_partir_de:false, duracao_min:45, categoria:'Combos' },
    { id:'barba',               nome:'Barba & bigode',                      descricao:'Avulso, individual.',                                  preco_centavos:5000,  a_partir_de:false, duracao_min:20, categoria:'Barba' },
    { id:'ozonio',              nome:'Ozônio terapia na barba',             descricao:'',                                                     preco_centavos:8000,  a_partir_de:false, duracao_min:30, categoria:'Barba' },
    { id:'depilacao',           nome:'Depilação orelha e nariz (cera)',     descricao:'',                                                     preco_centavos:4000,  a_partir_de:false, duracao_min:20, categoria:'Detalhes' },
    { id:'pacote-4-cortes',     nome:'Pacote 4 cortes',                     descricao:'Quatro cortes. Validade de 1 mês a partir da compra.', preco_centavos:20000, a_partir_de:false, duracao_min:30, categoria:'Pacotes do mês' },
    { id:'pacote-4-barbas',     nome:'Pacote 4 barbas',                     descricao:'Quatro barbas. Validade de 1 mês a partir da compra.', preco_centavos:15000, a_partir_de:false, duracao_min:30, categoria:'Pacotes do mês' },
    { id:'pacote-2c-4b',        nome:'Pacote 2 cortes + 4 barbas',          descricao:'Dois cortes e quatro barbas. Validade de 1 mês.',      preco_centavos:26000, a_partir_de:false, duracao_min:45, categoria:'Pacotes do mês' },
    { id:'pacote-4c-4b',        nome:'Pacote 4 cortes + 4 barbas',          descricao:'Quatro cortes e quatro barbas. Validade de 1 mês.',    preco_centavos:35000, a_partir_de:false, duracao_min:30, categoria:'Pacotes do mês' }
  ]
};

window.TV.modoDemo = !(window.TV.supabaseUrl && window.TV.supabaseKey);
