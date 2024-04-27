'use server'
import { loadGoogleFontAllVariants } from '@/sdk/fonts'
import type { Config, State } from '..'
import VoteView from '../views/Vote'

export default async function initial(config: Config, state: State) {
    const roboto = await loadGoogleFontAllVariants('Roboto')

    return {
        buttons: config?.options?.map((option) => ({
            label: option.buttonLabel,
        })),
        aspectRatio: '1.91:1',
        fonts: roboto,
        component: VoteView(config),
        functionName: 'vote',
    }
}
