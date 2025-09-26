<?php
require __DIR__.'/auth.php';

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\InventoryController;
use Illuminate\Foundation\Application;
use App\Models\Product;
use App\Models\User;
use App\Models\Transaction;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')]);
});

Route::get('/dashboard', function (Request $request) {
    $user = $request->user()->load(['products', 'transactions', 'userHistories']);
    $transaction = Transaction::latest()->take(50)->get()->load(['transactionHistories']);
    $product = Product::latest()->take(50)->get()->load(['productHistories']);
    
    return Inertia::render('Dashboard', ['user' => $user, 'transaction' => $transaction, 'product' => $product]);
    })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/home', function () {
        $products = Product::all();
        return Inertia::render('Home', ['products' => $products]);
    })->name('home');
  });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/add-item', [InventoryController::class, 'addItem'])->name('add-item');
    Route::put('/update-item-inc/{id}', [InventoryController::class, 'updateItemInc'])->name('update-iteminc');
    Route::put('/update-item-dec/{id}', [InventoryController::class, 'updateItemDec'])->name('update-itemdec');
    Route::get('/edit-product/{id}', [InventoryController::class, 'editProduct'])->name('edit-product');
    Route::post('/update-product/{id}', [InventoryController::class, 'updateProduct'])->name('update-product');
    Route::post('/edit-item/{id}', [InventoryController::class, 'editItem'])->name('edit-item');
    Route::post('/delete-item/{id}', [InventoryController::class, 'deleteItem'])->name('delete-item');
    Route::post('/add-capital', [InventoryController::class, 'addCapital'])->name('add-capital');

});

require __DIR__.'/auth.php';
