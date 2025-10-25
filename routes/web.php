<?php
require __DIR__.'/auth.php';

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\ExcelController;
use Illuminate\Foundation\Application;
use App\Models\Product;
use App\Models\Transaction;
use App\Models\ProductHistory;
use App\Models\UserHistory;
use App\Models\TransactionHistory;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')]);
});

Route::get('/dashboard', function (Request $request) {
    $user = $request->user()->load(['products']);
    $tRecords = Transaction::latest()->take(50)->get();
    $tHistory = TransactionHistory::latest()->take(50)->get();
    $pHistory = ProductHistory::latest()->take(50)->get();
    $uHistory = UserHistory::latest()->take(50)->get();
    
    return Inertia::render('Dashboard', ['user' => $user, 'tHistory' => $tHistory, 'tRecords'=> $tRecords, 'pHistory' => $pHistory, 'uHistory' => $uHistory]);
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
    Route::get('/user/{id}', function($id) {
        $transaction = Transaction::find($id); 
        return Inertia::render('TransactionDetails', ['transaction' => $transaction]);
    })->name('transactiondetails');
    Route::put('/update-item-inc/{id}', [InventoryController::class, 'updateItemInc'])->name('update-iteminc');
    Route::put('/update-item-dec/{id}', [InventoryController::class, 'updateItemDec'])->name('update-itemdec');
    Route::get('/edit-product/{id}', [InventoryController::class, 'editProduct'])->name('edit-product');
    Route::post('/update-product/{id}', [InventoryController::class, 'updateProduct'])->name('update-product');
    Route::post('/edit-item/{id}', [InventoryController::class, 'editItem'])->name('edit-item');
    Route::post('/delete-item/{id}', [InventoryController::class, 'deleteItem'])->name('delete-item');
    Route::post('/delete-phistory/{id}', [InventoryController::class, 'deletePHistory'])->name('delete-phistory');
    Route::post('/add-capital', [InventoryController::class, 'addCapital'])->name('add-capital');
    Route::post('/checkout', [InventoryController::class, 'checkout'])->name('checkout');
    Route::post('/import', [ExcelController::class, 'import'])->name('import');

});

require __DIR__.'/auth.php';
