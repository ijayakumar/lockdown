export default {
  translationBy: 'AherreDev',
  languageId: 'es', // ? ISO 639-1:2002
  // ? Para más información consulte https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes y para ver las versiones consulte https://en.wikipedia.org/wiki/Language_localisation
  header: {
    version: 'BETA',
    totals: {
      territoriesLockdown: 'TERRITORIOS EN CUARENTENA',
      peopleAffected: 'PERSONAS AFECTADAS',
      cases: 'CASOS DECLARADOS',
      deaths: 'FALLECIMIENTOS DECLARADOS',
    },
  },
  menu: {
    informationSection: {
      banner: 'Project Lockdown se encuentra actualmente en fase BETA. No todos los datos se encuentran disponibles.',
      main: {
        name: 'Project Lockdown ',
        text:
          'muestra un mapeo de las distintas NPIs (del ingles Non-Pharmaceutical Interventions o Intervenciones No Farmaceuticas) aplicadas en todo el mundo en respuesta a la crisis de la COVID-19. El objetivo es visualizar las medidas adoptadas en respuesta ante la pandemia y evaluar sus efectos sobre los Derechos Humanos y Digitales.',
      },
      about: {
        title: 'Acerca de',
        text: {
          p1:
            'En un intento de reducir la propagación de la COVID-19 y reducir la presión sobre sus infraestructuras médicas, gobiernos de todo el mundo han implementado medidas de bloqueo, cuarentena y aislamiento.',
          p2:
            'empodera a los ciudadanos, periodistas y defensores de los derechos humanos para analizar fácilmente los efectos sociales y políticos de estas medidas. Fundado en los valores de transparencia y responsabilidad,',
          p3:
            'se compromete a proporcionar a los ciudadanos del mundo las herramientas que necesitan para mantenerse seguros e informados.',
        },
      },
      sources: {
        title: 'Recursos',
        subtitle:
          'combina múltiples fuentes y una solida metodologia para garantizar que los datos presentados sean precisos. Puede encontrar la lista completa de fuentes utilizadas aquí:',
        linksList: {
          first: {
            linkTitle: 'Base de datos de Project Lockdown',
            text: '(Generada en base a varias fuentes.)',
          },
          second: {
            linkTitle: 'Coronavirus COVID19 API',
            text: '(Datos obtenidos de',
            highlight: 'Johns Hopkins CSSE)',
          },
        },
        issues: {
          text: 'Si encuentra un error, por favor ',
          highlight: 'informenos.',
        },
      },
      credits: {
        title: 'Creditos',
        text:
          'es una iniciativa Civic Tech hecha posible por una red internacional de voluntarios y organizaciones. Consultar aqui la lista de ',
        highlight: 'miembros.',
      },
      dataPrivacity: {
        title: 'Politica de Datos & Privacidad',
        paragraphs: {
          p1: 'No recolectamos datos de nuestros visitantes.',
          p2: 'Toda información disponible de nuestros miembros es publicada bajo su consentimiento.',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: 'Cambiar a',
        dark: 'Modo Oscuro',
        light: 'Modo Claro',
      },
      geolocation: 'Permitir geolocaliización',
      app: {
        install: 'Instalar la aplicación',
        update: 'Actualizar la aplicación',
      },
    },
  },
  tdo: {
    tabs: {
      dailyLife: {
        name: 'Actividades Diarias',
        subtitle: 'Actividades Diarias (restricciones)',
        noResults: 'N/A',
        stats: {
          population: 'Población',
          max_assembly: 'Max assembly',
          cases: 'Casos',
          recoveries: 'Recuperados',
          deaths: 'Fallecimientos',
        },
        measureValues: {
          '1': 'Sin restricciones',
          '2': 'Restricciones parciales',
          '3': 'Restricciones totales',
          '4': 'Sin clarificar',
        },
        measures: {
          home: 'Cuarentena',
          homeShortVersion: 'Cuarentena',
          shopping: 'Salir de compras',
          shoppingShortVersion: 'Salir de compras',
          outdoors: 'Actividades al aire libre',
          outdoorsShortVersion: 'Actividades al aire libre',
          military: 'Incremento de presencia militar',
          militaryShortVersion: 'Incremento de presencia militar',
          religious: 'Acceso a centros religiosos',
          religiousShortVersion: 'Acceso a centros religiosos',
          electricity: 'Suministro energetico asegurado',
          electricityShortVersion: 'Suministro energetico asegurado',
          work: 'Acceso al centro de trabajo',
          workShortVersion: 'Acceso al centro de trabajo',
          water: 'Suministro de agua asegurado',
          waterShortVersion: 'Suministro de agua asegurado',
          schools: 'Acceso al sistema educativo',
          schoolsShortVersion: 'Acceso al sistema educativo',
          internet: 'Servicios de telecomunicaciones asegurados',
          internetShortVersion: 'Servicios de telecomunicaciones asegurados',
        },
      },
      mobility: {
        name: 'Mobilidad',
        subtitle: 'Transporte (restricciones)',
        measureValues: {
          '1': 'Sin restricciones',
          '2': 'Restricciones parciales',
          '3': 'Restricciones totales',
          '4': 'Sin clarificar',
        },
        measures: {
          commerce: 'Comercio',
          commerceShortVersion: 'Comercio',
          foreignersInbound: 'Extranjeros (Llegada)',
          foreignersInboundShortVersion: 'Extranjeros (Llegada)',
          foreignersOutbound: 'Extranjeros (Salida)',
          foreignersOutboundShortVersion: 'Extranjeros (Salida)',
          local: 'Entre ciudades',
          localShortVersion: 'Entre ciudades',
          nationalsInbound: 'Nacionales (Llegada)',
          nationalsInboundShortVersion: 'Nacionales (Llegada)',
          nationalsOutbound: 'Nacionales (Salida',
          nationalsOutboundShortVersion: 'Nacionales (Salida',
          stopovers: 'Escalas',
          stopoversShortVersion: 'Escalas',
          crossBorderWorkers: 'Trabajadores transfronterizos',
          crossBorderWorkersShortVersion: 'Trabajadores transfronterizos',
        },
      },
      reports: {
        name: 'Informes',
        subtitle: 'Próximamente.',
      },
    },
  },
  mapLegend: {
    no: 'Sin prohibicion',
    partial: 'Prohibicion parcial',
    full: 'Prohibicion total',
    noData: 'Datos no disponibles',
    cases: 'COVID-19 (Casos declarados)',
  },
};
