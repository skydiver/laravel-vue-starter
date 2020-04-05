<?php

Auth::routes([
    'register' => false,
    'reset' => false
]);

Route::get('/logout', function () {
    request()->session()->invalidate();
    return redirect()->route('login');
});

Route::get('auth/google', 'Auth\GoogleController@redirectToGoogle');
Route::get('auth/google/callback', 'Auth\GoogleController@handleGoogleCallback');

Route::get('/{any}', 'AppController@index')->where('any', '.*');
