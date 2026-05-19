#!/usr/bin/env python3
"""Generate CILS course and test-prep pages from content brief."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def write(path: str, content: str) -> None:
    p = ROOT / path
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content.lstrip() + "\n")
    print(f"wrote {path}")


def page_route(path: str, title: str, description: str, component_import: str, component_name: str) -> None:
    write(
        path,
        f"""import type {{ Metadata }} from 'next'
import {{ Header }} from '@/components/header'
import {{ Footer }} from '@/components/footer'
import {{ {component_name} }} from '@/components/pages/{component_import}'

export const metadata: Metadata = {{
  title: '{title} | Canadian International Language School',
  description: '{description.replace("'", "\\'")}',
}}

export default function Page() {{
  return (
    <main className="min-h-screen">
      <Header />
      <{component_name} />
      <Footer />
    </main>
  )
}}
""",
    )


# --- exam-card-grid ---
write(
    "components/page/exam-card-grid.tsx",
    """
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export type ExamCard = {
  name: string
  description: string
  href: string
}

type ExamCardGridProps = {
  cards: ExamCard[]
}

export function ExamCardGrid({ cards }: ExamCardGridProps) {
  return (
    <motion.div className="container mx-auto px-4 max-w-4xl pb-4">
      <motion.div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Link
              href={card.href}
              className="block h-full bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/90">
                {card.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{card.description}</p>
              <span className="inline-flex items-center text-primary font-semibold text-sm">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
""".replace("<motion.div className=\"container", "<div className=\"container")
     .replace("<motion.div className=\"grid", "<motion.div className=\"grid")
     .replace("    </motion.div>\n  )\n}", "    </motion.div>\n  )\n}"),
)

# Fix exam-card-grid manually in output - the replace is messy. Let me read and fix after.
