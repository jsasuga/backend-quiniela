const development = {
  database: "d7kqcn3d68jb78",
  username: "odczmkgmkuwxpk",
  password: "3aba04990cb387e3b3c3031082f39d87f5eb8f1214c036177b89b35b189d1ab1",
  host: "ec2-23-23-180-121.compute-1.amazonaws.com",
  ssl: true,
  dialect: "postgres"
};

const testing = {
  database: "d7kqcn3d68jb78",
  username: "odczmkgmkuwxpk",
  password: "3aba04990cb387e3b3c3031082f39d87f5eb8f1214c036177b89b35b189d1ab1",
  host: "ec2-23-23-180-121.compute-1.amazonaws.com",
  ssl: true,
  dialect: "postgres"
};

const production = {
  database: process.env.DB_NAME || "d7kqcn3d68jb78",
  username: process.env.DB_USER || "odczmkgmkuwxpk",
  password:
    process.env.DB_PASS ||
    "3aba04990cb387e3b3c3031082f39d87f5eb8f1214c036177b89b35b189d1ab1",
  host: process.env.DB_HOST || "ec2-23-23-180-121.compute-1.amazonaws.com",
  ssl: true,
  dialect: "postgres"
};

const connectionString = "postgres://odczmkgmkuwxpk:3aba04990cb387e3b3c3031082f39d87f5eb8f1214c036177b89b35b189d1ab1@ec2-23-23-180-121.compute-1.amazonaws.com:5432/d7kqcn3d68jb78";

module.exports = {
  development,
  testing,
  production,
  connectionString
};
