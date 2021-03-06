export default {
  translationBy: 'Mark W. Datysgeld',
  languageId: 'pt', // ? ISO 639-1:2002
  // ? For reference please see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and for localized versions see https://en.wikipedia.org/wiki/Language_localisation
  header: {
    version: 'BETA',
    totals: {
      territoriesLockdown: 'TERRITÓRIOS EM LOCKDOWN',
      peopleAffected: 'PESSOAS AFETADAS',
      cases: 'CASOS REPORTADOS',
      deaths: 'MORTES REPORTADAS',
    },
  },
  menu: {
    informationSection: {
      banner: 'O Project Lockdown está atualmente em versão Beta. Nem todos dados estão disponíveis no momento.',
      main: {
        name: 'Project Lockdown ',
        text:
          'fornece o mapeamento de diferentes NPIs (Intervenções Não Farmacêuticas) aplicadas pelo mundo em resposta à crise da COVID-19, com o objetivo de visualizar o sucesso de diferentes medidas de resposta à pandemia, monitorar efeitos sob Direitos Humanos e Digitas, e clarificar medidas de avaliação.',
      },
      about: {
        title: 'Sobre',
        text: {
          p1:
            'Lockdowns, quarentenas, e medidas de isolamento foram implementados pelo globo para reduzir o avanço da COVID-19 e reduzir seu peso na infraestrutura médica.',
          p2:
            'empodera cidadãos, jornalistas, e defensores de direitos humanos para que facilmente analisem os efeitos sociais e políticos dessas medidas. Fundamentado em valores de transparência e accountability,',
          p3: 'é comprometido a prover os cidadãos do mundo com as ferramentas que precisam para ficarem seguros e informados.',
        },
      },
      sources: {
        title: 'Fontes',
        subtitle:
          'combina mútliplas fontes confiáveis para garantir que os dados utilizados são verificáveis e corretos. Você pode checar nossa lista de fontes aqui:',
        linksList: {
          first: {
            linkTitle: 'Banco de dados do Project Lockdown',
            text: '(Coletados de várias fontes de NPIs)',
          },
          second: {
            linkTitle: 'Coronavirus COVID19 API',
            text: '(Dados originários de',
            highlight: 'Johns Hopkins CSSE)',
          },
        },
        issues: {
          text: 'Se encontrar algum erro, por favor nos ajude e reporte',
          highlight: 'criando uma Issue aqui',
        },
      },
      credits: {
        title: 'Créditos',
        text:
          'é uma iniciativa de Civic Tech tornada possível por uma série de indivíduos e organizações comprometidas. Veja a lista de contribuidores',
        highlight: 'aqui',
      },
      dataPrivacity: {
        title: 'Dados & Privacidade',
        paragraphs: {
          p1: 'Não coletamos nenhum dado pessoal de nossos visitantes.',
          p2: 'Qualquer informação sobre membros do projeto é provida mediante consentimento prévio.',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: 'Trocar',
        dark: 'Modo Escuro',
        light: 'Modo Claro',
      },
      geolocation: 'Permitir geolocalização',
      app: {
        install: 'Instalar aplicativo',
        update: 'Atualizar aplicativo',
      },
    },
  },
  tdo: {
    tabs: {
      dailyLife: {
        name: 'Vida Diária',
        subtitle: 'Daily life (restrictions)',
        noResults: 'N/D',
        stats: {
          population: 'População',
          max_assembly: 'Congregação máxima',
          cases: 'Casos',
          recoveries: 'Recuperações',
          deaths: 'Mortes',
        },
        measureValues: {
          '1': 'TOTAL',
          '2': 'PARCIAL',
          '3': 'NENHUM',
          '4': 'NÃO ESTÁ CLARO',
        },
        measures: {
          home: 'Ficar em casa',
          homeShortVersion: 'Ficar em casa',
          shopping: 'Fazer compras',
          shoppingShortVersion: 'Fazer compras',
          outdoors: 'Passear',
          outdoorsShortVersion: 'Passear',
          military: 'Presença militar',
          militaryShortVersion: 'Presença militar',
          religious: 'Culto religioso',
          religiousShortVersion: 'Culto religioso',
          electricity: 'Electricidade',
          electricityShortVersion: 'Electricidade',
          work: 'Ir ao trabalho',
          workShortVersion: 'Ir ao trabalho',
          water: 'Água',
          waterShortVersion: 'Água',
          schools: 'Ir à escola',
          schoolsShortVersion: 'Ir à escola',
          internet: 'Telecomunicações',
          internetShortVersion: 'Telecomunicações',
        },
      },
      mobility: {
        name: 'Mobilidade',
        subtitle: 'Transporte (restrições)',
        measureValues: {
          '1': 'TOTAL',
          '2': 'PARCIAL',
          '3': 'NENHUM',
          '4': 'NÃO ESTÁ CLARO',
        },
        measures: {
          commerce: 'Comércio',
          commerceShortVersion: 'Comércio',
          foreignersInbound: 'Estrangeiros (pra dentro)',
          foreignersInboundShortVersion: 'Estrangeiros (pra dentro)',
          foreignersOutbound: 'Estrangeiros (pra fora)',
          foreignersOutboundShortVersion: 'Estrangeiros (pra fora)',
          local: 'Entre cidades',
          localShortVersion: 'Entre cidades',
          nationalsInbound: 'Nacionais (pra dentro)',
          nationalsInboundShortVersion: 'Nacionais (pra dentro)',
          nationalsOutbound: 'Nacionais (pra fora)',
          nationalsOutboundShortVersion: 'Nacionais (pra fora)',
          stopovers: 'Paradas',
          stopoversShortVersion: 'Paradas',
          crossBorderWorkers: 'Trabalhadores transfronteiriços',
          crossBorderWorkersShortVersion: 'Trabalhadores transfronteiriços',
        },
      },
      reports: {
        name: 'Relatórios',
        subtitle: 'Em Breve',
      },
    },
  },
  mapLegend: {
    no: 'SEM LOCKDOWN',
    partial: 'LOCKDOWN PARCIAL',
    full: 'LOCKDOWN TOTAL',
    noData: 'SEM DADOS',
    cases: 'COVID (REPORTADO)',
  },
};
