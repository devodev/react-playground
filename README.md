# React Playground

## How was it setup?

> Thanks to `Jedai Saboteur` for his tutorial. More info [here](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658).

Install nodejs and npm

```bash
sudo apt-get update
sudo apt-get install nodejs npm
```

Initialize npm and git

```bash
npm init
git init
```

Create project structure

```bash
mkdir public src
touch public/index.html
touch src/index.js
touch src/App.js
touch src/App.css
```

Create .gitignore and add common exclusions

```bash
cat <<EOF > .gitignore
node_modules
dist
EOF
```

Install dev dependencies, such as: babel, webpack and webpack loaders

```bash
npm install --save-dev \
    @babel/core \
    @babel/cli \
    @babel/preset-env \
    @babel/preset-react \
    webpack \
    webpack-cli \
    webpack-dev-server \
    style-loader \
    css-loader \
    babel-loader \
    react-hot-loader \
    @hot-loader/react-domgit stat
```

Create webpack config file

```bash
touch webpack.config.js
```

Install react

```bash
npm install react react-dom
```
