const { Toolkit } = require('actions-toolkit')

// Run your GitHub Action!
Toolkit.run(async tools => {
  tools.log('Welcome to this example!');
  tools.log(tools.getPackageJSON());
  tools.log(process.cwd());
  await tools.runInWorkspace('ls', ['-l']);
  tools.exit.success('We did it!');
})
