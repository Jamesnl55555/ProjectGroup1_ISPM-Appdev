<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
     public function addProduct(){
        return view('addproduct');
    }
    
    public function addItem(){
        $validatedData = request()->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
            // 'file' => 'required|image',
        ]);
        $overall = $validatedData['quantity'] * $validatedData['price'];
        // $filePath = request()->file('file')->store('public/images');
        $product = Product::create([
            'name' => $validatedData['name'],
            'quantity' => $validatedData['quantity'],
            'price_per_piece' => $validatedData['price'],
            'overall_price' => $overall
            // 'file_path' => $filePath,
        ]);
        $product = Product::all();
        return redirect()->route('home')->with('product', $product);
    }
    public function updateItemInc($id)
    {
        $validatedData = request()->validate([
            'quantity' => 'sometimes|required|integer',
        ]);
        $item = Product::find($id);
        $i = $validatedData['quantity'] + 1;
        $item->quantity = $i;
        $item->overall_price = $i * $item->price_per_piece;
        $item->save();
        return redirect()->route('home')->with('success', 'Item updated successfully.');
    }
    public function updateItemDec($id)
    {
        $validatedData = request()->validate([
            'quantity' => 'sometimes|required|integer',
        ]);
        $item = Product::find($id);
        $i = $validatedData['quantity'] - 1;
        $item->quantity = $i;
        $item->overall_price = $i * $item->price_per_piece;
        $item->save();
        return redirect()->route('home')->with('success', 'Item updated successfully.');
    }
    public function editProduct($id){
        $product = Product::find($id);
        return view('editproduct', compact('product'));

    }

    public function updateProduct($id){
        
        $validatedData = request()->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
            // 'file' => 'required|image',
        ]);
        $product = Product::findOrFail($id);
        $overall = $validatedData['quantity'] * $validatedData['price'];
        // $filePath = request()->file('file')->store('public/images');

        $product->update([
            'name' => $validatedData['name'],
            'quantity' => $validatedData['quantity'],
            'price_per_piece' => $validatedData['price'],
            'overall_price' => $overall
            // 'file_path' => $filePath,
        ]);
        
        return redirect()->route('home')->with('product', $product);
    }
    
    public function deleteItem($id)
    {
    $product = Product::findOrFail($id);    
    $product->delete();
    return redirect()->route('home')->with('success', 'Item deleted successfully.');
    }
}

