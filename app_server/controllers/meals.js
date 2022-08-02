const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

// render meals list view
const renderMealsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Getaways - Meals';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No meals exist in database';
        }
    }

    res.render('meals', {
        title: pageTitle,
        meals: responseBody,
        message
    });
};

// GET room list view
const mealsList = (req, res) => {
    const path = '/api/meals';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    console.info('>> mealsController.mealsList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderMealsList(req, res, body);
        }
    );
};

module.exports = {
    mealsList
};