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

        // $filePath = request()->file('file')->store('public/images');
        $product = Product::create([
            'name' => $validatedData['name'],
            'quantity' => $validatedData['quantity'],
            'price' => $validatedData['price'],
            // 'file_path' => $filePath,
        ]);
        $product = Product::all();
        return redirect()->route('home')->with('product', $product);
    }
    public function updateItem($id)
    {
        $validatedData = request()->validate([
            'name' => 'sometimes|required|string|max:255',
            'quantity' => 'sometimes|required|integer',
            'price' => 'sometimes|required|numeric|min:0',
            'file' => 'sometimes|required|image',
        ]);
    }
    
    public function deleteItem($id)
    {
        //
    }
}

