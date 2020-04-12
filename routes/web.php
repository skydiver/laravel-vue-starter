<?php

Auth::routes([
    'register' => false,
    'reset' => false
]);

Route::get('/logout', function () {
    request()->session()->invalidate();
    return redirect()->route('login');
});

Route::get('/{any}', 'AppController@index')->where('any', '.*');
