type MinimalFetcher = {
  fetch(input: Request | string, init?: RequestInit): Promise<Response>;
};

export interface Env {
  ASSETS: MinimalFetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Redirect www.pms.prepcv.com → pms.prepcv.com
    if (url.hostname === "www.pms.prepcv.com") {
      url.hostname = "pms.prepcv.com";
      return Response.redirect(url.toString(), 301);
    }

    // Try to serve static asset first
    const assetResponse = await env.ASSETS.fetch(new Request(url.toString(), request));
    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    // Try conventional static export fallbacks
    const pathname = url.pathname.replace(/\/$/, "");
    const candidates = [
      `${pathname}.html`,
      `${pathname}/index.html`,
      "/index.html",
    ];

    for (const path of candidates) {
      const candidateUrl = new URL(path, url);
      const res = await env.ASSETS.fetch(new Request(candidateUrl.toString(), request));
      if (res.status !== 404) {
        return res;
      }
    }

    return new Response("Not Found", { status: 404 });
  },
};


