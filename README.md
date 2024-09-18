# Vault Gui

## Guide to Running Locally

1. Install Docker Desktop
2. Setup `development-stack` and `hasura-console` repos locally
3. Setup Doppler using the
   [doppler setup document](https://vana.slab.com/posts/doppler-setup-71xn4xeu)
4. Run `yarn install`
5. Run the reset script to setup all local Docker infra: `./scripts/reset-vault-gui-completely-including-data`
   OR run the container with `./scripts/dc-start-vault-gui`
7. Visit localhost:5000

## Linting

```
# Lint
yarn run lint

# Prettier (detect)
yarn run prettier

# Prettier (fix)
yarn run prettier:write
```

## Testing

```
# Cypress (windowed)
yarn run e2e

# Cypress (headless)
yarn run e2e:headless

# Jest (unit)
yarn run test
```

## Debugging Local Environment

If your local environment is not working as expected, the first thing you should
try is clearing all the cached data.

1. Clear the cookies for the page.

   1. Click on the (i) to the left of the url.
   2. Click on "Cookies".
   3. Click "Remove".
   4. Click done.

2. Clear local storage.

   1. Open chrome dev tools.
   2. Click "Application".
   3. Click the arrow to the left of the "Local Storage" field.
   4. Right click on the URL of the site and click "Clear".

3. Clear IndexedDB.

   1. Open chrome dev tools.
   2. Click "Application".
   3. Click the arrow to the left of the "IndexedDB" field.
   4. Click the arrow to the left of all the sub-entries.
   5. Right click on each entry and click "Clear".

4. Hard refresh the page.

   1. Right-click (or click-and-hold) the refresh button.
   2. Click "Empty Cache and Hard Reload".

# 🌐 Environments

## Development

[development-vault.vana.com](http://development-vault.vana.com/)

## Staging

[staging-vault.vana.com](http://staging-vault.vana.com/)

## Production

[vault.vana.com](http://vault.vana.com/)

# 🕸 Web Framework

- NextJS: `12.2.x`
- React: `18.2.x`

# 🧪 Testing

## Cypress

This allows us to write **e2e** tests quickly and with joy. It has lots of stuff
out of the box and allows _real-user-like testing_

## Jest

Quite simply jest is a **unit-tester** that has lots of support and is the #1
app used by most large companies. It also has 1st class integration with
`nextjs` so this was an easy choice.

# 🤖 CI/CD

We are currently using github actions to check our code before it&#39;s deployed
to our various vercel envs

These &quot;actions&quot; are also run locally as **pre-commit checks** w/
`Husky`

### Linter

- ESLint
- Prettier

### Testing

- Cypress
  - We create 3 tester instances to spread out the tests for faster
    full-test-suite runs as we can now **parallelize** out test suite!!!
- Jest

### Version Tagging

We use `codacy/git-version@2.2.0` to create tags for every &quot;deployed&quot;
branch (i.e. `development, staging, production`) automatically

This allows use to save the **exact** state that a env is in and easily can
check if the same version is deployed everywhere

![](https://slabstatic.com/prod/uploads/0kl4r21x/posts/images/UlhUOPMnNNGqt4HKq5gtdkjJ.png)

👋 Please &quot;tag&quot; your commits correctly in order for versions to be
properly incremented (read below)

# 🏷 All About Tags

The tagging system follows the [semver standard](https://semver.org/):

```
MAJOR.MINOR.PATCH
```

In short

1. `MAJOR` version when you make incompatible API changes,
1. `MINOR` version when you add functionality in a backwards compatible manner,
   and
1. `PATCH` version when you make backwards compatible bug fixes.

If your commits contain **NO keywords** then a `PATCH` version will be applied

However, if you do want to increment more use the following:

- `feature: xxxx` : `MINOR`
- `breaking: xxx` : `MAJOR`

In case you want more clarification, here are some real examples, assuming we
are starting with `v1.2.0`

`PATCH`

```
commit AE23F2D
 - "Changed the blue to be more blue"
commit DD85FAC
 - "Fixed spacing between letters"
commit 3A6D13E
 - "Added Copy"

// Version is now v1.2.1
```

`MINOR`

```
commit AE23F2D
 - "feature: added a whole new button". <<<<<<<<< look at the prefix here
commit DD85FAC
 - "some stupid fix"
commit 3A6D13E
 - "another driveby change"

// Version is now v1.3.0
```

`MAJOR`

```
commit AE23F2D
 - "feature: added a whole new button". <<<<<<<<< look at the "smaller" prefix here
commit DD85FAC
 - "some stupid fix"
commit 3A6D13E
 - "breaking: every api call requires a pizzaID number" <<< and look here

// Version is now v2.0.0
// This one is tricky b/c it contains "two" keywords.
// Our system just picks the LARGEST keyword
```

# 📘 Further Reading

[vault-gui design doc](https://vana.slab.com/posts/vault-gui-bgtyeo0m)
