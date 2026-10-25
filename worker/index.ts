interface Env {
  ASSETS: Fetcher
}

// Non-integrated projects: their path on raymondz.dev → where they're hosted.
// New paths must also be covered by `run_worker_first` in wrangler.jsonc.
const projects: Record<string, string> = {
  "/tools/shuffler-builder": "https://raymondyz.github.io/shuffler-geometry-builder",
}

async function proxy(request: Request, url: URL, path: string, origin: string): Promise<Response> {
  const target = origin + url.pathname.slice(path.length) + url.search
  const upstream = await fetch(new Request(target, request), { redirect: "manual" })
  const location = upstream.headers.get("Location")
  if (!location) return upstream

  // Keep the project's own redirects (like adding a trailing slash) on raymondz.dev
  const resolved = new URL(location, target).href
  if (resolved !== origin && !resolved.startsWith(origin + "/")) return upstream
  const response = new Response(upstream.body, upstream)
  response.headers.set("Location", url.origin + path + resolved.slice(origin.length))
  return response
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    for (const [path, origin] of Object.entries(projects)) {
      // Projects use relative links, which need the trailing slash
      if (url.pathname === path) return Response.redirect(`${url.origin}${path}/${url.search}`, 301)
      if (url.pathname.startsWith(path + "/")) return proxy(request, url, path, origin)
    }
    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<Env>
