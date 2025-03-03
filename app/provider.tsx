// 'use client'

// import posthog from 'posthog-js'
// import { PostHogProvider } from 'posthog-js/react'
// import * as React from 'react'
// import { ThemeProvider as NextThemesProvider } from 'next-themes'
// import { type ThemeProviderProps } from 'next-themes/dist/types'

// const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || '';
// const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || '';

// if (typeof window !== 'undefined') {
//   posthog.init(POSTHOG_KEY, {
//     api_host: POSTHOG_HOST,
//     person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
//   })
// }
// type CombinedProviderProps = ThemeProviderProps & {
//   children: React.ReactNode;
// }

// export function CombinedProvider({ children, ...props }: CombinedProviderProps) {
//   return (
//     <PostHogProvider client={posthog}>
//       <NextThemesProvider {...props}>{children}</NextThemesProvider>
//     </PostHogProvider>
//   )
// }

'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { Partytown } from '@builder.io/partytown/react'
import { MantineProvider } from '@mantine/core'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || '';
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || '';

type CombinedProviderProps = ThemeProviderProps & {
  children: React.ReactNode;
}

export function CombinedProvider({ children, ...props }: CombinedProviderProps) {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <Partytown debug={true} />
      <PostHogProvider client={posthog}>
        <NextThemesProvider {...props}>
          {/* Added this to tell mantine which theme is being used for pricing page*/}
        <MantineProvider
        theme={{
          colorScheme: theme === 'dark' ? 'dark' : 'light',
        }}
        >
          {children}
        </MantineProvider>
          </NextThemesProvider>
      </PostHogProvider>
    </>
  )
}

// You need to ensure PostHog is initialized in the worker context.
if (typeof window !== 'undefined' && window.document) {
  const script = document.createElement('script');
  script.type = 'text/partytown';
  script.innerHTML = `
    import posthog from 'https://cdn.posthog.com/posthog-js/v1/posthog.umd.js';

    posthog.init('${POSTHOG_KEY}', {
      api_host: '${POSTHOG_HOST}',
      loaded: function(posthog) {
        posthog.capture('$pageview');
      },
    });

    window.posthog = posthog;
  `;
  document.head.appendChild(script);
}
