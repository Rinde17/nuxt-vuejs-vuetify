import { expect } from "vitest";
import { $fetch, isDev, setup } from "@nuxt/test-utils";
import { fileURLToPath } from "node:url";

describe('Home Page', async () => {
    await setup({
        rootDir: fileURLToPath(new URL('..', import.meta.url)),
        server: true
    })

    it('Renders Home', async () => {
        expect(await $fetch('/')).toMatch
        ('Home')
    });

    if (isDev()) {
        it('[dev] ensure vite client script is added', async () => {
            expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
        });
    }

})