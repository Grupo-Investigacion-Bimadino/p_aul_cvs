// Import: Encargado de obtener de forma recursiva un proyecto.
const vcsImport = () =>
  new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (error) {
      reject(error);
    }
  });

// Checkout: Obtiene un árbol de un proyecto.
const vcsCheckout = () =>
  new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (error) {
      reject(error);
    }
  });

// Add: Afectador de adición de proyecto.
const vcsAdd = () =>
  new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (error) {
      reject(error);
    }
  });

// Delete: Afectador de sustracción de propiedades directo del proyecto o una de sus partes.
const vcsDelete = () =>
  new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (error) {
      reject(error);
    }
  });

// Status: Retorna el estado de un proyecto o una de sus partes.
const vcsStatus = () =>
  new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (error) {
      reject(error);
    }
  });

// Update: Actualiza el estado de los proyectos en cualquiera de sus partes.
const vcsUpdate = () =>
  new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (error) {
      reject(error);
    }
  });

// Commit: Afectador de proyectos adicionando, borrando, o modificando características en los modelos.
const vcsCommit = () =>
  new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (error) {
      reject(error);
    }
  });

// Diff: Contrasta dos proyectos obteniendo diferencias de adición o eliminación de propiedades.
const vcsDiff = (id1, id2) =>
  new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  vcsImport,
  vcsCheckout,
  vcsAdd,
  vcsDelete,
  vcsStatus,
  vcsUpdate,
  vcsCommit,
  vcsDiff,
};
