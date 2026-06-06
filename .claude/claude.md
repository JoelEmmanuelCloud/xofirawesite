# Project Rules

## General
- This is enterprise-level production code. Every line of code must be production-ready — no simulations, no stubs, no test placeholders, no mock implementations.
- Follow existing code style and conventions in each file.
- Prefer editing existing files over creating new ones.
- No comments of any kind in code files — not inline, not block, not docstrings.
- No emojis anywhere in code files, except the frontend dashboard.

## Code Quality
- Write clean, readable, and maintainable code.
- Avoid introducing unnecessary abstractions or over-engineering.
- Handle errors at system boundaries only; trust internal code.
- All implementations must be fully functional and ready for production deployment.

## Security
- Never hardcode secrets, API keys, or credentials.
- Validate all external input; trust internal data.
- Follow OWASP top 10 best practices.

## Version Control
- Use version control for all changes.
- Commit frequently with focused, atomic commits — each commit should represent one logical change.
- Never bundle large or unrelated changes into a single commit.
- Write concise, meaningful commit messages.
- Never include "Claude", "Claude AI", or any AI attribution in commit messages.
- Do not commit sensitive files (.env, credentials, keys).
