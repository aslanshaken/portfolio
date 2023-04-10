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
      host: "ec2-54-167-207-4.compute-1.amazonaws.com",
      key: "cookk-frontend-ssh.pem",
      ref: "origin/dev",
      repo: "git@github.com:UnitedFood/front-end.git",
      path: "/home/ubuntu/front-end-app",
      "post-deploy":
        "npm install && npm run build"
    }
  }
};