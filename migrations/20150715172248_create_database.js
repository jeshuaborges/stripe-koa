var pg = require('pg');

var master = 'postgres://localhost/postgres',
    dbName = 'pocket_stripe_koa_development';

exports.up = function(knex, Promise) {
  return new Promise(function(resolve, reject){
    pg.connect(master, function(err, client, done) {
      if (err) {
        console.log('Error while connecting: ' + err);
      }

      client.query('CREATE DATABASE ' + dbName, function(err) {
        if (err) {
          console.log('ignoring the error', err);
        }

        client.end();
        resolve();
      });
    });
  });
};

exports.down = function(knex, Promise) {
  return new Promise(function(resolve, reject){
    pg.connect(master, function(err, client, done) {
      if (err) {
        console.log('Error while connecting: ' + err);
      }

      client.query('DROP DATABASE ' + dbName, function(err) {
        if (err) {
          console.log('ignoring the error', err);
        }

        client.end();
        next();
      });
    });
  });
};
