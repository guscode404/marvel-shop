# Marvel Comic Shop

O projeto consiste em um website feito com React, consumindo a API da Marvel, com o intuíto de simular uma loja de HQ's. O projeto conta com tecnologias como:
- React;
- CSS com Styled Components;
- JavaScript;
- Testes E2E com Cypress;
- React Router DOM.

O website foi planejado visando um layout simples e intuitivo, enquanto ainda agradável ao usuário, seguindo o padrão mobile first, e contendo um layout pequeno e com ícones descritivos, além de fornecer semântica e responsividade.

O website faz uma única requisição à API, e então salva os resultados no LocalStorage do navegador, utilizando-o para manipular a lista de HQ's, enquanto mantém salvo as HQ's listadas como raras.

O carrinho também é salvo no LocalStorage, para que o usuário não perca as compras armazenadas no mesmo, e para que sejam armazenadas as HQ's raras.

O website também conta com um sistema de cupons, sendo possível utilizar um cupom para aplicar desconto aos produtos raros, ou um cupom para aplicar desconto aos produtos não-raros, sendo validados ao comparar o cupom digitado pelo usuário aos cupons inclusos no arquivo de mocks de cupons.

HQ's raras são marcadas com uma estrela.

## Cupons disponíveis:
- **20DISCOUNT** | Aplica um desconto de 20% aos produtos não-raros.
- **RAREDISCOUNT** | Aplica um desconto de 10% aos produtos raros.