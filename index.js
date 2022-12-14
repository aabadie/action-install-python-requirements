const core = require('@actions/core');
const exec = require('@actions/exec');


async function run() {
    try {
      const updatePip = core.getInput('update-pip');
      const requirements = core.getInput('requirements');
      if (updatePip) {
        core.startGroup("Update pip");
        await exec.exec("python -m pip install --upgrade pip");
        core.endGroup();
      }
      core.startGroup("Install Python requirements");
      await exec.exec(`python -m pip install -r ${requirements}`);
      core.endGroup();
    } catch (error) {
      core.setFailed(error.message);
    }
}

run();
