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
    "/login": {
      loader: async () => {
        return (await import("../pages/auth/login.js")).Page;
      }
    },
    "/errors/sso": {
      loader: async () => {
        return (await import("../pages/errors/sso.js")).Page;
      }
    },
    "/register": {
      loader: async () => {
        return (await import("../pages/auth/register.js")).Page;
      }
    },
    "/settings/basic/display_name": {
      loader: async () => {
        return (await import("../pages/settings/basic/display_name.js")).Page;
      }
    },
    "/settings/basic/email": {
      loader: async () => {
        return (await import("../pages/settings/basic/email.js")).Page;
      }
    },
    "/settings/basic/username": {
      loader: async () => {
        return (await import("../pages/settings/basic/username.js")).Page;
      }
    },
    "/settings/basic/avatar": {
      loader: async () => {
        return (await import("../pages/settings/basic/avatar.js")).Page;
      }
    },
    "/settings/security/password": {
      loader: async () => {
        return (await import("../pages/settings/security/password.js")).Page;
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