### Project: Supabase Contributions

#### Overview

[Supabase](https://supabase.io/) is a prominent open-source alternative to Firebase, aiming to replicate Firebase's features using enterprise-grade open-source tools. It offers a robust platform for developers to build scalable and reliable applications with ease.

#### Contributions to Supabase Auth (supabase/gotrue)

Supabase Auth, part of the Supabase ecosystem, is a user management and authentication server written in Go. It facilitates key functionalities such as JWT issuance, Row Level Security with PostgREST, comprehensive user management, and a variety of authentication methods including email/password, magic links, phone numbers, and external providers like Google, Apple, Facebook, and Discord. Originating from Netlify's Auth codebase, it has since evolved significantly in terms of features and capabilities.

#### My Contributions

Below is a summary of my contributions to Supabase, on both Supabase/supabase and Supabase/gotrue (to be renamed to supabase/auth):

| Date  | Achievement                                                                                                                                                                               |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12/23 | Merged PR: [[#19825] Update `SIGNED_IN` event documentation (#19974)](https://github.com/supabase/supabase/pull/19974)                                                                    |
| 12/23 | Created issue for discovered security vulnerability: [`signUp` leaking existing user role #1365](https://github.com/supabase/gotrue/issues/1365)                                          |
| 12/23 | Merged PR: [fix: sanitizeUser leaks user role (#1366)](https://github.com/supabase/gotrue/pull/1366) s                                                                                    |
| 12/23 | Created PR: [[#880] Add function to get user by email identities (#1367)](https://github.com/supabase/gotrue/pull/1367)                                                                   |
| 12/23 | Merged PR: [fix: add check for max password length (#1368)](https://github.com/supabase/gotrue/pull/1368)                                                                                 |
| 12/23 | Discussion on potential solutions for: [Email rate limit is triggered even in scenarios where an email doesn't end up being sent (#1236)](https://github.com/supabase/gotrue/issues/1236) |

#### My Learning Record

Through my contributions to Supabase, I've gained significant insights and knowledge:

- **Go Programming:** Deepened understanding of Go, navigating and contributing to a sizable codebase.
- **Authentication Flows:** Explored and learned various authentication mechanisms and flows.
- **Docker Usage:** Enhanced skills in utilizing Docker for development and deployment purposes.

#### Reflections on Contributing to Supabase

- **Contributing Guide:** The [Supabase Contributing Guide](https://github.com/supabase/gotrue/blob/master/CONTRIBUTING.md) was instrumental in familiarizing myself with the contribution process.
- **Responsive Community:** The responsiveness of the developer community greatly facilitated the contribution experience, as it made discussions for the PR easier
- **Issue Management:** My experience on Supabase emphasized the importance of maintaining issues, particularly for first time issues. There weren't many first time issues, and for some of them, they were no longer required even though they were still open. This resulted in wasted work on a no longer relevant issue.
- **First-Come, First-Served Approach:** Supabase chose to have a first come first served approach to issue assignment, which avoids the pitfall of issue hoarding or being occuipied by an inactive contributer, by being open to public contribution without explicit assignment.

#### Suggestions for Improvement

While my experience contributing to Supabase was largely positive, I identified areas for enhancement:

- **Issue Management:** There's a need for more active management of issues, especially those labeled for beginners, to prevent contributors from spending time on outdated or resolved issues.

#### Applying Supabase Practices to NUS-OSS Projects

From my engagement with Supabase, I've identified practices that could benefit NUS-OSS projects, particularly the use of Docker for simplifying project setup and ensuring consistency across development environments. This helped save alot of time by avoiding complicated manual setups, and allowed me to focus on resolving the issues.
