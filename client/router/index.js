function loadPage(path) {
  return async () => {
    return (await import(path)).Page;
  }
}

export function initRouter(app) {
  const router = app.useModule(Turtle.TurtleRouterModule, {
    element: document.getElementById("contents")
  })
  router.routes = {
    "/": {
      loader: async () => {
        return (await import("../pages/index.js")).Page;
      }
    },
  }

  router.on("pagechange", function() {
    document.getElementById("overlay").classList.add("active")
  })

  router.on("pageloaded", function() {
    document.getElementById("overlay").classList.remove("active")
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