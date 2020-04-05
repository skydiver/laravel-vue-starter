# laravel-vue-starter
> Laravel + Vue boilerplate

## Features
* Laravel 7
* Vue
* Vue Router
* VueX
* TailwindCSS 1.2
* ESLint + Prettier
* Hot Reload ready

## Development
1. `npm run dev`
2. open http://localhost:3000/

## Notes
* VueX store located at: `resources/js/store/index.js`
* Demo component located at: `resources/js/components/DemoComponent.vue`
* Use `resources/sass/custom.scss` for custom styles
* Images placed on `resources/assets/images` will be copied to `public/images`
* To enable Laravel authentication, open `app/Http/Controllers/AppController.php` and uncomment following line: `$this->middleware('auth');`

## Credits
* Auth views using TailwindCSS made by [Laravel Frontend Presets](https://github.com/laravel-frontend-presets/tailwindcss)