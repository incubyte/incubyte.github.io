+++
title = "We Let AI Code for Us: Prompts Were Prayers and Code Was... Interesting"
slug = "we-let-ai-code-for-us-prompts-were-prayers-and-code-was-interesting"
date = 2025-05-02T16:04:54+05:30
image = "/images/2025/we-let-ai-code-for-us-prompts-were-prayers-and-code-was-interesting/header.jpg"
draft = true
authors = ["Heet Vadiya", "Sapan Parikh"]
description = "A reflective account of our AI hackathon experience, highlighting key challenges, practical learnings, and actionable takeaways for effective AI-assisted development."
tags = ["Software Craftsmanship", "AI Tooling" , "Hackathon", "Prompt Engineering", "AI in SDLC"]
categories = ["Software Craftsmanship", "AI Tooling" , "Hackathon", "Prompt Engineering", "AI in SDLC"]
type = ""
+++

Building apps with AI is a bit like teaching a toddler to ride a bike while it's also trying to build the bike mid-air. At our AI hackathon, we were not prepared for what was waiting for us. We went in with high hopes and half-baked prompts.

Let's ditch the whole robots-taking-over narrative for a second. Our hackathon was about getting our hands dirty, experimenting with the current generation of AI tools, and figuring out how they could genuinely enhance our workflows. We had developers, QAs, product managers, a whole spectrum of talent, all trying to bend AI to their will. Here’s what we learned along the way, from facepalms to features and everything in between.

### From Chaos to Craft in a Weekend

Our AI hackathon spanned roughly 48 hours, kicking off with an hour dedicated to ideation and locking in our project goals. After that? Chaos, ambition, and caffeine-fuelled sprints.

We adopted a two-hour sprint cycle, aiming to deliver a tangible feature every couple of hours. It forced us to be sharp, iterative, and constantly in dialogue with our AI collaborators.

But let’s be real, the first day was _rough_. We were just getting used to the AI madness: figuring out its quirks, debugging AI-generated hallucinations, and rewriting code that - let’s just say wouldn’t pass a gallery review _or_ a code review.

Sure, we technically _shipped_ things on day one. It ran, technically. But we wouldn’t bet uptime on it.

We reviewed what worked, fixed what didn’t, and returned the next day with a clearer plan. By the end of day two, we had crafted a product we were proud of, not just another LLM fever dream.

### It all started with a prompt. A very bad one.

<br>
{{< figure src="/images/2025/we-let-ai-code-for-us-prompts-were-prayers-and-code-was-interesting/prompting-101.jpg" width="500px" class="text-center" align="center">}}

You know that feeling when you prompt something like: _“Create a homepage.”_

And then the AI proudly serves up: _“Here’s a homepage for a homepage builder... which also builds other homepage builders.”_

Yep, you just invented prompt recursion. It's kind of impressive. It's also useless.

Effective AI collaboration hinges on precise prompts. We learned that vague requests yield vague results. The fix? We realized prompting isn't a wish; it's about providing a precise blueprint. Breaking down tasks into smaller, specific instructions like "Create user authentication with X endpoint and Y security" made the AI a much more effective builder.

Context is king (or queen!) when it comes to prompting. Asking the AI to debug with just an error message was like a doctor diagnosing over the phone. The AI might offer a fix in isolation, but it often missed the bigger picture of our codebase.

We also discovered the surprising impact of simple formatting. Using '##' or XML tags to structure our prompts acted as a visual guide, helping us organize our thoughts and often leading to clearer AI responses.

Ultimately, we realized that prompting isn't magic. It's a skill that requires clarity, context, and a structured approach. It boils downs to “The Classic”,

> GIGO: Garbage in, garbage out

### We Treated AI Like a Senior Dev. It Acted Like an Intern.

<br>
{{< figure src="/images/2025/we-let-ai-code-for-us-prompts-were-prayers-and-code-was-interesting/ai-as-an-intern.jpg" width="500px" class="text-center" align="center">}}

Early on, we fell into the trap of expecting AI to just _know_. We'd give it a high-level task and assume it could fill in the blanks, understand the unspoken context, and magically resolve issues. It couldn't. The results were often confidently incorrect, leading us down rabbit holes.

The turning point came when we shifted our approach. We started treating the AI like a bright but inexperienced intern. This meant being incredibly explicit in our instructions. Instead of vague requests, we provided detailed explanations, step-by-step guidance, and the full picture, not just the headline.

For instance, when faced with a stubborn bug, simply stating "Fix this error" was futile. However, when we provided the specific error message ("teamBlogs.data?.map is not a function"), detailed the technology stack (React frontend, Rails backend), and even shared the relevant file structure, the AI's responses became significantly more helpful.

**Moral of the story**: the AI doesn't need you to be polite. It needs you to be clear.

### Beta Blues: AI, Libraries, and Our Guiding Star

We were initially impressed when the AI integrated a third-party library autonomously. That excitement quickly turned to frustration when we discovered it had chosen a beta version, leading to baffling bugs and hours of debugging.

The surprisingly simple fix? We learned to explicitly instruct the AI to "Only use stable versions of libraries" in our prompts. This proactive measure highlighted a critical insight: AI operates literally. To further steer it towards reliable implementations, providing direct links to library documentation within the prompt proved invaluable, ensuring it adhered to established guidelines rather than making assumptions.

**Keep your AI grounded**: stable library versions prevent flighty behaviour.

### Small tasks. Fewer tears.

<br>
{{< figure src="/images/2025/we-let-ai-code-for-us-prompts-were-prayers-and-code-was-interesting/pixel-perfect-prompts.jpg" width="500px" class="text-center" align="center">}}

Our biggest win? Ditching broad AI requests that felt like shouting into the void ("clean up the homepage" = broken navbar).

Instead, we embraced the power of the pixel. Asking for "increase the padding on the hero section by 16px" yielded exactly that. No surprises, no drama.

This precision extended to our version control. Every small, meaningful change driven by AI got its own branch. Think of it as a safe space for the AI's experiments. If things went south (as they sometimes did), we could simply revert without a full-scale meltdown.

### Testing Isn't Optional. AI Lies. Nicely.

<br>
{{< figure src="/images/2025/we-let-ai-code-for-us-prompts-were-prayers-and-code-was-interesting/trust-but-verify.jpg" width="500px" class="text-center" align="center">}}

One of the early surprises was the AI's unwavering confidence, even when its code was subtly (or not so subtly) broken. It wouldn't crash with error messages; instead, it presented flawed solutions with the digital equivalent of a cheerful smile. This taught us a critical lesson: trust, but verify.

That's why thorough testing became non-negotiable. We started making the AI add its own logging, generate test cases, and include debug print statements. But the crucial step was _us_ actually reviewing and running those checks.

It wasn't glamorous, but it was the thin line between a successful launch and a bug-ridden disaster we wouldn't have seen coming.

### Not All Tools Wear the Same Crown

Our AI hackathon quickly turned into a bit of a "Goldilocks and the Three Bears" situation – but with AI tools. We cultivated our ideas with different AI assistants, discovering that some helped certain features bloom while others were less effective in our digital garden. Every failure nudged us closer to what actually worked.

Lovable shone brightly for front-end design, offering an intuitive and powerful way to bring UI ideas to life. However, when tackling backend APIs, its strengths didn't quite translate.

Claude Code proved to be a powerhouse for backend logic and complex integrations, handling intricate tasks with impressive speed. Its limitation, however, was its terminal-only interface, which demanded a different set of know-hows in comparison to conventional code editors.

Using Cursor in agent mode inside our IDE felt like leveling up our development workflow. It wasn’t just smarter autocomplete. It could follow instructions, reason through context, and handle multi-step prompts with surprising accuracy. For a moment, it really did feel like having an AI teammate.

Then we gave VSCode’s agent mode a shot and it held its own. In fact, it offered comparable capabilities, with more flexibility in certain setups. And for teams already embedded in the VSCode ecosystem, it integrated seamlessly, all while being a more cost-effective option.

What this tool exploration hammered home is that **the AI tool itself is only part of the equation.**

### The Freedom to Fail (Forward)

Forget pixel-perfect code or the unicorn AI tool. The real MVP of our hackathon? Our collective grit. We embraced the glorious mess of experimentation. Being wrong was just a detour, iteration our mantra, and starting over? Just another Tuesday.

That cocktail of unshakeable "we'll crack this" confidence and a relentless "what if?" curiosity proved more powerful than any flawlessly crafted prompt. We weren't aiming for instant perfection; we were aiming for progress, one chaotic (but enlightening) step at a time.

Confidence, curiosity, and the belief that “we’ll figure it out” got us way further than trying to be perfect.

### The AI isn’t a code monkey. It’s a weirdly talented teammate.

<br>
{{< figure src="/images/2025/we-let-ai-code-for-us-prompts-were-prayers-and-code-was-interesting/ai-in-sdlc-as-a-teammate.jpg" width="500px"  class="text-center" align="center">}}

By weekend's end, our relationship with AI had flipped. It wasn't just a code-spewing tool; it felt like a teammate – a brilliant one, albeit with occasional creative (and entirely fabricated) ideas.

Our process became a tight loop: prompt, generate, review, fix, repeat. An iterative dance between our intent and its output. Weirdly satisfying, even when we had to politely point out its "hallucinations."

We learned to spot the confident nonsense and gently redirect its focus. Human guidance became the essential counterpoint to its raw generative power.

### Lessons That Stick

We're carrying these hard-earned lessons into every AI-assisted project from here on out:

- Be precise. Vague prompts lead to vague results - and vague results cost time.
- Break problems down until they’re bite-sized.
- Always include full context - half the time saved is in fewer follow-ups.
- Prompt like a product manager: structured, explicit, and focused.
- Verify everything - even the clever stuff. Especially the clever stuff.
- Stay intentional with tools. Use the right AI tool for the right job, and don’t hand it the keys to the kingdom too soon.
- Build in small, testable loops - commit often, check results, and let the AI work in isolated branches.
- Give thoughtful feedback - to the AI, to your teammates, and to yourself when things go sideways.

And maybe... just maybe... we’ll finally stop yelling at our laptops when the AI suggests using a 5MB GIF for a simple button hover animation.
