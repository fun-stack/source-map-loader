import normalizeErrors from "./normalizeErrors";

export default (stats, shortError) => {
  return normalizeErrors(stats.compilation.warnings.sort(), shortError);
};
