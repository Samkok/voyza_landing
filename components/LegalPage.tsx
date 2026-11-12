import type { ReactNode } from 'react'
import { PageFrame, PageHeader } from './PageFrame'

// Legal typography: the guides' paper style, a size smaller and denser for long reading.
export const legal = {
  h2: 'mt-14 mb-4 text-balance font-display text-[clamp(1.6rem,3vw,2.05rem)] leading-[1.1] tracking-[-.01em] text-ink',
  h3: 'mt-7 mb-2.5 font-body text-[19px] font-semibold text-ink',
  p: 'text-[17px] leading-[1.72] text-ink-soft',
  ul: "space-y-2.5 text-[17px] leading-[1.72] text-ink-soft [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-1 [&>li]:before:top-[.7em] [&>li]:before:h-[7px] [&>li]:before:w-[7px] [&>li]:before:rounded-full [&>li]:before:bg-coral [&>li]:before:content-['']",
  strong: 'font-semibold text-ink',
  a: 'break-words rounded-sm text-ink underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-coral',
  // A boxed set of contact details at the end of a document.
  card: 'mt-4 rounded-[22px] border border-paper-line bg-paper-hi px-6 py-6 shadow-[0_24px_50px_-36px_rgba(19,34,56,.5)] sm:px-8',
  label: 'mb-1 font-label text-[11px] uppercase tracking-[.18em] text-coral-ink',
  value: 'text-[17px] leading-relaxed text-ink',
  tableWrap: 'my-6 overflow-x-auto rounded-[18px] border border-paper-line bg-paper-hi',
  table: 'min-w-full text-[15px] leading-relaxed text-ink-soft',
  thead: 'bg-paper-deep',
  th: 'px-4 py-3 text-left align-top font-label text-[11px] font-medium uppercase tracking-[.14em] text-ink',
  td: 'border-t border-paper-line px-4 py-3 align-top',
  code: 'rounded bg-paper-deep px-1 py-0.5 font-label text-[0.82em] text-ink',
}

export default function LegalPage({ title, meta, children }: { title: string; meta: ReactNode; children: ReactNode }) {
  return (
    <PageFrame>
      <article className="mx-auto max-w-[50rem] px-5 pb-28 pt-28 sm:px-8 sm:pt-36">
        <PageHeader kicker="Legal" title={title} meta={meta} />
        <div className="mt-10 space-y-6">{children}</div>
      </article>
    </PageFrame>
  )
}
