<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="{{route('update-product', $product->id)}}">
        @csrf
        @method('PUT')
        <input type="string" name="name" value="{{$product->name}}" required>
        <input type="number" name="quantity" value="{{$product->quantity}}" required>
        <input type="number" name="price" value="{{$product->price_per_piece}}" required>
        <input type="string" name="category" value="{{$product->category}}" required>
        <input type="select" name="is_archived" value="{{$product->is_archived}}" required>
            <option value="0" {{ $product->is_archived == 0 ? 'selected' : '' }}>Not Archived</option>
            <option value="1" {{ $product->is_archived == 1 ? 'selected' : '' }}>Archived</option>
        </input>    
        
        <!-- <input type="file" name="picture" accept="image/*" required> -->
        <button type="submit">Edit Product</button>
        <button type="reset">Clear</button>
    </form>
</body>
</html>