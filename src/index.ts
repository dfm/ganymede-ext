import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the ganymede_ext extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'ganymede_ext',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension ganymede_ext is activated!');
  }
};

export default extension;
