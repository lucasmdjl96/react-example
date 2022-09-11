{
  mode: 'production',
  resolve: {
    modules: [
      'C:\\Users\\lmdjo\\Documents\\IntelliJ-Projects\\react-example\\build\\js\\packages\\react-example\\kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      'C:\\Users\\lmdjo\\Documents\\IntelliJ-Projects\\react-example\\build\\js\\packages\\react-example\\kotlin-dce\\react-example.js'
    ]
  },
  output: {
    path: 'C:\\Users\\lmdjo\\Documents\\IntelliJ-Projects\\react-example\\build\\distributions',
    filename: [Function: filename],
    library: 'react-example',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}