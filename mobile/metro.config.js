const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = withNativeWind(getDefaultConfig(__dirname), {
  input: './global.css',
});

// --- import.meta fix for web -------------------------------------------------
// zustand's ESM build (esm/*.mjs) uses `import.meta.env` in its devtools
// middleware. On web, Metro emits the bundle as a classic <script> (no
// type="module"), so a raw `import.meta` throws
// "SyntaxError: Cannot use 'import.meta' outside a module" — and whether it's
// stripped depends on the babel transform profile actually running, which is
// fragile across caches/environments. zustand also ships a CJS build with NO
// import.meta (it's what native already resolves), so we force web to use it by
// dropping the "import" export condition for zustand only (falls back to the
// CJS "default" entry). Applied AFTER withNativeWind so it isn't overwritten.
const upstreamResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (
    platform === 'web' &&
    (moduleName === 'zustand' || moduleName.startsWith('zustand/'))
  ) {
    // Deterministically redirect to zustand's CJS build (Node's require
    // resolution picks the "default"/CJS entry, which has no import.meta).
    return { type: 'sourceFile', filePath: require.resolve(moduleName) };
  }
  return (upstreamResolveRequest || context.resolveRequest)(
    context,
    moduleName,
    platform,
  );
};

module.exports = config;
