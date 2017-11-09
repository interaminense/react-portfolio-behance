# React Portfolio Behance

This repository was created so people who have a Portfolio in Behance can use the component `<Portfolio />` 
made in [React App](https://github.com/facebookincubator/create-react-app).

This component lists all the projects you have registered in your Behance account, being able to customize your Portfolio too.

<img src="https://raw.githubusercontent.com/interaminense/react-portfolio-behance/master/imgs-readme/print-1.png" />

## Demonstration

Use the following url to test your Portfolio by putting your Behance username:

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
2. Clone the forked repository to your local machine: `git clone https://github.com/YOUR_USERNAME/react-portfolio-behance.git`;
3. Install the project dependencies by typing `npm install`;
4. Run `npm run start` to start the project;

If you're using another name on your repository:
1. Change the `const URL_DEFAULT` inside the` App.js` file to  your repository's name;
2. Change the component parameters:
```html
<Portfolio user={YOUR_USERNAME} apiKey={YOUR_APIKEY} showFeatured />
```

## Do I need to pass an API Key?

By default, the component uses a *API Key* but each *API Key* is limited **150** requests per hour, when exceeded, you will receive status code **429**. So it would be ideal to create a new *API Key* to use with your Portfolio.

Learn more about all the documentation offered by [Behance](https://www.behance.net/dev).

<img src="https://raw.githubusercontent.com/interaminense/react-portfolio-behance/master/imgs-readme/print-2.png" />

## Documentation

| Name         | Type    | Default                            | Required | Description
|--------------|---------|------------------------------------|----------|------------
| user         | String  | undefined                          | yes      | Username in Behance
| API Key      | String  | 'LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD' | no       | API Key provided by Behance
| showFeatured | Boolean | false                              | no       | Displays the Behance project with more views

## Contribute

Feel free to contribute to this Repository. **I'll be very happy** :)

## Credits

* [Behance Development](https://www.behance.net/dev)
* [Create React App](https://github.com/facebookincubator/create-react-app)

## License

`MIT`
