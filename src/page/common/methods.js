export const methods = {};
  methods.initTab = (columns) => {
  let [a, b] = [[], []];
    if (!!columns) {
      for (let i = 0; i < columns.length; i++) {
        const e = columns[i];
        if (!!e.filter.choose) {
          a.push(e);
        } else {
          b.push(e);
        }
      }
  }
  return [a, b];
};