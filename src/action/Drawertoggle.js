export const Drawertoggle = (type, project) => {
  if (project !== undefined) {
    return {
      type: type,
      payload: project,
    };
  } else {
    console.log("error now payload found!");
  }
};