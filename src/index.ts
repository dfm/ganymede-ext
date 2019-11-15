import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'ganymede_ext',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension ganymede_ext is activated!');
    window.addEventListener("_ganymede_ext", (event: Event) => {
      const command = (event as CustomEvent).detail;
      if (command) {
        app.commands.execute(command).catch(() => { console.log("Running: '" + command + "' failed") });
      }
    }, false);
  }
};

export default extension;
