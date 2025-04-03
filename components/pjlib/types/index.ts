import type { ReactNode } from 'react'

export interface BaseComponentProps {
  children?: ReactNode,
  className?: string,
}

export type baseThemes = 'dark' | 'default';