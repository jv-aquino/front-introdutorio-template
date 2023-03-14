const withImages = require('next-images');
const { createIncrementalProgram } = require('typescript');
module.exports = {
    webpack(config) {
        withImages();
        config.module.rules.push({
            test: /.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'encrypted-tbn0.gstatic.com',
              port: '',
              pathname: '/images',
            },
          ],
    }
};
