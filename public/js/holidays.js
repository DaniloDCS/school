const holidays = [{
  month: 'Janeiro',
  num: 1,
  holidays: [{
    day: 1,
    title: 'Ano Novo',
    description: 'Confraternização Universal',
    type: 'Feriado Nacional',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Fevereiro',
  num: 2,
  holidays: [{
    day: 12,
    title: 'Carnaval',
    description: 'Carnaval',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 13,
    title: 'Carnaval',
    description: 'Carnaval',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 14,
    title: 'Quarta-feira de Cinzas',
    description: 'Quarta-feira de Cinzas',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Março',
  num: 3,
  holidays: [{
    day: 29, 
    title: 'Sexta-feira Santa',
    description: 'Paixão de Cristo',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Abril',
  num: 4,
  holidays: [{
    day: 21,
    title: 'Tiradentes',
    description: 'Tiradentes',
    type: 'Feriado Nacional',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Maio',
  num: 5,
  holidays: [{
    day: 1,
    title: 'Dia do Trabalho',
    description: 'Dia do Trabalho',
    type: 'Feriado Nacional',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 30,
    title: 'Corpus Christi',
    description: 'Corpus Christi',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Junho',
  num: 6,
  holidays: [{
    day: 12,
    title: 'Dia dos Namorados',
    description: 'Dia dos Namorados',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 13,
    title: 'Santo Antônio',
    description: 'Santo Antônio',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  } , {
    day: 24,
    title: 'São João',
    description: 'São João',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Julho',
  num: 7,
  holidays: [{
    day: 9,
    title: 'Revolução Constitucionalista de 1932',
    description: 'Revolução Constitucionalista de 1932',
    type: 'Feriado Estadual',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Agosto',
  num: 8,
  holidays: [{
    day: 15,
    title: 'Dia da Assunção de Nossa Senhora',
    description: 'Dia da Assunção de Nossa Senhora',
    type: 'Feriado Nacional',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Setembro',
  num: 9,
  holidays: [{
    day: 7,
    title: 'Independência do Brasil',
    description: 'Independência do Brasil',
    type: 'Feriado Nacional',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Outubro',
  num: 10,
  holidays: [{
    day: 12,
    title: 'Nossa Senhora Aparecida',
    description: 'Nossa Senhora Aparecida',
    type: 'Feriado Nacional',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 15,
    title: 'Dia do Professor',
    description: 'Dia do Professor',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 28,
    title: 'Dia do Servidor Público',
    description: 'Dia do Servidor Público',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 31,
    title: 'Dia das Bruxas',
    description: 'Dia das Bruxas',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Novembro',
  num: 11,
  holidays: [{
    day: 2,
    title: 'Finados',
    description: 'Finados',
    type: 'Feriado Nacional',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 15,
    title: 'Proclamação da República',
    description: 'Proclamação da República',
    type: 'Feriado Nacional',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 20,
    title: 'Dia da Consciência Negra',
    description: 'Dia da Consciência Negra',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }] 
}, {
  month: 'Dezembro',
  num: 12,
  holidays: [{
    day: 24,
    title: 'Véspera de Natal',
    description: 'Véspera de Natal',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 25,
    title: 'Natal',
    description: 'Natal',
    type: 'Feriado Nacional',
    timeStart: '00:00',
    timeFinish: '23:59'
  }, {
    day: 31,
    title: 'Véspera de Ano Novo',
    description: 'Véspera de Ano Novo',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}];

// 0 - domingo, 1 - segunda, 2 - terça, 3 - quarta, 4 - quinta, 5 - sexta, 6 - sábado

const holidaysMovables = [{
  month: 'Maio',
  num: 5,
  holidays: [{
    day: 0,
    sequence: 2,
    title: 'Dia das Mães',
    description: 'Dia das Mães',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}, {
  month: 'Agosto',
  num: 8,
  holidays: [{
    day: 0,
    sequence: 2,
    title: 'Dia dos Pais',
    description: 'Dia dos Pais',
    type: 'Facultativo',
    timeStart: '00:00',
    timeFinish: '23:59'
  }]
}];

