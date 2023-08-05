function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const MAIN_ROUTE = '/mainboard';

export const PATH = {
  main: path(MAIN_ROUTE, '/main'),
};
