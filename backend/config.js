module.exports = {
  app: {
    title: 'Nunstack',
    description: 'Full-Stack JavaScript with MongoDB, Express, Nunjucks, and' +
    ' Node.js',
    keywords: 'mongodb, express, nunjucks, node.js, mongoose, passport'
  },
  port: process.env.PORT || '3000',
  sessionSecret: 'nunjucks',
  sessionCollection: 'sessions',
  sessionCookie: {
    path: '/',
    httpOnly: true,
    secure: false,
    maxAge: null
  },
  sessionName: 'connect.sid',
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost/nunstack',
    options: {
      user: process.env.DB_USER || '',
      pass: process.env.DB_PASS || ''
    }
  },
  mailer: {
    from: process.env.MAILER_FROM || 'MAILER_FROM',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
      auth: {
        user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
        pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
      }
    }
  }
};
