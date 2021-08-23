# Getting Started

```git
git submodule add -b main https://gitlab.com/the-bootcamp-project/boilerplates/web-application.git view
git submodule update --init
```

```git
git submodule
git submodule deinit -f -- web-application
rm -rf .git/modules/web-application
git rm -f web-application
```