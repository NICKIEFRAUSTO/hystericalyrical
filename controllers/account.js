const accountcontroller = function (usermodel, session, mailer) {

    this.crypto = require('crypto');
    this.uuid = require('node-uuid');
    this.apiresponse = require('../models/api-response.js');
    this.apimessages = require('../models/api-messages.js');
    this.userprofilemodel = require('../models/user-profile.js');
    this.usermodel = usermodel;
    this.session = session;
    this.mailer = mailer;
};

module.exports = accountcontroller;