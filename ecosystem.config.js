module.exports = {
  apps: [
    {
      name: "cookk-front-end-app",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-44-211-224-7.compute-1.amazonaws.com",
      key: "cookk-front-end-new.pem",
      ref: "origin/dev",
      repo: "git@github.com:UnitedFood/front-end.git",
      path: "/home/ubuntu/front-end-app",
    }
  }
};