function createRouterStore() {
  let route = $state<string[]>([]);

  return {
    get route() {
      return route;
    },
    push: (path: string) => {
      route = path.split('/');
    },
  };
}

const RouterStore = createRouterStore();

export { RouterStore };
