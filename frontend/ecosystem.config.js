module.exports = {
  apps: [
    {
      name: "frontend",
      // Memanggil binary next langsung dari node_modules
      script: "./node_modules/next/dist/bin/next",
      args: "dev",
      env: {
        NODE_ENV: "development",
        PORT: 3000
      }
    }
  ]
}