const { Toolkit } = require('actions-toolkit')

// Run your GitHub Action!
Toolkit.run(async tools => {
  tools.log('Welcome to this example!');
  tools.log(tools.getPackageJSON());
  tools.log(process.cwd());
  tools.log(tools.context.repo);
  tools.log(tools.context.ref);
  tools.log(tools.context.event);

  const result = await tools.runInWorkspace('ls', ['-l']);
  tools.log(result);
  tools.exit.success('We did it!');
})
