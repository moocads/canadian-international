'use client'

import { PageBanner } from '@/components/page/page-banner'
import { Breadcrumbs } from '@/components/page/breadcrumbs'
import { PageIntro } from '@/components/page/page-intro'
import { ContentBlock } from '@/components/page/content-block'
import type { ExamPrepContent } from '@/lib/exam-prep-content'

type ExamPrepDetailProps = {
  content: ExamPrepContent
}

export function ExamPrepDetail({ content }: ExamPrepDetailProps) {
  return (
    <>
      <PageBanner title={content.bannerTitle} />
      <Breadcrumbs items={content.breadcrumbs} />
      <PageIntro
        subheading={content.subheading}
        paragraphs={content.paragraphs}
        skills={content.skills}
      />
      <ContentBlock heading={content.highlights.heading} items={content.highlights.items} />
      <ContentBlock
        heading={content.audience.heading}
        body={content.audience.intro}
        items={content.audience.items}
        variant="muted"
      />
      <ContentBlock
        heading={content.environment.heading}
        body={content.environment.intro}
        items={content.environment.items}
      />
      <ContentBlock
        heading={content.closing.heading}
        body={content.closing.body}
        variant="primary"
      />
    </>
  )
}
