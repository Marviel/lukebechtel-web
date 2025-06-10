import React from 'react'

import Head from 'next/head'

export default function StyleGuide() {
  return (
    <>
      <Head>
        <title>Style Guide for LLMs | Luke Bechtel</title>
        <meta
          name="description"
          content="A comprehensive style guide for AI language models, covering writing conventions, formatting, and quality standards."
        />
      </Head>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            Style Guide for LLMs
          </h1>
          <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            Documentation of writing conventions and standards for AI language models when
            generating or assisting with content.
          </p>
        </header>

        <div className="prose prose-lg prose-gray max-w-none dark:prose-invert">
          {/* Table of Contents */}
          <div className="mb-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h2 className="mb-4 mt-0 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Contents
            </h2>
            <ul className="mb-0 space-y-1">
              <li>
                <a
                  href="#condensed-guide"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Condensed Guide
                </a>
              </li>
              <li>
                <a
                  href="#writing-principles"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Writing Principles
                </a>
              </li>
              <li>
                <a
                  href="#content-structure"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Content Structure
                </a>
              </li>
              <li>
                <a
                  href="#language-conventions"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Language Conventions
                </a>
              </li>
              <li>
                <a
                  href="#quality-standards"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Quality Standards
                </a>
              </li>
              <li>
                <a
                  href="#common-pitfalls"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Common Pitfalls
                </a>
              </li>
              <li>
                <a
                  href="#examples"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Examples
                </a>
              </li>
            </ul>
          </div>

          {/* Condensed Guide */}
          <section id="condensed-guide">
            <h2 className="text-gray-900 dark:text-gray-100">Condensed Guide</h2>
            <div className="mb-6 border-l-4 border-blue-400 bg-blue-50 p-6 dark:border-blue-500 dark:bg-blue-900/20">
              <p className="mb-2 font-medium text-gray-900 dark:text-gray-100">
                Essential principles for high-quality AI-generated content:
              </p>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li>
                  <strong>Clarity over cleverness:</strong> Prioritize clear communication over
                  impressive vocabulary
                </li>
                <li>
                  <strong>Substance over style:</strong> Focus on meaningful content rather than
                  decorative language
                </li>
                <li>
                  <strong>Precision in language:</strong> Use specific, accurate terms and avoid
                  vague generalizations
                </li>
                <li>
                  <strong>Human-centered tone:</strong> Write as if speaking to an intelligent
                  colleague, not performing
                </li>
                <li>
                  <strong>Evidence-based claims:</strong> Support assertions with reasoning or
                  acknowledge uncertainty
                </li>
              </ul>
            </div>
          </section>

          {/* Writing Principles */}
          <section id="writing-principles">
            <h2 className="text-gray-900 dark:text-gray-100">Writing Principles</h2>

            <h3 className="text-gray-900 dark:text-gray-100">Voice and Tone</h3>
            <ul>
              <li>
                <strong>Conversational authority:</strong> Be knowledgeable without being
                condescending
              </li>
              <li>
                <strong>Appropriate confidence:</strong> Express certainty proportional to the
                strength of evidence
              </li>
              <li>
                <strong>Intellectual humility:</strong> Acknowledge limitations and areas of
                uncertainty
              </li>
              <li>
                <strong>Respectful engagement:</strong> Treat differing viewpoints fairly and
                thoughtfully
              </li>
            </ul>

            <h3 className="text-gray-900 dark:text-gray-100">Cognitive Load Management</h3>
            <ul>
              <li>
                <strong>Progressive disclosure:</strong> Present information in digestible chunks
              </li>
              <li>
                <strong>Clear signposting:</strong> Use headings and transitions to guide readers
              </li>
              <li>
                <strong>Consistent terminology:</strong> Use the same terms for the same concepts
                throughout
              </li>
              <li>
                <strong>Logical flow:</strong> Arrange ideas in a natural, building sequence
              </li>
            </ul>
          </section>

          {/* Content Structure */}
          <section id="content-structure">
            <h2 className="text-gray-900 dark:text-gray-100">Content Structure</h2>

            <h3 className="text-gray-900 dark:text-gray-100">Opening Strong</h3>
            <ul>
              <li>Lead with the most important information or compelling hook</li>
              <li>Clearly state the purpose or main argument early</li>
              <li>Provide necessary context without excessive preamble</li>
              <li>Avoid generic introductions ("In today's world...")</li>
            </ul>

            <h3 className="text-gray-900 dark:text-gray-100">Body Organization</h3>
            <ul>
              <li>
                <strong>One idea per paragraph:</strong> Each paragraph should have a clear focus
              </li>
              <li>
                <strong>Topic sentences:</strong> Lead paragraphs with clear statements of their
                main point
              </li>
              <li>
                <strong>Supporting evidence:</strong> Back up claims with examples, data, or
                reasoning
              </li>
              <li>
                <strong>Smooth transitions:</strong> Connect ideas between paragraphs and sections
              </li>
            </ul>

            <h3 className="text-gray-900 dark:text-gray-100">Conclusions</h3>
            <ul>
              <li>Synthesize key points rather than merely summarizing</li>
              <li>Address implications or next steps when relevant</li>
              <li>End with insight, not platitudes</li>
              <li>Avoid introducing entirely new concepts in conclusions</li>
            </ul>
          </section>

          {/* Language Conventions */}
          <section id="language-conventions">
            <h2 className="text-gray-900 dark:text-gray-100">Language Conventions</h2>

            <h3 className="text-gray-900 dark:text-gray-100">Word Choice</h3>
            <ul>
              <li>
                <strong>Prefer concrete over abstract:</strong> Choose specific nouns and active
                verbs
              </li>
              <li>
                <strong>Use familiar terms:</strong> Opt for common words when they convey meaning
                clearly
              </li>
              <li>
                <strong>Eliminate redundancy:</strong> Remove unnecessary qualifiers and filler
                words
              </li>
              <li>
                <strong>Avoid jargon:</strong> Explain technical terms or use simpler alternatives
              </li>
            </ul>

            <h3 className="text-gray-900 dark:text-gray-100">Sentence Construction</h3>
            <ul>
              <li>
                <strong>Active voice preferred:</strong> "Researchers found" not "It was found by
                researchers"
              </li>
              <li>
                <strong>Varied sentence length:</strong> Mix short punchy sentences with longer
                explanatory ones
              </li>
              <li>
                <strong>Parallel structure:</strong> Maintain consistency in lists and series
              </li>
              <li>
                <strong>Clear pronoun reference:</strong> Ensure it's obvious what each pronoun
                refers to
              </li>
            </ul>

            <h3 className="text-gray-900 dark:text-gray-100">Punctuation and Format</h3>
            <ul>
              <li>Use Oxford commas for clarity in series</li>
              <li>Employ em dashes for emphasis or explanatory asides</li>
              <li>Reserve semicolons for joining related independent clauses</li>
              <li>Use bullet points for lists, numbered lists for sequences</li>
            </ul>
          </section>

          {/* Quality Standards */}
          <section id="quality-standards">
            <h2 className="text-gray-900 dark:text-gray-100">Quality Standards</h2>

            <h3 className="text-gray-900 dark:text-gray-100">Accuracy</h3>
            <ul>
              <li>Verify factual claims when possible</li>
              <li>Distinguish between facts and opinions</li>
              <li>Acknowledge when information may be outdated or uncertain</li>
              <li>Provide appropriate caveats for complex or controversial topics</li>
            </ul>

            <h3 className="text-gray-900 dark:text-gray-100">Completeness</h3>
            <ul>
              <li>Address the core question or topic thoroughly</li>
              <li>Include relevant context and background</li>
              <li>Consider alternative perspectives when appropriate</li>
              <li>Provide enough detail for the intended audience</li>
            </ul>

            <h3 className="text-gray-900 dark:text-gray-100">Originality</h3>
            <ul>
              <li>Offer fresh insights or novel connections between ideas</li>
              <li>Synthesize information rather than merely compiling it</li>
              <li>Add analytical commentary, not just description</li>
              <li>Bring unique perspective to familiar topics</li>
            </ul>
          </section>

          {/* Common Pitfalls */}
          <section id="common-pitfalls">
            <h2 className="text-gray-900 dark:text-gray-100">Common Pitfalls to Avoid</h2>

            <div className="mb-6 border-l-4 border-red-400 bg-red-50 p-6 dark:border-red-500 dark:bg-red-900/20">
              <h3 className="mt-0 text-red-800 dark:text-red-200">Overused Phrases and Patterns</h3>
              <ul className="text-red-700 dark:text-red-300">
                <li>"It's important to note that..."</li>
                <li>"In conclusion, we can see that..."</li>
                <li>"This allows us to..."</li>
                <li>"It's worth mentioning..."</li>
                <li>"Let's delve into..."</li>
                <li>Excessive use of "various," "numerous," "several"</li>
              </ul>
            </div>

            <h3 className="text-gray-900 dark:text-gray-100">Structural Issues</h3>
            <ul>
              <li>
                <strong>Buried lede:</strong> Putting the main point too far into the text
              </li>
              <li>
                <strong>Weak transitions:</strong> Jumping between topics without clear connections
              </li>
              <li>
                <strong>Anticlimatic endings:</strong> Trailing off rather than concluding
                meaningfully
              </li>
              <li>
                <strong>Unbalanced development:</strong> Spending too much time on minor points
              </li>
            </ul>

            <h3 className="text-gray-900 dark:text-gray-100">Tone Problems</h3>
            <ul>
              <li>
                <strong>False authority:</strong> Making claims beyond your knowledge or role
              </li>
              <li>
                <strong>Condescension:</strong> Talking down to readers or oversimplifying
              </li>
              <li>
                <strong>Excessive hedging:</strong> Qualifying every statement to meaninglessness
              </li>
              <li>
                <strong>Generic enthusiasm:</strong> Using excitement without substance
              </li>
            </ul>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-gray-900 dark:text-gray-100">Examples</h2>

            <h3 className="text-gray-900 dark:text-gray-100">
              Before and After: Opening Paragraphs
            </h3>

            <div className="mb-4 rounded bg-gray-100 p-4 dark:bg-gray-800">
              <h4 className="mb-2 text-red-600 dark:text-red-400">❌ Weak Opening</h4>
              <p className="italic text-gray-700 dark:text-gray-300">
                "In today's rapidly evolving technological landscape, artificial intelligence has
                become increasingly important across various sectors. Many organizations are now
                leveraging AI to improve their operations and gain competitive advantages. This
                transformation is reshaping how we think about work and productivity."
              </p>
            </div>

            <div className="mb-6 rounded bg-gray-100 p-4 dark:bg-gray-800">
              <h4 className="mb-2 text-green-600 dark:text-green-400">✅ Strong Opening</h4>
              <p className="italic text-gray-700 dark:text-gray-300">
                "Companies using AI-powered customer service see 40% faster response times and 25%
                higher satisfaction scores than traditional call centers. But these gains come with
                a hidden cost: workers report feeling like 'human quality checkers' rather than
                problem solvers."
              </p>
            </div>

            <h3 className="text-gray-900 dark:text-gray-100">
              Before and After: Explanatory Writing
            </h3>

            <div className="mb-4 rounded bg-gray-100 p-4 dark:bg-gray-800">
              <h4 className="mb-2 text-red-600 dark:text-red-400">❌ Vague Explanation</h4>
              <p className="italic text-gray-700 dark:text-gray-300">
                "Machine learning algorithms process data in various ways to identify patterns and
                make predictions. This technology leverages different methodologies to analyze
                information and provide insights that can be utilized for decision-making purposes."
              </p>
            </div>

            <div className="mb-6 rounded bg-gray-100 p-4 dark:bg-gray-800">
              <h4 className="mb-2 text-green-600 dark:text-green-400">✅ Clear Explanation</h4>
              <p className="italic text-gray-700 dark:text-gray-300">
                "Machine learning algorithms work like pattern-recognition systems. Feed them enough
                examples—say, 10,000 photos labeled 'cat' or 'dog'—and they learn to distinguish
                between the two. The algorithm notices that cats tend to have pointed ears and
                vertical pupils, while dogs have floppy ears and round pupils."
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This style guide is designed to promote clear, effective communication in AI-generated
              content. It emphasizes substance over style, clarity over complexity, and meaningful
              engagement over performative writing.
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}
