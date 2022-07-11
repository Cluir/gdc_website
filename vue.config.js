//   module.exports = {
//     // publicPath: './',
// 	  configureWebpack: {
// 	    //关闭 webpack 的性能提示

// 	    performance: {
// 	    	hints:'warning',
// 	    	maxEntrypointSize: 50000000,
// 	    	maxAssetSize: 30000000,
// 	    	assetFilter: function(assetFilename) {
// 	    		return assetFilename.endsWith('.js');
// 	    	}
// 	    }
//     }
// }

module.exports = {
  productionSourceMap: false,
  publicPath: './',
  configureWebpack: {
    performance: {
        hints:'warning',
        maxEntrypointSize: 50000000,
        maxAssetSize: 30000000,
        assetFilter: function(assetFilename) {
          return assetFilename.endsWith('.js');
        }
    }
  }
}