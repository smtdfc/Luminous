function loadPage(path) {
  return async () => {
    return (await import(path)).Page;
  }
}

export function initRouter(app) {
  const router = app.useModule(Turtle.TurtleRouterModule, {
    root: document.getElementById("contents")
  })
  router.routes = {
    "/": {
      loader: async () => {
        return (await import("../pages/index.js")).Page;
      }
    },
    "/project/create": {
      loader: async () => {
        return (await import("../pages/project/create.js")).Page;
      }
    },
  }

  router.on("onpagechange", function() {
    document.getElementById("overlay").classList.add("active")
  })
  router.on("onpageloaded", function() {
    setTimeout(() => document.getElementById("overlay").classList.remove("active"), 500)
  })
  router.on("notfound", function() {
    router.root.textContent = ""
    document.getElementById("overlay").classList.remove("active")
    router.root.appendChild(app.fragment`
      <${Turtle.Lazy(async ()=>{return (await import("../pages/errors/404.js")).Page})}/>
    `)
  })

  router.start()
}