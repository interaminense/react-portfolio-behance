# React Portfolio Behance

This repository was created so people who have a Portfolio in Behance to use the component `<Portfolio />` 
made in [React App](https://github.com/facebookincubator/create-react-app).

This component lists all the projects you have registered in your Behance account, and you will be able to customize your Portfolio.

<img src="https://raw.githubusercontent.com/interaminense/react-portfolio-behance/master/imgs-readme/print-1.png" />

## Demonstration

Use the url below to test your Portfolio by putting your user name on Behance:

```
https://interaminense.github.io/react-portfolio-behance/YOUR_USERNAME
```
<div style="text-align: center">
    <img src="https://raw.githubusercontent.com/interaminense/react-portfolio-behance/master/imgs-readme/gif.gif" />
</div>

### Examples

* imcreator - [http://interaminense.github.io/react-portfolio-behance/imcreator](http://interaminense.github.io/react-portfolio-behance/imcreator)
* jordanamorais - [http://interaminense.github.io/react-portfolio-behance/jordanamorais](http://interaminense.github.io/react-portfolio-behance/jordanamorais)
* marcelo_jr - [http://interaminense.github.io/react-portfolio-behance/marcelo_jr](http://interaminense.github.io/react-portfolio-behance/marcelo_jr)
* Ramotion - [http://interaminense.github.io/react-portfolio-behance/Ramotion](http://interaminense.github.io/react-portfolio-behance/Ramotion)
* AitorPrieto - [http://interaminense.github.io/react-portfolio-behance/AitorPrieto](http://interaminense.github.io/react-portfolio-behance/AitorPrieto)

## How to create your Portfolio using this component?


1. Fork this repository;
2. Clone the forked repository to your local machine:
`git clone https: // github.com / YOUR_USERNAME / react-portfolio-behance.git`
3. install the project dependencies by typing `npm install`
4. If you change the name of your repository, change the `const URL_DEFAULT` inside the` App.js` file to the name of your repository;
5. Change the component parameters:
```html
<Portfolio user={YOUR_USERNAME} apiKey={YOUR_APIKEY} showFeatured />
```

## Do I need to pass an apiKey?

By default, the component uses a * apiKey * but each * apiKey * is limited ** 150 ** requests per hour, when exceeded, you will receive status code ** 429 **. So it would be ideal to create a new * apiKey * to use with your Portfolio.

Learn more about all the documentation offered by Behance [https://www.behance.net/dev](https://www.behance.net/dev).

<img src="https://raw.githubusercontent.com/interaminense/react-portfolio-behance/master/imgs-readme/print-2.png" />

## Documentation

| Name         | Type    | Default                            | Required | Description
|--------------|---------|------------------------------------|----------|------------
| user         | String  | undefined                          | yes      | User name in Behance
| apiKey       | String  | 'LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD' | no       | apiKey provided by Behance
| showFeatured | Boolean | false                              | no       | Displays the Behance project with more views

## Contribute

Feel free to contribute to this Repository. <b> I'll be very happy </ b> :)

## Credits

* [Behance Development](https://www.behance.net/dev)
* [Create React App](https://github.com/facebookincubator/create-react-app)

## License

`MIT`
