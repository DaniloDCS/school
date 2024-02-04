const phrases = [{
  author: "Confúcio",
  phrase: "Num mundo culto temos uma conduta florida, e num mundo inculto temos discursos floridos."
}, {
  author: "Robert Frost",
  phrase: "A razão pela qual a preocupação mata mais pessoas do que o trabalho é que as pessoas preocupam-se mais do que trabalham."
}, {
  author: "Provérbio Árabe",
  phrase: "Não declares que as estrelas estão mortas só porque o céu está nublado."
}, {
  author: "Alexander Graham Bell",
  phrase: "Os raios de sol não queimam enquanto não estão focados."
}, {
  author: "Fallout",
  phrase: "A guerra nunca muda."
}, {
  author: "Johann Goethe",
  phrase: "O belo é uma manifestação de leis secretas da natureza, que, se não se revelassem a nós por meio do belo, permaneceriam eternamente ocultas."
}, {
  author: "Steve Jobs",
  phrase: "A inovação distingue um líder de um seguidor."
}, {
  author: "Drácula",
  phrase: "O que é um homem, senão uma miserável pilha de segredos?"
}, {
  author: "Anônimo",
  phrase: "Se o mundo fosse bom, o dono morava nele."
}, {
  author: "Johann Goethe",
  phrase: "A alma que vê a beleza às vezes pode caminhar sozinha."
}, {
  author: "Johann Goethe",
  phrase: "A juventude é a embriaguez sem vinho."
}, {
  author: "J. K. Rowling",
  phrase: "Se você quer ver a verdadeira natureza de um homem, observe como ele trata seus inferiores, não seus iguais."
}, {
  author: "Anônimo",
  phrase: "Comemorar aniversário é comemorar o fato de seus pais terem feito sexo."
}, {
  author: "Barack Obama",
  phrase: "A mudança não virá se esperarmos por outra pessoa ou por algum outro momento. Nós somos aqueles por quem estávamos esperando. Nós somos a mudança que procuramos."
}, {
  author: "Fyodor Dostoevsky",
  phrase: "O poder é dado apenas àqueles que ousam abaixar-se e apanhá-lo. Só uma coisa importa, uma coisa; ousar!"
}, {
  author: "Dinobot",
  phrase: "Conte minha história para quem perguntar. Diga a verdade - as más ações, junto com as boas e deixe-me ser julgado de acordo... O resto... é silêncio..."
}, {
  author: "Charles de Gaulle",
  phrase: "Para se tornar o mestre, o político se apresenta como servo."
}, {
  author: "Mulan",
  phrase: "A flor que floresce na adversidade é a mais rara e bela de todas."
}, {
  author: "Ratatouille",
  phrase: "Você não deve deixar ninguém definir seus limites por causa de onde você vem. Seu único limite é sua alma."
}, {
  author: "Hora de Aventura",
  phrase: "Ser péssimo em alguma coisa é o primeiro passo para se tornar bom em alguma coisa."
}, {
  author: "Peter Ustinov",
  phrase: "Comunicação é a arte de ser entendido."
}, {
  author: "Aristóteles",
  phrase: "A educação tem raízes amargas, mas os seus frutos são doces."
}, {
  author: "Tony Manero",
  phrase: "Existem formas de se matar sem cometer suicídio."
}, {
  author: "Augusto Cury",
  phrase: "A vida é uma grande universidade, mas pouco ensina a quem não sabe ser um aluno..."
}, {
  author: "Rubem Alves",
  phrase: "Educar é mostrar a vida a quem ainda não a viu."
}, {
  author: "Tio Iroh",
  phrase: "Nos momentos mais sombrios, a esperança é algo que você dá a si mesmo. Esse é o significado da força interior"
}, {
  author: "Guy Ritchie",
  phrase: "Não há problema em ter crenças, só não creia nelas."
}, {
  author: "John Scalzi",
  phrase: "Não sou louco, senhor. Tenho um senso bem calibrado de risco aceitável."
}, {
  author: "J. Robert Oppenheimer",
  phrase: "Nenhum homem deve escapar de nossas universidades sem saber o quão pouco ele sabe."
}, {
  author: "J. Robert Oppenheimer",
  phrase: "O otimista pensa que este é o melhor dos mundos possíveis. O pessimista teme que isso seja verdade."
}, {
  author: "Ricardo C.D Figueiredo",
  phrase: "A timidez é a cortina da alma."
}, {
  author: "Sócrates",
  phrase: "Transforme as pedras que você tropeça nas pedras de sua escada."
}, {
  author: "Platão",
  phrase: "O livro é um mestre que fala mas que não responde."
}, {
  author: "Buda",
  phrase: "Três coisas não podem ser escondidas por muito tempo: O sol, a lua e a verdade."
}, {
  author: "Carl Jung",
  phrase: "Quem olha para fora, sonha. Quem olha para dentro, desperta."
}, {
  author: "Son Goku",
  phrase: "Os limites só existem se você os deixar existir."
}, {
  author: "Filipe L.Affonso",
  phrase: "Existem duas escolhas básicas na vida, podemos aceitar as condições como elas estam ou podemos assumir a resposabilidade de muda-las."
}, {
  author: "Salústio",
  phrase: "Muita eloquência, sabedoria insuficiente."
}, {
  author: "Shane Parrish",
  phrase: "Perdermos anos porque não podemos perder horas."
}, {
  author: "Marco Aurélio",
  phrase: "Se não estiver certo, não faça, se não for verdade, não diga."
}, {
  author: "Nietzsche",
  phrase: "Quem tem um por que viver pode suportar quase todos os cosmos."
}, {
  author: "Sêneca",
  phrase: "O infortúnio é a oportunidade da vida."
}, {
  author: "Filipe L. Affonso",
  phrase: "Toda vida precisa de uma pincelada de loucura, uma vida sem loucura é uma vida incompleta."
}, {
  author: "Hecato",
  phrase: "Você pergunta: Que progresso eu fiz? Comecei a ser um amigo para mim."
}, {
  author: "Charlie Munger",
  phrase: "Assuma que a vida será difícil e pergunte se você pode lidar com isso. Se a resposta for sim, você venceu."
}, {
  author: "Naval Ravikant",
  phrase: "O diabo moderno é a dopamina barata."
}, {
  author: "Thomas Edison",
  phrase: "Eu não falhei. Apenas encontrei 1000 maneiras de não dar certo"
}, {
  author: "Publio Siro",
  phrase: "Divida o fogo e logo ele se apagará."
}, {
  author: "Epicteto",
  phrase: "A riqueza não consiste em ter muitos bens, mas em ter poucos desejos."
}, {
  author: "Marco Aurélio",
  phrase: "Para viver uma vida boa: temos o potencial para isso. Se pudermos aprender a sermos indiferentes ao que não faz diferença."
}, {
  author: "Aristóteles",
  phrase: "A natureza não faz nada inultilmente."
}, {
  author: "Maya Angelov",
  phrase: "Faça o melhor que puder até conhecer melhor. Então, quando você souber melhor"
}, {
  author: "Epicteto",
  phrase: "Nem um návio deve confiar em uma pequena âncora, nem a vida deve descansar em uma única esperança."
}, {
  author: "Marco Aurélio",
  phrase: "Pare de se desviar. Reduza suas esperanças e, se seu bem-estar lhe interessar, seja seu próprio salvador."
}, {
  author: "Cícero",
  phrase: "Se eu tivesse mais tempo, teria escrito uma carta mais curta."
}, {
  author: "Sun Tzu",
  phrase: "Se você não estiver em perigo, não lute."
}, {
  author: "Aristóteles",
  phrase: "A paciência é amarga, mas seus frutos são doces."
}, {
  author: "Sêneca",
  phrase: "Quem se entrega a medos vazios ganha a si mesmo medos reais."
}, {
  author: "Marco Aurélio",
  phrase: "É tolice tentar escapar dos erros de outras pessoas. Eles são inevitáveis. Apenas tente escapar dos seus."
}, {
  author: "Marco Aurélio",
  phrase: "Comtempla a essência. Não deixe que a qualidade peculiar das coisas, ou seu valor, ou qualquer outra aparência o iluda."
}, {
  author: "Heráclito",
  phrase: "É na mudança que encontramos um objetivo."
}, {
  author: "Henri Poincaré",
  phrase: "Duvidar de tudo ou acreditar em tudo são duas soluções igualmente convenientes; ambas dispensam a necessidade de reflexão."
}, {
  author: "Henry Royce",
  phrase: "O que for feito corretamente, mesmo que humilde, é nobre."
}, {
  author: "Stephen Covey",
  phrase: "Não sou um produto das minhas circunstâncias. Sou um produto das minhas escolhas."
}, {
  author: "Chuck Palahniuk",
  phrase: "Você sempre terá alguma desculpa para não viver sua vida."
}, {
  author: "Marco Aurélio",
  phrase: "Alguém me destratou? Que seja. Quanto a mim, me satisfaz falar e agir de modo que nenhum dos meus atos ou palavras mereçam desprezo."
}, {
  author: "Jim Rohn",
  phrase: "Se você realmente que fazer alguma coisa, encontrará um caminho. Caso contrário, você encontrará uma desculpa."
}, {
  author: "Epicteto",
  phrase: "Ele é um homem sábio que não se lamenta pelas coisas que não possui, mas se alegra com as que possui."
}, {
  author: "Sêneca",
  phrase: "Sua boa sorte consiste em não precisar de boa sorte."
}, {
  author: "Wendell Phillips",
  phrase: "O que é a derrota? Nada além de conhecimento; nada além dos primeiros passos para algo melhor."
}, {
  author: "Marco Aurélio",
  phrase: "Se é suportável, então aguente. Pare de reclamar."
}, {
  author: "Charlie Munger",
  phrase: "Reconhecer o que você não sabe é o surgimento da sabedoria."
}, {
  author: "Epicteto",
  phrase: "Não explique sua filosofia. Incorpore isso."
}, {
  author: "Chuck Palahniuk",
  phrase: "Seu passado é apenas uma história. E uma vez que você precebe isso, ele não tem poder sobre você."
}, {
  author: "Mark Twain",
  phrase: "Eu tive muitas preocupações na vida, a maioria dos quais nunca aconteceu."
}, {
  author: "Valarie Kaur",
  phrase: "Perdoar não é esquecer.O perdão é a libertação do ódio."
}, {
  author: "Epicteto",
  phrase: "O fogo ardente produz chamas e brilho de tudo o que é jogado nele."
}, {
  author: "John Graham",
  phrase: "A vida não é um surto, mas uma escalada longa e constante."
}, {
  author: "James Clear",
  phrase: "Seja impaciente com as suas ações. Seja paciente com os resultados."
}, {
  author: "Marco Aurélio",
  phrase: "Nunca deixe o futuro incomodá-lo. Você o encontrará, se for necessário, com as mesmas armas da razão que hoje o armam contra o presente."
}, {
  author: "Epicteto",
  phrase: "Quando alguém está devidamente fundamentado na vida, não precisa procurar fora de si para obter aprovação."
}, {
  author: "Sêneca",
  phrase: "Onde quer que haja um ser humano, há uma oportunidade para uma gentileza."
}, {
  author: "Jiddu Krishnamurti",
  phrase: "A capacidade de observar sem avaliar é a forma mais alta de inteligência."
}, {
  author: "Elbert Hubbard",
  phrase: "Esforço constante e erros frequentes são os trampolins para o gênio."
}, {
  author: "Marco Aurélio",
  phrase: "Ser como a rocha sobre a qual as ondas se chocam. Ela permanece imóvel e a fúria do mar ainda cai ao seu redor."
}, {
  author: "Aldous Huxley",
  phrase: "Os fatos não deixam de existir porque são ignorados."
}, {
  author: "John Barrymore",
  phrase: "A felicidade entra sorrateiramente por uma porta que você não sabia que deixou aberta."
}, {
  author: "Marco Aurélio",
  phrase: "Se alguém puder me refutar - mostrar que estou cometendo um erro ou vendo as coisas da perspectiva errada -, mudarei com prazer."
}, {
  author: "Carl Jung",
  phrase: "Conhecer sua própria escuridão é o melhor método para lidar com com a escuridão dos outros."
}, {
  author: "Sêneca",
  phrase: "O silêncio é uma lição aprendida com os muitos sofrimentos da vida."
}, {
  author: "Epicteto",
  phrase: "As circunstâncias não fazem o homem, ela apenas o revelam a si mesmo."
}, {
  author: "George W. Bush",
  phrase: "Eu acredito que os seres humanos e os peixes podem viver em paz."
}, {
  author: "Scott Belsky",
  phrase: "Não se trata de ideias. Trata-se de fazer as ideias acontecerem."
}, {
  author: "Fiodor Dostoiévski",
  phrase: "Decididamente não compreendo por que é mais glorioso bombardear de projéteis uma cidade do que assassinar alguém a machadadas."
}, {
  author: "Fiodor Dostoiévski",
  phrase: "O mais esperto de todos, na minha opinião, é o homem que se diz tolo pelo menos uma vez por mês."
}, {
  author: "John Wooden",
  phrase: "O fracasso não é fatal, mas o fracasso em mudar pode ser."
}, {
  author: "Elin Nordegren",
  phrase: "Educação é algo que ninguém pode tirar de você."
}, {
  author: "Khalil Gibran",
  phrase: "Confie nos sonhos, pois neles está escondida a porta da eternidade."
}, {
  author: "Alexander King",
  phrase: "A necessidade básica do coração humano durante uma grande crise é uma boa xícara de café quente."
}, {
  author: "George Orwell",
  phrase: "Às vezes, o primeiro dever dos homens inteligentes é reafirmar o óbvio."
}, {
  author: "Marshall McLuhan",
  phrase: "Eu não explico, eu exploro."
}, {
  author: "Anamika Mishra",
  phrase: "O inverno não é uma estação, é uma celebração."
}, {
  author: "Victor Hugo",
  phrase: "O riso é o sol que afasta o inverno do rosto humano."
}, {
  author: "Pietro Aretino",
  phrase: "Amemos o inverno, pois é a primavera do gênio."
}, {
  author: "Antoine de Saint-Exupéry",
  phrase: "Só se vê bem com o coração, o essencial é invisível aos olhos."
}, {
  author: "Abigail Van Buren",
  phrase: "Combata fogo com fogo e tudo que restará são cinzas."
}, {
  author: "Stubby Currence",
  phrase: "A única vez em que sucesso vem antes do trabalho é no dicionário."
}, {
  author: "Harvey Specter",
  phrase: "Se suas costas estiverem contra a parede, derrube a droga da parede."
}, {
  author: "Harvey Specter",
  phrase: "Nunca julgue um homem até estar no lugar dele."
}, {
  author: "Thomas Shelby",
  phrase: "Você pode mudar o que faz, mas não pode mudar o que quer."
}, {
  author: "Thomas Shelby",
  phrase: "Numa batalha, é tudo o que se tem... Um minuto de tudo, de uma só vez. Tudo o que veio antes não é nada."
}, {
  author: "Thomas Shelby",
  phrase: "Quando o destino deixa algo valioso em seu colo, você não joga simplesmente no lixo."
}, {
  author: "Thomas Shelby",
  phrase: "A única maneira de garantir a paz é fazendo com que a perspectiva de uma guerra pareça sem esperança."
}, {
  author: "Thomas Shelby",
  phrase: "As pessoas são leais àqueles que pagam seus salários."
}, {
  author: "Thomas Shelby",
  phrase: "O demônio mora dentro de todo homem."
}, {
  author: "Thomas Shelby",
  phrase: "A convicção traz emoção, a inimiga da oratória."
}, {
  author: "Harvey Specter",
  phrase: "Você ficaria surpreso com o que as pessoas em quem confia fariam quando alguém as coloca em uma posição onde elas pensam que não tem escolha."
}, {
  author: "Harvey Specter",
  phrase: "Trabalhe até você não precisar ser apresentado."
}, {
  author: "Harvey Specter",
  phrase: "Uma coisa é se tornar o rei da floresta, permanecer é outra coisa."
}, {
  author: "Harvey Specter",
  phrase: "Vencedores não criam desculpas"
}, {
  author: "G. Michael Hopf",
  phrase: "Homens fortes criam tempos bons, tempos bons criam homens fracos, homens fracos criam tempos difíceis, tempos difíceis criam homens fortes."
}, {
  author: "Douglas Adams",
  phrase: "Só ao tentar me colocar no seu nível intelectual, fico com dor de cabeça."
}, {
  author: "Douglas Adams",
  phrase: "O tempo é uma ilusão, a hora do almoço é duplamente ilusão."
}, {
  author: "Douglas Adams",
  phrase: "A realidade é frequentemente imprecisa."
}, {
  author: "Douglas Adams",
  phrase: "Há um momento em cada alvorecer quando a luz flutua; lá está a possibilidade de mágica. A criação prende sua respiração."
}, {
  author: "Douglas Adams",
  phrase: "Há algumas pessoas que você gosta de imediato, algumas que você acha que pode aprender a gostar na plenitude do tempo, e algumas que você simplesmente quer empurrar para longe com uma vara afiada."
}, {
  author: "Douglas Adams",
  phrase: "Raramente estou mais feliz do que quando passo um dia inteiro a programar o meu computador para fazer automaticamente uma tarefa que de outra forma demoraria uns bons dez segundos a fazer à mão."
}, {
  author: "Douglas Adams",
  phrase: "Um erro comum que as pessoas cometem quando tentam projetar coisas completamente à prova de imbecis é subestimar a ingenuidade dos imbecis completos."
}, {
  author: "Douglas Adams",
  phrase: "Eu me recuso a responder essa pergunta baseado na premissa de não saber a resposta."
}, {
  author: "Douglas Adams",
  phrase: "O sentido disso tudo é que não há sentido em tentar enlouquecer para impedir-se de ficar louco."
}, {
  author: "Douglas Adams",
  phrase: "No início, o Universo foi criado. Isso irritou profundamente muitas pessoas e, no geral, foi encarado como uma péssima idéia."
}, {
  author: "Douglas Adams",
  phrase: "Quando se culpa os outros, renuncia-se a capacidade de mudar."
}, {
  author: "Douglas Adams",
  phrase: "Prefiro sempre o temor do entendimento ao temor da ignorância."
}, {
  author: "Douglas Adams",
  phrase: "Se os seres humanos não moverem seus lábios, seus cérebros começarão a funcionar... a respeito do hábito peculiar humano de ficar, continuamente afirmando coisas absurdamente óbvias."
}, {
  author: "Douglas Adams",
  phrase: "O melhor é deixar o passado para trás e permitir que o presente avance para o futuro."
}, {
  author: "Douglas Adams",
  phrase: "Nada viaja mais rápido do que a velocidade da luz, com exceção, talvez, das más notícias, que obedecem leis próprias e especiais."
}, {
  author: "Douglas Adams",
  phrase: "Sentia que toda minha vida tinha sido uma espécie de sonho. Ás vezes, eu me perguntava de quem era esse sonho e se quem o construiu estava satisfeito."
}, {
  author: "Will Smith",
  phrase: "Compramos coisas que não precisamos, para fingir ter vidas que não temos, para impressionar pessoas com quem não nos importamos."
}, {
  author: "Oscar Wilde",
  phrase: "Os loucos às vezes se curam, os imbecis nunca."
}, {
  author: "Bob Marley",
  phrase: "Sou louco porque vivo em um mundo que não merece minha lucidez."
}, {
  author: "Eugéne Ionesco",
  phrase: "Pensar contra a corrente de seu tempo é heroico; dizê-lo é uma loucura."
}, {
  author: "William Blake",
  phrase: "Se o doido persistisse na sua loucura tornar-se-ia sensato."
}, {
  author: "Samuel Johnson",
  phrase: "O amor é a sabedoria dos loucos e a loucura dos sábios."
}, {
  author: "Aristóteles",
  phrase: "Nunca existiu uma grande inteligência sem uma veia de loucura."
}, {
  author: "André Gide",
  phrase: "As coisas mais belas são ditadas pela loucura e escritas pela razão."
}, {
  author: "François La Rochefoucauld",
  phrase: "Quem vive sem loucura não é tão sábio como pensa."
}, {
  author: "Zenão de Cítio, pensador grego",
  phrase: "Ditosa a cidade em que se admira menos a beleza dos edifícios do que a virtude de seus habitantes."
}, {
  author: "Zenão de Cítio, pensador grego",
  phrase: "O amanhã existe apenas no pensamento. O ontem existe apenas na memória. O presente é o acaso construído pela consciência."
}, {
  author: "Robin Williams",
  phrase: "Não importa o que te digam, palavras e ideias podem mudar o mundo."
}, {
  author: "Robin Williams",
  phrase: "Você só tem uma pequena centelha de loucura. Não a perca."
}, {
  author: "Robin Williams",
  phrase: "Nossa missão é melhorar a qualidade de vida, não apenas atrasar a morte."
}, {
  author: "Robin Williams",
  phrase: "Carpe per diem... e pegue o dinheiro."
}, {
  author: "Immanuel Kant",
  phrase: "Não se ensina filosofia; ensina-se a filosofar."
}, {
  author: "Immanuel Kant",
  phrase: "Você é livre no momento em que não busca fora de si mesmo alguém para resolver os seus problemas."
}, {
  author: "Immanuel Kant",
  phrase: "Belo, é tudo quanto agrada desinteressadamente."
}, {
  author: "Immanuel Kant",
  phrase: "A paciência é a fortaleza do débil e a impaciência a debilidade do forte"
}, {
  author: "Immanuel Kant",
  phrase: "Toda reforma interior e toda mudança para melhor dependem exclusivamente da aplicação do nosso próprio esforço."
}, {
  author: "Immanuel Kant",
  phrase: "O homem não é nada além daquilo que a educação faz dele."
}, {
  author: "Júlio Verne",
  phrase: "Deus ter-nos-ia posto água nas veias, em vez de sangue, se nos quisesse sempre imperturbáveis."
}, {
  author: "Júlio Verne",
  phrase: "O acaso gosta de brincar com os mais espertos, de preparar para eles armadilhas das quais toda a sua prudência não poderia livrá-los."
}, {
  author: "Júlio Verne",
  phrase: "Neste mundo as coisas que nos dão prazer andam a par das que nos afligem e desgostam."
}, {
  author: "Júlio Verne",
  phrase: "Tudo que um homem pode imaginar outros homens poderão realizar."
}, {
  author: "Immanuel Kant",
  phrase: "Ciência é conhecimento organizado. Sabedoria é vida organizada."
}, {
  author: "Immanuel Kant",
  phrase: "A moral, propriamente dita, não é a doutrina que nos ensina como sermos felizes, mas como devemos tornar-nos dignos da felicidade."
}, {
  author: "Immanuel Kant",
  phrase: "Não somos ricos pelo que temos, e sim pelo que não precisamos ter."
}, {
  author: "René Descartes",
  phrase: "Afasta-te de todas as impressões dos sentidos e da imaginação, e crê apenas na tua razão."
}, {
  author: "René Descartes",
  phrase: "Dizem que o macaco é tão inteligente que não fala para que não o façam trabalhar."
}, {
  author: "René Descartes",
  phrase: "Para examinar a verdade, é necessário, uma vez na vida, colocar todas as coisas em dúvida o máximo possível."
}, {
  author: "René Descartes",
  phrase: "Viver sem filosofar é o que se chama ter os olhos fechados sem nunca os haver tentado abrir."
}, {
  author: "René Descartes",
  phrase: "Não há nada no mundo que esteja melhor repartido do que a razão: todos estão convencidos de que a tem de sobra."
}, {
  author: "René Descartes",
  phrase: "Quase nunca me fio nos primeiros pensamentos que me vêm à mente."
}, {
  author: "René Descartes",
  phrase: "Não basta termos um bom espírito, o mais importante é aplicá-lo bem."
}, {
  author: "John Nash",
  phrase: "Talvez seja bom ter uma mente bonita, mas um dom ainda maior é descobrir um coração bonito."
}, {
  author: "John Nash",
  phrase: "É somente nas misteriosas equações do amor que qualquer lógica ou razão pode ser encontrada. Você é a razão de eu estar aqui hoje, você é a razão de eu existir, você é todas as minhas razões."
}, {
  author: "Neil deGrasse Tyson",
  phrase: "Não somos melhores do que o universo, somos parte dele."
}, {
  author: "Neil deGrasse Tyson",
  phrase: "Curioso que passamos mais tempo parabenizando as pessoas que tiveram sucesso do que incentivando as pessoas que não conseguiram."
}, {
  author: "Neil deGrasse Tyson",
  phrase: "Talvez o próximo Einstein esteja morrendo de fome na África."
}, {
  author: "Neil deGrasse Tyson",
  phrase: "Lembre-se: você pode estar errado."
}, {
  author: "Neil deGrasse Tyson",
  phrase: "Sou movido por duas filosofias principais, sei mais sobre o mundo hoje do que eu sabia ontem. E diminuir o sofrimento dos outros. Você ficaria surpreso quão longe que você recebe."
}, {
  author: "Dito Popular Brasileiro",
  phrase: "Se ferradura desse sorte burro não puxava carroça!"
}, {
  author: "Dito Popular Brasileiro",
  phrase: "Em briga de saci, qualquer chute é uma voadora."
}, {
  author: "Carl Sagan",
  phrase: "O limite entre o espaço e a Terra é puramente arbitrário. E eu provavelmente sempre estarei interessado nesse planeta - é o meu favorito."
}, {
  author: "Carl Sagan",
  phrase: "Somos como borboletas que voam por um dia e acham que é para sempre."
}, {
  author: "Carl Sagan",
  phrase: "A ciência é muito mais que um corpo de conhecimentos. É uma maneira de pensar."
}, {
  author: "Carl Sagan",
  phrase: "Temos um grande problema se não entendermos o planeta que queremos salvar."
}, {
  author: "Carl Sagan",
  phrase: "Se você quiser fazer uma torta de maçã do nada, você precisa, primeiro, inventar o universo."
}, {
  author: "Carl Sagan",
  phrase: "Em algum lugar, algo incrível está esperando para ser descoberto."
}, {
  author: "Marie Curie",
  phrase: "Quanto mais velho ficamos, mais sentimos que o presente precisa ser aproveitado, comparado a um estado de graça."
}, {
  author: "Marie Curie",
  phrase: "Devemos acreditar que somos talentosos para algumas coisas, e que essa coisa, a qualquer custo, deve ser alcançada."
}, {
  author: "Marie Curie",
  phrase: "Você não pode esperar construir um mundo melhor sem melhorar os indivíduos. Para esse fim, cada um de nós deve trabalhar para o seu próprio aperfeiçoamento e, ao mesmo tempo, compartilhar uma responsabilidade geral por toda a humanidade."
}, {
  author: "Marie Curie",
  phrase: "Devemos manter a nossa certeza de que depois dos dias ruins, os bons virão novamente."
}, {
  author: "Marie Curie",
  phrase: "Uma pessoa nunca repara o que foi feito, mas sim o que ainda precisa ser feito."
}, {
  author: "Richard Adams",
  phrase: "Uma coisa pode ser verdade e, ainda assim, ser desesperadamente louca."
}, {
  author: "Richard Adams",
  phrase: "Não há nada mais eficiente para reduzir você ao seu verdadeiro tamanho como chegar a um lugar estranho e maravilhoso, onde ninguém sequer percebe que você está ali, olhando em volta."
}, {
  author: "Richard Adams",
  phrase: "Seja esperto e cheio de truques, e seu povo nunca será destruído."
}, {
  author: "Nikola Tesla",
  phrase: "Nós almejamos por novas sensações, mas logo nos tornamos indiferentes a elas. As maravilhas de ontem são coisas comuns hoje em dia."
}, {
  author: "Nikola Tesla",
  phrase: "Deixem que o futuro diga a verdade e avalie cada um de acordo com o seu trabalho e realizações."
}, {
  author: "Nikola Tesla",
  phrase: "Não creio que haja uma emoção mais intensa para um inventor do que ver suas criações funcionando. Essas emoções fazem você esquecer de comer, de dormir, de tudo."
}, {
  author: "Stan Lee",
  phrase: "Eu não tenho inspiração. Eu só tenho ideias... Ideias e prazos."
}, {
  author: "Stan Lee",
  phrase: "Eu sou o homem mais sortudo do mundo porque tenho amigos, e ter os amigos certos é tudo: pessoas de quem você pode confiar, pessoas que lhe dizem a verdade quando você pergunta algo."
}, {
  author: "Stan Lee",
  phrase: "A sorte é uma porta giratória, você só precisa saber quando é a sua hora de atravessar."
}, {
  author: "Machado de Assis",
  phrase: "A mentira é muita vezes tão involuntária como a respiração."
}, {
  author: "Machado de Assis",
  phrase: "Botas...as botas apertadas são uma das maiores venturas da terra, porque, fazendo doer os pés, dão azo ao prazer de as descalçar."
}, {
  author: "Machado de Assis",
  phrase: "Suporta-se com paciência a cólica dos outros."
}, {
  author: "Benjamin Franklin",
  phrase: "Três pessoas são capazes de guardar um segredo, se duas delas estiverem mortas."
}, {
  author: "Benjamin Franklin",
  phrase: "Um irmão pode não ser um amigo, mas um amigo será sempre um irmão."
}, {
  author: "Milton Santos",
  phrase: "O geógrafo é, antes de tudo, um filósofo, e os filósofos são otimistas, porque diante deles está a infinidade."
}, {
  author: "Milton Santos",
  phrase: "A clarividência é uma virtude que se adquire pela intuição, mas sobretudo pelo estudo e tentar ver a partir do presente o que se projeta no futuro."
}, {
  author: "Milton Santos",
  phrase: "O tempo somente é porque algo acontece, e onde algo acontece o tempo está."
}, {
  author: "Milton Santos",
  phrase: "O mundo é formado não apenas pelo que já existe, mas pelo que pode efetivamente existir."
}, {
  author: "Milton Santos",
  phrase: "A intuição precisa ser comandada pelo saber. Ela, só, não chega."
}, {
  author: "Milton Santos",
  phrase: "A evolução do homem: na pré-história o homem das cavernas vivia em bandos para se defender dos predadores, hoje o homem vive em bandos para depredar."
}, {
  author: "Agatha Christie",
  phrase: "A melhor hora para planejar um libro é enquanto se lava a louça."
}, {
  author: "Agatha Christie",
  phrase: "A essência da vida é andar para a frente; sem possibilidade de fazer ou intentar marchar atrás. Na realidade a vida é uma rua de sentido único."
}, {
  author: "Agatha Christie",
  phrase: "Ganhar uma guerra é tão desastroso quanto perdê-la."
}, {
  author: "Nicolau Maquiavel",
  phrase: "Uma mudança sempre deixa o caminho aberto para outras."
}, {
  author: "Nicolau Maquiavel",
  phrase: "O tempo lança à frente todas as coisas, e pode transformar o bem em mal e o mal em bem."
}, {
  author: "Nicolau Maquiavel",
  phrase: "Vale mais fazer e arrepender-se, que não fazer e arrepender-se."
}, {
  author: "Nicolau Maquiavel",
  phrase: "O homem esquece mais facilmente a perda do pai do que a perda do patrimônio."
}, {
  author: "Nicolau Maquiavel",
  phrase: "A ambição do homem é tão grande que, para satisfazer uma vontade presente, não pensa no mal que daí a algum tempo pode resultar dela"
}, {
  author: "Nicolau Maquiavel",
  phrase: "Poucos vêem o que somos, mas todos vêem o que aparentamos."
}, {
  author: "Nicolau Maquiavel",
  phrase: "Os homens ofendem mais aos que amam do que aos que temem."
}, {
  author: "Nicolau Maquiavel",
  phrase: "A natureza dos homens soberbos e vis é mostrar-se insolentes na prosperidade e abjetos e humildes na adversidade."
}, {
  author: "Nicolau Maquiavel",
  phrase: "Uma república sem cidadãos de boa reputação não pode existir nem ser bem governada; por outro lado, a reputação dos cidadãos é motivo de tirania das repúblicas."
}, {
  author: "Nicolau Maquiavel",
  phrase: "O primeiro método para estimar a inteligência de um governante é olhar para os homens que tem à sua volta."
}, {
  author: "Confúcio",
  phrase: "Quando vires um homem bom, tenta imitá-lo; quando vires um homem mau, examina-te a ti mesmo."
}, {
  author: "Confúcio",
  phrase: "O silêncio é um amigo que nunca trai."
}, {
  author: "Confúcio",
  phrase: "Para quê preocuparmo-nos com a morte? A vida tem tantos problemas que temos de resolver primeiro."
}, {
  author: "Confúcio",
  phrase: "Aja antes de falar e, portanto, fale de acordo com os seus atos."
}, {
  author: "Confúcio",
  phrase: "A melhor maneira de ser feliz é contribuir para a felicidade dos outros."
}, {
  author: "Confúcio",
  phrase: "Não corrigir as próprias falhas é cometer a pior delas.."
}, {
  author: "Confúcio",
  phrase: "Exige muito de ti e espera pouco dos outros. Assim, evitarás muitos aborrecimentos."
}, {
  author: "Confúcio",
  phrase: "É mais fácil vencer um mau hábito hoje do que amanhã."
}, {
  author: "Confúcio",
  phrase: "Transportai um punhado de terra todos os dias e fareis uma montanha."
}, {
  author: "Confúcio",
  phrase: "Você não pode mudar o vento, mas pode ajustar as velas do barco para chegar onde quer."
}, {
  author: "Provérbio Chinês",
  phrase: "O cão não ladra por valentia e sim por medo."
}, {
  author: "Provérbio Chinês",
  phrase: "Procure acender uma vela em vez de amaldiçoar a escuridão."
}, {
  author: "Provérbio Chinês",
  phrase: "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos."
}, {
  author: "Provérbio Chinês",
  phrase: "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
}, {
  author: "Provérbio Chinês",
  phrase: "Se tiveres paciência num momento de raiva, evitará cem dias de pesar."
}, {
  author: "Provérbio Chinês",
  phrase: "Tecer uma rede é melhor do que rezar por um peixe à beira do rio."
}, {
  author: "Provérbio Chinês",
  phrase: "A preocupação nunca venceu o destino."
}, {
  author: "Provérbio Chinês",
  phrase: "O medíocre discute pessoas. O comum discute fatos. O sábio discute ideias."
}, {
  author: "Provérbio Chinês",
  phrase: "Se não queres que ninguém saiba, não o faças."
}, {
  author: "Provérbio Chinês",
  phrase: "A sorte se apresenta sob muitos disfarces."
}, {
  author: "Provérbio Chinês",
  phrase: "Se você não mudar a direção, terminará exatamente onde partiu."
}, {
  author: "Provérbio Chinês",
  phrase: "Visão sem ação é sonho. Ação sem visão é pesadelo."
}, {
  author: "Provérbio Chinês",
  phrase: "Fracassar não é cair, é recusar-se a levantar."
}, {
  author: "Provérbio Chinês",
  phrase: "Sem a experiência nunca teremos o conhecimento pleno."
}, {
  author: "Provérbio Chinês",
  phrase: "Até as torres mais altas começam do chão."
}, {
  author: "Provérbio Chinês",
  phrase: "Todas as flores do futuro estão contidas nas sementes de hoje."
}, {
  author: "Buda",
  phrase: "Todas as coisas complexas estão condenadas à decadência."
}, {
  author: "Buda",
  phrase: "Ao cuidar de si mesmo, você cuida dos outros. Ao cuidar dos outros, você cuida de si mesmo."
}, {
  author: "Buda",
  phrase: "Um amigo falso e maldoso é mais temível que um animal selvagem; o animal pode ferir seu corpo, mas um falso amigo irá ferir sua alma"
}, {
  author: "Buda",
  phrase: "Guardar raiva é como segurar um carvão em brasa com a intenção de atirá-lo em alguém; é você que se queima."
}, {
  author: "Renato Russo",
  phrase: "Quero ter alguém com quem conversar. Alguém que depois não use o que eu disse contra mim..."
}, {
  author: "Renato Russo",
  phrase: "Não preciso de modelos. Não preciso de heróis. Eu tenho meus amigos."
}, {
  author: "Renato Russo",
  phrase: "Tenho saudades de tudo que ainda não vi."
}, {
  author: "Renato Russo",
  phrase: "Se lembra quando a gente chegou um dia a acreditar que tudo era para sempre, sem saber que o para sempre, sempre acaba."
}, {
  author: "Renato Russo",
  phrase: "Disciplina é liberdade; Compaixão é fortaleza; Ter bondade é ter coragem."
}, {
  author: "Renato Russo",
  phrase: "Se você quiser alguém em quem confiar, confie em si mesmo. Quem acredita sempre alcança."
}, {
  author: "Albert Einstein",
  phrase: "Somos todos muito ignorantes. A diferença é que nem todos ignoramos as mesmas coisas."
}, {
  author: "Albert Einstein",
  phrase: "Os ideais que iluminam meu caminho e me deram coragem para enfrentar a vida com alegria são a gentileza, a beleza e a verdade."
}, {
  author: "Albert Einstein",
  phrase: "Educação é o que fica depois de esquecer o que aprendemos na escola."
}, {
  author: "Albert Einstein",
  phrase: "O problema do homem não está na bomba atômica, mas no seu coração."
}, {
  author: "Albert Einstein",
  phrase: "Os intelectuais resolvem seus problemas, os gênios os previnem."
}, {
  author: "Albert Einstein",
  phrase: "O mistério é a coisa mais bonita que podemos experimentar. É a fonte de toda arte e ciência verdadeira."
}, {
  author: "Albert Einstein",
  phrase: "Nunca considere o estudo como uma obrigação, mas como uma oportunidade de penetrar o belo e maravilhoso mundo do saber."
}, {
  author: "T. S. Eliot",
  phrase: "É assim que o mundo termina, não com um estrondo, mas com uma choradeira."
}, {
  author: "T. S. Eliot",
  phrase: "O sucesso é relativo: é aquilo que quisermos fazer da confusão que fizemos das coisas."
}, {
  author: "T. S. Eliot",
  phrase: "Apenas se constrói com solidez sobre o passado."
}, {
  author: "T. S. Eliot",
  phrase: "A única sabedoria que uma pessoa pode esperar adquirir é a sabedoria da humildade."
}, {
  author: "T. S. Eliot",
  phrase: "Só os que se arriscam a ir longe demais são capazes de descobrir o quão longe se pode ir."
}, {
  author: "T. S. Eliot",
  phrase: "Se você não tem força para impor seus próprios termos à vida, você deve aceitar os termos que ela lhe oferece."
}, {
  author: "T. S. Eliot",
  phrase: "Numa terra de fugitivos aquele que anda na direção contrária parece estar fugindo."
}, {
  author: "T. S. Eliot",
  phrase: "Onde está a sabedoria que nós perdemos no conhecimento? Onde está o conhecimento que nós perdemos na informação?"
}, {
  author: "Sun Tzu",
  phrase: "Há momentos em que a maior sabedoria é parecer não saber nada."
}, {
  author: "Sun Tzu",
  phrase: "Energia é o que tensiona o arco; decisão é o que solta a flecha."
}, {
  author: "Sun Tzu",
  phrase: "Numa batalha, não encurrale o inimigo. Deixe sempre uma saída. Senão, não restará outra alternativa a não ser lutar pela própria vida. Então, cada soldado inimigo valerá por dez dos seus."
}, {
  author: "Sun Tzu",
  phrase: "O verdadeiro objetivo da guerra é a paz."
}, {
  author: "Sun Tzu",
  phrase: "Derrotar o inimigo em cem batalhas não é a excelência suprema; a excelência suprema consiste em vencer o inimigo sem ser preciso lutar."
}, {
  author: "Sun Tzu",
  phrase: "Evite a força, ataque a fraqueza."
}, {
  author: "Sun Tzu",
  phrase: "Comandar muitos é o mesmo que comandar poucos. Tudo é uma questão de organização."
}, {
  author: "Sun Tzu",
  phrase: "Não há mais do que cinco notas músicas, mesmo assim, a combinação dessas cinco faz surgir mais melodias do que jamais poderá ser ouvido."
}, {
  author: "Sun Tzu",
  phrase: "As oportunidades multiplicam-se à medida que são agarradas."
}, {
  author: "Sun Tzu",
  phrase: "Triunfam aqueles que sabem quando lutar e quando esperar."
}, {
  author: "Sun Tzu",
  phrase: "Um soberano jamais deve colocar em ação um exército motivado pela raiva; um líder jamais deve iniciar uma guerra motivado pela ira."
}, {
  author: "Sun Tzu",
  phrase: "Concentre-se nos pontos fortes, reconheça as fraquezas, agarre as oportunidades e proteja-se contra as ameaças."
}, {
  author: "William Shakespeare",
  phrase: "É melhor ser rei de teu silêncio do que escravo de tuas palavras."
}, {
  author: "William Shakespeare",
  phrase: "Se você ama alguma coisa ou alguém, deixe que parta. Se voltar é porque é seu, se não, é porque jamais seria."
}, {
  author: "William Shakespeare",
  phrase: "A raiva é um veneno que bebemos esperando que os outros morram."
}, {
  author: "William Shakespeare",
  phrase: "Só porque alguém não o ama do jeito que você quer que ame, não significa que esse alguém não o ama."
}, {
  author: "William Shakespeare",
  phrase: "As palavras estão cheias de falsidade ou de arte; o olhar é a linguagem do coração."
}, {
  author: "William Shakespeare",
  phrase: "Sem saber amar, não adianta amar profundamente."
}, {
  author: "William Shakespeare",
  phrase: "Todo mundo é capaz de dominar uma dor, exceto quem a sente."
}, {
  author: "William Shakespeare",
  phrase: "Eu aprendi que todos querem viver no topo da montanha, mas toda felicidade e crescimento ocorre quando você esta escalando-a."
}, {
  author: "William Shakespeare",
  phrase: "Os homens deviam ser o que parecem ou, pelo menos, não parecerem o que não são."
}, {
  author: "William Shakespeare",
  phrase: "Sabemos o que somos, mas não sabemos o que poderemos ser."
}, {
  author: "William Shakespeare",
  phrase: "Todos os caminhos estão errados quando você não sabe aonde quer chegar."
}, {
  author: "William Shakespeare",
  phrase: "Eu aprendi que são os pequenos acontecimentos diários que tornam a vida espetacular."
}, {
  author: "William Shakespeare",
  phrase: "Aprendi que as oportunidades nunca são perdidas; alguém vai aproveitar as que você perdeu."
}, {
  author: "William Shakespeare",
  phrase: "Chorar sobre as desgraças passadas é a maneira mais segura de atrair outras."
}, {
  author: "William Shakespeare",
  phrase: "Nós somos feitos da matéria de que são feitos os sonhos."
}, {
  author: "William Shakespeare",
  phrase: "Ame a todos, confie em poucos. Não seja injusto com ninguém."
}, {
  author: "Kurt Vonnegut",
  phrase: "Cuidado com o que você finge ser, pois você é o que finge ser."
}, {
  author: "Kurt Vonnegut",
  phrase: "Aqueles que acreditam em telecinese, levantem minha mão!"
}, {
  author: "Kurt Vonnegut",
  phrase: "Se eu alguma vez morrer, queira Deus que não, que este seja meu epitáfio: A ÚNICA PROVA DA EXISTÊNCIA DE DEUS QUE ELE PRECISAVA ERA MÚSICA!"
}, {
  author: "Kurt Vonnegut",
  phrase: "O verdadeiro terror é acordar uma manhã e descobrir que sua turma da escola está comandando o país."
}, {
  author: "Marco Aurélio",
  phrase: "O que fazemos agora ecoa na eternidade."
}, {
  author: "Marco Aurélio",
  phrase: "Você tem poder sobre sua mente - não sobre eventos externos. Perceba isso e você encontrará sua força."
}, {
  author: "Marco Aurélio",
  phrase: "Pense na beleza da vida. Observe as estrelas e veja-se correndo com elas."
}, {
  author: "Marco Aurélio",
  phrase: "Tudo o que ouvimos é uma opinião, não um fato. Tudo o que vemos é uma perspectiva, não a verdade."
}, {
  author: "Marco Aurélio",
  phrase: "A alma é tingida com a cor de seus pensamentos."
}, {
  author: "Marco Aurélio",
  phrase: "Não é a morte que um homem deve temer, mas ele deve temer nunca começar a viver."
}, {
  author: "Marco Aurélio",
  phrase: "Não perca tempo discutindo sobre o que um bom homem deve ser. Seja."
}, {
  author: "Marco Aurélio",
  phrase: "A maior vingança contra um inimigo é ser diferente dele."
}, {
  author: "Marco Aurélio",
  phrase: "Muitas vezes me perguntei como é que todo homem se ama mais do que todos os outros homens, mas dá menos valor à sua própria opinião do que à dos outros."
}, {
  author: "Marco Aurélio",
  phrase: "O objetivo da vida não é estar do lado da maioria, mas escapar de se encontrar nas fileiras dos loucos."
}, {
  author: "Marco Aurélio",
  phrase: "A primeira regra é manter o espírito imperturbável. A segunda é olhar as coisas de frente e saber o que são."
}, {
  author: "Marco Aurélio",
  phrase: "Faça cada ato de sua vida como se fosse o último ato de sua vida."
}, {
  author: "Marco Aurélio",
  phrase: "Confine a si mesmo no presente."
}, {
  author: "Marco Aurélio",
  phrase: "Nenhum homem é feliz se não se considera assim."
}, {
  author: "Marco Aurélio",
  phrase: "Não aja como se você tivesse dez mil anos para jogar fora. A morte está ao seu lado. Seja bom para alguma coisa enquanto você vive e está em seu poder."
}, {
  author: "Marco Aurélio",
  phrase: "A felicidade daqueles que querem ser populares depende dos outros; a felicidade daqueles que buscam o prazer flutua com humores fora de seu controle; mas a felicidade dos sábios surge de seus próprios atos livres."
}, {
  author: "Friedrich Nietzsche",
  phrase: "O inimigo mais perigoso que você poderá encontrar será sempre você mesmo."
}, {
  author: "Friedrich Nietzsche",
  phrase: "Não é a intensidade dos sentimentos elevados que faz os homens superiores, mas a sua duração."
}, {
  author: "Friedrich Nietzsche",
  phrase: "Tudo evolui; não há realidades eternas: tal como não há verdades absolutas."
}, {
  author: "Friedrich Nietzsche",
  phrase: "O macaco é um animal demasiado simpático para que o homem descenda dele."
}, {
  author: "Friedrich Nietzsche",
  phrase: "Os métodos são as verdadeiras riquezas."
}, {
  author: "Friedrich Nietzsche",
  phrase: "É difícil viver com as pessoas porque calar é muito difícil."
}, {
  author: "São Tomás de Aquino",
  phrase: "Quem diz verdades perde amizades."
}, {
  author: "São Tomás de Aquino",
  phrase: "A ninguém te mostres muito íntimo, pois familiaridade excessiva gera desprezo."
}, {
  author: "São Tomás de Aquino",
  phrase: "Se a meta principal de um capitão fosse preservar seu barco, ele o conservaria no porto para sempre."
}, {
  author: "São Tomás de Aquino",
  phrase: "Não se opor ao erro é aprová-lo, não defender a verdade é negá-la."
}, {
  author: "Bob Esponja",
  phrase: "Você vem dizer que eu sou um garoto e eu falo de novo: OBRIGADO! Obrigado por dizer!"
}, {
  author: "Clarice Lispector",
  phrase: "Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro."
}, {
  author: "Clarice Lispector",
  phrase: "Que ninguém se engane, só se consegue a simplicidade através de muito trabalho."
}, {
  author: "Clarice Lispector",
  phrase: "Liberdade é pouco. O que desejo ainda não tem nome."
}, {
  author: "Clarice Lispector",
  phrase: "Toda mulher leva um sorriso no rosto e mil segredos no coração."
}, {
  author: "Clarice Lispector",
  phrase: "E se me achar esquisita, respeite também. Até eu fui obrigada a me respeitar."
}, {
  author: "Clarice Lispector",
  phrase: "Passei a vida tentando corrigir os erros que cometi na minha ânsia de acertar."
}, {
  author: "Clarice Lispector",
  phrase: "A única verdade é que vivo. Sinceramente, eu vivo. Quem sou? Bem, isso já é demais."
}, {
  author: "Clarice Lispector",
  phrase: "Qualquer um pode amar uma rosa, mas é preciso um grande coração para incluir os espinhos."
}, {
  author: "Clarice Lispector",
  phrase: "Não entendo, apenas sinto. Tenho medo de um dia entender e deixar de sentir"
}, {
  author: "Sêneca",
  phrase: "Às vezes, até mesmo viver é um ato de coragem."
}, {
  author: "Sêneca",
  phrase: "Enquanto você viver, continue aprendendo a viver."
}, {
  author: "Sêneca",
  phrase: "Toda crueldade surge da fraqueza."
}, {
  author: "Sêneca",
  phrase: "Comece imediatamente a viver e conte cada dia separado como uma vida separada."
}, {
  author: "Sêneca",
  phrase: "Nada é mais honrado do que um coração agradecido."
}, {
  author: "Sêneca",
  phrase: "É melhor vencer nossa dor do que enganá-la."
}, {
  author: "Sêneca",
  phrase: "Não nasci para um canto; o mundo inteiro é minha terra natal."
}, {
  author: "Sêneca",
  phrase: "Não há nada no mundo tão admirado como um homem que sabe suportar a infelicidade com coragem."
}, {
  author: "Sêneca",
  phrase: "Estamos sempre reclamando que nossos dias são poucos e agindo como se não houvesse fim."
}, {
  author: "Andrew Carnegie",
  phrase: "Nenhum homem será um grande líder se quiser fazer tudo sozinho ou se quiser levar todo o crédito por fazer isso."
}, {
  author: "Peter Schutz",
  phrase: "Contrate caráter, treine habilidades."
}, {
  author: "Mario Andretti",
  phrase: "Se tudo parece sob controle, você não está indo rápido o suficiente."
}, {
  author: "Otto von Bismarck",
  phrase: "Agradeço pela crítica mais severa apenas se ela permanecer imparcial."
}, {
  author: "Otto von Bismarck",
  phrase: "As pessoas nunca mentem tanto quanto depois de uma caçada, durante uma guerra ou antes de uma eleição."
}, {
  author: "Otto von Bismarck",
  phrase: "Com leis ruins e funcionários bons ainda é possível governar. Mas com funcionários ruins as melhores leis não servem para nada."
}, {
  author: "Otto von Bismarck",
  phrase: "A política é a doutrina do possível."
}, {
  author: "Provérbio romano",
  phrase: "Palavras voam, o que é escrito permanece."
}, {
  author: "Provérbio italiano",
  phrase: "Ofende os bons, quem poupa os maus."
}, {
  author: "Provérbio italiano",
  phrase: "Em Roma, faça como os romanos."
}, {
  author: "Mahatma Gandhi",
  phrase: "A força não provém da capacidade física. Provém de uma vontade indomável."
}, {
  author: "Mahatma Gandhi",
  phrase: "A vida merece algo além do aumento da sua velocidade."
}, {
  author: "Mahatma Gandhi",
  phrase: "O amor é a força mais sutil do mundo."
}, {
  author: "Mahatma Gandhi",
  phrase: "O medo tem alguma utilidade, mas a covardia não."
}, {
  author: "Mahatma Gandhi",
  phrase: "Os fracos nunca podem perdoar."
}, {
  author: "Mahatma Gandhi",
  phrase: "Nunca país algum se elevou sem se ter purificado no fogo do sofrimento."
}, {
  author: "Mahatma Gandhi",
  phrase: "Só engrandecemos o nosso direito à vida cumprindo o nosso dever de cidadãos do mundo."
}, {
  author: "Mahatma Gandhi",
  phrase: "A pureza de espírito e a ociosidade são incompatíveis."
}, {
  author: "Mahatma Gandhi",
  phrase: "A lei de ouro do comportamento é a tolerância mútua, já que nunca pensaremos todos da mesma maneira, já que nunca veremos senão uma parte da verdade e sob ângulos diversos."
}, {
  author: "Mahatma Gandhi",
  phrase: "Algemas de ouro são muito piores que algemas de ferro."
}, {
  author: "Mahatma Gandhi",
  phrase: "O amor é a força mais abstrata, e também a mais potente que há no mundo."
}, {
  author: "Mahatma Gandhi",
  phrase: "Há riqueza bastante no mundo para as necessidades do homem, mas não para a sua ambição."
}, {
  author: "Mahatma Gandhi",
  phrase: "Eu sou contra a violência porque parece fazer bem, mas o bem só é temporário; o mal que faz é que é permanente."
}, {
  author: "Mahatma Gandhi",
  phrase: "Temos de nos tornar na mudança que queremos ver."
}, {
  author: "Mahatma Gandhi",
  phrase: "Quem sabe concentrar-se numa coisa e insistir nela como único objetivo, obtém a capacidade de fazer qualquer coisa."
}, {
  author: "Stephen King",
  phrase: "Ocupe-se vivendo ou ocupe-se morrendo."
}, {
  author: "Will Smith",
  phrase: "Dinheiro e sucesso não mudam as pessoas; eles apenas amplificam o que já estava lá."
}, {
  author: "Sêneca",
  phrase: "O principal não é quanto tempo, mas quão bem você viveu."
}, {
  author: "Ernest Hemingway",
  phrase: "Para escrever sobre a vida, primeiro, você deve vivê-la."
}, {
  author: "Oprah Winfrey",
  phrase: "Torne suas feridas em sabedoria."
}, {
  author: "Soren Kierkegaard",
  phrase: "A vida não é um problema a ser resolvido, mas uma realidade a ser vivida."
}, {
  author: "Ashton Kutcher",
  phrase: "Não se contente com o que a vida lhe dá; tornar a vida melhor e construa algo!"
}, {
  author: "Forrest Gump",
  phrase: "Minha mãe sempre dizia que a vida é como uma caixa de bombons. Você nunca sabe o que vai receber."
}, {
  author: "Lao-Tze",
  phrase: "Cuidado com seus pensamentos; eles se tornam palavras. Cuidado com suas palavras; elas se tornam ações. Cuidado com suas ações; elas se tornam hábitos. Cuidado com seus hábitos; eles se tornam seu caráter. Cuidado com seu caráter; ele se torna seu destino."
}, {
  author: "Helen Keller",
  phrase: "Quando fazemos o melhor que podemos, nunca sabemos que milagre é feito em nossa vida ou na vida de outra pessoa."
}, {
  author: "Robert Frost (adaptado)",
  phrase: "Em duas palavras, posso resumir tudo o que aprendi sobre a vida: Ela continua."
}, {
  author: "Charles Swindoll",
  phrase: "A vida é dez por cento o que acontece com você e noventa por cento como você reage a isso."
}, {
  author: "Stephen Hawking",
  phrase: "A vida seria trágica se não fosse engraçada."
}, {
  author: "Mark Twain",
  phrase: "Bons amigos, bons livros e dormir bem: esta é a vida ideal."
}, {
  author: "Babe Ruth",
  phrase: "Cada rebatida me aproxima do próximo home run."
}, {
  author: "Mark Twain",
  phrase: "Os dois dias mais importantes da sua vida são o dia em que você nasce e o dia em que descobre o porquê."
}, {
  author: "Neil Armstrong",
  phrase: "Acredito que todo ser humano tem um número finito de batimentos cardíacos. Não pretendo desperdiçar nenhum dos meus."
}, {
  author: "T.S. Eliot",
  phrase: "Todo momento é um novo começo."
}, {
  author: "Malcolm Forbes",
  phrase: "Quando você para de sonhar, você para de viver."
}, {
  author: "Doutor Seuss",
  phrase: "Não chore porque acabou, sorria porque aconteceu."
}, {
  author: "Abraham Lincoln",
  phrase: "A melhor maneira de prever seu futuro é cria-lo."
}, {
  author: "Michael Jordan",
  phrase: "Você deve esperar grandes coisas de si mesmo antes de poder realizá-las."
}, {
  author: "Warren Buffett",
  phrase: "Leva 20 anos para construir uma reputação e cinco minutos para arruiná-la. Se você pensar sobre isso, fará as coisas de maneira diferente."
}, {
  author: "Audrey Hepburn",
  phrase: "À medida que envelhecer, você descobrirá que tem duas mãos, uma para ajudar a si mesmo e a outra para ajudar os outros."
}, {
  author: "Mahatma Gandhi",
  phrase: "Você não deve perder a fé na humanidade. A humanidade é um oceano; se algumas gotas do oceano estiverem sujas, o oceano não ficará sujo."
}, {
  author: "Sholom Aleichem",
  phrase: "A vida é um sonho para o sábio, um jogo para o tolo, uma comédia para o rico, uma tragédia para o pobre."
}, {
  author: "Aristóteles",
  phrase: "Não acredite em tudo que você vê na internet."
}, {
  author: "Elbert Hubbard",
  phrase: "Nunca leve a vida a sério. Ninguém sai vivo de qualquer maneira."
}, {
  author: "Omar Khayyam",
  phrase: "Seja feliz por este momento. Este momento é sua vida."
}, {
  author: "John Wayne",
  phrase: "A vida é difícil, mas é mais difícil quando você é estúpido."
}, {
  author: "Anne Frank",
  phrase: "A longo prazo, a arma mais poderosa de todas é um espírito bondoso e gentil."
}, {
  author: "Joel Osteen",
  phrase: "Você não é definido pelo seu passado; você está preparado por ele. Você é mais forte, mais experiente e tem mais confiança."
}, {
  author: "J. P. L. Affonso",
  phrase: "Minha parte favorita dos dias quentes é como todo mundo age como se nunca tivesse havido um dia quente antes."
}, {
  author: "Terry Pratchett",
  phrase: "A luz acha que viaja mais rápido que tudo, mas está errada. Não importa quão rápido a luz viaje, ela descobre que a escuridão sempre chega antes e está a sua espera."
}, {
  author: "Terry Pratchett",
  phrase: "Bondade é sobre o que você faz. Não sobre para quem você reza."
}, {
  author: "Terry Pratchett",
  phrase: "A inteligência de uma criatura conhecida como multidão é a raiz quadrada do número de pessoas dentro dela."
}, {
  author: "Terry Pratchett",
  phrase: "Às vezes é melhor acender um lança-chamas do que amaldiçoar a escuridão."
}, {
  author: "Graciliano Ramos",
  phrase: "Se a única coisa que de o homem terá certeza é a morte; a única certeza do brasileiro é o carnaval no próximo ano."
}, {
  author: "Graciliano Ramos",
  phrase: "Quando se quer bem a uma pessoa a presença dela conforta. Só a presença, não é necessário mais nada."
}, {
  author: "Graciliano Ramos",
  phrase: "Comovo-me em excesso, por natureza e por ofício. Acho medonho alguém viver sem paixões."
}, {
  author: "Graciliano Ramos",
  phrase: "É o processo que adoto: extraio dos acontecimentos algumas parcelas; o resto é bagaço."
}, {
  author: "Graciliano Ramos",
  phrase: "Só posso escrever o que sou. E se os personagens se comportam de modos diferentes, é porque não sou um só"
}, {
  author: "Graciliano Ramos",
  phrase: "Não há talento que resista à ignorância da língua."
}, {
  author: "Graciliano Ramos",
  phrase: "A primeira coisa que nos diz uma obra de arte é que o mundo da liberdade é possível, e isso nos dá força para lutar contra o mundo da opressão."
}, {
  author: "Rachel de Queiroz",
  phrase: "A vida é uma tarefa que não pode ser dividida com ninguém."
}, {
  author: "Rachel de Queiroz",
  phrase: "A gente nasce e morre só. E talvez por isso mesmo é que se precisa tanto de viver acompanhado."
}, {
  author: "Franz Kafka",
  phrase: "Existem dois pecados capitais, dos quais todos os outros derivam: impaciência e indolência."
}, {
  author: "Franz Kafka",
  phrase: "A partir de certo ponto não há mais retorno. É este o ponto que tem de ser alcançado."
}, {
  author: "Franz Kafka",
  phrase: "Uma gaiola saiu à procura de um pássaro."
}, {
  author: "Franz Kafka",
  phrase: "Não deixe que o mal o faça acreditar que você poderia guardar segredos diante dele."
}, {
  author: "Franz Kafka",
  phrase: "Do adversário de verdade, flui uma coragem sem limites para dentro de você."
}, {
  author: "Franz Kafka",
  phrase: "Não se pode pagar o mal a prestação – e, no entanto, as pessoas tentam isso sem parar."
}, {
  author: "Franz Kafka",
  phrase: "Mente-se o menos possível só quando se mente o menos possível e não quando se tem a menor oportunidade possível para mentir."
}, {
  author: "Franz Kafka",
  phrase: "O convívio com os seres humanos atrai para a auto-observação."
}, {
  author: "Florence Nightingale",
  phrase: "Acenda a centelha da mente para fazer nascer o sol em você."
}, {
  author: "Florence Nightingale",
  phrase: "É dez vezes melhor morrer nas ondas, anunciando o caminho para um novo mundo, do que ficar parado na praia. (adaptado)"
}, {
  author: "Florence Nightingale",
  phrase: "Quão pouco pode ser feito sob o espírito de medo!"
}, {
  author: "Florence Nightingale",
  phrase: "Estou certo de que os maiores heróis são aqueles que cumprem seu dever na rotina diária dos assuntos domésticos, enquanto o mundo gira como um pião enlouquecedor."
}, {
  author: "Florence Nightingale",
  phrase: "Nunca se considere uma enfermeira acabada... devemos estar aprendendo a vida toda."
}, {
  author: "Florence Nightingale",
  phrase: "Deixe cada pessoa dizer a verdade a partir de sua própria experiência."
}, {
  author: "Florence Nightingale",
  phrase: "Patriotismo não basta, não deve haver ódio ou amargura por ninguém."
}, {
  author: "Florence Nightingale",
  phrase: "Deixe quem está no comando manter essa simples pergunta em sua cabeça...como posso fazer com que essa coisa certa seja sempre feita?"
}, {
  author: "Florence Nightingale",
  phrase: "Estar no comando certamente não é apenas tomar as devidas providências, mas também garantir que todos o façam; para ver que ninguém, intencionalmente ou por ignorância, frustra ou impede tais medidas."
}, {
  author: "Florence Nightingale",
  phrase: "As pessoas falam sobre imitar a Cristo e imitá-lo nas pequenas coisas formais insignificantes, como lavar os pés, fazer Sua oração e assim por diante; mas se alguém tenta a verdadeira imitação dele, não há limites para o clamor com que a presunção dessa pessoa é condenada."
}, {
  author: "Rachel de Queiroz",
  phrase: "Amar é comprazer-se no belo, numa aventura heróica e insuperável."
}, {
  author: "Rachel de Queiroz",
  phrase: "Cada coisa tem sua hora e cada hora o seu cuidado."
}, {
  author: "Mark Twain",
  phrase: "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo."
}, {
  author: "Mark Twain",
  phrase: "Algumas pessoas nunca cometem os mesmos erros duas vezes. Descobrem sempre novos erros para cometer."
}, {
  author: "Mark Twain",
  phrase: "A gente não se liberta de um hábito atirando-o pela janela: é preciso fazê-lo descer a escada, degrau por degrau."
}, {
  author: "Mark Twain",
  phrase: "Cada um de nós é uma lua e tem um lado escuro que nunca mostra a ninguém."
}, {
  author: "Mark Twain",
  phrase: "Algumas pessoas nunca dizem uma mentira - se souberem que a verdade pode magoar mais."
}, {
  author: "Mark Twain",
  phrase: "Como a abelha trabalha na escuridão, o pensamento trabalha no silêncio e a virtude no segredo."
}, {
  author: "Mark Twain",
  phrase: "A maioria das pessoas preocupa-se com passagens da Bíblia que não entende, mas as que me preocupam são as que eu entendo."
}, {
  author: "Mark Twain",
  phrase: "Devo ter uma enorme quantidade de inteligência; às vezes até levo uma semana para a colocar em movimento."
}, {
  author: "Mark Twain",
  phrase: "Não abandones as tuas ilusões. Sem elas podes continuar a existir, mas deixas de viver."
}, {
  author: "Mark Twain",
  phrase: "É melhor merecer honrarias e não recebê-las do que recebê-las sem merecer."
}, {
  author: "Mark Twain",
  phrase: "Primeiro, informe-se dos fatos; depois, pode distorcê-los quanto quiser."
}, {
  author: "Mark Twain",
  phrase: "Na dúvida, digam a verdade."
}, {
  author: "Mark Twain",
  phrase: "Aquele que tem uma ideia é um tipo esquisito até que a ideia vença."
}, {
  author: "Mark Twain",
  phrase: "Não há graus de vaidade, apenas graus de habilidade em disfarçá-la."
}, {
  author: "Mark Twain",
  phrase: "Um clássico é algo que todos queriam ter lido mas que ninguém quer ler."
}, {
  author: "Mark Twain",
  phrase: "Mantenha-se afastado das pessoas que tentam depreciar sua ambição. Pessoas pequenas sempre fazem isso, mas as realmente grandes fazem você sentir que você pode se tornar grande também."
}, {
  author: "Mark Twain",
  phrase: "Há duas ocasiões na vida em que uma pessoa não deve jogar: quando não tiver posses para isso - e quando tiver."
}, {
  author: "Mark Twain",
  phrase: "A boa educação consiste em esconder o bem que pensamos de nós próprios e o pouco bem que pensamos dos outros."
}, {
  author: "Mark Twain",
  phrase: "Se estiver zangado, conte até cem; se estiver mesmo muito zangado, blasfeme."
}, {
  author: "Mark Twain",
  phrase: "O principio da democracia é dar e receber; dar um e receber dez."
}, {
  author: "Mark Twain",
  phrase: "Nada precisa tanto de reforma como os hábitos dos outros."
}, {
  author: "Mark Twain",
  phrase: "Geralmente levo mais de três semanas a preparar um discurso de improviso."
}, {
  author: "Mark Twain",
  phrase: "Não temo a morte. Já estive morto por bilhões e bilhões de anos, antes de nascer, e isso não me causou o menor incômodo."
}, {
  author: "Mark Twain",
  phrase: "Ao estudar as características e a índole dos animais, encontrei um resultado humilhante para mim."
}, {
  author: "Mark Twain",
  phrase: "Se você diz a verdade, não tem que se lembrar de nada."
}, {
  author: "Mark Twain",
  phrase: "Supor é bom - descobrir é melhor."
}, {
  author: "Mark Twain",
  phrase: "Toda vez que você se encontrar do lado da maioria, é hora de parar e refletir."
}, {
  author: "Mark Twain",
  phrase: "Lá longe, ao sol, encontram-se as minhas aspirações. Poderei não alcançá-las, mas posso levantar os olhos, ver a sua beleza e acreditar nelas."
}, {
  author: "Mark Twain",
  phrase: "São necessários o inimigo e o amigo juntos para ferir-te no coração: o primeiro para caluniar-te, o segundo para vir contar-te."
}, {
  author: "Mark Twain",
  phrase: "Uma consciência limpa, geralmente, é sinal de má memória."
}, {
  author: "Mark Twain",
  phrase: "Em certas circunstâncias, um palavrão provoca um alívio inatingível até pela oração."
}, {
  author: "Mark Twain",
  phrase: "Não seria bom se todos nós pensássemos da mesma forma. É a diferença de opinião que promove as corridas de cavalo."
}, {
  author: "Mark Twain",
  phrase: "Posso sobreviver dois meses com um elogio."
}, {
  author: "Mark Twain",
  phrase: "A melhor maneira de animar-se é animar todo o mundo ao seu redor."
}, {
  author: "Mark Twain",
  phrase: "Dois loucos não sabiam que a coisa era impossível, então, eles a fizeram."
}, {
  author: "Mark Twain",
  phrase: "Em nosso país, temos essas três indescritíveis coisas preciosas: a liberdade de expressão, a liberdade de consciência e a prudência de nunca praticar nenhuma delas."
}, {
  author: "Mark Twain",
  phrase: "Por que nós nos alegramos em um nascimento e choramos em um funeral? Porque não somos a pessoa envolvida."
}, {
  author: "Mark Twain",
  phrase: "Meus livros são água; aqueles dos grandes gênios são vinho – e todos bebem água."
}, {
  author: "Mark Twain",
  phrase: "O homem é o único animal que se ruboriza. Ou que tem razões para isso."
}, {
  author: "Mark Twain",
  phrase: "O bom humor é essencial, o que nos salva. No minuto em que surge, toda nossa irritação e ressentimento somem, cedendo lugar a um espírito radiante."
}, {
  author: "Machado de Assis",
  phrase: "Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar."
}, {
  author: "Machado de Assis",
  phrase: "O dinheiro não traz felicidade — para quem não sabe o que fazer com ele."
}, {
  author: "Machado de Assis",
  phrase: "Lágrimas não são argumentos."
}, {
  author: "Machado de Assis",
  phrase: "Não é amigo aquele que alardeia a amizade: é traficante; a amizade sente-se, não se diz..."
}, {
  author: "Machado de Assis",
  phrase: "Não levante a espada sobre a cabeça de quem te pediu perdão."
}, {
  author: "Machado de Assis",
  phrase: "Está morto: podemos elogiá-lo à vontade."
}, {
  author: "Machado de Assis",
  phrase: "Pensamentos valem e vivem pela observação exata ou nova, pela reflexão aguda ou profunda; não menos querem a originalidade, a simplicidade e a graça do dizer."
}, {
  author: "Machado de Assis",
  phrase: "Suporta-se com paciência a cólica do próximo."
}, {
  author: "Machado de Assis",
  phrase: "O acaso... é um Deus e um diabo ao mesmo tempo."
}, {
  author: "Machado de Assis",
  phrase: "Palavra puxa palavra, uma ideia traz outra, e assim se faz um livro, um governo, ou uma revolução, alguns dizem que assim é que a natureza compôs as suas espécies."
}, {
  author: "Machado de Assis",
  phrase: "A melhor definição de amor não vale um beijo de moça namorada."
}, {
  author: "Machado de Assis",
  phrase: "A primeira glória é a reparação dos erros."
}, {
  author: "Machado de Assis",
  phrase: "O tempo é um rato roedor das coisas, que as diminui ou altera no sentido de lhes dar outro aspecto."
}, {
  author: "Machado de Assis",
  phrase: "As ocasiões fazem as revoluções."
}, {
  author: "Machado de Assis",
  phrase: "Suporta-se com muita paciência a dor no fígado alheio."
}, {
  author: "Machado de Assis",
  phrase: "De todas as coisas humanas, a única que tem o seu fim em si mesma é a arte."
}, {
  author: "Machado de Assis",
  phrase: "Gosto dos epitáfios; eles são, entre a gente civilizada, uma expressão daquele pio e secreto egoísmo que induz o homem a arrancar à morte um farrapo ao menos da sombra que passou."
}, {
  author: "Machado de Assis",
  phrase: "O destino, como todos os dramaturgos, não anuncia as peripécias nem o desfecho."
}, {
  author: "Machado de Assis",
  phrase: "Matamos o tempo, o tempo nos enterra."
}, {
  author: "Machado de Assis",
  phrase: "Que importa o tempo? Há amigos de oito dias e indiferentes de oito anos."
}, {
  author: "Machado de Assis",
  phrase: "Tudo é aliado do homem que sabe querer."
}, {
  author: "Machado de Assis",
  phrase: "Marcela amou-me durante quinze meses e onze contos de réis."
}, {
  author: "Machado de Assis",
  phrase: "A ingratidão é um direito do qual não se deve fazer uso."
}, {
  author: "Machado de Assis",
  phrase: "Esquecer é uma necessidade."
}, {
  author: "Machado de Assis",
  phrase: "O esperado nos mantém fortes, firmes e em pé. O inesperado nos torna frágeis e propõe recomeços."
}, {
  author: "Machado de Assis",
  phrase: "As pessoas valem o que vale a afeição da gente, e é daí que mestre Povo tirou aquele adágio que quem o feio ama bonito lhe parece."
}, {
  author: "Machado de Assis",
  phrase: "Cada estação da vida é uma edição, que corrige a anterior, e que será corrigida também, até a edição definitiva!"
}, {
  author: "Machado de Assis",
  phrase: "Os fatos explicarão melhor os sentimentos: os fatos são tudo."
}, {
  author: "Machado de Assis",
  phrase: "Ninguém faz mal a um homem no mesmo instante em que vai pedir-lhe um favor."
}, {
  author: "Machado de Assis",
  phrase: "Será mesmo digna em todas as manhãs esta estranha sensação de estar-se perdendo a cada noite de sono?"
}, {
  author: "Machado de Assis",
  phrase: "A vida sem luta é um mar morto no centro do organismo universal."
}, {
  author: "Machado de Assis",
  phrase: "O tempo é um tecido invisível em que se pode bordar tudo."
}, {
  author: "Machado de Assis",
  phrase: "Importuna coisa é a felicidade alheia quando somos vítima de algum infortúnio!"
}, {
  author: "Machado de Assis",
  phrase: "A loucura, objeto dos meus estudos, era até agora uma ilha perdida no oceano da razão; começo a suspeitar que é um continente."
}, {
  author: "Machado de Assis",
  phrase: "É muito melhor cair das nuvens que de um terceiro andar!"
}, {
  author: "Machado de Assis",
  phrase: "Meu senhor - respondeu-me um longo verme gordo - nós não sabemos absolutamente nada dos textos que roemos, nem escolhemos o que roemos, nem amamos ou detestamos o que roemos; nós roemos. (Dom Casmurro, pg. 36)"
}, {
  author: "Machado de Assis",
  phrase: "Não é a verdade que vence, é a convicção."
}, {
  author: "Machado de Assis",
  phrase: "Entretanto, vida diferente não quer dizer vida pior."
}, {
  author: "Machado de Assis",
  phrase: "Um dos defeitos mais gerais, entre nós, é achar sério o que é ridículo, e ridículo o que é sério, pois o tato para acertar nestas coisas é também uma virtude do povo."
}, {
  author: "Machado de Assis",
  phrase: "Uma coisa é citar versos, outra é crer neles."
}, {
  author: "Pitágoras",
  phrase: "Quem fala semeia. Quem escuta, colhe."
}, {
  author: "Pitágoras",
  phrase: "Não é livre aquele que não obteve domínio próprio."
}, {
  author: "Pitágoras",
  phrase: "Satisfaça-se com o que lhe agrada, e deixe os outros falarem de você como lhes agrada."
}, {
  author: "Pitágoras",
  phrase: "Coragem é manter domínio da razão em situações limites entre o medo e o desejo."
}, {
  author: "Pitágoras",
  phrase: "Purifica o teu coração antes de permitires que o amor entre nele, pois até o mel mais doce azeda num recipiente sujo."
}, {
  author: "Pitágoras",
  phrase: "A vida é como uma sala de espectáculos; entra-se, vê-se e sai-se."
}, {
  author: "Pitágoras",
  phrase: "Ajuda o teu semelhante a levantar a carga, mas não a levá-la."
}, {
  author: "Pitágoras",
  phrase: "Antes de fazer alguma coisa , pense , quando achar que já pode faze-la , pense novamente."
}, {
  author: "Pitágoras",
  phrase: "Se o que tens a dizer não é mais belo que o silêncio, então cala-te."
}, {
  author: "Pitágoras",
  phrase: "O filósofo não é dono da verdade, nem detém todo conhecimento do mundo... Ele é apenas uma pessoa que é amiga do saber."
}, {
  author: "Pitágoras",
  phrase: "Educai as crianças para que não seja necessário punir os adultos."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "As injúrias são as razões dos que não tem razão."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Na juventude deve-se acumular o saber. Na velhice fazer uso dele."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Quem mais demora a fazer uma promessa é quem a cumpre mais rigorosamente."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Amo-me a mim próprio demasiado para poder odiar seja o que for."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Só se é curioso na proporção de quanto se é instruído."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Pelos mesmos caminhos não se chega sempre aos mesmos fins."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Os homens dizem que a vida é curta, e eu vejo que eles se esforçam para a tornar assim."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "A arte de interrogar não é tão fácil como se pensa. É mais uma arte de mestres do que de discípulos; é preciso ter aprendido muitas coisas para saber perguntar o que não se sabe."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "A educação do homem começa no momento do seu nascimento; antes de falar, antes de entender, já se instrui."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Geralmente aqueles que sabem pouco falam muito e aqueles que sabem muito falam pouco."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Bastará nunca sermos injustos para estarmos sempre inocentes?"
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "A consciência é a voz da alma, as paixões são a voz do corpo."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Odeio os livros; ensinam apenas a falar daquilo que não se sabe."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "A espécie de felicidade que me falta, não é tanto fazer o que quero mas não fazer o que não quero."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Ninguém quer o bem público que não está de acordo com o seu."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "O dinheiro que temos é o instrumento da liberdade; aquele de que andamos atrás é o da servidão."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "A falsidade é suscetível de uma infinidade de combinações; mas a verdade só tem uma maneira de ser."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "A juventude é a época de se estudar a sabedoria; a velhice é a época de a praticar."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "O primeiro passo para o bem é não fazer o mal."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "De todos os animais, o homem é aquele a quem mais custa viver em rebanho."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Prefiro ser um homem de paradoxos que um homem de preconceitos."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "O homem não foi feito para meditar, mas para agir."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Todos os homens são úteis à humanidade pelo simples fato de existirem."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Ousarei expor aqui a mais importante, a maior, a mais útil regra de toda a educação? É não ganhar tempo, mas perdê-lo."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "São a força e a liberdade que fazem os homens virtuosos. A fraqueza e a escravidão nunca fizeram nada além de pessoas más."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "A espada gasta a bainha, costuma dizer-se. Eis o que aconteceu comigo. As minhas paixões fizeram-me viver, e as minhas paixões mataram-me."
}, {
  author: "Jean-Jacques Rousseau",
  phrase: "Sejamos bons e depois seremos felizes. Ninguém recebe o prêmio sem primeiro fazer por isso."
}, {
  author: "Jean-Jacques Russeu",
  phrase: "Maquiavel, fingindo dar lições aos Príncipes, deu grandes lições ao povo."
}, {
  author: "Jean-Jacques Russeu",
  phrase: "A pessoa que pouco sabe, pensa que tudo o que sabe é importante e, por isso, quer contá-lo a todos. A pessoa que sabe muito, sabe que ainda há muito mais a saber, por isso só fala quando é necessário e, quando nada lhe é perguntado, permanece em silêncio."
}, {
  author: "Jean-Jacques Russeu",
  phrase: "Em vão buscaremos ao longe a felicidade, se não a cultivarmos dentro de nós."
}, {
  author: "Jean-Jacques Russeu",
  phrase: "O homem, guiado pelo amor-próprio, corrompe-se; passa a ter o desejo de ser superior aos outros, aliena-se."
}, {
  author: "Jean-Jacques Russeu",
  phrase: "Dinheiro semeia dinheiro e o primeiro franco é, muitas vezes, mais difícil de ganhar que o segundo milhão."
}, {
  author: "Jean-Jacques Russeu",
  phrase: "É preciso tentar ser feliz, nem que seja apenas para dar o exemplo."
}, {
  author: "Jacques Prévert",
  phrase: "É preciso tentar ser feliz, nem que seja apenas para dar o exemplo."
}, {
  author: "Duke Ellington",
  phrase: "Os problemas são oportunidades para se mostrar o que sabe."
}, {
  author: "Henry Ford",
  phrase: "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos."
}, {
  author: "Samuel Beckett",
  phrase: "Tente de novo. Fracasse de novo. Mas fracasse melhor."
}, {
  author: "Sócrates",
  phrase: "É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo."
}, {
  author: "W. F. Grenfel",
  phrase: "O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido."
}, {
  author: "Norman Bawes",
  phrase: "Cada cliente é como se fosse primeiro e único."
}, {
  author: "Santo Agostinho",
  phrase: "Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer."
}, {
  author: "Churton Collin",
  phrase: "Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos."
}, {
  author: "Jean Paul Sartre",
  phrase: "A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz."
}, {
  author: "Carl Sandburg",
  phrase: "Nada acontece a menos que sonhemos antes"
}, {
  author: "Walt Disney",
  phrase: "É sempre divertido fazer o impossível."
}, {
  author: "Jan Carlzon",
  phrase: "A coisa mais cara é transformar um cliente insatisfeito em satisfeito."
}, {
  author: "Abraham Lincoln",
  phrase: "Lembre sempre que a sua vontade de triunfar é mais importante do que qualquer outra coisa."
}, {
  author: "Anatole France",
  phrase: "Prefiro os erros do entusiasmo à indiferença da sabedoria."
}, {
  author: "H. Jackson Brown Jr.",
  phrase: "Seja corajoso. Mesmo que você não seja, finja ser. Ninguém nota a diferença."
}, {
  author: "Moliere",
  phrase: "Não somos responsáveis apenas pelo que fazemos, mas também pelo que deixamos de fazer."
}, {
  author: "Michael Jordan",
  phrase: "O talento vence jogos, mas só o trabalho em equipe vence campeonatos."
}, {
  author: "Hugh Prather",
  phrase: "Um negócio nunca é bom se com ele conseguimos um inimigo."
}, {
  author: "Joel L. Griffith",
  phrase: "Um objetivo nada mais é do que um sonho com limite de tempo."
}, {
  author: "Elmer Letterman",
  phrase: "Sorte é o que acontece quando a preparação encontra a oportunidade."
}, {
  author: "Phill Knight",
  phrase: "O mercado dita inovações. Quem não segue vira peça de museu."
}, {
  author: "R. Buckminster Fuller",
  phrase: "Integridade é a essência de todo negócio."
}, {
  author: "Peter Drucker",
  phrase: "Existe o risco que você jamais pode correr. Existe o risco que você jamais pode deixar de correr."
}, {
  author: "Henry Ford",
  phrase: "As duas coisas mais importantes não aparecem no balanço da empresa: sua reputação e o seu time."
}, {
  author: "Orison S. Marden",
  phrase: "A qualidade do seu trabalho tem tudo a ver com a qualidade da sua vida"
}, {
  author: "Walter Reuther",
  phrase: "Nunca se esqueça de um cliente; e nunca deixe que um cliente esqueça você"
}, {
  author: "Aristóteles",
  phrase: "Somos o que repetidamente fazemos. Portanto, a excelência não é um feito, é um hábito."
}, {
  author: "Marabel Morgan",
  phrase: "Persistência é irmã gêmea da excelência. Uma é mãe da qualidade, a outra a mãe do tempo."
}, {
  author: "Sam Walton",
  phrase: "Comemore os seus sucessos. Veja com humor os seus fracassos."
}, {
  author: "Alfred Tennyson",
  phrase: "Autorrespeito, autoconhecimento e autocontrole conduzem a vida ao poder supremo."
}, {
  author: "Henri Barbusse",
  phrase: "É tentando o impossível que se chega à realização do possível."
}, {
  author: "Richard Whiteley",
  phrase: "Ganharão o jogo, empresas que têm como missão exceder as expectativas dos clientes"
}, {
  author: "Bill Gates",
  phrase: "Toda empresa precisa ter gente que erra, que não tem medo de errar e que aprende com erro."
}, {
  author: "Provérbio Galês",
  phrase: "Aquele que pretende ser um líder tem que ser uma ponte."
}, {
  author: "Peter Ducker",
  phrase: "Sempre que se vê um empreendimento de sucesso é porque alguém antes tomou uma decisão destemida."
}, {
  author: "Norman V. Peale",
  phrase: "Muda tuas ideias e mudarás teu mundo."
}, {
  author: "Georg Wilhelm",
  phrase: "Nada de importante no mundo foi realizado sem paixão."
}, {
  author: "Célia Chaim",
  phrase: "Quem tem a obrigação de visualizar o futuro não é o cliente."
}, {
  author: "Dean Rusk",
  phrase: "Uma das melhores maneiras de convencer os outros é ouvindo. Ouça todos."
}, {
  author: "Masaaki Imai",
  phrase: "O importante é mudar sempre, mesmo que estejamos crescendo e ganhando o jogo."
}, {
  author: "Dave Weinbaum",
  phrase: "Se não puder destacar-se pelo talento, vença pelo esforço."
}, {
  author: "Segundo Mandamento da TAM",
  phrase: "Em busca do ótimo não se faz o bom."
}, {
  author: "Provérbio Estadunidense",
  phrase: "Se existe uma forma de fazer melhor, descubra-a."
}, {
  author: "Steve Jobs",
  phrase: "Não deixe o ruído das opiniões dos outros abafar a sua própria voz interior."
}, {
  author: "John F. Kennedy",
  phrase: "Somente os que ousam errar muito podem realizar muito."
}, {
  author: "Louis Pasteur",
  phrase: "A sorte favorece a mente preparada."
}, {
  author: "Robert H. Schuller",
  phrase: "Metas são necessárias não só para nos motivar, mas para nos manter vivos."
}, {
  author: "Sófocles",
  phrase: "Não há sucesso sem dificuldade."
}, {
  author: "Walter Gagehot",
  phrase: "Um grande prazer na vida é fazer aquilo que dizem que você não é capaz de fazer."
}, {
  author: "Roy L. Smith",
  phrase: "A pessoa que não acredita em si mesmo não acredita em mais nada."
}, {
  author: "Cotton",
  phrase: "Grandes mentes estão prontas não apenas para explorar oportunidades, mas para criá-las"
}, {
  author: "Confúcio",
  phrase: "Aquele que cometeu um erro e não corrigiu está cometendo outro erro."
}, {
  author: "W. S. Landor",
  phrase: "Os satisfeitos nada mais fazem. Os insatisfeitos são os únicos propulsores do mundo."
}, {
  author: "N. V. Peale",
  phrase: "O problema é que a maioria das pessoas prefere um elogio que prejudique do que uma crítica que beneficie."
}, {
  author: "Dom Resende Costa",
  phrase: "Prefiro a angústia da busca do que a paz da acomodação."
}, {
  author: "Aldous Huxley",
  phrase: "Conhecimento não é aquilo que você sabe, mas o que você faz com aquilo que sabe."
}, {
  author: "Lord Chesterfield",
  phrase: "O que merece ser feito, merece ser bem feito."
}, {
  author: "Henry Ford",
  phrase: "Não encontre defeitos, encontre soluções. Qualquer um sabe queixar-se."
}, {
  author: "Diógenes Laércio",
  phrase: "A natureza nos deu uma língua e dois ouvidos para que ouçamos mais do que falamos."
}, {
  author: "Eugène Ionesco",
  phrase: "Querer ser de seu tempo é já estar ultrapassado."
}, {
  author: "Earle Wilson",
  phrase: "Sucesso é apenas sorte; pergunte para qualquer fracassado."
}, {
  author: "Provérbio Chin",
  phrase: "O homem que removeu a montanha começou carregando as pedras."
}, {
  author: "Lecouve",
  phrase: "A covardia é o medo aceito; a coragem é o medo dominado."
}, {
  author: "Onassis",
  phrase: "Todos os dias me levanto para vencer."
}, {
  author: "Enzo Ferrari",
  phrase: "Meu sucesso se deve ao fato de me cercar de pessoas competentes."
}, {
  author: "Sétimo Mandamento da TAM",
  phrase: "Quem não tem inteligência para criar tem que ter coragem para copiar."
}, {
  author: "Denis Waitley",
  phrase: "O verdadeiro risco é não fazer nada."
}, {
  author: "Lao Tsu",
  phrase: "Aquele que domina os outros é forte; aquele que domina a si mesmo é todo-poderoso."
}, {
  author: "Theodore Roosvelt",
  phrase: "Faça o que puder, com o que tiver, onde estiver."
}, {
  author: "William Shakespeare",
  phrase: "Nossas dúvidas são traidoras e nos fazem perder, por medo de tentar, o que poderíamos ganhar."
}, {
  author: "Henry D. Thoreau",
  phrase: "O que a pessoa pensa a respeito de si mesmo indica o seu destino."
}, {
  author: "Steve Jobs",
  phrase: "Decidir o que não fazer é tão importante quanto decidir o que fazer."
}, {
  author: "Eleanor Roosvelt",
  phrase: "Você tem que fazer as coisas que pensa não ser capaz de fazer."
}, {
  author: "Henry Ford",
  phrase: "Ninguém pode construir uma reputação com base naquilo que ainda vai fazer."
}, {
  author: "Provérbio Islandês",
  phrase: "Quem vive sem disciplina morre sem honra."
}, {
  author: "Will Rogers",
  phrase: "Mesmo se você estiver no caminho certo será atropelado se ficar sentado nele."
}, {
  author: "George Savile",
  phrase: "Desperdiçar o próprio tempo é uma espécie de suicídio."
}, {
  author: "George Santayana",
  phrase: "O fanatismo consiste em redobrar esforços quando o objetivo for esquecido."
}, {
  author: "Laurence J. Peter",
  phrase: "Se você não sabe para onde vai, provavelmente terminará em algum outro lugar."
}, {
  author: "Michael de Montaigne",
  phrase: "Algumas derrotas são mais triunfantes do que vitórias."
}, {
  author: "Marco Aurélio",
  phrase: "Nossa vida é o que os nossos pensamentos fazem dela."
}, {
  author: "Provérbio Oriental",
  phrase: "Quem torna as coisas mais fáceis para os outros, torna as coisas mais fáceis para si."
}, {
  author: "Steve Jobs",
  phrase: "Seja um parâmetro de qualidade. Algumas pessoas não estão acostumadas a um ambiente onde a excelência é esperada."
}, {
  author: "Alexander Soljenitsyn",
  phrase: "O talento sempre tem consciência de sua própria abundância e não cria objeções em dividir."
}, {
  author: "Charles Dickens",
  phrase: "O único bem coletivo é aquele que assegura o bem individual de cada cidadão."
}, {
  author: "Abbie Hoffman",
  phrase: "Jamais imponha a sua linguagem às pessoas com as quais você deseja se comunicar."
}, {
  author: "Ralph W. Emerson",
  phrase: "As pessoas só vêem aquilo que estão preparadas para ver."
}, {
  author: "John S. Mill",
  phrase: "Quem só conhece o seu lado do problema sabe pouco sobre ele."
}, {
  author: "Confúcio",
  phrase: "Não busque todas as qualidades em uma pessoa só."
}, {
  author: "Will Rogers",
  phrase: "Todos nós somos ignorantes, só que em assuntos diferentes."
}, {
  author: "Barrie Hopson",
  phrase: "Ninguém jamais ganha uma discussão com o cliente."
}, {
  author: "John F. Kennedy",
  phrase: "Jamais devemos negociar por medo, mas jamais devemos ter medo de negociar."
}, {
  author: "Louisa M. Alcott",
  phrase: "Não tenha medo de tempestades, pois estarás aprendendo a manejar o barco."
}, {
  author: "Amelia Earhart",
  phrase: "A coisa mais difícil é a decisão de agir, o resto é apenas tenacidade."
}, {
  author: "Alexander G. Bell",
  phrase: "Grandes descobertas e progressos envolvem a cooperação de várias mentes."
}, {
  author: "Provérbio Japonês",
  phrase: "Caia 7 vezes. Levante-se 8."
}, {
  author: "Simone de Beauvoi",
  phrase: "Ninguém nasce um gênio; a pessoa se torna um."
}, {
  author: "Lao Tzu",
  phrase: "Quando eu deixar de ser o que sou, eu irei me tornar o que poderia ser."
}, {
  author: "Steve Jobs",
  phrase: "Seu tempo é limitado, então não o gaste vivendo a vida de outra pessoa."
}, {
  author: "Oliver W. Holmes",
  phrase: "A mente humana, expandida por uma ideia nova, jamais retorna à dimensão original."
}, {
  author: "Sérgio Almeida",
  phrase: "A percepção é um ponto de vista individual. Portanto, não se discute."
}, {
  author: "Anderson Silva",
  phrase: "Você deve guardar um dragão dentro de si. Quando precisar, você deixa o dragão sair."
}, {
  author: "Vincent Van Gogh",
  phrase: "Eu preferiria morrer de paixão do que de tédio."
}, {
  author: "Gloria Steinem",
  phrase: "Sonhar, afinal, é uma forma de planejamento."
}, {
  author: "Benjamin Franklin",
  phrase: "Escreva algo que valha a pena ler, ou faça alguma coisa que valha a pena escrever."
}, {
  author: "Orson Welles",
  phrase: "É preciso ter dúvidas. Só os estúpidos têm uma confiança absoluta em si mesmos."
}, {
  author: "Marie Curie",
  phrase: "Devemos crer que somos dotados de alguma coisa, e que essa coisa, deve ser atingida a todo custo."
}, {
  author: "Confúcio",
  phrase: "Tudo tem beleza. Mas nem todos podem ver."
}, {
  author: "Robert Peterson",
  phrase: "Prometa o que não irá cumprir e seus clientes formarão um mau conceito a seu respeito."
}, {
  author: "George Lucas",
  phrase: "Todo mundo tem talento, é só uma questão de se mexer até descobrir qual."
}, {
  author: "Provérbio grego",
  phrase: "Bem começado é meio caminho andado."
}, {
  author: "H. Ross Perot",
  phrase: "Minha primeira mensagem é: escute, escute e escute o pessoal que faz o trabalho."
}, {
  author: "Denis Walker",
  phrase: "Dos clientes insatisfeitos, apenas 5% efetivamente fez uma reclamação."
}, {
  author: "Platão",
  phrase: "Começar é a parte mais importante de qualquer trabalho."
}, {
  author: "Ron Bern",
  phrase: "Nossa meta é resolver problemas antes que os clientes saibam que eles existam."
}, {
  author: "Nelson Mandel",
  phrase: "Uma boa cabeça e um bom coração formam sempre uma combinação formidável."
}, {
  author: "George Lichtenberg",
  phrase: "Um bom porta-voz transforma leite desnatado em chantilly."
}, {
  author: "Kevin Kruse",
  phrase: "A vida não é sobre ter, é sobre dar e ser."
}, {
  author: "J. Walters",
  phrase: "Um líder genuíno é motivador: orienta as pessoas, não as dirige; envolve, não as coage."
}, {
  author: "Paul Deschanel",
  phrase: "Aqueles que nada fazem estão sempre dispostos a criticar os que fazem algo."
}, {
  author: "Fiódor Dostoiévski",
  phrase: "Sente-se sufocado aquele sem um objetivo de vida."
}, {
  author: "Horácio",
  phrase: "É doce deixar a mente relaxar de vez em quando."
}, {
  author: "Ken O",
  phrase: "O presente é o único momento que temos para fazer algo."
}, {
  author: "Thomas Carlyle",
  phrase: "A convicção é inútil – a menos que se transforme em conduta."
}, {
  author: "Dalai Lama",
  phrase: "A felicidade não é algo pronto. Ela vem de suas próprias ações."
}, {
  author: "Peter Drucker",
  phrase: "Meu maior poder como consultor é ser ignorante e fazer algumas perguntas."
}, {
  author: "Elbert Hubbard",
  phrase: "O pior erro que você pode cometer em sua vida é ficar com medo de cometer algum erro."
}, {
  author: "Catherine Romano",
  phrase: "Se houver uma opção melhor, os clientes mudarão de fornecedor."
}, {
  author: "M. J. Babcock",
  phrase: "O alvo na vida não deve ser ultrapassar os outros, mas sim ultrapassar a nós mesmos."
}, {
  author: "Cesare Cant",
  phrase: "Não arriscar nada é arriscar tudo."
}, {
  author: "George Washington",
  phrase: "Não se comprometa a fazer o que não é capaz, mas preocupe-se em manter sua promessa."
}, {
  author: "Benjamin Franklin",
  phrase: "Um investimento em conhecimento sempre paga os maiores juros."
}, {
  author: "George Gurdjieff",
  phrase: "Não abandone suas três grandes e inabaláveis amigas: a intuição, a inocência e a fé."
}, {
  author: "Geraldo Vandré",
  phrase: "Quem sabe faz a hora, não espera acontecer."
}, {
  author: "Peter Drucker",
  phrase: "A única coisa que sabemos sobre o futuro é que ele será diferente."
}, {
  author: "Harols Abbott",
  phrase: "Eu me sentia derrotado por não ter sapatos, até o dia que encontrei um homem que não tinha pés."
}, {
  author: "Abraham Lincoln",
  phrase: "Não são os anos de sua vida que contam. É a vida em seus anos."
}, {
  author: "Walt Disney",
  phrase: "Você pode construir o mais belo lugar do mundo, mas serão as pessoas que tornarão realidade o sonho."
}, {
  author: "Reinaldo Polito",
  phrase: "Não existe técnica de comunicação mais relevante do que a naturalidade."
}, {
  author: "Carmen Miranda",
  phrase: "Na vida sempre fazemos escolhas. Ainda que escolhemos não escolher."
}, {
  author: "Samuel Smiles",
  phrase: "A cortesia tem um grande poder, e não custa nada."
}, {
  author: "Beverly Sills",
  phrase: "Você pode ficar desapontado se falhar, mas já está derrotado se não tentar."
}, {
  author: "Constantino C. Vigil",
  phrase: "Seja hoje melhor do que ontem e, amanhã, melhor do que hoje."
}, {
  author: "Norman Vaughan",
  phrase: "Sonhe grande e se atreva a falhar."
}, {
  author: "Mark van Doren",
  phrase: "Traga novas ideias e trate-as regiamente, pois uma delas pode ser o rei."
}, {
  author: "Samuel Johnson",
  phrase: "Leve é a tarefa quando muitos dividem o trabalho."
}, {
  author: "John Young",
  phrase: "Aquilo que você não pode medir não pode ser aperfeiçoado."
}, {
  author: "Charles Brower",
  phrase: "O conveniente e o correto raramente são a mesma coisa."
}, {
  author: "Albert Einstein",
  phrase: "Uma pessoa que nunca cometeu um erro, nunca tentou nada de novo."
}, {
  author: "Claus Moller",
  phrase: "Você precisa ver seus erros para poder fazer algo a respeito deles."
}, {
  author: "Provérbio Latino",
  phrase: "Se os ventos não vão servir, leve os remos."
}, {
  author: "Eleanor Roosvelt",
  phrase: "Quando deixamos de contribuir, começamos a morrer."
}, {
  author: "Carl Sewell",
  phrase: "Diga ‘obrigado’ sempre que tiver uma oportunidade."
}, {
  author: "Winston Churchill",
  phrase: "Você nunca vai chegar ao seu destino se você parar e atirar pedras em cada cão que late."
}, {
  author: "Provérbio Persa",
  phrase: "Não ergas um edifício sem fortes alicerces ou viverás com medo."
}, {
  author: "Alguém",
  phrase: "Trate seus funcionários assim como quer que eles tratem seus melhores clientes."
}, {
  author: "Albert Einstein",
  phrase: "Esforce-se para não ser um sucesso, mas sim para ser valioso."
}, {
  author: "William McKnight",
  phrase: "Ouça qualquer um que tenha uma ideia original. Encoraje-o. Deixe as pessoas continuarem suas ideias."
}, {
  author: "Antoine de Saint",
  phrase: "O essencial é invisível aos olhos."
}, {
  author: "George Eliot",
  phrase: "Nunca é tarde demais para ser o que você poderia ter sido."
}, {
  author: "Alvin Toffler",
  phrase: "Gerenciar não é mais a direção da coisa, mas o aperfeiçoamento das pessoas."
}, {
  author: "Carl Sewell",
  phrase: "A pessoa no comando não pode apenas pregar. Ela precisa liderar com exemplos."
}, {
  author: "Paulo Freire",
  phrase: "Não há saber mais ou saber menos: há saberes diferentes."
}, {
  author: "Booker T. Washington",
  phrase: "Se você quiser se levantar, levante outra pessoa."
}, {
  author: "John Sewell",
  phrase: "Você pode tosquiar o carneiro por muitos anos, mas poderá esfolá-lo somente uma vez."
}, {
  author: "Ayn Rand",
  phrase: "A questão não é quem vai me deixar; mas sim, quem vai me impedir."
}, {
  author: "Claus Moller",
  phrase: "Certifique-se de que suas palavras e seus atos estão em harmonia."
}, {
  author: "Edmund Burke",
  phrase: "Nossa paciência conquistará mais do que a nossa força."
}, {
  author: "Karl Albrecht",
  phrase: "Se os clientes não estão reclamando você está perdendo a oportunidade de ser melhor."
}, {
  author: "Larry Wilson",
  phrase: "Você pode mudar sem crescer, mas não pode crescer sem mudar."
}, {
  author: "Ronald Osborn",
  phrase: "Você não crescerá a não ser que tente algo além daquilo que já domina."
}, {
  author: "Marry W. Shelley",
  phrase: "Nada contribui tanto para clarear a mente do que um objetivo claro."
}, {
  author: "Norman Vincent Peale",
  phrase: "Um único pensamento pode revolucionar sua vida."
}, {
  author: "John Tschohl",
  phrase: "Todo o marketing da sua empresa pode ser anulado por um único empregado grosseiro."
}, {
  author: "Coco Chanel",
  phrase: "O mais corajoso dos atos ainda é pensar com a própria cabeça."
}, {
  author: "João Guimar",
  phrase: "Mestre não é quem sempre ensina, mas quem de repente aprende."
}, {
  author: "Bertrand Russell",
  phrase: "É importante aprender a não se aborrecer com opiniões diferentes das suas."
}, {
  author: "Benjamin Franklin",
  phrase: "Toma conta do teu negócio ou ele tomará conta de ti."
}, {
  author: "Provérbio espanhol",
  phrase: "Perde tudo quem perde o momento certo."
}, {
  author: "Claus Moller",
  phrase: "Combata a mediocridade – em si e nos outros."
}, {
  author: "Dalai Lama",
  phrase: "Lembre-se que não conseguir o que você quer é algumas vezes um lance de sorte."
}, {
  author: "Carl Sewell",
  phrase: "Todos os sorrisos do mundo não irão ajudá-lo se o produto ou serviço não for o que o cliente deseja."
}, {
  author: "Leonard Berry",
  phrase: "Um serviço excelente é uma estratégia de lucro."
}, {
  author: "Carl Sandburg",
  phrase: "Não sei aonde vou, mas já estou no caminho."
}, {
  author: "Henry Ford",
  phrase: "O insucesso é uma oportunidade para recomeçar com mais inteligência."
}, {
  author: "Helen Keller",
  phrase: "A ciência poderá ter encontrado a cura para a maioria dos males, mas não achou ainda o remédio para o pior de todos: a apatia dos seres humanos."
}, {
  author: "Helen Keller",
  phrase: "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo."
}, {
  author: "Helen Keller",
  phrase: "Nunca se pode concordar em rastejar, quando se sente ímpeto de voar."
}, {
  author: "Helen Keller",
  phrase: "Tudo o que amamos profundamente converte-se em parte de nós mesmos."
}, {
  author: "Helen Keller",
  phrase: "Tenho o desejo de realizar uma tarefa importante na vida. Mas meu primeiro dever está em realizar humildes coisas como se fossem grandes e nobres."
}, {
  author: "Helen Keller",
  phrase: "As melhores e as mais lindas coisas do mundo não se podem ver nem tocar. Elas devem ser sentidas com o coração."
}, {
  author: "Helen Keller",
  phrase: "Nenhum pessimista jamais descobriu os segredos das estrelas, nem velejou a uma terra inexplorada, nem abriu um novo céu para o espírito."
}, {
  author: "Helen Keller",
  phrase: "Segurança é praticamente uma superstição. Vida é aventura ou nada."
}, {
  author: "Helen Keller",
  phrase: "O belo penetra por toda parte, mesmo no silêncio e nas trevas."
}, {
  author: "Helen Keller",
  phrase: "Que importa o sacrifício se a vitória é honrosa?."
}, {
  author: "Helen Keller",
  phrase: "Oh, criatura humana! Como podes abandonar teu irmão, fechando-lhe os caminhos da vida e pedir depois a Deus que te dê o pão de cada dia, se tu mesma negaste esse pão ao teu semelhante?."
}, {
  author: "Helen Keller",
  phrase: "Na conquista do belo, todo esforço é pouco."
}, {
  author: "Helen Keller",
  phrase: "Tenho o desejo de realizar uma tarefa importante na vida. Mas meu primeiro dever está em realizar humildes coisas como se fossem grandes e nobres."
}, {
  author: "Helen Keller",
  phrase: "Quando fazes o melhor que podes, nunca sabes qual milagre é forjado em tua vida ou na vida do outro."
}, {
  author: "Helen Keller",
  phrase: "O resultado mais sublime da educação é a tolerância."
}, {
  author: "Helen Keller",
  phrase: "Prefiro caminhar com um amigo no escuro, que sozinho na luz.."
}, {
  author: "John Lock",
  phrase: "Ler fornece ao espírito materiais para o conhecimento, mas só o pensar faz nosso o que lemos."
}, {
  author: "John Lock",
  phrase: "Sempre considerei as ações dos homens como as melhores intérpretes dos seus pensamentos."
}, {
  author: "John Lock",
  phrase: "A necessidade de procurar a verdadeira felicidade é o fundamento da nossa liberdade."
}, {
  author: "John Lock",
  phrase: "As novas opiniões são sempre suspeitas e geralmente opostas, por nenhum outro motivo além do fato de ainda não serem comuns."
}, {
  author: "John Lock",
  phrase: "É preciso metade do tempo para usar a outra."
}, {
  author: "John Lock",
  phrase: "O prazer e a dor, e os que os produzem, o bem e o mal, são os eixos em que assentam todas as nossas paixões."
}, {
  author: "John Lock",
  phrase: "Onde não há lei, não há liberdade."
}, {
  author: "John Lock",
  phrase: "O que te preocupa, te escraviza."
}, {
  author: "John Lock",
  phrase: "Uma coisa é demonstrar a um homem que ele está errado, outra é colocá-lo de posse da verdade."
}, {
  author: "John Lock",
  phrase: "Não se revolta um povo inteiro a não ser que a opressão seja geral."
}, {
  author: "John Lock",
  phrase: "A moda, em geral, nada mais é do que a ostentação da riqueza."
}, {
  author: "John Lock",
  phrase: "Não existe nada na mente já não tenha passado pelos sentidos."
}, {
  author: "John Lock",
  phrase: "⁠O mais precioso de todos os bens é o poder sobre nós mesmos."
}, {
  author: "Adam Smith",
  phrase: "A riqueza de uma nação se mede pela riqueza do povo e não pela riqueza dos príncipes."
}, {
  author: "Adam Smith",
  phrase: "O verdadeiro valor das coisas é o esforço e o problema de as adquirir."
}, {
  author: "Adam Smith",
  phrase: "A ambição universal do homem é colher o que nunca plantou."
}, {
  author: "Adam Smith",
  phrase: "O grande segredo da educação consiste em orientar a vaidade para os objetivos certos."
}, {
  author: "Adam Smith",
  phrase: "Felicidade é aquilo que ganhamos pelo agir."
}, {
  author: "Adam Smith",
  phrase: "A disposição em admirar e quase idolatrar os ricos e poderosos e, ao mesmo tempo, desprezar e negligenciar os pobres é a maior e mais universal causa de corrupção dos nossos sentimentos morais."
}, {
  author: "Adam Smith",
  phrase: "O homem é um animal que faz barganhas."
}, {
  author: "Adam Smith",
  phrase: "Governo civil, quando instituído somente para a proteção da propriedade privada, é na realidade instituído para a defesa dos ricos contra os pobres, dos que têm propriedade contra os que não têm."
}, {
  author: "Adam Smith",
  phrase: "Misericórdia para com os culpados é crueldade para com os inocentes."
}, {
  author: "Adam Smith",
  phrase: "Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos nosso jantar, mas da consideração que eles tem pelos próprios interesses. Apelamos não à sua humanidade, mas ao seu amor-próprio, e nunca falamos a eles das nossas próprias necessidades, mas das vantagens que eles podem obter."
}, {
  author: "Adam Smith",
  phrase: "Nenhuma nação pode florescer e ser feliz enquanto grande parte de seus membros for formada de pobres e miseráveis."
}, {
  author: "Ayn Randy",
  phrase: "Não se sacrifique por ninguém e muito menos espere que alguém se sacrifique por você.."
}, {
  author: "Ayn Rand",
  phrase: "Só existem duas formas de os homens lidarem uns com os outros: armas ou lógica. Força ou persuasão. Aqueles que sabem que não podem vencer por meio da lógica sempre recorrem às armas."
}, {
  author: "Ayn Rand",
  phrase: "Aprenda a valorizar a si mesmo, o que significa: lute pela sua felicidade."
}, {
  author: "Ayn Rand",
  phrase: "Liberdade (s.): Não pedir nada. Não esperar nada. Não depender de nada."
}, {
  author: "Ayn Rand",
  phrase: "O homem que não valoriza a si mesmo, não pode valorizar nada nem ninguém."
}, {
  author: "Ayn Rand",
  phrase: "Quando observares a corrupção a ser recompensada e a honestidade a converter-se em autossacrifício; então poderás constatar que a tua sociedade está condenada."
}, {
  author: "Ayn Rand",
  phrase: "A razão não é automática. Os que a negam não podem ser conquistados por ela."
}, {
  author: "Ayn Rand",
  phrase: "O racismo é a forma mais baixa e mais cruelmente primitiva de coletivismo. É a noção de atribuir significado moral, social ou político à linhagem genética de um homem - é a noção de que os traços caracterizadores e intelectuais de um homem são produzidos e transmitidos por sua química corporal interna. O que quer dizer, na prática, que um homem deve ser julgado, não por sua índole ou ações, mas pelas índoles e ações de um coletivo de antepassados."
}, {
  author: "Ayn Rand",
  phrase: "A verdade não está disponível para todos, apenas para os que a procuram."
}, {
  author: "Ayn Rand",
  phrase: "A riqueza é o produto da capacidade humana de pensar."
}, {
  author: "Ayn Rand",
  phrase: "Não cometa o erro dos ignorantes de pensar que um individualista é um homem que diz: Eu farei o que quiser às custas de todos. Um individualista é um homem que reconhece os direitos individuais inalienáveis​do homem – os seus próprios e os dos outros."
}, {
  author: "Karl Marx",
  phrase: "O caminho do inferno está pavimentado de boas intenções."
}, {
  author: "Karl Marx",
  phrase: "Se a aparência e a essência das coisas coincidissem, a ciência seria desnecessária."
}, {
  author: "Karl Marx",
  phrase: "O povo que subjuga outro forja suas próprias cadeias."
}, {
  author: "Karl Marx",
  phrase: "A razão sempre existiu, mas nem sempre de uma forma razoável."
}, {
  author: "Karl Marx",
  phrase: "Os homens fazem a sua própria história, mas não o fazem como querem... a tradição de todas as gerações mortas oprime como um pesadelo o cérebro dos vivos."
}, {
  author: "Karl Marx",
  phrase: "Cerque-se de pessoas que te fazem feliz. Pessoas que te fazem rir, que te ajudam quando você está precisando. Pessoas que realmente se importam. Eles são os que valem a pena manter em sua vida. Todo mundo está apenas passando."
}, {
  author: "Stephen King",
  phrase: "Uma criança, cega de nascença, só sabe de sua cegueira se alguém lhe conta."
}, {
  author: "Stephen King",
  phrase: "Não sabemos quanto tempo nos resta, não podemos desperdiçá-lo lamentando coisas que não podemos mudar."
}, {
  author: "Stephen King",
  phrase: "Você está certo! Mas pelos motivos errados! E isso faz com que você esteja totalmente errado!"
}, {
  author: "Stephen King",
  phrase: "Se você se irrita com os críticos, você pode ter certeza de que quase sempre eles estão certos."
}, {
  author: "Stephen King",
  phrase: "Só os inimigos dizem a verdade. Amigos e amantes, apanhados na teia da obrigação, mentem sem parar."
}, {
  author: "Stephen King",
  phrase: "Antes da vitória vem a tentação."
}, {
  author: "Stephen King",
  phrase: "Talento é mais barato que sal. O que separa a pessoa talentosa da bem-sucedida é muito trabalho duro."
}, {
  author: "Stephen King",
  phrase: "Estendemos o tempo como podemos, mas no fim o mundo leva tudo de volta."
}, {
  author: "Stephen King",
  phrase: "Antes da vitória vem a tentação. E quanto maior os louros a conquistar, maior a tentação a que é preciso resistir."
}, {
  author: "Stephen King",
  phrase: "Aquele que não consegue compartilhar seus próprios hábitos deveria abandoná-los."
}, {
  author: "Stephen King",
  phrase: "Você não precisa morrer feliz quando seu dia chegar, mas deve morrer em paz consigo mesmo, achando, ou melhor, sabendo que viveu sua vida do início ao fim..."
}, {
  author: "Stephen King",
  phrase: "É melhor ser bom que mau, mas o preço de ser bom é terrivelmente alto."
}, {
  author: "Stephen King",
  phrase: "As coisas mais importantes são as mais difíceis de dizer."
}, {
  author: "Stephen King",
  phrase: "Tudo fica bem mais difícil quando é de verdade."
}, {
  author: "Stephen King",
  phrase: "A estrada para o inferno é pavimentada de boas intenções."
}, {
  author: "Stephen King",
  phrase: "Vá embora e tente continuar a sorrir. Ouça um pouco de rock-and-roll no rádio e vá em direção a toda vida que existe com toda a coragem que você consegue reunir e toda a crença que tem. Seja verdadeiro, seja corajoso, enfrente. Todo o resto é escuridão."
}, {
  author: "Stephen King",
  phrase: "Inventamos horrores fictícios para nos ajudarem a suportar os reais."
}, {
  author: "Stephen King",
  phrase: "Amadores se sentam e esperam pela inspiração. O resto de nós apenas se levanta e vai trabalhar."
}, {
  author: "Stephen King",
  phrase: "Sozinho. Sim, essa é a palavra chave, a palavra mais terrível da língua inglesa. O assassinato não se compara a ela e o inferno é apenas um sinônimo pobre."
}, {
  author: "Stephen King",
  phrase: "Meu bolso estava vazio, mas a cabeça estava cheia de coisas que eu queria dizer e o coração cheio de histórias que queria contar."
}, {
  author: "Stephen King",
  phrase: "Escrever não é vida, mas acho que às vezes pode ser um caminho de volta à vida."
}, {
  author: "Stephen King",
  phrase: "As vezes, lugares humanos criam monstros desumanos."
}, {
  author: "Stephen King",
  phrase: "Você pode, você deve e se você for corajoso o suficiente para começar, você vai."
}, {
  author: "Stephen King",
  phrase: "Tempo, o grande ladrão da memória."
}, {
  author: "Stephen King",
  phrase: "Neste mundo, voce paga um preço todos os dias. As vezes gasta tudo o que tem."
}, {
  author: "Stephen King",
  phrase: "⁠Num mundo em que tantos já morreram,provocar mais morte é certamente o mais graves dos pecados."
}, {
  author: "Stephen King",
  phrase: "Compreendia muito bem que um homem defrontado pela opção entre orgulho e responsabilidade quase sempre escolhe o orgulho – se a responsabilidade rouba-lhe a masculinidade."
}, {
  author: "Stephen King",
  phrase: "Cavaleiros fazem desafios. Gente vulgar é que aposta."
}, {
  author: "Stephen King",
  phrase: "A crença é um obstáculo alto para se pular e acho que é ainda mais alto para as pessoas inteligentes. As pessoas inteligentes sabem muito, e talvez isso as faça achar que sabem tudo."
}, {
  author: "Stephen King",
  phrase: "A infelicidade anseia por companhia."
}, {
  author: "Ruy Barbosa",
  phrase: "A liberdade não é um luxo dos tempos de bonança; é, sobretudo, o maior elemento de estabilidade das instituições"
}, {
  author: "Ruy Barbosa",
  phrase: "Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!"
}, {
  author: "Ruy Barbosa",
  phrase: "A força do direito deve superar o direito da força."
}, {
  author: "Ruy Barbosa",
  phrase: "Não se deixem enganar pelos cabelos brancos, pois os canalhas também envelhecem."
}, {
  author: "Ruy Barbosa",
  phrase: "A justiça atrasada não é justiça; senão injustiça qualificada e manifesta."
}, {
  author: "Ruy Barbosa",
  phrase: "A justiça pode irritar porque é precária. A verdade não se impacienta porque é eterna."
}, {
  author: "Ruy Barbosa",
  phrase: "O Exército pode passar cem anos sem ser usado, mas não pode passar um minuto sem estar preparado."
}, {
  author: "Ruy Barbosa",
  phrase: "Não é a terra que constitui a riqueza das nações, e ninguém se convence de que a educação não tem preço."
}, {
  author: "Ruy Barbosa",
  phrase: "A palavra é o instrumento irresistível da conquista da liberdade."
}, {
  author: "Ruy Barbosa",
  phrase: "Quanto maior o bem, maior o mal que da sua inversão procede."
}, {
  author: "Ruy Barbosa",
  phrase: "O princípio dos Princípios é o respeito da consciência, o amor da verdade."
}, {
  author: "Ruy Barbosa",
  phrase: "Mas, se a sociedade não pode igualar os que a natureza criou desiguais, cada um, nos limites da sua energia moral, pode reagir sobre as desigualdades nativas, pela educação, atividade e perseverança."
}, {
  author: "Ruy Barbosa",
  phrase: "Não há nada mais relevante para a vida social que a formação do sentimento da justiça."
}, {
  author: "Ruy Barbosa",
  phrase: "Aos elogios do mundo, prefiro os aplausos da minha consciência."
}, {
  author: "Ruy Barbosa",
  phrase: "É preciso ser forte e consequente no bem, para não o ver degenerar em males inesperados."
}, {
  author: "Ruy Barbosa",
  phrase: "Onde quer que haja um direito individual violado, há de haver um recurso judicial para a debelação da injustiça; este, o princípio fundamental de todas as Constituições livres."
}, {
  author: "Ruy Barbosa",
  phrase: "As leis que não protegem nossos adversários não podem proteger-nos."
}, {
  author: "Ruy Barbosa",
  phrase: "Não falsifica a História somente quem inverte a verdade, senão também quem a omite."
}, {
  author: "Ruy Barbosa",
  phrase: "A miopia intelectual é a mais constante geradora do egoísmo."
}, {
  author: "Ruy Barbosa",
  phrase: "Cada atentado que se tolere à liberdade é um novo alimento que se administra à desordem."
}, {
  author: "Ruy Barbosa",
  phrase: "Os abusos são todos compadres uns dos outros, e vivem da proteção, que mutuamente se prestam."
}, {
  author: "Ruy Barbosa",
  phrase: "Todo o aprender, todo o melhorar, todo o viver é mudar."
}, {
  author: "Ruy Barbosa",
  phrase: "Habituai-vos a obedecer, para aprender a mandar. Costumai-vos a ouvir, para alcançar a entender."
}, {
  author: "Ruy Barbosa",
  phrase: "A pátria não é ninguem, são todos."
}, {
  author: "Ruy Barbosa",
  phrase: "Eu quisera, nos meus antagonistas, se não justiça para comigo, ao menos lógica na ligação entre as suas premissas e as suas conclusões."
}, {
  author: "Ruy Barbosa",
  phrase: "O indivíduo que trabalha acerca-se continuamente doauthorde todas as coisas, tomando na sua obra uma parte de que depende também a dele. O Criador começa e a criatura acaba a criação de si própria."
}, {
  author: "Ruy Barbosa",
  phrase: "Não há nada mais relevante para a vida social que a formação do sentimento da justiça."
}, {
  author: "Ruy Barbosa",
  phrase: "O que faz a justiça é o ser justo. Tão simples e tão banal. Tão puro."
}, {
  author: "Ruy Barbosa",
  phrase: "A liberdade da palavra forense, esse ofício sacerdotal do advogado."
}, {
  author: "Ruy Barbosa",
  phrase: "A violência é mãe da violência."
}, {
  author: "Stephen Hawking",
  phrase: "Olhe para as estrelas e não para os seus pés."
}, {
  author: "Stephen Hawking",
  phrase: "Somos apenas uma estirpe avançada de macacos em um planeta menor de uma estrela muito comum. Mas podemos entender o universo. Isto nos torna muito especiais."
}, {
  author: "Stephen Hawking",
  phrase: "Mulheres. Elas são um completo mistério."
}, {
  author: "Stephen Hawking",
  phrase: "O Nobel é dado apenas para trabalho teórico que foi confirmado pela observação. É muito, muito difícil observar as coisas em que trabalhei."
}, {
  author: "Stephen Hawking",
  phrase: "Minhas expectativas se reduziram a zero quando tinha 21 anos. O restante foi um presente."
}, {
  author: "Stephen Hawking",
  phrase: "A vítima deveria ter o direito de terminar sua vida, se quiser. Mas acho que seria um grande erro. Mesmo que a vida possa parecer ruim, sempre há algo que você pode fazer e ter sucesso. Enquanto há vida, há esperança."
}, {
  author: "Stephen Hawking",
  phrase: "O maior inimigo do conhecimento não é a ignorância, é a ilusão do conhecimento."
}, {
  author: "Stephen Hawking",
  phrase: "Vivo com a perspectiva de uma morte precoce há 49 anos. Não tenho medo de morrer, mas também não tenho pressa."
}, {
  author: "Stephen Hawking",
  phrase: "Pessoas que se vangloriam de seu QI são perdedoras."
}, {
  author: "Stephen Hawking",
  phrase: "Percebi que mesmo as pessoas que afirmam que tudo é determinado de antemão e que não podemos fazer nada para mudar, mesmo essas pessoas olham para os lados antes de atravessar a rua."
}, {
  author: "Stephen Hawking",
  phrase: "Meu objetivo é simples: É um entendimento completo do universo, por que ele é como ele é e por que ele existe afinal."
}, {
  author: "Stephen Hawking",
  phrase: "Estamos em risco de nos destruir por conta de nossa cobiça e estupidez. Não podemos permanecer olhando para dentro de nós em um planeta pequeno e crescentemente poluído e superpovoado."
}, {
  author: "Stephen Hawking",
  phrase: "Temos apenas esta vida para apreciar o grande projeto do Universo, e sou muito grato por isso."
}, {
  author: "Robert Frost",
  phrase: "Uma ideia é um feito de associação."
}, {
  author: "Robert Frost",
  phrase: "Nunca ousei ser um radical na juventude. Tinha medo de me tornar um conservador depois de velho."
}, {
  author: "Robert Frost",
  phrase: "Um diplomata é aquele que se lembra sempre do aniversário de uma mulher, mas nunca da sua idade."
}, {
  author: "Robert Frost",
  phrase: "Um júri é um grupo de pessoas escolhidas para decidir quem tem o melhor advogado."
}, {
  author: "Robert Frost",
  phrase: "O mundo está cheio de pessoas com vontade; algumas com vontade de trabalhar e as outras com vontade de as deixar trabalhar."
}, {
  author: "Robert Frost",
  phrase: "O amor é o desejo irresistível de ser irresistivelmente desejado."
}, {
  author: "Robert Frost",
  phrase: "Posso resumir em três palavras o que aprendi sobre a vida: a vida continua."
}, {
  author: "Robert Frost",
  phrase: "Antes de construir um muro pergunto sempre quem estou murando e quem estou deixando de fora."
}, {
  author: "Robert Frost",
  phrase: "A felicidade realiza em intensidade o que lhe falta em duração."
}, {
  author: "Robert Frost",
  phrase: "Quem sabe ler um bom poema deve poder dizer, no momento em que é por ele atingido, se recebeu ou não um golpe de que nunca mais se curará."
}, {
  author: "Robert Frost",
  phrase: "Eu tenho promessas a cumprir e milhas a percorrer antes de dormir."
}, {
  author: "Robert Frost",
  phrase: "Poesia é quando uma emoção encontra seu pensamento e o pensamento encontra palavras."
}, {
  author: "Robert Frost",
  phrase: "A razão pela qual a preocupação mata mais pessoas do que o trabalho é que as pessoas preocupam-se mais do que trabalham."
}, {
  author: "Robert Frost",
  phrase: "Se não há lágrimas no escritor, não há lágrimas no leitor. Nenhuma surpresa no escritor, nenhuma surpresa no leitor."
}, {
  author: "Robert Frost",
  phrase: "Se nós não pudéssemos rir estaríamos todos loucos."
}, {
  author: "Robert Frost",
  phrase: "Um poema começa com um nó na garganta, saudade de casa, saudade de amor."
}, {
  author: "Robert Frost",
  phrase: "A liberdade reside em ser corajoso."
}, {
  author: "Robert Frost",
  phrase: "Nunca derrube uma cerca até saber por que ela foi erguida."
}, {
  author: "Abraham Lincoln",
  phrase: "Não te esqueças que os estranhos são amigos que ainda não conheces."
}, {
  author: "Abraham Lincoln",
  phrase: "Só tem o direito de criticar aquele que pretende ajudar."
}, {
  author: "Abraham Lincoln",
  phrase: "Deus deve amar os homens medíocres. Fez vários deles."
}, {
  author: "Abraham Lincoln",
  phrase: "Quando pratico o bem, sinto-me bem; quando pratico o mal, sinto-me mal. Eis a minha religião."
}, {
  author: "Abraham Lincoln",
  phrase: "O campo da derrota não está povoado de fracassos, mas de homens que tombaram antes de vencer."
}, {
  author: "Abraham Lincoln",
  phrase: "Nenhum mentiroso tem uma memória suficientemente boa para ser um mentiroso de êxito."
}, {
  author: "Abraham Lincoln",
  phrase: "O meu pai ensinou-me a trabalhar; não me ensinou a amar o trabalho."
}, {
  author: "Abraham Lincoln",
  phrase: "O caráter é como uma árvore e a reputação como sua sombra. A sombra é o que nós pensamos dela; a árvore é a coisa real."
}, {
  author: "Abraham Lincoln",
  phrase: "Ninguém é suficientemente competente para governar outra pessoa sem o seu consentimento."
}, {
  author: "Abraham Lincoln",
  phrase: "O auto-respeito é a raiz da disciplina; a noção de dignidade cresce com a habilidade de dizer não a si mesmo."
}, {
  author: "Abraham Lincoln",
  phrase: "Nunca devemos mudar de cavalo no meio do rio."
}, {
  author: "Abraham Lincoln",
  phrase: "Não te esqueças que os estranhos são amigos que ainda não conheces."
}, {
  author: "Abraham Lincoln",
  phrase: "Só tem o direito de criticar aquele que pretende ajudar."
}, {
  author: "Benjamin Franklin",
  phrase: "As três coisas mais difíceis do mundo são: guardar um segredo, perdoar uma ofensa e aproveitar o tempo."
}, {
  author: "Benjamin Franklin",
  phrase: "Viver é enfrentar um problema atrás do outro. O modo como você o encara é que faz a diferença."
}, {
  author: "Benjamin Franklin",
  phrase: "Seja cortês com todos, sociável com muitos, íntimo de poucos, amigo de um e inimigo de nenhum."
}, {
  author: "Benjamin Franklin",
  phrase: "Toma conselhos com o vinho, mas toma decisões com a água."
}, {
  author: "Benjamin Franklin",
  phrase: "Se você pretende ser rico, pense em economizar tanto quanto em ganhar."
}, {
  author: "Benjamin Franklin",
  phrase: "Pessoas que são boas em arranjar desculpas raramente são boas em qualquer outra coisa."
}, {
  author: "Benjamin Franklin",
  phrase: "Ser humilde com os superiores é obrigação, com os colegas é cortesia, com os inferiores é nobreza."
}, {
  author: "Benjamin Franklin",
  phrase: "Escreve as ofensas na areia e os benefícios no mármore."
}, {
  author: "Benjamin Franklin",
  phrase: "Para quem ama, qualquer sacrifício é alegria."
}, {
  author: "Benjamin Franklin",
  phrase: "Aquele que tiver paciência terá o que deseja."
}, {
  author: "Abraham Lincoln",
  phrase: "O auto-respeito é a raiz da disciplina; a noção de dignidade cresce com a habilidade de dizer não a si mesmo."
}, {
  author: "Abraham Lincoln",
  phrase: "Ando devagar, mas nunca ando para trás."
}, {
  author: "Abraham Lincoln",
  phrase: "A perda de um inimigo não compensa a de um amigo."
}, {
  author: "Abraham Lincoln",
  phrase: "Você não consegue escapar da responsabilidade de amanhã esquivando-se dela hoje."
}, {
  author: "Abraham Lincoln",
  phrase: "Frequentemente é necessário mais coragem para ousar fazer certo do que temer fazer errado."
}, {
  author: "Abraham Lincoln",
  phrase: "Um boletim de voto tem mais força que um tiro de espingarda."
}, {
  author: "Abraham Lincoln",
  phrase: "O que mata uma doninha é a publicidade que faz a si própria."
}, {
  author: "Abraham Lincoln",
  phrase: "A maior habilidade de um líder é desenvolver habilidades extraordinárias em pessoas comuns."
}, {
  author: "Abraham Lincoln",
  phrase: "Senhor, minha preocupação não é se Deus está ao nosso lado; minha maior preocupação é estar ao lado de Deus, porque Deus é sempre certo."
}, {
  author: "Abraham Lincoln",
  phrase: "Para você que está chegando agora, criticando o que está feito, deveria estar aqui na hora de fazer. Não sejas um especialista em usar a crítica ao que está feito como pretexto para nada fazer."
}, {
  author: "Abraham Lincoln",
  phrase: "Para você que está chegando agora, criticando o que está feito, deveria estar aqui na hora de fazer. Não sejas um especialista em usar a crítica ao que está feito como pretexto para nada fazer."
}, {
  author: "Abraham Lincoln",
  phrase: "Tenha sempre em mente que a sua resolução de atingir o sucesso é mais importante do que qualquer coisa."
}, {
  author: "Abraham Lincoln",
  phrase: "A demagogia é a capacidade de vestir as idéias menores com palavras maiores."
}, {
  author: "Abraham Lincoln",
  phrase: "O amor é a coisa mais alegre. O amor é a coisa mais triste. O amor é a coisa que eu mais quero."
}, {
  author: "Abraham Lincoln",
  phrase: "Melhor permancer calado e que suspeitem tu insensatez, que falar e eliminar toda a dúvida disso."
}, {
  author: "Abraham Lincoln",
  phrase: "Não importa o ninho, se o ovo é de águia."
}, {
  author: "Abraham Lincoln",
  phrase: "As coisas chegam para aqueles que esperam, mas somente as coisas deixadas por aqueles que agem rápido."
}, {
  author: "Abraham Lincoln",
  phrase: "Gosto de ver um homem orgulhar-se do lugar onde vive. Gosto de ver um homem viver, de modo que seu lugar se orgulhe dele."
}, {
  author: "Abraham Lincoln",
  phrase: "Quem quer que você seja, seja alguém bom."
}, {
  author: "Abraham Lincoln",
  phrase: "O tempo não espera por homem nenhum."
}, {
  author: "Franklin D. Roosevelt",
  phrase: "Os únicos limites das nossas realizações de amanhã são as nossas dúvidas e hesitações de hoje."
}, {
  author: "Franklin D. Roosevelt",
  phrase: "É melhor morrer de pé do que viver de joelhos."
}, {
  author: "Franklin D. Roosevelt",
  phrase: "As pessoas perguntam qual é a diferença entre um líder e um chefe. O líder trabalha a descoberto, o chefe trabalha encapotado. O líder lidera, o chefe guia."
}, {
  author: "Franklin D. Roosevelt",
  phrase: "Acho que nós consideramos mais a boa sorte do pássaro que acordou cedo do que a má sorte da minhoca."
}, {
  author: "Franklin D. Roosevelt",
  phrase: "Os benefícios da instrução nunca são perdidos."
}, {
  author: "Franklin D. Roosevelt",
  phrase: "Um radical é um homem com os pés firmemente plantados no ar."
}, {
  author: "Franklin D. Roosevelt",
  phrase: "Não tenha medo de errar, pois você aprenderá a não cometer duas vezes o mesmo erro."
}, {
  author: "Franklin D. Roosevelt",
  phrase: "Faça algo e, se não conseguir, faça outra coisa. Mas, acima de tudo, tente algo."
}, {
  author: "Franklin D. Roosevelt",
  phrase: "Quando você chegar no fim de sua corda, dê um nó e segure-se."
}, {
  author: "Franklin D. Roosevelt",
  phrase: "É triste falhar na vida, porém mais triste ainda é não tentar vencer."
}, {
  author: "Jean-Paul Sartre",
  phrase: "O homem não é nada além do que faz de si mesmo."
}, {
  author: "Jean-Paul Sartre",
  phrase: "Se você está sozinho quando está sozinho, você está em má companhia."
}, {
  author: "Jean-Paul Sartre",
  phrase: "Estou sozinho no meio dessas vozes felizes e razoáveis. Todas essas criaturas passam o tempo explicando, percebendo alegremente que elas concordam umas com as outras. Em nome do Céu, por que é tão importante pensar as mesmas coisas todas juntas?"
}, {
  author: "Jean-Paul Sartre",
  phrase: "Quando os ricos estão em guerra, são os pobres que morrem."
}, {
  author: "Jean-Paul Sartre",
  phrase: "O importante não é aquilo que fazem de nós, mas o que nós mesmos fazemos do que os outros fizeram de nós."
}, {
  author: "Jean-Paul Sartre",
  phrase: "Nasci para satisfazer a grande necessidade que eu tinha de mim mesmo."
}, {
  author: "Jean-Paul Sartre",
  phrase: "O que não é terrível não é sofrer nem morrer, mas morrer em vão."
}, {
  author: "Jean-Paul Sartre",
  phrase: "A vida é o pânico num teatro sem chamas."
}, {
  author: "Jean-Paul Sartre",
  phrase: "Eu sempre posso escolher, mas devo saber que, se não escolher, ainda estou escolhendo."
}, {
  author: "Jean-Paul Sartre",
  phrase: "Palavras são armas carregadas."
}, {
  author: "Jean-Paul Sartre",
  phrase: "Detesto as vítimas quando elas respeitam os seus carrascos."
}, {
  author: "Jean-Paul Sartre",
  phrase: "A vida começa do outro lado do desespero."
}, {
  author: "Martin Luther King Jr.",
  phrase: "Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo."
}, {
  author: "Martin Luther King Jr.",
  phrase: "O que me preocupa não é o grito dos maus. É o silêncio dos bons."
}, {
  author: "Martin Luther King Jr.",
  phrase: "Se soubesse que o mundo se acaba amanhã, eu ainda hoje plantaria uma árvore."
}, {
  author: "Martin Luther King Jr.",
  phrase: "O que vale não é o quanto se vive; mas como se vive."
}, {
  author: "Martin Luther King Jr.",
  phrase: "Se lhe pedirem para ser varredor de ruas, varra as ruas como Michelangelo pintava, como Bethoven compunha ou como Shakespeare escrevia."
}, {
  author: "Martin Luther King Jr.",
  phrase: "A liberdade jamais é dada pelo opressor ela tem que ser conquistada pelo oprimido."
}, {
  author: "Martin Luther King Jr.",
  phrase: "A inteligência e o caráter são os objetivos da verdadeira educação."
}, {
  author: "Martin Luther King Jr.",
  phrase: "Temos de aprender a viver todos como irmãos ou morreremos todos como loucos."
}, {
  author: "Martin Luther King Jr.",
  phrase: "Ninguém montará em cima de nós se não nos curvarmos."
}, {
  author: "Martin Luther King Jr.",
  phrase: "Aprendemos a voar como os pássaros, a nadar como os peixes; mas não aprendemos a simple arte de vivermos junto como irmãos."
}, {
  author: "Martin Luther King Jr.",
  phrase: "Sempre é hora de fazer o que é certo."
}, {
  author: "Martin Luther King Jr.",
  phrase: "O amor é a unica força capaz de transformar um inimigo em amigo."
}, {
  author: "Martin Luther King Jr.",
  phrase: "Nada no mundo é mais perigoso que a ignorância sincera e a estupidez consciente."
}, {
  author: "Martin Luther King Jr.",
  phrase: "Mesmo as noites totalmente sem estrelas podem anunciar a aurora de uma grande realização."
}, {
  author: "Martin Luther King Jr.",
  phrase: "A injustiça em qualquer lugar é uma ameaça à justiça em todo lugar."
}, {
  author: "Martin Luther King Jr.",
  phrase: "Uma das coisas importantes da não violência é que não busca destruir a pessoa, mas transformá-la."
}, {
  author: "Malcolm X",
  phrase: "A mais perigosa criação no mundo, em qualquer sociedade, é um homem sem nada a perder."
}, {
  author: "Malcolm X",
  phrase: "As únicas pessoas que realmente mudaram a história foram os que mudaram o pensamento dos homens a respeito de si mesmos."
}, {
  author: "Malcolm X",
  phrase: "Não se pode separar paz de liberdade porque ninguém consegue estar em paz a menos que tenha sua liberdade."
}, {
  author: "Malcolm X",
  phrase: "A educação é o nosso passaporte para o futuro, pois o amanhã pertence às pessoas que se preparam hoje."
}, {
  author: "Malcolm X",
  phrase: "Sou a favor da verdade, não importa quem a conte. Sou a favor da justiça, não importa para quem ou contra quem."
}, {
  author: "Fernando Pessoa",
  phrase: "Tenho em mim todos os sonhos do mundo."
}, {
  author: "Fernando Pessoa",
  phrase: "Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido."
}, {
  author: "Fernando Pessoa",
  phrase: "A arte é a autoexpressão lutando para ser absoluta."
}, {
  author: "Fernando Pessoa",
  phrase: "A arte é a autoexpressão lutando para ser absoluta."
}, {
  author: "Fernando Pessoa",
  phrase: "Considerar a nossa maior angústia como um incidente sem importância, não só na vida do universo mas da nossa mesma alma, é o princípio da sabedoria."
}, {
  author: "Fernando Pessoa",
  phrase: "Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar. Que queres que te diga, além de que te amo, se o que quero dizer-te é que te amo?"
}, {
  author: "Fernando Pessoa",
  phrase: "Deus quer, o homem sonha, a obra nasce."
}, {
  author: "Fernando Pessoa",
  phrase: "Sinto-me nascido a cada momento para a eterna novidade do mundo."
}, {
  author: "Fernando Pessoa",
  phrase: "Precisar de dominar os outros é precisar dos outros. O chefe é um dependente."
}, {
  author: "Fernando Pessoa",
  phrase: "As nações são todas mistérios. Cada uma é todo o mundo a sós."
}, {
  author: "Fernando Pessoa",
  phrase: "Não é por nada que olho: é que eu gosto de ver as pessoas sendo."
}, {
  author: "Fernando Pessoa",
  phrase: "O verdadeiro cadáver não é o corpo (...), mas aquilo que deixou de viver."
}, {
  author: "Charles Chaplin",
  phrase: "A persistência é o caminho do êxito."
}, {
  author: "Charles Chaplin",
  phrase: "A vida é maravilhosa se não se tem medo dela."
}, {
  author: "Charles Chaplin",
  phrase: "Pensamos demasiadamente e sentimos muito pouco. Necessitamos mais de humildade que de máquinas. Mais de bondade e ternura que de inteligência. Sem isso, a vida se tornará violenta e tudo se perderá."
}, {
  author: "Charles Chaplin",
  phrase: "Creio no riso e nas lágrimas como antídotos contra o ódio e o terror."
}, {
  author: "Charles Chaplin",
  phrase: "Num filme o que importa não é a realidade, mas o que dela possa extrair a imaginação."
}, {
  author: "Charles Chaplin",
  phrase: "A beleza é a única coisa preciosa na vida. É difícil encontrá-la, mas quem consegue descobre tudo."
}, {
  author: "Charles Chaplin",
  phrase: "O assunto mais importante do mundo pode ser simplificado até ao ponto em que todos possam apreciá-lo e compreendê-lo. Isso é - ou deveria ser - a mais elevada forma de arte."
}, {
  author: "Charles Chaplin",
  phrase: "Você nunca achará o arco-íris, se você estiver olhando para baixo."
}, {
  author: "Charles Chaplin",
  phrase: "Não preciso me drogar para ser um gênio; Não preciso ser um gênio para ser humano; Mas preciso do seu sorriso para ser feliz."
}, {
  author: "Charles Chaplin",
  phrase: "Cada segundo é tempo para mudar tudo para sempre."
}, {
  author: "Charles Chaplin",
  phrase: "Nada é permanente nesse mundo cruel. Nem mesmo os nossos problemas."
}, {
  author: "Voltaire",
  phrase: "Devemos julgar um homem mais pelas suas perguntas que pelas respostas."
}, {
  author: "Voltaire",
  phrase: "Devemos julgar um homem mais pelas suas perguntas que pelas respostas."
}, {
  author: "Voltaire",
  phrase: "Uma discussão prolongada significa que ambas as partes estão erradas."
}, {
  author: "Voltaire",
  phrase: "Todas as grandezas do mundo não valem um bom amigo."
}, {
  author: "Voltaire",
  phrase: "O orgulho dos pequenos consiste em falar sempre de si próprios; o dos grandes em nunca falar de si."
}, {
  author: "Voltaire",
  phrase: "Encontra-se oportunidade para fazer o mal cem vezes por dia e para fazer o bem uma vez por ano."
}, {
  author: "Voltaire",
  phrase: "A esperança é um alimento da nossa alma, ao qual se mistura sempre o veneno do medo."
}, {
  author: "Voltaire",
  phrase: "O mais competente não discute, domina a sua ciência e cala-se."
}, {
  author: "Voltaire",
  phrase: "Como é duro odiar os que se gostaria de amar."
}, {
  author: "Voltaire",
  phrase: "O trabalho poupa-nos de três grandes males: tédio, vício e necessidade."
}, {
  author: "Voltaire",
  phrase: "As paixões são os ventos que enfunam as velas dos barcos, elas fazem-nos naufragar, por vezes, mas sem elas, eles não poderiam singrar."
}, {
  author: "Voltaire",
  phrase: "O segredo de aborrecer é dizer tudo."
}, {
  author: "Edmund Burke",
  phrase: "Não se pode planejar o futuro pelo passado."
}, {
  author: "Edmund Burke",
  phrase: "Ninguém comete erro maior do que não fazer nada porque só pode fazer um pouco."
}, {
  author: "Edmund Burke",
  phrase: "É um erro popular muito comum acreditar que aqueles que fazem mais barulho a lamentarem-se a favor do público sejam os mais preocupados com o seu bem-estar..."
}, {
  author: "Edmund Burke",
  phrase: "Não há conhecimento que não tenha valor."
}, {
  author: "Edmund Burke",
  phrase: "Todos os opressores atribuem a frustração dos seus desejos à falta de rigor suficiente. Por isso eles redobram os esforços da sua impotente crueldade."
}, {
  author: "Simone Weil",
  phrase: "A beleza é a harmonia entre o acaso e o bem."
}, {
  author: "Simone Weil",
  phrase: "O bem é aquilo que dá maior realidade aos seres e às coisas; o mal é aquilo que disso os priva."
}, {
  author: "Simone Weil",
  phrase: "A amizade não se busca, não se sonha, não se deseja; ela exerce-se (é uma virtude)."
}, {
  author: "Simone Weil",
  phrase: "É necessário realizar o possível para tocar o impossível."
}, {
  author: "Simone Weil",
  phrase: "Jesus quer que a verdade seja preferida a Ele porque antes de ser Cristo Ele é a verdade. Se alguém se distancia dele para ir a verdade, não dará muitos passos sem cair sem seus braços."
}, {
  author: "Simone Weil",
  phrase: "A dor é a origem do conhecimento."
}, {
  author: "Simone de Beauvoir",
  phrase: "O segredo da felicidade e o cúmulo da arte é viver como todo mundo e ser como ninguém."
}, {
  author: "Simone de Beauvoir",
  phrase: "Querer ser livre é também querer livres os outros."
}, {
  author: "Simone de Beauvoir",
  phrase: "Não se pode escrever nada com indiferença."
}, {
  author: "Simone de Beauvoir",
  phrase: "É pelo trabalho que a mulher vem diminuindo a distância que a separava do homem, somente o trabalho poderá garantir-lhe uma independência concreta."
}, {
  author: "Simone de Beauvoir",
  phrase: "Em todas as lágrimas há uma esperança."
}, {
  author: "Simone de Beauvoir",
  phrase: "Renunciar ao amor parecia-me tão insensato como desinteressarmo-nos da saúde porque acreditamos na eternidade."
}, {
  author: "Simone de Beauvoir",
  phrase: "Toda opressão cria um estado de guerra; essa não é a exceção."
}, {
  author: "Simone de Beauvoir",
  phrase: "Conhecimento próprio não é garantia de felicidade, mas isso está ao lado da felicidade e pode fornecer a coragem para lutar por ela."
}, {
  author: "Simone de Beauvoir",
  phrase: "Todas as vitórias ocultam uma abdicação."
}, {
  author: "Simone de Beauvoir",
  phrase: "Por vezes a palavra representa um modo mais hábil de se calar do que o silêncio."
}, {
  author: "Simone de Beauvoir",
  phrase: "É horrível assistir à agonia de uma esperança."
}, {
  author: "Winston Churchill",
  phrase: "A democracia é a pior forma de governo, exceto todas as outras que foram tentadas."
}, {
  author: "Winston Churchill",
  phrase: "O vício inerente ao capitalismo é a distribuição desigual de benesse; o do socialismo é a distribuição por igual das misérias."
}, {
  author: "Winston Churchill",
  phrase: "Todas as grandes coisas são simples. E muitas podem ser expressas numa só palavra: liberdade; justiça; honra; dever; piedade; esperança."
}, {
  author: "Winston Churchill",
  phrase: "A vida dá lições que só se dão uma vez."
}, {
  author: "Winston Churchill",
  phrase: "Os problemas da vitória são mais agradáveis que os problemas da derrota, mas não são menos difíceis."
}, {
  author: "Winston Churchill",
  phrase: "Na guerra a pessoa só pode ser morta uma vez, mas na política diversas vezes."
}, {
  author: "Winston Churchill",
  phrase: "O sucesso é ir de fracasso em fracasso sem perder entusiasmo."
}, {
  author: "Winston Churchill",
  phrase: "Uma mentira dá uma volta inteira ao mundo antes mesmo de a verdade ter oportunidade de se vestir."
}, {
  author: "Winston Churchill",
  phrase: "O que eu espero, senhores, é que depois de um razoável período de discussão, todo mundo concorde comigo."
}, {
  author: "Winston Churchill",
  phrase: "Fanático é alguém que não muda de ideia e não muda de assunto."
}, {
  author: "Winston Churchill",
  phrase: "Eu não sou exigente, eu me contento com o que há de melhor."
}, {
  author: "Thomas Hobbes",
  phrase: "Aqueles que concordam com uma opinião chamam-lhe opinião; mas os que discordam chamam-lhe heresia."
}, {
  author: "Thomas Hobbes",
  phrase: "Primeiro viver, depois filosofar."
}, {
  author: "Thomas Hobbes",
  phrase: "A experiência não leva a conclusões universais."
}, {
  author: "Thomas Hobbes",
  phrase: "O homem é lobo do homem, em guerra de todos contra todos."
}, {
  author: "Thomas Hobbes",
  phrase: "Pertence a cada homem só aquilo que ele é capaz de conseguir, e apenas enquanto for capaz de conservá-lo. É esta condição miserável que o homem realmente se encontra, por obra da simples natureza."
}, {
  author: "Thomas Hobbes",
  phrase: "A razão é o passo, o aumento da ciência o caminho, e o benefício da humanidade é o fim."
}, {
  author: "Thomas Hobbes",
  phrase: "As duas virtudes cardinais da guerra: força e fraude."
}, {
  author: "Thomas Hobbes",
  phrase: "Temos uma opinião parcial de nós mesmos."
}, {
  author: "Thomas Hobbes",
  phrase: "Minha mãe pariu gêmeos, eu e o medo."
}, {
  author: "Oscar Wilde",
  phrase: "Para ser popular, é preciso ser medíocre."
}, {
  author: "Oscar Wilde",
  phrase: "Qualquer retrato pintado com sentimento, é um retrato não do modelo, mas do artista."
}, {
  author: "Oscar Wilde",
  phrase: "A única maneira de se livrar de uma tentação é ceder a ela."
}, {
  author: "Oscar Wilde",
  phrase: "Dizer que um livro é moral ou imoral não faz sentido, um livro é bem ou mal escrito, apenas isso."
}, {
  author: "Oscar Wilde",
  phrase: "Experiência é o nome que todos dão aos seus erros."
}, {
  author: "Oscar Wilde",
  phrase: "Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe."
}, {
  author: "Oscar Wilde",
  phrase: "Quando eu era jovem, pensava que o dinheiro era a coisa mais importante do mundo. Hoje, tenho certeza."
}, {
  author: "Oscar Wilde",
  phrase: "Se soubéssemos quantas e quantas vezes as nossas palavras são mal interpretadas, haveria muito mais silêncio neste mundo."
}, {
  author: "Oscar Wilde",
  phrase: "Aqueles que não fazem nada estão sempre dispostos a criticar os que fazem algo."
}, {
  author: "Oscar Wilde",
  phrase: "Os velhos acreditam em tudo, as pessoas de meia idade suspeitam de tudo, os jovens sabem tudo."
}, {
  author: "Oscar Wilde",
  phrase: "Fazer parte da sociedade é uma amolação, mas estar excluído dela é uma tragédia."
}, {
  author: "Oscar Wilde",
  phrase: "Nunca ame ninguém que o trata como se você fosse comum."
}, {
  author: "Oscar Wilde",
  phrase: "A melhor maneira de começar uma amizade é com uma boa gargalhada. De terminar com ela, também."
}, {
  author: "Oscar Wilde",
  phrase: "Ele não tem inimigos, mas é intensamente odiado por seus amigos."
}, {
  author: "Mozi",
  phrase: "Isso beneficia as pessoas? Então faça. Isso não beneficia as pessoas? Então pare."
}, {
  author: "Mozi",
  phrase: "Os vários senhores, não se importando uns com os outros, inevitavelmente vão para a guerra; chefes de clãs, não se importando uns com os outros, inevitavelmente se subvertem; pessoas que não se importam umas com as outras, elas inevitavelmente se machucam"
}, {
  author: "Lao-Tsé",
  phrase: "As palavras verdadeiras não são agradáveis e as agradáveis não são verdadeiras."
}, {
  author: "Lao-Tsé",
  phrase: "É fácil apagar as pegadas; difícil, porém, é caminhar sem pisar o chão."
}, {
  author: "Lao-Tsé",
  phrase: "Quem conhece a sua ignorância revela a mais profunda sapiência. Quem ignora a sua ignorância vive na mais profunda ilusão."
}, {
  author: "Lao-Tsé",
  phrase: "Aquele que se eleva nas pontas dos pés não está seguro."
}, {
  author: "Dito Popular",
  phrase: "A verdade ilumina a mente, mas nem sempre traz felicidade ao seu coração."
}, {
  author: "Dito Popular",
  phrase: "Uma lição aprendida é melhor do que uma contada."
}, {
  author: "Dito Popular",
  phrase: "Às vezes, aceitar ajuda é mais difícil do que oferecê-la."
}, {
  author: "Dito Popular",
  phrase: "Fácil nem sempre é simples."
}, {
  author: "Dito Popular",
  phrase: "Somente através do fogo uma espada forte é forjada."
}, {
  author: "Dito Popular",
  phrase: "Aprenda com o passado, mas viva para o futuro."
}, {
  author: "Protágoras de Abdera",
  phrase: "O homem é a medida de todas as coisas."
}, {
  author: "Protágoras de Abdera",
  phrase: "Todo o argumento permite sempre a discussão de duas teses contrárias, inclusive este de que a tese favorável e contrária são igualmente defensáveis."
}, {
  author: "Malala Yousafzai",
  phrase: "Uma criança, um professor, um livro, uma caneta pode mudar o mundo."
}, {
  author: "Malala Yousafzai",
  phrase: "O Talibã pode tirar nossos livros e canetas, mas não pode impedir nossa mente de pensar."
}, {
  author: "Malala Yousafzai",
  phrase: "Com armas, você pode matar terroristas. Com educação, você pode acabar com o terrorismo."
}, {
  author: "Erasmo de Roterdã",
  phrase: "A pior das loucuras é, sem dúvida, tentar ser sensato em um mundo de loucos."
}, {
  author: "Erasmo de Roterdã",
  phrase: "Quando tenho um pouco de dinheiro, compro livros. Se sobrar algum, compro roupas e comida."
}, {
  author: "Erasmo de Roterdã",
  phrase: "Quando tenho um pouco de dinheiro, compro livros. Se sobrar algum, compro roupas e comida."
}, {
  author: "Erasmo de Roterdã",
  phrase: "Quando tenho um pouco de dinheiro, compro livros. Se sobrar algum, compro roupas e comida."
}, {
  author: "Erasmo de Roterdã",
  phrase: "Rir de tudo é coisa dos tontos, mas não rir de nada é coisa dos estúpidos."
}, {
  author: "Erasmo de Roterdã",
  phrase: "Deus, arquitecto do universo, proibiu o homem de provar os frutos da árvore da ciência, como se a ciência fosse um veneno para a felicidade."
}, {
  author: "Erasmo de Roterdã",
  phrase: "Deus, arquitecto do universo, proibiu o homem de provar os frutos da árvore da ciência, como se a ciência fosse um veneno para a felicidade."
}, {
  author: "Erasmo de Roterdã",
  phrase: "Aquele que conhece a arte de viver consigo próprio ignora o aborrecimento."
}, {
  author: "Erasmo de Roterdã",
  phrase: "Se colocares numa parte da balança as vantagens e na outra as desvantagens, perceberás que uma paz injusta é muito melhor do que uma guerra justa."
}, {
  author: "Erasmo de Roterdã",
  phrase: "Deve respeitar-se o casamento enquanto é um purgatório, e dissolvê-lo quando se tornar num inferno."
}, {
  author: "Erasmo de Roterdã",
  phrase: "Os maiores males infiltram-se na vida dos homens sob a ilusória aparência do bem."
}, {
  author: "Charles Bukowski",
  phrase: "Por mínimo que seja o que um homem possua, sempre descobre que pode contentar-se ainda com menos."
}, {
  author: "Charles Bukowski",
  phrase: "Nunca me senti só. Gosto de estar comigo mesmo. Sou a melhor forma de entretenimento que posso encontrar."
}, {
  author: "Charles Bukowski",
  phrase: "Não, eu não odeio as pessoas. Só prefiro quando elas não estão por perto."
}, {
  author: "Charles Bukowski",
  phrase: "É este o problema com a bebida, pensei, enquanto me servia dum copo. Se acontece algo de mau, bebe-se para esquecer; se acontece algo de bom,bebe-se para celebrar, e se nada acontece, bebe-se para que aconteça qualquer coisa."
}, {
  author: "Charles Bukowski",
  phrase: "Se você vai tentar, vá até o fim, caso contrário, nem comece."
}, {
  author: "Charles Bukowski",
  phrase: "Um intelectual é um homem que diz uma coisa simples de uma maneira difícil; um artista é um homem que diz uma coisa difícil de uma maneira simples."
}, {
  author: "Charles Bukowski",
  phrase: "O indivíduo bem equilibrado é insano."
}, {
  author: "Pablo Neruda",
  phrase: "A verdade é que não há verdade."
}, {
  author: "Pablo Neruda",
  phrase: "Dois amantes felizes não têm fim nem morte, nascem e morrem tanta vez enquanto vivem, são eternos como é a natureza."
}, {
  author: "Pablo Neruda",
  phrase: "Te amo sem saber como, nem quando, nem onde, te amo diretamente sem problemas nem orgulho: assim te amo porque não sei amar de outra maneira."
}, {
  author: "Pablo Neruda",
  phrase: "Você é livre para fazer suas escolhas, mas é prisioneiro das consequências."
}, {
  author: "Pablo Neruda",
  phrase: "A timidez é uma condição alheia ao coração, uma categoria, uma dimensão que desemboca na solidão."
}, {
  author: "Pablo Neruda",
  phrase: "Amar é breve, esquecer é demorado."
}, {
  author: "Pablo Neruda",
  phrase: "Algum dia em qualquer parte, em qualquer lugar indefectivelmente te encontrarás a ti mesmo, e essa, só essa, pode ser a mais feliz ou a mais amarga de tuas horas."
}, {
  author: "Pablo Neruda",
  phrase: "Podes cortar todas as flores mas não podes impedir a Primavera de aparecer."
}, {
  author: "Pablo Neruda",
  phrase: "Não há silêncio que não termine."
}, {
  author: "Pablo Neruda",
  phrase: "Se sou esquecido, devo esquecer também."
}, {
  author: "xkcd",
  phrase: "Esta citação só parece profunda quando está em uma fonte de script durante o pôr do sol."
}, {
  author: "Dave Lewis",
  phrase: "Eu nunca peço perdão. Desculpe, mas é assim que eu sou."
}]