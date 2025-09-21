<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\InventoryController;
use Illuminate\Foundation\Application;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    $product = Product::all();
    return view('inventory', compact('product'));
})->name('home');
Route::get('/addproduct', [InventoryController::class, 'addProduct'])->name('addproduct');
Route::post('/add-item', [InventoryController::class, 'addItem'])->name('add-item');
Route::get('/edit-product/{id}', [InventoryController::class, 'editProduct'])->name('edit-product');
Route::put('/update-product/{id}', [InventoryController::class, 'updateProduct'])->name('update-product');
Route::put('/update-item-inc/{id}', [InventoryController::class, 'updateItemInc'])->name('update-item-inc');
Route::put('/update-item-dec/{id}', [InventoryController::class, 'updateItemDec'])->name('update-item-dec');
Route::delete('/delete-item/{id}', [InventoryController::class, 'deleteItem'])->name('delete-item');

// Below is the original '/' route code commented out, it has the login and register
// Route::get('/', function () {
    
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register')]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
