# URBAN DS: Um design system open-source para aplicações móveis

## Sobre

Trabalho de Conclusão de Curso - Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas. Centro Universitário SENAI SC - Campus Florianópolis, 2022.

## Resumo

O objetivo deste trabalho foi propor o desenvolvimento de um design system open-source focado em aplicações móveis, para que servisse de viés estudantil e profissional a todos os entusiastas da área. Propondo também a maturação do tópico dentro do mundo acadêmico, explicando a necessidade, importância, os ganhos e as diferenças entre o que realmente é um design system para outras bibliotecas de componentes e derivados. O trabalho foi realizado seguindo boas práticas das metodologias Double Diamond e Kanban, seguindo dicas de grandes empresas já consolidadas no mercado. Para isso foi separado o trabalho em dois processos entre design e desenvolvimento, sendo a primeira etapa para a elaboração dos elementos da estrutura necessários para uma primeira versão de um design system funcional, entregando os componentes e tokens a serem desenvolvidos na segunda etapa. Na segunda etapa, foi desenvolvido todo o projeto utilizando tecnologias de suporte multi plataforma para aplicações móveis e disponibilizado o repositório do código e uma documentação para utilização do design system. Importante ressaltar que o trabalho foi inteiramente desenvolvido de acordo com uma pesquisa bibliográfica por artigos recentes e autores de relevância dentro da comunidade de desenvolvedores e designers.

## Entregas

[Figma](https://figma.fun/9KXGmx) - Design dos tokens e componentes

[Storybook](https://638bac8a6de7967b8d29c3c1-sgggctgzmg.chromatic.com/) - Documentação dos componentes

[NPM](https://www.npmjs.com/package/urban-design-system-app?activeTab=readme) - Pacote instalavel para React Native

---

![image](https://github.com/j-rdel/urban-design-system-app/blob/master/src/assets/images/Cover.png?raw=true)

---

## Tokens

### Globais

![image](https://github.com/j-rdel/urban-design-system-app/blob/master/src/assets/images/GlobalTokens.png?raw=true)

### Atlantis

![image](https://github.com/j-rdel/urban-design-system-app/blob/master/src/assets/images/AtlantisBrandTokens.png?raw=true)

### Orion

![image](https://github.com/j-rdel/urban-design-system-app/blob/master/src/assets/images/OrionBrandTokens.png?raw=true)

---

## Componentes

![image](https://github.com/j-rdel/urban-design-system-app/blob/master/src/assets/images/Components.png?raw=true)

---

## Como utilizar o Urban DS em projetos

```bash

# Certifique-se de utilizar a versão 17.0.2 do React

# Instale o pacote npm
$ npm i urban-design-system

# Instale os pods
$ cd ios
$ pod install

# Exemplo de utilização App.tsx

import React from 'react';
import * as S from './style'

import {UrbProvider, UrbBrand, UrbButton, UrbGradientButton} from 'urban-design-system/dist/index';

const App = () => {
  # Para utilizar os brand trokens da marca Orion utilize UrbBrand.orion.Default no provider

  return (
    <UrbProvider theme={UrbBrand.atlantis.Default}>
      <View>
        <UrbButton width='small'>
          Exemplo de botão pequeno
        </UrbButton>
        <UrbGradientButton>
          Exemplo botão com gradiente
        </UrbGradientButton> 
      </View>
    </UrbProvider>
  );
}

export default App;

```

---

## Como instalar e rodar o repositório em sua máquina

```bash

# Clone o repositório
$ git clone https://github.com/j-rdel/urban-design-system-app.git

# Entre no diretório do repositório
$ cd urban-design-system-app

# Instale todas as dependencias
$ npm install

# Instale os pods
$ cd ios
$ pod install

# Para rodar o storybook na web utilize
$ npm run storybook

# Para rodar no android ou ios utilize
$ npm run ios
# or
$ npm run android

```

## Contato

[![Linkedin Badge](https://img.shields.io/badge/-Jardel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jardel-urban-906519199/)](https://www.linkedin.com/in/jardel-urban-906519199/)
[![Gmail Badge](https://img.shields.io/badge/-jardelurban3@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jardelurban3@gmail.com)](mailto:jardelurban3@gmail.com)