module.exports = {
  app: {
    name: 'stripeKoaDemo',
    version: '0.0.1'
  },
  server: {
    port: 3000
  },
  template: {
    path: 'app/views',
    options: {
      map: { ect: 'ect' }
    }
  },
  session: {
    secretKey: 'myKoajsSecretKey'
  },
  stripe: 'sk_test_ClHBC1uVtkE2KYomRd2DUnwH'
};
