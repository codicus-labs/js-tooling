import type { UserConfig } from 'vite-plus';

import fmt from './fmt.ts';
import lint from './lint.ts';

const codicus = {
    staged: {
        '*': 'vp check --fix --no-error-on-unmatched-pattern',
    },
    fmt,
    lint,
} satisfies UserConfig;

export default codicus;
