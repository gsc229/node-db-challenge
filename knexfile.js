// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
    typeCast(field, next) {
      // Convert 1 to true, 0 to false, and leave null alone
      if (field.type === 'TINY' && field.length === 1) {
        const value = field.string()
        return value ? value === '1' : null
      }
      return next()
    }
  },




};