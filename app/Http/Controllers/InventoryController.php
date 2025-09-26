<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Capital;
use App\Models\User;

class InventoryController extends Controller
{
    public function addItem(Request $request){
        $validatedData = request()->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
            'category' => 'nullable|string|max:255',
            'is_archived' => 'required|boolean',
            // 'file' => 'required|image',
        ]);
        $userid = $request->user()->id;
        if ($product = Product::where('name', $validatedData['name'])->first()) {
            return redirect()->back()->withErrors(['name' => 'Product with this name already exists.']);
        }
        // $filePath = request()->file('file')->store('public/images');
        $product = Product::create([
            'name' => $validatedData['name'],
            'quantity' => $validatedData['quantity'],
            'price' => $validatedData['price'],
            'category' => $validatedData['category'],
            'is_archived' => $validatedData['is_archived'],
            'user_id' => $userid,
            // 'file_path' => $filePath,
        ]);
        return redirect()->route('dashboard');
    }
    public function updateItemInc($id)
    {
        $validatedData = request()->validate([
            'quantity' => 'sometimes|required|integer',
        ]);
        $item = Product::find($id);
        $i = $validatedData['quantity'] + 1;
        $item->quantity = $i;
        $item->save();
        return redirect()->route('dashboard')->with('success', 'Item updated successfully.');
    }
    public function updateItemDec($id)
    {
        $validatedData = request()->validate([
            'quantity' => 'sometimes|required|integer',
        ]);
        $item = Product::find($id);
        $i = $validatedData['quantity'] - 1;
        $item->quantity = $i;
        $item->save();
        return redirect()->route('dashboard')->with('success', 'Item updated successfully.');
    }
    public function editProduct($id){
        $product = Product::find($id);
        return view('editproduct', compact('product'));
    }

    public function updateProduct(Request $request, $id){
        
        $userid = $request->user()->id;
        $validatedData = request()->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
            'category' => 'nullable|string|max:255',
            'is_archived' => 'required|boolean',

            // 'file' => 'required|image',
        ]);
        $product = Product::findOrFail($id);
        // $filePath = request()->file('file')->store('public/images');

        $product->update([
            'name' => $validatedData['name'],
            'quantity' => $validatedData['quantity'],
            'price' => $validatedData['price'],
            'category' => $validatedData['category'],
            'user_id' => $userid,
            'is_archived' => $validatedData['is_archived'],

            // 'file_path' => $filePath,
        ]);
        
        return redirect()->route('dashboard')->with('product', $product);
    }
    
    public function deleteItem($id)
    {
    $product = Product::findOrFail($id);    
    $product->delete();
    return redirect()->route('dashboard')->with('success', 'Item deleted successfully.');
    }

    public function addCapital(Request $request){
        $validatedData = $request->validate([
            'amount' => 'required|numeric',
            'type' => 'required|string'            
        ]);
        $user = $request->user();
        $validatedData['amount'] = (float) $validatedData['amount'];
        $amount = $user->capital;

        if($validatedData['type'] == 'add'){
            $newAmount = $amount + $validatedData['amount'];
        } else if($validatedData['type'] == 'withdraw'){
            $newAmount = $amount - $validatedData['amount'];
        } else{
            $newAmount = $validatedData['amount'];
        }

        $user->update(['capital' => $newAmount]);

        return redirect()->route('dashboard')->with('success', 'Capital added successfully.');
    }
}

