# React Portfolio Behance

Este repositório foi criado para que as pessoas que tem um Portfólio no Behance possam utilizar o componente `<Portfolio />` feito em [React App](https://github.com/facebookincubator/create-react-app).

Este componente lista todos os projetos que você tem cadastrado na sua conta do Behance, e você poderá customizar da sua forma seu Portifólio.

<img src="https://raw.githubusercontent.com/interaminense/react-portfolio-behance/master/imgs-readme/print-1.png" />

## Demostração

Utilize a url abaixo para testar o seu Portfólio colocando o nome do seu usuário no Behance:

```
https://interaminense.github.io/react-portfolio-behance/YOUR_USERNAME
```
<div style="text-align: center">
    <img src="https://raw.githubusercontent.com/interaminense/react-portfolio-behance/master/imgs-readme/gif.gif" />
</div>

### Exemplos

* imcreator - [http://interaminense.github.io/react-portfolio-behance/imcreator](http://interaminense.github.io/react-portfolio-behance/imcreator)
* jordanamorais - [http://interaminense.github.io/react-portfolio-behance/jordanamorais](http://interaminense.github.io/react-portfolio-behance/jordanamorais)
* marcelo_jr - [http://interaminense.github.io/react-portfolio-behance/marcelo_jr](http://interaminense.github.io/react-portfolio-behance/marcelo_jr)
* Ramotion - [http://interaminense.github.io/react-portfolio-behance/Ramotion](http://interaminense.github.io/react-portfolio-behance/Ramotion)
* AitorPrieto - [http://interaminense.github.io/react-portfolio-behance/AitorPrieto](http://interaminense.github.io/react-portfolio-behance/AitorPrieto)



## Como criar seu Portfólio utilizando este componente?

1. Fork este repositório;
2. Clone o repositório Forkado para a sua máquina local:
`git clone https://github.com/YOUR_USERNAME/react-portfolio-behance.git`
3. instale as dependências do projeto digitando `npm install`
4. Caso você mude o nome do seu repositório, altere a `const URL_DEFAULT` dentro do arquivo `App.js` para o nome do seu repositório;
5. Altere os parâmetros do componente:
```html
<Portfolio user={YOUR_USERNAME} apiKey={YOUR_APIKEY} showFeatured />
```

## Preciso passar uma apiKey?

Por padrão, o componente utiliza uma *apiKey* mas cada *apiKey* são limitadas **150** requests por hora, quando ultrapassado, você receberá o código de status **429**. Então seria ideal criar uma nova *apiKey* para utilizar com seu Portfólio.

Saiba mais sobre toda documentação oferecida pelo Behance [https://www.behance.net/dev](https://www.behance.net/dev).

<img src="https://raw.githubusercontent.com/interaminense/react-portfolio-behance/master/imgs-readme/print-2.png" />

## Documentação

| Name         | Type    | Default                            | Required | Description
|--------------|---------|------------------------------------|----------|------------
| user         | String  | undefined                          | yes      | Nome do usuário no Behance
| apiKey       | String  | 'LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD' | no       | apiKey fornecida pelo Behance
| showFeatured | Boolean | false                              | no       | Exibe destacadamente o projeto do Behance com mais views

## Contribua

Sinta-se livre para contribuir com este Repositório. <b>Vou ficar muit feliz</b> :)

## Créditos

* [Behance Development](https://www.behance.net/dev)
* [Create React App](https://github.com/facebookincubator/create-react-app)

## Licença

`MIT`